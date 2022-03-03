import { useState } from "react";
import Logo from "../Logo";
import Nav from "../Nav/Nav";
import NavButton from "../NavButton";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="main__header">
      <div className="wrapped">
        <Logo />
        <input
          type="checkbox"
          checked={showNav}
          className="navbtn__check"
          readOnly
        />
        <NavButton handleShowNav={handleShowNav} showNav={showNav} />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
