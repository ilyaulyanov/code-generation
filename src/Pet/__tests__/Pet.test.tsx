import * as React from 'react'

import { render, waitFor, screen } from '../../tools/tests/react-testing-library'

import { findPetById } from '../../api/Pet/stubs/PetAPI'
import { server } from '../../tools/mocks/server'
import { Pet } from '../Pet'

describe('Pets test', () => {
  it('should render', async () => {
    server.use(findPetById)
    render(<Pet id={1} />)

    await waitFor(() => screen.getByText(/Pet/i))
  })
})
