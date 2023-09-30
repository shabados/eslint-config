/* eslint-disable @typescript-eslint/no-unused-vars */

import { data } from '~/module'

type StringAlias = string

const string:StringAlias = 'string'

type Array1 = string[]
type Array2 = string[]

type GenericType<
  T extends string,
  U extends number
> = { [key in T]: U }

const generic:GenericType<typeof string, 1> = {
  hi: 1,
  ...data,
}

export default generic
