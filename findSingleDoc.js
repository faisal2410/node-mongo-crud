const { client } = require("./dbConfig");

// Find a Document
// ====================
const findSingleDoc=async()=> {
    try {
        const database = client.db("person");
        const users = database.collection("users");
        const query = { name: "Max" };
        // const options = {       
        //     projection: { _id: 1, name: 1,hobbies:1  }
        // };
        const user = await users.findOne(query);
        // const user = await users.findOne(query, options);
        // console.log("Inside user data=======>",user.hobbies[0].frequency)
       
        console.log("Output of find a doc=====>",user);
    } catch (error) {
        console.log(error);

    }finally {
        await client.close();
    }
}
findSingleDoc()
