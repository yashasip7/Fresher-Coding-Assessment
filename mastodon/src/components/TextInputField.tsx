import { Stack, TextField, Typography } from "@mui/material";
import { small2 } from "../typographyStyles";
import { colorPalette } from "../ColorPalette";

interface TextInputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  type?: "text" | "password";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInputField = ({
  label,
  placeholder,
  value,
  type = "text",
  onChange
}: TextInputFieldProps): React.ReactElement => {
  return (
    <Stack width="496px">
      <Typography
        sx={{
          ...small2,
        }}
        color={colorPalette.label}
        padding={"4px"}
      >
        {label}
      </Typography>
      <TextField
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        sx={{
          borderColor: colorPalette.border,
          borderRadius: "8px",
          ":hover": {
            borderColor: colorPalette.border,
          },
          ":focus": {
            borderColor: colorPalette.border,
          },
          ":focus-within": {
            borderColor: colorPalette.border,
          },
          "::placeholder": {
            ...small2,
          },
        }}
        inputProps={{
          style: {
            padding: "12px 16px",
          },
        }}
      />
    </Stack>
  );
};
