// Namespace our flowerApp
var app = app || {};

app.dropDownView = Backbone.View.extend({

	 el: $("#drop"),
   
		template: _.template($('#aboutApp').html()),
		events: {
        'change #format-select': 'onChangeSelectedItem',
   
    },
  onChangeSelectedItem:function(){


 

    Backbone.trigger($('#format-select').val());


  }, 


		render: function() {

			
			 this.$el.html(this.template({attrib: Object.keys(this.collection.models[0].attributes).splice(1)}));
			return this;
		}


});