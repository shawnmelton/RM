define(['jquery', 'views/secondary', 'tools/urlTranslator'], function($, SecondaryView, UrlTranslator) {
    var SecondaryController = function() {};
    SecondaryController.prototype = {
        addBanner: function(attachments) {
            if(attachments.length > 0 && 'images' in attachments[0] && typeof attachments[0].images === 'object') {
                if(parseInt(attachments[0].images.full.url.width) > 1000) {
                    SecondaryView.setBackgroundImage(attachments[0].images.full.url);
                }
            }
        },

        addContent: function(content) {
            SecondaryView.setContent(content);
        },

        addHeading: function(heading, subHeading) {
            SecondaryView.setHeading(heading);
            SecondaryView.setSubHeading(subHeading);
        },

        setPage: function() {
            var _this = this;
            $.getJSON(UrlTranslator.toWP(location.href), {
                json: 1,
                date_format: 'm.d.Y'
            }, function(r) {
                if(typeof r === 'object' && 'status' in r && r.status === 'ok' && 'post' in r) {
                    _this.addBanner(r.post.attachments);
                    _this.addContent(r.post.content);

                    // We have to build the subheading.
                    _this.addHeading(r.post.title, r.post.author.name +' &nbsp;|&nbsp; '+ r.post.modified);
                }
            });
        },

        start: function() {
            SecondaryView.render();
            this.setPage();
        }
    };

    return new SecondaryController();
});