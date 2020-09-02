import { useQuery, QueryOptions } from 'react-query'

import { Pet, Error, FindPetsQueryParams } from '../Types'
import { client } from '../client'

const queryKey = '/pets' as const
type FindPetsQuery = [typeof queryKey, FindPetsQueryParams]

export const findPets = async (...args: FindPetsQuery) => {
  const [, params] = args

  const { data } = await client.request<Pet[]>({
    url: queryKey,
    method: 'GET',
    params,
  })
  return data
}

export function useFindPets(
  queryParams?: FindPetsQueryParams,
  config?: QueryOptions<Pet[], Error>,
) {
  return useQuery([queryKey, { ...queryParams }], findPets, config)
}
