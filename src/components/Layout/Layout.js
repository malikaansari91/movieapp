import { styled, Box } from "@mui/material";
import { Sidebar } from "../Sidebar";

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <ContentWrapper>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: { xs: 1, sm: 3 } }}>
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
