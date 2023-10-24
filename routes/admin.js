const path = require('path');

const express = require('express');


const adminController = require('../controllers/admin');

const router = express.Router();
router.get('/users',adminController.getUsers);

router.post('/add-user',adminController.PostUser);

// router.post('/edit-user'.adminController.)

router.post('/delete-user',adminController.deleteUser)

module.exports = router;