import React, { useState, useEffect } from "react";
import { StockChart } from "@/components/StockChart";
import { StockInfo } from "@/components/StockInfo";
import { StockSelector } from "@/components/StockSelector";
import { generateMockData, mockForecast } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const [selectedStock, setSelectedStock] = useState("AAPL");
  const [stockData, setStockData] = useState([]);
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const data = generateMockData(selectedStock);
    setStockData(data);
    setForecastData(mockForecast(data));
  }, [selectedStock]);

  const currentPrice = stockData[stockData.length - 1]?.price || 0;
  const previousPrice = stockData[stockData.length - 2]?.price || 0;
  const change = currentPrice - previousPrice;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Stock Forecast Dashboard</h1>
      <div className="mb-6">
        <StockSelector onSelectStock={setSelectedStock} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StockInfo
          symbol={selectedStock}
          currentPrice={currentPrice}
          change={change}
        />
        <Card>
          <CardHeader>
            <CardTitle>7-Day Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              ${forecastData[forecastData.length - 1]?.price.toFixed(2)}
            </p>
            <p className="text-sm text-muted-foreground">
              Estimated price in 7 days
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Forecast Change</CardTitle>
          </CardHeader>
          <CardContent>
            {(() => {
              const forecastChange =
                forecastData[forecastData.length - 1]?.price - currentPrice;
              const changeColor =
                forecastChange >= 0 ? "text-green-600" : "text-red-600";
              return (
                <>
                  <p className={`text-2xl font-bold ${changeColor}`}>
                    {forecastChange >= 0 ? "+" : ""}
                    {forecastChange.toFixed(2)}
                  </p>
                  <p className={`text-sm ${changeColor}`}>
                    ({((forecastChange / currentPrice) * 100).toFixed(2)}%)
                  </p>
                </>
              );
            })()}
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Stock Price Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <StockChart data={stockData} forecast={forecastData} />
        </CardContent>
      </Card>
    </div>
  );
}
