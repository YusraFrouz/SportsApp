const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence');
const Schema = mongoose.Schema;

var activitySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        name: String,
        ref : 'User'
    },
    activity: [{
        type: Schema.Types.ObjectId,
        datetime: datetime,
        status : String

    }]
});

activitySchema.plugin(AutoIncrement, {inc_field: 'activitySchemaId'});

var Activity = mongoose.model('Activity', activitySchema);

module.export= Activity;