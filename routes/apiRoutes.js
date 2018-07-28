var db = require("../models");

module.exports = function (app) {


  //HTML route to show all collections
  app.get("/collections", function (req, res) {
    db.Products.findAll({}).then(function (collections) {
      res.json(collections);
    });
  });

  //PENDIENTE HACER LOS DE POST Y UPDATE ya que eso es del admin y ahorita para que podamos jalar los collections para mostrar


  //HTML route for types of product id
  app.get("/collections/:id", function (req, res) {
    db.Products.findAll({ where: { item_id: req.params.type } }).then(function (typecollections) {
      res.json(typecollections);
    });
  });

  //HTML route for types of collections
  app.get("/collections/:type", function (req, res) {
    db.Products.findAll({ where: { type: req.params.type } }).then(function (typecollections) {
      res.json(typecollections);
    });
  });

  //HTML route for Sales
  app.get("/collections/Sales", function (req, res) {
    db.Products.findAll({ where: { discount: 1 } }).then(function (typecollections) {
      res.json(typecollections);
    });
  });

  //HTML route for Sales and types
  app.get("/collections/Sales/:type", function (req, res) {
    db.Products.findAll({ where: { discount: 1, type: req.params.type } }).then(function (typecollections) {
      res.json(typecollections);
    });
  });

  //HTML route for Preorder
  app.get("/collections/Preorder", function (req, res) {
    db.Products.findAll({ where: { pre_order: 1 } }).then(function (typecollections) {
      res.json(typecollections);
    });
  });


  //HTML route for Preorder and types
  app.get("/collections/Preorder/:type", function (req, res) {
    db.Products.findAll({ where: { pre_order: 1, type: req.params.type } }).then(function (typecollections) {
      res.json(typecollections);
    });
  });



};
