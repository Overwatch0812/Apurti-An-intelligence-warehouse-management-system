import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockStocks } from "@/lib/mockData";

export function StockSelector({ onSelectStock }) {
  return (
    <Select onValueChange={onSelectStock}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a stock" />
      </SelectTrigger>
      <SelectContent>
        {mockStocks.map((stock) => (
          <SelectItem key={stock.symbol} value={stock.symbol}>
            {stock.name} ({stock.symbol})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
