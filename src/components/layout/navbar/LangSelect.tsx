import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, selectLanguage } from "~/redux/slices/languageSlice";
import { FaCaretDown } from "react-icons/fa";

function LanguageSelector() {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectLanguage);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedLanguage = event.target.value;
    dispatch(setLanguage(selectedLanguage));
  };

  return (
    <div className="relative inline-flex">
      <select
        value={currentLanguage}
        onChange={handleLanguageChange}
        className="h-10 w-16 appearance-none rounded-md border border-gray-300 bg-transparent pl-3 pr-6 text-black hover:border-black focus:outline-none"
      >
        <option className="bg-white-800 text-black" value="es">ES</option>
        <option className="bg-white-800 text-black" value="en">EN</option>
      </select>
      <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-black">
        <FaCaretDown />
      </span>
    </div>
  );
}

export default LanguageSelector;
