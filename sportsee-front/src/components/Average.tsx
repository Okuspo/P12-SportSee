import React, { FC } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { ISession } from '../types'

interface IProps {
  sessions: ISession[]
}

type SessionObject = {
  name: string,
  sessionLength: number
}

const AverageSessions: FC<IProps> = ({ sessions }: IProps) => {
  const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const data: SessionObject[] = []
  sessions.forEach(session => {
    data.push({
      name: weekDays[session.day - 1],
      sessionLength: session.sessionLength
    })
  }
  )
  const AverageTitle = () => {
    return (
      <div className="average-title">Durée moyenne des sessions</div>
    )
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="average-custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      )
    }

    return null
  }
  return (
      <ResponsiveContainer width='100%' height='100%' className='chart-average'>
        <LineChart
        width={500}
        height={250}
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 20
        }}
      >
        <XAxis dataKey="name"
          axisLine={false}
          tickLine={false}
          fill="#fff"
          />
        <YAxis hide={true}/>
        <Tooltip content={(data: any) => <CustomTooltip active={data.active} payload={data.payload} label={data.label} />} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="#ffffff"
          strokeWidth={2}
          dot={false}
          activeDot={{ stroke: 'white', r: 8 }}

        />
        <Legend verticalAlign='top' align='left' content={AverageTitle}/>
      </LineChart>
    </ResponsiveContainer>
  )
}

export default AverageSessions
