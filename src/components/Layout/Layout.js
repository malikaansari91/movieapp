import { useState } from "react";
import { styled, Box } from "@mui/material";
import { Sidebar } from "../Sidebar";

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleNavigation = () => setOpen((status) => !status);

  return (
    <LayoutWrapper>
      <ContentWrapper>
        <Sidebar open={open} handleClose={toggleNavigation} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled("div")`
  min-height: 100vh;
`;

const ContentWrapper = styled("div")`
  display: flex;
`;
