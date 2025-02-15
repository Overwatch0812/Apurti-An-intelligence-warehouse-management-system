export const mockStocks = [
  { symbol: "PP", name: "Printer Paper" },
  { symbol: "BP", name: "Ballpoint Pens" },
  { symbol: "PC", name: "Paper Clips" },
  { symbol: "SN", name: "Sticky Notes" },
  { symbol: "HS", name: "Hand Sanitizer" },
];

export const generateMockData = (symbol) => {
  const basePrice = Math.random() * 1000 + 100;
  const today = new Date();
  const data = [];

  for (let i = 30; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const price = basePrice + Math.random() * 50 - 25;
    data.push({
      date: date.toISOString().split("T")[0],
      price: Number.parseFloat(price.toFixed(2)),
    });
  }

  return data;
};

export const mockForecast = (data) => {
  const lastDate = new Date(data[data.length - 1].date);
  const lastPrice = data[data.length - 1].price;
  const forecast = [];

  for (let i = 1; i <= 7; i++) {
    const date = new Date(lastDate);
    date.setDate(date.getDate() + i);
    const price = lastPrice + (Math.random() - 0.5) * 20;
    forecast.push({
      date: date.toISOString().split("T")[0],
      price: Number.parseFloat(price.toFixed(2)),
    });
  }

  return forecast;
};
