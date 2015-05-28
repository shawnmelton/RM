define(['jquery', 'backbone', 'templates/jst'], function($, Backbone, tmplts) {
    var BookViewEl = Backbone.View.extend({
        el: 'body',
        bgEl: null,
        contentEl: null,
        submitCallback: null,

        events: {
            'click #book-bg': 'onCloseClick',
            'click #book-close': 'onCloseClick',
            'click #book-form > p > a': 'onFormSubmission',
            'submit #book-form': 'onFormSubmission'
        },

        clearComments: function() {
            document.getElementById('comments').value = '';
        },

        hide: function() {
            var _bgEl = this.bgEl;
            $(this.contentEl).fadeOut(1000, function() {
                _bgEl.style.display = 'none';
            });
        },

        onCloseClick: function() {
            this.hide();
        },

        onFormSubmission: function() {
            if(this.submitCallback !== null) {
                this.submitCallback($('#book-form').serialize());
            }
        },

        render: function(_submitCallback) {
            this.submitCallback = _submitCallback;
            this.$el.append(JST['src/js/templates/book.html']({}));
            this.bgEl = document.getElementById('book-bg');
            this.contentEl = document.getElementById('book-content');
        },

        show: function() {
            this.bgEl.style.display = 'block';
            this.contentEl.style.display = 'block';
        },

        validate: function() {
            var errors = [];
            $('#book-form input').each(function() {
                if($(this).val() === '') {
                    errors.push($(this).attr('id'));
                }
            });

            return (errors.length === 0);
        }
    });

    return new BookViewEl();
});