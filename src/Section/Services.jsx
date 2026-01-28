import { services } from "../Constant/index";
import ServiceCard from "../Component/ServiceCard";
const Services = () => (
  <section>
    <div className="flex flex-wrap justify-center item-center gap-10 max-container">
      {services.map((item) => (
        <ServiceCard
          key={item.label}
          imgURL={item.imgURL}
          subtext={item.subtext}
          label={item.label}
        />
      ))}
    </div>
  </section>
);
export default Services;
