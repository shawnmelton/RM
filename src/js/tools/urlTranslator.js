define([], function() {
    /**
     * UrlTranslator class will help modify urls passed between Wordpress and 
     * this site.  Wordpress urls will come in the format of http://domain.com/content/...
     * We will need to convert them to http://domain.com/... for use in the site.
     */
    var UrlTranslator = function() {};
    UrlTranslator.prototype = {
        domain: null,

        /**
         * Detemine the domain of the current site.
         */
        determineDomain: function() {
            return 'http://'+ location.hostname;
        },

        /**
         * Translate a url that was provided from Wordpress.
         */
        fromWP: function(url) {
            return url.replace('/content', '');
        },

        /**
         * Get the site domain.
         */
        getDomain: function() {
            if(this.domain === null) {
                this.domain = this.determineDomain();
            }

            return this.domain;
        },

        /**
         * Translate a site url to a url that Wordpress will recognize.
         */
        toWP: function(url) {
            return url.replace(this.getDomain(), this.getDomain() +'/content');
        }
    };

    return new UrlTranslator();
});