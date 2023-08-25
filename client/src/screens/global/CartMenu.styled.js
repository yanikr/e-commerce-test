import { Box, Button, IconButton, styled } from "@mui/material";
import { shades } from "../../theme";

export const CartMenuBackdrop = styled(Box)`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: auto;
`;
export const CartMenuWrap = styled(Box)`
  position: fixed;
  right: 0;
  bottom: 0;
  width: max(400px, 30%);
  height: 100%;
  background-color: #fff;
`;
export const CartMenuBox = styled(Box)`
  padding: 30px;
  overflow: auto;
  height: 100%;
`;
export const CartMenuImageWrap = styled(Box)`
  flex: 1 1 40%;
`;

export const CartMenuItemWrap = styled(Box)`
  flex: 1 1 60%;
`;
export const CartMenuIconButtonsWrap = styled(IconButton)`
  display: flex;
  align-items: center;
  border: 1px solid ${shades.neutral[500]};
`;

export const CartMenuCheckoutWrap = styled(Box)`
  margin: 20px 0;
`;
export const CartMenuButton = styled(Button)`
  background-color: ${shades.primary[400]};
  color: white;
  border-radius: 0;
  min-width: 100%;
  padding: 20px 40px;
  margin: 20px 0;
`;
