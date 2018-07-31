var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Products.findAll({}).then(function(nudestudio) {
      res.render("index", {
        Products: nudestudio
      });
    });
  });


  app.get("/cart/add-product/:id", function(req, res) {
    db.Cart.create({}).then(function(nudestudio) {
      res.render("index", {
        Products: nudestudio
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/shop", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(nudestudio) {
      res.render("shop", {
        example: nudestudio
      });
    });
  });

  app.get("/shop/vestidos", function(req, res) {
    db.Products.findAll({ where: { type: "vestidos" } }).then(function(nudestudio) {
      res.render("/shop/vestidos", {
        products: nudestudio
      });
    });
  });

  app.get("/shop/tops", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(nudestudio) {
      res.render("/shop/tops", {
        example: nudestudio
      });
    });
  });

  app.get("/shop/shorts*faldas", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(nudestudio) {
      res.render("/shop/shorts*faldas", {
        example: nudestudio
      });
    });
  });

  app.get("/shop/rompers*jumpsuits", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(nudestudio) {
      res.render("/shop/rompers*jumpsuits", {
        example: nudestudio
      });
    });
  });
  
  app.get("/sale", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(nudestudio) {
      res.render("/sale", {
        example: nudestudio
      });
    });
  });

  app.get("/nuevo", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(nudestudio) {
      res.render("/nuevo", {
        example: nudestudio
      });
    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
