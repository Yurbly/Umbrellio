const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');

app.use(bodyParser.urlencoded({extended: true}));

const port = 8000;

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);
    const db = database.db('todos');
    require('./app/routes/index.tsx')(app, db);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});