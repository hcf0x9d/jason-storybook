import React from 'react';

interface StorybookLinkProps {
  kind: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Link component for navigating to Storybook docs pages.
 * Workaround: Finds and clicks the sidebar item programmatically since
 * Storybook's router doesn't support direct docs-to-docs navigation.
 * 
 * For MDX docs pages, use the full title path as the kind.
 * Example: kind="Case Studies/Case Study Template"
 */
export const StorybookLink: React.FC<StorybookLinkProps> = ({ 
  kind, 
  children, 
  className = '' 
}) => {
  // Convert kind to story-id format (matching Storybook's conversion)
  // "Case Studies/Case Study Template" -> "case-studies-case-study-template"
  const storyId = kind
    .toLowerCase()
    .replace(/\//g, '-')  // Replace slashes with hyphens first
    .replace(/\s+/g, '-')  // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '')  // Remove special characters
    .replace(/-+/g, '-')  // Collapse multiple hyphens
    .replace(/^-|-$/g, '');  // Remove leading/trailing hyphens
  
  // Construct the docs path
  const docsPath = `?path=/docs/${storyId}--docs`;
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (typeof window === 'undefined') return;
    
    // Workaround: Find and click the sidebar item programmatically
    // Try multiple selector strategies to find the sidebar link
    
    // Strategy 1: Look for sidebar items with the story ID in various data attributes
    const selectors = [
      `[data-item-id="${storyId}--docs"]`,
      `[data-item-id*="${storyId}"]`,
      `a[href*="${storyId}--docs"]`,
      `button[data-item-id*="${storyId}"]`,
      `[role="treeitem"][data-item-id*="${storyId}"]`,
    ];
    
    for (const selector of selectors) {
      const item = document.querySelector(selector) as HTMLElement;
      if (item) {
        // Try clicking it
        item.click();
        // Also try dispatching a click event if regular click doesn't work
        const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
        item.dispatchEvent(clickEvent);
        return;
      }
    }
    
    // Strategy 2: Search all sidebar links by text content
    const sidebarContainer = document.querySelector('[role="tree"], .sidebar-container, [class*="sidebar"]');
    if (sidebarContainer) {
      const allLinks = sidebarContainer.querySelectorAll('a, button, [role="treeitem"]');
      const targetText = kind.split('/').pop()?.toLowerCase() || '';
      
      for (const link of Array.from(allLinks)) {
        const text = link.textContent?.toLowerCase().trim() || '';
        if (text === targetText || text.includes(targetText)) {
          (link as HTMLElement).click();
          const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
          link.dispatchEvent(clickEvent);
          return;
        }
      }
    }
    
    // Strategy 3: Try to access Storybook's internal navigation
    try {
      // Access Storybook's global state/navigation
      const storybookWindow = window as any;
      if (storybookWindow.__STORYBOOK_PREVIEW__?.navigate) {
        storybookWindow.__STORYBOOK_PREVIEW__.navigate(`/docs/${storyId}--docs`);
        return;
      }
      
      // Try accessing via manager API
      if (storybookWindow.__STORYBOOK_MANAGER__) {
        const manager = storybookWindow.__STORYBOOK_MANAGER__;
        if (manager.api?.navigate) {
          manager.api.navigate(`/docs/${storyId}--docs`);
          return;
        }
      }
    } catch (error) {
      // Ignore errors
    }
    
    // Strategy 4: Use replaceState to change URL without triggering router initialization
    // Then trigger a custom event that Storybook might listen to
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('path', `/docs/${storyId}--docs`);
      window.history.replaceState({}, '', url.toString());
      
      // Trigger popstate event which Storybook might listen to
      window.dispatchEvent(new PopStateEvent('popstate', { state: {} }));
      
      // Also try hashchange
      window.dispatchEvent(new HashChangeEvent('hashchange'));
      
      // Force a re-render by dispatching a custom event
      window.dispatchEvent(new CustomEvent('storybook-navigate', { 
        detail: { path: `/docs/${storyId}--docs` } 
      }));
    } catch (error) {
      // If all else fails, show a helpful message
      console.warn(`Could not navigate to "${kind}". Please use the sidebar to navigate.`);
      alert(`Please use the sidebar to navigate to "${kind}". Storybook's router doesn't support direct docs-to-docs navigation.`);
    }
  };
  
  return (
    <a 
      href={docsPath}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
};
