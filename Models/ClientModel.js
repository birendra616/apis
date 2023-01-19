const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    agentname: {
      type: String,
      required: [true, "Please enter agentname"],
    },
    closername: {
      type: String,
      required: [true, "Please enter closername"],
    },
    customername: {
      type: String,
      required: [true, "Please enter customername"],
    },
    address: {
      type: String,
      required: [true, "Please enter address"],
    },

    city: {
      type: String,
      required: [true, "Please enter city"],
    },

    state: {
      type: String,
      required: [true, "Please enter state"],
    },
    zipcode: {
      type: String,
      required: [true, "Please enter zipcode"],
    },
    phonenumber: {
      type: String,
      required: [true, "Please enter phonenumber"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    bank: {
      type: String,
      required: [true, "Please enter bank"],
    },
    routing: {
      type: String,
      required: [true, "Please enter routing"],
    },
    accountnumber: {
      type: String,
      required: [true, "Please enter accountnumber"],
    },
    ssn: {
      type: String,
      required: [true, "Please enter ssn"],
    },
    status: {
      type: String,
      required: [true, "Please enter status"],
    },
    comments: {
      type: String,
      required: [true, "Please enter comments"],
    },
    date: {
      type: date,
      default:date,
      
    },

  
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Client", clientSchema);
