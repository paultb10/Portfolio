"use client";

import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const ringXRef = useRef(0);
  const ringYRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isCoarsePointer) {
      return;
    }

    setShouldRender(true);

    const handleMouseMove = (event: MouseEvent) => {
      mouseXRef.current = event.clientX;
      mouseYRef.current = event.clientY;
    };

    const handleInteractiveEnter = () => {
      ringRef.current?.classList.add("h-14", "w-14", "border-[var(--accent3)]");
      ringRef.current?.classList.remove("h-9", "w-9", "border-[var(--accent)]");
    };

    const handleInteractiveLeave = () => {
      ringRef.current?.classList.add("h-9", "w-9", "border-[var(--accent)]");
      ringRef.current?.classList.remove("h-14", "w-14", "border-[var(--accent3)]");
    };

    const handlePointerOver = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      if (event.target.closest("a, button")) {
        handleInteractiveEnter();
      }
    };

    const handlePointerOut = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      if (event.target.closest("a, button")) {
        handleInteractiveLeave();
      }
    };

    const animateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseXRef.current - 6}px, ${
          mouseYRef.current - 6
        }px)`;
      }

      ringXRef.current += (mouseXRef.current - ringXRef.current) * 0.14;
      ringYRef.current += (mouseYRef.current - ringYRef.current) * 0.14;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringXRef.current - 18}px, ${
          ringYRef.current - 18
        }px)`;
      }

      rafRef.current = requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handlePointerOver);
    document.addEventListener("mouseout", handlePointerOut);
    rafRef.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("mouseout", handlePointerOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-[var(--accent)] mix-blend-difference"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border border-[var(--accent)] mix-blend-difference transition-[height,width,border-color] duration-300"
        aria-hidden="true"
      />
    </>
  );
};

export default Cursor;
