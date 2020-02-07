const MongoClient = require("mongodb").MongoClient;
// const Series = require("./");


require("dotenv").config();
const databaseName = "serieswatched";
const mongoDbUrl = process.env.ATLAS_CONNECTION;
const Series = "Series";

const settings = {
  // useNewURLParser: true,
  useUnifiedTopology: true
};

console.log("mongoDbUrl: " + mongoDbUrl);

let database;

 const Connect = function() {
  return new Promise((resolve, reject) =>
    MongoClient.connect(mongoDbUrl, settings, function(err, client) {
      if (err) {
        reject(err);
      } else {
        console.log("SUCCESSFULLY CONNECTED TO DATABASE!");
        database = client.db(databaseName);
        resolve();
      }

    })
  );
  
};

const Find = async function(){
  MongoClient.connect(mongoDbUrl, settings, async function(err, client) {
    if (err) {
      console.log("This is the error",err)
      // throw(err);
    } else {
      console.log("SUCCESSFULLY CONNECTED TO DATABASE!");
      database = client.db(databaseName);
      resolve();
    }
    console.log("TO DATABASE!");

    let result =  await client.db(databaseName).collection("Series").find({});
  return result
  })
  
}

module.exports = {Connect, Find}
        