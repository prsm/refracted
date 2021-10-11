import { Formik, FormikHelpers } from 'formik';
import React, { ReactElement } from 'react';

interface WrapperInterface {
  children: Array<ReactElement> | ReactElement;
  onSubmit?: ((values: any, formikHelpers: FormikHelpers<any>) => void | Promise<any>) & Function;
  initialValues: any;
  validationSchema?: any;
}

export const Wrapper = (properties: WrapperInterface) => {
  const { children, onSubmit, initialValues, validationSchema } = properties;

  const emptyFunction = () => {};

  return (
    <Formik
      onSubmit={onSubmit ? onSubmit : emptyFunction}
      initialValues={initialValues}
      validationSchema={validationSchema}>
      {children}
    </Formik>
  );
};
