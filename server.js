const express = require('express');
const app = express();
const bcrypt = require('bcrypt-nodejs');
const cors =require('cors');
const knex = require('knex');
const { response } = require('express');

const {handleRegister} = require('./controllers/register');
const {handleSignin} = require('./controllers/signin');
const {handleProfileGet} = require('./controllers/profile');
const {handleImage} = require('./controllers/image');
const {handleApiCall} = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '9713',
      database: 'smart-brain'
    },
  });

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send(database.users)
})

app.post('/signin', (req,res) => {handleSignin(req, res, db, bcrypt)})   

app.post('/register', (req,res) => {handleRegister(req, res, db, bcrypt)})

app.get('/profile/:id', (req,res) => {handleProfileGet(req,res, db)})

app.put('/image', (req,res) => {handleImage(req, res,db)})
app.post('/imageurl', (req,res) => {handleApiCall(req, res)})

app.listen(3000, () => {
    console.log('app is runing on port 3000')
})