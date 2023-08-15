type NavSideProps = {}

import { useNavigate } from 'react-router-dom'
import { routerArray } from '@/router'
import type { RouterProps } from '@/router/interface'

export default function NavSide(props: NavSideProps) {
  const navigate = useNavigate()
  const handleNav = (nav: RouterProps) => {
    console.log(props)
    navigate(nav.path!)
  }
  return (
    <ul className="menu w-56 m-2 rounded-box shadow-inner backdrop-blur-sm">
      {
        routerArray.map(item => (
          <li className="cursor-pointer text-blue" key={item.path}>
            <a onClick={() => handleNav(item)}>{ item.meta.title }</a>
          </li>
        ))
      }
    </ul>
  )
}
