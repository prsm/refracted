// import 'inter-ui/inter.css';
import React, { FC, ReactNode } from 'react';
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

export interface TypographyProperties {
  variant: TypographyVariant;
  text?: string;
  color?: UIColor;
  component: TypographyElement;
  className?: string;
  children?: ReactNode | Array<ReactNode>;
}

/**
  - Use typography to visualize text
**/
export const Typography: FC<TypographyProperties> = (properties) => {
  const { variant = 'h1', component = 'span', color = 'dark-theme', text, className, children } = properties;
  const TextWrapper = component;

  return (
    <TextWrapper className={`${getUIColor(color)} ${variant ? variant : 'h1'}${className ? ' ' + className : ''}`}>
      {children || text}
    </TextWrapper>
  );
};
