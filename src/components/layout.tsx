import React, { ReactNode } from "react";

interface layout {
  children: ReactNode;
}

const Layout: React.FC<layout> = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Layout;
