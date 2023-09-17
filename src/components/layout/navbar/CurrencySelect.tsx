import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency, selectCurrency } from "~/redux/slices/currencySlice";
import { FaCaretDown } from "react-icons/fa";

interface ICurrencySelector {
  menuOptions: string[];
}

function CurrencySelector({ menuOptions }: ICurrencySelector) {
  const dispatch = useDispatch();
  const currentCurrency = useSelector(selectCurrency);

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedCurrency = event.target.value;
    dispatch(setCurrency(selectedCurrency));
  };

  return (
    <div className="relative inline-flex">
      <select
        value={currentCurrency}
        onChange={handleCurrencyChange}
        className="h-10 w-24 appearance-none rounded-md border border-gray-300 bg-transparent pl-3 pr-6 text-black hover:border-black focus:outline-none"
      >
        {menuOptions.map((item: string, index: number) => {
          return (
            <option
              key={index}
              className="bg-white-800 text-black"
              value={item}
            >
              {item.toLocaleUpperCase()}
            </option>
          );
        })}
      </select>
      <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-black">
        <FaCaretDown />
      </span>
    </div>
  );
}

export default CurrencySelector;
