interface IUserInfo {
    firstName: string
    lastName: string
    age: number
  }

  interface IMetrics {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  }

  interface IMain {
    id: number
    userInfos: IUserInfo
    score: number
    keyData: IMetrics
  }

  interface IActivity {
    day: string
    kilogram: number
    calories: number
  }

  interface IActivities {
    userId: number,
    sessions: IActivity[]
  }

  interface ISession {
    day: number,
    sessionLength: number
  }
  interface IAverage {
    userId: number,
    sessions: ISession[]
  }

  interface IKind {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
  }

  interface IPerformanceData {
    value: number
    kind: number
  }

  interface IPerformance {
    userId: number
    kind: IKind
    data: IPerformanceData[]
  }

  type IAllMains = IMain[]
  type IAllActivities = IActivities[]
  type IAllPerformances = IPerformance[]
  type IAllAverages = IAverage[]

export { IAllMains, IAllActivities, IAllPerformances, IActivity, ISession, IPerformanceData, IKind, IAllAverages, IMain, IPerformance, IActivities, IAverage, IMetrics }
