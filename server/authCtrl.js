var moment = require('moment')
const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { email, password } = req.body
        const db = req.app.get('db')
        const accountArr = await db.find_acc_by_email([email])
        if (accountArr[0]) {
            return res.status(200).send({ message: 'Email already in use' })
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        let newAccArr = await db.create_profile([email, hash])
        req.session.user = { email: newAccArr[0].acc_email, id: newAccArr[0].acc_id }
        res.status(200).send({
            message: 'logged in',
            userData: req.session.user,
            loggedIn: true
        })
    },
    login: async (req, res) => {
        const { email, password } = req.body
        const db = req.app.get('db')
        const accountArr = await db.find_acc_by_email([email])
        if (accountArr.length === 0) {
            return res.status(200).send({ message: 'Account not found' })
        }
        const result = bcrypt.compareSync(password, accountArr[0].password)
        if (!result) {
            return res.status(401).send({ message: 'Incorrect password' })
        }
        req.session.user = { email: accountArr[0].email, id: accountArr[0].user_id }
        res.status(200).send({
            message: 'Log in successful',
            loggedIn: true
        })
    },
    goals: async (req, res) => {
        console.log(req.session)
        const nutritionG = req.body
        const db = req.app.get('db')
        try {
            const user = await db.find_acc_by_id(req.session.user.id)
            let today = await db.create_date(user[0].user_id)
            if (today[0]) {
                // let data = [ today[0].date_id, ...nutritionG ]
                nutritionG.date_id = today[0].date_id
                const nutrition = await db.create_g_nutrition(nutritionG)
                return res.status(200).send({
                    message: 'new goals nice'
                })
            }
        }
        catch (err) {
            console.log('err in goals', err)
        }
    },
    checkIn: async (req, res) => {
        const nutritionA = req.body
        const db = req.app.get('db')
        try {
            const users = await db.find_acc_by_id(req.session.user.id)
            let today = await db.create_date(users[0].user_id)
            if (today[0]) {
                nutritionA.date_id = today[0].date_id
                const nutrition = await db.create_a_nutrition(nutritionA)
                return res.status(200).send({
                    message: 'new achievements nice'
                })
            }
        }
        catch (err) {
            console.log('err in checkIn', err)
        }
    },
    getData7: async (req, res) => {
        // const weekly = req.body
        const db = req.app.get('db')
        // const weekly = moment().startOf('day').subtract(1, 'week')
        try {
            const week = await db.get_data_7()
            res.status(200).send({
                message: 'week of data',
                week
            })
        }

        catch (err) {
            console.log('err in getData7', err)
        }
    },
    // getData30: async (req, res) => {
    //     const monthly = req.body
    //     const db = req.app.get('db')
    //     const month = await db.get_month_30()
    // }

    getgData7: async (req, res) => {
        const db = req.app.get('db')
        try {
            const goal = await db.getg_data_7()
            res.status(200).send({
                message: 'week of goals',
                goal
            })
            // console.log(goal)
        }

        catch (err) {
            console.log('err in getgData7', err)
        }
    }
}