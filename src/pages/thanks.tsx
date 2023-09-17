import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { selectLanguage, setLanguage } from "../redux/slices/languageSlice";
import { isMobile } from "react-device-detect";
import Layout from "~/components/layout/Layout";

const ThankYouPage: React.FC = () => {
  const currentLanguage = useSelector(selectLanguage) as ILanguage;

  const texts: IThanksStrings = {
    title: {
      es: "¡Gracias por tu reserva!",
      en: "Thanks for your reservation!",
    },
    description: {
      es: "Tu reserva ha sido confirmada. Revisa tu email para más detalles.",
      en: "Your reservation has been confirmed. Check your email for more details.",
    },
    linkText: {
      es: "Regresar a la página de inicio",
      en: "Return to the homepage",
    },
  };

  return (
    <>
      <Layout>
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
          <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
            <h1 className="mb-4 text-2xl font-bold">
              {texts.title[currentLanguage]}
            </h1>
            <p className="mb-4">{texts.description[currentLanguage]}</p>
            <Link
              href="/"
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:border-blue-700 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              {texts.linkText[currentLanguage]}
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ThankYouPage;

type ILanguage = "es" | "en";

interface IThanksStrings {
  title: Record<ILanguage, string>;
  description: Record<ILanguage, string>;
  linkText: Record<ILanguage, string>;
}
