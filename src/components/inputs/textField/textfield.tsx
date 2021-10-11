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
import { useField } from 'formik';
import React, { FC, HTMLAttributes } from 'react';
import '../../../tailwind.css';
import Spinner from '../../feedback/spinner';

type InputVariant = 'text' | 'password' | 'number' | 'email' | 'tel' | 'url' | 'search';
type InputStatus = 'valid' | 'invalid' | undefined;

export interface TextFieldProperties extends HTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  id: string;
  name: string;
  indicateLoading?: boolean;
  status?: InputStatus;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

/**
  - Use a text field to get user input
  - Display field state like disabled, valid, invalid and loading
 **/
export const TextField: FC<TextFieldProperties> = (properties) => {
  const { variant, id, name, status, indicateLoading, required, disabled, placeholder } = properties;
  const [field, meta] = useField(name);

  const textColorFromStatus = (): string | void => {
    if ((status === 'valid' && !disabled) || (!meta.error && !disabled)) {
      return 'text-ui-green';
    } else if ((status === 'invalid' && !disabled) || (!!meta.error && !disabled)) {
      return 'text-ui-red';
    }
  };

  let statusIcon;
  if (status === 'valid' || (meta.touched && !meta.error)) {
    statusIcon = <CheckIcon data-testid={'valid-icon'} />;
  } else if (status === 'invalid' || (meta.touched && !!meta.error)) {
    statusIcon = <XIcon />;
  }

  if (disabled) {
    statusIcon = <BanIcon data-testid={'disabled-icon'} />;
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

  return (
    <div className="textfield">
      {indicateLoading ? (
        <div className="ml-2 textfield-icon">
          <Spinner color="current" />
        </div>
      ) : (
        <span data-testid="variant-icon" className="ml-2 textfield-icon">
          {variantIcon}
        </span>
      )}
      <input
        className={`textfield-input body p-1 ${status ? 'px-7' : 'pl-7'}`}
        placeholder={placeholder}
        required={required}
        id={id}
        disabled={disabled}
        type={variant}
        {...field}
      />
      {statusIcon && (
        <span data-testid="status-icon" className={`mr-2 right-0 textfield-icon ${textColorFromStatus()}`}>
          {statusIcon}
        </span>
      )}
    </div>
  );
};
