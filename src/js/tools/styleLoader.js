define([], function() {
    var StyleLoader = function() {};
    StyleLoader.prototype = {
        styles: [],

        hasLoaded: function(file) {
            return (this.styles.indexOf(file) !== -1);
        },

        load: function(file) {
            if(this.hasLoaded(file)) {
                return;
            }

            var link  = document.createElement('link');
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = '/css/'+ file +'.css?r=4';
            document.getElementsByTagName('head')[0].appendChild(link);

            this.styles.push(file);
        }
    };

    return new StyleLoader();
});