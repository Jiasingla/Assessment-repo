import mysql from 'mysql2'
import 'dotenv/config'

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})

db.connect((err) => {
  if (err) {
    console.error("DB Connection Failed:", err.message)
    process.exit()
  }
  console.log("DB Connected Successfully")
})

export default db