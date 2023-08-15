import { RouterProps } from '@/router/interface/index'
import Home from '@/views/home'

const HomeRouter: RouterProps[] = [
  {
    path: '/',
    element: <Home />,
    meta: {
      title: '首页',
      index: 1
    }
  }
]

export default HomeRouter