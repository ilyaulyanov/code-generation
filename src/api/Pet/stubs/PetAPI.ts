import { rest } from 'msw'

import { Pet } from '../../Types'
import { PetStub } from './PetStub'
import { endpoint } from '../../endpoint'

export const findPets = (pets?: Pet[]) => rest.get(`${endpoint}/pets`, (_, res, ctx) => {
  const PetResponse = pets ?? PetStub.buildList(10)

  return res(ctx.delay(0), ctx.status(200), ctx.json(PetResponse))
})

export const findPetById = (pet?: Pet) => rest.get(
  `${endpoint}/pets/:petId`,
  (req, res, ctx) => {
    const { petId } = req.params
    
    const PetResponse  = {
      ...pet ?? PetStub.build(),
      id: parseInt(petId, 10),
    }

    return res(ctx.delay(0), ctx.status(200), ctx.json(PetResponse))
  },
)

export const addPet = (pet?: Pet) => rest.post(`${endpoint}/pets`, (_, res, ctx) => {
  const PetResponse = {
    ...pet ?? PetStub.build()
  }

  return res(ctx.delay(0), ctx.status(200), ctx.json(PetResponse))
})
