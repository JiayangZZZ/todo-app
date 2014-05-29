define(function() {
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['bodyCreate']=function anonymous(it) {
var out='<div class="body-index"><div class="container"><div class="wrapper-input-todo-title"><textarea class="input-todo-title" type="text" placeholder="Title here" name="title"></textarea></div><div class="wrapper-input-todo-description"><textarea class="input-todo-description" type="text" placeholder="Write some details about this!" name="description"></textarea></div><a href="http://zhangjiayang.dev.p1staff.com:3200/todos/:id" class="create-button"><p class="create-button-text">SAVE</p></a></div></div>';return out;
};
  tmpl['bodyIndex']=function anonymous(it) {
var out='<div class="body-index"><div class="container"><ul class="list">';var arr1=it.listItems;if(arr1){var listItem,index=-1,l1=arr1.length-1;while(index<l1){listItem=arr1[index+=1];out+='<li class="list-item">'+(listItem.title)+'</li>';} } out+='</ul><a href="http://zhangjiayang.dev.p1staff.com:3200/create" class="create-button"><p class="create-button-text">CREATE</p></a></div></div>';return out;
};
  tmpl['bodyTodo']=function anonymous(it) {
var out='<div class="body-index"><div class="container"><div class="todo-description"><p>'+(it.description)+'</p></div><div><a href="http://zhangjiayang.dev.p1staff.com:3200" class="create-button"><p class="create-button-text">BACK</p></a></div><div><a href="http://zhangjiayang.dev.p1staff.com:3200" class="delete-button"><p class="delete-button-text">DELETE</p></a></div></div></div>';return out;
};
  tmpl['footer']=function anonymous(it) {
var out='<section class="footer"></section>';return out;
};
  tmpl['header']=function anonymous(it) {
var out='<header class="landing-header"><section class="landing-header-container"><h1 class="title">'+(it.title)+'</h1></section></header>';return out;
};
  tmpl['html']=function anonymous(it) {
var out='<!DOCTYPE html><html><head><title>TODO APP</title><link href="/public/styles/build/styles.css" rel="stylesheet" type="text/css"></head><body>'+(it.header)+(it.body)+'<!--     '+(it.footer)+' --></body></html>';return out;
};
return tmpl;});
