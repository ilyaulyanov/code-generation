import * as React from 'react'

import {
  render,
  waitFor,
  screen,
  fireEvent,
} from '../../../tools/tests/react-testing-library'
import { findPets, addPet } from '../../../api/Pet/stubs/PetAPI'
import { server } from '../../../tools/mocks/server'
import { PetsList } from '../PetsList'

describe('Pets test', () => {
  it('should render', async () => {
    server.use(findPets)
    render(<PetsList />)

    await waitFor(() => screen.getByText(/List of pets/i))
  })

  it('should add pets', async () => {
    server.use(findPets)
    server.use(addPet)

    render(<PetsList />)
    await waitFor(() => screen.getByText(/List of pets/i))

    const AddButton = screen.getByText(/Add pet/i)
    fireEvent.click(AddButton)

    await waitFor(() => screen.getByText(/has been added/i))
  })
})
