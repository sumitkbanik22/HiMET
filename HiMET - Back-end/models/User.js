const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    profilePicture: {
        type: String,
        default: "",
    },
    coverPicture: {
        type: String,
        default: "",
    },
    followers: {
        type: Array,
        default: [],
    },
    followings: {
        type: Array,
        default: [],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    bio: {
        type: String,
        max: 50
    },
    state: {
        type: String,
        max:50
    },
    city: {
        type: String,
        max:50
    },
    locality: {
        type: String,
        max:50
    },
    relationshipStatus: {
        type: String,
        enum: [1, 2, 3]
    },
},
{
    timestamps: true
}
);

module.exports = mongoose.model("user", UserSchema)