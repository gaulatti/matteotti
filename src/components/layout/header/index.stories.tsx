import { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';
import { MemoryRouter } from 'react-router';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  decorators: [
    (StoryComponent) => (
      <MemoryRouter>
        <StoryComponent />
      </MemoryRouter>
    ),
  ],
  args: {
    title: 'App Name',
    menu: <div>Menu</div>,
  }
};

export default meta;

export const Primary: StoryObj<typeof Header> = {};
