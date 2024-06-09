const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');



app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://')


app.post('/api/register',async (req, res) => {
    console.log(req.body);
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password:  req.body.password,
        })
        res.json({ status: 'ok' }); // This sends the JSON response correctly
    } catch (error) {
        
    }
    res.json({ status: 'error', error: 'Duplicates are found' }); // This sends the JSON response correctly
});


app.post('/api/login',async (req, res) => {

        const user = await User.findOne({
            email: req.body.email,
            password:  req.body.password,
        })

        if (user) {
            res.json({ status: 'ok' }); // This sends the JSON response correctly
        } else {
            res.json({ status: 'error', error: 'User not found' }); // This sends the JSON response correctly
        }
        res.json({ status: 'ok' }); // This sends the JSON response correctly
    
        
    },
 )

app.listen(5000, () => console.log(`Example app listening on port 5000`));
