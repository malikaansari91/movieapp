import { useContext, useReducer, useState } from "react";
import { styled, Box } from "@mui/material";
import { Sidebar } from "../Sidebar";
import { AppContext } from "../../contexts";

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <ContentWrapper>
        <Sidebar />
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
