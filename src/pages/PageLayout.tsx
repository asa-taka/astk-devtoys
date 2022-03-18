import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const PageLayout: React.FC<Props> = (p) => {
  console.log(p.children);
  return (
    <div>
      PageLayout
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
