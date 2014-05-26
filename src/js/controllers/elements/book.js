define(['views/elements/book', 'tools/styleLoader'], function(BookViewEl, StyleLoader) {
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
            console.log(data);
        },

        show: function() {
            BookViewEl.show();
        }
    };

    return new BookController();
});