import type { AnchorHTMLAttributes } from "react";
import { scrollToHash } from "./motion";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & {
  /** The section to scroll to, for example "#events". */
  to: string;
  /** Runs just before scrolling (the phone menu uses it to close itself). */
  onNavigate?: () => void;
};

/** A link to a section of the homepage. It scrolls smoothly and lands below the pinned nav bar. */
export default function SectionLink({ to, onNavigate, children, ...rest }: Props) {
  return (
    <a
      href={to}
      {...rest}
      onClick={(e) => {
        e.preventDefault();
        onNavigate?.();
        scrollToHash(to);
      }}
    >
      {children}
    </a>
  );
}
