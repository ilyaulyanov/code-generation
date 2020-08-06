import * as React from 'react'

import { render } from '@testing-library/react'

import { PetsList } from '../PetsList'

describe('Pets test', () => {
  it('should render', () => {
    const screen = render(<PetsList />)
    screen.debug()
  })
})