define(['jquery', 'backbone', 'templates/jst'], function($, Backbone, tmplts) {
    var SecondaryView = Backbone.View.extend({
        el: '#content',
        events: {},

        render: function() {
            this.$el.html(JST['src/js/templates/secondary.html']({}));
        },

        setBackgroundImage: function(url) {
            document.getElementById('secondary-top').style.backgroundImage = 'url('+ url +')';
        },

        setContent: function(str) {
            document.getElementById('secondary-content').innerHTML = str;
        },

        setHeading: function(str) {
            if(typeof str === 'string' && str.length > 0) {
                document.getElementsByTagName('h1')[0].innerHTML = str;
            }
        },

        setSubHeading: function(str) {
            if(typeof str === 'string' && str.length > 0) {
                document.getElementsByTagName('h2')[0].innerHTML = str;
            }
        }
    });

    return new SecondaryView();
});