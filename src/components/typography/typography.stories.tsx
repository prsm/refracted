import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Props, Typography, TypographyType } from './typography';

const meta: Meta = {
  title: 'Display/Typography',
  component: Typography,
};

export default meta;

const Template: Story<Props> = (args) => <Typography {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const H1 = Template.bind({});
H1.args = { type: TypographyType.H1, text: 'There’s no place like home' };

export const H2 = Template.bind({});
H2.args = { type: TypographyType.H2, text: 'There’s no place like home' };

export const H3 = Template.bind({});
H3.args = { type: TypographyType.H3, text: 'There’s no place like home' };

export const H4 = Template.bind({});
H4.args = { type: TypographyType.H4, text: 'There’s no place like home' };

export const H5 = Template.bind({});
H5.args = { type: TypographyType.H5, text: 'There’s no place like home' };

export const H6 = Template.bind({});
H6.args = { type: TypographyType.H6, text: 'There’s no place like home' };

export const Pretitle = Template.bind({});
Pretitle.args = { type: TypographyType.Pretitle, text: 'There’s no place like home' };

export const Subtitle = Template.bind({});
Subtitle.args = { type: TypographyType.Subtitle, text: 'There’s no place like home' };

export const Strong = Template.bind({});
Strong.args = { type: TypographyType.Strong, text: 'There’s no place like home' };

export const Em = Template.bind({});
Em.args = { type: TypographyType.Em, text: 'There’s no place like home' };

export const Body = Template.bind({});
Body.args = { type: TypographyType.Body, text: 'There’s no place like home' };

export const Button = Template.bind({ type: TypographyType.Button });
Button.args = { text: 'There’s no place like home' };
