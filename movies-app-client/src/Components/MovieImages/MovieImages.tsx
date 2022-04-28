import { FC, useEffect } from "react";

import { IMG_PATH } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAllImages } from "../../store/slices";
import "./MovieImages.css";

const MovieImages: FC<{ movieId: number }> = ({ movieId }) => {
  const { images, status } = useAppSelector((state) => state.imagesReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllImages(movieId));
  }, [movieId]);

  return (
    <div className="images-container">
      {status === "pending" && <div>Loading</div>}
      {status === "fulfilled" &&
        images.map((img, index) => (
          <div key={index}>
            <img src={IMG_PATH + img.file_path} alt={img.file_path} />
          </div>
        ))}
    </div>
  );
};

export { MovieImages };
