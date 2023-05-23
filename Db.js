const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://krunalsolucky121:idkmypass@cluster0.fnwuteo.mongodb.net/node')
    .then(()=> console.log('Connected to atlas'))
    .catch((error) => console.log(error))