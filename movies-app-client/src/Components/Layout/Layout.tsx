import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "..";

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
