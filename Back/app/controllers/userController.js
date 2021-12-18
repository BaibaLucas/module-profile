const userDataMapper = require('../dataMappers/userDataMapper');
const bcrypt = require('bcrypt');
const imageDataMapper = require('../dataMappers/imageDataMapper');

module.exports = {

  async getAllUsers(req, res, next) {
    try {
      const allUsers = await userDataMapper.getAllUsers();
      res.json({
        data: allUsers
      });
    } catch(error) {
      next(error);
    }
  },

  async createNewUser(req, res, next) {
    try {
      const newUser = req.body;
      const saltRounds = 10;
      const regexPassword = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}/;
      const test = regexPassword.test(newUser.password);
      console.log(test);
      if (!test) {
        res.status('401').json({data: newUser});
      };

      if (test) {
        const hashedPassword = bcrypt.hashSync(newUser.password, saltRounds);

        const createdUser = await userDataMapper.createNewUser({
          username: newUser.username,
          email: newUser.email,
          password: hashedPassword,
        });
        const userId = createdUser.id;
        // console.log('userController ----> BEFORE DEFAULTPIC');
        // const defaultPic = await imageDataMapper.defaultPic(userId);
          res.json({
            status: 200,
            message: 'new user created',
            data: createdUser,
            logged: true
          });
      }
    } catch(error) {
      next(error);
    }
  },
};