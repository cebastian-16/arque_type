import { useTheme } from '../contexts/ThemeContext'
import { useAuth } from '../auth/AuthProvider'
import { NavLink } from 'react-router-dom'
import { Switch } from '@tremor/react'
import { Button } from './iu'

const Links = [
  { link: '/home', name: 'Home' }
]

const LinkComponent = ({ link, name }: { link: string, name: string }): JSX.Element => {
  return (
  <li>
    <NavLink to={`${link}`} className='font-semibold hover:text-rose-600 dark:hover:text-blue-300'>{name}</NavLink>
  </li>
  )
}

function NavBar (): JSX.Element {
  const { logout } = useAuth()
  const { toggleTheme } = useTheme()

  return (
    <nav className='bg-blue-300 py-3 dark:bg-slate-900 dark:text-white'>
      <ul className='flex items-center justify-around'>

        <figure className='flex'>
          <img src="/gane.webp" alt="logo de gane" className='w-[120px]' />
        </figure>

        <div className='flex gap-4 text-xl'>
          {Links.map((link, index) => <LinkComponent key={index} link={link.link} name={link.name} />)}
        </div>

        <article className='flex gap-4'>
          <Switch onChange={toggleTheme} />
          <Button onClick={logout}>Cerrar Sesión</Button>
        </article>

      </ul>
    </nav>
  )
}

export default NavBar
