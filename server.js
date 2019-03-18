const express = require('express');

const app = express();

const port = process.env.port || 3000;

const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

//Database Connection
const configDB = require('./config/database.js');
MongoClient.connect(configDB.url, { useNewUrlParser: true } ,() => {
    console.log("DATABASE CONNECTION SUCCESSFUL");
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + "/app"));
app.set('view engine', 'ejs');

require('./routes/routes.js')(app);

app.listen(port, () => console.log("App listening on port: " + port));