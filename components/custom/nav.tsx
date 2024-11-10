import { HTMLAttributes } from "react";

type NavProps = HTMLAttributes<HTMLDivElement> & {
  className: string | undefined;
};

const Nav = ({ className }: NavProps) => {
  return <nav className={`${className}`}>desktop nav</nav>;
};

export default Nav;
