const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;

var commentSchema = new Schema({
    user: {
        type: Number,
        ref: 'User'
    },
    activity: {
        type: Number,
        ref: 'Activity'
    },
    message: String,
    datetime: Date,
    status: String
});

commentSchema.plugin(autoIncrement, { inc_field: 'commentSchemaId' });

var Comments = mongoose.model('Comments', commentSchema);

module.export = Comments;