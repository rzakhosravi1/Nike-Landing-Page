const ShoeCard = ({ changeBigShoe, imageUrl, currentShoeImage }) => {
  const handleClick = () => {
    if (imageUrl !== currentShoeImage) {
      changeBigShoe(imageUrl);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        currentShoeImage === imageUrl
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
    >
      <div
        className={`w-21 h-21 md:w-30 md:h-30 xl:h-38 xl:w-38 rounded-2xl border border-white/25 bg-primary/90 backdrop-blur-sm shadow-[0_20px_45px_rgba(0,0,0,0.35)] flex items-center justify-center overflow-hidden1 cursor-pointery bg-card
          `}
        onClick={handleClick}
      >
        <img
          src={imageUrl}
          alt="Shoe 2"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
