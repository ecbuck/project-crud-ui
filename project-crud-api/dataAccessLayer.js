const mongoose = require("mongoose");
require("dotenv").config();
const Series = require("./model/Series");

mongoose.connect(process.env.ATLAS_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log("Successfully connected to database"))
  .catch(err => {
    console.log(err);
  });

const getAllSeries = (req, res) => {
    Series.find({}, (err, serie) => {
        if (err) {
            console.log(err);
            res.status(500).json(err)
        }
        res.status(200).json(serie);
    })
}

module.exports = {getAllSeries}

















// const MongoClient = require("mongodb").MongoClient;

// require("dotenv").config();
// const databaseName = "serieswatched";
// const mongoDbUrl = process.env.ATLAS_CONNECTION;
// const collectionName = "series";

// const settings = {
//   useUnifiedTopology: true
// };

// console.log("mongoDbUrl: " + mongoDbUrl);

// let database;

// const Connect = function() {
//   return new Promise((resolve, reject) =>
//     MongoClient.connect(mongoDbUrl, settings, function(err, client) {
//       if (err) {
//         reject(err);
//       } else {
//         console.log("SUCCESSFULLY CONNECTED TO DATABASE!");
//         database = client.db(databaseName);
        
//         resolve();
//       }
//     })
//   );
// };

// const Insert = function(series) {
//   return new Promise((resolve, reject) => {
//     const seriesCollection = database.collection(collectionName);

//     seriesCollection.insertOne(series, function(err, res) {
//       if (err) {
//         reject(err);
//       } else {
//         console.log("SUCCESSFULLY INSERTED A NEW DOCUMENT!");
//         resolve(res);
//       }
//     });
//   });
// };

// const Find = function(series) {
//   let seriesQuery = {};

//   if (series) {
//     seriesQuery = series;
//   }

//   return new Promise((resolve, reject) => {
//     const seriesCollection = database.collection(collectionName);
//     console.log(collectionName)
//     console.log(seriesCollection)
//     seriesCollection.find(seriesQuery).toArray(function(err, res) {
//       if (err) {
//         reject(err);
//       } 
//       else {
//         console.log("Found your series!");
//         resolve(res);
//         console.log(res)
//       }
//     });
//   });
// };

// const Update = function(series, newSeries) {
//   return new Promise((resolve, reject) => {
//     const seriesCollection = database.collection(collectionName);

//     seriesCollection.updateOne(series, newSeries, function(err, res) {
//       if (err) {
//         reject(err);
//       } else {
//         console.log("Updated successfully!");
//         resolve(res);
//       }
//     });
//   });
// };
// const Remove = function(series) {
//   return new Promise((resolve, reject) => {
//     const seriesCollection = database.collection(collectionName);

//     seriesCollection.deleteOne(series, function(err, res) {
//       if (err) {
//         reject(err);
//       } 
//       else {
//         console.log("Removed successfully!");
//         resolve(res);
//       }
//     });
//   });
// };

// module.exports = { Connect, Insert, Find, Update, Remove };