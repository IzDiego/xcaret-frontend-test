import { useSelector } from "react-redux";
import {
  selectLocales,
  selectLocalizedLocales,
} from "~/redux/slices/languageSlice";
import CurrencySelector from "./CurrencySelect";
import LanguageSelector from "./LangSelect";

function Navbar() {
  const localizedLocales = useSelector(selectLocalizedLocales);

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-200 p-4 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <a href="#" className="text-2xl font-bold">
              <img src={localizedLocales?.navbar?.logo}></img>
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-black rounded px-3 py-2 hover:bg-black hover:text-white">
              {localizedLocales.navbar.menu.contact.toLocaleUpperCase()}
            </a>
            <LanguageSelector />
            <CurrencySelector
              menuOptions={localizedLocales.navbar.menu.currency}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
