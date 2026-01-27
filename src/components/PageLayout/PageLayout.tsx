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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        {icon && (
          <div className="mb-4">
            <Icon name={icon} className="text-4xl text-gray-700" />
          </div>
        )}
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
        {subtitle && (
          <p className="text-xl text-gray-600 mb-2">{subtitle}</p>
        )}
        {meta && (
          <p className="text-sm text-gray-500">{meta}</p>
        )}
      </div>
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </div>
  );
};
