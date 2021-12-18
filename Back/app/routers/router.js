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

router.post('/login', loginController.login);
router.post('/user', userController.createNewUser);
router.get('/member', userController.getAllUsers);
// router.post('/upload/:id', uploadMW, imageController.uploadNewImg);
router.post('/upload/:id', imageController.uploadNewImg);


router.get('/image/:id', imageController.getImg);

// // Image Get Routes
// router.get('/image/:id', (req, res) => {
//   const { id } = req.params;
//   // const { filename } = req.params;
//   db
//     .select('*')
//     .from('image_files')
//     .where({ user_id: id })
//     .then(images => {
//       if (images[0]) {
//         const dirname = path.resolve();
//         const fullfilepath = path.join(dirname, images[0].filepath);
//         const data = res.type(images[0].mimetype).sendFile(fullfilepath)
//         return data;
//       }
//       return Promise.reject(
//         new Error('Image does not exist')
//       );
//     })
//     .catch(err => res.status(404).json({
//       sucess: false,
//       message: 'not found',
//       stack: err.stack,
//     }),
//     );
// });




module.exports = router;