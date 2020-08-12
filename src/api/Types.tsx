/* Generated by restful-react */

import React from "react";
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from "restful-react";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * A pet.
 */
export type Pet = NewPet & {
  id: number;
};

/**
 * A new pet.
 */
export interface NewPet {
  name: string;
  tag?: string;
}

/**
 * A discriminator example.
 */
export type CatOrDog = Cat | Dog;

/**
 * A cat, meow.
 */
export interface Cat {
  type: "cat";
  breed: "labrador" | "carlin" | "beagle";
}

/**
 * A dog, wooof.
 */
export interface Dog {
  type: "dog";
  breed: "saimois" | "bengal" | "british shorthair";
}

/**
 * An error :(
 */
export interface Error {
  code: number;
  message: string;
}

/**
 * Request description
 */
export interface Request {
  action?: ("create" | "read" | "update" | "delete")[];
}

export type UpdatePetRequestRequestBody = NewPet;

export interface FindPetsQueryParams {
  /**
   * tags to filter by
   */
  tags?: string[];
  /**
   * maximum number of results to return
   */
  limit?: number;
}

export type FindPetsProps = Omit<GetProps<Pet[], Error, FindPetsQueryParams, void>, "path">;

/**
 * Returns all pets from the system that the user has access to
 * 
 */
export const FindPets = (props: FindPetsProps) => (
  <Get<Pet[], Error, FindPetsQueryParams, void>
    path={`/pets`}
    {...props}
  />
);

export type UseFindPetsProps = Omit<UseGetProps<Pet[], Error, FindPetsQueryParams, void>, "path">;

/**
 * Returns all pets from the system that the user has access to
 * 
 */
export const useFindPets = (props: UseFindPetsProps) => useGet<Pet[], Error, FindPetsQueryParams, void>(`/pets`, props);


export type AddPetProps = Omit<MutateProps<Pet, Error, void, NewPet, void>, "path" | "verb">;

/**
 * Creates a new pet in the store.  Duplicates are allowed
 */
export const AddPet = (props: AddPetProps) => (
  <Mutate<Pet, Error, void, NewPet, void>
    verb="POST"
    path={`/pets`}
    {...props}
  />
);

export type UseAddPetProps = Omit<UseMutateProps<Pet, Error, void, NewPet, void>, "path" | "verb">;

/**
 * Creates a new pet in the store.  Duplicates are allowed
 */
export const useAddPet = (props: UseAddPetProps) => useMutate<Pet, Error, void, NewPet, void>("POST", `/pets`, props);


export interface FindPetByIdPathParams {
  /**
   * ID of pet to fetch
   */
  id: number
}

export type FindPetByIdProps = Omit<GetProps<Pet, Error, void, FindPetByIdPathParams>, "path"> & FindPetByIdPathParams;

/**
 * Returns a user based on a single ID, if the user does not have access to the pet
 */
export const FindPetById = ({id, ...props}: FindPetByIdProps) => (
  <Get<Pet, Error, void, FindPetByIdPathParams>
    path={`/pets/${id}`}
    {...props}
  />
);

export type UseFindPetByIdProps = Omit<UseGetProps<Pet, Error, void, FindPetByIdPathParams>, "path"> & FindPetByIdPathParams;

/**
 * Returns a user based on a single ID, if the user does not have access to the pet
 */
export const useFindPetById = ({id, ...props}: UseFindPetByIdProps) => useGet<Pet, Error, void, FindPetByIdPathParams>((paramsInPath: FindPetByIdPathParams) => `/pets/${paramsInPath.id}`, { pathParams: { id }, ...props });


export type DeletePetProps = Omit<MutateProps<void, Error, void, number, void>, "path" | "verb">;

/**
 * deletes a single pet based on the ID supplied
 */
export const DeletePet = (props: DeletePetProps) => (
  <Mutate<void, Error, void, number, void>
    verb="DELETE"
    path={`/pets`}
    {...props}
  />
);

export type UseDeletePetProps = Omit<UseMutateProps<void, Error, void, number, void>, "path" | "verb">;

/**
 * deletes a single pet based on the ID supplied
 */
export const useDeletePet = (props: UseDeletePetProps) => useMutate<void, Error, void, number, void>("DELETE", `/pets`, props);


export interface UpdatePetPathParams {
  /**
   * ID of pet to update
   */
  id: number
}

export type UpdatePetProps = Omit<MutateProps<Pet, Error, void, UpdatePetRequestRequestBody, UpdatePetPathParams>, "path" | "verb"> & UpdatePetPathParams;

/**
 * Updates a pet in the store.
 */
export const UpdatePet = ({id, ...props}: UpdatePetProps) => (
  <Mutate<Pet, Error, void, UpdatePetRequestRequestBody, UpdatePetPathParams>
    verb="PATCH"
    path={`/pets/${id}`}
    {...props}
  />
);

export type UseUpdatePetProps = Omit<UseMutateProps<Pet, Error, void, UpdatePetRequestRequestBody, UpdatePetPathParams>, "path" | "verb"> & UpdatePetPathParams;

/**
 * Updates a pet in the store.
 */
export const useUpdatePet = ({id, ...props}: UseUpdatePetProps) => useMutate<Pet, Error, void, UpdatePetRequestRequestBody, UpdatePetPathParams>("PATCH", (paramsInPath: UpdatePetPathParams) => `/pets/${paramsInPath.id}`, { pathParams: { id }, ...props });

