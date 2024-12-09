const { DB } = require('../config/db')

const addPost = async(title, img, desc) => {
    const sqlQuery = "INSERT INTO posts VALUES(DEFAULT, $1, $2, $3)"
    const values = [title, img, desc]
    const { rowCount,rows }  = await DB.query(sqlQuery, values)
    return {
        rowCount, rows
    }
}

const ListPost = async() => {
    const sqlQuery = "SELECT * FROM posts"
    const { rows } = await DB.query(sqlQuery)
    return rows;
}

const likePost = async (id) => {
      const sqlQuery = 'UPDATE posts SET likes = COALESCE(likes, 0) + 1 WHERE id = $1 RETURNING *'
      const values = [id]
      const { rows } = await DB.query(sqlQuery, values)
      return rows[0]
  }

const deletePost = async (id) => {
    const sqlQuery = 'DELETE FROM posts WHERE id = $1';
    const values = [id];
    const eli  =await DB.query(sqlQuery, values)
    return eli.rows[0]
  }

module.exports = {
    addPost, ListPost, likePost, deletePost
}