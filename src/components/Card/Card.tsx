import * as React from 'react';
import { Icon } from '../Icon';
import { StorybookLink } from '../StorybookLink';

type CardVariant = 'info' | 'warn' | 'success';

interface CardProps {
  variant?: CardVariant;
  children: React.ReactNode;
  title?: string;

  /**
   * Storybook "kind/title" target, e.g. "Start Here/Resume" or "Systems/Governance"
   * If provided, the whole card becomes a clickable Storybook link.
   */
  link?: string;
  cta?: string;
  className?: string;
}

const variantStyles: Record<CardVariant, { icon: string; iconClass: string; }> = {
  info: {
    icon: 'lni-information',
    iconClass: 'text-blue-600',
  },
  warn: {
    icon: 'lni-warning',
    iconClass: 'text-amber-600',
  },
  success: {
    icon: 'lni-checkmark-circle',
    iconClass: 'text-emerald-600',
  },
};

export const Card: React.FC<CardProps> = ({
                                            variant = 'info',
                                            children,
                                            title,
                                            link,
                                            cta,
                                            className = '',
                                          }) => {
  const { icon, iconClass } = variantStyles[variant];

  const content = (
    <div
      className={[
        'bg-white rounded-xl p-4 my-4 drop-shadow-sm h-full justify-between flex flex-col',
        'ring-1 ring-transparent transition',
        link ? `cursor-pointer hover:drop-shadow-xl` : '',
        className,
      ].join(' ')}
    >
      <div className="flex items-start">
        <div className="flex-1">
          {title && <h4 className="font-semibold mb-2">{title}</h4>}
          <div className="text-gray-700">{children}</div>
        </div>
      </div>
      {cta && (
        <span className="pt-4 block">{cta}</span>
      )}
    </div>
  );

  // No link = plain card
  if (!link) return content;

  // Link = wrap in StorybookLink so navigation works (and doesn’t break in the docs iframe)
  return (
    <StorybookLink title={link} className="block no-underline">
      {content}
    </StorybookLink>
  );
};