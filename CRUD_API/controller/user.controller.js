const repo = require('../repository')
const {v4 : uuidv4} = require('uuid')
const updateTemplet = require('./../fetchUser')
const fs = require('fs');

class UserController {
    async formUser (req, res) {
        res.render('index.ejs')
    }

    async apiUserGet (req, res, next) {
        const {userId} = req.params
        console.log('id', userId)
        const temp = await (updateTemplet({userId}))
        res.send(temp)
    }
    async apiUserPost (req, res, next) {
        const {username, age, hobbies} = req.body
        console.log(username, age, hobbies)
        const userId = uuidv4()
        const createUser = await repo.create({username, age, hobbies, userId})

        if (createUser) {
            res.status(200).send("Information added to the " + "database successfully.")
        } else {
            res.status(400).send({message: "Error "})
        }
    }
    async apiUserPut (req, res, next) {
        const userId = req.params.userId
        const {data, username, age, hobbies} = req.body

        const record = await repo.update(userId, req.body)
        res.send('Record Updated')

    }
    async apiUserDelete (req, res, next) {

    }
}

module.exports = new UserController()

