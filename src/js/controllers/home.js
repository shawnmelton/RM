define(['views/home', 'controllers/elements/book'], function(HomeView, BookController) {
    var HomeController = function() {};
    HomeController.prototype = {
        addBookCallback: function() {
            HomeView.setBookCallback(function() {
                BookController.display();
            });
        },

        start: function() {
            HomeView.render();
            this.addBookCallback();
        }
    };

    return new HomeController();
});