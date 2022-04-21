import React, { FC } from 'react'
import CaloriesIcon from '../assets/Calories-icon.svg'
import GlucidesIcon from '../assets/Glucides-icon.svg'
import ProteinesIcon from '../assets/Proteine-icon.svg'
import LipidesIcon from '../assets/Lipides-icon.svg'

interface IProps {
    value: number
    name: string
    unit: string
}

interface IIconRef {
    [key: string]: string
}

const iconRef: IIconRef = {
  Calories: CaloriesIcon,
  Glucides: GlucidesIcon,
  Lipides: LipidesIcon,
  Proteines: ProteinesIcon
}

const Metric: FC <IProps> = ({ value, name, unit }:IProps) => {
  return (
    <div className='metric'>
      <img className='metric-icon' src={iconRef[name]} alt={`${name} icone`} />
      <div className='metric-data'>
        <span className='metric-value'>{value}{unit}</span>
        <br/>
        <span className='metric-type'>{name}</span>
    </div>
  </div>
  )
}

export default Metric
