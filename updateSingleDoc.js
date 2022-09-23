const { client } = require("./dbConfig");

// Update
// ============
const updateDoc = async () => {
    try {
        const database = client.db("person");
        const users = database.collection("users");
        const filter = { name: "Afnan" };
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                hobbies: ["Writing","Coding"]
            },
        };
        const result = await users.updateOne(filter, updateDoc, options);
        console.log("Update Document output=========>", result)       
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );

    } catch (error) {
        console.log(error)
    }    
    finally {
        await client.close();


    }
}
updateDoc().catch(console.dir);
