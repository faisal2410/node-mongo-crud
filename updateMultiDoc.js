const { client } = require("./dbConfig");

// Update Multiple Documents
// ========================
const updateMultipleDoc=async()=> {
    try {
        const database = client.db("person");
        const users = database.collection("users");
        const filter = {};
        const updateDoc = {
            $set: {
                country: "Bangladesh"
            },
        };
        const result = await users.updateMany(filter, updateDoc);
        console.log("Multiple Documents updated output",result)
        console.log(`Updated ${result.modifiedCount} documents`);
    } catch (error) {
        console.log(error)
    }    
    finally {
        await client.close();
    }
}
updateMultipleDoc()
