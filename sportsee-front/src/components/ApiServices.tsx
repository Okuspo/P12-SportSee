import * as React from 'react'
import { useState, useEffect } from 'react'

interface UserInfo {
    firstName: string
    lastName: string
    age: number
}

interface KeyData {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
}
interface User {
    id: number
    userInfos: UserInfo
    todayScore: number
    keyData: KeyData
}

/* const user1: User = {
  id: 12,
  userInfos: {
    firstName: 'Karl',
    lastName: 'Dovineau',
    age: 31
  },
  todayScore: 0.12,
  keyData: {
    calorieCount: 1930,
    proteinCount: 155,
    lipidCount: 50,
    carbohydrateCount: 290
  }
}

console.log(user1) */

const ApiServices = () => {
  const [userData, setUserData] = useState<User>()
  const getUserData = async () => {
    const response = await fetch('http://localhost:3000/user/12',
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }
    )
    const userData = await response.json()
    setUserData(userData.data)
  }
  useEffect(() => {
    getUserData()
  }, [])

  return (
        <div>
            {userData?.id}
        </div>
  )
}

export default ApiServices
