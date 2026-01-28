import { star } from "../assets/icons";
const PopularCard = ({ imgURL, name, price }) => (
  <section>
    <div>
      <img src={imgURL} alt={name} />
    </div>
    <div className="mt-4">
      <div className="flex items-center justify-start mb-2 align-center">
        <img src={star} alt="Rank" />
        <p className="ml-2 font-montserrat text-lg text-slate-gray">(4.5)</p>
      </div>
      <h3 className="text-2xl font-semibold font-montserrat mt-2 font-palanquin">
        {name}
      </h3>
      <p className="text-xl text-coral-red font-montserrat font-semibold mt-2">
        {price}
      </p>
    </div>
  </section>
);

export default PopularCard;
