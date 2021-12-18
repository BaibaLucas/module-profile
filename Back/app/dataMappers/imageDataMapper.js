
const client = require('./client');
const upload = require('../middleware/upload');


module.exports = {
  async uploadNewImg(imgUrl, id) {
    const result = await client.query('UPDATE "user" SET "profilurl"=$1 WHERE "id"=$2 RETURNING *', [imgUrl, id]);
    if (result.rowCount == 0) {
      console.log('Erreur DataMapper test');
      return null
    }
    return result.rows[0];
  },
};