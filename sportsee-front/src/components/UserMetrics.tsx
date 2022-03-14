import React, { FC } from 'react'
import { KeyData } from '../types'
import Metric from '../components/Metric'

const UserMetrics: FC<KeyData> = (props: KeyData) => {
  console.log('UserMetrics component: ', props)

  const metrics = [
    {
      metric: 'Calories',
      unit: 'kCal',
      value: props.calorieCount
    },
    {
      metric: 'Proteines',
      unit: 'g',
      value: props.proteinCount
    },
    {
      metric: 'Glucides',
      unit: 'g',
      value: props.carbohydrateCount
    },
    {
      metric: 'Lipides',
      unit: 'g',
      value: props.lipidCount
    }
  ]

  return (
        <div className="userMetrics">
          {
            metrics.map(object => {
              return <Metric key={object.metric} value={object.value} name={object.metric} unit={object.unit}/>
            })
          }
        </div>
  )
}

export default UserMetrics
