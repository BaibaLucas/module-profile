const userDataMapper = require('../dataMappers/userDataMapper');
const bcrypt = require('bcrypt');

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

  async updateUserUsername(req, res, next) {
    try {
      const userToUpdate = req.body;
      const userId = req.params.id;
      console.log('controllers updateUser req.body ---->', req.body);
      console.log('controllers updateUser req.params.id ---->', userId);
      const userUpdated = await userDataMapper.updateUserUsername(userId, {
          username: userToUpdate.editusername,
          });
      res.json({
          message: 'user name updated',
          data: userUpdated
      });
      console.log('user name updated');
    } catch(error) {
      next(error);
    }
  },

  async updateUserEmail(req, res, next) {
    try {
      const userToUpdate = req.body;
      const userId = req.params.id;
      console.log('controllers updateUser req.body ---->', req.body);
      console.log('controllers updateUser req.params.id ---->', userId);
      const userUpdated = await userDataMapper.updateUserEmail(userId, {
          email: userToUpdate.editemail
          });
      res.json({
          message: 'user email updated',
          data: userUpdated
        });
      console.log('user email updated');
    } catch(error) {
      next(error);
    }
  },

  async updateUserPassword(req, res, next) {
    try {
      const userToUpdate = req.body;
      const userId = req.params.id;
      console.log('controllers updateUser req.body ---->', req.body);
      console.log('controllers updateUser req.params.id ---->', userId);
      const regexPassword = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}/;
      const test = regexPassword.test(userToUpdate.editpassword);
      console.log(test);
      if (test) {
        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(userToUpdate.editpassword, saltRounds);
        const userUpdated = await userDataMapper.updateUserPassword(userId, {
            password: hashedPassword,
            });
        res.json({
            message: 'user password updated',
            data: userUpdated
        });
        console.log('user password updated');
    } else {
        console.log('userupdated NOT OK');
    }
    } catch(error) {
      next(error);
    }
  },
}; 