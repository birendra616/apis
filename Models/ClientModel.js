const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
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

  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{
    timestamps:true,
}
);

module.exports = mongoose.model("Client", clientSchema);
