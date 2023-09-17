export interface Langs {
  es: ILocalizedData;
  en: ILocalizedData;
}

export interface ILocalizedData {
  navbar: Navbar;
  header: Header;
  promotions: Promotion[];
  carousel: Carousel;
  buttonBook: Button;
  legals: string;
  prefooter: Prefooter;
  footer: Footer;
}

export interface Footer {
  copy: string;
  links: Link[];
}

export interface Link {
  tittle: string;
  href: string;
}

export interface Prefooter {
  contactCenter: ContactCenter;
  numbers: CustomNumber[];
  social: Social;
}

export interface Social {
  facebookUrl: string;
  instagramUrl: string;
  twitterUrl: string;
}

export interface CustomNumber {
  name: string;
  number?: string;
  href?: string;
  main?: boolean;
}

export interface ContactCenter {
  title: string;
  email: string;
}

export interface Carousel {
  text: string;
  desktop: Desktop[];
  mobile: Desktop[];
}

export interface Desktop {
  src: string;
  alt: string;
}

export interface Promotion {
  title: string;
  logoPromo: string;
  Subtitle: string;
  paragraphs: string[];
  button: Button;
  imagePromo: string;
}

export interface Button {
  href: string;
  text: string;
}

export interface Header {
  h1: string;
  discount: string;
  paragraphs: string[];
}

export interface Navbar {
  logo: string;
  menu: Menu;
}

interface Menu {
  lang: Lang;
  contact: string;
  currency: string[];
}

export interface Lang {
  title: string;
  href: string;
}