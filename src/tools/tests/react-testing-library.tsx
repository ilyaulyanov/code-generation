import * as React from 'react'

import { SWRConfig } from 'swr'

import { render, RenderOptions } from '@testing-library/react'

import { fetcher } from '../fetcher'

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  )
}

const renderWithProviders = <P extends {}, Q extends {}>(
  ui: React.ReactElement<P>,
  options?: RenderOptions<Q>,
) => {
  return render(ui, {
    wrapper: AppProviders as React.FunctionComponent<{}>,
    ...options,
  })
}

export * from '@testing-library/react'
export { renderWithProviders as render }
