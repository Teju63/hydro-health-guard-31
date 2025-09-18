import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Search } from "lucide-react";
import { Loader } from "@googlemaps/js-api-loader";

declare global {
  interface Window {
    google: any;
  }
}

interface LocationSelectorProps {
  onLocationSelect?: (location: { lat: number; lng: number; address: string }) => void;
}

const LocationSelector = ({ onLocationSelect }: LocationSelectorProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [marker, setMarker] = useState<any>(null);
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
    address: string;
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);

  const initializeMap = async (apiKey: string) => {
    if (!mapRef.current || !apiKey) return;

    try {
      const loader = new Loader({
        apiKey: apiKey,
        version: "weekly",
        libraries: ["places", "geometry"]
      });

      const google = await loader.load();
      
      // Center on Bangalore
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: { lat: 12.9716, lng: 77.5946 }, // Bangalore, Karnataka
        zoom: 11,
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
      });

      setMap(mapInstance);

      // Add click listener to place markers
      mapInstance.addListener("click", (event: any) => {
        if (event.latLng) {
          placeMarker(event.latLng, mapInstance);
        }
      });

      setMapLoaded(true);
    } catch (error) {
      console.error("Error loading Google Maps:", error);
    }
  };

  const placeMarker = (location: any, mapInstance: any) => {
    // Remove existing marker
    if (marker) {
      marker.setMap(null);
    }

    // Create new marker
    const newMarker = new window.google.maps.Marker({
      position: location,
      map: mapInstance,
      title: "Selected Location",
    });

    setMarker(newMarker);

    // Get address using reverse geocoding
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: location }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        const address = results[0].formatted_address;
        const locationData = {
          lat: location.lat(),
          lng: location.lng(),
          address: address,
        };
        setSelectedLocation(locationData);
        onLocationSelect?.(locationData);
      }
    });
  };

  const searchLocation = () => {
    if (!map || !searchQuery) return;

    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      query: searchQuery + " Bangalore Karnataka",
      fields: ["name", "geometry"],
    };

    service.textSearch(request, (results: any, status: any) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results && results[0]) {
        const place = results[0];
        if (place.geometry?.location) {
          map.setCenter(place.geometry.location);
          map.setZoom(12);
          placeMarker(place.geometry.location, map);
        }
      }
    });
  };

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      initializeMap(apiKey.trim());
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Select Monitoring Location
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!mapLoaded && (
          <div className="space-y-4 mb-6">
            <div>
              <Label htmlFor="api-key">Google Maps API Key</Label>
              <Input
                id="api-key"
                type="password"
                placeholder="Enter your Google Maps API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="mt-1"
              />
              <p className="text-sm text-muted-foreground mt-1">
                Get your API key from{" "}
                <a 
                  href="https://console.cloud.google.com/google/maps-apis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Cloud Console
                </a>
              </p>
            </div>
            <Button onClick={handleApiKeySubmit} className="w-full">
              Load Map
            </Button>
          </div>
        )}

        {mapLoaded && (
          <>
            <div className="flex gap-2 mb-4">
              <Input
                placeholder="Search for a location in Bangalore..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && searchLocation()}
              />
              <Button onClick={searchLocation} size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <div 
              ref={mapRef} 
              className="w-full h-96 rounded-lg border bg-muted"
            />

            {selectedLocation && (
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Selected Location:</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {selectedLocation.address}
                </p>
                <p className="text-xs text-muted-foreground">
                  Coordinates: {selectedLocation.lat.toFixed(6)}, {selectedLocation.lng.toFixed(6)}
                </p>
              </div>
            )}
          </>
        )}

        <div className="mt-4 text-sm text-muted-foreground">
          <p className="font-medium mb-1">Instructions:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Enter your Google Maps API key to load the interactive map</li>
            <li>Search for specific locations or click anywhere on the map</li>
            <li>The selected location will be used for sensor placement</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationSelector;