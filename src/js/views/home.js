define(['jquery', 'backbone', 'templates/jst'], function($, Backbone, tmplts) {
    var HomeView = Backbone.View.extend({
        el: '#content',

        render: function() {
            this.$el.append(JST['src/js/templates/home.html']({}));
        }
    });

    return new HomeView();
});