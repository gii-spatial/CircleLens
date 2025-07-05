"use client";

import { type ReactElement, type ReactNode } from "react";
import Stack, { type StackProps } from "@mui/material/Stack";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import Typography, { type TypographyProps } from "@mui/material/Typography";

export interface FormTextFieldProps
  extends Omit<TextFieldProps, "error" | "id"> {
  id?: string;
  label?: string;
  labelProps?: TypographyProps;
  children?: ReactNode;
  helperText?: string;
  error?: string;
  readOnly?: boolean;
  hint?: string;
}

export default function FormTextField(props: FormTextFieldProps): ReactElement {
  const {
    id,
    label,
    labelProps = {},
    helperText,
    children,
    error,
    readOnly = false,
    inputProps,
    fullWidth = true,
    variant = "outlined",
    size = "small",
    sx = {},
    hint,
    ...textFieldProps
  } = props;

  return (
    <Stack
      id={id}
      margin={0}
      gap={1.5}
      direction="row"
      alignItems={"flex-start"}
      data-testid={`EZFormTextField-${id}`}
    >
      {label !== undefined && (
        <Typography
          pt={0.5}
          data-testid="field-label"
          flexShrink={0}
          {...labelProps}
        >
          {label}
        </Typography>
      )}
      {hint !== undefined && (
        <Typography data-testid="field-hint">{hint}</Typography>
      )}
      <TextField
        {...textFieldProps}
        fullWidth={fullWidth}
        variant={variant}
        error={error !== undefined}
        InputProps={{
          readOnly,
          sx: {
            bgcolor: "white.300",
            borderRadius: 1,
            height: "fit-content",
            typography: "regularNormal",
            color: "black.400",
            flexGrow: 1,
            pointerEvents: readOnly ? "none" : "auto",
            "& .MuiInputBase-input": {
              paddingX: 0.75,
              paddingY: 0.5,
            },
            ...sx,
          },
        }}
        size={size}
        helperText={error}
      />
      {children}
    </Stack>
  );
}
