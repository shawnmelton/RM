define([], function() {
    var VideoLoader = function() {};
    VideoLoader.prototype = {
        showYouTube: function(videoId) {
            var videoWidth = ($('body').width() * .8),
                videoHeight = videoWidth * .56;

            $('body').append('<div id="yt-bg"></div><iframe id="yt-video" width="'+ videoWidth +'" height="'+ videoHeight +'" style="margin-left: -'+ (videoWidth / 2) +'px; margin-top: -'+ (videoHeight / 2) +'px;" src="//www.youtube.com/embed/'+ videoId +'?autoplay=1" frameborder="0" allowfullscreen></iframe>');
            $('#yt-bg').click(function() {
                $(this).remove();
                $('#yt-video').remove();
            });
        }
    };

    return new VideoLoader();
});