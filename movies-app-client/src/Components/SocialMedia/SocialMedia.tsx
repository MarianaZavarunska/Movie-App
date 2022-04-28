import { FC } from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

import { useAppSelector } from "../../hooks";
import "./SocialMedia.css";
import "./SocialMedia.response.css";

const SocialMedia: FC = () => {
  const { isSwitched } = useAppSelector((state) => state.moviesReducer);
  return (
    <div
      className={
        isSwitched ? "social-media-container on" : "social-media-container "
      }
    >
      <BsFacebook size={20} />
      <BsInstagram size={20} />
      <MdAlternateEmail size={20} />
    </div>
  );
};

export { SocialMedia };
