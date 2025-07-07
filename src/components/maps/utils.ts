import { type PointExpression, type IconOptions } from "leaflet";

const DEF_ICON_SIZE: PointExpression = [50, 42];
const DEF_ICON_ANCHOR: PointExpression = [
  DEF_ICON_SIZE[0] / 2,
  DEF_ICON_SIZE[1],
];

export interface GenerateMapMarkerIcon extends Pick<IconOptions, "iconUrl"> {}
export function generateMapMarkerIcon(
  props: GenerateMapMarkerIcon
): IconOptions {
  const { iconUrl } = props;

  return {
    iconUrl: iconUrl,
    iconAnchor: DEF_ICON_ANCHOR,
    iconSize: DEF_ICON_SIZE,
  };
}
