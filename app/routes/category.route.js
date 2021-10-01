module.exports = app => {
    const categorys = require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    
    router.get("/", categorys.findAll);
  
   
    router.get("/published", categorys.findAllPublished);
  
    
    router.get("/:id", categorys.findOne);
     
  
    app.use('/api/categorys', router);
  };