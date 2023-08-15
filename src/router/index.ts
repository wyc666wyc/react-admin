import { useRoutes } from 'react-router-dom'
import { RouterProps } from '@/router/interface/index'

const metaRouters = import.meta.glob('./modules/*.tsx', { eager: true }) as Record<string, Record<string, RouterProps[]>>
const sortRoutes = (routes: RouterProps[]) => {
  return routes.sort((x, y) => {
    const prevIndex = x.meta.index
    const nextIndex = y.meta.index
    if (!prevIndex || !nextIndex) {
      return 0
    }
    return prevIndex - nextIndex
  })
}
export const routerArray: RouterProps[] = []
Object.keys(metaRouters).forEach(item => {
  Object.keys(metaRouters[item]).forEach(key => {
    const routes = metaRouters[item][key]
    routerArray.push(...routes)
  })
})
const rootRouter = [
  ...sortRoutes(routerArray)
]

const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router