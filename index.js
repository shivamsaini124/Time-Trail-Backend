const express = require('express');
const mongoose = require("mongoose");

const User = require("./routes/user");
const Story = require("./routes/story");

const app = express();

require('dotenv').config();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app.use(express.json());

app.use("/api/v1/user",User);
app.use("/api/v1/story", Story);


const main = async () => {
    try{
        await mongoose.connect(DB_URL);
        app.listen(PORT);
        console.log(`Server is live at ${PORT}`);
    }
    catch(err){
        console.log(err);
    }
}


main();