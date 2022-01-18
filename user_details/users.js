const express = require('express')
const app = express()
const port = 8081

app.get('/api/v1/user', (req, res) =>{
    let user = {
        user_id : 100,
        user_name : "offo",
        device_id : "458DRf56544dw584w8af565232565ffda5"
    }
    res.json(user)
})

app.listen(port, () => {
    console.log("server running on port: ", port);
})