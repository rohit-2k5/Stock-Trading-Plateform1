const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const {Schema} = require("mongoose");


const UsersSchema = new Schema({
    email: {
        type: String,
        required: [true, "Your email id is required"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Your username is required"]
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

UsersSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", UsersSchema);