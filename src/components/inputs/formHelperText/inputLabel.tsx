// import 'inter-ui/inter.css';
import React, { FC, HTMLAttributes } from 'react';
import '../../../tailwind.css';
import Typography from '../../data/typography';

export interface Properties extends HTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  text: string;
  required: boolean;
}

export const InputLabel: FC<Properties> = (properties) => {
  const { htmlFor, required, text } = properties;

  return (
    <label htmlFor={htmlFor}>
      <Typography variant="pretitle" text={text} />
      {required && <Typography className="text-brand-main-500 dark:text-brand-main-500" variant="pretitle" text="*" />}
    </label>
  );
};
