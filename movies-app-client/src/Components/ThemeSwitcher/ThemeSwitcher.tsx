import { FC } from "react";
import { Switch } from "antd";

import { useAppDispatch } from "../../hooks";
import { setSwitch } from "../../store/slices";
import "./ThemeSwitcher.css";

const ThemeSwitcher: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Switch onClick={() => dispatch(setSwitch())} />
    </div>
  );
};

export { ThemeSwitcher };
