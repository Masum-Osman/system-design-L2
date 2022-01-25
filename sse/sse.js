const amqp = require("amqplib")
// const { connect } = require("http2")

connect()

async function connect() {
    try {
        const amqpServer = "amqp://localhost"
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel()
        await channel.assertQueue("users")

        channel.consume("users", message => {
            const input = JSON.parse(message.content.toString())
            console.log(`Received user with id ${input.user_id}`)
        })

        console.log("Waiting For Messages...");
    } catch (error) {
        console.log(error)
    }
}