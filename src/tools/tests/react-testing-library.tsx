import * as React from 'react'

// import { ReactQueryConfigProvider } from 'react-query'
// import { AxiosRequestConfig } from 'axios'

import { render, RenderOptions } from '@testing-library/react'

// import { fetcher } from '../fetcher'
// import { client } from '../../api/client'

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
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
