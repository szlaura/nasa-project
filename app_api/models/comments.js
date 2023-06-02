const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: String,
    commentText: String,
    asteroidId: String
});

mongoose.model('Comments', commentSchema);