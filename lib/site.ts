export const SITE_NAME = "Усадьба Ушмор";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://xn------5cdacdecesgo3h4a6abi1bg9h6cj.xn--p1ai");

export const SITE_DEFAULT_DESCRIPTION =
  "Усадьба Ушмор — уникальное место для проведения свадьбы. Старинный парк, гостевые дома, изысканная природа Мещеры. Рязанская область.";
