/*!
 * froala_editor v2.5.1 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */


!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.DEFAULTS,{}),a.FE.URLRegEx="(\\s|^|>)(((http|https|ftp|ftps)\\:\\/\\/)?[a-zA-Z0-9\\-\\.]+(\\.[a-zA-Z]{2,3})(:\\d*)?(\\/[^\\s<]*)?)(\\s|$|<)",a.FE.PLUGINS.url=function(b){function c(a){for(;a.parentNode;)if(a=a.parentNode,["A","BUTTON","TEXTAREA"].indexOf(a.tagName)>=0)return!0;return!1}function d(){for(var d,e=b.doc.createTreeWalker(b.el,NodeFilter.SHOW_TEXT,b.node.filter(function(b){return new RegExp(a.FE.URLRegEx,"gi").test(b.textContent.replace(/&nbsp;/gi," "))&&!c(b)}),!1),f=[];e.nextNode();)d=e.currentNode,f.push(d);for(var g=0;g<f.length;g++){d=f[g];var h=null;b.opts.linkAlwaysNoFollow&&(h="nofollow"),b.opts.linkAlwaysBlank&&(h?h+=" noopener noreferrer":h="noopener noreferrer"),a(d).before(d.textContent.replace(new RegExp(a.FE.URLRegEx,"gi"),"$1<a"+(b.opts.linkAlwaysBlank?' target="_blank"':"")+(h?' rel="'+h+'"':"")+' href="$2">$2</a>$8')),d.parentNode.removeChild(d)}}function e(){b.events.on("paste.afterCleanup",function(c){if(new RegExp(a.FE.URLRegEx,"gi").test(c))return c.replace(new RegExp(a.FE.URLRegEx,"gi"),"$1<a"+(b.opts.linkAlwaysBlank?' target="_blank"':"")+(b.opts.linkAlwaysNoFollow?' rel="nofollow"':"")+' href="$2">$2</a>$8')}),b.events.on("keyup",function(c){var e=c.which;e!=a.FE.KEYCODE.ENTER&&e!=a.FE.KEYCODE.SPACE||d(b.node.contents(b.el))},!0),b.events.on("keydown",function(c){var d=c.which;if(d==a.FE.KEYCODE.ENTER){var e=b.selection.element();if(("A"==e.tagName||a(e).parents("a").length)&&b.selection.info(e).atEnd)return c.stopImmediatePropagation(),"A"!==e.tagName&&(e=a(e).parents("a")[0]),a(e).after("&nbsp;"+a.FE.MARKERS),b.selection.restore(),!1}})}return{_init:e}}});