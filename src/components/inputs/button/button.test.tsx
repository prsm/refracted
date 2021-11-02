import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { ButtonProperties } from './button';
import { Default } from './button.stories';

describe('Button', () => {
  const text = 'Click me!';
  const onClick = jest.fn();
  const defaultArguments: ButtonProperties = Default.args as ButtonProperties;

  it('should render the component without crashing', () => {
    render(<Default {...defaultArguments} text={text} />);
    const button = screen.getByText(text);
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(text);
  });

  it('should be clickable', () => {
    render(<Default {...defaultArguments} text={text} onClick={onClick} />);
    const button = screen.getByText(text);
    userEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });
});
