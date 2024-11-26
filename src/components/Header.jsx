import { useState } from "react"
import logo from "../assets/logo.svg"
import ring from "../assets/ring.svg"
import moon from '../assets/icons/moon.svg'
import shoppingCart from "../assets/shopping-cart.svg"
import Cart from "./Cart"
export default function Header() {
  const [showCart , setShowCart] = useState(false);
  
  function handleShowCart(){
    setShowCart(true);
  }
  return (
    <header>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="notification button" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={moon}
                width="24"
                height="24"
                alt="theme switching icon"
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleShowCart}
            >
              <img
                src={shoppingCart}
                width="24"
                height="24"
                alt=""
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
