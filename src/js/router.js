define(['backbone', 'controllers/home', 'controllers/secondary', 'controllers/category', 'libs/json2', 
    'views/elements/mainMenu'],
    function(Backbone, HomeController, SecondaryController, CategoryController, jsn2, MainMenu) {

    var AppRouter = Backbone.Router.extend({
        initialize: function() {
            this.route(/^.*$/, 'showHome');
            this.route(/^news|events|media|artists$/, 'showCategory');
            this.route(/^about$/, 'showSecondary');
        },

        showCategory: function() {
            CategoryController.start(document.location.pathname.replace('/', ''));
        },

        showHome: function() {
            HomeController.start();
        },

        showSecondary: function() {
            SecondaryController.start();
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

        MainMenu.start();
    };
    
    return {
        initialize: initialize
    };
});