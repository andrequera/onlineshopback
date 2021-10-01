"use strict";

module.exports = (app) => {
    require("./product.route")(app)
    require("./category.route")(app)

}