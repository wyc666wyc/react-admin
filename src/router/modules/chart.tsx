import { RouterProps } from '@/router/interface/index'
import Chart from '@/views/chart'

const HomeRouter: RouterProps[] = [
  {
    path: '/chart',
    element: <Chart />,
    meta: {
      title: '图表',
      index: 3
    }
  }
]

export default HomeRouter