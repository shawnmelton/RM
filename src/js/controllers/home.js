define(['views/home'], function(HomeView) {
    var HomeController = function() {};
    HomeController.prototype = {
        display: function() {
            HomeView.render();
        },

        start: function() {
            this.display();
        }
    };

    return new HomeController();
});