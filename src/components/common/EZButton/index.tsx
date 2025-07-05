import { type ReactElement } from "react";
import { type SxProps, Theme } from "@mui/material";
import Button, { type ButtonProps, buttonClasses } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export interface EZButtonProps extends ButtonProps {
  slotProps?: {
    startIconStyles?: SxProps<Theme>;
  };
}

export default function EZButton(props: EZButtonProps): ReactElement {
  const { slotProps = {}, ...buttonProps } = props;
  const { startIconStyles } = slotProps;

  return (
    <Button
      variant="contained"
      loadingIndicator={<CircularProgress color="inherit" size={28} />}
      {...buttonProps}
      sx={{
        width: "auto",
        height: "auto",
        textTransform: "unset",
        ...buttonProps.sx,
        [`& .${buttonClasses.startIcon}`]: {
          "& > *:first-of-type": {
            fontSize: "inherit",
            ...startIconStyles,
          },
        },
      }}
    />
  );
}
