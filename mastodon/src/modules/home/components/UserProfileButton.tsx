import { Stack, Typography } from "@mui/material";
import { b3, sh1 } from "../../../typographyStyles";
import { colorPalette } from "../../../ColorPalette";

export interface UserProfileButtonProps {
    label: string;
    subLabel: string;
}

export const UserProfileButton = ({
    label,
    subLabel
}: UserProfileButtonProps): React.ReactElement => {
  return (
    <Stack>
      <Typography sx={{ ...sh1 }}>{label}</Typography>
      <Typography sx={{ ...b3 }} color={colorPalette.labelSubtle}>
        {subLabel}
      </Typography>
    </Stack>
  );
};
