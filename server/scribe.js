
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cali');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var predictSchema = new mongoose.Schema({
    tag: Number,
    claim: String,
    confidence: Number,
    date: Date,
    eval: mongoose.Schema.Types.Mixed
});
var Prediction = mongoose.model('Predict', predictSchema);

var scribe = {
    record: function(req, res){
        //console.log(req.body);
        var inst = new Prediction(req.body);
        inst.save(function (err, inst) {
            if (err) return console.error(err);
            console.log(inst.claim);
        });;
    }
};

module.exports = scribe;