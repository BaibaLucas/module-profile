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

  
