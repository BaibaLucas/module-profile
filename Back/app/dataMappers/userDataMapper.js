const client = require('./client');

module.exports = {

  async getAllUsers() {
    const result = await client.query('SELECT * FROM "user"');
    return result.rows;
  },

  async createNewUser(newUser) {
    const result = await client.query('INSERT INTO "user"(email, password, username) VALUES ($1, $2, $3) RETURNING *', [newUser.email, newUser.password, newUser.username]);
    if (result.rowCount == 0) {
      return null
    }
    return result.rows[0]
  },
  
  async updateUserUsername(userId, userToUpdate) {

    const result = await client.query('UPDATE "user" SET username=$1 WHERE id=$2 RETURNING *', [userToUpdate.username, userId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows;
  },

  async updateUserEmail(userId, userToUpdate) {

    const result = await client.query('UPDATE "user" SET email=$1 WHERE id=$2 RETURNING *', [userToUpdate.email, userId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows;
  },

  async updateUserPassword(userId, userToUpdate) {

    const result = await client.query('UPDATE "user" SET password=$1 WHERE id=$2 RETURNING *', [userToUpdate.password, userId]);
    if (result.rowCount == 0) {
        return null;
    }
    return result.rows;
  },
};