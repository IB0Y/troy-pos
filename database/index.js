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
          'mongodb+srv://admin:9wfvJN2jgzj33zCG@cluster0.jgakz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
          connectionParams,
      );
      console.log('Database connected.');
    } catch (e) {
      console.log(`Database error: ${e}`);
    }
}

module.exports = connectDB;
