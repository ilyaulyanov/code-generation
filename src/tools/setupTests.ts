import '@testing-library/jest-dom'
import { act, configure, } from '@testing-library/react'
import { queryCache } from 'react-query'
import faker from 'faker'

import { server } from './mocks/server'

configure({ defaultHidden: true })

faker.seed(537846)

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen({
    onUnhandledRequest: (req) => {
      console.error(
        'Found an unhandled %s request to %s',
        req.method,
        req.url.href,
      )
      throw new Error('fff')
    },
  })
})

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers()
  act(() => queryCache.clear());
})

afterAll(() => {
  // Clean up once the tests are done.
  server.close()
})
