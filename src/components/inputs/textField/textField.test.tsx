import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import * as React from 'react';
import { Text } from './textField.stories';

describe('TextField', () => {
  const text = 'Inside test case';
  it('should render the component without crashing', () => {
    const { getByDisplayValue } = render(<Text variant="text" value={text} id="default" name="default" />);
    expect(getByDisplayValue(text)).toBeInTheDocument();
  });

  it('should display a type icon when not loading', () => {
    const { getByTestId } = render(<Text variant="text" value={text} id="default" name="default" />);
    expect(getByTestId('variant-icon')).toBeInTheDocument();
  });

  it('should display a spinner when loading', () => {
    const { getByTitle } = render(<Text variant="text" value={text} id="default" name="default" indicateLoading />);
    expect(getByTitle('spinner')).toBeInTheDocument();
  });

  it('should not display a status icon, when none is needed ', () => {
    const { queryByTestId } = render(<Text variant="text" value={text} id="default" name="default" />);
    expect(queryByTestId('status-icon')).toBeNull();
  });

  it('should display a status icon', () => {
    const { getByTestId } = render(<Text variant="text" value={text} id="default" name="default" status="valid" />);
    expect(getByTestId('status-icon')).toBeInTheDocument();
  });

  it('should display a disabled icon, even if the input is valid', () => {
    const { queryByTestId } = render(
      <Text variant="text" value={text} id="default" name="default" status="valid" disabled />
    );
    expect(queryByTestId('valid-icon')).toBeNull();
  });
});