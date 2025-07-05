import { useMap } from "react-leaflet";

export interface JumpToLocationProps {
  location: [number, number] | null;
  zoom?: number;
  animation?: boolean;
  animationSpeed?: number;
  showMarker?: boolean;
}

export default function JumpToLocation({
  location,
  zoom = 18,
  animation = false,
  animationSpeed = 1,
}: JumpToLocationProps): null {
  const map = useMap();

  if (location !== null) {
    if (!animation) map.setView(location, zoom);
    else {
      map.flyTo(location, zoom, {
        animate: true,
        duration: animationSpeed,
      });
    }
  }

  return null;
}
