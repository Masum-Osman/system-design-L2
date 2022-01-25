const express = require('express')
const axios = require('axios')
const amqp = require('amqplib')
const app = express()
const port = 8082

app.post('/api/v1/user/notify', (req, res) => {
    // var user_id = req.body.user_id;

    var user_data = axios.get('http://127.0.0.1:8081/api/v1/user')
    .then(function (response) {
        var pub = response.data
        pub.forEach(e => {
            publish(e.id)
        });

        res.json(pub)
    })
    .catch(function (error) {
        console.log(error);
    })
})

async function publish(user_id) {
    try {
        const amqpServer = "amqp://localhost";
        const connection = await amqp.connect(amqpServer);
        const channel = await connection.createChannel();
        await channel.assertQueue("users");
        await channel.sendToQueue("users", 
            Buffer.from(JSON.stringify(user_id)));
        await channel.close()
        await connection.close();

    } catch (error) {
        console.log(error)
    }
}

app.listen(port, () => {
    console.log("notification on port: ", port);
})