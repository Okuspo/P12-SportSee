import Express from 'express'
import Cors from 'cors'
import Router  from './routes.js'

const app = Express()
const port = 3001
app.use(Cors())
app.use(Router)
app.listen(port, () => console.log(`⚡️[server]: Server is running at https://localhost:${port}`))
