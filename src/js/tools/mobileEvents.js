define([], function() {
    var MobileEvents = function() {};
    MobileEvents.prototype = {
        nav: null,

        setNav: function() {
            if(this.nav === null) {
                this.nav = document.getElementsByTagName('nav')[0];
            }
        },

        setNavListener: function() {
            this.setNav();
            var _nav = this.nav;
            $(document.getElementById('nav-btn')).click(function() {
                if(_nav.className.indexOf('show') !== -1) {
                    _nav.className = '';
                } else {
                    _nav.className = 'show';
                }
            });

            $(document.getElementById('book')).click(function() {
                _nav.className = '';
            });
        }
    };

    return new MobileEvents();
});