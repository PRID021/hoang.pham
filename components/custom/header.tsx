import { HTMLAttributes } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Nav from "@/components/custom/nav";

const Header = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <header className={`py-8 xl:py-12  ${className}`}>
    <div className="container mx-auto ">
      <Link href={"/"}>
        <h1 className="text-4xl font-semibold">
          Hoang <span className="text-accent-foreground">.</span>
        </h1>
      </Link>
      {/* Desktop nav */}
      <Nav className=""></Nav>
    </div>
  </header>
);

export default Header;
