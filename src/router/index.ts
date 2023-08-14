import { useRoutes } from 'react-router-dom'
import { RouterProps } from '@/router/interface/index'

const metaRouters = import.meta.glob('./modules/*.tsx', { eager: true }) as Record<string, Record<string, RouterProps[]>>

export const routerArray: RouterProps[] = []
Object.keys(metaRouters).forEach(item => {
  Object.keys(metaRouters[item]).forEach(key => {
    const routes = metaRouters[item][key]
    routerArray.push(...routes)
  })
})
const rootRouter = [
  ...routerArray
]

const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router