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
    score: number
    keyData: KeyData
  }

  interface Activity {
    day: string
    kilogram: number
    calories: number
  }

  interface UserActivity {
    id: number,
    sessions: Activity[]
  }

  interface Session {
    day: number,
    sessionLength: number
  }
  interface UserAverageSessions {
    id: number,
    sessions: Session[]
  }

  interface Kind {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
  }

  interface PerformanceData {
    value: number
    kind: number
  }

  interface UserPerformance {
    id: number
    kind: Kind
    data: PerformanceData[]
  }

  interface UserData {
    mainData: User
    activityData: UserActivity
    averageSessionsData: UserAverageSessions
    performanceData: UserPerformance
  }

export { User, UserData, UserActivity, UserAverageSessions, UserPerformance, KeyData }
