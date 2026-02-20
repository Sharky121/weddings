export const metadata = {
  title: "Прайс-Лист — Усадьба Ушмор",
  description: "Прайс-лист услуг усадьбы",
};

const priceRows = [
  {
    name: "Аренда Усадьбы Ушмор под мероприятие (Аренда с 18.00 вечера накануне мероприятия и до 6.00 утра следующего дня, после мероприятия)",
    price: "450 000Р/ мероприятие",
    rowSpan: 1,
  },
  {
    name: "Аренда Зимнего Сада Графского Дома",
    price: null,
    rowSpan: 1,
  },
  {
    name: "Аренда гостевого дома (Размещение до 12 гостей)",
    price: "150 000Р/ сутки",
    rowSpan: 1,
  },
];

export default function PricePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <h1
        className="mb-8 text-3xl font-normal tracking-wide text-stone-800 sm:text-4xl"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        Прайс-Лист
      </h1>
      <div className="overflow-x-auto rounded-lg border border-stone-200 bg-white">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th
                className="border-b border-r border-stone-200 bg-white px-4 py-3 text-left font-semibold text-stone-900"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Наименование услуги
              </th>
              <th
                className="border-b border-stone-200 bg-white px-4 py-3 text-left font-semibold text-stone-900"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Стоимость
              </th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row, index) => (
              <tr key={index}>
                <td className="border-b border-r border-stone-200 px-4 py-3 align-top text-stone-800">
                  {row.name}
                </td>
                <td className="whitespace-nowrap border-b border-stone-200 px-4 py-3 text-left align-top text-stone-800">
                  {row.price ?? "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
