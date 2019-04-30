require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./authCtrl')

const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env

const app = express()

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port: ${SERVER_PORT}`)
    })
})

app.use(express.json())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))

app.post('/api/auth/register', authCtrl.register)
app.post('/api/auth/login', authCtrl.login)
app.post('/api/goals', authCtrl.goals)
app.post('/api/check-in', authCtrl.checkIn)
app.get('/api/reports', authCtrl.getData7)
app.get('/api/goals', authCtrl.getgData7)
// app.get('/api/private', authCtrl.home)
// app.put('/api/profile', authCtrl.profile)
// app.get('/api/profile', authCtrl.getProfile)
// app.get('/api/reports', authCtrl.reports)
// app.get('/api/reports/food', authCtrl.food)
// app.get('/api/reports/exercise', authCtrl.exercise)
app.get('/api/logout', (req, res) => {
    req.session.destroy()
    res.redirect('http://localhost:3000/')
})