import { addons, types, useChannel, useParameter } from 'storybook/manager-api';
import React from 'react';

const ADDON_ID = 'executiveSummaryMode';
const TOOLBAR_ID = `${ADDON_ID}/toolbar`;
const CHANNEL_EVENT = `${ADDON_ID}/toggle`;

// Toolbar button component
const ExecutiveSummaryButton: React.FC<{ active: boolean }> = ({ active }) => {
  const [isEnabled, setIsEnabled] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('executive-summary-mode') === 'true';
    }
    return false;
  });

  const emit = useChannel({});

  const handleClick = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    localStorage.setItem('executive-summary-mode', String(newState));
    // Emit event to preview to apply/remove the mode
    emit(CHANNEL_EVENT, { enabled: newState });
  };

  return React.createElement('button', {
    onClick: handleClick,
    style: {
      padding: '4px 8px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '4px',
      background: isEnabled ? 'rgba(100, 108, 255, 0.2)' : 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      fontSize: '12px',
      fontFamily: 'inherit',
    },
    title: isEnabled ? 'Disable Executive Summary Mode' : 'Enable Executive Summary Mode',
  }, isEnabled ? '📊 Summary ON' : '📊 Summary');
};

// Register the toolbar item
addons.register(ADDON_ID, () => {
  addons.add(TOOLBAR_ID, {
    type: types.TOOL,
    title: 'Executive Summary Mode',
    match: ({ viewMode }) => viewMode === 'docs',
    render: ({ active }) => React.createElement(ExecutiveSummaryButton, { active: active || false }),
  });
});
