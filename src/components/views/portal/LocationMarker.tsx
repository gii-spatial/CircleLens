"use client";

import { type ReactElement } from "react";
import { LocationMarkerSVG } from "@/assets/svg/map/location-marker-svg";
import { Marker, Popup } from "@/components/maps/ClientMap";
import { type MarkerProps } from "@/components/maps/ClientMap/MapLazyComponents";
import MapUtil from "@/utils/map.util";

interface LocationMarkerProps extends Pick<MarkerProps, "position"> {
  enablePopup?: boolean;
}
export default function LocationMarker(
  props: LocationMarkerProps
): ReactElement {
  const { enablePopup = true, ...locationMarkerProps } = props;
  return (
    <Marker
      {...locationMarkerProps}
      riseOnHover
      eventHandlers={{
        click: () => {
          console.log("Clicked marker");
        },
      }}
      icon={MapUtil.generateMapMarkerIcon({
        iconUrl: LocationMarkerSVG,
      })}
    >
      {enablePopup && <Popup>You are here.</Popup>}
    </Marker>
  );
}
