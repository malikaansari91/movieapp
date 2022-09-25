import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Routes } from "./Routes";
import { UserInfo } from "./UserInfo";
import { Container, Stack } from "@mui/system";
import { AppContext } from "../../contexts";
import { Divider } from "@mui/material";

const drawerWidth = 240;

export const Sidebar = (props) => {
  const { window } = props;
  const { state, dispatch } = React.useContext(AppContext);

  const handleDrawerToggle = () => {
    dispatch({ type: "TOGGLE_SIDEBAR", payload: false });
  };

  const renderDawerContent = (
    <Container>
      <Stack spacing={2}>
        <UserInfo />
        <Divider />
        <Routes />
      </Stack>
    </Container>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={state.isSidebarOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {renderDawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {renderDawerContent}
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  window: PropTypes.func,
};
