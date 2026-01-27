import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';
import './addons/executive-summary-mode/register';

const theme = create({
  base: 'light',
  brandTitle: 'Jason Fukura — Portfolio (Storybook)',
  brandUrl: './',
  brandTarget: '_self',
  
  // Color palette
  colorPrimary: '#646cff',
  colorSecondary: '#5856d6',
  
  // UI colors
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e5e7eb',
  appBorderRadius: 6,
  
  // Text colors
  textColor: '#111827',
  textInverseColor: '#ffffff',
  textMutedColor: '#6b7280',
  
  // Toolbar colors
  barTextColor: '#6b7280',
  barSelectedColor: '#646cff',
  barBg: '#f9fafb',
  
  // Input colors
  inputBg: '#ffffff',
  inputBorder: '#d1d5db',
  inputTextColor: '#111827',
  inputBorderRadius: 4,
  
  // Button colors
  buttonBg: '#ffffff',
  buttonBorder: '#d1d5db',
  booleanBg: '#ffffff',
  booleanSelectedBg: '#646cff',
});

addons.setConfig({
  theme,
});
