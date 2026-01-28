const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="px-10 py-16 shadow-2xl rounded-2xl sm:w-[350px] w-full flex-1 min-w-[350px]">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full mb-4">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h2 className="font-bold text-xl font-palanquin mb-3">{label}</h2>
      <p className="info-text white max-w-lg ">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
