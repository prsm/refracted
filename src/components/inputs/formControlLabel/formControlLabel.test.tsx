import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Default } from './formControlLabel.stories';

describe('InputLabel', () => {
  const text = 'this is a label';

  it('should render the component without crashing', () => {
    render(<Default htmlFor="some-id" text={text} required />);
    const label = screen.getByText(text);
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(text);
  });

  it('should display the set string', () => {
    render(<Default htmlFor="some-id" text={text} required />);
    const label = screen.getByText(text);
    expect(label.parentNode?.firstChild).toHaveTextContent(text);
  });

  it('should indicate, that the input is required', () => {
    render(<Default htmlFor="some-id" text={text} required />);
    const label = screen.getByText(text);
    expect(label.parentNode?.lastChild).toHaveTextContent('*');
  });
});
