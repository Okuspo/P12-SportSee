// Libraries
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// Api
import { UserData } from '../API/ApiProvider'
// Types
import { IMain, IPerformance, IAverage, IActivities } from '../types'
// Components
import Activity from '../components/Activity'
import Average from '../components/Average'
import Performance from '../components/Performance'
import UserMetrics from '../components/UserMetrics'
import Score from '../components/Score'
import NotFound from './NotFound'
import HorizontalNav from '../components/HorizontalNav'
import VerticalNav from '../components/VerticalNav'

const Dashboard: FC = () => {
  const { id } = useParams()
  if (!id) return <NotFound />

  /*   const mainDefaultValue: IMain = {
    id: 0,
    keyData: {
      calorieCount: 0,
      proteinCount: 0,
      carbohydrateCount: 0,
      lipidCount: 0
    },
    score: 0,
    userInfos: {
      firstName: '',
      lastName: '',
      age: 0
    }
  }

  const activityDefaultValue = {
    userId: 12,
    sessions: [
      {
        day: '2020-01-01',
        kilogram: 0,
        calories: 0
      }
    ]
  }

  const averageDefaultValue = {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 0
      }
    ]

  }

  const performanceDefaultValue = {
    userId: 12,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity'
    },
    data: [
      {
        value: 0,
        kind: 1
      }
    ]
  } */
  const numId = parseInt(id)
  const [main, setMain] = useState<IMain>()
  const [performance, setPerformance] = useState<IPerformance>()
  const [activity, setActivity] = useState<IActivities>()
  const [average, setAverage] = useState<IAverage>()
  useEffect(() => {
    (async () => {
      const userData = new UserData(numId, false)
      const user = userData.getUser()
      const userMain = await user.getMain()
      const userPerformance = await user.getPerformance()
      const userActivity = await user.getActivity()
      const userAverage = await user.getAverageSessions()
      setPerformance(userPerformance)
      setMain(userMain)
      setActivity(userActivity)
      setAverage(userAverage)
      // console.log(userPerformance, userActivity, userAverage, userMain)
    })()
  }
  , [])

  return (
      <div className="Dashboard">
        {<HorizontalNav/>}
        <div className="dashboard-main">
          {<VerticalNav />}
          <div className="dashboard-content">
            {main && <h1 className="welcome-heading">Bonjour <span className="user-name">{`${main.userInfos.firstName} ${main.userInfos.lastName}`}</span></h1>}
            <span> Félicitations ! Vous avez explosé vos objectifs hier 👏</span>
            <div className="dashboard-charts">
              {activity && <Activity sessions={activity.sessions}/>}
              {average && <Average sessions={average.sessions}/>}
              {performance && <Performance data={performance.data} kind={performance.kind}/>}
              {main && <UserMetrics keyData={main.keyData}/>}
              {main && <Score score={main.score}/>}
            </div>

          </div>
        </div>

      </div>
  )
}

export default Dashboard

/* for (let i = 0; i < 10; i++) {
  ((j) => document.addEventListener('click', () => { console.log(j) }))(i)
}
 */
