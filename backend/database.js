const mongoose = require("mongoose");
export const connectDB = () => {
    const dbString =  "mongodb+srv://admin:admin@hassanraza-szqrm.mongodb.net/test";
    mongoose.connect( 
        dbString
        , {
            useNewUrlParser: true, useFindAndModify: false, server: {
                // sets how many times to try reconnecting
                reconnectTries: Number.MAX_VALUE,
                // sets the delay between every retry (milliseconds)
                reconnectInterval: 1000,
            },
        });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    return db.once("open", () => {
        console.log("we are conncted");
        return mongoose;
    });
};