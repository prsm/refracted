// import 'inter-ui/inter.css';
import PropTypes from 'prop-types';
import React, { FC, HTMLAttributes } from 'react';
import '../../../tailwind.css';
import getUIColor, { UIColor } from '../../../utils/getUiColor';

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

type TypographyElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'em'
  | 'strong'
  | 'p'
  | 'div'
  | 'figcaption'
  | 'li'
  | 'pre';

export interface TypographyProperties extends HTMLAttributes<HTMLSpanElement> {
  variant: TypographyVariant;
  text: string;
  color?: UIColor;
  component: TypographyElement;
  className?: string;
}

/**
  - Use typography to visualize text
**/
export const Typography: FC<TypographyProperties> = (properties) => {
  const { variant = 'h1', component = 'span', color = 'black', text, className } = properties;
  const TextWrapper = component;

  return (
    <TextWrapper className={`${getUIColor(color)} ${variant ? variant : 'h1'}${className ? ' ' + className : ''}`}>
      {text}
    </TextWrapper>
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
