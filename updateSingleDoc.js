const { client } = require("./dbConfig");

// Update
// ============
const updateDoc = async () => {
    try {
        const database = client.db("hospital");
        const patients = database.collection("patients");
        const filter = { title: "Random Harvest" };
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                plot: `A harvest of random numbers, such as: ${Math.random()}`
            },
        };
        const result = await patients.updateOne(filter, updateDoc, options);
        console.log("Update Document output=========>", result)       
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );

    } finally {
        await client.close();


    }
}
updateDoc().catch(console.dir);
