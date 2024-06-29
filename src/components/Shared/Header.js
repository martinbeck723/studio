import React from "react";
import { Button } from "@mui/base/Button";
import { MenuButton } from "@mui/base";

const Header = () => {
  return (
    <header>
      {/* <div className="logo">
                <a href="/">
                    <img src="logo.png" alt="Logo" />
                </a>
            </div> */}
      <Button>Click Me</Button>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/packages">Packages</a>
          </li>
          <li>
            <a href="/values">Our Values</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="book-now">
        <MenuButton>
          <a href="/book-now">Book Now</a>
        </MenuButton>
      </div>
    </header>
  );
};

export default Header;
