import type { RouteObject } from 'react-router-dom'

export type MetaProps = {
  title: string
  keepAlive?: boolean,
  auth?: boolean,
  key?: string
}

export type RouterProps = RouteObject & {
  meta: MetaProps
}