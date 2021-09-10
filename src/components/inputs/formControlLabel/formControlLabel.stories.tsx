import { Meta, Story } from '@storybook/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import React from 'react';
import { FormControlLabel, FormControlLabelProperties } from './formControlLabel';

const meta: Meta = {
  title: 'Design System/Inputs/Input Label',
  component: FormControlLabel,
  parameters: {
    componentSubtitle: 'Displays a string that describes an input',
  },
  decorators: [
    (Story: Story): StoryFnReactReturnType => (
      <div className="p-4 bg-brand-white dark:bg-brand-black">
        <Story />
      </div>
    ),
  ],
};

export default meta;

const Template: Story<FormControlLabelProperties> = (arguments_) => <FormControlLabel {...arguments_} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  required: false,
  text: 'Enter your name',
};
