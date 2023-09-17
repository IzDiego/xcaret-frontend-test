import React from 'react';

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, buttonText, buttonLink = "#" }) => {
  return (
    <div className="bg-gray-500 text-white py-20 px-6 pt-30">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-6">{description}</p>
        <a href={buttonLink} className="bg-red-600 px-6 py-2 rounded font-semibold transition duration-300 hover:bg-red-500">
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default Hero;
