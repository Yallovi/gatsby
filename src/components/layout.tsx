import React, { ReactNode } from "react";
import { Link } from "gatsby";

interface Props {
  children: ReactNode;
  //   pageTitle: string;
}

const Layout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Layout;
