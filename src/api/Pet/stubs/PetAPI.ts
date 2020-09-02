import { rest } from 'msw'

import { Pet, NewPet, FindPetByIdPathParams } from '../../Types'
import { PetStub } from './PetStub'
import { base } from '../../endpoint'

const petsBase = '/pets'

export const findPets = (petResponse?: Pet[]) =>
  rest.get(`${base}${petsBase}`, (req, res, ctx) => {
    const limit = req.url.searchParams.get('limit')

    let PetResponse = petResponse ?? PetStub.buildList(10)

    if (limit) {
      PetResponse = PetResponse.slice(0, parseInt(limit, 10))
    }

    return res(ctx.delay(0), ctx.status(200), ctx.json(PetResponse))
  })

export const findPetById = (
  parameters: FindPetByIdPathParams,
  petResponse?: Pet,
) =>
  rest.get(`${base}${petsBase}/:petId`, (_, res, ctx) => {
    const { id } = parameters

    const PetResponse = {
      ...(petResponse ?? PetStub.build()),
      id,
    }

    return res(ctx.delay(0), ctx.status(200), ctx.json(PetResponse))
  })

export const addPet = (requestBody: NewPet) =>
  rest.post(`${base}${petsBase}`, (_, res, ctx) => {
    const PetResponse = {
      ...PetStub.build(),
      ...requestBody,
    }

    return res(ctx.delay(0), ctx.status(200), ctx.json(PetResponse))
  })
