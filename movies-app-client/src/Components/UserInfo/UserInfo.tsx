import { FC } from "react";

import { useAppSelector } from "../../hooks";
import "./UserInfo.css";
import "./UserInfo.response.css";

const UserInfo: FC = () => {
  const { isSwitched } = useAppSelector((state) => state.moviesReducer);

  const { accessToken, user } = useAppSelector((state) => state.userReducer);

  return (
    <div
      className={isSwitched ? "user-info-container on" : "user-info-container"}
    >
      <img
        // src={require("../../images/female-user.png")}
        src={user?.avatar}
        alt="user"
        style={{ display: accessToken ? "block" : "none" }}
      />
      <div style={{ display: accessToken ? "block" : "none" }}>
        {user?.firstName}
      </div>
    </div>
  );
};

export { UserInfo };
