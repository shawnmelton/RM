define(['jquery', 'views/category', 'tools/urlTranslator'], function($, CategoryView, UrlTranslator) {
    var CategoryController = function() {};
    CategoryController.prototype = {
        setPage: function(token) {
            var _this = this;
            $.getJSON(UrlTranslator.toWP(location.href), {
                json: 'get_category_posts',
                date_format: 'm.d.Y',
                slug: token
            }, function(r) {
                if(typeof r === 'object' && 'status' in r && r.status === 'ok' && 'posts' in r && r.posts.length > 0) {
                    
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