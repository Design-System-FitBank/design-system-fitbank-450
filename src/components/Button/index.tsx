import React from 'react';

interface ButtonProps {
  secondary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}


const Button = ({
  secondary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button
