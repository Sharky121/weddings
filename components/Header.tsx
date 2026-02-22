"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Об Усадьбе", href: "/about" },
  { label: "Гостевые дома", href: "/guest-houses" },
  { label: "Свадьба в Усадьбе", href: "/wedding" },
  { label: "Венчание", href: "/wedding-ceremony" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Мероприятия", href: "/events" },
  { label: "Кейтеринг", href: "/catering" },
  { label: "Фотосессии", href: "/photo-sessions" },
  { label: "Прайс-Лист", href: "/price" },
  { label: "Контакты", href: "/contacts" },
] as const;

const SCROLL_THRESHOLD = 80;

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (isActive: boolean) =>
    `whitespace-nowrap font-medium transition-colors hover:text-brand-accent ${
      isActive ? "font-semibold text-brand-accent" : "text-brand-dark"
    }`;

  const linkRowClass =
    "flex items-center justify-center gap-x-5 py-0.5 text-xs uppercase tracking-wider sm:gap-x-8 sm:text-sm";

  const navStyle = { fontFamily: "var(--font-kurale)" };

  return (
    <header className="sticky top-0 z-50 border-b border-brand-muted/40 bg-white">
      <div className="relative mx-auto max-w-7xl">
        {/* Расширенный хедер (логотип + меню в 2 колонки) */}
        <div
          className={`mx-auto flex items-center justify-between gap-0 px-4 py-4 sm:px-6 lg:px-8 lg:py-5 ${
            isScrolled ? "pointer-events-none absolute inset-0 opacity-0" : ""
          }`}
        >
          <div className="flex flex-1 basis-0 justify-end pr-2 sm:pr-3">
            <nav
              className="flex flex-col items-center gap-y-1 sm:gap-y-2"
              aria-label="Основное меню"
              style={navStyle}
            >
              <div className={linkRowClass}>
                {navItems.slice(0, 3).map(({ label, href }) => (
                  <Link key={href} href={href} className={linkClass(pathname === href)}>
                    {label}
                  </Link>
                ))}
              </div>
              <div className={linkRowClass}>
                {navItems.slice(3, 5).map(({ label, href }) => (
                  <Link key={href} href={href} className={linkClass(pathname === href)}>
                    {label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
          <Link href="/" className="flex shrink-0 text-brand-dark hover:text-brand-dark/80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo_ushmor_white.png"
              alt="Усадьба Ушмор"
              className="h-[140px] w-auto invert"
            />
          </Link>
          <div className="flex flex-1 basis-0 justify-start pl-2 sm:pl-3">
            <nav
              className="flex flex-col items-center gap-y-1 sm:gap-y-2"
              aria-label="Основное меню"
              style={navStyle}
            >
              <div className={linkRowClass}>
                {navItems.slice(5, 8).map(({ label, href }) => (
                  <Link key={href} href={href} className={linkClass(pathname === href)}>
                    {label}
                  </Link>
                ))}
              </div>
              <div className={linkRowClass}>
                {navItems.slice(8, 10).map(({ label, href }) => (
                  <Link key={href} href={href} className={linkClass(pathname === href)}>
                    {label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Компактный хедер (одна строка меню без логотипа) */}
        <div
          className={`flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 lg:px-8 ${
            !isScrolled ? "pointer-events-none absolute inset-0 opacity-0" : ""
          }`}
        >
          <nav
            className="flex flex-nowrap items-center justify-center gap-x-3 overflow-x-auto py-1 text-[10px] uppercase tracking-wider sm:gap-x-4 sm:text-xs lg:gap-x-5"
            aria-label="Основное меню"
            style={navStyle}
          >
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`shrink-0 ${linkClass(pathname === href)}`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
