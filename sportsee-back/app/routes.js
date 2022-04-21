import Express from 'express'
import idx from 'idx'
import { getUserById, getUserActivityById, getUserAverageSession, getUserPerformance } from './models.js'
import { handleNoUserData } from './middleware.js'

const Router = Express.Router()

Router.get('/user/:id', (request, response) => {
    const userId = idx(request, _ => _.params.id)
    const userData = getUserById(Number(userId))

    return handleNoUserData(response, userData)
})

Router.get('/user/:id/activity', (request, response) => {
    const userId = idx(request, _ => _.params.id)
    const userData = getUserActivityById(Number(userId))

    return handleNoUserData(response, userData)
})

Router.get('/user/:id/average-sessions', (request, response) => {
    const userId = idx(request, _ => _.params.id)
    const userData = getUserAverageSession(Number(userId))

    return handleNoUserData(response, userData)
})

Router.get('/user/:id/performance', (request, response) => {
    const userId = idx(request, _ => _.params.id)
    const userData = getUserPerformance(Number(userId))

    return handleNoUserData(response, userData)
})

export default Router