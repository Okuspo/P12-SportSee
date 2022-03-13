import React, { FC } from 'react'
import { BarChart } from 'recharts'
import { UserActivity } from '../types'

const UserBarChart: FC<UserActivity> = ({ sessions }: UserActivity) => {
  console.log(sessions)
  return (
        <div className="user-bar-chart">
            BarChart
            <BarChart />
        </div>
  )
}

export default UserBarChart
