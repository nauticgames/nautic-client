import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="home__footer">
      <div className="wrapped">
        <Link href="/">
          <a className="footer__logo">
            <Image
              src="/assets/white-logo.png"
              alt="Footer logo"
              layout="fill"
              objectFit="contain"
              quality={100}
              priority
            />
          </a>
        </Link>
        <p>2022 &copy; Nautic Games</p>
      </div>
    </footer>
  );
};

export default Footer;
