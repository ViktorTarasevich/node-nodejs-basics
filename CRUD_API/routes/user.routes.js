const Router = require('express')
const router = new Router()
const user = require('../controller/user.controller')

router.get('/users', user.formUser) //
router.get('/users/:userId', user.apiUserGet) //получаем пользователя по id

router.post('/users', user.apiUserPost) //создаем пользователя

router.post('/users/:userId', user.apiUserPut) // обновить пользователя

module.exports = router
