const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const User = require('./models/userModels')
const jwt = require ('jsonwebtoken')

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://nicholass:VsZmA8XZiKezaeY@cluster0.w1ysuvl.mongodb.net/')


app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: 'ok' }); // This sends the JSON response correctly
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Duplicates are found' }); // This sends the JSON response correctly    
    }

});


app.get('/api/quote', async (req, res) => {

    const token  = req.headers['x-access-token']
    try{
    const decoded = jwt.verify(token,'secret123')
    const email = decoded.email
    const user = await User.findOne({email:email})

        return {status:'ok', quote:user.quote}
    }catch(error){
        console.log(error)
        res.json({status:'error', error:'invalid token'})
    }    
     })

    

app.listen(1337, () => console.log(`Example app listening on port 1337`));
