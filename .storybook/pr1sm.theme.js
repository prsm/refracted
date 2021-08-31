import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#000000',
  colorSecondary: '#FF6969',

  // UI
  appBg: '#FFFFFF',
  appContentBg: '#FFFFFF',
  appBorderColor: '#000000',
  appBorderRadius: '0.25rem',

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#000000',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#404040',
  barSelectedColor: '#000000',
  barBg: '#E5E5E5',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#000000',
  inputTextColor: '#000000',
  inputBorderRadius: '0.25rem',

  brandTitle: 'PR1SM // refracted',
  brandUrl: 'https://pr1sm.gg',
  brandImage: 'https://i.ibb.co/tXsDbjg/Frame-6.png',
});
