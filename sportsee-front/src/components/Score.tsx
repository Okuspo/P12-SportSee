import React, { FC } from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

interface IProps {
  score: number
}

const Score: FC<IProps> = ({ score }: IProps) => {
  console.log('Score component', score)
  const data = [
    {
      uv: 100,
      display: 'none'
    },
    {
      uv: score * 100,
      fill: '#ff0000'
    }
  ]

  return (
  <ResponsiveContainer className="score" width="100%" height="100%">
      <RadialBarChart
        data={data}
        barSize={10}
        innerRadius="0%"
        outerRadius="200%"
        startAngle={210}
        endAngle={-150}
        className="chart-score"
      >
        <RadialBar
          background={{ fill: '#fbfbfb' }}
          dataKey="uv"
        />
      </RadialBarChart>
  </ResponsiveContainer>
  )
}

export default Score
