// import 'inter-ui/inter.css';
import { useField } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import React, { FC, HTMLAttributes, ReactElement } from 'react';
import '../../../tailwind.css';
import Typography from '../../data/typography';
import { FormControlLabelProperties } from '../formControlLabel/formControlLabel';
import { TextFieldProperties } from '../textField/textfield';

export interface FormControlProperties extends HTMLAttributes<HTMLDivElement> {
  name: string;
  children: Array<ReactElement<FormControlLabelProperties> | ReactElement<TextFieldProperties>>;
}

/**
  - Use a text field to get user input
  - Display field state like disabled, valid, invalid and loading
 **/
export const FormControl: FC<FormControlProperties> = ({ children, name }) => {
  const meta = useField(name)[1];

  return (
    <div className="flex flex-col p-2">
      {children}
      <AnimatePresence>
        {meta.touched && meta.error ? (
          <motion.div
            className="rounded border border-gray-500 mb-2 px-2 py-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key="errorMessage"
            tabIndex={-1}
            exit={{ opacity: 0 }}>
            <Typography variant="pretitle" component="span" color="black" text={meta.error} />
          </motion.div>
        ) : undefined}
      </AnimatePresence>
    </div>
  );
};
