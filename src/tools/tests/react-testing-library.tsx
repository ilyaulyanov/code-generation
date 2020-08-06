import * as React from 'react'

import useSWR, { SWRConfig } from 'swr'

import { render, RenderOptions, RenderResult } from '@testing-library/react'

import { fetcher } from '../fetcher'

const AppProviders = () => {
  return ({ children }) => {
    return (
      <SWRConfig
        value={{
          // refreshInterval: 3000,
          fetcher,
        }}
      >
        {children}
      </SWRConfig>
    )
  }
}

const renderWithProviders = <P extends {}, Q extends {}>(
  ui: React.ReactElement<P>,
  options?: RenderOptions<Q>,
) => {
  return render(ui, { wrapper: AppProviders(), ...options })
}

export * from '@testing-library/react'
export { renderWithProviders as render }