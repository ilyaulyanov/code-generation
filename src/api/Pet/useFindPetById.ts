import { useQuery, QueryOptions } from 'react-query'

import { Pet, Error, FindPetByIdPathParams } from '../Types'
import { client } from '../client'

const queryKey = '/pets/${id}' as const
type FindPetByIdQuery = [typeof queryKey, FindPetByIdPathParams]

export const findPetById = async (...args: FindPetByIdQuery) => {
  const [, params] = args
  const { id } = params
  const { data } = await client.request<Pet>({
    method: 'GET',
    url: `/pets/${id}`,
    params,
  })

  return data
}

export function useFindPetById(
  pathParams: FindPetByIdPathParams,
  config?: QueryOptions<Pet, Error>,
) {
  return useQuery(
    [
      queryKey,
      {
        ...pathParams,
      },
    ],
    findPetById,
    config,
  )
}
