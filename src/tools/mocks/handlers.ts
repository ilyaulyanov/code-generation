import { rest } from 'msw'

import { PetStub } from '../../stubs/PetStub'

const endpoint = 'http://localhost:3001/api'

export const handlers = [
  rest.get(`${endpoint}/pets`, (req, res, ctx) => {
    const pets = PetStub.buildList(10)
    return res(ctx.delay(250), ctx.status(200), ctx.json(pets))
  }),
]
