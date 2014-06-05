define(['jquery', 'backbone', 'templates/jst'], function($, Backbone, tmplts) {
    var SecondaryView = Backbone.View.extend({
        el: '#content',
        events: {},

        render: function() {
            this.$el.html(JST['src/js/templates/secondary.html']({}));
        },

        setBackgroundImage: function(url) {
            console.log(url);
            document.getElementById('secondary-top').style.backgroundImage = 'url('+ url +')';
        }
    });

    return new SecondaryView();
});