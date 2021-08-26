import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Properties, Typography } from './typography';

const meta: Meta = {
  title: 'Display/Typography',
  component: Typography,
};

export default meta;

const Template: Story<Properties> = (arguments_) => <Typography {...arguments_} />;

const text = 'There’s no place like home';

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const H1 = Template.bind({});
H1.args = { variant: 'h1', text };

export const H2 = Template.bind({});
H2.args = { variant: 'h2', text };

export const H3 = Template.bind({});
H3.args = { variant: 'h3', text };

export const H4 = Template.bind({});
H4.args = { variant: 'h4', text };

export const H5 = Template.bind({});
H5.args = { variant: 'h5', text };

export const H6 = Template.bind({});
H6.args = { variant: 'h6', text };

export const Pretitle = Template.bind({});
Pretitle.args = { variant: 'pretitle', text };

export const Subtitle = Template.bind({});
Subtitle.args = { variant: 'subtitle', text };

export const Strong = Template.bind({});
Strong.args = { variant: 'strong', text };

export const Em = Template.bind({});
Em.args = { variant: 'em', text };

export const Body = Template.bind({});
Body.args = { variant: 'body', text };

export const Button = Template.bind({});
Button.args = { variant: 'button', text };
