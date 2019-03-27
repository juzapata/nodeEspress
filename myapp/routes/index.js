// creating a espress instance
var express = require('express');
// the calling this espress instance .Router to crete a router instance
var router = express.Router();

let landing = require("../controllers/landing");
/* GET home page. */
router.get('/', landing.get_landing);
// o primeiro index é a variável criada acima, e o segundo é o metodo que tem dentro do inde.js que esta na pasta controllers
module.exports = router;
