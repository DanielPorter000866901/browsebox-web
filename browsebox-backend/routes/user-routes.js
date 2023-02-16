/*
    Routes concerning user actions, such as login in, out, delete, update account, etc.
*/

const express = require('express');
const userControllers = require('../controllers/user-controllers');

const router = express.Router();

router.post('/add-user', userControllers.makeUser);
router.get('/delete-user/:id', userControllers.deleteUser);
router.post('/login-user', userControllers.logIn);

module.exports = router;