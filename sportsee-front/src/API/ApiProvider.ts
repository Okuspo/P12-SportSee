import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './mocks'
import { IMain, IActivities, IPerformance, IAverage } from '../types'

class ApiProvider {
  id: number
  type: string

  constructor (id: number) {
    this.id = id
    this.type = 'api fetch'
  }

  async getMain (): Promise<IMain> {
    const response = await fetch(`http://localhost:3001/user/${this.id}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    const { data } = await response.json()
    return data
  }

  async getActivity (): Promise<IActivities> {
    const response = await fetch(`http://localhost:3001/user/${this.id}/activity`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    const { data } = await response.json()
    return data
  }

  async getPerformance (): Promise<IPerformance> {
    const response = await fetch(`http://localhost:3001/user/${this.id}/performance`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    const { data } = await response.json()
    return data
  }

  async getAverageSessions (): Promise<IAverage> {
    const response = await fetch(`http://localhost:3001/user/${this.id}/average-sessions`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    const { data } = await response.json()
    return data
  }
}

class MockProvider {
  id: number
  type: string

  constructor (id: number) {
    this.id = id
    this.type = 'mock'
  }

  async getMain (): Promise<IMain> {
    return new Promise((resolve, reject) => {
      const response = USER_MAIN_DATA.find(object => object.id === this.id)
      response ? resolve(response) : reject(new Error('No user data found'))
    })
  }

  async getActivity (): Promise<IActivities> {
    return new Promise((resolve, reject) => {
      const response = USER_ACTIVITY.find(object => object.userId === this.id)
      response ? resolve(response) : reject(new Error('No user data found'))
    })
  }

  async getPerformance (): Promise<IPerformance> {
    return new Promise((resolve, reject) => {
      const response = USER_PERFORMANCE.find(object => object.userId === this.id)
      response ? resolve(response) : reject(new Error('No user data found'))
    })
  }

  async getAverageSessions (): Promise<IAverage> {
    return new Promise((resolve, reject) => {
      const response = USER_AVERAGE_SESSIONS.find(object => object.userId === this.id)
      response ? resolve(response) : reject(new Error('No user data found'))
    })
  }
}

class UserData {
  id: number
  mock: boolean
  user: MockProvider | ApiProvider

  constructor (id: number, mock: boolean) {
    this.id = id
    this.mock = mock
    this.user = this.mock ? new MockProvider(this.id) : new ApiProvider(this.id)
  }

  getUser () {
    return this.user
  }
}

export { UserData }
