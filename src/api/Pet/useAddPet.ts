import { useMutation, QueryOptions } from 'react-query'

import { Pet, Error } from '../Types'
import { client } from '../client'

export const addPet = async () => {
  const { data } = await client.request({
    method: 'POST',
    url: '/pets'
  })
  return data
}

export function useAddPet(config?: QueryOptions<Pet, Error>) {
  return useMutation(addPet, config)
}
