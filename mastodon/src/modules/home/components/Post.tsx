import { Button, Stack, Typography } from "@mui/material";
import { body2, bt1 } from "../../../typographyStyles";
import { Star } from "lucide-react";
import { OnlyIcon } from "../../../assets/OnlyIcon";
import { colorPalette } from "../../../ColorPalette";
import { UserProfileButton, UserProfileButtonProps } from "./UserProfileButton";

export interface PostProps {
  starCount: number;
//   content: React.ReactNode;
  userProfileButtonProps: UserProfileButtonProps,
}

export const Post = ({ starCount, userProfileButtonProps }: PostProps): React.ReactElement => {
  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems={"center"}
        padding="24px"
        paddingBottom="20px"
      >
        <UserProfileButton label={userProfileButtonProps.label} subLabel={userProfileButtonProps.subLabel} />
        <Button
          variant="outlined"
          sx={{
            width: "78px",
            color: colorPalette.labelPrimary,
            borderColor: colorPalette.borderOutlinedPrimary,
            borderRadius: "8px",
            height: "48px",
            textTransform: "none",
            ...bt1,
          }}
        >
          Follow
        </Button>
      </Stack>
      <Stack
        paddingBottom="24px"
        borderBottom={`1px solid ${colorPalette.border}`}
      >
        <Stack marginTop={"20px"} marginLeft={"52px"}>
          <Typography sx={{ ...body2 }}>
            
          </Typography>
          <Stack width="620px" height="348px"></Stack>
          <Stack direction="row">
            <Button
              sx={{
                ...body2,
                color: colorPalette.labelSubtle,
              }}
            >
              <Star
                width={"16px"}
                height={"16px"}
                color={colorPalette.iconSubtle}
              />
              {starCount}
            </Button>
            <Button>
              <OnlyIcon width={"16px"} height={"16px"} />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
