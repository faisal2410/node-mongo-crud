const { client } = require("./dbConfig");

// Delete single Document
// =====================
const deleteSingleDoc=async()=>{
    try {
        const database = client.db("hospital");
        const patients = database.collection("patients");
        const query = { title: "Annie Hall" };
        const result = await patients.deleteOne(query);
        console.log("Single document delete output====>",result)
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }
    } finally {
        await client.close();
    }
}
deleteSingleDoc().catch(console.dir);
