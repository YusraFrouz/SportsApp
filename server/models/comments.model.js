const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;

var commentSchema = new Schema({
    activity: {
        type: Schema.Types.ObjectId,
        user: {
        type: Schema.Types.ObjectId,
        name: String,
        ref : 'User'
        },
        commentList: [{
        message: String,
        datetime: datetime,
        status : String
        }]
    },    
});

commentSchema.plugin(AutoIncrement, {inc_field: 'commentSchemaId'});

var Comments = mongoose.model('Comments', commentSchema);

module.export= Comments;