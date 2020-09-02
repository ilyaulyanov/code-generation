import axios from 'axios'
import { base } from './endpoint'

export const client = axios.create({ baseURL: base })
