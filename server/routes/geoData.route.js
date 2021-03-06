const express = require('express'),
    mongoose = require('mongoose');

const togeojson = require ('togeojson');
const fs = require ('fs');
const jsdom = require('jsdom').jsdom;
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

mongoose.set('debug', false);

const GeoDataModel = mongoose.model('GeoData');
const ActivityModel = mongoose.model('Activity');

const Router = express.Router();

Router.post('/upload', upload.single('file'), (req, res) => {

    let file = req.file;
    if (file){
        
        console.log("Uploaded " + file.originalname + " to " + file.path);

        fs.readFile(file.path, (err, data) =>{
            let gpx = jsdom(data);
            let converted = togeojson.gpx(gpx);

            let geoData = new GeoDataModel(converted);
            geoData.save().then(geodata => {
                res.send(geodata);
            });

            // res.send(converted);
        })
    }
    else{
        console.log("No File");
        res.sendStatus(500);
    }
})

Router.get('/:id', (req,res) => {
    
    GeoDataModel.findOne({geoDataId:req.params.id}).then( data => {
        console.log(data);
        res.send(data['features'][0]['geometry']['coordinates']);
    })
})

module.exports = Router;