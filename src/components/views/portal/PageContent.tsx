"use client";

import { type ReactElement, useState } from "react";
import { Stack, Typography } from "@mui/material";
import LocationMap from "@/components/maps/LocationMap";
import EZButton from "@/components/common/EZButton";
import TargetIcon from "@/components/icons/TargetIcon";
import JumpToLocation from "@/components/maps/Extensions/JumpToLocation";
import FormTextField from "@/components/common/FormTextField";
import GeoLocUtil from "@/utils/geolocation.util";

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
    <Stack alignItems={"center"} justifyContent={"center"} py={1}>
      <Stack gap={1} width={300}>
        {geoError && <Typography color="error">{geoError}</Typography>}

        <FormTextField label="Location name" />
        <LocationMap height={200} width={"100%"}>
          <JumpToLocation
            animation={true}
            animationSpeed={4}
            location={userLocation}
          />
        </LocationMap>
        <EZButton startIcon={<TargetIcon />} onClick={handleGetLocation}>
          Use my location
        </EZButton>
      </Stack>
    </Stack>
  );
}
