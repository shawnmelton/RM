define(['jquery', 'views/elements/book', 'tools/styleLoader'], function($, BookViewEl, StyleLoader) {
    var BookController = function() {};
    BookController.prototype = {
        displayed: false,

        display: function() {
            if(this.displayed) {
                this.show();
                return;
            }

            StyleLoader.load('book');

            var _this = this;
            BookViewEl.render(function(data) {
                _this.onFormSubmission(data);
            });

            setTimeout(function() {
                BookViewEl.show();
            }, 50);
            this.displayed = true;
        },

        onFormSubmission: function(data) {
            $.post('/book.php', data, function(r) {
                var response = $.parseJSON(r);
                if(typeof response === 'object' && 'status' in response) {
                    if(response.status === 'ok') {
                        BookViewEl.hide();
                        BookViewEl.clearComments();
                    } else {
                        // Error !
                    }
                }
            });
        },

        show: function() {
            BookViewEl.show();
        }
    };

    return new BookController();
});