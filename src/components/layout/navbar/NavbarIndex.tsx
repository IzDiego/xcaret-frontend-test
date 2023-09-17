import { useSelector } from "react-redux";
import { selectLanguage, selectLocalizedLocales } from "~/redux/slices/languageSlice";
import CurrencySelector from "./CurrencySelect";
import LanguageSelector from "./LangSelect";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { isMobile } from "react-device-detect";
import Link from "next/link";

const Navbar = () => {
  const localizedLocales = useSelector(selectLocalizedLocales);
  const currentLanguage = useSelector(selectLanguage)
  const [menuOpen, setMenuOpen] = useState(false);

  const text = {
    language:{es:'Idioma',en:'Language'},
    currency:{es:'Moneda',en:'Currency'},
  }

  const textMobileMenu = () => {
    if(currentLanguage === 'es'){
      return {
        language: text.language.es,
        currency: text.currency.es
      }
    }else{
      return {
        language: text.language.en,
        currency: text.currency.en
      }
    }
  }

  const MobileMenu = () => (
    <div
      className={`${
        menuOpen ? "block" : "hidden"
      } w-200 fixed right-1 top-16 z-40 bg-gray-200 p-4`}
    >
      <div className="container mx-auto py-4">
        <a
          href="#"
          className="mb-2 block rounded px-3 py-2 text-black hover:bg-black hover:text-white"
        >
          {localizedLocales?.navbar?.menu?.contact.toLocaleUpperCase()}
        </a>
        <div className="mb-2">
        <p className="text-sm text-black mb-1">{textMobileMenu().language}</p>
          <LanguageSelector />
        </div>
        <div className="mb-2">
        <p className="text-sm text-black mb-1">{textMobileMenu().currency}</p>
          <CurrencySelector
            menuOptions={localizedLocales?.navbar?.menu?.currency}
          />
        </div>
      </div>
    </div>
  );

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-200 p-4 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-2xl font-bold">
              <img src={localizedLocales?.navbar?.logo}></img>
            </Link>
          </div>
          {isMobile ? (
            <div>
              <FaBars
                size={24}
                color="black"
                onClick={() => setMenuOpen(!menuOpen)}
              />
              {menuOpen && <MobileMenu />}
            </div>
          ) : (
            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded px-3 py-2 text-black hover:bg-black hover:text-white"
              >
                {localizedLocales?.navbar?.menu?.contact.toLocaleUpperCase()}
              </a>
              <LanguageSelector />
              <CurrencySelector
                menuOptions={localizedLocales?.navbar?.menu?.currency}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
