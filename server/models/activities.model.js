const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;

var activitySchema = new Schema({
    user: {
        type: Number,
        ref: 'User'
    },
    datetime: Date,
    description: String,
    activity_type: String,
    map: {
        type: Schema.Types.ObjectId,
        ref : 'GeoData'
    }
});

activitySchema.plugin(autoIncrement, { inc_field: 'activitySchemaId' });

var Activity = mongoose.model('Activity', activitySchema);

module.export = Activity;