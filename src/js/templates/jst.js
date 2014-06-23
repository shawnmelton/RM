this["JST"] = this["JST"] || {};

this["JST"]["src/js/templates/book.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="book-bg"></div>\n<section id="book-content">\n    <p><a id="book-close"><span>Close</span></a></p>\n    <div id="book-left">\n        <h2>Book Now</h2>\n        <p>In at augue a lectus pellentesque mattis a sit amet diam. Cras dapibus leo porta, eleifend justo ac, auctor nulla. Maecenas quis velit lobortis, consequat massa ac, suscipit urna</p>\n    </div>\n    <form id="book-form" method="post" action="" name="book-form">\n        <fieldset>\n            <input type="text" id="first-name" name="firstName" placeholder="First Name">\n            <input type="text" id="last-name" name="lastName" placeholder="Last Name">\n        </fieldset>\n        <fieldset>\n            <input type="email" id="email" name="email" placeholder="Email Address">\n            <input type="phone" id="phone" name="phone" placeholder="Phone Number">\n        </fieldset>\n        <fieldset>\n            <textarea id="comments" name="comments" placeholder="Comments"></textarea>\n        </fieldset>\n        <p><a>Submit</a></p>\n    </form>\n</section>';

}
return __p
};

this["JST"]["src/js/templates/category.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="category-top">\n    <a>\n        <span></span>\n        <strong>' +
((__t = ( heading )) == null ? '' : __t) +
'</strong>\n    </a>\n</div>\n<div id="category-body">\n    <div class="articles">\n        <article>\n            <img src="/img/tile-example.jpg" alt="article title">\n            <h3>TITLE</h3>\n            <p>\n                Author | Date<br>\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat &nbsp;<a href="">Read More ...</a>\n            </p>\n        </article>\n        <article>\n            <img src="/img/tile-example.jpg" alt="article title">\n            <h3>TITLE</h3>\n            <p>\n                Author | Date<br>\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat &nbsp;<a href="">Read More ...</a>\n            </p>\n        </article>\n        <article>\n            <img src="/img/tile-example.jpg" alt="article title">\n            <h3>TITLE</h3>\n            <p>\n                Author | Date<br>\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat &nbsp;<a href="">Read More ...</a>\n            </p>\n        </article>\n    </div>\n    <div class="articles">\n        <article>\n            <img src="/img/tile-example.jpg" alt="article title">\n            <h3>TITLE</h3>\n            <p>\n                Author | Date<br>\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat &nbsp;<a href="">Read More ...</a>\n            </p>\n        </article>\n        <article>\n            <img src="/img/tile-example.jpg" alt="article title">\n            <h3>TITLE</h3>\n            <p>\n                Author | Date<br>\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat &nbsp;<a href="">Read More ...</a>\n            </p>\n        </article>\n        <article>\n            <img src="/img/tile-example.jpg" alt="article title">\n            <h3>TITLE</h3>\n            <p>\n                Author | Date<br>\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat &nbsp;<a href="">Read More ...</a>\n            </p>\n        </article>\n    </div>\n    <div class="articles">\n        <article>\n            <img src="/img/tile-example.jpg" alt="article title">\n            <h3>TITLE</h3>\n            <p>\n                Author | Date<br>\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat &nbsp;<a href="">Read More ...</a>\n            </p>\n        </article>\n        <article>\n            <img src="/img/tile-example.jpg" alt="article title">\n            <h3>TITLE</h3>\n            <p>\n                Author | Date<br>\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat &nbsp;<a href="">Read More ...</a>\n            </p>\n        </article>\n        <article>\n            <img src="/img/tile-example.jpg" alt="article title">\n            <h3>TITLE</h3>\n            <p>\n                Author | Date<br>\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat &nbsp;<a href="">Read More ...</a>\n            </p>\n        </article>\n    </div>\n    <div class="articles">\n        <article>\n            <img src="/img/tile-example.jpg" alt="article title">\n            <h3>TITLE</h3>\n            <p>\n                Author | Date<br>\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat &nbsp;<a href="">Read More ...</a>\n            </p>\n        </article>\n        <article>\n            <img src="/img/tile-example.jpg" alt="article title">\n            <h3>TITLE</h3>\n            <p>\n                Author | Date<br>\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat &nbsp;<a href="">Read More ...</a>\n            </p>\n        </article>\n        <article>\n            <img src="/img/tile-example.jpg" alt="article title">\n            <h3>TITLE</h3>\n            <p>\n                Author | Date<br>\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat &nbsp;<a href="">Read More ...</a>\n            </p>\n        </article>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["src/js/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="above-the-fold">\n    <section id="spotlight">\n        <div></div>\n        <h1><span>Experience Renaissance Movement Music</span></h1>\n        <p id="calls-to-action">\n            <a id="home-events">\n                <span></span>\n                <strong>Upcoming Events</strong>\n            </a>\n            <a id="home-book">\n                <span></span>\n                <strong>Book Now</strong>\n            </a>\n        </p>\n        <a id="home-play"></a>\n        <p id="open-rmtv"><a>Open <span>RMTV</span></a></p>\n    </section>\n    <a id="home-news">\n        <span></span>\n        <strong>News</strong>\n    </a>\n</div>\n<div id="below-the-fold">\n    <section id="news-teaser">\n        <div class="tiled-group">\n            <article>\n                <img src="/img/tile-example.jpg" alt="article title">\n                <h3>TITLE</h3>\n                <p>\n                    Author | Date<br>\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat &nbsp;<a href="">Read More ...</a>\n                </p>\n            </article>\n            <article>\n                <img src="/img/tile-example.jpg" alt="article title">\n                <h3>TITLE</h3>\n                <p>\n                    Author | Date<br>\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat &nbsp;<a href="">Read More ...</a>\n                </p>\n            </article>\n            <article>\n                <img src="/img/tile-example.jpg" alt="article title">\n                <h3>TITLE</h3>\n                <p>\n                    Author | Date<br>\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat &nbsp;<a href="">Read More ...</a>\n                </p>\n            </article>\n        </div>\n    </section>\n</div>';

}
return __p
};

this["JST"]["src/js/templates/secondary.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<article id="slash-secondary">\n    <div id="secondary-top">\n        <h1></h1>\n        <h2></h2>\n    </div>\n    <div id="secondary-content"></div>\n</article>';

}
return __p
};