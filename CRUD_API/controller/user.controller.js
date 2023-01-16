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
        const addedRecord = await repo.create({username, age, hobbies, userId})
        console.log(`Added Record :${JSON.stringify(addedRecord, null, 4)}`)
        res.status(200).send({message: "Information added to the " + "database successfully."})
    }
    async apiUserPut (req, res, next) {
        const userId = req.params.userId
        const {data, username, age, hobbies} = req.body
        console.log('aaaa', req.body)
        const record = await repo.update(userId, req.body)
        console.log(`Record Updated : 
    \n${JSON.stringify(record, null, 2)}`)
        res.send('Record Updated')

    }
    async apiUserDelete (req, res, next) {

    }
}

module.exports = new UserController()

