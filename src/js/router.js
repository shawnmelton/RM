define(['backbone', 'controllers/home', 'libs/json2'],
    function(Backbone, HomeController, jsn2) {

    var AppRouter = Backbone.Router.extend({
        initialize: function() {
            this.route(/^.*$/, 'showHome');
        },

        showHome: function() {
            HomeController.start();
        }
    });
    
    /**
     * Start the routing.  Make sure that we only use browser
     * push state if the browser supports it.
     */
    var initialize = function(){
        window.appRouter = new AppRouter();
        var usePushState = !!(window.history && window.history.pushState);
        Backbone.history.start({
            pushState: usePushState,
            hashChange: usePushState
        });
    };
    
    return {
        initialize: initialize
    };
});