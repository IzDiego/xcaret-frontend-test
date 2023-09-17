import React from "react";
import { isMobile } from "react-device-detect";

interface LegalsProps {
  legals: string;
}

const LegalsSection: React.FC<LegalsProps> = ({ legals }) => {
  const convertBreaks = (text: string) => {
    return text.split("<br/>").map((str, index, array) => (
      <p key={index}>
        {str}
        {index !== array.length - 1 && <br />}
      </p>
    ));
  };
  return (
    <section
      className={`bg-neutral-200 text-neutral-700 ${isMobile ? "" : "-mx-8"}`}
    >
      <div className="mx-auto max-w-screen-lg px-8 text-center p-4">
        {convertBreaks(legals)}
      </div>
    </section>
  );
};

export default LegalsSection;
