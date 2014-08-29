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
            });
        },

        start: function(token) {
            CategoryView.render(token);
            this.setPage(token);
        }
    };

    return new CategoryController();
});