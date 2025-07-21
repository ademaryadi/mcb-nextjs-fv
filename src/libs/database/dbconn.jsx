import { Pool } from 'pg'

export const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'postgres',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres'
})

const DBConn = async () => {
  try {
    await pool.connect((error, client, release) => {
      if (error) {
        return console.error('Error in connection', error.stack)
      }

      client.query('SELECT NOW()', error => {
        release()

        if (error) {
          return console.error('Error in query', error.stack)
        }
      })
    })

    if (!pool) {
      await pool.connect()
    }
  } catch (error) {
    return false
  }
}

export default DBConn
