const { client } = require("./dbConfig");

// Find Multiple Documents:
// ========================
const findMultipleDoc=async()=> {
    try {
        const database = client.db("hospital");
        const patients = database.collection("patients");
        const query = { runtime: { $lt: 15 } };
        const options = {
            sort: { title: 1 },
            projection: { _id: 0, title: 1, imdb: 1 },
        };
        const cursor = patients.find(query, options);
        if ((await cursor.count()) === 0) {
            console.log("No documents found!");
        }
        await cursor.forEach(console.dir);
    } finally {
        await client.close();
    }
}
findMultipleDoc().catch(console.dir);
