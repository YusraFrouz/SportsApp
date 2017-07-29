const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;

var activitySchema = new Schema({
    user: {
        type: Number,
        ref: 'User'
    },
    datetime: Date,
    status: String,
    activity_type: String
});

activitySchema.plugin(autoIncrement, { inc_field: 'activitySchemaId' });

var Activity = mongoose.model('Activity', activitySchema);

module.export = Activity;