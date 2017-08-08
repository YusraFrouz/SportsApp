const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      AutoIncrement = require('mongoose-sequence');

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
    }]
});

GeojsonfeatureSchema.plugin(AutoIncrement, { inc_field: 'geoDataId' });

var GeoData = mongoose.model('GeoData', GeojsonfeatureSchema);
module.exports = GeoData;