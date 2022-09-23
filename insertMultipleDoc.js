const { client } = require("./dbConfig");

// Insert Multiple Documents
// =======================
const insertMultipleDoc=async()=> {
    try {
        const database = client.db("hospital");
        const foods = database.collection("patients");
        const docs = [
            { name: "cake", healthy: false },
            { name: "lettuce", healthy: true },
            { name: "donut", healthy: false }
        ];
        
        const options = { ordered: true };
        const result = await foods.insertMany(docs, options);
        console.log("Insert Multiple Documents output========>",result)
        console.log(`${result.insertedCount} documents were inserted`);
    } finally {
        await client.close();
    }
}
insertMultipleDoc().catch(console.dir);

/**
Note for study:
https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/write-operations/insert/


*/ 

