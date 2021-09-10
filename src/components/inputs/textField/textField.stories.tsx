import { Meta, Story } from '@storybook/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import React from 'react';
import withFormik from 'storybook-formik';
import { TextField, TextFieldProperties } from './textfield';

const meta: Meta = {
  title: 'Design System/Inputs/Text Field',
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
    withFormik,
  ],
};

export default meta;

const Template: Story<TextFieldProperties> = (arguments_) => <TextField {...arguments_} />;

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
  placeholder,
};

export const Password = Template.bind({});
Password.args = {
  variant: 'password',
  id: 'default',
  name: 'default',
  required: false,
  indicateLoading: false,
  disabled: false,
};

export const Number = Template.bind({});
Number.args = {
  variant: 'number',
  id: 'default',
  name: 'default',
  required: false,
  indicateLoading: false,
  disabled: false,
  placeholder: '123',
};

export const EMail = Template.bind({});
EMail.args = {
  variant: 'email',
  id: 'default',
  name: 'default',
  required: false,
  indicateLoading: false,
  disabled: false,
  placeholder: 'example@domain.tld',
};

export const Telephone = Template.bind({});
Telephone.args = {
  variant: 'tel',
  id: 'default',
  name: 'default',
  required: false,
  indicateLoading: false,
  disabled: false,
  placeholder: '0767777777',
};

export const URL = Template.bind({});
URL.args = {
  variant: 'url',
  id: 'default',
  name: 'default',
  indicateLoading: false,
  required: false,
  disabled: false,
  placeholder: 'https://example.com',
};

export const Search = Template.bind({});
Search.args = {
  variant: 'search',
  id: 'default',
  name: 'default',
  indicateLoading: false,
  required: false,
  disabled: false,
  placeholder: 'nudist beach near basel',
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
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'text',
  id: 'default',
  name: 'default',
  indicateLoading: true,
  required: false,
  disabled: false,
  placeholder,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'text',
  id: 'default',
  name: 'default',
  indicateLoading: false,
  required: false,
  disabled: true,
  placeholder,
};
