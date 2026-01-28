import { reviews } from "../Constant";
import ReviewsDetail from "../Component/ReviewsDetail";
const CostumerReviews = () => {
  return (
    <section className="flex justify-center flex-col items-center w-full">
      <h2 className="font-bold text-[40px] font-palanquin font-montserrat max-sm:leading-13">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h2>
      <p className="max-w-lg mt-3 text-slate-gray font-montserrat text-center ">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex flex-1 max-lg:flex-col justify-evenly items-center gap-14 mt-20 w-full ">
        {reviews.map((person) => (
          <ReviewsDetail key={person.customerName} {...person} />
        ))}
      </div>
    </section>
  );
};

export default CostumerReviews;
