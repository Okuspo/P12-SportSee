import React, { FC } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'
import { UserPerformance } from '../types'

const Performance: FC<UserPerformance> = ({ kind, data }: UserPerformance) => {
  // console.log('Performance component: ', kind, data)
  const data2 = [
    {
      subject: 'Math',
      A: 120,
      B: 110,
      fullMark: 150
    },
    {
      subject: 'Chinese',
      A: 98,
      B: 130,
      fullMark: 150
    },
    {
      subject: 'English',
      A: 86,
      B: 130,
      fullMark: 150
    },
    {
      subject: 'Geography',
      A: 99,
      B: 100,
      fullMark: 150
    },
    {
      subject: 'Physics',
      A: 85,
      B: 90,
      fullMark: 150
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      fullMark: 150
    }
  ]
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data2}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  )
}

export default Performance
