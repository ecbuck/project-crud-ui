const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const DAL = require("./dataAccessLayer");
const Connect = require("./dataAccessLayer");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const ObjectId = require("mongodb").ObjectId;

app.use(bodyParser.json());
app.use(cors())
DAL.Connect();
// Connect()
//  const mongodbUsername = process.env.MONGODB_USERNAME;
// console.log('mongodbUsername: '+ mongodbUsername);

// const products = require("./series.json.js");
//  stateless now

app.get("/api/series", async function(req, res) {
  // const result = Object.values(products);

  const result = await DAL.Find(); //needing a find function on your DAL

  res.send(result);
});
//get one product by id endpoint
app.get("/api/series/:id", async function(req, res) {
  const id = req.params.id;

  const product = {
    _id: ObjectId(id)
  };

  const result = await DAL.Find(product);

   const result = await DAL.Find();

  if (result) {
    res.send(result);
  } else {
    res.send("No series with ID: " + id + " found!");
  }
});

app.put("/api/series/:id", cors(), async function(req, res) {
  const id = req.params.id;
  const product = {
    _id: ObjectId(id)
  };
  const newSeries = req.body;

  const updatedSeries = {
    $set: newSeries
  };

  const result = await DAL.Update(product, updatedSeries);

  res.send(result);
});

app.delete("/api/series/:id", cors(), async function(req, res) {
  const id = req.params.id;
  const series = {
    _id: ObjectId(id)
  };

  const result = await DAL.Remove(series);
  res.send();
});

app.post("/api/series", cors(), async function(req, res) {
  const series = req.body;

  if (series.name && series.author > 0) {
    const result = await DAL.Insert(series);

    res.send("Success");
  } else {
    res.send("Fail");
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
