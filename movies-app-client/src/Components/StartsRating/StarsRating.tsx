import { FC } from "react";

const StarsRating: FC<{ rating: number }> = ({ rating }) => {
  let rate = Math.round((rating / 10) * 5);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => (
        <button
          type="button"
          key={index}
          style={{
            color: index < rate ? "yellow" : "grey",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <span className="star">&#9733;</span>
        </button>
      ))}
    </div>
  );
};

export { StarsRating };
