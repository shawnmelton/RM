define(['jquery', 'views/secondary', 'tools/urlTranslator'], function($, SecondaryView, UrlTranslator) {
    var SecondaryController = function() {};
    SecondaryController.prototype = {
        addBanner: function(images) {
            var minWidth = $(window).width() > 500 ? 1000 : 320;

            if('full' in images && typeof images.full === 'object') {
                if(parseInt(images.full.width) > minWidth) {
                    SecondaryView.setBackgroundImage(images.full.url);
                }
            } else if('twentyfourteen-full-width' in images && typeof images['twentyfourteen-full-width'] === 'object') {
                if(parseInt(images['twentyfourteen-full-width'].width) > minWidth) {
                    SecondaryView.setBackgroundImage(images['twentyfourteen-full-width'].url);
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
                    if('thumbnail_images' in r.post) {
                        _this.addBanner(r.post.thumbnail_images);
                    }

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