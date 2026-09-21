"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/cn";

const LINKS = [
  { id: "how", href: "#how", label: "How it works" },
  { id: "compete", href: "#compete", label: "Green Cup" },
  { id: "rewards", href: "#rewards", label: "Rewards" },
  { id: "campus", href: "#campus", label: "For campuses" },
];

// every section id we watch (hero + final CTA clear the highlight)
const WATCH = ["top", "how", "compete", "rewards", "campus", "start"];

/** Marketing header: gains a shadow on scroll and highlights the section you're in. */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const id of WATCH) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-10 border-b pt-safe backdrop-blur-md transition-[box-shadow,background-color,border-color] duration-300",
        scrolled
          ? "border-line bg-bg/90 shadow-[0_10px_30px_-18px_rgba(58,16,16,.45)]"
          : "border-transparent bg-bg/70",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="GARBO home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={l.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-[.9375rem] font-medium transition-colors duration-200 after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100",
                  isActive
                    ? "text-ink after:scale-x-100 after:bg-brand"
                    : "text-soft after:scale-x-0 after:bg-tangerine",
                )}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <Button href={ROUTES.login} size="sm">
          Open the app
        </Button>
      </Container>
    </header>
  );
}
