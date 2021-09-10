// import 'inter-ui/inter.css';
import PropTypes from 'prop-types';
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

export interface TypographyProperties extends HTMLAttributes<HTMLSpanElement> {
  variant: TypographyVariant;
  text: string;
}

/**
  - Use typography to visualize text
**/
export const Typography: FC<TypographyProperties> = (properties) => {
  const { variant = 'h1', text, className } = properties;
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

Typography.propTypes = {
  /**
   * Selected variant of the Typography
   */
  variant: PropTypes.oneOf<TypographyVariant>([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'pretitle',
    'subtitle',
    'strong',
    'em',
    'body',
    'button',
  ]).isRequired,
  /**
   * String that should get rendered
   */
  text: PropTypes.string.isRequired,
};
