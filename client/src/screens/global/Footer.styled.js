import { Box, Typography, styled } from "@mui/material";
import { shades } from "../../theme";

export const FooterWrap = styled(Box)`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: clamp(20px, 30px, 40px);
`;

export const FooterShopName = styled(Typography)`
  font-weight: bold;
  margin-bottom: 30px;
  color: ${shades.secondary[500]};
`;
