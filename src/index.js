const express = require("express");
const cors = require("cors");
const db = require("./db/database.js"); // Importamos la base de datos
const app = express();
const port = process.env.PORT || 3000; // Tomará el puerto o localhost según sea el caso
const pkmn = require("./routes/pkmns.js"); // Importamos el módulo Router de express

(async () => {
  try {
    await db.authenticate();
    db.sync(); // Sincroniza la base de datos con el modelo creado
    console.log("Conexión exitosa a la base de datos pkmn.");
  } catch (error) {
    console.error("Error conectandose a la base de datos pkmn", error);
  }
})();

//middleware
app.use(express.json()); // Middleware para que express pueda interpretar JSON, RECIBE INFORMACION
app.use(cors()); // Middleware para que express pueda interpretar CORS, HABILITA EL ACCESO A LA API

app.use("/pkmns", pkmn); // Da una URL base para todas las rutas que se definan en pkmn

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
