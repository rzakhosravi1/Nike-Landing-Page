const Button = ({ text, iconUrl, color, textColor }) => {
  return (
    <div>
      <button
        className={`${textColor ? `${textColor} border` : "text-white"} font-montserrat text-md leading-7 px-7 py-3 rounded-full flex items-center
       ${color} gap-x-2 cursor-pointer `}
      >
        {text}
        {iconUrl && (
          <img
            alt="arrow right icon"
            className="ml-2 rounded-full bg-white w-5 h-5"
            src={iconUrl}
          />
        )}
      </button>
    </div>
  );
};

export default Button;
