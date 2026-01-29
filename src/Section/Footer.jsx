import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../Constant";
const Footer = () => {
  return (
    <footer className="max-container flex flex-col gap-10">
      <div className="flex justify-between gap-10 max-lg:flex-col items-start">
        <div>
          <img src={footerLogo} alt="footerlogo" width={100} height={100} />
          <p className="text-white-400 max-w-sm font-montserrat mt-6">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex gap-3 mt-5">
            {socialMedia.map((logo) => (
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={40}
                className="bg-white rounded-full p-2 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {footerLinks.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <h3 className="text-white font-montserrat font-medium text-xl">
              {item.title}
            </h3>

            <ul className="flex flex-col gap-2">
              {item.links.map((link) => (
                <li
                  key={link.name}
                  className="text-white font-montserrat text-sm cursor-pointer hover:text-slate-gray"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center max-sm:flex-col gap-1">
        <div className="flex gap-2 items-center">
          <img src={copyrightSign} alt="copyright" width={20} />
          <p className="text-white font-montserrat text-sm">
            Copyright. All rights reserved.
          </p>
        </div>
        <a
          href="/"
          className="text-white font-montserrat text-sm hover:text-slate-gray"
        >
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
