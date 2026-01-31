import React from 'react';
import { Icon } from '../Icon';

type CalloutVariant = 'info' | 'warn' | 'success';

interface CalloutProps {
  variant?: CalloutVariant;
  children: React.ReactNode;
  title?: string;
}

const variantStyles: Record<CalloutVariant, { bg: string; border: string; icon: string; iconColor: string }> = {
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-400',
    icon: 'lni-information',
    iconColor: 'text-blue-600',
  },
  warn: {
    bg: 'bg-amber-50',
    border: 'border-amber-400',
    icon: 'lni-warning',
    iconColor: 'text-amber-600',
  },
  success: {
    bg: 'bg-lime-50',
    border: 'border-lime-400',
    icon: 'lni-checkmark-circle',
    iconColor: 'text-lime-600',
  },
};

export const Callout: React.FC<CalloutProps> = ({
  variant = 'info',
  children,
  title,
}) => {
  const styles = variantStyles[variant];

  return (
    <div className={`${styles.bg} ${styles.border} border-l-4 rounded-r-lg p-4 my-4`}>
      <div className="flex items-start">
        {/*<Icon name={styles.icon} className={`${styles.iconColor} text-xl mr-3 mt-0.5 flex-shrink-0`} />*/}
        <div className="flex-1">
          {title && (
            <h4 className={`font-semibold ${styles.iconColor} mb-2`}>{title}</h4>
          )}
          <div className="text-gray-700">{children}</div>
        </div>
      </div>
    </div>
  );
};
