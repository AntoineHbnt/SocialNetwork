const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://"+ process.env.DB_USER_PASS +"@cluster0.8dijc.mongodb.net/social-network"
  )
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log("Failed to connect to mongodb", err));
