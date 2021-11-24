const mongoose = require('mongoose');

const connectDB = async () => {
  const connectionParams = {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
      // useFindAndModify: true
    }

    try {
      await mongoose.connect(
          process.env.MONGOURI,
          connectionParams,
      );
      console.log('Database connected.');
    } catch (e) {
      console.log(`Database error: ${e}`);
    }
}

module.exports = connectDB;
