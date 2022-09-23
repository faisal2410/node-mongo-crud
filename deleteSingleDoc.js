const { client } = require("./dbConfig");

// Delete single Document
// =====================
const deleteSingleDoc=async()=>{
    try {
        const database = client.db("person");
        const users = database.collection("users");
        const query = { name: "Afnan" };
        const result = await users.deleteOne(query);
        console.log("Single document delete output====>",result)
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }
    } catch (error) {
        console.log(error)
    }finally {
        await client.close();
    }
}
deleteSingleDoc();
