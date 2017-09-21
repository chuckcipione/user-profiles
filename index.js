const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const config = require('./config');

const port = 3000;


const app = express();

app.use(bodyParser.json());

var corsOptions = {
    origin: 'http://localhost:8999'
};
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false
}))

const userCtrl = require('./controllers/userCtrl');
const profileCtrl = require('./controllers/profileCtrl');

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriendProfiles);












app.listen(3000, function(){
    console.log(`Listening on Port ${port}`)
});