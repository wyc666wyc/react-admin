type NavSideProps = {

}
import { useState } from 'react'
export default function NavSide(props: NavSideProps) {
  const { } = props
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(val => !val)
  }
  return (
    <nav className='bg-slate-400 transition-all' style={{width: toggle ? 200 : 100}}>
      nav
      <button className='btn' onClick={handleToggle}>toggle</button>
    </nav>
  )
}