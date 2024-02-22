import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }: Props) => {
  const str = Math.random(1) * 5;
  const rvw = Math.floor(Math.random(1) * 40);

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {str >= index + 1 ? (
          <BsStarFill />
        ) : str >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div className="stars-component">
      <div className="stars">{tempStars}</div>
      <p className="reviews">({rvw} customer reviews)</p>
    </div>
  );
};

type Props = {
  stars: number;
  reviews: number;
};

export default Stars;
