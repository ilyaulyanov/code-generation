import { rest } from 'msw'

import { PetStub } from './PetStub'
import { endpoint } from '../../endpoint'

export const findPets = rest.get(`${endpoint}/pets`, (_, res, ctx) => {
  const pets = PetStub.buildList(10)

  return res(ctx.delay(0), ctx.status(200), ctx.json(pets))
})

export const findPetById = rest.get(
  `${endpoint}/pets/:petId`,
  (req, res, ctx) => {
    const { petId } = req.params
    const pet = PetStub.build({
      id: parseInt(petId, 10),
    })

    return res(ctx.delay(0), ctx.status(200), ctx.json(pet))
  },
)

export const addPet = rest.post(`${endpoint}/pets`, (_, res, ctx) => {
  const pet = PetStub.build()

  return res(ctx.delay(0), ctx.status(200), ctx.json(pet))
})
