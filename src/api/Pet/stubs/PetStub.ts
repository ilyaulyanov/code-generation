import * as Factory from 'factory.ts'
import faker from 'faker'

import { Pet, NewPet } from '../../Types'

export const PetStub = Factory.Sync.makeFactory<Pet>({
  id: Factory.each(() => faker.random.number()),
  name: Factory.each(() => faker.random.word()),
  tag: 'foo',
})

export const NewPetStub = Factory.Sync.makeFactory<NewPet>({
  name: Factory.each(() => faker.random.word()),
  tag: 'foo',
})
