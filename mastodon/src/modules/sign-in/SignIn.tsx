import { Box, Button, Stack, Typography } from "@mui/material";
import { CenteredLayout } from "../../layout/CenteredLayout";
import { TextInputField } from "../../components/TextInputField";
import { body1, bt1, heading5 } from "../../typographyStyles";
import { colorPalette } from "../../ColorPalette";
import { useState } from "react";
import { Mastodon } from "../../assets/Mastodon";
import { useNavigate } from "react-router-dom";

export const SignIn = (): React.ReactElement => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <CenteredLayout>
      <Box paddingBottom="48px">
        <Mastodon />
      </Box>
      <Stack justifyContent="center" paddingBottom={"48px"}>
        <Typography
          sx={{
            ...heading5,
            color: "black",
            paddingBottom: "4px",
            textAlign: "center",
          }}
        >
          Login to mastodon.social
        </Typography>
        <Typography
          sx={{
            ...body1,
            color: colorPalette.labelSubtle,
          }}
        >
          Login with your mastodon.social credentials
        </Typography>
      </Stack>
      <Box padding="16px">
        <TextInputField
          label="Email Address"
          value={email}
          placeholder="Enter email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Box>
      <Box paddingBottom={"48px"}>
        <TextInputField
          label="Password"
          value={password}
          placeholder="Enter password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Box>
      <Stack width="496px">
        <Button
          title="Login"
          variant="contained"
          sx={{
            height: "48px",
            backgroundColor: "#6252DE",
            textTransform: "none",
            ...bt1,
            ":hover": {
              backgroundColor: "#6252DE",
            },
          }}
          disabled={!email.length || !password.length}
          onClick={() => {
            navigate("/home")
          }}
        >
          Login
        </Button>
      </Stack>
    </CenteredLayout>
  );
};
