import React, { FC } from 'react'
import { IActivity } from '../types'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

interface IProps {
  sessions: IActivity[]
}
type Payload = number[][]

const Activity: FC<IProps> = ({ sessions }: IProps) => {
  // console.log('Activity', sessions)
  const data = []
  const payload: Payload = [[], []]

  for (let day = 0; day < sessions.length; day++) {
    const dayStr = (day + 1).toString()
    data.push({
      day: dayStr,
      kilogram: sessions[day].kilogram,
      calories: sessions[day].calories
    })
    payload[0].push(sessions[day].kilogram)
    payload[1].push(sessions[day].calories)
  }

  return (
    <div className='chart-activity'>
    <div className='chart-activity_legend'>
      <div className='chart-activity_legend-title'> Activité quotidienne</div>
      <div className='chart-activity_legend-values'>
      <ul className='chart-activity_legend-values-ul'>
        <li className='chart-activity_legend_weight'>Poids (kg)</li>
        <li className='chart-activity_legend_cal'>Calories brûlées (kCal)</li>
      </ul>
      </div>

    </div>

    <ResponsiveContainer width='100%' height='100%' >

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
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day"
          tickMargin={16}
          tickSize={0}
          minTickGap={30}/>
        <YAxis
        yAxisId='weight'
        domain={['dataMin-1', 'dataMax+2']}
        orientation='right'
        axisLine={false}
        tickLine={false}
        tickMargin={5}
        tickCount={3}
        />
        <YAxis
        yAxisId='calories'
        axisLine={false}
        tickLine={false}
        hide/>

        <Tooltip content={(data: any) => <CustomTooltip active={data.active} payload={data.payload} label={data.label} />}/>
        <Bar
        yAxisId="weight"
          dataKey="kilogram"
          name="Poids(kg)"
          fill="#282D30"
          barSize={7}
          radius={[5, 5, 0, 0]}/>
        <Bar
          yAxisId="calories"
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          barSize={7}
          radius={[5, 5, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

const CustomTooltip = ({ active, payload, label }: any) => active
  ? (
  <div className="activity-chart-tooltip">
      <div>{payload[0].value}kg</div>
      <div>{payload[1].value}kCal</div>
  </div>
    )
  : null

export default Activity
