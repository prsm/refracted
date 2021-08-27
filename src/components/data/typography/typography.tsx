// import 'inter-ui/inter.css';
import React, { FC, HTMLAttributes } from 'react';
import '../../../tailwind.css';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'pretitle'
  | 'subtitle'
  | 'strong'
  | 'em'
  | 'body'
  | 'button';

export interface Properties extends HTMLAttributes<HTMLSpanElement> {
  variant: TypographyVariant;
  text: string;
}

export const Typography: FC<Properties> = (properties) => {
  const { variant, text, className } = properties;
  return (
    <span
      className={` text-brand-black dark:text-brand-white ${variant ? variant : 'h1'}${
        className ? ' ' + className : ''
      }`}
    >
      {text}
    </span>
  );
};
