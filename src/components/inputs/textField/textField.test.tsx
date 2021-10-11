import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Wrapper } from '../../../utils/formikWrapper';
import { TextFieldProperties } from './textfield';
import { Text } from './textField.stories';

describe('TextField', () => {
  const text = 'Inside test case';
  const defaultArgs: TextFieldProperties = Text.args as TextFieldProperties;
  it('should render the component without crashing', async () => {
    const { getByDisplayValue } = render(
      <Wrapper {...Text.parameters?.formik}>
        <Text {...defaultArgs} />
      </Wrapper>
    );

    userEvent.type(screen.getByRole('textbox'), text);

    await waitFor(() => {
      expect(getByDisplayValue(text)).toBeInTheDocument();
    });
  });

  it('should display a type icon when not loading', () => {
    const { getByTestId } = render(
      <Wrapper {...Text.parameters?.formik}>
        <Text {...defaultArgs} />
      </Wrapper>
    );
    expect(getByTestId('variant-icon')).toBeInTheDocument();
  });

  it('should display a spinner when loading', () => {
    const { getByTitle } = render(
      <Wrapper {...Text.parameters?.formik}>
        <Text {...defaultArgs} indicateLoading={true} />
      </Wrapper>
    );
    expect(getByTitle('spinner')).toBeInTheDocument();
  });

  it('should not display a status icon, when none is needed ', () => {
    const { queryByTestId } = render(
      <Wrapper {...Text.parameters?.formik}>
        <Text {...defaultArgs} />
      </Wrapper>
    );
    expect(queryByTestId('status-icon')).toBeNull();
  });

  it('should display a status icon', () => {
    const { getByTestId } = render(
      <Wrapper {...Text.parameters?.formik}>
        <Text {...defaultArgs} status="valid" />
      </Wrapper>
    );
    expect(getByTestId('status-icon')).toBeInTheDocument();
  });

  it('should display a disabled icon, even if the input is valid', () => {
    const { queryByTestId } = render(
      <Wrapper {...Text.parameters?.formik}>
        <Text {...defaultArgs} disabled />
      </Wrapper>
    );

    expect(queryByTestId('valid-icon')).toBeNull();
    expect(queryByTestId('disabled-icon')).toBeInTheDocument();
  });
});
