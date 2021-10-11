import { Meta, Story } from '@storybook/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import React from 'react';
import withFormik from 'storybook-formik';
import * as yup from 'yup';
import { FormControlLabel, FormControlLabelProperties } from '../formControlLabel/formControlLabel';
import { Default as DefaultLabel } from '../formControlLabel/formControlLabel.stories';
import { TextField, TextFieldProperties } from '../textField/textfield';
import { EMail, Text } from '../textField/textField.stories';
import { FormControl, FormControlProperties } from './formControl';

const meta: Meta = {
  title: 'Design System/Inputs/Form Control',
  decorators: [
    (Story: Story): StoryFnReactReturnType => (
      <div className="p-4 bg-brand-white dark:bg-brand-black">
        <Story />
      </div>
    ),
    withFormik,
  ],
  component: FormControl,
  subcomponents: { FormControlLabel, TextField },
  argTypes: { onChanged: { action: 'changed' } },
  parameters: {
    componentSubtitle: 'Displays a single text field',
  },
};

export default meta;

export interface FormControlTemplateProperties extends FormControlProperties {
  label: FormControlLabelProperties;
  textField: TextFieldProperties;
}

const FormControlTemplate: Story<FormControlTemplateProperties> = ({ label, textField, name }) => {
  return (
    <FormControl name={name}>
      <FormControlLabel {...label} />
      <TextField {...textField} />
    </FormControl>
  );
};

export const Username: Story<FormControlTemplateProperties> = FormControlTemplate.bind({});

Username.args = {
  name: 'username',
  label: { ...DefaultLabel.args, htmlFor: 'username-input', text: 'Enter your Username' },
  textField: { ...Text.args, id: 'username-input', name: 'username', variant: 'text' },
};

Username.parameters = {
  formik: {
    initialValues: {
      username: 'quest1onmark',
    },
  },
};

export const Password: Story<FormControlTemplateProperties> = FormControlTemplate.bind({});

Password.args = {
  name: 'password',
  label: { ...DefaultLabel.args, htmlFor: 'password-input', text: 'Password', required: true },
  textField: { ...Text.args, id: 'password-input', name: 'password', variant: 'password', required: true },
};

Password.parameters = {
  formik: {
    initialValues: {
      password: '',
    },
    validationSchema: yup.object({
      password: yup
        .string()
        .min(8, 'Must be at least 8 characters')
        .max(255, 'Must be less than 255 characters')
        .required('Password is required')
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Za-z]).+$/,
          'Must contain both uppercase and lowercase characters, aswell as a special character'
        ),
    }),
  },
};

export const Email: Story<FormControlTemplateProperties> = FormControlTemplate.bind({});

Email.args = {
  name: 'email',
  label: { ...DefaultLabel.args, htmlFor: 'email-input', text: 'Email', required: true },
  textField: {
    ...EMail.args,
    id: 'email-input',
    name: 'email',
    variant: 'email',
    required: true,
    placeholder: 'Enter your email address',
  },
};

Email.parameters = {
  formik: {
    initialValues: {
      email: '',
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('Must be a valid email')
        .max(255, 'Must be less than 255 characters')
        .required('Email is required'),
    }),
  },
};
