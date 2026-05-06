"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const [opacity, setOpacity] = useState(1);
  const [displayedChildren, setDisplayedChildren] =
    useState<React.ReactNode>(children);

  useEffect(() => {
    if (pathname === prevPathname.current) {
      setDisplayedChildren(children);
      return;
    }

    prevPathname.current = pathname;

    // Instant scroll to top before fade-in
    window.scrollTo(0, 0);

    // Start with opacity 0 and fade in
    setOpacity(0);
    setDisplayedChildren(children);

    // Use rAF to ensure the opacity:0 frame paints before transitioning
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setOpacity(1);
      });
    });
  }, [pathname, children]);

  return (
    <div
      style={{
        opacity,
        transition: "opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {displayedChildren}
    </div>
  );
}
