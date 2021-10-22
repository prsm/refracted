import React, { FC, HTMLAttributes, ReactElement } from 'react';
import '../../../tailwind.css';
import { UIColor } from '../../../utils/getUiColor';
import Typography from '../../data/typography';

type ButtonColor = UIColor;
type ButtonSizes = 'small' | 'medium' | 'large';
type ButtonHrefType = 'internal' | 'external';
type ButtonVariants = 'text' | 'contained' | 'outlined';

export interface ButtonProperties extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: React.MouseEvent<HTMLButtonElement>;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  color?: ButtonColor;
  disabled: boolean;
  href: string;
  hrefType: ButtonHrefType;
  size: ButtonSizes;
  variant: ButtonVariants;
  fullWidth: boolean;
  loading: boolean;
}

export const Button: FC<ButtonProperties> = ({
  text,
  onClick,
  startIcon,
  endIcon,
  color = 'black',
  disabled,
  href,
  hrefType,
  size = 'medium',
  variant = 'contained',
  fullWidth,
}) => {
  let wrapperClasses = '';
  let textClasses = '';

  if (startIcon || endIcon) {
    wrapperClasses += ' flex flex-row';
  }

  switch (size) {
    case 'small':
      wrapperClasses += ' p-0';
      break;
    case 'medium':
      wrapperClasses += ' p-1';
      break;
    case 'large':
      wrapperClasses += ' p-2';
      break;

    default:
      wrapperClasses += ' p-1';
      break;
  }

  return (
    <button disabled={disabled} className={` border rounded${wrapperClasses}`} onClick={onClick}>
      {startIcon && <div className=""></div>}
      <Typography variant="button" component="span" text={text} />
    </button>
  );
};
