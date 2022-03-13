import React, { FC } from 'react'
import { KeyData } from '../types'

const UserMetrics: FC<KeyData> = ({ calorieCount, proteinCount, carbohydrateCount, lipidCount }: KeyData) => {
  console.log(calorieCount, proteinCount, carbohydrateCount, lipidCount)
  return (
        <div className="userMetrics">
            User Metrics
        </div>
  )
}

export default UserMetrics
