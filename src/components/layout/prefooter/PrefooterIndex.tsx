import React from "react";
import { useSelector } from "react-redux";
import {
  selectLanguage,
  selectLocalizedLocales,
} from "~/redux/slices/languageSlice";

const Prefooter: React.FC = () => {
  const localizedLocales = useSelector(selectLocalizedLocales);
  const currentLanguage = useSelector(selectLanguage) as ILanguage;

  const texts: IPrefootStrings = {
    customerService: {
      es: "ATENCIÓN A CLIENTES",
      en: "CUSTOMER SERVICE",
    },
    socialMedia: {
      es: "REDES SOCIALES",
      en: "SOCIAL MEDIA",
    },
    contactUs: {
      es: "CONTÁCTANOS",
      en: "CONTACT US",
    },
  };
  if(!localizedLocales){
    return <div>Loading...</div>
  }
  
  return (
    <div className="max-w-screen-lg mx-auto px-8 bg-gray-900 p-8 text-white">
      <div className="container mx-auto">
        <div className="mb-6 flex justify-between border-b pb-2">
          <h2 className="text-xl font-bold">
            {texts.customerService[currentLanguage]}
          </h2>
          <h2 className="text-xl font-bold">
            {texts.socialMedia[currentLanguage]}
          </h2>
        </div>
        <div className="mb-6 flex justify-between">
          <p className="text-sm">
            {localizedLocales.prefooter.contactCenter.email}
          </p>
          <div className="flex space-x-4">
            <a
              href={localizedLocales.prefooter.social.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href={localizedLocales.prefooter.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href={localizedLocales.prefooter.social.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
        <div className="mb-4 border-b pb-2">
          <h2 className="text-xl font-bold">
            {texts.contactUs[currentLanguage]}
          </h2>
        </div>
        <div className="flex justify-between">
          <div>
            {["México", "USA-CAN"].map((name) => {
              const num = localizedLocales.prefooter.numbers.find(
                (n) => n.name === name,
              );
              return (
                num && (
                  <div key={name} className="mb-2 flex space-x-4">
                    <span className="font-medium">{num.name} </span>
                    <a href={`tel:${num.href}`} className="underline">
                      {num.number}
                    </a>
                  </div>
                )
              );
            })}
          </div>
          <div>
            <div className="mb-2 flex flex-wrap space-x-4">
              {localizedLocales.prefooter.numbers
                .filter(
                  (n) =>
                    !["México", "USA-CAN", "Rest of the world"].includes(
                      n.name,
                    ),
                )
                .sort((a,b)=>a.name.localeCompare(b.name))
                .map((num) => (
                  <div key={num.name} className="mb-2 flex space-x-4">
                    <span className="font-medium">{num.name} </span>
                    {num.number && (
                      <a href={`tel:${num.href}`} className="underline">
                        {num.number}
                      </a>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prefooter;

type ILanguage = "es" | "en";

interface IPrefootStrings {
  customerService: Record<ILanguage, string>;
  socialMedia: Record<ILanguage, string>;
  contactUs: Record<ILanguage, string>;
}
