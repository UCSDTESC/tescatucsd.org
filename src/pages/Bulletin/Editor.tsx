import "./editor-styles.css";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";

export default function Editor({ content }: { content: string }) {
  const extensions = [
    TextStyle.configure(),
    TextAlign.configure({
      types: ["heading", "paragraph"]
    }),
    StarterKit,
    Image.configure({
      HTMLAttributes: {
        class: "w-1/2 aspect-square object-contain ml-2"
      },
      inline: true
    }),

    BulletList.configure({
      HTMLAttributes: {
        class: "list-disc"
      }
    }),
    OrderedList.configure({
      HTMLAttributes: {
        class: "list-decimal"
      }
    })
  ];
  return (
    <EditorProvider
      extensions={extensions}
      editable={false}
      content={content}
      editorProps={{
        attributes: {
          class:
            "border-black border rounded-lg p-3  focus:outline-none min-h-[70vh] overflow-y-scroll"
        }
      }}
    ></EditorProvider>
  );
}
