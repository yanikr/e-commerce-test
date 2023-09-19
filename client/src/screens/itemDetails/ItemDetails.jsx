import { Box, IconButton, Typography, Tabs, Tab } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { addToCart } from "../../state/state";
import { useParams } from "react-router-dom";
import { Item } from "../../components/Item";
import {
  ItemDetailsAddToCartButton,
  ItemDetailsButtonsWrap,
  ItemDetailsContainer,
  ItemDetailsDescriptionWrap,
  ItemDetailsImageWrap,
  ItemDetailsQuantityButtonWrap,
  ItemDetailsRelatedWrap,
  ItemDetailsWrap,
} from "./ItemDetails.styled";

export const ItemDetials = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  async function getItem() {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      {
        method: "GET",
      }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  async function getItems() {
    const items = await fetch(
      `http://localhost:1337/api/items?populate=image`,
      { method: "GET" }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); //eslint-disable-line
  return (
    <ItemDetailsContainer>
      <ItemDetailsWrap>
        <ItemDetailsImageWrap>
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: "contain" }}
          />
        </ItemDetailsImageWrap>
        <ItemDetailsDescriptionWrap>
          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.attributes?.name}</Typography>
            <Typography>${item?.attributes?.price}</Typography>
            <Typography mt="20px">
              {item?.attributes?.longDescription}
            </Typography>
          </Box>
          <ItemDetailsButtonsWrap>
            <ItemDetailsQuantityButtonWrap>
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography p="0 5px">{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </ItemDetailsQuantityButtonWrap>
            <ItemDetailsAddToCartButton
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              ADD TO CART
            </ItemDetailsAddToCartButton>
          </ItemDetailsButtonsWrap>
          <Box>
            <Typography>CATEGORIES: {item?.attributes?.category}</Typography>
          </Box>
        </ItemDetailsDescriptionWrap>
      </ItemDetailsWrap>
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <div>{item?.attributes?.longDescription}</div>
        )}
        {value === "reviews" && <div>reviews</div>}
      </Box>
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Related products
        </Typography>
        <ItemDetailsRelatedWrap>
          {items.slice(0, 4).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
        </ItemDetailsRelatedWrap>
      </Box>
    </ItemDetailsContainer>
  );
};
