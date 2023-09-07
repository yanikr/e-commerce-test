import { Box, Divider, InputBase, Typography, styled } from "@mui/material";

export const SubscribeWrap = styled(Box)`
  width: 80%;
  margin: 80px auto;
  text-align: center;
`;
export const SubscribeInputWrap = styled(Box)`
  padding: 2px 4px;
  margin: 15px auto;
  display: flex;
  align-items: center;
  width: 75%;
  background-color: #f2f2f2;
`;
export const SubscribeInputBase = styled(InputBase)`
  margin-left: 1px;
  flex: 1;
`;
export const SubscribeDivider = styled(Divider)`
  height: 28px;
  margin: 0.5px;
`;
export const SubscribeButton = styled(Typography)`
  padding: 1px;
  &:hover {
    cursor: pointer;
  }
`;
