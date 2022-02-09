import React from "react";

interface Layout {
  children: JSX.Element;
}

const Layout: React.FC<Layout> = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Layout;
