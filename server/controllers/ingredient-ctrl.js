const { Ingredient } = require('../models/ingredient-model')
const dbo = require("../db/index");


createIngredient = async (req, res) => {
  let myobj = {
    name: req.body.name,
    quantity: req.body.quantity,
    measure: req.body.measure,
    consomable: req.body.consomable
  };
  if (!myobj){
    return res.status(400).json({
      sucess: false,
      error: "You must provide an ingredient"
    })
  }

  const ingredient = new Ingredient(myobj)
  let db_connect = dbo.getDb("LBA");
  db_connect
    .collection("records")
    .insertOne(ingredient, function (err, resp){
      if (err) throw err;
      res.status(200).json({
        success: true,
        id: ingredient._id,
        message: "Ingredient created !"
      })
    })
}

//Update Ingredient

updateIngredient = async (req, res) => {
  let myobj = {
    name: req.body.name,
    quantity: req.body.quantity,
    measure: req.body.measure,
    consomable: req.body.consomable
  };
  if (!myobj) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    })
  }
  let db_connect = dbo.getDb("LBA");
  let myquery = { id: req.body.id };
  let newvalues = {
    $set: {
      name: req.body.name,
      quantity: req.body.quantity,
      measure: req.body.measure,
      consomable: req.body.consomable
    }
  }
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, resp) {
      if (err) throw err;
      res.status(200).json({
        message: "Ingredient created !"
      })
    })
}


deleteIngredient = async (req, res) => {
  let db_connect = dbo.getDb("LBA")
  var myquery = { id: req.body.id };
  db_connect
    .collection("records")
    .deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      res.status(200).json({
        message: "Ingredient deleted !"
      })
    });
}


getIngredientById = async (req, res) => {
  let db_connect = dbo.getDb("LBA")
  db_connect
    .collection("records")
    .findOne({ _id: req.params.id }, (err, ingredient) => {
      if (err) throw err;
      res.json(ingredient);
  })
}

getIngredients = async (req, res) => {
  let db_connect = dbo.getDb("LBA");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
}

module.exports = {
  createIngredient,
  updateIngredient,
  deleteIngredient,
  getIngredients,
  getIngredientById,
}
