import { Meta, Story } from '@storybook/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import React from 'react';
import { Properties, TextField } from './textfield';

const meta: Meta = {
  title: 'Inputs/Text Field',
  component: TextField,
  argTypes: { onChanged: { action: 'changed' } },
  parameters: {
    componentSubtitle: 'Displays a single text field',
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

const Template: Story<Properties> = (arguments_) => <TextField {...arguments_} />;

const value = undefined;
const placeholder = 'John Doe';

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  id: 'default',
  name: 'default',
  indicateLoading: false,
  required: false,
  disabled: false,
  status: undefined,
  placeholder,
  value,
};

export const Password = Template.bind({});
Password.args = {
  variant: 'password',
  id: 'default',
  name: 'default',
  required: false,
  indicateLoading: false,
  disabled: false,
  status: undefined,
  placeholder,
  value,
};

export const Number = Template.bind({});
Number.args = {
  variant: 'number',
  id: 'default',
  name: 'default',
  required: false,
  indicateLoading: false,
  disabled: false,
  status: undefined,
  placeholder,
  value,
};

export const EMail = Template.bind({});
EMail.args = {
  variant: 'email',
  id: 'default',
  name: 'default',
  required: false,
  indicateLoading: false,
  disabled: false,
  status: undefined,
  placeholder,
  value,
};

export const Telephone = Template.bind({});
Telephone.args = {
  variant: 'tel',
  id: 'default',
  name: 'default',
  required: false,
  indicateLoading: false,
  disabled: false,
  status: undefined,
  placeholder,
  value,
};

export const URL = Template.bind({});
URL.args = {
  variant: 'url',
  id: 'default',
  name: 'default',
  indicateLoading: false,
  required: false,
  disabled: false,
  status: undefined,
  placeholder,
  value,
};

export const Search = Template.bind({});
Search.args = {
  variant: 'search',
  id: 'default',
  name: 'default',
  indicateLoading: false,
  required: false,
  disabled: false,
  status: undefined,
  placeholder,
  value,
};

export const ValidInput = Template.bind({});
ValidInput.args = {
  variant: 'text',
  id: 'default',
  name: 'default',
  indicateLoading: false,
  required: false,
  disabled: false,
  status: 'valid',
  placeholder,
  value,
};

export const InvalidInput = Template.bind({});
InvalidInput.args = {
  variant: 'text',
  id: 'default',
  name: 'default',
  indicateLoading: false,
  required: false,
  disabled: false,
  status: 'invalid',
  placeholder,
  value,
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'text',
  id: 'default',
  name: 'default',
  indicateLoading: true,
  required: false,
  disabled: false,
  status: undefined,
  placeholder,
  value,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'text',
  id: 'default',
  name: 'default',
  indicateLoading: false,
  required: false,
  disabled: true,
  status: undefined,
  placeholder,
  value,
};
