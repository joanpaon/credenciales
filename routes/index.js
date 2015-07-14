// Importa el módulo express
var express = require('express');

// Factoría de enrutadores
var router = express.Router();

// --- GET - / - index.ejs

// Patrón respuesta
var patron = "/";

// Middleware respuesta
var mw = function (req, res, next) {
  // Página vista
  var _vista = "index";

  // Parámetros vista
  var _param = {
    title: 'Credenciales';
  };

  // Renderizar la vista
  res.render(_vista, _param);
};

// --- Instalación MW

router.get(patron, mw);   // Página principal

// Exporta el enrutador
module.exports = router;