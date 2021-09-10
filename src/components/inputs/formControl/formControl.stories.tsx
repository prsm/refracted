import { Meta, Story } from '@storybook/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import React from 'react';
import withFormik from 'storybook-formik';
import * as yup from 'yup';
import { FormControlLabel, FormControlLabelProperties } from '../formControlLabel/formControlLabel';
import { Default as DefaultLabel } from '../formControlLabel/formControlLabel.stories';
import { TextField, TextFieldProperties } from '../textField/textfield';
import { Text } from '../textField/textField.stories';
import { FormControl, FormControlProperties } from './formControl';

// export interface WrapperProperties {
//   children: ReactChild | ReactChildren;
// }

// const Wrapper: FC<WrapperProperties> = (properties) => {
//   const { children } = properties;
//   const formik = useFormik({
//     initialValues: {
//       username: '',
//     },
//     onSubmit: async (values) => {
//       alert(JSON.stringify(values, undefined, 2));
//     },
//     validationSchema: yup.object({
//       username: yup
//         .string()
//         .min(8, 'Must be at least 8 characters')
//         .max(20, 'Must be less  than 20 characters')
//         .required('Username is required')
//         .matches(/^[\dA-Za-z]+$/, 'Cannot contain special characters or spaces'),
//     }),
//   });

//   return (
//     <FormikProvider value={formik}>
//       <Form>
//         {children}
//         <div>
//           <button type="submit">Submit</button>
//           <button type="reset">Reset</button>
//         </div>
//       </Form>
//     </FormikProvider>
//   );
// };

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

interface FormControlTemplateProperties extends FormControlProperties {
  label: FormControlLabelProperties;
  textField: TextFieldProperties;
}

const FormControlTemplate: Story<FormControlTemplateProperties> = (properties) => {
  const { label, textField, ...formControlProperties } = properties;
  return (
    <FormControl {...formControlProperties}>
      <FormControlLabel {...label} />
      <TextField {...textField} />
    </FormControl>
  );
};

// const Template: Story<Properties> = (arguments_) => <FormControl {...arguments_} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Username: Story<FormControlTemplateProperties> = FormControlTemplate.bind({});

Username.args = {
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
  label: { ...DefaultLabel.args, htmlFor: 'password-input', text: 'Password' },
  textField: { ...Text.args, id: 'password-input', name: 'password', variant: 'password' },
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
