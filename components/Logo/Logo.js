import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a className="header__logo">
        <img src="/assets/default-logo.png" />
      </a>
    </Link>
  );
};

export default Logo;
