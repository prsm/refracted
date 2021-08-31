import { Meta, Story } from '@storybook/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import React from 'react';
import { Properties, Spinner } from './spinner';

const meta: Meta = {
  title: 'Feedback/Spinner',
  component: Spinner,
  parameters: {
    componentSubtitle: 'Displays a static spinning SVG',
  },
  decorators: [
    (Story: Story): StoryFnReactReturnType => (
      <div className="p-4 max-w-xs text-brand-black bg-brand-white dark:bg-brand-black">
        <Story />
      </div>
    ),
  ],
};

export default meta;

const Template: Story<Properties> = (arguments_) => <Spinner {...arguments_} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Current = Template.bind({});
Current.args = {
  variant: 'current',
};

export const Lila = Template.bind({});
Lila.args = {
  variant: 'lila',
};

export const Violett = Template.bind({});
Violett.args = {
  variant: 'violett',
};

export const Blue = Template.bind({});
Blue.args = {
  variant: 'blue',
};

export const Green = Template.bind({});
Green.args = {
  variant: 'green',
};

export const Yellow = Template.bind({});
Yellow.args = {
  variant: 'yellow',
};

export const Orange = Template.bind({});
Orange.args = {
  variant: 'orange',
};

export const Red = Template.bind({});
Red.args = {
  variant: 'red',
};

export const White = Template.bind({});
White.args = {
  variant: 'white',
};

export const Black = Template.bind({});
Black.args = {
  variant: 'black',
};
