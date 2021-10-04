module.exports = app => {
    const products = require("../controllers/product.controllers");
  
    var router = require("express").Router();
  
    router.get("/", products.findAll);
  
    
    router.get("/category/:id", products.findByCategorys);
  
    
    router.get("/:id", products.findOne);
    
  
    app.use('/api/products', router);
  };