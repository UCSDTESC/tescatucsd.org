import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent, type ReactNode } from "react";
import "./stfChat.css";

/**
 * Chat bubble for the Student Travel Fund page.
 *
 * Questions go to the "STF Chat" Google Apps Script web app (its URL is in
 * VITE_STF_CHAT_URL). That script answers only from the STF FAQ. When it can't
 * answer, it says to email contact@tescatucsd.org, and this shows an email button.
 * If VITE_STF_CHAT_URL isn't set, the bubble doesn't show at all.
 */

const CHAT_URL: string | undefined = import.meta.env.VITE_STF_CHAT_URL;
const CONTACT_EMAIL = "contact@tescatucsd.org";
const MAX_CHARS = 600; // same limit as the server
const STORAGE_KEY = "stf-chat-messages";
const SESSION_KEY = "stf-chat-session";

type Message = {
  role: "user" | "assistant";
  content: string;
  sig?: string; // the server's signature on its own answers
  needsHuman?: boolean;
  local?: boolean; // written by this page (welcome / network error), never sent to the server
};

const WELCOME: Message = {
  role: "assistant",
  local: true,
  content:
    "Hi! I'm TESC's Student Travel Fund assistant. Ask me about applying, deadlines, receipts, or what STF covers.",
};

const SUGGESTIONS = [
  "How do I apply?",
  "How much can I get?",
  "What do I submit after my trip?",
  "Can I get funding for summer travel?",
];

const NETWORK_ERROR = `Sorry, I couldn't connect just now. Please try again, or email ${CONTACT_EMAIL}.`;

// Browser storage can be blocked (private windows, strict settings), so every use is wrapped.
function load<T>(store: () => Storage, key: string, fallback: T): T {
  try {
    const raw = store().getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function save(store: () => Storage, key: string, value: unknown) {
  try {
    store().setItem(key, JSON.stringify(value));
  } catch {
    /* not saved: fine */
  }
}

function sessionId(): string {
  let id = load<string>(() => localStorage, SESSION_KEY, "");
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    save(() => localStorage, SESSION_KEY, id);
  }
  return id;
}

/** Turns links and email addresses in plain text into clickable links (no HTML is injected). */
function linkify(text: string): ReactNode[] {
  const re = /(https?:\/\/[^\s<>"')]+[^\s<>"').,!?:;])|([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;
  const parts: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [match, url, email] = m;
    parts.push(
      url ? (
        <a key={m.index} href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      ) : (
        <a key={m.index} href={`mailto:${email}`}>
          {email}
        </a>
      ),
    );
    last = m.index + match.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function emailLink(question: string): string {
  const subject = encodeURIComponent("Student Travel Fund question");
  const body = encodeURIComponent(question ? `Hi TESC,\n\n${question}\n\nThanks,\n` : "Hi TESC,\n\n");
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

async function askServer(history: Message[]): Promise<Message> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);
  try {
    // text/plain keeps this a "simple" request, which Google Apps Script web apps accept from other sites.
    const res = await fetch(CHAT_URL as string, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        session: sessionId(),
        messages: history.filter((m) => !m.local).map(({ role, content, sig }) => ({ role, content, sig })),
      }),
      signal: controller.signal,
    });
    const data = await res.json();
    if (typeof data.reply !== "string") throw new Error("bad reply");
    return { role: "assistant", content: data.reply, sig: data.sig, needsHuman: !!data.needsHuman };
  } catch {
    return { role: "assistant", content: NETWORK_ERROR, needsHuman: true, local: true };
  } finally {
    clearTimeout(timer);
  }
}

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 3C6.5 3 2 6.8 2 11.5c0 2.3 1.1 4.4 2.9 5.9-.2 1.4-.8 2.7-1.8 3.7 2 0 3.8-.7 5.2-1.8 1.2.4 2.4.6 3.7.6 5.5 0 10-3.8 10-8.4S17.5 3 12 3Z"
    />
  </svg>
);
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path fill="currentColor" d="M6.4 5 5 6.4 10.6 12 5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4 17.6 5 12 10.6Z" />
  </svg>
);
const SendIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path fill="currentColor" d="M3 20.5 21 12 3 3.5v6.6l12 1.9-12 1.9Z" />
  </svg>
);

export default function StfChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => load(() => sessionStorage, STORAGE_KEY, [WELCOME]));
  const [draft, setDraft] = useState("");
  const [waiting, setWaiting] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => save(() => sessionStorage, STORAGE_KEY, messages), [messages]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, waiting, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  }, [draft]);

  if (!CHAT_URL) return null;

  const lastQuestion = [...messages].reverse().find((m) => m.role === "user")?.content || "";

  async function send(text: string) {
    const content = text.trim();
    if (!content || waiting || content.length > MAX_CHARS) return;
    const history: Message[] = [...messages, { role: "user", content }];
    setMessages(history);
    setDraft("");
    setWaiting(true);
    const answer = await askServer(history);
    setMessages((prev) => [...prev, answer]);
    setWaiting(false);
    inputRef.current?.focus();
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    send(draft);
  }

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      send(draft);
    }
  }

  function newChat() {
    setMessages([WELCOME]);
    setDraft("");
  }

  const onlyWelcome = messages.length === 1;
  const tooLong = draft.length > MAX_CHARS;

  return (
    <div className="stf-chat" onKeyDown={(e) => e.key === "Escape" && setOpen(false)}>
      {open && (
        <section className="stf-chat__panel" role="dialog" aria-label="Student Travel Fund chat assistant">
          <header className="stf-chat__header">
            <div>
              <h2>STF Assistant</h2>
              <p>Answers from the STF FAQ</p>
            </div>
            <div className="stf-chat__header-buttons">
              {!onlyWelcome && (
                <button type="button" className="stf-chat__text-button" onClick={newChat}>
                  New chat
                </button>
              )}
              <button type="button" className="stf-chat__icon-button" aria-label="Close chat" onClick={() => setOpen(false)}>
                <CloseIcon />
              </button>
            </div>
          </header>

          <div className="stf-chat__messages" ref={listRef} aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`stf-chat__row stf-chat__row--${m.role}`}>
                <div className={`stf-chat__bubble stf-chat__bubble--${m.role}`}>{linkify(m.content)}</div>
                {m.role === "assistant" && m.needsHuman && (
                  <a className="stf-chat__email-button" href={emailLink(lastQuestion)}>
                    Email {CONTACT_EMAIL}
                  </a>
                )}
              </div>
            ))}
            {waiting && (
              <div className="stf-chat__row stf-chat__row--assistant">
                <div className="stf-chat__bubble stf-chat__bubble--assistant stf-chat__typing" aria-label="The assistant is typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
            {onlyWelcome && !waiting && (
              <div className="stf-chat__suggestions">
                {SUGGESTIONS.map((s) => (
                  <button key={s} type="button" onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form className="stf-chat__form" onSubmit={onSubmit}>
            <textarea
              ref={inputRef}
              rows={1}
              value={draft}
              placeholder="Ask about the Student Travel Fund..."
              aria-label="Your question"
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={onKeyDown}
            />
            <button type="submit" className="stf-chat__send" aria-label="Send" disabled={!draft.trim() || waiting || tooLong}>
              <SendIcon />
            </button>
          </form>
          <p className="stf-chat__note">
            {tooLong ? (
              <span className="stf-chat__warn">
                Please keep it under {MAX_CHARS} characters ({draft.length} now).
              </span>
            ) : (
              <>
                Automated assistant: it can make mistakes and can't see your application. For anything else, email{" "}
                <a href={emailLink("")}>{CONTACT_EMAIL}</a>.
              </>
            )}
          </p>
        </section>
      )}

      <button
        type="button"
        className={`stf-chat__launcher ${open ? "stf-chat__launcher--open" : ""}`}
        aria-label={open ? "Close chat" : "Ask the Student Travel Fund assistant"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
        {!open && <span className="stf-chat__launcher-label">Questions?</span>}
      </button>
    </div>
  );
}
