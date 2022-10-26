import { useState } from "react";
import Gadgets from "./components/Gadgets/Gadgets";
import Cart from './components/Cart/Cart'

import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";

function App() {
  
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = (event) => {
    event.preventDefault();
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart hideCartHandler = {hideCartHandler}/>}
      <Header showCartHandler = {showCartHandler}/>
      <main>
        <Gadgets/>
      </main>
    </CartProvider>
  );
}

export default App;
