/* eslint-disable sonarjs/no-duplicated-branches */
import { BanIcon, ExternalLinkIcon, LinkIcon } from '@heroicons/react/outline';
import { AnimatePresence, motion } from 'framer-motion';
import React, { FC, ReactElement } from 'react';
import { Spinner, Typography } from '../../..';
import '../../../tailwind.css';
import { UIColor } from '../../../utils/getUiColor';

type ButtonSizes = 'small' | 'medium' | 'large';
type ButtonHrefType = 'internal' | 'external';
type ButtonVariants = 'text' | 'contained' | 'outlined';

export interface ButtonProperties extends React.ComponentProps<'button'> {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: ReactElement;
  endIcon?: ReactElement;
  color?: UIColor;
  disabled?: boolean;
  href?: string;
  hrefType?: ButtonHrefType;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  fullWidth?: boolean;
  loading?: boolean;
  blurred?: boolean;
}

export const Button: FC<ButtonProperties> = ({
  text,
  onClick,
  icon,
  endIcon,
  color = 'black',
  disabled,
  href,
  hrefType,
  size = 'medium',
  variant = 'contained',
  fullWidth,
  loading,
  blurred,
}) => {
  let wrapperClasses = ' flex flex-row items-center justify-center gap-x-2';

  if (href) {
    if (hrefType === 'internal') {
      endIcon = <LinkIcon />;
    } else if (hrefType === 'external') {
      endIcon = <ExternalLinkIcon />;
    }
  }

  if (fullWidth) {
    wrapperClasses += ' w-full';
  }

  switch (size) {
    case 'small':
      wrapperClasses += ' px-2 py-1';
      break;
    case 'medium':
      wrapperClasses += ' px-4 py-2';
      break;
    case 'large':
      wrapperClasses += ' px-6 py-3';
      break;
    default:
      wrapperClasses += ' px-4 py-2';
      break;
  }

  if (blurred) {
    defaultBackground += ' backdrop-filter backdrop-blur backdrop-saturate-150';
  }

  let textColor = '';

  switch (color) {
    case 'current':
      wrapperClasses += ' bg-current border-none';
      break;
    case 'lila':
      wrapperClasses += ' bg-ui-lila border-none text-brand-white';
      textColor = 'white';
      break;
    case 'violet':
      wrapperClasses += ' bg-ui-violet border-none text-brand-white';
      textColor = 'white';
      break;
    case 'blue':
      wrapperClasses += ' bg-ui-blue border-none text-brand-black';
      textColor = 'black';
      break;
    case 'green':
      wrapperClasses += ' bg-ui-green border-none text-brand-black';
      textColor = 'black';
      break;
    case 'yellow':
      wrapperClasses += ' bg-ui-yellow border-none text-brand-black';
      textColor = 'black';
      break;
    case 'orange':
      wrapperClasses += ' bg-ui-orange border-none text-brand-black';
      textColor = 'black';
      break;
    case 'red':
      wrapperClasses += ' bg-ui-red border-none text-brand-black';
      textColor = 'black';
      break;
    case 'black':
      wrapperClasses += ' bg-brand-black border-none text-brand-white';
      textColor = 'white';
      break;
    case 'white':
      wrapperClasses += ' bg-brand-white border-none text-brand-black';
      textColor = 'black';
      break;
    case 'dark-theme':
      wrapperClasses += ' bg-brand-white dark:bg-brand-black text-brand-black dark:text-brand-white';
      textColor = 'dark-theme';
      break;
    default:
      wrapperClasses += ' bg-brand-white dark:bg-brand-black text-brand-black dark:text-brand-white';
      textColor = 'dark-theme';
      break;
  }

  if (disabled) {
    endIcon = <BanIcon />;
    wrapperClasses += ' border-disabled cursor-not-allowed';
  }

  if (loading) {
    endIcon = <Spinner color={textColor} />;
    wrapperClasses += ' border-disabled cursor-wait';
  }

  const IconWrapper: React.FC = ({ children }) => {
    return (
      <motion.div
        className="w-4 h-4 fill-current"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        key="icon"
        exit={{ opacity: 0 }}>
        {children}
      </motion.div>
    );
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.93 }}
      disabled={disabled}
      className={`border rounded border-custom ${wrapperClasses}`}
      onClick={onClick}>
      <AnimatePresence>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <Typography variant="button" component="span" color={textColor} text={text} />
        {endIcon && <IconWrapper>{endIcon}</IconWrapper>}
      </AnimatePresence>
    </motion.button>
  );
};
