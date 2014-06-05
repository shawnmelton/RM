define(['jquery', 'backbone', 'templates/jst'], function($, Backbone, tmplts) {
    var CategoryView = Backbone.View.extend({
        el: '#content',
        events: {},

        render: function(token) {
            this.$el.html(JST['src/js/templates/category.html']({
                heading: token.toUpperCase()
            }));
        }
    });

    return new CategoryView();
});