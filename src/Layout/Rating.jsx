import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  const maxRating = 5;
  const filledStars = Array(rating).fill(null);

  const emptyStars = Array(maxRating - rating).fill(null);

  return (
    <div className="rating">
      {filledStars.map((_, index) => (
        <input
          key={index}
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          checked
        />
      ))}
      {emptyStars.map((_, index) => (
        <input
          key={index}
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-gray-200"
        />
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
};
export default Rating;
