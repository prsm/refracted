import 'inter-ui/inter.css';
import React, { FC, HTMLAttributes } from 'react';
import '../../tailwind.css';

export enum TypographyType {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  Pretitle = 'pretitle',
  Subtitle = 'subtitle',
  Strong = 'strong',
  Em = 'em',
  Body = 'body',
  Button = 'button',
}

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  type: TypographyType;
  text: string;
}

export const Typography: FC<Props> = ({ type, text }) => {
  return <span className={`${type} text-brand-black`}>{text}</span>;
};
