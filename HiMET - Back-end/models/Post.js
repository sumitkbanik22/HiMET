const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true,
    },
    postContent: {
        type: String,
        required: true,
        max:500
    },
    img: {
        type: String
    },
    postLikes: {
        type: Array,
        default: []
    },
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Post", PostSchema)