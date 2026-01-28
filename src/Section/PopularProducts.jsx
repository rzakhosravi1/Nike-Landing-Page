import { products } from "../Constant";
import PopularCard from "../Component/PopularCard";
const PopularProducts = () => (
  <section className="max-container">
    <div className="justify-items-start">
      <h2 className="text-4xl font-bold mb-4 font-montserrat font-palanquin">
        Our <span className="text-coral-red">Popular</span> Products
      </h2>
      <p className=" text-md text-gray-600  max-w-lg font-montserrat leading-normal">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 mt-11 max-container  ">
      {products.map((product) => (
        <PopularCard key={product.name} {...product} />
      ))}
    </div>
  </section>
);

export default PopularProducts;
