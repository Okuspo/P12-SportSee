import React from 'react'
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import { IPerformanceData, IKind } from '../types'

interface IProps {
  data: IPerformanceData[]
  kind: IKind
}

const Performance: React.FC<IProps> = ({ data, kind }: IProps) => {
  console.log(kind)
  enum Kind {
    'Cardio' = 1,
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité'
  }

  const chartData = data.map(performance => {
    return {
      value: performance.value,
      kind: Kind[performance.kind]
    }
  })
  

  return (
    <ResponsiveContainer width='100%' height='100%' className='chart-performance'>
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
        data={chartData}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />

        <Radar
          name="Mike"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default Performance
