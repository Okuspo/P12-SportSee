import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import HorizontalNav from '../components/HorizontalNav'
import VerticalNav from '../components/VerticalNav'

/**
 *
 * @returns {JSX}
 */
const Home: FC = () => {
  return (
        <div className="home">
          <HorizontalNav/>
          <div className="home-content">
            <VerticalNav />
            <div className="connect">
              <div>Se connecter en tant que</div>
              <NavLink to="/user/12">👨 Karl Dovineau </NavLink>
              <NavLink to="/user/18">👩 Cecilia Ratorez </NavLink>
            </div>

          </div>

        </div>
  )
}

export default Home
