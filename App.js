require('./Db.js')
const express = require('express');
const Data = require('./Data')
const app = express();
app.post("/postdata", async (req, res) => {
    const info = new Data({
        cartItems : req.body
    }).save()

    res.send({
        message : "success"
    })
});


app.listen(3000, ()=> {
    console.log("server running fine")
})