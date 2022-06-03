import React, { FC } from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer, Legend } from 'recharts'

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

  const ScoreLegend = () => {
    return (
      <div className="score-legend">
        <div className="score-legend_score">{score * 100 }%</div>
        <div className="score-legend_text">de votre objectif</div>
      </div>
    )
  }

  return (
    <div className="score">
      <div className='score-title'>Score</div>
      <ResponsiveContainer width="100%" height="100%">
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
          <Legend verticalAlign='middle' align='center' content={ScoreLegend}/>

        </RadialBarChart>
    </ResponsiveContainer>
  </div>
  )
}

export default Score
