import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import * as React from 'react';
import { TypographyProperties } from './typography';
import { H1 } from './typography.stories';

describe('Typography', () => {
  const defaultArguments: TypographyProperties = H1.args as TypographyProperties;
  const text = defaultArguments.text as string;

  it('should render the component without crashing', () => {
    const { getByText } = render(<H1 {...defaultArguments} />);
    expect(getByText(text)).toBeInTheDocument();
    expect(getByText(text)).toHaveTextContent(text);
  });

  it('should display same text if provided as children', () => {
    const { getByText } = render(
      <H1 {...defaultArguments} text={undefined}>
        {text}
      </H1>
    );
    expect(getByText(text)).toBeInTheDocument();
    expect(getByText(text)).toHaveTextContent(text);
  });
});
