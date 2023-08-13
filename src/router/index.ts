import { useRoutes } from 'react-router-dom'
import { RouterProps } from '@/router/interface/index'

const metaRouters = import.meta.glob('./modules/*.tsx', { eager: true })

export const routerArray: RouterProps[] = []
Object.keys(metaRouters).forEach(item => {
  Object.keys(metaRouters[item]).forEach(key => {
    routerArray.push(...metaRouters[item][key])
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