import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import HorizontalNav from '../components/HorizontalNav'
import VerticalNav from '../components/VerticalNav'

const Home: FC = () => {
  return (
        <div className="home">
          <HorizontalNav/>
          <VerticalNav />
          <NavLink to="/user/12">Se connecter en tant que Karl Dovineau </NavLink>
          <NavLink to="/user/18">Se connecter en tant que Cecilia Ratorez </NavLink>
        </div>
  )
}

export default Home
