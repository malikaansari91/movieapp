import { Avatar } from "@mui/material";
import { Box } from "@mui/system";

export const UserInfo = () => {
  return (
    <Box>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </Box>
  );
};
