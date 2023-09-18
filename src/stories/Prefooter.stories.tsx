import type { Meta, StoryObj } from "@storybook/react";
import Prefooter from "~/components/layout/prefooter/PrefooterIndex";
import { createMockStore } from "./mocks/crateMockStore";
import Providers from "~/redux/providers";
import "~/styles/globals.css";
import { changeIsMobile } from "./mocks/react-device-detect-mock";

const meta: Meta<typeof Prefooter> = {
  title: "Components/layout/Prefooter",
  component: Prefooter,
  decorators: [
    (Story, context: { args: StoryContextArgs }) => {
      if (context.args?.state?.language) {
        createMockStore(context.args.state.language);
      }
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

const MobileDecorator = (StoryFn: () => React.ReactElement) => {
  changeIsMobile(true);
  return StoryFn();
};

const DesktopDecorator = (StoryFn: () => React.ReactElement) => {
  changeIsMobile(false);
  return StoryFn();
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

export const WithOutMexico: Story = {
  args: {
    state: {
      language: {
        es: {
          prefooter: {
            contactCenter: {
              title: "ATENCIÓN A CLIENTES",
              email: "correoTestDiego@hotelxcaret.com",
            },
            numbers: [
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
                name: "Chile:",
                number: "800-835-016",
                href: "0800835016",
              },
            ],
            social: {
              facebookUrl: "https://www.facebook.com/",
              instagramUrl: "https://www.instagram.com/",
              twitterUrl: "https://twitter.com/",
            },
          },
        },
      },
    },
  },
};

interface StoryContextArgs {
  state?: {
    language?: object | null;
  };
}
