import { Box, Button, styled } from "@mui/material";
import { shades } from "../theme";

export const ItemHoveredCardWrap = styled(Box)`
  position: absolute;
  bottom: 10%;
  left: 0;
  width: 100%;
  padding: 0 5px;
`;
export const ItemHoveredButtonsWrap = styled(Box)`
  display: flex;
  align-items: center;
  background-color: ${shades.neutral[100]};
  border-radius: 3px;
`;

export const ItemAddToCartButton = styled(Button)`
  background-color: ${shades.primary[300]};
  color: white;
`;
