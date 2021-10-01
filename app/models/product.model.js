module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      name: {
        type: Sequelize.STRING
      },
      url_image: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      discount: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.INTEGER
      }
      
    },{
        freezeTableName: true
    });
  
    return Product;
  };
