define(['jquery', 'backbone', 'templates/jst'], function($, Backbone, tmplts) {
    var CategoryView = Backbone.View.extend({
        el: '#content',
        teaserEl: null,
        events: {
            'click .articles article': 'onArticleClick'
        },

        onArticleClick: function(e) {
            if('dataset' in e.currentTarget && 'url' in e.currentTarget.dataset) {
                location.href = '/'+ e.currentTarget.dataset.url;
            }
        },

        render: function(token) {
            this.$el.html(JST['src/js/templates/category.html']({
                heading: token.toUpperCase()
            }));
        },

        setTeaserEl: function() {
            if(this.teaserEl === null) {
                this.teaserEl = document.getElementById('category-body');
            }
        },

        showNoResults: function() {
            this.setTeaserEl();
            this.teaserEl.innerHTML = JST['src/js/templates/elements/categoryNoResults.html']();
        },

        showTeasers: function(articles) {
            this.setTeaserEl();
            this.teaserEl.innerHTML = JST['src/js/templates/elements/articleTeasers.html']({
                articles: articles
            });
        }
    });

    return new CategoryView();
});