import Button from "../Component/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
const SpecialOffer = () => (
  <section className="flex w-full gap-10 item-center justify-center max-lg:flex-col-reverse ">
    <div className="flex1">
      <img src={offer} alt="offers" width={770} height={770} />
    </div>
    <div className=" flex justify-center w-full flex-col max-w-lg ">
      <h2 className="font-palanquin text-4xl font-semibold font-montserrat">
        <span className="text-coral-red">Special</span> Offer
      </h2>
      <p className="mt-4 info-text ">
        Embark on a shopping journey that redefines your experience with
        unbeatable deals. From premier selections to incredible savings, we
        offer unparalleled value that sets us apart.
      </p>
      <p className="mt-6 info-text">
        Navigate a realm of possibilities designed to fulfill your unique
        desires, surpassing the loftiest expectations. Your journey with us is
        nothing short of exceptional.
      </p>
      <div className="mt-8 flex items-center gap-3 flex-wrap">
        <Button text={"Shop now"} iconUrl={arrowRight} color={"bg-coral-red"} />
        <Button
          text={"Learn more"}
          textColor={"text-slate-gray"}
          color={"bg-white"}
        />
      </div>
    </div>
  </section>
);

export default SpecialOffer;
