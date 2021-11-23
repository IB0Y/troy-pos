const mongoose = require('mongoose');

const connectDB = async () => {
  const connectionParams = {
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      dbName: 'tory'
    }

    await mongoose.connect(
        process.env.MONGOURI,
        connectionParams,
    );
}

module.exports = connectDB;
