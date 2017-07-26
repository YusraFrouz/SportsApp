var mongoose = require('mongoose');
var autoIncrement = require('mongoose-sequence');
var Schema = mongoose.Schema;

var friendListSchema = new Schema({
    user: {
        userId: Schema.Types.ObjectId,
        name: String,
        ref : 'User'
    },
    friends: [{
        friendId: Schema.Types.ObjectId,
        name: String,
        ref : 'User'
    }]
});

friendListSchema.plugin(AutoIncrement, {inc_field: 'friendListId'});

var FriendList = mongoose.model('Doctor', doctorSchema);

module.exports = FriendList;