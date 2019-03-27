// creating a espress instance
var express = require('express');
// the calling this espress instance .Router to crete a router instance
var router = express.Router();

let landing = require("../controllers/landing");
console.log("landing");
/* GET home page. */
router.get('/', landing.get_landing);
router.post('/', landing.submit_lead);
// o primeiro index é a variável criada acima, e o segundo é o metodo que tem dentro do inde.js que esta na pasta controllers
module.exports = router;
