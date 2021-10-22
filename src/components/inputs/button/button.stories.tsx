import { ArrowSmRightIcon, InformationCircleIcon } from '@heroicons/react/outline';
import { Meta, Story } from '@storybook/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import React from 'react';
import { Button, ButtonProperties } from './button';

const meta: Meta = {
  title: 'Design System/Inputs/Button',
  component: Button,
  decorators: [
    (Story: Story): StoryFnReactReturnType => (
      <div className="p-4 bg-brand-white dark:bg-brand-black">
        <Story />
      </div>
    ),
  ],
};

export default meta;

const Template: Story<ButtonProperties> = (arguments_) => <Button {...arguments_} />;

const text = 'Click me!';

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = { text };

export const StartIcon = Template.bind({});
StartIcon.args = { text, startIcon: <InformationCircleIcon /> };

export const EndIcon = Template.bind({});
StartIcon.args = { text, endIcon: <ArrowSmRightIcon /> };

export const Disabled = Template.bind({});
Disabled.args = { text, endIcon: <ArrowSmRightIcon />, disabled: true };

export const InternalLink = Template.bind({});
InternalLink.args = { text, href: 'https://www.pr1sm.gg', hrefType: 'internal' };

export const ExternalLink = Template.bind({});
ExternalLink.args = { text, href: 'https://www.pr1sm.gg', hrefType: 'external' };

export const Small = Template.bind({});
Small.args = { text, size: 'small' };

export const Large = Template.bind({});
Large.args = { text, size: 'large' };

export const Text = Template.bind({});
Large.args = { text, variant: 'text' };

export const Outlined = Template.bind({});
Outlined.args = { text, variant: 'outlined' };

export const FullWidth = Template.bind({});
FullWidth.args = { text, fullWidth: true };
