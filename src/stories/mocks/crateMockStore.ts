import { setLocales } from "~/redux/slices/languageSlice";
import { store } from "~/redux/store";
import { Langs } from "~/entities/langEntity";
export const createMockStore = (testState?: any) => {
    console.log(testState,'testState')
  if (testState) {
    store.dispatch(setLocales(testState));
  } else {
    store.dispatch(setLocales(dataForMock));
  }
};

const dataForMock: Langs = {
  es: {
    navbar: {
      logo: "https://www.hotelxcaret.com/assets/logos/concentrador-hoteles/hoteles-logos.svg",
      menu: {
        lang: {
          title: "en",
          href: "/en/",
        },
        contact: "contacto",
        currency: ["mxn", "usd", "eur"],
      },
    },
    header: {
      h1: "Viaja y Vuela",
      discount: "15%",
      paragraphs: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        "Suscipit veniam eius aperiam beatae perferendis asperiores soluta dolores at dolor nesciunt tempore eaque, quidem mollitia neque libero, reprehenderit placeat vitae ipsa?",
      ],
    },
    promotions: [
      {
        title: "Hotel Xcaret Arte",
        logoPromo: "https://via.placeholder.com/300x160",
        Subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat. ",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.",
        ],
        button: {
          href: "#",
          text: "¡RESERVA AHORA!",
        },
        imagePromo: "https://via.placeholder.com/660x660",
      },
    ],
    carousel: {
      text: "Consequuntur cupiditate facilis asperiores dicta praesentium amet neque optio obcaecati quam ratione.",
      desktop: [
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Desktop%201",
          alt: "Image 1 desktop alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Desktop%202",
          alt: "Image 2 desktop alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Desktop%203",
          alt: "Image 3 desktop alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Desktop%204",
          alt: "Image 4 desktop alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Desktop%205",
          alt: "Image 5 desktop alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Desktop%206",
          alt: "Image 6 desktop alt",
        },
      ],
      mobile: [
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Mobile%201",
          alt: "Image 1 mobile alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Mobile%202",
          alt: "Image 2 mobile alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Mobile%203",
          alt: "Image 3 mobile alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Mobile%204",
          alt: "Image 4 mobile alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Mobile%205",
          alt: "Image 5 mobile alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Mobile%206",
          alt: "Image 6 mobile alt",
        },
      ],
    },
    buttonBook: {
      href: "",
      text: "¡RESERVA AHORA!",
    },
    legals:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus provident doloribus nihil aperiam blanditiis consequuntur quas beatae minus! Illo alias sit aperiam, recusandae sed consectetur quae iure quia natus eum?<br/>Nisi iusto voluptatem pariatur praesentium dolore accusamus harum facilis exercitationem dolorem at impedit quos atque facere, consequatur libero error explicabo quis enim! Doloremque eveniet, voluptatibus earum quos mollitia quidem vitae.<br/>Ex vitae hic ipsam? Ab nobis eveniet suscipit amet dolorum reprehenderit necessitatibus repudiandae! Laborum fugiat libero eius, odio excepturi ipsam, magni, id labore in architecto quod nesciunt? Veritatis, quia vitae.",
    prefooter: {
      contactCenter: {
        title: "ATENCIÓN A CLIENTES",
        email: "reservaciones@hotelxcaret.com",
      },
      numbers: [
        {
          name: "México:",
          number: "998-883-3143",
          href: "9988833143",
          main: true,
        },
        {
          name: "USA-CAN:",
          number: "1-855-326-0682",
          href: "18853260682",
          main: true,
        },
        {
          name: "Resto del mundo",
          main: true,
        },
        {
          name: "Brasil:",
          number: "0-800-892-3371",
          href: "08008923371",
        },
        {
          name: "Argentina:",
          number: "0-800-122-0384",
          href: "08001220384",
        },
        {
          name: "Colombia:",
          number: "01-800-952-0705",
          href: "018009520705",
        },
        {
          name: "España:",
          number: "900-965-224",
          href: "900965224",
        },
        {
          name: "Chile:",
          number: "800-835-016",
          href: "0800835016",
        },
      ],
      social: {
        facebookUrl: "#",
        instagramUrl: "#",
        twitterUrl: "#",
      },
    },
    footer: {
      copy: "©Copyright Experiencias Xcaret Hotel S.A.P.I. de C.V",
      links: [
        {
          tittle: "Aviso de privacidad",
          href: "#",
        },
        {
          tittle: "Términos de uso",
          href: "#",
        },
      ],
    },
  },
  en: {
    navbar: {
      logo: "https://www.hotelxcaret.com/assets/logos/concentrador-hoteles/hoteles-logos.svg",
      menu: {
        lang: {
          title: "es",
          href: "/es/",
        },
        contact: "contact",
        currency: ["mxn", "usd", "eur"],
      },
    },
    header: {
      h1: "Travel and Fly",
      discount: "15%",
      paragraphs: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        "Suscipit veniam eius aperiam beatae perferendis asperiores soluta dolores at dolor nesciunt tempore eaque, quidem mollitia neque libero, reprehenderit placeat vitae ipsa?",
      ],
    },
    promotions: [
      {
        title: "Hotel Xcaret Arte",
        logoPromo: "https://via.placeholder.com/300x160",
        Subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat. ",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.",
        ],
        button: {
          href: "#",
          text: "¡BOOK NOW!",
        },
        imagePromo: "https://via.placeholder.com/660x660",
      },
    ],
    carousel: {
      text: "Consequuntur cupiditate facilis asperiores dicta praesentium amet neque optio obcaecati quam ratione.",
      desktop: [
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Desktop%201",
          alt: "Image 1 desktop alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Desktop%202",
          alt: "Image 2 desktop alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Desktop%203",
          alt: "Image 3 desktop alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Desktop%204",
          alt: "Image 4 desktop alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Desktop%205",
          alt: "Image 5 desktop alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Desktop%206",
          alt: "Image 6 desktop alt",
        },
      ],
      mobile: [
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Mobile%201",
          alt: "Image 1 mobile alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Mobile%202",
          alt: "Image 2 mobile alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Mobile%203",
          alt: "Image 3 mobile alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Mobile%204",
          alt: "Image 4 mobile alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Mobile%205",
          alt: "Image 5 mobile alt",
        },
        {
          src: "https://via.placeholder.com/380x480&text=Slide%20Mobile%206",
          alt: "Image 6 mobile alt",
        },
      ],
    },
    buttonBook: {
      href: "",
      text: "¡BOOK NOW!",
    },
    legals:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus provident doloribus nihil aperiam blanditiis consequuntur quas beatae minus! Illo alias sit aperiam, recusandae sed consectetur quae iure quia natus eum?<br/>Nisi iusto voluptatem pariatur praesentium dolore accusamus harum facilis exercitationem dolorem at impedit quos atque facere, consequatur libero error explicabo quis enim! Doloremque eveniet, voluptatibus earum quos mollitia quidem vitae.<br/>Ex vitae hic ipsam? Ab nobis eveniet suscipit amet dolorum reprehenderit necessitatibus repudiandae! Laborum fugiat libero eius, odio excepturi ipsam, magni, id labore in architecto quod nesciunt? Veritatis, quia vitae.",
    prefooter: {
      contactCenter: {
        title: "CONTACT CENTER",
        email: "reservaciones@hotelxcaret.com",
      },
      numbers: [
        {
          name: "México:",
          number: "998-883-3143",
          href: "9988833143",
          main: true,
        },
        {
          name: "USA-CAN:",
          number: "1-855-326-0682",
          href: "18853260682",
          main: true,
        },
        {
          name: "Rest of the world",
          main: true,
        },
        {
          name: "Brasil:",
          number: "0-800-892-3371",
          href: "08008923371",
        },
        {
          name: "Argentina:",
          number: "0-800-122-0384",
          href: "08001220384",
        },
        {
          name: "Colombia:",
          number: "01-800-952-0705",
          href: "018009520705",
        },
        {
          name: "España:",
          number: "900-965-224",
          href: "900965224",
        },
        {
          name: "Chile:",
          number: "800-835-016",
          href: "0800835016",
        },
      ],
      social: {
        facebookUrl: "#",
        instagramUrl: "#",
        twitterUrl: "#",
      },
    },
    footer: {
      copy: "©Copyright Experiencias Xcaret Hotel S.A.P.I. de C.V",
      links: [
        {
          tittle: "Privacy notice",
          href: "#",
        },
        {
          tittle: "Terms of use",
          href: "#",
        },
      ],
    },
  },
};
