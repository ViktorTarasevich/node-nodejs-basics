const repo = require('../repository')
const {v4 : uuidv4} = require('uuid')
const fs = require('fs');

class UserController {
    async formUser (req, res) {
        res.render('index.ejs')
    }
    async apiUserGet (req, res, next) {
        const {userId} = req.params
        console.log('id', userId)
        const user = await repo.findById(userId)
        if (user) {
            res.status(200).send(user)
        } else if (userId) {
            res.status(400).json({message: 'Error, id '})
        } else {
            res.status(404).json({message: 'Error, User is not found'})
        }
    }
    async apiUserPost (req, res, next) {
        const {username, age, hobbies} = req.body
        console.log(username, age, hobbies)
        const userId = uuidv4()
        const addedRecord = await repo.create({username, age, hobbies, userId})

        console.log(`Added Record :${JSON.stringify(addedRecord, null, 4)}`)

        res.send("Information added to the " + "database successfully.")
    }
    async apiUserPut (req, res, next) {
        const {username, age, hobbies} = req.body

    }
    async apiUserDelete (req, res, next) {

    }
}

module.exports = new UserController()

