import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { bangaloreLocations } from "@/data/bangaloreLocations";
import { useTranslation } from "@/hooks/useTranslation";

interface BangaloreLocationSelectorProps {
  onLocationSelect?: (location: any) => void;
}

const BangaloreLocationSelector = ({ onLocationSelect }: BangaloreLocationSelectorProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const { t, currentLanguage } = useTranslation();

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
    const location = bangaloreLocations.find(loc => loc.id === locationId);
    if (location && onLocationSelect) {
      onLocationSelect({
        lat: location.coordinates.lat,
        lng: location.coordinates.lng,
        address: getLocationName(location),
        area: location.area,
        pincode: location.pincode,
        riskLevel: location.riskLevel
      });
    }
  };

  const getLocationName = (location: any) => {
    switch (currentLanguage) {
      case 'hi':
        return location.nameHi;
      case 'kn':
        return location.nameKn;
      default:
        return location.name;
    }
  };

  const getRiskLevelColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'high':
        return 'bg-danger/10 text-danger';
      case 'moderate':
        return 'bg-warning/10 text-warning';
      case 'low':
        return 'bg-success/10 text-success';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const selectedLocationData = bangaloreLocations.find(loc => loc.id === selectedLocation);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          {t("location")} - Bangalore Areas
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="location-select">Select Area in Bangalore</Label>
          <Select value={selectedLocation} onValueChange={handleLocationSelect}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Choose a location..." />
            </SelectTrigger>
            <SelectContent>
              {bangaloreLocations.map((location) => (
                <SelectItem key={location.id} value={location.id}>
                  <div className="flex items-center justify-between w-full">
                    <span>{getLocationName(location)}</span>
                    <Badge 
                      variant="secondary" 
                      className={`ml-2 text-xs ${getRiskLevelColor(location.riskLevel)}`}
                    >
                      {t(location.riskLevel)}
                    </Badge>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedLocationData && (
          <div className="mt-4 p-4 bg-muted/20 rounded-lg border">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Selected Location Details
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name:</span>
                <span className="font-medium">{getLocationName(selectedLocationData)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Area:</span>
                <span>{selectedLocationData.area}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pincode:</span>
                <span>{selectedLocationData.pincode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Risk Level:</span>
                <Badge 
                  variant="secondary" 
                  className={getRiskLevelColor(selectedLocationData.riskLevel)}
                >
                  {t(selectedLocationData.riskLevel)}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Coordinates:</span>
                <span className="text-xs">
                  {selectedLocationData.coordinates.lat.toFixed(4)}, {selectedLocationData.coordinates.lng.toFixed(4)}
                </span>
              </div>
            </div>

            {selectedLocationData.riskLevel === 'high' && (
              <div className="mt-3 p-3 bg-danger/10 rounded-lg border border-danger/20">
                <div className="flex items-center gap-2 text-danger">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm font-medium">High Risk Area</span>
                </div>
                <p className="text-xs text-danger/80 mt-1">
                  This area has elevated health risks. Enhanced monitoring recommended.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="text-sm text-muted-foreground">
          <p className="font-medium mb-1">Bangalore Health Monitoring Areas:</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Select from pre-mapped high-priority areas in Bangalore</li>
            <li>Risk levels based on water quality and health data</li>
            <li>Multilingual support for local health workers</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BangaloreLocationSelector;