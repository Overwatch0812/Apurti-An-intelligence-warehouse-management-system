import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const WarehouseForm = () => {
  const [formData, setFormData] = useState({
    warehouseName: "",
    totalArea: "",
    storageCapacity: "",
    numberOfSections: "",
    temperatureRange: "",
    humidityRange: "",
    specialStorage: "",
    operatingHours: "",
    staffCount: "",
    securityLevel: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your AI agent
    console.log("Warehouse parameters:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Warehouse Configuration</CardTitle>
        <CardDescription>
          Enter warehouse parameters to initialize the AI management system
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="warehouseName">Warehouse Name</Label>
              <Input
                id="warehouseName"
                name="warehouseName"
                value={formData.warehouseName}
                onChange={handleChange}
                placeholder="Enter warehouse name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="totalArea">Total Area (sq ft)</Label>
              <Input
                id="totalArea"
                name="totalArea"
                type="number"
                value={formData.totalArea}
                onChange={handleChange}
                placeholder="Enter total area"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="storageCapacity">
                Storage Capacity (cubic ft)
              </Label>
              <Input
                id="storageCapacity"
                name="storageCapacity"
                type="number"
                value={formData.storageCapacity}
                onChange={handleChange}
                placeholder="Enter storage capacity"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="numberOfSections">Number of Sections</Label>
              <Input
                id="numberOfSections"
                name="numberOfSections"
                type="number"
                value={formData.numberOfSections}
                onChange={handleChange}
                placeholder="Enter number of sections"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="temperatureRange">Temperature Range (°C)</Label>
              <Input
                id="temperatureRange"
                name="temperatureRange"
                value={formData.temperatureRange}
                onChange={handleChange}
                placeholder="e.g., 15-25"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="humidityRange">Humidity Range (%)</Label>
              <Input
                id="humidityRange"
                name="humidityRange"
                value={formData.humidityRange}
                onChange={handleChange}
                placeholder="e.g., 40-60"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialStorage">
                Special Storage Requirements
              </Label>
              <Input
                id="specialStorage"
                name="specialStorage"
                value={formData.specialStorage}
                onChange={handleChange}
                placeholder="e.g., Hazardous materials, Cold storage"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="operatingHours">Operating Hours</Label>
              <Input
                id="operatingHours"
                name="operatingHours"
                value={formData.operatingHours}
                onChange={handleChange}
                placeholder="e.g., 8:00-20:00"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="staffCount">Staff Count</Label>
              <Input
                id="staffCount"
                name="staffCount"
                type="number"
                value={formData.staffCount}
                onChange={handleChange}
                placeholder="Enter total staff count"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="securityLevel">Security Level</Label>
              <Input
                id="securityLevel"
                name="securityLevel"
                value={formData.securityLevel}
                onChange={handleChange}
                placeholder="e.g., High, Medium, Low"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Initialize AI Agent
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default WarehouseForm;
