define(['jquery', 'views/secondary', 'tools/urlTranslator'], function($, SecondaryView, UrlTranslator) {
    var SecondaryController = function() {};
    SecondaryController.prototype = {
        addBanner: function(attachments) {
            if(attachments.length > 0 && 'images' in attachments[0] && typeof attachments[0].images === 'object') {
                SecondaryView.setBackgroundImage(attachments[0].images.full.url);
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
                if(typeof r === 'object' && 'status' in r && r.status === 'ok' && 'posts' in r && r.posts.length > 0) {
                    _this.addBanner(r.posts[0].attachments);
                    _this.addContent(r.posts[0].content);

                    // We have to build the subheading.
                    var subHeading = r.posts[0].author.name +' &nbsp;|&nbsp; '+ r.posts[0].modified;

                    /*if(r.posts.categories.length > 0) {
                        subHeading += ' | TODO';
                    }*/

                    _this.addHeading(r.posts[0].title, subHeading);
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