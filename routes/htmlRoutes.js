var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/shop", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("shop", {
        example: dbExample
      });
    });
  });

  app.get("/shop/vestidos", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("/shop/vestidos", {
        example: dbExample
      });
    });
  });

  app.get("/shop/tops", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("/shop/tops", {
        example: dbExample
      });
    });
  });

  app.get("/shop/shorts*faldas", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("/shop/shorts*faldas", {
        example: dbExample
      });
    });
  });

  app.get("/shop/rompers*jumpsuits", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("/shop/rompers*jumpsuits", {
        example: dbExample
      });
    });
  });
  
  app.get("/sale", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("/sale", {
        example: dbExample
      });
    });
  });

  app.get("/nuevo", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("/nuevo", {
        example: dbExample
      });
    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
