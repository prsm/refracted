import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import * as React from 'react';
import { TypographyType } from './typography';
import { H1 } from './typography.stories';

describe('Typography', () => {
  it('should render the component without crashing', () => {
    const text: string = 'Inside test case';

    const { getByText } = render(<H1 text={text} type={TypographyType.H1} />);
    expect(getByText(text)).toBeInTheDocument();
    expect(getByText(text)).toHaveTextContent(text);
  });
});
