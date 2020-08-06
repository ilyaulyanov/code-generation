import '@testing-library/jest-dom'
import { configure } from '@testing-library/react'
import { server } from './mocks/server'
configure({ defaultHidden: true })


beforeAll(() => {
  // Enable the mocking in tests.
  server.listen()
})

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers()
})

afterAll(() => {
  // Clean up once the tests are done.
  server.close()
})
