define(function() {
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['bodyIndex']=function anonymous(it) {
var out='<div class="body-index"><div class="container"><ul class="list">';var arr1=it.listItems;if(arr1){var listItem,index=-1,l1=arr1.length-1;while(index<l1){listItem=arr1[index+=1];out+='<li class="list-item">'+(listItem.title)+'</li>';} } out+='</ul></div></div>';return out;
};
  tmpl['bodyTodo']=function anonymous(it) {
var out='<section>'+(it.todo)+'</section>';return out;
};
  tmpl['footer']=function anonymous(it) {
var out='<section class="footer"></section>';return out;
};
  tmpl['header']=function anonymous(it) {
var out='<header class="landing-header"><section class="landing-header-container"><h1 class="title">YOUR TODOS</h1><div class="add-new"><a href="http://www.baidu.com"><img src="/public/images/new-button.png" width="50px"></a></div></section></header>';return out;
};
  tmpl['html']=function anonymous(it) {
var out='<!DOCTYPE html><html><head><title>TODO APP</title><link href="/public/styles/build/styles.css" rel="stylesheet" type="text/css"></head><body>'+(it.header)+(it.body)+(it.footer)+'</body></html>';return out;
};
return tmpl;});
