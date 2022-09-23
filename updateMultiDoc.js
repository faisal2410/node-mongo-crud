const { client } = require("./dbConfig");

// Update Multiple Documents
// ========================
const updateMultipleDoc=async()=> {
    try {
        const database = client.db("hospital");
        const patients = database.collection("patients");
        const filter = { rated: "G" };
        const updateDoc = {
            $set: {
                random_review: `After viewing I am ${100 * Math.random()
                    }% more satisfied with life.`,
            },
        };
        const result = await patients.updateMany(filter, updateDoc);
        console.log("Multiple Documents updated output",result)
        console.log(`Updated ${result.modifiedCount} documents`);
    } finally {
        await client.close();
    }
}
updateMultipleDoc().catch(console.dir);
