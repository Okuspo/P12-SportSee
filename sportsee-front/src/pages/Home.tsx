import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

const Home: FC = () => {
  return (
        <div className="home">
          <NavLink to="/user/12">Se connecter en tant que Karl Dovineau </NavLink>
          <NavLink to="/user/18">Se connecter en tant que Cecilia Ratorez </NavLink>
        </div>
  )
}

export default Home
