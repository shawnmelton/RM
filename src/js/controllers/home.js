define(['views/home', 'controllers/elements/book', 'tools/urlTranslator'], 
    function(HomeView, BookController, UrlTranslator) {
    var HomeController = function() {};
    HomeController.prototype = {
        addBookCallback: function() {
            HomeView.setBookCallback(function() {
                BookController.display();
            });
        },

        loadCategory: function(token) {
            var _this = this;
            $.getJSON(UrlTranslator.toWP(location.href), {
                json: 'get_category_posts',
                date_format: 'm.d.Y',
                slug: token
            }, function(r) {
                if(typeof r === 'object' && 'status' in r && r.status === 'ok' && 'posts' in r && r.posts.length > 0) {
                    HomeView.showCategory(token, r.posts);
                }
            });
        },

        loadNews: function() {
            this.loadCategory('news');
        },

        start: function() {
            HomeView.render();
            this.addBookCallback();
            this.loadCategory('news');
        }
    };

    return new HomeController();
});