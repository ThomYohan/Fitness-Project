const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        const accountArr = await db.find_acc_by_email([email])
        if (accountArr[0]) {
            return res.status(200).send({message: 'Email already in use'})
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        let newAccArr = await db.create_profile([email, hash])
        req.session.user = {email: newAccArr[0].acc_email, id: newAccArr[0].acc_id}
        res.status(200).send({
            message: 'logged in',
            userData: req.session.user,
            loggedIn: true
        })
    },
    login: async (req, res) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        const accountArr = await db.find_acc_by_email([email])
        if(accountArr.length === 0) {
            return res.status(200).send({message: 'Account not found'})
        }
        const result = bcrypt.compareSync(password, accountArr[0].password)
        if(!result) {
            return res.status(401).send({message: 'Incorrect password'})
        }
        req.session.user = {email: accountArr[0].email, id: accountArr[0].id}
        res.status(200).send({
            message: 'Log in successful',
            loggedIn: true
        })
    },
    // async profile(req, res) {
    //     if(req.session.user) res.status(200).send(req.session.user)
    //     else res.status(401).send('Please log in')
    // },
    // async checkIn(req, res) {
    //     const { date_id, saturatedFat, polyunsaturatedFat, monounsaturatedFat, transFat, cholesterol,
    //      sodium, potassium, fiber, sugar, vitaminA, vitaminC, calcium, iron, fat, protein, carbohydrates 
    //     } = req.body
    //     const db = req.app.get('db')
    //     const thisArr = await db.create_a_nutrition([date_id, saturatedFat, polyunsaturatedFat, monounsaturatedFat, transFat, cholesterol,
    //     sodium, potassium, fiber, sugar, vitaminA, vitaminC, calcium, iron, fat, protein, carbohydrates])
    //     if(thisArr.length === 0) {
    //         return res.status(200).send({message: 'you need goals in life'})
    //     }
    // }

    goals: async (req, res) => {
        const nutritionG = req.body
        const db = req.app.get('db')
        let today = db.create_date()
        if (!today[0]) {try{
            const nutrition = await db.create_g_nutrition(nutritionG)
            return res.status(200).send({
                message: 'new goals nice'
            })
        }
        catch(err) {
            console.log('err', err)
        }}
    },
    checkIn: async (req, res) => {
        const nutritionA = req.body
        const db = req.app.get('db')
        let today = db.create_data()
        if (!today[0]) try{
            const nutrition = await db.create_a_nutrition(nutritionA)
            return res.status(200).send({
                message: 'new achievements nice'
            })
        }
        catch(err) {
            console.log('err', err)
        }
    }
}