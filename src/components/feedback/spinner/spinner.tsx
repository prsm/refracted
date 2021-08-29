// import 'inter-ui/inter.css';
import React, { FC, HTMLAttributes } from 'react';
import '../../../tailwind.css';

type SpinnerVariant =
  | 'current'
  | 'lila'
  | 'violett'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'white'
  | 'black';

export interface Properties extends HTMLAttributes<SVGElement> {
  variant: SpinnerVariant;
  strokeWidth?: number;
}

const getColorFromVariant = (variant: SpinnerVariant): string => {
  switch (variant) {
    case 'current':
      return 'currentColor';
    case 'lila':
      return 'text-ui-lila';
    case 'violett':
      return 'text-ui-violett';
    case 'blue':
      return 'text-ui-blue';
    case 'green':
      return 'text-ui-green';
    case 'yellow':
      return 'text-ui-yellow';
    case 'orange':
      return 'text-ui-orange';
    case 'red':
      return 'text-ui-red';
    case 'white':
      return 'text-brand-white';
    case 'black':
      return 'text-brand-black';

    default:
      return 'currentColor';
  }
};

export const Spinner: FC<Properties> = (properties) => {
  const { variant, strokeWidth } = properties;

  const color: string = getColorFromVariant(variant);
  return (
    <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth || '4'}></circle>
      <path
        className="opacity-75"
        fill={color}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014
        12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};
