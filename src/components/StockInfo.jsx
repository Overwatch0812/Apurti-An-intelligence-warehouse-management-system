import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StockInfo({ symbol, currentPrice, change }) {
  const changeColor = change >= 0 ? "text-green-600" : "text-red-600";

  return (
    <Card>
      <CardHeader>
        <CardTitle>{symbol}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">${currentPrice.toFixed(2)}</p>
        <p className={`text-sm ${changeColor}`}>
          {change >= 0 ? "+" : ""}
          {change.toFixed(2)} (
          {((change / (currentPrice - change)) * 100).toFixed(2)}%)
        </p>
      </CardContent>
    </Card>
  );
}
