'use strict';

// pings webapp api for tf2atgxl.com/map-pick
// gets and forwards JSON to panel
 var express = require('express'),
     app = express();

module.exports = function(nodecg) {
    var request = require('request')
    app.get('/map-pick/update/:matchid', function(req, res) {
      var id = req.params.matchid
        request( {url: 'http://tf2atgxl.com/map_pick/' + id +'/api', json: true}, function(error, response, body){
            if(!error && response.statusCode == 200){
              res.status(200).json(body)
            }
        });
    });
    nodecg.mount(app)
};
