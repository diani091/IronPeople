// *****************************************************************************
// ROUTES.JS - This file holds our app routes.
// 
// ******************************************************************************

// Dependencies
var db = require("../models");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;
var passport = require("passport");

// Comment?
module.exports = function (app) {

  //---------------------------------------------------------------------------
  //GET Routes
  //---------------------------------------------------------------------------
  //Main HTML route FALTA AGREGAR QUE NADA MAS MANDE 4
  app.get("/", function (req, res) {
    db.Products.findAll({ where: { pre_order: { [Op.gt]: 0 } }, include: [db.Sizes] }).then(function (typeCollections) {
      res.render("index", { clothes: typeCollections });
    });
  });

  //HTML route to show all collections
  app.get("/collections", function (req, res) {
    db.Products.findAll({ include: [db.Sizes] }).then(function (collections) {
      //console.log(collections[0].dataValues.Sizes[0].dataValues.size);
      res.render("index", { clothes: collections });
    });
  });


  //HTML route for types of collections (SALES, PREORDER, TYPE, AND ITEM NAME)
  app.get("/collections/:type", function (req, res) {

    //if Sales
    if (req.params.type == "sales") {
      db.Products.findAll({ where: { discount: { [Op.gt]: 0 } }, include: [db.Sizes] }).then(function (typeCollections) {
        res.render("index", { clothes: typeCollections });
      });
    }
    // if Preorder
    else if (req.params.type == "preorder") {
      db.Products.findAll({ where: { pre_order: { [Op.gt]: 0 } }, include: [db.Sizes] }).then(function (typeCollections) {
        res.render("index", { clothes: typeCollections });
      });
    }
    // if Type
    else if (req.params.type == "vestidos" || req.params.type == "tops" || req.params.type == "shorts-faldas" || req.params.type == "rompers-jumpsuits") {
      db.Products.findAll({ where: { type: req.params.type }, include: [db.Sizes] }).then(function (typeCollections) {
        res.render("index", { clothes: typeCollections });
      });
    }
    // if Product Name
    else {
      db.Products.findOne({ where: { item_name: req.params.type }, include: [db.Sizes] }).then(function (name) {
        res.render("id", { item: name });
      });
    }
   
  });


  //HTML route for Sales and types
  app.get("/collections/sales/:type", function (req, res) {
    db.Products.findAll({ where: { discount:  { [Op.gt]: 0 }, type: req.params.type }, include: [db.Sizes] }).then(function (salesTypeCollections) {
      res.render("index", { clothes: salesTypeCollections });
    });
  });


  //HTML route for Preorder and types
  app.get("/collections/preorder/:type", function (req, res) {
    db.Products.findAll({ where: { pre_order: { [Op.gt]: 0 }, type: req.params.type }, include: [db.Sizes] }).then(function (preorderTypeCollections) {
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

  app.get("/bag", function (req, res) {
    res.render("carrito");
  });

  //Passport routes
  app.post("/login", passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    //Just routing to this page in order to test the Passport function. Must ask team where to route user after login.
    res.redirect('/collections/');
  });





  //PENDIENTE HACER LOS DE POST Y UPDATE ya que eso es del admin y ahorita para que podamos jalar los collections para mostrar


};