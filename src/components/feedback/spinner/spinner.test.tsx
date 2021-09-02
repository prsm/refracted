import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Red } from './spinner.stories';

describe('Spinner', () => {
  it('should render the component without crashing', () => {
    render(<Red variant="red" />);
    const spinner = screen.getByTitle('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
