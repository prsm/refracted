// import 'inter-ui/inter.css';
import React, { FC, HTMLAttributes, ReactElement } from 'react';
import '../../../tailwind.css';
import { FormControlLabelProperties } from '../formControlLabel/formControlLabel';
import { TextFieldProperties } from '../textField/textfield';

export interface FormControlProperties extends HTMLAttributes<HTMLDivElement> {
  children: Array<ReactElement<FormControlLabelProperties> | ReactElement<TextFieldProperties>>;
}

/**
  - Use a text field to get user input
  - Display field state like disabled, valid, invalid and loading
 **/
export const FormControl: FC<FormControlProperties> = (properties) => {
  const { children } = properties;

  return <div className="flex flex-col p-2 max-w-xs">{children}</div>;
};
