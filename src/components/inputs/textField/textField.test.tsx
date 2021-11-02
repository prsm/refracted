import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';
import React from 'react';
import { TextFieldProperties } from './textField';
import { Text } from './textField.stories';

describe('TextField', () => {
  const text = 'Inside test case';
  const defaultArguments: TextFieldProperties = Text.args as TextFieldProperties;

  it('should render the component without crashing', async () => {
    const { getByDisplayValue } = render(
      <Formik {...Text.parameters?.formik}>
        <Text {...defaultArguments} />
      </Formik>
    );

    userEvent.type(screen.getByRole('textbox'), text);

    await waitFor(() => {
      expect(getByDisplayValue(text)).toBeInTheDocument();
    });
  });

  it('should display a type icon when not loading', () => {
    const { getByTestId } = render(
      <Formik {...Text.parameters?.formik}>
        <Text {...defaultArguments} />
      </Formik>
    );
    expect(getByTestId('variant-icon')).toBeInTheDocument();
  });

  it('should display a spinner when loading', () => {
    const { getByTitle } = render(
      <Formik {...Text.parameters?.formik}>
        <Text {...defaultArguments} indicateLoading={true} />
      </Formik>
    );
    expect(getByTitle('spinner')).toBeInTheDocument();
  });

  it('should not display a status icon, when none is needed ', () => {
    const { queryByTestId } = render(
      <Formik {...Text.parameters?.formik}>
        <Text {...defaultArguments} />
      </Formik>
    );
    expect(queryByTestId('status-icon')).toBeNull();
  });

  it('should display a status icon', () => {
    const { getByTestId } = render(
      <Formik {...Text.parameters?.formik}>
        <Text {...defaultArguments} status="valid" />
      </Formik>
    );
    expect(getByTestId('status-icon')).toBeInTheDocument();
  });

  it('should display a disabled icon, even if the input is valid', () => {
    const { queryByTestId } = render(
      <Formik {...Text.parameters?.formik}>
        <Text {...defaultArguments} disabled />
      </Formik>
    );

    expect(queryByTestId('valid-icon')).toBeNull();
    expect(queryByTestId('disabled-icon')).toBeInTheDocument();
  });
});
