import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Wrapper } from '../../../utils/formikWrapper';
import { Email, FormControlTemplateProperties } from './formControl.stories';

describe('Form Control', () => {
  const defaultArgs: FormControlTemplateProperties = Email.args as FormControlTemplateProperties;

  it('should render and be able to take input', async () => {
    const { getByDisplayValue } = render(
      <Wrapper {...Email.parameters?.formik}>
        <Email {...defaultArgs} />
      </Wrapper>
    );

    act(() => {
      userEvent.type(screen.getByRole('textbox'), 'm');
    });

    await waitFor(() => {
      expect(getByDisplayValue('m')).toBeInTheDocument();
    });
  });

  it('should render a FormControlLabel', () => {
    const { getByText } = render(
      <Wrapper {...Email.parameters?.formik}>
        <Email {...defaultArgs} />
      </Wrapper>
    );

    const label = getByText('Email');

    expect(label).toBeInTheDocument();
    expect(label.nodeName).toBe('SPAN');
  });

  it('should visually inform about bad validation', async () => {
    const { findByText } = render(
      <Wrapper {...Email.parameters?.formik}>
        <Email {...defaultArgs} />
      </Wrapper>
    );
    act(() => {
      fireEvent.blur(screen.getByRole('textbox'));
    });

    const errorMessage = await findByText('Email is required');

    expect(errorMessage).toBeInTheDocument();
  });
});
