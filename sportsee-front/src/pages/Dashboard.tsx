import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserData } from '../API/ApiProvider'
import { IMain, IPerformance, IAverage, IActivities } from '../types'
import Activity from '../components/Activity'
import Average from '../components/Average'
import Performance from '../components/Performance'
import UserMetrics from '../components/UserMetrics'
import Score from '../components/Score'
import NotFound from './NotFound'
import HorizontalNav from '../components/HorizontalNav'
import VerticalNav from '../components/VerticalNav'

/**
 *
 * @returns {JSX}
 */
const Dashboard: FC = () => {
  const { id } = useParams()
  if (!id) return <NotFound />

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
    })()
  }
  , [])

  return (
      <div className="Dashboard">
        {<HorizontalNav/>}
        <div className="dashboard-main">
          {<VerticalNav />}
          <div className="dashboard-content">
            {main && <h1 className="welcome-heading">Bonjour <span className="user-name">{main.userInfos.firstName}</span></h1>}
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
