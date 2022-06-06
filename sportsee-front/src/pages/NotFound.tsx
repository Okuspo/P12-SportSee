import * as React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div className="NotFound">
            404 page not found
        </div>
        <NavLink to="/"> Back to homepage</NavLink>
    </>
  )
}

export default NotFound
