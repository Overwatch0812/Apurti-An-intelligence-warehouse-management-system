export const mockStocks = [
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "GOOGL", name: "Alphabet Inc." },
  { symbol: "MSFT", name: "Microsoft Corporation" },
  { symbol: "AMZN", name: "Amazon.com, Inc." },
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
