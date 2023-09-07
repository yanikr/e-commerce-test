import { Box, Tabs, styled } from "@mui/material";

export const ShoppingListItemsGridWrap = styled(Box)`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: space-around;
  row-gap: 20px;
  column-gap: 1.33%;
`;
export const ShoppingListItemsTabs = styled(Tabs)`
  margin: 25px;
  &.MuiTabs-flexContainer {
    flex-wrap: wrap;
  }
`;
