import '@testing-library/jest-dom'
import { configure } from '@testing-library/react'

configure({ defaultHidden: true })

export interface Global extends NodeJS.Global {
  URL: any
}
declare var global: Global

global.URL.createObjectURL = jest.fn()
jest.setTimeout(30000)
