this["JST"] = this["JST"] || {};

this["JST"]["src/js/templates/book.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="book-bg"></div>\n<section id="book-content">\n    <p><a id="book-close"><span>Close</span></a></p>\n    <div id="book-left">\n        <h2>Book Now</h2>\n        <p>Please use the following form to contact us.  We would love to hear from you!  Just fill in a few pieces of information and we will get back in touch with you as quickly as possible! </p>\n    </div>\n    <form id="book-form" method="post" action="" name="book-form">\n        <fieldset>\n            <input type="text" id="first-name" name="firstName" placeholder="First Name" required="required">\n            <input type="text" id="last-name" name="lastName" placeholder="Last Name" required="required">\n        </fieldset>\n        <fieldset>\n            <input type="email" id="email" name="email" placeholder="Email Address" required="required">\n            <input type="phone" id="phone" name="phone" placeholder="Phone Number">\n        </fieldset>\n        <fieldset>\n            <textarea id="comments" name="comments" placeholder="Comments"></textarea>\n            <input type="hidden" name="verify" value="">\n        </fieldset>\n        <p><a>Submit</a></p>\n    </form>\n</section>';

}
return __p
};

this["JST"]["src/js/templates/category.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="category-top">\n    <a>\n        <span></span>\n        <strong>' +
((__t = ( heading )) == null ? '' : __t) +
'</strong>\n    </a>\n</div>\n<div id="category-body"></div>\n';

}
return __p
};

this["JST"]["src/js/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="above-the-fold">\n    <section id="spotlight">\n        <div></div>\n        <h1><span>Experience Renaissance Movement Music</span></h1>\n        <p id="calls-to-action">\n            <a id="home-events" href="/events">\n                <span></span>\n                <strong>Upcoming Events</strong>\n            </a>\n            <a id="home-book">\n                <span></span>\n                <strong>Book Now</strong>\n            </a>\n        </p>\n        <a id="home-play"></a>\n        <p id="open-rmtv"><a>Open <span>RMTV</span></a></p>\n    </section>\n    <a id="home-news">\n        <span></span>\n        <strong>News</strong>\n    </a>\n</div>\n<div id="below-the-fold">\n    <section id="news-teaser"></section>\n</div>';

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

this["JST"]["src/js/templates/elements/articleTeasers.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="articles">\n';
 _.each(articles, function(article, index) { ;
__p += '\n    ';
 if(index !== 0 && (index + 1) % 3 === 1) { ;
__p += '\n        </div><div class="articles">\n    ';
 } ;
__p += '\n    <article data-url="' +
((__t = ( article.slug )) == null ? '' : __t) +
'">\n        <img src="' +
((__t = ( article.thumbnail_images.thumbnail.url )) == null ? '' : __t) +
'" alt="' +
((__t = ( article.title_plain )) == null ? '' : __t) +
'">\n        <h3>' +
((__t = ( article.title )) == null ? '' : __t) +
'</h3>\n        <p>\n            ' +
((__t = ( article.author.name )) == null ? '' : __t) +
' | ' +
((__t = ( article.date )) == null ? '' : __t) +
'<br>\n            ' +
((__t = ( String(article.excerpt).replace('<p>', '').replace('</p>', '').substring(0, 100) )) == null ? '' : __t) +
' &nbsp;<a href="/' +
((__t = ( article.slug )) == null ? '' : __t) +
'/">Read More ...</a>\n        </p>\n    </article>\n';
 }); ;
__p += '\n</div>';

}
return __p
};

this["JST"]["src/js/templates/elements/categoryNoResults.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Content Coming Soon</h2>\n<p>Renaissance Movement is still pulling together all of our content.  Please check back with us soon to see information pertaining to this topic.</p>';

}
return __p
};