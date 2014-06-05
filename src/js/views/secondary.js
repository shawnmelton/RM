define(['jquery', 'backbone', 'templates/jst'], function($, Backbone, tmplts) {
    var SecondaryView = Backbone.View.extend({
        el: '#content',
        events: {},

        render: function() {
            this.$el.html(JST['src/js/templates/secondary.html']({}));
        }
    });

    return new SecondaryView();
});