import { FC } from "react";

import "./Logo.css";

const Logo: FC = () => {
 
  return (
    <div className="logo">
      <img
        src={ require("../../images/logo.png") }
        alt="logo"/>
    </div>
  );
};

export { Logo };
