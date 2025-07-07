import { type PointExpression, type IconOptions } from "leaflet";

export const DEF_ICON_SIZE: PointExpression = [50, 42];
export const DEF_ICON_ANCHOR: PointExpression = [
  DEF_ICON_SIZE[0] / 2,
  DEF_ICON_SIZE[1],
];

/**
 * ✨ Extended version:
 * Extended this prop as necessary to cater common needs.
 * Incase for specific usecase, create a separate util function
 */
export interface GenerateMapMarkerIcon
  extends Pick<IconOptions, "iconUrl" | "iconAnchor" | "iconSize"> {}

function generateMapMarkerIcon(props: GenerateMapMarkerIcon): IconOptions {
  const {
    iconUrl,
    iconAnchor = DEF_ICON_ANCHOR,
    iconSize = DEF_ICON_SIZE,
  } = props;

  /**
   * 👀 Extend more here, examples:
   *  - shadowAnchor
   *  - className
   */
  return {
    iconUrl,
    iconAnchor,
    iconSize,
  };
}

const MapUtil = Object.freeze({
  generateMapMarkerIcon,
});

export default MapUtil;
