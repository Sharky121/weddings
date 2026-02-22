import type { Metadata } from "next";
import { Forum, Kurale, Raleway } from "next/font/google";
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
