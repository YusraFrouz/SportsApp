const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;

const friendListSchema = new Schema({
   user: {
        type: Number,
        ref: 'User'
    }
});

friendListSchema.plugin(autoIncrement, {inc_field: 'friendListId'});

var FriendList = mongoose.model('FriendList', friendListSchema);

module.exports = FriendList;