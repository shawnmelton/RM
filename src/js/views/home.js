define(['jquery', 'backbone', 'templates/jst', 'tools/videoLoader'], function($, Backbone, tmplts, VideoLoader) {
    var HomeView = Backbone.View.extend({
        el: '#content',
        bookCallback: false,
        events: {
            'click #home-book': 'onBookClick',
            'click #home-play': 'onVideoClick',
            'click #open-rmtv': 'onVideoClick'
        },

        onBookClick: function() {
            if(this.bookCallback !== false) {
                this.bookCallback();
            }
        },

        onVideoClick: function() {
            VideoLoader.showYouTube('-abF0hrHlSg');
        },

        render: function() {
            this.$el.html(JST['src/js/templates/home.html']({}));
        },

        setBookCallback: function(_cb) {
            this.bookCallback = _cb;
        },

        showCategory: function(token, articles) {
            var categoryEl = null;

            switch(token) {
                case 'news': categoryEl = document.getElementById('news-teaser'); break;
            }

            if(categoryEl !== null) {
                categoryEl.innerHTML = JST['src/js/templates/elements/articleTeasers.html']({
                    articles: articles
                });
            }
        }
    });

    return new HomeView();
});