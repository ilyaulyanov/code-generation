import * as React from 'react'

import { useListPetsAPI } from '../api/FooAPI'

export const PetsList = () => {
  const { data: pets, error } = useListPetsAPI({
    
  })

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
