const express = require('express')
const app = express()
const port = 8081

app.get('/api/v1/user', (req, res) =>{
    // let user = {
    //     user_id : 100,
    //     user_name : "offo",
    //     device_id : "458DRf56544dw584w8af565232565ffda5"
    // }

    var user = [{
        "id": 19,
        "username": "Nafees",
        "phone": "12345567788"
    },
    {
        "id": 26,
        "username": "Moin",
        "phone": "01847287025"
    },
    {
        "id": 85,
        "username": "Rahat Khan",
        "phone": "01844526838"
    },
    {
        "id": 96,
        "username": "Shabbir Ashab",
        "phone": "01844526792"
    },
    {
        "id": 98,
        "username": "Nazmul Islam",
        "phone": "01844526833"
    },
    {
        "id": 117,
        "username": "Md. Atikuzzaman Riyad",
        "phone": "01844526785"
    },
    {
        "id": 118,
        "username": "Md. Kamrul Hassan",
        "phone": "01844526786"
    },
    {
        "id": 139,
        "username": "Nilanjana Halder",
        "phone": ""
    },
    {
        "id": 141,
        "username": "Tonmoy Saha",
        "phone": "01844526805"
    },
    {
        "id": 142,
        "username": "Md Tartibur Rashid",
        "phone": "01844526835"
    },
    {
        "id": 150,
        "username": "Salman",
        "phone": ""
    },
    {
        "id": 151,
        "username": "Abu Hassib",
        "phone": ""
    },
    {
        "id": 174,
        "username": "Tarequl Islam",
        "phone": ""
    },
    {
        "id": 176,
        "username": "Mahmudul Hasan",
        "phone": ""
    },
    {
        "id": 177,
        "username": "Ashraful Haque",
        "phone": ""
    },
    {
        "id": 180,
        "username": "Sanaul Islam",
        "phone": ""
    },
    {
        "id": 215,
        "username": "Faishal Ahmed",
        "phone": ""
    }]

    res.json(user)
})

app.listen(port, () => {
    console.log("server running on port: ", port);
})