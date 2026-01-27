import React from 'react';
import { Icon } from '../Icon';

export type ButtonSemantic = 'default' | 'destructive';
export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'subtle';
export type ButtonWidth = 'hug' | 'full';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Semantic type: default (blue) or destructive (red) */
  semantic?: ButtonSemantic;
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Width behavior: hug (content-sized) or full (expands to container) */
  width?: ButtonWidth;
  /** Button text content */
  children: React.ReactNode;
  /** Show icon before text */
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  semantic = 'default',
  variant = 'solid',
  width = 'hug',
  children,
  icon = true,
  disabled,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Width classes
  const widthClasses = width === 'full' ? 'w-full' : '';
  
  // Disabled state (overrides all other styles)
  if (disabled) {
    return (
      <button
        type="button"
        disabled
      className={`${baseClasses} ${widthClasses} bg-gray-100 text-gray-400 cursor-not-allowed ${className}`}
      {...props}
    >
      {icon && <Icon name="lni-arrow-right" className="text-current" />}
      {children}
    </button>
    );
  }

  // Focus ring color based on semantic
  const focusRingColor = semantic === 'destructive' 
    ? 'focus:ring-red-300 focus:ring-red-500' 
    : 'focus:ring-blue-300 focus:ring-blue-500';

  // Color classes based on semantic and variant
  const getColorClasses = () => {
    if (semantic === 'destructive') {
      switch (variant) {
        case 'solid':
          return 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 border border-red-600';
        case 'outline':
          return 'bg-white text-red-600 border border-red-600 hover:bg-red-50 active:bg-red-200';
        case 'ghost':
          return 'bg-transparent text-red-600 border border-transparent hover:bg-red-50 active:bg-red-100';
        case 'subtle':
          return 'bg-red-50 text-red-600 border border-transparent hover:bg-red-100 active:bg-red-200';
        default:
          return '';
      }
    } else {
      // default semantic
      switch (variant) {
        case 'solid':
          return 'bg-blue-700 text-white hover:bg-blue-800 active:bg-blue-900 border border-blue-700';
        case 'outline':
          return 'bg-transparent text-gray-700 border border-gray-400 hover:bg-gray-50 active:bg-gray-200 focus:border-blue-600';
        case 'ghost':
          return 'bg-transparent text-blue-700 border border-transparent hover:bg-blue-50 active:bg-blue-100';
        case 'subtle':
          return 'bg-transparent text-gray-700 border border-transparent hover:bg-gray-100 active:bg-gray-200';
        default:
          return '';
      }
    }
  };

  return (
    <button
      type="button"
      className={`${baseClasses} ${widthClasses} ${getColorClasses()} ${focusRingColor} ${className}`}
      {...props}
    >
      {icon && <Icon name="lni-arrow-right" className="text-current" />}
      {children}
    </button>
  );
};
