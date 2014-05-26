define(['views/home', 'controllers/elements/book'], function(HomeView, BookController) {
    var HomeController = function() {};
    HomeController.prototype = {
        addBookCallback: function() {
            HomeView.setBookCallback(function() {
                BookController.display();
            });
        },

        display: function() {
            HomeView.render();
            this.addBookCallback();
        },

        start: function() {
            this.display();
        }
    };

    return new HomeController();
});