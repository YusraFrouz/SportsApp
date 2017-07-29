const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;

const friendListSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        name: String,
        ref : 'User'
    },
    friends: [{
        type: Schema.Types.ObjectId,
        name: String,
        ref : 'User'
    }]
});

friendListSchema.plugin(AutoIncrement, {inc_field: 'friendListId'});

var FriendList = mongoose.model('FriendList', friendListSchema);

module.exports = FriendList;