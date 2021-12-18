const imageDataMapper = require('../dataMappers/imageDataMapper');
const upload = require('../middleware/upload');


module.exports = {
  async uploadNewImg(req, res, next) {
    try {
      console.log('imageController.js ----> uploadNewImg()');
      const uploadSingle = upload('module-profile').single('myImage');
      console.log(req.params.id);
      const id = req.params.id;
      uploadSingle(req, res, async(err) => {
        if(err)
        return res.status(400).json({success: false, message: err.message});
        const uploadImg = await imageDataMapper.uploadNewImg(req.file.location, id);
        // console.log('test UpImg', uploadImg);
        res.status(200).json({
          sucess: true,
          // data: req.file.location,
          data: uploadImg,
        });
        console.log('IMG UPDATE SUCCESSFULLY');
      })
    } catch(error) {
      console.log('IMGCONTROLLER upload ---> ERROR ');
      next(error);
    }
  },

  async getImg(req, res, next) {
    try {
      const id = req.params.id;
      // console.log('IMGCONTROLLER ----> ID PARAMS', id);
      const getMyImg = await imageDataMapper.getImg(id);
      // console.log('IMGCONTROLLER ----> AFTERDATAMAPPER', getMyImg);
      if (getMyImg == null) {
        // console.log('IMGCONTROLLER getMyIMG == NULL ----> Aucune image trouvé');
        const data = getMyImg;
        // console.log('IMGCONTROLLER data ---->', data);
        res.json({
          data: data
        });
      }
      if (getMyImg) {
        // console.log('IMGCONTROLLER getMyIMG OK ----> image trouvé');
        const dirname = path.resolve();
        const fullfilepath = path.join(dirname, getMyImg.filepath);
        const data = res.type(getMyImg.mimetype).sendFile(fullfilepath);
        return data; 
      }
    } catch(error) {
      // console.log('error getImg IMG CONTROLLER');
      next(error);
    }
  },
};