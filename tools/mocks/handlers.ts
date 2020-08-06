import { rest } from 'msw'

import { PetStub } from '../../src/stubs/PetStub'

export const handlers = [
  rest.get('/pets', (req, res, ctx) => {
    const pets = PetStub.buildList(10)
    return res(
      ctx.json(pets)
    )
  }),
]