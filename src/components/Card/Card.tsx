import * as React from 'react';
import { StorybookLink } from '../StorybookLink';

type CardVariant = 'info' | 'warn' | 'success';

interface CardProps {
  variant?: CardVariant;
  children: React.ReactNode;
  title?: string;

  /**
   * Link target for the card.
   * - Storybook internal target: "kind/title" (e.g. "Start Here/Resume", "Systems/Governance")
   * - External URL: "https://…" (opens in a new tab)
   * If provided, the whole card becomes clickable.
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

const isExternalUrl = (value: string): boolean => {
  const v = value.trim().toLowerCase();

  // Treat absolute URLs and common external schemes as external.
  // (We keep this conservative so Storybook "kind/title" doesn’t get misclassified.)
  return (
    v.startsWith('http://') ||
    v.startsWith('https://') ||
    v.startsWith('//') ||
    v.startsWith('mailto:') ||
    v.startsWith('tel:')
  );
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
  const isExternal = Boolean(link && isExternalUrl(link));

  const content = (
    <div
      className={[
        'bg-white rounded-xl p-4 my-4 drop-shadow-sm h-full justify-between flex flex-col',
        'ring-1 ring-transparent transition',
        link ? 'cursor-pointer hover:drop-shadow-xl' : '',
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

  // External URL = normal anchor (new tab)
  if (isExternal) {
    return (
      <a
        href={link}
        className="block no-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  // Storybook internal target = wrap in StorybookLink so navigation works (and doesn’t break in the docs iframe)
  return (
    <StorybookLink title={link} className="block no-underline">
      {content}
    </StorybookLink>
  );
};