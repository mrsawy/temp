const mongoose = require("mongoose");

const atlasConnectionString = `mongodb+srv://mrsawy:Dfg456h7j8!@cluster0.f2asv2v.mongodb.net/food-ordering?retryWrites=true&w=majority`;
// const localConnectionString =  'mongodb://localhost:27017/food-ordering'
mongoose
  .connect(atlasConnectionString, { useNewUrlParser: true })
  .then(() => {
    console.log(`connection done to mongo db`);
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
