"use client";

import { type ReactElement, useState } from "react";
import { Stack, Typography } from "@mui/material";
import LocationMap from "@/components/maps/LocationMap";
import EZButton from "@/components/common/EZButton";
import TargetIcon from "@/components/icons/TargetIcon";
import JumpToLocation from "@/components/maps/Extensions/JumpToLocation";
import GeoLocUtil from "@/utils/geolocation.util";
import LocationMarker from "./LocationMarker";

export default function PortalPageContent(): ReactElement {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const [geoError, setGeoError] = useState<string | null>(null);

  const handleGetLocation = async () => {
    try {
      const res = await GeoLocUtil.getCurrentLocation();
      if (!res.success) throw res.error;

      const { lat, lng } = res.data;
      setUserLocation([lat, lng]);
      setGeoError(null);
    } catch (error: any) {
      setGeoError(error);
    }
  };

  return (
    <Stack flex={1} alignItems={"center"} justifyContent={"center"}>
      <Stack gap={1} height={450} width={700}>
        {geoError && <Typography color="error">{geoError}</Typography>}
        <LocationMap height={"100%"} width={"100%"}>
          <JumpToLocation
            animation={true}
            animationSpeed={4}
            location={userLocation}
          />
          {userLocation !== null && <LocationMarker position={userLocation} />}
        </LocationMap>
        <EZButton startIcon={<TargetIcon />} onClick={handleGetLocation}>
          Use my location
        </EZButton>
      </Stack>
    </Stack>
  );
}
