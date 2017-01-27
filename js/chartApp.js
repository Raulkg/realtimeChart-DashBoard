
var mychartCollection = new app.chartCollection();

mychartCollection.fetch().done(function(){

var ddView = new app.dropDownView({ collection: mychartCollection});

$("#aboutApp").html(ddView.render());


var mychartView = new app.chartView({ collection: mychartCollection});

$("#loc").html(mychartView.render().el);

var chartRouter = new app.Router();

Backbone.history.start();



});




