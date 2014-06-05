define(['views/category'], function(CategoryView) {
    var CategoryController = function() {};
    CategoryController.prototype = {
        start: function(token) {
            CategoryView.render(token);
        }
    };

    return new CategoryController();
});