import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/logo-ignite.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CyclesContext } from '../../contexts/CycleContext'
import { useContext } from 'react'

export function Header() {
  const { username } = useContext(CyclesContext)

  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <span>{username}</span>
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
