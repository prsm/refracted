import { Meta, Story } from '@storybook/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import React from 'react';
import { Spinner, SpinnerProperties } from './spinner';

const meta: Meta = {
  title: 'Design System/Feedback/Spinner',
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

const Template: Story<SpinnerProperties> = (arguments_) => <Spinner {...arguments_} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Current = Template.bind({});
Current.args = {
  color: 'current',
};

export const Lila = Template.bind({});
Lila.args = {
  color: 'lila',
};

export const Violett = Template.bind({});
Violett.args = {
  color: 'violett',
};

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
};

export const Yellow = Template.bind({});
Yellow.args = {
  color: 'yellow',
};

export const Orange = Template.bind({});
Orange.args = {
  color: 'orange',
};

export const Red = Template.bind({});
Red.args = {
  color: 'red',
};

export const White = Template.bind({});
White.args = {
  color: 'white',
};

export const Black = Template.bind({});
Black.args = {
  color: 'black',
};
