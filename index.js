const express = require("express");
const cors = require("cors");

const app = express();

//dando los permisos a vercel para front
var allowedDomains = [
  "http://localhost:3000",
  "https://onlineshopfront.vercel.app", 
];
app.use(
  cors({
    origin: function (origin, callback) {
      // bypass the requests with no origin (like curl requests, mobile apps, etc )
      if (!origin) return callback(null, true);

      if (allowedDomains.indexOf(origin) === -1) {
        var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
//db.sequelize.sync(); para el error de la s en sql.

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const PORT = process.env.PORT || 8080;

require("./app/routes/index")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

