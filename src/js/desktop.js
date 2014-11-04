define(['libs/domReady', 'router', 'tools/mobileEvents'], function(domReady, Router, MobileEvents){
    domReady(function() {
        MobileEvents.setNavListener();
        
        Router.initialize();
    });
});