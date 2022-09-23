const { MongoClient } = require("mongodb")
let url = "mongodb://localhost:27017";
const client = new MongoClient(url);

module.exports= { client }