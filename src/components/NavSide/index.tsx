type NavSideProps = {}
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { routerArray } from '@/router'
import type { RouterProps } from '@/router/interface'

export default function NavSide(props: NavSideProps) {
  const navigate = useNavigate()
  const handleNav = (nav: RouterProps) => {
    navigate(nav.path)
  }
  return (
    <ul className="menu bg-base-200 w-56 rounded-box">
      {
        routerArray.map(item => (
          <li className="cursor-pointer" key={item.path}>
            <a onClick={() => handleNav(item)}>{ item.meta.title }</a>
          </li>
        ))
      }
    </ul>
  )
}
