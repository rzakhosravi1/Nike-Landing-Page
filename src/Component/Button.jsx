const Button = ({ text, iconUrl, color, textColor, widthFull }) => {
  return (
    <button
      className={`
        flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
        ${textColor ? textColor : "text-white border-coral-red"} 
        ${color ? color : "bg-coral-red"} 
        ${widthFull && "w-full"}
      `}
    >
      {text}
      {iconUrl && (
        <img
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
          src={iconUrl}
        />
      )}
    </button>
  );
};

export default Button;
