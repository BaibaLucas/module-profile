const client = require('./client');

module.exports = {
  async login(email) {
    const result = await client.query('SELECT u.id, u.email, u.password, u.username, u.profilurl FROM "user" AS u WHERE u.email = $1', [email]);
    if (result.rowCount == 0) {
      console.log('Erreur table');
      return null;
    }
    return result.rows[0];
  }
};