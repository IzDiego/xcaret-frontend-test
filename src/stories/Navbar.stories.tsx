import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "~/components/layout/navbar/NavbarIndex";
import { createMockStore } from "./mocks/crateMockStore";
import Providers from "~/redux/providers";
import "~/styles/globals.css";
import { changeIsMobile } from "./mocks/react-device-detect-mock";

const meta: Meta<typeof Navbar> = {
  title: "Components/layout/Navbar",
  component: Navbar,
  decorators: [
    (Story, contex) => {
      createMockStore(contex.args.state.language);
      return (
        <Providers>
          <Story />
        </Providers>
      );
    },
  ],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const MobileDecorator = (StoryFn) => {
  changeIsMobile(true);
  return <StoryFn />;
};

const DesktopDecorator = (StoryFn) => {
  changeIsMobile(false);
  return <StoryFn />;
};

export const Default: Story = {
  args: {
    state: {
      language: null,
    },
  },
};

export const MobileView: Story = {
  args: {
    state: {
      language: null,
    },
  },
  decorators: [MobileDecorator],
};

export const DesktopView: Story = {
  args: {
    state: {
      language: null,
    },
  },
  decorators: [DesktopDecorator],
};

export const Loading: Story = {
  args: {
    state: {
      language: {
        es: null,
      },
    },
  },
};

export const WithMoreCurrencies: Story = {
  args: {
    state: {
      language: {
        es: {
          navbar: {
            logo: "https://www.hotelxcaret.com/assets/logos/concentrador-hoteles/hoteles-logos.svg",
            menu: {
              lang: {
                title: "es",
                href: "/es/",
              },
              contact: "contact",
              currency: ["mxn", "usd", "eur", 'cad', 'gbp', 'jpy', 'czk'],
            },
          },
        },
      },
    },
  },
};
