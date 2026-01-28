import { star } from "../assets/icons";
const ReviewsDetail = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className=" flex items-center flex-col">
      <img
        src={imgURL}
        alt={imgURL}
        width={100}
        height={100}
        className="rounded-full items-center justify-center"
      />
      <p className="text-center info-text mt-7 max-w-sm">{feedback}</p>
      <div className="flex gap-2 mt-2">
        <img src={star} alt={star} />
        <p className="text-slate-gray font-montserrat text-lg">({rating})</p>
      </div>
      <h2 className="font-bold text-2xl font-palanquin mt-2">{customerName}</h2>
    </div>
  );
};

export default ReviewsDetail;
