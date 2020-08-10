import * as Factory from 'factory.ts'
import faker from 'faker'

import { Pet } from '../../Types'

export const PetStub = Factory.Sync.makeFactory<Pet>({
  id: Factory.each(() => faker.random.number()),
  name: Factory.each(() => faker.random.word()),
  tag: 'foo'
})
