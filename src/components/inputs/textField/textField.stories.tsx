import { Meta, Story } from '@storybook/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import React from 'react';
import withFormik from 'storybook-formik';
import { TextField, TextFieldProperties } from './textField';

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
  id: 'text',
  name: 'text',
  indicateLoading: false,
  required: false,
  disabled: false,
  placeholder: 'type something',
};

Text.parameters = {
  formik: {
    initialValues: {
      text: '',
    },
  },
};

export const Password = Template.bind({});

Password.args = {
  variant: 'password',
  id: 'password',
  name: 'password',
  required: false,
  indicateLoading: false,
  disabled: false,
};

Password.parameters = {
  formik: {
    initialValues: {
      password: '',
    },
  },
};

export const Number = Template.bind({});

Number.args = {
  variant: 'number',
  id: 'number',
  name: 'number',
  required: false,
  indicateLoading: false,
  disabled: false,
  placeholder: '123',
};

Number.parameters = {
  formik: {
    initialValues: {
      number: '',
    },
  },
};

export const EMail = Template.bind({});

EMail.args = {
  variant: 'email',
  id: 'email',
  name: 'email',
  required: false,
  indicateLoading: false,
  disabled: false,
  placeholder: 'example@domain.tld',
};

EMail.parameters = {
  formik: {
    initialValues: {
      email: '',
    },
  },
};

export const Telephone = Template.bind({});

Telephone.args = {
  variant: 'tel',
  id: 'telephone',
  name: 'telephone',
  required: false,
  indicateLoading: false,
  disabled: false,
  placeholder: '0767777777',
};

Telephone.parameters = {
  formik: {
    initialValues: {
      telephone: '',
    },
  },
};

export const URL = Template.bind({});

URL.args = {
  variant: 'url',
  id: 'url',
  name: 'url',
  indicateLoading: false,
  required: false,
  disabled: false,
  placeholder: 'https://example.com',
};

URL.parameters = {
  formik: {
    initialValues: {
      url: '',
    },
  },
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
  id: 'validInput',
  name: 'validInput',
  indicateLoading: false,
  required: false,
  disabled: false,
  status: 'valid',
  placeholder,
};

ValidInput.parameters = {
  formik: {
    initialValues: {
      validInput: '',
    },
  },
};

export const InvalidInput = Template.bind({});

InvalidInput.args = {
  variant: 'text',
  id: 'invalidInput',
  name: 'invalidInput',
  indicateLoading: false,
  required: false,
  disabled: false,
  status: 'invalid',
  placeholder,
};

InvalidInput.parameters = {
  formik: {
    initialValues: {
      invalidInput: '',
    },
  },
};

export const Loading = Template.bind({});

Loading.args = {
  variant: 'text',
  id: 'loading',
  name: 'loading',
  indicateLoading: true,
  required: false,
  disabled: false,
  placeholder,
};

Loading.parameters = {
  formik: {
    initialValues: {
      loading: '',
    },
  },
};

export const Disabled = Template.bind({});

Disabled.args = {
  variant: 'text',
  id: 'disabled',
  name: 'disabled',
  indicateLoading: false,
  required: false,
  disabled: true,
  placeholder,
};

Disabled.parameters = {
  formik: {
    initialValues: {
      disabled: '',
    },
  },
};
