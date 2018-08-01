var db = require("../models");

module.exports = function (app) {

  //---------------------------------------------------------------------------
  //GET Routes
  //---------------------------------------------------------------------------


  //Main HTML route
  app.get("/", function (req, res) {
    db.Products.findAll({}).then(function (collections) {
      res.render("homepage", { clothes: collections });
    });
  });


  //HTML route to show all collections
  app.get("/collections", function (req, res) {
    db.Products.findAll({}).then(function (collections) {
      res.render("index", { clothes: collections });
    });
  });


  //HTML route for types of collections
  app.get("/collections/:type", function (req, res) {
    db.Products.findAll({ where: { type: req.params.type } }).then(function (typecollections) {
      res.render("index", { clothes: typecollections });
    });
  });

  //HTML route for Sales
  app.get("/collections/sales", function (req, res) {
    db.Products.findAll({ where: { discount: 1 } }).then(function (salesCollections) {
      console.log(salesCollections);
      res.render("index", { clothes: salesCollections });
    });
  });

  //HTML route for Sales and types
  app.get("/collections/sales/:type", function (req, res) {
    db.Products.findAll({ where: { discount: 1, type: req.params.type } }).then(function (salesTypeCollections) {
      res.render("index", { clothes: salesTypeCollections });
    });
  });

  //HTML route for Preorder
  app.get("/collections/preorder", function (req, res) {
    db.Products.findAll({ where: { pre_order: 1 } }).then(function (preorderCollections) {
      res.render("index", { clothes: preorderCollections });
    });
  });


  //HTML route for Preorder and types
  app.get("/collections/preorder/:type", function (req, res) {
    db.Products.findAll({ where: { pre_order: 1, type: req.params.type } }).then(function (preorderTypeCollections) {
      res.render("index", { clothes: preorderTypeCollections });
    });
  });


  //HTML route for types of product id
  app.get("/collections/:name", function (req, res) {
    db.Products.findAll({ where: { item_name: req.params.name } }).then(function (name) {
      res.render("id", { item: name });
    });
  });


  //HTML route for admin to view sales
  app.get("/admin/ventas", function (req, res) {
    db.Ventas.findAll({}).then(function (ventas) {
      res.render("ventas", { clothes: ventas });
    });
  });


  //HTML route for admin to view stock
  app.get("/admin/inventario", function (req, res) {
    db.Products.findAll({}).then(function (inventario) {
      res.render("inventario", { clothes: inventario });
    });
  });


  //HTML route for admin to view stock
  app.get("/login", function (req, res) {
      res.render("login");
  });


 //PENDIENTE HACER LOS DE POST Y UPDATE ya que eso es del admin y ahorita para que podamos jalar los collections para mostrar


};