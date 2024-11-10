import { HTMLAttributes } from "react";

type PageProps = HTMLAttributes<HTMLDivElement> & {
  className: string | undefined;
};

const Page = ({ className }: PageProps) => {
  return <div className={`${className}`}>Home Page</div>;
};

export default Page;
