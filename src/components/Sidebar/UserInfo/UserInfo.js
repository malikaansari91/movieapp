import { Avatar, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

export const UserInfo = () => {
  return (
    <Box sx={{ paddingTop: "40px" }}>
      <Stack
        sx={{ display: "flex", alignItems: "center" }}
        direction="column"
        spacing={2}
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <Typography variant="h6">Erric Hoffman</Typography>
      </Stack>
    </Box>
  );
};
