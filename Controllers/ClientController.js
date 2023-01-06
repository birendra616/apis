const Client = require("../models/ClientModel");



// Create Client
exports.createClient = async (req, res, next) => {
  const client = await Client.create(req.body);

  res.status(201).json({
    success: true,
    client,
  });
};

// Get All Client
exports.getAllClients = async (req, res, next) => {
    const client = await Client.find();
  
    res.status(200).json({
      success: true,
      client,
      
    });
  };