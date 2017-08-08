const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const GeojsonfeatureSchema = new Schema({
    type: { type: String },
    features: [{
        type: { type: String },
        geometry: {
            type: { type: String },
            coordinates: [[
                {
                    type: Number,
                    'index': '2dsphere',
                    'required': true
                }]]
        },
        properties: {
            name: String,
            time: Date,
            coordTimes: [{ type: Date }]
        }
    }],
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    },
});

var GeoData = mongoose.model('GeoData', GeojsonfeatureSchema);
module.exports = GeoData;