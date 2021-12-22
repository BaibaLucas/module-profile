const express = require ('express');
const multer = require('multer');
const path = require('path');
const knex = require('knex');

const loginController = require ('../controllers/loginController');
const userController = require ('../controllers/userController');
const imgController = require ('../controllers/imageController');
const uploadMW = require('../middleware/upload');
const imageController = require('../controllers/imageController');


const router = express.Router();

// Login
router.post('/login', loginController.login);

// User
router.post('/user', userController.createNewUser);
router.get('/member', userController.getAllUsers);
router.patch('/user/username/:id', userController.updateUserUsername);
router.patch('/user/email/:id', userController.updateUserEmail);
router.patch('/user/password/:id', userController.updateUserPassword);


// Image
router.post('/upload/:id', imageController.uploadNewImg);
router.get('/image/:id', imageController.getImg);





module.exports = router;