import * as React from 'react'

import {
  render,
  waitFor,
  screen,
} from '../../../tools/tests/react-testing-library'
import { findPetById } from '../../../api/Pet/stubs/PetAPI'
import { server } from '../../../tools/mocks/server'
import { Pet } from '../Pet'
import { PetStub } from '../../../api/Pet/stubs/PetStub'

describe('Pets test', () => {
  it('should render', async () => {
    const pet = PetStub.build()
    server.use(findPetById({ id: pet.id }, pet))
    render(<Pet id={1} />)

    await waitFor(() => screen.getByText(pet.name))
  })

  it('should show tag capitalized', async () => {
    const pet = PetStub.build({
      tag: 'Small Dog',
    })
    server.use(findPetById({ id: pet.id }, { ...pet }))
    render(<Pet id={1} />)

    await waitFor(() => screen.getByText(/SMALL DOG/))
  })
})
