import React, { FC } from 'react'
import { LineChart } from 'recharts'
import { UserAverageSessions } from '../types'

const UserLineChart: FC<UserAverageSessions> = ({ sessions }: UserAverageSessions) => {
  console.log(sessions)
  return (
        <div className="user-line-chart">
          LineChart
            <LineChart />
        </div>
  )
}

export default UserLineChart
