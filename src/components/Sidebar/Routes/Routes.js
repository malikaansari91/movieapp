import {
  List,
  Divider,
  IconButton,
  ListItemButton,
  Icon,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

import { routes } from "../../../config";
import { styled } from "@mui/system";
import { NavLink, useLocation } from "react-router-dom";

export const Routes = () => {
  const location = useLocation();

  const RouteItem = ({ key, route, nested }) => {
    const isSelected = location.pathname === route.path;

    return (
      <StyledNavLink to={`${route.path}`} key={route.key}>
        <StyledListItemButton
          isEnabled={route.isEnabled}
          sx={{ pl: nested ? 3 : 1 }}
        >
          <ListItemIcon>
            <StyledIconButton
              size="small"
              isSelected={location.pathname === route.path}
            >
              {route.icon && (
                <StyledIcon
                  component={route.icon}
                  isSelected={isSelected || false}
                />
              )}
            </StyledIconButton>
          </ListItemIcon>
          <ListItemText primary={route.title} />
        </StyledListItemButton>
      </StyledNavLink>
    );
  };

  return (
    <>
      <List component="nav" sx={{ height: "100%" }}>
        {routes.map((route) => (
          <div key={route.key}>
            {RouteItem({
              key: route.key,
              route: route,
              nested: false,
            })}
            {route.appendDivider && <Divider />}
          </div>
        ))}
      </List>
    </>
  );
};

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

const StyledListItemButton = styled(ListItemButton)(({ theme, isEnabled }) =>
  !isEnabled
    ? { "*": { cursor: "not-allowed", color: theme.palette.text.secondary } }
    : {}
);

const StyledIconButton = styled(IconButton)(({ isSelected, theme }) => ({
  transition: "box-shadow 0.1s",
}));

const StyledIcon = styled(Icon)`
  ${({ isSelected, theme }) =>
    isSelected && `color: ${theme.palette.primary.main};`}
`;
