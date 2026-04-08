import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234", // 👉 본인 비번
    database: "fitbook",
});

export default pool;