import React from 'react';

interface SectionProps {
  heading: string;
  children: React.ReactNode;
  level?: 2 | 3 | 4;
}

export const Section: React.FC<SectionProps> = ({ heading, children, level = 2 }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const headingClasses = {
    2: 'text-3xl font-bold text-gray-900 mb-4 mt-8',
    3: 'text-2xl font-semibold text-gray-900 mb-3 mt-6',
    4: 'text-xl font-semibold text-gray-900 mb-2 mt-4',
  };

  return (
    <section className="mb-6">
      <HeadingTag className={headingClasses[level]}>{heading}</HeadingTag>
      <div className="prose prose-lg max-w-none">{children}</div>
    </section>
  );
};
