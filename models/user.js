const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportlocalmongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    // Field for upload profile pic feature
    profilePicture: {
        purl: String, // Store the file path or URL here
        pfilename: String, 
    },
    // Field for checking the admin
    isAdmin: { // Add this field
        type: Boolean,
        default: false // Default is false for regular users
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportlocalmongoose);  
module.exports = mongoose.model("User", userSchema);
