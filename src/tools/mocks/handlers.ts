import { rest } from 'msw'

import { PetStub } from '../../stubs/PetStub'
import { endpoint } from '../endpoint'

export const handlers = [
  rest.get(`${endpoint}/pets`, (_, res, ctx) => {
    const pets = PetStub.buildList(10)
    return res(ctx.delay(250), ctx.status(200), ctx.json(pets))
  }),
]
