import React, { FC } from 'react'
import { IActivity } from '../types'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

interface IProps {
  sessions: IActivity[]
}

const Activity: FC<IProps> = ({ sessions }: IProps) => {
  // console.log('Activity', sessions)
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
    <ResponsiveContainer width='100%' height='100%' className='chart-activity'>
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
        <CartesianGrid strokeDasharray="2" vertical={false} />
        <XAxis dataKey="day"
          tickMargin={16}
          tickSize={0}
          minTickGap={30}/>
        <YAxis axisLine={false} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="kilogram"
          name="Poids(kg)"
          fill="#282D30"
          radius={[5, 5, 0, 0]}/>
        <Bar
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          radius={[5, 5, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Activity
