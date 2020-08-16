import { rest } from 'msw'

import { Pet, NewPet, FindPetByIdPathParams } from '../../Types'
import { PetStub } from './PetStub'
import { endpoint } from '../../endpoint'

export const findPets = (petResponse?: Pet[]) =>
  rest.get(`${endpoint}/pets`, (req, res, ctx) => {
    console.log(req)
    const PetResponse = petResponse ?? PetStub.buildList(10)

    return res(ctx.delay(0), ctx.status(200), ctx.json(PetResponse))
  })

export const findPetById = (
  parameters: FindPetByIdPathParams,
  petResponse?: Pet,
) =>
  rest.get(`${endpoint}/pets/:petId`, (_, res, ctx) => {
    const { id } = parameters

    const PetResponse = {
      ...(petResponse ?? PetStub.build()),
      id,
    }

    return res(ctx.delay(0), ctx.status(200), ctx.json(PetResponse))
  })

export const addPet = (requestBody: NewPet) =>
  rest.post(`${endpoint}/pets`, (_, res, ctx) => {
    const PetResponse = {
      ...PetStub.build(),
      ...requestBody,
    }

    return res(ctx.delay(0), ctx.status(200), ctx.json(PetResponse))
  })
