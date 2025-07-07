"use client";

import { type Ref, forwardRef } from "react";
import { type MapContainerProps, useMapEvents } from "react-leaflet";
import type {
  LeafletEventHandlerFnMap,
  Map,
  Marker as MarkerType,
} from "leaflet";
import dynamic from "next/dynamic";
import type { MarkerProps } from "./MapLazyComponents";

export const LazyMapContainer = dynamic(
  async () => import("./MapLazyComponents").then((m) => m.MapContainer),
  {
    ssr: false,
    loading: () => <div style={{ height: "500px" }} />,
  }
);
export const MapContainer = forwardRef(
  (props: MapContainerProps, ref: Ref<Map>) => (
    <LazyMapContainer {...props} forwardedRef={ref} />
  )
);

export const TileLayer = dynamic(
  async () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);
export const ZoomControl = dynamic(
  async () => import("react-leaflet").then((m) => m.ZoomControl),
  { ssr: false }
);

const LazyMarker = dynamic(
  async () => import("./MapLazyComponents").then((m) => m.Marker),
  { ssr: false }
);

export const Marker = forwardRef<MarkerType, Omit<MarkerProps, "forwardedRef">>(
  (props, ref) => <LazyMarker {...props} forwardedRef={ref} />
);
export interface MapConsumerProps {
  eventsHandler: LeafletEventHandlerFnMap;
}

export function MapConsumer({ eventsHandler }: MapConsumerProps): void {
  useMapEvents(eventsHandler);
}
