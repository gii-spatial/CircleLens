"use client";

import { type ReactElement, type Ref, useEffect, useState } from "react";
import { Map, Marker as MarkerType } from "leaflet";
import {
  MapContainer as LMapContainer,
  type MapContainerProps as LMapContainerProps,
  type MarkerProps as LMarkerProps,
  Marker as LMarker,
} from "react-leaflet";

interface MapContainerProps extends LMapContainerProps {
  forwardedRef: Ref<Map>;
}

export function MapContainer(props: MapContainerProps): ReactElement {
  const { forwardedRef, ...others } = props;
  return <LMapContainer {...others} ref={forwardedRef} />;
}

export interface MarkerProps extends Omit<LMarkerProps, "icon"> {
  forwardedRef: Ref<MarkerType>;
  icon: L.IconOptions;
}

export function Marker(props: MarkerProps): ReactElement {
  const { forwardedRef, icon: iconProps, ...others } = props;
  const [icon, setIcon] = useState<LMarkerProps["icon"]>();

  useEffect(() => {
    // loading 'leaflet' dynamically when the component mounts
    const loadIcon = async (): Promise<void> => {
      const L = await import("leaflet");

      setIcon(L.icon(iconProps));
    };
    void loadIcon();
  }, [iconProps]);

  if (icon === undefined) return <></>;
  return <LMarker {...others} icon={icon} ref={forwardedRef} />;
}
