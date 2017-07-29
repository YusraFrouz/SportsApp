const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;

var commentSchema = new Schema({
    activity: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    },
    message: String,
    datetime: datetime,
    status: String
});

commentSchema.plugin(autoIncrement, { inc_field: 'commentSchemaId' });

var Comments = mongoose.model('Comments', commentSchema);

module.export = Comments;