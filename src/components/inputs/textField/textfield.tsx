// import 'inter-ui/inter.css';
import {
  AtSymbolIcon,
  BanIcon,
  CalculatorIcon,
  CheckIcon,
  LinkIcon,
  LockClosedIcon,
  PencilIcon,
  PhoneIcon,
  SearchIcon,
  XIcon,
} from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import React, { FC, HTMLAttributes } from 'react';
import '../../../tailwind.css';
import Spinner from '../../feedback/spinner';

type InputVariant = 'text' | 'password' | 'number' | 'email' | 'tel' | 'url' | 'search';
type InputStatus = 'valid' | 'invalid' | undefined;

export interface Properties extends HTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  id: string;
  name: string;
  indicateLoading: boolean;
  status: InputStatus;
  required: boolean;
  disabled: boolean;
  placeholder: string;
  value: string;
  onChanged: (value: string) => void;
}

export const TextField: FC<Properties> = (properties) => {
  const { variant, id, name, status, indicateLoading, required, disabled, placeholder, value, onChanged } = properties;

  const classFromStatus = (): string | void => {
    if (status === 'valid' && !disabled) {
      return 'text-ui-green';
    } else if (status === 'invalid' && !disabled) {
      return 'text-ui-red';
    }
  };

  let statusIcon;
  if (status === 'valid') {
    statusIcon = <CheckIcon />;
  } else if (status === 'invalid') {
    statusIcon = <XIcon />;
  }

  if (disabled) {
    statusIcon = <BanIcon />;
  }

  let variantIcon;
  switch (variant) {
    case 'text':
      variantIcon = <PencilIcon />;
      break;
    case 'password':
      variantIcon = <LockClosedIcon />;
      break;
    case 'number':
      variantIcon = <CalculatorIcon />;
      break;
    case 'email':
      variantIcon = <AtSymbolIcon />;
      break;
    case 'tel':
      variantIcon = <PhoneIcon />;
      break;
    case 'url':
      variantIcon = <LinkIcon />;
      break;
    case 'search':
      variantIcon = <SearchIcon />;
      break;
    default:
      variantIcon = <PencilIcon />;
      break;
  }

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants} className="textfield">
      {indicateLoading ? (
        <div className="ml-2 textfield-icon">
          <Spinner variant="current" />
        </div>
      ) : (
        <span className="ml-2 textfield-icon">{variantIcon}</span>
      )}
      <input
        onChange={(event) => onChanged(event.target.value)}
        className={`textfield-input body p-1 ${status ? 'px-7' : 'pl-7'}`}
        placeholder={placeholder}
        required={required}
        id={id}
        name={name}
        disabled={disabled}
        type={variant}
        value={value}
      />
      {statusIcon && <span className={`mr-3 right-0 textfield-icon ${classFromStatus()}`}>{statusIcon}</span>}
    </motion.div>
  );
};
