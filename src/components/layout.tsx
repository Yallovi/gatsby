import React, { ReactNode } from "react";
import { Link } from "gatsby";

interface Props {
  children: ReactNode;
  //   pageTitle: string;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      {/* <title>{pageTitle}</title> */}
      <main>
        {/* <h1>{pageTitle}</h1> */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
