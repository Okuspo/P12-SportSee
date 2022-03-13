import React, { FC } from 'react'
import { User } from '../types'

const Score: FC <User> = ({ score }:User) => {
  console.log(score)
  return (
        <div></div>
  )
}

export default Score
