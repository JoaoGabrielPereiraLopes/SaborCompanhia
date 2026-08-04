import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();


const Pool = mysql.createPool({
    host: process.env.DATABASEHOST,
    port: Number(process.env.DATABASEPORT),
    user: process.env.DATABASEUSER,
    password: process.env.DATABASEPASSWORD,
    database: process.env.DATABASENAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default Pool;