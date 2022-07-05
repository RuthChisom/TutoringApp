// create a connection function for mongodb using mongoose
// start a local mongodb server connection

const mongoose = require('mongoose');
require('dotenv').config();
const {MONGO_URI} = process.env;

// create the connection function
// METHOD 1
// const connectDB = () => {
//     mongoose.connect(MONGO_URI, {
//         useNewUrlParse: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false
//     })
//     .then(() => {
//         console.log("MongoDB Connected...");

//         //seed data
//     })
//     .catch((err) => {
//         console.error(err.message);

//         // exit with failure
//         process.exit(1)
//     });
// }

// METHOD 2 - async mongoose connection
const connectDB = async () => {
    try{
        await mongoose.connect(MONGO_URI, {
            // useNewUrlParse: true,
            // useCreateIndex: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        });

        console.log("MongoDB connected...");

        // Seed data
    }catch(err){
        console.error(err.message);

        // exit with failure
        process.exit(1);
    }
}

module.exports = connectDB;