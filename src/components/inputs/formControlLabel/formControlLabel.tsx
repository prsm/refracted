// import 'inter-ui/inter.css';
import React, { FC, HTMLAttributes } from 'react';
import '../../../tailwind.css';
import Typography from '../../data/typography';

export interface FormControlLabelProperties extends HTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  text: string;
  required?: boolean;
}

/**
  - Use a input label to describe the associated input
**/
export const FormControlLabel: FC<FormControlLabelProperties> = (properties) => {
  const { htmlFor, required = false, text } = properties;

  return (
    <label htmlFor={htmlFor} className="pb-1">
      <Typography variant="pretitle" text={text} component="span" />
      {required && (
        <Typography
          className="text-brand-main-500 dark:text-brand-main-500"
          component="span"
          variant="pretitle"
          text="*"
        />
      )}
    </label>
  );
};
