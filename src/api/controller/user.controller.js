const { MongoClient } = require("mongodb");
const { logger } = require("../util/logger");

const connectionString = 'mongodb://localhost:27017';

async function saveUser(req, res) {
    const userData = req.body;

    try {

        if (userData.name && user.email && user.password) {
            //save data to mongodb
            const client = await MongoClient.connect(
                connectionString, {
                useNewUrlParser: true, useUnifiedTopology: true
            }
            );
            const collection = client.db('secretmessage').collection('users');
            const result = await collection.insertOne(user);
            client.close();
            if (result.acknowledged) {
                res.send({ message: "User Registered Successfully!" })
            } else {
                res.status(500).send({ message: "An unexpected error has occurred. Please try again later." })
            }

        } else {
            res.status(404).send({ message: "Please provide valid details." })
        }
    } catch (ex) {
        logger.error(ex);
        res.status(500).send({ message: "An unexpected error has occurred. Please try again later." })
    }
}

function getUser(req, res) {

}

function UpdateUser(req, res) {

}

function deleteUser(req, res) {

}

module.exports = {
    saveUser,
    getUser,
    UpdateUser,
    deleteUser
}