var db = require("../models");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;

module.exports = function (app) {

  //---------------------------------------------------------------------------
  //GET Routes
  //---------------------------------------------------------------------------


  //Main HTML route FALTA AGREGAR QUE NADA MAS MANDE 4
  app.get("/", function (req, res) {
    db.Products.findAll({ limit: 4 }).then(function (collections) {
      res.render("index", { clothes: collections });
    });
  });


  //HTML route to show all collections
  app.get("/collections", function (req, res) {
    db.Products.findAll({}).then(function (collections) {
      res.render("index", { clothes: collections });
    });
  });


  //HTML route for types of collections (SALES, PREORDER, TYPE, AND ITEM NAME)
  app.get("/collections/:type", function (req, res) {

    //if Sales
    if (req.params.type == "sales") {
      db.Products.findAll({ where: { discount: { [Op.gt]: 0 } } }).then(function (typeCollections) {
        res.render("index", { clothes: typeCollections });
      });
    }
    // if Preorder
    else if (req.params.type == "preorder") {
      db.Products.findAll({ where: { pre_order: { [Op.gt]: 0 } } }).then(function (typeCollections) {
        res.render("index", { clothes: typeCollections });
      });
    }
    // if Type
    else if (req.params.type == "vestidos" || req.params.type == "tops" || req.params.type == "shorts-faldas" || req.params.type == "rompers-jumpsuits") {
      db.Products.findAll({ where: { type: req.params.type } }).then(function (typeCollections) {
        res.render("index", { clothes: typeCollections });
      });
    }
    // if Product Name
    else {
      db.Products.findOne({ where: { item_name: req.params.type } }).then(function (name) {
        res.render("id", { item: name });
      });
    }
   
  });


  //HTML route for Sales and types
  app.get("/collections/sales/:type", function (req, res) {
    db.Products.findAll({ where: { discount:  { [Op.gt]: 0 }, type: req.params.type } }).then(function (salesTypeCollections) {
      res.render("index", { clothes: salesTypeCollections });
    });
  });


  //HTML route for Preorder and types
  app.get("/collections/preorder/:type", function (req, res) {
    db.Products.findAll({ where: { pre_order: { [Op.gt]: 0 }, type: req.params.type } }).then(function (preorderTypeCollections) {
      res.render("index", { clothes: preorderTypeCollections });
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