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
    async login(req, res) {
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
    async profile(req, res) {
        if(req.session.user) res.status(200).send(req.session.user)
        else res.status(401).send('Please log in')
    },
    async goals(req, res) {
        const { saturatedFat, polyunsaturatedFat, monounsaturatedFat, transFat, cholesterol,
         sodium, potassium, fiber, sugar, vitaminA, vitaminC, calcium, iron, fat, protein, carbohydrates 
        } = res.body
        const db = req.app.get('db')
        const thisArr = await db.show_a_nutrition([date_id])
        if(thisArr.length === 0) {
            return res.status(200).send({message: 'you need goals in life'})
        }
    }
}