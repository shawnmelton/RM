define(['jquery', 'backbone', 'templates/jst'], function($, Backbone, tmplts) {
    var HomeView = Backbone.View.extend({
        el: '#content',
        bookCallback: false,
        events: {
            'click #home-book': 'onBookClick'
        },

        onBookClick: function() {
            if(this.bookCallback !== false) {
                this.bookCallback();
            }
        },

        render: function() {
            this.$el.append(JST['src/js/templates/home.html']({}));
        },

        setBookCallback: function(_cb) {
            this.bookCallback = _cb;
        }
    });

    return new HomeView();
});