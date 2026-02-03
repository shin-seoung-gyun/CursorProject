import { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const classNames = `btn btn-${variant} btn-${size} ${className}`.trim();

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};
