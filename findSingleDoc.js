const { client } = require("./dbConfig");

// Find a Document
// ====================
const findSingleDoc=async()=> {
    try {
        const database = client.db("hospital");
        const patients = database.collection("patients");
        const query = { title: "The Room" };
        const options = {
            sort: { "imdb.rating": -1 },
            projection: { _id: 0, title: 1, imdb: 1 },
        };
        const patient = await patients.findOne(query, options);
       
        console.log("Output of find a doc=====>",patient);
    } finally {
        await client.close();
    }
}
findSingleDoc().catch(console.dir);
