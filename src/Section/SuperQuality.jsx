import { shoe8 } from "../assets/images";
import Button from "../Component/Button";

const SuperQuality = () => (
  <section className="flex flex-col lg:flex-row  max-container w-full gap-18 ">
    <div className=" flex justify-center w-full flex-col max-w-lg ">
      <h2 className="font-palanquin text-4xl font-semibold font-montserrat">
        We Provide You <span className="text-coral-red">Super Quality</span>{" "}
        Shoes
      </h2>
      <p className="mt-4 info-text max-w-lg">
        Ensuring premium comfort and style, our meticulously crafted footwear is
        designed to elevate your experience, providing you with unmatched
        quality, innovation, and a touch of elegance. Our dedication to detail
        and excellence ensures your satisfaction
      </p>
      <p className="mt-6 info-text max-w-lg">
        Our dedication to detail and excellence ensures your satisfaction
      </p>
      <div className="mt-8">
        <Button text={"View details"} />
      </div>
    </div>
    <div className="flex flex1 max-container items-center ">
      <img src={shoe8} alt="shoe8" width={600} height={600} />
    </div>
  </section>
);

export default SuperQuality;
