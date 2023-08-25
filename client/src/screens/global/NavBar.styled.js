import { Badge, Box, IconButton, styled } from "@mui/material";
import { shades } from "../../theme";

export const NavBarContainer = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.95);
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
export const NavBarWrap = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  align-content: center;
`;
export const NavBarTitle = styled(Box)`
  color: ${shades.secondary[500]};
  &:hover {
    cursor: pointer;
  }
`;
export const NavBarIconsWrap = styled(Box)`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  z-index: 2;
`;
export const NavBarIcon = styled(IconButton)`
  color: black;
`;
export const NavBarIconBadge = styled(Badge)`
  &.MuiBadge-badge {
    right: 5;
    top: 5;
    padding: 0 4px;
    height: 14px;
    min-width: 13px;
  }
`;
