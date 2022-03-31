import { Icon } from "@iconify/react";

const NavButton = ({ handleShowNav, showNav }) => {
  return (
    <Icon
      className="navbtn"
      onClick={handleShowNav}
      icon={!showNav ? "charm:menu-hamburger" : "codicon:chrome-close"}
      color="#505050"
      width={32}
      height={32}
    />
  );
};

export default NavButton;
