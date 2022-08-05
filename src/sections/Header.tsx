import MenuHambuger from "../assets/icons/MenuHambuger";
import Logo from "../assets/Logo";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  return (
    <>
      <header className="w-100 p-6  ">
        <div className="flex justify-between lg:container md:mx-auto">
          <Logo />
          <div className="md:hidden">
            <MenuHambuger />
          </div>
          <div className="hidden gap-16 font-inter text-lg text-gray-200 font-medium md:flex">
            <Link to="Funcionalidades" smooth="true">
              Funcionalidades
            </Link>
            <Link to="App" smooth="true">
              App
            </Link>
            <Link to="Planos" smooth="true">
              Planos
            </Link>
            <Link to="Contato" smooth="true">
              Contato
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
