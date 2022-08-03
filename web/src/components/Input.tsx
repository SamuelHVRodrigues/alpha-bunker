import { FocusEventHandler } from 'react';

interface PropTypes {
  placeholder: string;
  color?: string;
  type: 'text' | 'password' | 'email' | 'date';
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

export const Input = ({ placeholder, color, type, onBlur }: PropTypes) => {
  return (
    <input
      type={type}
      color={color}
      placeholder={placeholder}
      onBlur={onBlur}
      className="w-[260px] h-8 pl-2 rounded border-[1px] border-input-border text-input-text placeholder-input-placeholder bg-input-base"
    />
  );
};
