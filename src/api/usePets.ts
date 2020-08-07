import { Pet, Error } from '../models/PetStoreApi'

import useSWR from 'swr'
import { endpoint } from '../tools/endpoint';

/* everything below will be automatically generated */
export const useListPets =  () => {
  return useSWR<Pet[], Error>(`${endpoint}/pets`);
}