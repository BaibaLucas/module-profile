// // Multer MW
// const multer = require('multer');


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'profilPic');
//   },
//   filename: function (req, file, cb) {
//     // cb(null, Date.now() + '--' + file.originalname);
//     // cb(null, Date.now() + '--' + req.params.id); /** THIS ONE OK */
//     cb(null, 'profil--' + req.params.id);
//     console.log('INSIDE MULTER MW STORAGE');
//   }
// });

// const fileFilter = (req, file, cb) => {
//   if((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('jpg')){
//     cb(null, true);
//     console.log('FILTER OK true');
//   } else {
//     cb(null, false);
//     console.log('FILTER NOK false');
//   }
//   console.log('INSIDE MULTER MW FILTER');
// };

// const upload = multer({ storage: storage, fileFilter: fileFilter, limits:{fileSize: 1000000} });


// module.exports = upload.single('myImage');

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.S3_BUCKET_REGION,
});

console.log('MiddleWare ----> Multer upload.js');
console.log('KEY', process.env.S3_ACCESS_KEY);
console.log('SECRET', process.env.S3_SECRET_ACCESS_KEY);
console.log('REGION', process.env.S3_BUCKET_REGION);

const upload = (bucketName) => 
  multer({
    storage: multerS3({
      s3: s3,
      bucket: bucketName,
      metadata: function (req, file, cb) {
        cb(null, { fieldname: file.fieldname });
      },
      key: function (req,file,cb) {
        cb(null, `image-${req.params.id}`);
      },
    }),
  });

  module.exports = upload;

  
