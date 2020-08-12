import * as React from 'react'

import { useFindPetById } from '../../api/Pet/useFindPetById'
import type { Pet as PetType } from '../../api/Types'

interface IPetProps {
  id: PetType['id']
}

export const Pet = ({ id }: IPetProps) => {
  const { error, data: pet, isLoading } = useFindPetById({ id })

  if (isLoading) return <p>is loading</p>
  if (error) return <p>An error has occurred.</p>
  return (
    <>
      {!pet && <h1>Loading</h1>}
      {pet && (
        <>
          <h1>Pet</h1>
          {pet.name}
          {pet.tag && <p>Pet tag: {pet.tag.toUpperCase()}</p>}
        </>
      )}
    </>
  )
}
