import { Box, Button, styled } from "@mui/material";
import { shades } from "../../theme";

export const ItemDetailsContainer = styled(Box)`
  width: 80%;
  margin: 80px auto;
`;
export const ItemDetailsWrap = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
`;
export const ItemDetailsImageWrap = styled(Box)`
  flex: 1 1 40%;
  margin-bottom: 40px;
`;
export const ItemDetailsDescriptionWrap = styled(Box)`
  flex: 1 1 50%;
  margin-bottom: 40px;
`;
export const ItemDetailsButtonsWrap = styled(Box)`
  display: flex;
  align-items: center;
  min-height: 50px;
  margin-bottom: 40px;
`;
export const ItemDetailsQuantityButtonWrap = styled(Box)`
  display: flex;
  align-items: center;
  border: 1.5px solid ${shades.neutral[300]};
  margin-right: 20px;
  padding: 2px 5px;
`;
export const ItemDetailsAddToCartButton = styled(Button)`
  background-color: #222222;
  color: white;
  border-radius: 0;
  min-width: 150px;
  padding: 10px 40px;
  &:hover {
    color: #222222;
  }
`;

export const ItemDetailsRelatedWrap = styled(Box)`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.33%;
  justify-content: space-between;
`;
