declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace google {
  namespace maps {
    class Map {
      constructor(mapDiv: HTMLDivElement, opts?: MapOptions);
      setCenter(latLng: LatLng): void;
      setZoom(zoom: number): void;
      addListener(eventName: string, handler: (event: any) => void): void;
    }

    class Marker {
      constructor(opts?: MarkerOptions);
      setMap(map: Map | null): void;
    }

    class LatLng {
      constructor(lat: number, lng: number);
      lat(): number;
      lng(): number;
    }

    class Geocoder {
      geocode(request: GeocoderRequest, callback: (results: GeocoderResult[] | null, status: GeocoderStatus) => void): void;
    }

    namespace places {
      class PlacesService {
        constructor(attrContainer: Map | HTMLDivElement);
        textSearch(request: TextSearchRequest, callback: (results: PlaceResult[] | null, status: PlacesServiceStatus) => void): void;
      }

      enum PlacesServiceStatus {
        OK = 'OK'
      }

      interface PlaceResult {
        name?: string;
        geometry?: {
          location?: LatLng;
        };
      }

      interface TextSearchRequest {
        query: string;
        fields?: string[];
      }
    }

    interface MapOptions {
      center?: { lat: number; lng: number };
      zoom?: number;
      mapTypeControl?: boolean;
      streetViewControl?: boolean;
      fullscreenControl?: boolean;
    }

    interface MarkerOptions {
      position?: LatLng;
      map?: Map;
      title?: string;
    }

    interface GeocoderRequest {
      location: LatLng;
    }

    interface GeocoderResult {
      formatted_address: string;
    }

    enum GeocoderStatus {
      OK = 'OK'
    }

    interface MapMouseEvent {
      latLng?: LatLng;
    }
  }
}

export {};