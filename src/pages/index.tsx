import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  selectLocalizedLocales,
  setLocales,
} from "../redux/slices/languageSlice";
import { isMobile } from "react-device-detect";
import Layout from "~/components/layout/Layout";
import CarouselWithText from "~/components/common/carousel/Carousel";
import Hero from "~/components/common/hero/Hero";

import { type Langs, type ILocalizedData } from "~/entities/langEntity";
import { useEffect, useState } from "react";
import LegalsSection from "~/components/common/legal/LegalIndex";

interface IHomeProps {
  data: Langs;
}
export default function Home({ data }: IHomeProps) {
  const dispatch = useDispatch();
  const localizedData: ILocalizedData = useSelector(selectLocalizedLocales);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  let currentPosition: "left" | "right" = "left";

  const dynamicPosition = () => {
    if (currentPosition === "right") {
      currentPosition = "left";
      return "right";
    } else {
      currentPosition = "right";
      return "left";
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(setLocales(data));
      setIsLoading(false);
    }
  }, [data]);

  console.log(localizedData, "localizedData");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const carouselItemsSource = isMobile
    ? localizedData.carousel.mobile.map((item) => item.src)
    : localizedData.carousel.desktop.map((item) => item.src);

  //codigo extra para mostrar mas items
  let promotionsToShow = localizedData.promotions;

  if (promotionsToShow.length > 0 && promotionsToShow.length < 3) {
    const refPromo = promotionsToShow[0];
    while (promotionsToShow.length < 3) {
      promotionsToShow = [...promotionsToShow, { ...refPromo }];
    }
  }
  return (
    <>
      <Layout>
        <Hero
          title={localizedData.header.h1}
          description={localizedData.header.paragraphs[0]!}
          buttonText={"Descuento " + localizedData.header.discount}
          buttonLink="/#"
        />
        {promotionsToShow.map((promo, index) => (
          <CarouselWithText
            key={index}
            title={promo.title}
            direction={dynamicPosition()}
            carouselItems={carouselItemsSource}
            text={promo.Subtitle}
            autoSlide={index === 0}
            imagePromo={promo.imagePromo}
            buttonBook={localizedData.buttonBook.text}
          />
        ))}
        <LegalsSection legals={localizedData.legals} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://raw.githubusercontent.com/javialcocer/test-json/main/data.json",
  );
  const data: Langs = (await res.json()) as Langs;

  return {
    props: {
      data,
    },
  };
}
