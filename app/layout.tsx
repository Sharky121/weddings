import type { Metadata } from "next";
import { Forum, Kurale, Raleway } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const kurale = Kurale({
  variable: "--font-kurale",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400"],
});

const YANDEX_METRIKA_ID = 114164200;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Премиальные свадьбы в сердце Мещеры`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DEFAULT_DESCRIPTION,
  keywords: [
    "усадьба ушмор",
    "свадьба рязанская область",
    "свадьба мещера",
    "аренда усадьбы под свадьбу",
    "венчание",
    "кейтеринг",
    "фотосессия усадьба",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Премиальные свадьбы в сердце Мещеры`,
    description: SITE_DEFAULT_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Премиальные свадьбы в сердце Мещеры`,
    description: SITE_DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [{ url: "/favicon.ico?v=2", type: "image/x-icon" }],
    apple: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: SITE_NAME,
  description: SITE_DEFAULT_DESCRIPTION,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Рязанская область",
    addressLocality: "Клепиковский район",
    streetAddress: "д. Ушмор",
  },
  telephone: "+79106130022",
  email: "info@usadba-na-pre.ru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${raleway.variable} ${kurale.variable} ${forum.variable} flex min-h-screen flex-col antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}','ym');

            ym(${YANDEX_METRIKA_ID}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
