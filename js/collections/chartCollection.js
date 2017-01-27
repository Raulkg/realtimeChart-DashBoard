// Namespace our flowerApp
var app = app || {};


app.chartCollection = Backbone.Collection.extend({

 
  model: app.chartModel,
  url: 'data/report.json',
      parse: function (response) {


       
        return response.records
    }


});





