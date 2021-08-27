import { Meta, Story } from '@storybook/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import React from 'react';
import { Properties, TextField } from './textfield';

const meta: Meta = {
  title: 'Inputs/Text Field',
  component: TextField,
  argTypes: { onChanged: { action: 'changed' } },
  decorators: [
    (Story: Story): StoryFnReactReturnType => (
      <div className="p-4 bg-brand-white dark:bg-brand-black">
        <Story />
      </div>
    ),
  ],
};

export default meta;

const Template: Story<Properties> = (arguments_) => <TextField {...arguments_} />;

const value = undefined;
const placeholder = 'John Doe';

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  variant: 'text',
  id: 'default',
  required: false,
  disabled: false,
  placeholder,
  value,
};
