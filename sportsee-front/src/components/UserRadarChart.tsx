import React, { FC } from 'react'
import { RadarChart } from 'recharts'
import { UserPerformance } from '../types'

const UserRadarChart: FC<UserPerformance> = ({ kind, data }: UserPerformance) => {
  console.log(kind, data)
  return (
        <div className="user-radar-chart">
          Radar Chart
            <RadarChart />
        </div>
  )
}

export default UserRadarChart
