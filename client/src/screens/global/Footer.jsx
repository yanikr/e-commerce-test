import { Box, Typography, useTheme } from "@mui/material";
import { FooterShopName, FooterWrap } from "./Footer.styled";

export const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <FooterWrap>
        <Box width="clamp(20%, 30%, 40%)">
          <FooterShopName variant="h4">E-COMMERCE</FooterShopName>
          <div>
            Welcome to E-COMMERCE, your one-stop destination for stylish and
            affordable clothing. We believe that fashion should be accessible to
            everyone, and our mission is to provide you with the latest trends
            and timeless classics at unbeatable prices.
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track your order </Typography>
          <Typography mb="30px">Corporate & Bulk purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>
        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact us
          </Typography>
          <Typography mb="30px">50 north whataver blv, DC 10501</Typography>
          <Typography mb="30px">Email: fakemail@gmail.com </Typography>
          <Typography mb="30px">Tel: 2092094204923</Typography>
        </Box>
      </FooterWrap>
    </Box>
  );
};
