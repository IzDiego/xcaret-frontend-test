import type { Meta, StoryObj } from "@storybook/react";
import Footer from "~/components/layout/footer/FooterIndex";
import { createMockStore } from "./mocks/crateMockStore";
import Providers from "~/redux/providers";
import "~/styles/globals.css";
import { changeIsMobile } from "./mocks/react-device-detect-mock";

const meta: Meta<typeof Footer> = {
  title: "Components/layout/Footer",
  component: Footer,
  decorators: [
    (Story, context) => {
      createMockStore(context.args.state.language);
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

export const WithThreeLinks: Story = {
  args: {
    state: {
      language: {
        es: {
          footer: {
            copy: "Display copyright",
            links: [
              {
                title: "Link 1",
                href: "https://example.com/link1",
              },
              {
                title: "Link 2",
                href: "https://example.com/link2",
              },
              {
                title: "Link 3",
                href: "https://example.com/link3",
              },
            ],
          },
        },
      },
    },
  },
};
