import React, { FC } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import { UserActivity } from '../types'

const DailyActivity: FC<UserActivity> = ({ sessions }: UserActivity) => {
  console.log('DailyActivity component: ', sessions)

  const data = []

  for (let day = 0; day < sessions.length; day++) {
    const dayStr = (day + 1).toString()
    data.push({
      day: dayStr,
      kilogram: sessions[day].kilogram,
      calories: sessions[day].calories
    })
  }

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="kilogram" fill="#8884d8" />
      <Bar dataKey="calories" fill="#82ca9d" />
    </BarChart>
  )
}

export default DailyActivity
