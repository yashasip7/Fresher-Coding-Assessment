import { Stack } from "@mui/material";


export const CenteredLayout = ({children}:{children: React.ReactNode}) : React.ReactElement => {

  return (
    <Stack width="100vw" height="100vh" justifyContent="center" alignItems="center">
      {children}
    </Stack>
  );
};
