import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCurrency } from "~/redux/slices/currencySlice";
import { selectLanguage } from "~/redux/slices/languageSlice";

interface IModalPurchaseProps {
  title: string;
  isVisible: boolean;
  onClose: () => void;
  reservationDetails: { name: string; price: number };
}

const ModalPurchase: React.FC<IModalPurchaseProps> = ({
  title,
  isVisible,
  onClose,
  reservationDetails,
}) => {
    const currentLanguage = useSelector(selectLanguage) as Language;
    const currentCurrency = useSelector(selectCurrency);

  const [reservationCode, setReservationCode] = useState<string>("");
  const [conversionRate, setConversionRate] = useState<number>(1);
  const [convertedPrice, setConvertedPrice] = useState<number>(
    reservationDetails.price,
  );

  const texts: Record<string, Record<Language, string>> = {
    code: {
      es: "Código de reserva: ",
      en: "Reservation code: ",
    },
    reservation: {
      es: "Reserva para: ",
      en: "Reservation for: ",
    },
    reserve: {
      es: "Reservar",
      en: "Reserve",
    },
    price: {
      es: "Precio: ",
      en: "Price: ",
    },
  };

  const handleClose = () => {
    onClose();
  };
  const router = useRouter();

  const generateReservationCode = () => {
    return Math.random().toString(36).toUpperCase().substr(2, 8);
  };

  const fetchConversionRate = async (target: string) => {
    try {
      const response = await fetch(`/api/exchangeRate?target=${target}`);
      if (!response.ok) {
        throw new Error("Failed to fetch conversion rate.");
      }
      const data = await response.json();
      return data.rate;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    const getAndSetConversionRate = async () => {
      if (isVisible) {
        if (currentCurrency !== "mxn") {
          const rate = await fetchConversionRate(
            currentCurrency.toLocaleUpperCase(),
          );
          if (rate !== null) {
            setConversionRate(rate);
            setConvertedPrice(reservationDetails.price * rate);
          }
        } else {
          setConversionRate(1);
          setConvertedPrice(reservationDetails.price);
        }
      }
    };

    void getAndSetConversionRate();
  }, [isVisible, currentCurrency]);

  useEffect(() => {
    if (isVisible) {
      setReservationCode(generateReservationCode);
    }
  }, [isVisible]);

  const handleContinue = () => {
    void router.push("/thanks");
  };

  const modalClassName = () => {
    if (isMobile) {
      return `pointer-events-none fixed right-7 top-14 z-[1055] h-auto w-full rounded-lg border border-solid border-gray-500 transition-all duration-300 ease-in-out min-[300px]:mx-auto min-[300px]:max-w-[300px] ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0"
      }`;
    } else {
      return `pointer-events-none fixed right-7 top-14 z-[1055] h-auto w-250 rounded-lg border border-solid border-gray-500 transition-all duration-300 ease-in-out min-[476px]:mx-auto min-[576px]:max-w-[500px] ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0"
      }`;
    }
  };
  return (
    <div data-te-modal-dialog-ref className={modalClassName()}>
      <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-lg border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
        <div className="bg-info-600 flex flex-shrink-0 items-center justify-between rounded-t-md p-4 dark:border-b dark:border-neutral-500 dark:bg-transparent">
          <h5
            className="text-xl font-medium leading-normal text-black"
            id="rightTopModalLabel"
          >
            {title}
          </h5>
          <button
            type="button"
            className="box-content rounded-none border-none text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
            onClick={handleClose}
          >
            <FaTimes size={20} />
          </button>
        </div>
        <div className="relative flex flex-auto p-4" data-te-modal-body-ref>
          <div className="ml-8">
            <div className="p-4">
              <h5>
                {texts.code[currentLanguage]} {reservationCode}
              </h5>
              <p>
                {texts.reservation[currentLanguage]} {reservationDetails.name}
              </p>
              <p>
                {texts.price[currentLanguage]}${convertedPrice.toFixed(2)}{" "}
                {currentCurrency.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
          <button
            onClick={handleContinue}
            className="focus:shadow-outline-blue rounded-md bg-blue-600 px-6 py-2 text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:border-blue-900 focus:outline-none active:bg-blue-800"
          >
            {texts.reserve[currentLanguage]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPurchase;

type Language = 'es' | 'en';
