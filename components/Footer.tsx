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
      className="relative z-10 border-t border-brand-muted/50 bg-brand-light/90 py-8 sm:py-10 lg:py-14"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 text-center sm:gap-10 lg:grid-cols-12 lg:gap-8 lg:text-left">
          {/* Логотип и название — мобила/планшет: по центру; десктоп: слева */}
          <div className="flex flex-col items-center lg:col-span-4 lg:items-start">
            <Link
              href="/"
              className="inline-block text-brand-dark transition hover:text-brand-dark/80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo_ushmor_white.png"
                alt="Усадьба Ушмор"
                className="h-24 w-auto invert sm:h-28 lg:h-20 xl:h-24"
              />
            </Link>
            <p
              className="mt-3 max-w-sm text-xs leading-relaxed text-brand-dark sm:mt-4 sm:text-sm lg:mt-2 lg:max-w-xs lg:text-[11px] lg:leading-snug"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Премиальные свадьбы и мероприятия в сердце Мещеры. Рязанская
              область, Клепиковский район, д. Ушмор.
            </p>
          </div>

          {/* Навигация — только на десктопе */}
          <div className="hidden flex-col items-center lg:col-span-4 lg:flex lg:items-start">
            <h3
              className="text-[10px] font-medium uppercase tracking-wider text-brand-dark/80 sm:text-xs"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Разделы
            </h3>
            <nav
              className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 sm:gap-x-6 lg:grid lg:grid-cols-2 lg:justify-start lg:gap-x-6 lg:gap-y-1 xl:gap-x-8"
              aria-label="Навигация по сайту"
            >
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs text-brand-dark underline-offset-2 hover:text-brand-dark hover:underline sm:text-sm"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Контакты — мобила/планшет: по центру; десктоп: слева */}
          <div className="flex flex-col items-center lg:col-span-4 lg:items-start">
            <h3
              className="text-xs font-medium uppercase tracking-wider text-brand-dark/80 sm:text-sm"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Контакты
            </h3>
            <ul
              className="mt-3 flex flex-col items-center gap-1 text-sm text-brand-dark lg:items-start lg:gap-0 lg:space-y-2"
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

        <div className="mt-8 border-t border-brand-muted/50 pt-6 sm:mt-10 sm:pt-8 lg:mt-10 lg:pt-8">
          <p
            className="text-center text-xs text-brand-dark/80 sm:text-sm"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            © {new Date().getFullYear()} Усадьба Ушмор. ООО «УК УШМОР».
          </p>
        </div>
      </div>
    </footer>
  );
}
