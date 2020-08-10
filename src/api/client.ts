import axios from 'axios'
import { endpoint } from './endpoint'

export const client = axios.create({ baseURL: endpoint })
