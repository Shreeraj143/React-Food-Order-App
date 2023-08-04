import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCartHandler = (props) => {
    setIsCartVisible(true);
  };

  const closeCartHandler = (props) => {
    setIsCartVisible(false);
  };

  return (
    <>
      {isCartVisible && <Cart onClose={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
