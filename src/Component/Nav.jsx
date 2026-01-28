import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../Constant/index";
const Nav = () => (
  <header className="py-8 padding-x font-palanquin">
    <nav className="flex justify-between items-center">
      <a href="#">
        <img src={headerLogo} alt="logo" width={129} height={1000} />
      </a>
      <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        <li
          className="gap-x-12 flex items-center max-lg:hidden
        font-montserrat leading-normal text-lg text-slate-gray"
        >
          {navLinks.map((item, index) => (
            <a key={index} href={item.href}>
              {item.label}
            </a>
          ))}
        </li>
      </ul>
      <ul>
        <li className="gap-x-2 flex items-center max-lg:hidden font-montserrat leading-normal text-lg text-black font-medium cursor-pointer">
          <a href="#">login</a>/<a href="&">sign up</a>
        </li>
      </ul>
      <a href="#" className="lg:hidden">
        <img src={hamburger} alt="hamburger" width={24} height={24} />
      </a>
    </nav>
  </header>
);

export default Nav;
