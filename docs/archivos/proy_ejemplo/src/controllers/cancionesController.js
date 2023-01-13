const fs = require("fs");
const path = require("path");

const controlador = {
    
  show: (req, res) => {
    const archivoCanciones = JSON.parse(
      fs.readFileSync("./data/canciones.json")
    );
    res.json(archivoCanciones);
  },

  create: (req, res) => {
    const archivoCanciones = JSON.parse(
      fs.readFileSync("./data/canciones.json")
    );
    const nuevaCancion = {
      id: req.body.id,
      titulo: req.body.titulo,
      artista: req.body.artista,
      tono: req.body.tono,
    };
    archivoCanciones.push(nuevaCancion);
    fs.writeFileSync(
      "./data/canciones.json",
      JSON.stringify(archivoCanciones, null, " ")
    );
  },
};

module.exports = controlador;
