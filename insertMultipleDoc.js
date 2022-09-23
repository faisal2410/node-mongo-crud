const { client } = require("./dbConfig");

// Insert Multiple Documents
// =======================
const insertMultipleDoc=async()=> {
    try {
        const database = client.db("person");
        const users = database.collection("users");
        const docs = [
            { name: "Talha", hobbies: ["Traveling","Sports"] },
            { name: "Afnan", hobbies: ["Reading","Traveling"] },
            { name: "Mashrufa", hobbies:["Sports","Traveling"] }
        ];
        
        // const options = { ordered: true };
        // const result = await users.insertMany(docs, options);
        const result = await users.insertMany(docs);
        console.log("Insert Multiple Documents output========>",result)
        console.log(`${result.insertedCount} documents were inserted`);
    } catch (error) {
        console.log(error)
    }    
    finally {
        await client.close();
    }
}
insertMultipleDoc()

/**
Note for study:
https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/write-operations/insert/


*/ 

