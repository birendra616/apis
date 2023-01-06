const express = require("express");
const { createClient, getAllClients } = require("../Controllers/ClientController");


const router = express.Router();

router.route("/client/new").post(createClient);
router.route("/client/all").get(getAllClients);




module.exports = router;