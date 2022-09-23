const { client } = require("./dbConfig");

// Find Multiple Documents:
// ========================
const findMultipleDoc=async()=> {
    try {
        const database = client.db("person");
        const users = database.collection("users");
        const query = {};
        // const options = {
        //     sort: { title: 1 },
        //     projection: { _id: 0, title: 1, imdb: 1 },
        // };
        const cursor = users.find(query);
        // const cursor = users.find(query, options);
         if ((await cursor.count()) === 0) {       
            console.log("No documents found!");
        } else {            
            const users = await cursor.toArray();
            // console.log("Output", users)
            
            users.forEach(user=>console.log(user))
        }
    } catch (error) {
        console.log(error)
    }
    finally {
        await client.close();
    }
}
findMultipleDoc()
