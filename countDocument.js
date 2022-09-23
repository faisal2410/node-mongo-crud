const { client } = require("./dbConfig");
const countDoc=async()=> {
    try {
        const database = client.db("hospital");
        const patients = database.collection("patients");        
        const estimate = await patients.estimatedDocumentCount();
        console.log(`Estimated number of documents in the movies collection: ${estimate}`);       
        const query = { countries: "Canada" };       
        const countCanada = await patients.countDocuments(query);
        console.log(`Number of movies from Canada: ${countCanada}`);
    } finally {
        await client.close();
    }
}
countDoc().catch(console.dir);

/**
Note:
https://www.mongodb.com/docs/drivers/node/current/usage-examples/count/


*/ 