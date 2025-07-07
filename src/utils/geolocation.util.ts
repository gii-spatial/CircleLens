import { type ResponseData } from "@/interface/core";

/**
 * Gets the current geographical location of the user's device using the browser's Geolocation API.
 *
 * @returns {Promise<ResponseData<{ lat: number; lng: number }>>}
 * A promise that resolves with an object containing latitude and longitude if successful,
 * or rejects with an error message if geolocation is not supported or permission is denied.
 */
const getCurrentLocation = (): Promise<
  ResponseData<{ lat: number; lng: number }>
> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject({
        success: false,
        error: "Geolocation is not supported by this browser",
      });
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({
          success: true,
          data: {
            lat: latitude,
            lng: longitude,
          },
        });
      },
      (error) => {
        let errorMessage = "An unknown error occurred.";

        if (error.code === error.PERMISSION_DENIED) {
          errorMessage = "Geolocation permission denied.";
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          errorMessage = "Position unavailable.";
        }

        reject({
          success: false,
          error: errorMessage,
        });
      }
    );
  });
};

const GeoLocUtil = Object.freeze({
  getCurrentLocation,
});

export default GeoLocUtil;
