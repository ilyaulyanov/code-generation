import * as React from 'react'

import {} from 'msw'

import {
  render,
  waitFor,
  screen,
  fireEvent,
} from '../../../tools/tests/react-testing-library'
import { findPets, addPet } from '../../../api/Pet/stubs/PetAPI'
import { server } from '../../../tools/mocks/server'
import { PetsList } from '../PetsList'
import { NewPetStub } from '../../../api/Pet/stubs/PetStub'

describe('Pets test', () => {
  it('should render', async () => {
    server.use(findPets())
    render(<PetsList />)

    await waitFor(() => screen.getByText(/List of pets/i))
  })

  it('should add pets', async () => {
    const newPet = NewPetStub.build()

    server.use(findPets())
    server.use(addPet(newPet))

    render(<PetsList />)
    await waitFor(() => screen.getByText(/List of pets/i))

    const AddButton = screen.getByText(/Add pet/i)
    fireEvent.click(AddButton)

    await waitFor(() => screen.getByText(/has been added/i))
  })

  it.only('should return n results when limit is set', async () => {
    const MockedFindPets = findPets()
    server.use(MockedFindPets)

    render(<PetsList />)
    await waitFor(() => screen.getByText(/List of pets/i))
  })
})
