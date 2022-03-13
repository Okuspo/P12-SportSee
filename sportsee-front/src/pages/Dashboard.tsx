import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserBarChart from '../components/UserBarChart'
import UserLineChart from '../components/UserLineChart'
import UserRadarChart from '../components/UserRadarChart'
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

  console.log(userData)
  const userMainData = userData?.mainData
  const userActivity = userData?.activityData
  const userAverageSessions = userData?.averageSessionsData
  const userPerformance = userData?.performanceData

  console.log('main: ', userMainData)
  console.log('activity: ', userActivity?.sessions)
  console.log('average sessions: ', userAverageSessions?.sessions)
  console.log('performance: ', userPerformance)

  if (userData) {
    return (
      <div className="Dashboard">
        <h1 className="welcome-heading">Bonjour <span className="user-name"></span></h1>
        <span> Félicitations ! Vous avez explosé vos objectifs hier</span>
        <UserBarChart {...userData.activityData}/>
        <UserLineChart {...userData.averageSessionsData}/>
        <UserRadarChart {...userData.performanceData}/>
        <UserMetrics {...userData.mainData.keyData}/>
        <Score {...userData.mainData} />
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default Dashboard
