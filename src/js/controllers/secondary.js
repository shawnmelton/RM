define(['jquery', 'views/secondary', 'tools/urlTranslator'], function($, SecondaryView, UrlTranslator) {
    var SecondaryController = function() {};
    SecondaryController.prototype = {
        addBanner: function(attachments) {
            if(attachments.length > 0 && 'images' in attachments[0] && typeof attachments[0].images === 'object') {
                SecondaryView.setBackgroundImage(attachments[0].images.full.url);
            }
        },

        addContent: function() {
            var _this = this;
            $.getJSON(UrlTranslator.toWP(location.href), {
                json: 1
            }, function(r) {
                if(typeof r === 'object' && 'status' in r && r.status === 'ok' && 'posts' in r && r.posts.length > 0) {
                    _this.addBanner(r.posts[0].attachments);
                }
            });
        },

        start: function() {
            SecondaryView.render();
            this.addContent();
        }
    };

    return new SecondaryController();
});