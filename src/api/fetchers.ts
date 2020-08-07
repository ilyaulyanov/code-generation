import useSWR, { ConfigInterface } from 'swr'
import { endpoint } from '../tools/endpoint'

export interface customUseSWRProps<D, E> extends ConfigInterface<D, E> {}

const customUseSWR = <D, E>(
  route: string,
  props: customUseSWRProps<D, E>,
) => {
  console.log({ props, route })
  return useSWR<D, E>(`${endpoint}${route}`, props)
}

export { customUseSWR as useSWR, customUseSWRProps as ConfigInterface }