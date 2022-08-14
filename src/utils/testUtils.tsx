import { ThemeProvider } from '@mui/material';
import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement, ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MemoryRouter } from 'react-router-dom';
import theme from '../theme';

const providers: React.FunctionComponent<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MemoryRouter initialEntries={['/dashboard']}>{children}</MemoryRouter>
  </ThemeProvider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: providers, ...options });

export const FormWrapper = ({ children, defaultValues }: { children: React.ReactNode; defaultValues: never }): React.ReactElement => {
  const methods = useForm<typeof defaultValues>({
    defaultValues,
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export * from '@testing-library/react';
export { customRender as render };
