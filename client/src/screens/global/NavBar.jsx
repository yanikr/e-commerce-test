import { useDispatch, useSelector } from "react-redux";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  NavBarContainer,
  NavBarIcon,
  NavBarIconBadge,
  NavBarIconsWrap,
  NavBarTitle,
  NavBarWrap,
} from "./NavBar.styled";
import { setIsCartOpen } from "../../state/state";

export const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <NavBarContainer>
      <NavBarWrap>
        <NavBarTitle onClick={() => navigate("/")}>E-COMMERCE</NavBarTitle>
        <NavBarIconsWrap>
          <NavBarIcon>
            <SearchOutlined />
          </NavBarIcon>
          <NavBarIcon>
            <PersonOutline />
          </NavBarIcon>
          <NavBarIconBadge
            badgeContent={cart.length}
            invisible={cart.length === 0}
            color="secondary"
          >
            <NavBarIcon onClick={() => dispatch(setIsCartOpen({}))}>
              <ShoppingBagOutlined />
            </NavBarIcon>
          </NavBarIconBadge>
          <NavBarIcon>
            <MenuOutlined />
          </NavBarIcon>
        </NavBarIconsWrap>
      </NavBarWrap>
    </NavBarContainer>
  );
};
