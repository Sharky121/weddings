"use client";

const DESTINATION = "55.180429,40.092341"; // деревня Ушмор

const yandexMapsRouteUrl = (fromLat: number, fromLon: number) =>
  `https://yandex.ru/maps/?rtext=${fromLat}%2C${fromLon}~${DESTINATION}`;

const yandexMapsDestinationOnlyUrl = `https://yandex.ru/maps/?rtext=${DESTINATION}`;

export function BuildRouteButton() {
  const handleClick = () => {
    if (!navigator.geolocation) {
      window.open(yandexMapsDestinationOnlyUrl, "_blank", "noopener,noreferrer");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        window.open(yandexMapsRouteUrl(latitude, longitude), "_blank", "noopener,noreferrer");
      },
      () => {
        window.open(yandexMapsDestinationOnlyUrl, "_blank", "noopener,noreferrer");
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-block rounded-lg border-2 border-brand-dark bg-white px-4 py-2 text-sm font-medium text-brand-dark transition hover:bg-brand-light"
    >
      Построить маршрут
    </button>
  );
}
