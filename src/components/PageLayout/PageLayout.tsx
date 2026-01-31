import React from 'react';
import { Icon } from '../Icon';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  meta?: string;
  icon?: string;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  meta,
  icon,
  children,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="mb-8 pb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-0 sb-unstyled">{title}</h1>
        {subtitle && (
          <h2 className="text-2xl text-gray-600 border-none sb-unstyled">
            {subtitle}
          </h2>
        )}
        {meta && (
          <span className="text-xs text-gray-600 pt-4 block">{meta}</span>
        )}
      </div>
      <div className="max-w-none">
        {children}
      </div>
    </div>
  );
};
