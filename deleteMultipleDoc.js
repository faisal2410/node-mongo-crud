const { client } = require("./dbConfig");

// Delete multiple Documents
// ==========================

const deleteMultipleDocuments=async()=> {
    try {
        const database = client.db("hospital");
        const patients = database.collection("patients");
        const query = { title: { $regex: "Santa" } };
        const result = await patients.deleteMany(query);
        console.log("Multiple documents delete output====>",result)
        console.log("Deleted " + result.deletedCount + " documents");
    } finally {
        await client.close();
    }
}
deleteMultipleDocuments().catch(console.dir);
