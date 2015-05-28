define(['jquery', 'views/category', 'tools/urlTranslator'], function($, CategoryView, UrlTranslator) {
    var CategoryController = function() {};
    CategoryController.prototype = {
        setPage: function(token) {
            var _this = this;
            $.getJSON('/content/', {
                json: 'get_category_posts',
                date_format: 'm.d.Y',
                slug: token
            }, function(r) {
                if(typeof r === 'object' && 'status' in r && r.status === 'ok' && 'posts' in r) {
                    if(r.posts.length > 0) {
                        CategoryView.showTeasers(r.posts);
                    } else {
                        CategoryView.showNoResults();
                    }
                }

                if(token === 'events') {
                    _this.setStaticContent('/content/events');
                } else if(token === 'artists') {
                    _this.setStaticContent('/content/artists');
                }
            });
        },

        setStaticContent: function(url) {
            $.getJSON(url, {
                json: 1,
                date_format: 'm.d.Y'
            }, function(r) {
                if(typeof r === 'object' && 'status' in r && r.status === 'ok' && 'post' in r) {
                    CategoryView.prependContent(r.post.content);
                }
            });
        },

        start: function(token) {
            CategoryView.render(token);
            this.setPage(token);
        }
    };

    return new CategoryController();
});