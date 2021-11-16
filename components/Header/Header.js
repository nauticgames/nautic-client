import React from "react";
import Logo from "../Logo";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className="main__header">
      <div className="wrapped">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
