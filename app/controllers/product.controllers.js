const db = require("../models");
const Category = db.categorys;
const Product = db.products;

const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { name: { [Op.like]: `%${nombre}%` } } : null;

    Product.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            });
        });

};

exports.findAllPublished = (req, res) => {
    Product.findAll({ where: { nombre: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });

};