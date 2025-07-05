import Box from "@mui/material/Box";
import { MapContainer, TileLayer } from "../ClientMap";
import { MapContainerProps } from "react-leaflet/MapContainer";

export interface LocationMapProps
  extends Omit<MapContainerProps, "style" | "attributionControl"> {
  width: string | number;
  height: string | number;

  /**
   * ✨ Extended feature,
   * Let the consumer component extend the Map's capabalities.
   */
  children?: React.ReactNode | null;
}
export default function LocationMap(props: LocationMapProps) {
  const { height, width, children, ...mapContainerProps } = props;

  return (
    <Box sx={{ height, width }}>
      <MapContainer
        doubleClickZoom={false}
        center={[0, 0]}
        zoomControl={false}
        zoom={5}
        {...mapContainerProps}
        style={{
          height: "100%",
          width: "100%",
          background: "#EDF0F2",
          outline: "none",
        }}
        attributionControl
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {children}
      </MapContainer>
    </Box>
  );
}
