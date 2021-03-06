import * as React from 'react'

import { queryCache } from 'react-query'

import { useAddPet } from '../../api/Pet/useAddPet'
import { useFindPets } from '../../api/Pet/useFindPets'

export const PetsList = (): JSX.Element => {
  const { error, data: pets } = useFindPets({
    limit: 2,
  })
  const [created, setCreated] = React.useState(false)

  const [mutateAddPet] = useAddPet({
    onSuccess: (createdPet) => {
      setCreated(true)
      if (pets && pets?.length > 0) {
        queryCache.setQueryData('/pets', [...pets, createdPet])
      }
    },
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

      <button
        onClick={async (ev) => {
          ev.preventDefault()
          try {
            await mutateAddPet()
          } catch {}
        }}
      >
        Add pet
      </button>
      {created ? <p>Pet has been added!</p> : null}
    </>
  )
}
