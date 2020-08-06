import * as React from 'react'

import useSWR from 'swr'

import { Pet } from '../models/PetStoreApi'

export const PetsList = () => {
  const { data: pets, error } = useSWR<Pet[]>('http://localhost:3001/api/pets')

  if (error) return <p>An error has occurred.</p>
  return (
    <>
      {!pets && <h1>Loading</h1>}
      {pets && pets.length > 0 && (
        <>
          <h1>List of pets</h1>
          <ul>
            {pets.map((pet) => (
              <li key={pet.id}>{pet.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}
