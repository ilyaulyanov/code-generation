import * as React from 'react'

import { render, RenderOptions, Queries } from '@testing-library/react'

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

const renderWithProviders = <
  P extends Record<string, unknown>,
  Q extends Queries
>(
  ui: React.ReactElement<P>,
  options?: RenderOptions<Q>,
) => {
  return render(ui, {
    wrapper: AppProviders as React.FunctionComponent<Record<string, unknown>>,
    ...options,
  })
}

export * from '@testing-library/react'
export { renderWithProviders as render }
