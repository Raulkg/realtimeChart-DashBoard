// Namespace our flowerApp
var app = app || {};

app.chartView = Backbone.View.extend({


  
  initialize : function(options){
    Backbone.on('orders', this.renderOrder, this);
        Backbone.on('pageViews', this.renderPv, this);
        Backbone.on('clickThruRate', this.renderCTR, this);
        Backbone.on('sales', this.renderSales, this);
  },
renderOrder: function(){

    var chart = new google.visualization.LineChart(document.getElementById('lc'));
    this.view.setColumns([0,4]);
    this.options['title'] = 'Order';
         chart.draw(this.view, this.options); 

},

renderPv: function(){

    var chart = new google.visualization.LineChart(document.getElementById('lc'));
    this.view.setColumns([0,3]);
     this.options['title'] = 'Page Views';
         chart.draw(this.view, this.options); 

},
renderSales: function(){

    var chart = new google.visualization.LineChart(document.getElementById('lc'));
    this.view.setColumns([0,2]);
     this.options['title'] = 'Sales';
         chart.draw(this.view, this.options); 

},
renderCTR: function(){

    var chart = new google.visualization.LineChart(document.getElementById('lc'));
    this.view.setColumns([0,1]);
     this.options['title'] = 'Click Thriu Rate';
         chart.draw(this.view, this.options); 

},

 template: _.template( $("#lineChart").html() ),

    render: function() {
      google.charts.load('current', {'packages':['corechart']});

      google.charts.setOnLoadCallback( _.bind(this.drawVisualization, this));
      
      return this;
    },

  drawVisualization: function()   {
      this.data = new google.visualization.DataTable();
      this.data.addColumn('date', 'Day');
      this.data.addColumn('number', 'Click thru rate');
      this.data.addColumn('number', 'Sales');
      this.data.addColumn('number', 'pageViews');
      this.data.addColumn('number', 'Orders');
      var crate =[];
      this.collection.each(function(model) {
            crate.push([new Date(model.attributes.date) ,model.attributes.clickThruRate,model.attributes.sales,model.attributes.pageViews,model.attributes.orders]);

      });


  this.data.addRows(crate);

this.view = new google.visualization.DataView(this.data);
this.view.setColumns([0,2]);



                 
                

  
      //In draw visualization
      this.options = {
    
           legend: {position:'top',alignment:'center'},  title:'click Thru Rate',
           width:1200,
           height:600,
              'chartArea': {'width': '80%', 'height': '80%'},

      vAxis: {

        viewWindowMode: 'explicit',
        viewWindow: {
          //max: 8000,
          min: 0,
        },

      },
 pointSize: 5,
            hAxis:{    viewWindowMode :'max',gridlines: { color: 'transparent',count: crate.length }, 
            showTextEvery: 1,
            slantedText: true,format:'MM/dd/yyyy'}

 
     
      };




      $('#loc').html(this.template());

   

       var chart = new google.visualization.LineChart(document.getElementById('lc'));
         chart.draw(this.view, this.options); 

    },


  });


