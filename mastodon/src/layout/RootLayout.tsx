import { Stack } from "@mui/material";


export const RootLayout = ({children}:{children: React.ReactNode}) : React.ReactElement => {

  return (
    <Stack width="100vw" height="100vh">
      {children}
    </Stack>
  );
};
