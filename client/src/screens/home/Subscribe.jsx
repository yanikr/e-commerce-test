import { MarkEmailReadOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useState } from "react";
import {
  SubscribeButton,
  SubscribeDivider,
  SubscribeInputBase,
  SubscribeInputWrap,
  SubscribeWrap,
} from "./Subscribe.styled";

export const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <SubscribeWrap>
      <IconButton>
        <MarkEmailReadOutlined fontSize="large" />
      </IconButton>
      <Typography variant="h3">Subscribe to our Newsletter</Typography>
      <Typography>
        and receive $20 coupon for your first order when you checkout
      </Typography>
      <SubscribeInputWrap>
        <SubscribeInputBase
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <SubscribeDivider orientation="vertical" />
        <SubscribeButton>Subscribe</SubscribeButton>
      </SubscribeInputWrap>
    </SubscribeWrap>
  );
};
