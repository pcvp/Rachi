import MenuHambuger from "../assets/icons/MenuHambuger";
import Logo from "../assets/Logo";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import classNames from "classnames";

export default function Header() {
  const [exibirMenu, setExibirMenu] = useState(false);
  function handleMenuHamburger() {
    setExibirMenu(!exibirMenu);
  }

  return (
    <>
      <header className="w-100 p-6 flex flex-col md:flex-row">
        <div
          className={classNames(
            "flex justify-between md:container md:mx-auto",
            {
              "flex-row": exibirMenu,
            }
          )}
        >
          <Logo />
          <div className="md:hidden">
            <button onClick={handleMenuHamburger}>
              <MenuHambuger />
            </button>
          </div>
        </div>

        <nav
          className={classNames(
            "font-inter text-lg text-gray-200 font-medium md:flex",
            {
              "w-screen h-screen flex flex-col mt-10 gap-5": exibirMenu,
              "hidden gap-16": !exibirMenu,
            }
          )}
        >
          <Link
            to="Funcionalidades"
            onClick={() => setExibirMenu(false)}
            smooth="true"
            className="cursor-pointer"
          >
            Funcionalidades
          </Link>
          <Link
            to="App"
            onClick={() => setExibirMenu(false)}
            smooth="true"
            className="cursor-pointer"
          >
            App
          </Link>
          <Link
            to="Planos"
            onClick={() => setExibirMenu(false)}
            smooth="true"
            className="cursor-pointer"
          >
            Planos
          </Link>
          <Link
            to="Contato"
            onClick={() => setExibirMenu(false)}
            smooth="true"
            className="cursor-pointer"
          >
            Contato
          </Link>
        </nav>
      </header>
    </>
  );
}
