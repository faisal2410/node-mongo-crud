const { client } = require("./dbConfig");

// Insert a document
// ====================
const createDoc=async()=> {
    try {
        const database = client.db("hospital");
        const haiku = database.collection("patients");
        const doc = {
            title: "Record of a Shriveled Datum",
            content: "No bytes, no problem. Just insert a document, in MongoDB",
        }
        const result = await haiku.insertOne(doc);
        console.log("Insert doc output=========>",result)
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}
createDoc().catch(console.dir);

/**
Note For study :
https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/write-operations/insert/



*/ 
