import { Button, styled } from "@mui/material";
import { shades } from "../../theme";

export const CheckoutBackButton = styled(Button)`
  background-color: ${shades.primary[200]};
  box-shadow: "none";
  color: white;
  border-radius: 0;
  padding: 15px 40px;
`;
export const CheckoutNextButton = styled(Button)`
  background-color: ${shades.primary[400]};
  box-shadow: "none";
  color: white;
  border-radius: 0;
  padding: 15px 40px;
`;
