import * as React from 'react'

import { render, waitFor, screen } from '../../tools/tests/react-testing-library'

import { PetsList } from '../PetsList'

describe('Pets test', () => {
  it('should render', async () => {
    const { debug } = render(<PetsList />)

    await waitFor(() => screen.getByText(/List of pets/i))

    debug()
  })
})
