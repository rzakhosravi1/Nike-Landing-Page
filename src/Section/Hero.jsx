import { useState } from "react";
import Button from "../Component/Button";
import ShoeCard from "../Component/ShoeCard";
import { statistics, shoes } from "../Constant/index";
import arrowRight from "../assets/icons/arrow-right.svg";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center xl:min-h-screen gap-10 max-container px-6"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-5">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1 className="text-8xl font-bold mt-10 font-palanquin max-sm:text-[55px] max-sm:lea ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button text="Shop Now" iconUrl={arrowRight} color="coral-red" />
        <div className="flex gap-9 justify-start items-center mt-25 font-montserrat flex-wrap">
          {statistics.map((item, index) => (
            <div key={index}>
              <p className="font-semibold text-4xl">{item.value}</p>
              <p className="text-slate-gray leading-7">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe}
          alt="ShoeLogo"
          width={610}
          height={502}
          className="relative z-10 object-contain w-full max-w-[610px]"
        />
        <div className="flex absolute -bottom-10 items-center justify-center gap-5 md:gap-8">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                changeBigShoe={(shoe) => setBigShoe(shoe)}
                imageUrl={image.thumbnail}
                currentShoeImage={bigShoe}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
