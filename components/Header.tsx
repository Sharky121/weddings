"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSwipeable } from "react-swipeable";

const navItems = [
  { label: "Об Усадьбе", href: "/about" },
  { label: "Гостевой дом", href: "/guest-houses" },
  { label: "Свадьба в Усадьбе", href: "/wedding" },
  { label: "Венчание", href: "/wedding-ceremony" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Зимний сад", href: "/winter-garden" },
  { label: "Кейтеринг", href: "/catering" },
  { label: "Фотосессии", href: "/photo-sessions" },
  { label: "Прайс-Лист", href: "/price" },
  { label: "Контакты", href: "/contacts" },
] as const;

const SCROLL_THRESHOLD = 80;

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const swipeHandlers = useSwipeable({
    onSwipedRight: () => setIsMenuOpen(false),
    delta: 50,
    trackTouch: true,
    trackMouse: false,
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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
        {/* Мобильная/планшетная шапка: слоган + гамбургер (до lg) */}
        <div className="flex items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:hidden">
          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center justify-center px-2 text-center text-brand-dark hover:text-brand-dark/80"
          >
            <span className="max-w-[280px] text-base font-semibold leading-tight text-brand-dark/90 sm:text-lg" style={navStyle}>
              Премиальные свадьбы в сердце Мещеры. Изысканность и роскошь на лоне природы.
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((o) => !o)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-brand-dark transition hover:bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-muted"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <span className="sr-only">{isMenuOpen ? "Закрыть меню" : "Открыть меню"}</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Мобильное меню (оверлей + панель) */}
        <div
          id="mobile-menu"
          className={`fixed inset-0 z-40 lg:hidden ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
          aria-hidden={!isMenuOpen}
        >
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
            onClick={() => setIsMenuOpen(false)}
            aria-hidden
          />
          <div
            className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-xl transition-transform duration-200 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            {...swipeHandlers}
          >
            <div className="flex items-center justify-between border-b border-brand-muted/40 px-4 py-3">
              <span className="text-sm font-medium uppercase tracking-wider text-brand-dark/80" style={navStyle}>
                Меню
              </span>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-dark transition hover:bg-brand-light"
                aria-label="Закрыть меню"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav
              className="flex-1 overflow-y-auto px-4 py-6"
              aria-label="Основное меню"
              style={navStyle}
            >
              <ul className="space-y-1">
                {navItems.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block rounded-lg px-3 py-2.5 text-sm uppercase tracking-wider ${linkClass(pathname === href)}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div
              className="border-t border-brand-muted/40 px-4 py-4"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              <a
                href="tel:+79106130022"
                className="block py-2 text-base font-medium text-brand-dark hover:text-brand-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                8 (910) 613-00-22
              </a>
              <a
                href="mailto:info@usadba-na-pre.ru"
                className="block py-1.5 text-sm text-brand-dark/90 hover:text-brand-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                info@usadba-na-pre.ru
              </a>
              <a
                href="https://t.me/+79155969524"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1.5 text-sm text-brand-dark/90 hover:text-brand-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Десктоп: расширенный хедер (текст + лого слева, меню справа) */}
        <div
          className={`mx-auto hidden items-center justify-between gap-4 px-4 py-4 lg:flex lg:px-8 lg:py-5 ${
            isScrolled ? "pointer-events-none absolute inset-0 opacity-0" : ""
          }`}
        >
          <Link
            href="/"
            className="flex shrink-0 items-center justify-start text-left text-brand-dark hover:text-brand-dark/80"
          >
            <span className="max-w-[280px] shrink-0 text-left text-base font-semibold leading-tight text-brand-dark/90 sm:text-lg" style={navStyle}>
              Премиальные свадьбы в сердце Мещеры. Изысканность и роскошь на лоне природы.
            </span>
          </Link>
          <nav
            className="flex flex-1 flex-wrap items-center justify-end gap-x-5 gap-y-1 py-0.5 sm:gap-x-8"
            aria-label="Основное меню"
            style={navStyle}
          >
            <div className={linkRowClass}>
              {navItems.slice(0, 5).map(({ label, href }) => (
                <Link key={href} href={href} className={linkClass(pathname === href)}>
                  {label}
                </Link>
              ))}
            </div>
            <div className={linkRowClass}>
              {navItems.slice(5, 10).map(({ label, href }) => (
                <Link key={href} href={href} className={linkClass(pathname === href)}>
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Десктоп: компактный хедер при скролле */}
        <div
          className={`hidden items-center justify-between gap-6 px-4 py-3 lg:flex lg:px-8 ${
            !isScrolled ? "pointer-events-none absolute inset-0 opacity-0" : ""
          }`}
        >
          <div className="w-10 shrink-0" aria-hidden />
          <nav
            className="flex flex-1 flex-nowrap items-center justify-center gap-x-5 py-1 text-xs uppercase tracking-wider"
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
          <div className="w-[calc(theme(spacing.10)+theme(spacing.6))] shrink-0" aria-hidden />
        </div>
      </div>
    </header>
  );
}
