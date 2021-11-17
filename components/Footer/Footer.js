import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="home__footer">
      <div className="wrapped">
        <Link href="/">
          <a>
            <img src="/assets/white-logo.png" />
          </a>
        </Link>
        <p>2021 &copy; Nautic Games</p>
      </div>
    </footer>
  );
};

export default Footer;
