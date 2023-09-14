const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "Zheka",
    password: "12345678",
    database: "Blog",
});

app.post('/api/auth/signup', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        [username, email, password]
    )
});


app.post('/api/auth/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send(err);
            }

            if (result.length > 0) {
                console.log("Login successfully", result);
                res.send(result[0]);
            }
            else {
                console.log("Login bad", result);
                res.send(result[0]);
            }
        }
    )
});

app.get('/api/users', (req, res) => {

    db.query(
        "SELECT * FROM users",
        (err, result) => {
            if (err) {
                res.send(err);
            }

            res.send(result);

        }
    )
});

app.post('/api/user', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        [username, email, password]
    )
});

app.listen(8000, () => {console.log("Server started")});