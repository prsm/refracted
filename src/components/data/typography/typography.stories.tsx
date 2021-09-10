import { Meta, Story } from '@storybook/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import React from 'react';
import { Typography, TypographyProperties } from './typography';

const meta: Meta = {
  title: 'Design System/Data/Typography',
  component: Typography,
  parameters: {
    componentSubtitle: 'Displays prestyled text',
  },
  decorators: [
    (Story: Story): StoryFnReactReturnType => (
      <div className="p-4 bg-brand-white dark:bg-brand-black">
        <Story />
      </div>
    ),
  ],
};

export default meta;

const Template: Story<TypographyProperties> = (arguments_) => <Typography {...arguments_} />;

const text = 'There’s no place like home';

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const H1 = Template.bind({});
H1.args = { variant: 'h1', component: 'h1', color: 'black', text };

export const H2 = Template.bind({});
H2.args = { variant: 'h2', component: 'h2', color: 'black', text };

export const H3 = Template.bind({});
H3.args = { variant: 'h3', component: 'h3', color: 'black', text };

export const H4 = Template.bind({});
H4.args = { variant: 'h4', component: 'h4', color: 'black', text };

export const H5 = Template.bind({});
H5.args = { variant: 'h5', component: 'h5', color: 'black', text };

export const H6 = Template.bind({});
H6.args = { variant: 'h6', component: 'h6', color: 'black', text };

export const Pretitle = Template.bind({});
Pretitle.args = { variant: 'pretitle', component: 'span', color: 'black', text };

export const Subtitle = Template.bind({});
Subtitle.args = { variant: 'subtitle', component: 'span', color: 'black', text };

export const Strong = Template.bind({});
Strong.args = { variant: 'strong', component: 'strong', color: 'black', text };

export const Em = Template.bind({});
Em.args = { variant: 'em', component: 'em', color: 'black', text };

export const Body = Template.bind({});
Body.args = { variant: 'body', component: 'p', color: 'black', text };

export const Button = Template.bind({});
Button.args = { variant: 'button', component: 'span', color: 'black', text };

export const SemanticElement = Template.bind({});
SemanticElement.args = { variant: 'body', component: 'p', color: 'black', text };

export const ColoredText = Template.bind({});
ColoredText.args = { variant: 'body', component: 'p', color: 'green', text };
