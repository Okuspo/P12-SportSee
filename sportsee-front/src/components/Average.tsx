import React, { FC } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ISession } from '../types'

interface IProps {
  sessions: ISession[]
}

type SessionObject = {
  name: string,
  sessionLength: number
}

const AverageSessions: FC<IProps> = ({ sessions }: IProps) => {
  console.log(sessions)
  const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const data: SessionObject[] = []
  sessions.forEach(session => {
    data.push({
      name: weekDays[session.day - 1],
      sessionLength: session.sessionLength
    })
  }
  )
  console.log(data)

  return (
      <ResponsiveContainer width='100%' height='100%' className='chart-average'>
        <LineChart
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default AverageSessions
