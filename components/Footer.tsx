import Link from "next/link";

const navItems = [
  { label: "Об Усадьбе", href: "/about" },
  { label: "Гостевые дома", href: "/guest-houses" },
  { label: "Свадьба в Усадьбе", href: "/wedding" },
  { label: "Венчание", href: "/wedding-ceremony" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Мероприятия", href: "/events" },
  { label: "Кейтеринг", href: "/catering" },
  { label: "Фотосессии", href: "/photo-sessions" },
  { label: "Прайс-лист", href: "/price" },
  { label: "Контакты", href: "/contacts" },
] as const;

export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t border-brand-muted/50 bg-brand-light/90 py-12 sm:py-14"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Логотип и название */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-block text-brand-dark transition hover:text-brand-dark/80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo_ushmor_white.png"
                alt="Усадьба Ушмор"
                className="h-20 w-auto invert sm:h-24"
              />
            </Link>
            <p
              className="mt-3 max-w-xs text-xs text-brand-dark"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Премиальные свадьбы и мероприятия в сердце Мещеры. Рязанская
              область, Клепиковский район, д. Ушмор.
            </p>
          </div>

          {/* Навигация */}
          <div className="lg:col-span-4">
            <h3
              className="text-xs font-medium uppercase tracking-wider text-brand-dark/80"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Разделы
            </h3>
            <nav
              className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 sm:gap-x-8"
              aria-label="Навигация по сайту"
            >
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-brand-dark underline-offset-2 hover:text-brand-dark hover:underline"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Контакты */}
          <div className="lg:col-span-4">
            <h3
              className="text-xs font-medium uppercase tracking-wider text-brand-dark/80"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Контакты
            </h3>
            <ul
              className="mt-3 space-y-2 text-sm text-brand-dark"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              <li>
                <a
                  href="tel:+79106130022"
                  className="hover:text-brand-dark hover:underline"
                >
                  8 (910) 613-00-22
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@usadba-na-pre.ru"
                  className="hover:text-brand-dark hover:underline"
                >
                  info@usadba-na-pre.ru
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/usadba_na_pre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-dark hover:underline"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-muted/50 pt-8">
          <p
            className="text-center text-xs text-brand-dark/80"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            © {new Date().getFullYear()} Усадьба Ушмор. ООО «УК УШМОР».
          </p>
        </div>
      </div>
    </footer>
  );
}
