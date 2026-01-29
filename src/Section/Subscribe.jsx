import Button from "../Component/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold text-center lg:text-left">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input flex-1 max-sm:w-full max-sm:border max-sm:border-slate-gray max-sm:rounded-full max-sm:p-4"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button text="Sign up" widthFull="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
