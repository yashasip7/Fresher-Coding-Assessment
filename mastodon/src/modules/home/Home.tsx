import { Box, Stack } from "@mui/material";
import { colorPalette } from "../../ColorPalette";
import { Mastodon } from "../../assets/Mastodon";
import { Explore } from "./components/Explore";
import { UserProfileButton } from "./components/UserProfileButton";

export const Home = (): React.ReactElement => {
  return (
    <Stack direction="row" height={"100%"}>
      <Stack
        borderRight={`1px solid ${colorPalette.border}`}
        padding="24px"
        flex={1}
      >
        <Mastodon />
        <Box padding={"40px 12px"}>
          <UserProfileButton label={"Robert Fox"} subLabel={"robertfoxy"} />
        </Box>
      </Stack>
      <Stack borderRight={`1px solid ${colorPalette.border}`} flex={2}>
        <Explore />
      </Stack>
      <Stack borderRight={`1px solid ${colorPalette.border}`} flex={1}>
        Explore
      </Stack>
    </Stack>
  );
};
