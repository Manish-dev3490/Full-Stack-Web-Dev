// mongodb+srv://kmanish87064_db_user:<db_password>@coding-adda.neh8o7x.mongodb.net/

const { MongoClient } = require('mongodb');

async function runGetStarted() {
    // Replace the uri string with your connection string
    const uri = 'mongodb+srv://kmanish87064_db_user:CodingAdda123@coding-adda.neh8o7x.mongodb.net/';
    const client = new MongoClient(uri);
    const dbname='LearnDB';


    await client.connect();
    const db=client.db(dbname);
    db.collection('user');
    console.log("we are connected with db");

}
runGetStarted().then(() => console.log("our asyync task is done")).catch(error => console.log(error))
