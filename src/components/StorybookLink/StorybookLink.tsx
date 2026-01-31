import * as React from 'react';
import { linkTo } from '@storybook/addon-links';

type StorybookLinkProps = {
  title: string;           // e.g. "Start Here/Resume"
  story?: string;          // default: "docs"
  className?: string;
  children: React.ReactNode;
};

export function StorybookLink({
                                title,
                                story = 'docs',
                                className,
                                children,
                              }: StorybookLinkProps) {
  return (
    <a
      href="#"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        // linkTo returns a function you call to navigate
        linkTo(title, story)();
      }}
    >
      {children}
    </a>
  );
}