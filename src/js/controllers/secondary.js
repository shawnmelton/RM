define(['views/secondary'], function(SecondaryView) {
    var SecondaryController = function() {};
    SecondaryController.prototype = {
        start: function() {
            SecondaryView.render();
        }
    };

    return new SecondaryController();
});