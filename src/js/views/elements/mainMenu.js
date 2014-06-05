define(['jquery', 'backbone', 'controllers/elements/book'],
    function($, Backbone, BookController) {
    var MainMenuViewEl = Backbone.View.extend({
        started: false,

        start: function() {
            if(this.started) {
                return;
            }

            this.started = true;
            $('header > nav > a').click(function(e) {
                e.preventDefault();

                if($(this).attr('id') === 'book') {
                    BookController.display();
                    return;
                }

                if(!!(window.history && window.history.pushState)) {
                    appRouter.navigate($(this).attr('href'), {
                        trigger: true,
                        replace: true
                    });
                } else {
                    location.href = url;
                }
            });
        }
    });

    return new MainMenuViewEl();
});