import { FC, useEffect } from "react";

import { Iframe } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getAllVideos } from "../../store/slices";

import "./MovieVideos.css";

const MovieVideo: FC<{ movieId: number }> = ({ movieId }) => {
  const { videos,errors } = useAppSelector((state) => state.videoReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllVideos(movieId));
  }, [movieId]);

  return (
    <div>
      {/* {errors &&  <h1>{errors}</h1> } */}
      {videos.length > 0 && <h2>Trailers</h2>}
      <div className="videos-container">
        {videos &&
          videos.map((video) => <Iframe key={video.id} videoKey={video.key} />)}
      </div>
    </div>
  );
};

export { MovieVideo };
