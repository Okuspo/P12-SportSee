import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DailyActivity from '../components/DailyActivity'
import AverageSessions from '../components/AverageSessions'
import Performance from '../components/Performance'
import UserMetrics from '../components/UserMetrics'
import { UserData } from '../types'
import Score from '../components/Score'

const Dashboard: FC = () => {
  const { id } = useParams()
  const port = '3001'
  const [userData, setUserData] = useState<UserData>()

  async function getUserData (id: string, port: string) {
    const mainDataPath = 'http://localhost:' + port + '/user/' + id
    const activityPath = 'http://localhost:' + port + '/user/' + id + '/activity'
    const averageSessionsPath = 'http://localhost:' + port + '/user/' + id + '/average-sessions'
    const performancePath = 'http://localhost:' + port + '/user/' + id + '/performance'

    const fetchParameters = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }
    const mainResponse = await fetch(mainDataPath, fetchParameters)
    const activityResponse = await fetch(activityPath, fetchParameters)
    const averageSessionsResponse = await fetch(averageSessionsPath, fetchParameters)
    const performanceResponse = await fetch(performancePath, fetchParameters)
    const mainData = await mainResponse.json()
    const activityData = await activityResponse.json()
    const averageSessionsData = await averageSessionsResponse.json()
    const performanceData = await performanceResponse.json()

    const main = mainData.data
    const activity = activityData.data
    const averageSessions = averageSessionsData.data
    const performance = performanceData.data

    const userData: UserData = {
      mainData: main,
      activityData: activity,
      averageSessionsData: averageSessions,
      performanceData: performance
    }

    setUserData(userData)
  }

  useEffect(() => { getUserData(id!, port!) }, [])

  if (userData) {
    console.log(userData.mainData.keyData)
    return (
      <div className="Dashboard">
        <h1 className="welcome-heading">Bonjour <span className="user-name">{userData.mainData.userInfos.firstName}</span></h1>
        <span> Félicitations ! Vous avez explosé vos objectifs hier</span>
        <DailyActivity {...userData.activityData}/>
        <AverageSessions {...userData.averageSessionsData}/>
        <Performance {...userData.performanceData}/>
        <UserMetrics {...userData.mainData.keyData}/>
        <Score {...userData.mainData} />
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default Dashboard
