import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <a className="header__logo">
        <Image
          alt="Header logo"
          src="/assets/default-logo.png"
          layout="fill"
          objectFit="contain"
          quality={100}
          priority
        />
      </a>
    </Link>
  );
};

export default Logo;
