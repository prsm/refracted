import React, { FC, HTMLAttributes, ReactChild } from 'react';
import '../../tailwind.css';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactChild;
}

export const Button: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};
