import * as React from 'react'

// import { ReactQueryConfigProvider } from 'react-query'
// import { AxiosRequestConfig } from 'axios'

import { render, RenderOptions } from '@testing-library/react'

// import { fetcher } from '../fetcher'
// import { client } from '../../api/client'

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

const renderWithProviders = <
  P extends Record<string, unknown>,
  Q extends Record<string, unknown>
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
