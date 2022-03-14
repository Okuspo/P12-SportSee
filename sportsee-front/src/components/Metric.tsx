import React, { FC } from 'react'
/* import CaloriesIcon from '../assets/Calorie-icon.svg'
import GlucidesIcon from '../assets/Glucides-icon.svg'
import ProteinesIcon from '../assets/Proteine-icon.svg'
import LipidesIcon from '../assets/Lipides-icon.svg'
 */
interface Props {
    value: number
    name: string
    unit: string
}

/* interface IIconRef {
    [key: string]: string
}

const iconRef: IIconRef = {
  calories: CaloriesIcon,
  glucides: GlucidesIcon,
  lipides: LipidesIcon,
  protein: ProteinesIcon
} */

const Metric: FC <Props> = ({ value, name, unit }) => {
  console.log(value)

  return (
        <div className='metric'>
            <img className='metric-icon' src={'../../' + name + '-icon.svg'} alt={name + ' icone'} />
            <div className='metric-data'>
                <span className='metric-value'>{value}{unit}</span>
                <br/>
                <span className='metric-type'>{name}</span>
            </div>
        </div>
  )
}

export default Metric
