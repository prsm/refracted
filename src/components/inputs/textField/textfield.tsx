// import 'inter-ui/inter.css';
import { LockClosedIcon } from '@heroicons/react/solid';
import React, { FC, HTMLAttributes } from 'react';
import '../../../tailwind.css';

type InputVariant = 'text' | 'password' | 'number' | 'email' | 'test' | 'url' | 'search';

export interface Properties extends HTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  id: string;
  required: boolean;
  disabled: boolean;
  placeholder: string;
  value: string;
  onChanged: (value: string) => void;
}

export const TextField: FC<Properties> = (properties) => {
  const { variant, id, required, disabled, placeholder, value, onChanged } = properties;

  return (
    <div className="flex relative text-gray-500 focus-within:text-brand-black dark:focus-within:text-brand-white transform duration-200 flex-wrap items-stretch mb-2 w-full p-1">
      <span className="absolute focus:text-pink-600 z-10 justify-center items-center ml-2 py-2 w-4 h-4 text-base font-normal leading-snug text-center bg-transparent rounded">
        <LockClosedIcon />
      </span>
      <input
        {...properties}
        onChange={(event) => onChanged(event.target.value)}
        className={` relative p-1 border transition duration-200 bg-brand-white dark:bg-brand-black border-gray-500 focus:border-brand-black dark:focus:border-brand-white focus:outline-none text-brand-black dark:text-brand-white rounded w-full pl-8 body`}
        placeholder={placeholder}
        required={required}
        id={id}
        name={id}
        disabled={disabled}
        type={variant}
        value={value}
      />
    </div>
  );
};
