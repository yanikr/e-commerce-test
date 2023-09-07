import { Box, IconButton, styled } from "@mui/material";

export const MainCarouselIconButtonPrev = styled(IconButton)`
  position: absolute;
  top: 50%;
  left: 0;
  color: white;
  padding: 5px;
  z-index: 10;
`;
export const MainCarouselIconButtonNext = styled(IconButton)`
  position: absolute;
  top: 50%;
  right: 0;
  color: white;
  padding: 5px;
  z-index: 10;
`;
export const MainCarouselTextWrap = styled(Box)`
  color: white;
  padding: 20px;
  border-radius: 1px;
  text-align: left;
  position: absolute;
  top: 46%;
  background-color: rgb(0, 0, 0, 0.4);
`;
