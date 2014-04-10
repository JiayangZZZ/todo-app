define(function() {
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['container']=function anonymous(it) {
var out='<section class="container"><p>asdfjadfg</p><ul><li>item</li><li>item</li><li>item</li><li>item</li><li>item</li><li>item</li><li>asldkjghajs</li><li>asldkjghajs</li><li>asldkjghajs</li><li>item</li><li>item</li><li>item</li><li>item</li><li>item</li></ul></section>';return out;
};
  tmpl['footer']=function anonymous(it) {
var out='<section class="footer"></section>';return out;
};
  tmpl['header']=function anonymous(it) {
var out='<header class="landing-header"><section class="title"><p>header title</p></section></header>';return out;
};
  tmpl['html']=function anonymous(it) {
var out='<!DOCTYPE html><html><head><title>TODO APP</title><link href="/public/styles/build/styles.css" rel="stylesheet" type="text/css"></head><body>'+(it.header)+(it.container)+(it.footer)+'</body></html>';return out;
};
return tmpl;});
