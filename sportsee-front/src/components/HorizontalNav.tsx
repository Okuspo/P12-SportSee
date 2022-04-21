import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import SportSeeLogo from '../assets/sportsee_logo.svg'

const HorizontalNav: FC = () => {
  return (
        <div className="horizontal-nav">
          <img src={SportSeeLogo} alt="Logo SportSee" className="logo" />
            <NavLink className="navlink" to="#">Accueil</NavLink>
            <NavLink className="navlink" to="#">Profil</NavLink>
            <NavLink className="navlink" to="#">Réglage</NavLink>
            <NavLink className="navlink" to="#">Communauté</NavLink>
        </div>
  )
}

export default HorizontalNav
