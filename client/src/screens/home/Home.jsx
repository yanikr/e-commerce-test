import { MainCarousel } from "./MainCarousel";
import { ShoppingList } from "./ShoppingList";
import { Subscribe } from "./Subscribe";
export const Home = () => {
  return (
    <div>
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
    </div>
  );
};
