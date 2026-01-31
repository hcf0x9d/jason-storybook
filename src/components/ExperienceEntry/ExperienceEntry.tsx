import * as React from 'react';

export interface ExperienceEntryProps {
  /** Job title line, e.g. "Director of Product Design" */
  title: string;
  /** Company, e.g. "Meta" */
  company: string;
  /** Date range, e.g. "Apr 2025 – Dec 2025" */
  period: string;
  /** Bullet points describing the role */
  items: string[];
  className?: string;
}

export const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  title,
  company,
  period,
  items,
  className = '',
}) => (
  <div className={`${className} sb-unstyled`}>
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <div className="mb-2">
        <h3 className="text-lg font-semibold m-0">{title}</h3>
        <h4 className="text-md font-medium m-0">{company}</h4>
      </div>
      <h4 className="text-md font-medium m-0">{period}</h4>
    </div>
    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);
