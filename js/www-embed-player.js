(function(){var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={a:!0},ha={};try{ha.__proto__=fa;ea=ha.a;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=da;
function n(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
var ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ka="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function la(a,b){if(b){for(var c=ka,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}}
function ma(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
la("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ma(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
la("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ma(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,h=Math.max(0,Math.min(c|0,d.length)),g=0;g<f&&h<e;)if(d[h++]!=b[g++])return!1;return g>=f}});
function na(){na=function(){};
ka.Symbol||(ka.Symbol=oa)}
function qa(a,b){this.f=a;ja(this,"description",{configurable:!0,writable:!0,value:b})}
qa.prototype.toString=function(){return this.f};
var oa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new qa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ra(){na();var a=ka.Symbol.iterator;a||(a=ka.Symbol.iterator=ka.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return sa(aa(this))}});
ra=function(){}}
function sa(a){ra();a={next:a};a[ka.Symbol.iterator]=function(){return this};
return a}
function ta(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ua="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
la("Object.assign",function(a){return a||ua});
la("WeakMap",function(a){function b(g){this.f=(h+=Math.random()+1).toString();if(g){g=ba(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}}
function c(){}
function d(g){if(!ta(g,f)){var k=new c;ja(g,f,{value:k})}}
function e(g){var k=Object[g];k&&(Object[g]=function(l){if(l instanceof c)return l;d(l);return k(l)})}
if(function(){if(!a||!Object.seal)return!1;try{var g=Object.seal({}),k=Object.seal({}),l=new a([[g,2],[k,3]]);if(2!=l.get(g)||3!=l.get(k))return!1;l["delete"](g);l.set(k,4);return!l.has(g)&&4==l.get(k)}catch(q){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var h=0;b.prototype.set=function(g,k){d(g);if(!ta(g,f))throw Error("WeakMap key fail: "+g);g[f][this.f]=k;return this};
b.prototype.get=function(g){return ta(g,f)?g[f][this.f]:void 0};
b.prototype.has=function(g){return ta(g,f)&&ta(g[f],this.f)};
b.prototype["delete"]=function(g){return ta(g,f)&&ta(g[f],this.f)?delete g[f][this.f]:!1};
return b});
la("Map",function(a){function b(){var g={};return g.previous=g.next=g.head=g}
function c(g,k){var l=g.f;return sa(function(){if(l){for(;l.head!=g.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(g,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++h,f.set(k,l)):l="p_"+k;var q=g.g[l];if(q&&ta(g.g,l))for(var t=0;t<q.length;t++){var w=q[t];if(k!==k&&w.key!==w.key||k===w.key)return{id:l,list:q,index:t,u:w}}return{id:l,list:q,index:-1,u:void 0}}
function e(g){this.g={};this.f=b();this.size=0;if(g){g=ba(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var g=Object.seal({x:4}),k=new a(ba([[g,"s"]]));if("s"!=k.get(g)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),q=l.next();if(q.done||q.value[0]!=g||"s"!=q.value[1])return!1;q=l.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!l.next().done?!1:!0}catch(t){return!1}}())return a;
ra();var f=new WeakMap;e.prototype.set=function(g,k){g=0===g?0:g;var l=d(this,g);l.list||(l.list=this.g[l.id]=[]);l.u?l.u.value=k:(l.u={next:this.f,previous:this.f.previous,head:this.f,key:g,value:k},l.list.push(l.u),this.f.previous.next=l.u,this.f.previous=l.u,this.size++);return this};
e.prototype["delete"]=function(g){g=d(this,g);return g.u&&g.list?(g.list.splice(g.index,1),g.list.length||delete this.g[g.id],g.u.previous.next=g.u.next,g.u.next.previous=g.u.previous,g.u.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(g){return!!d(this,g).u};
e.prototype.get=function(g){return(g=d(this,g).u)&&g.value};
e.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};
e.prototype.keys=function(){return c(this,function(g){return g.key})};
e.prototype.values=function(){return c(this,function(g){return g.value})};
e.prototype.forEach=function(g,k){for(var l=this.entries(),q;!(q=l.next()).done;)q=q.value,g.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var h=0;return e});
la("Set",function(a){function b(c){this.f=new Map;if(c){c=ba(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ba([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(h){return!1}}())return a;
ra();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
la("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==ma(this,b,"includes").indexOf(b,c||0)}});
var va=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
la("Reflect.construct",function(){return va});
var r=this||self;function u(a){return void 0!==a}
function v(a){return"string"==typeof a}
function x(a,b,c){a=a.split(".");c=c||r;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&u(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
var wa=/^[\w+/_-]+[=]{0,2}$/,xa=null;function y(a,b){for(var c=a.split("."),d=b||r,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ya(){}
function za(a){a.ca=void 0;a.getInstance=function(){return a.ca?a.ca:a.ca=new a}}
function Aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Ba(a){return"array"==Aa(a)}
function Ca(a){var b=Aa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Da(a){return"function"==Aa(a)}
function Ea(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var Fa="closure_uid_"+(1E9*Math.random()>>>0),Ga=0;function Ha(a,b,c){return a.call.apply(a.bind,arguments)}
function Ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function z(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?z=Ha:z=Ia;return z.apply(null,arguments)}
function Ja(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var A=Date.now||function(){return+new Date};
function Ka(a,b){x(a,b,void 0)}
function B(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.jb=function(d,e,f){for(var h=Array(arguments.length-2),g=2;g<arguments.length;g++)h[g-2]=arguments[g];return b.prototype[e].apply(d,h)}}
;var C=window;function D(a){if(Error.captureStackTrace)Error.captureStackTrace(this,D);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
B(D,Error);D.prototype.name="CustomError";var Ma=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(v(a))return v(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Na=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=v(a)?a.split(""):a,h=0;h<c;h++)if(h in f){var g=f[h];
b.call(void 0,g,h,a)&&(d[e++]=g)}return d},Oa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=v(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Pa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Qa(a,b){a:{var c=a.length;for(var d=v(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:v(a)?a.charAt(c):a[c]}
function Ra(a,b){var c=Ma(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Sa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ta(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ca(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
;function Ua(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Va(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Wa(a,b){var c=Ca(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Xa(a){var b=Ya,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Za(a){for(var b in a)return!1;return!0}
function $a(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ab(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function bb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function cb(a){var b=Aa(a);if("object"==b||"array"==b){if(Da(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=cb(a[c]);return b}return a}
var db="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<db.length;f++)c=db[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function fb(a,b){this.f=a===gb&&b||"";this.g=hb}
fb.prototype.J=!0;fb.prototype.I=function(){return this.f};
fb.prototype.toString=function(){return"Const{"+this.f+"}"};
var hb={},gb={},ib;ib=new fb(gb,"");function jb(){this.f="";this.g=kb}
jb.prototype.J=!0;jb.prototype.I=function(){return this.f.toString()};
jb.prototype.ba=!0;jb.prototype.Y=function(){return 1};
function lb(a){if(a instanceof jb&&a.constructor===jb&&a.g===kb)return a.f;Aa(a);return"type_error:TrustedResourceUrl"}
var kb={};function mb(a){var b=new jb;b.f=a;return b}
;var nb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function ob(a,b){if(b)a=a.replace(pb,"&amp;").replace(qb,"&lt;").replace(rb,"&gt;").replace(sb,"&quot;").replace(tb,"&#39;").replace(ub,"&#0;");else{if(!vb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(pb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(qb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(rb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(sb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(tb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ub,"&#0;"))}return a}
var pb=/&/g,qb=/</g,rb=/>/g,sb=/"/g,tb=/'/g,ub=/\x00/g,vb=/[\x00&<>"']/;function F(){this.f="";this.g=wb}
F.prototype.J=!0;F.prototype.I=function(){return this.f.toString()};
F.prototype.ba=!0;F.prototype.Y=function(){return 1};
function xb(a){if(a instanceof F&&a.constructor===F&&a.g===wb)return a.f;Aa(a);return"type_error:SafeUrl"}
var yb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function zb(a){if(a instanceof F)return a;a="object"==typeof a&&a.J?a.I():String(a);yb.test(a)||(a="about:invalid#zClosurez");return Ab(a)}
var wb={};function Ab(a){var b=new F;b.f=a;return b}
Ab("about:blank");var Bb;a:{var Cb=r.navigator;if(Cb){var Db=Cb.userAgent;if(Db){Bb=Db;break a}}Bb=""}function G(a){return-1!=Bb.indexOf(a)}
;function Eb(){this.f="";this.h=Gb;this.g=null}
Eb.prototype.ba=!0;Eb.prototype.Y=function(){return this.g};
Eb.prototype.J=!0;Eb.prototype.I=function(){return this.f.toString()};
function Hb(a){if(a instanceof Eb&&a.constructor===Eb&&a.h===Gb)return a.f;Aa(a);return"type_error:SafeHtml"}
var Gb={};function Ib(a,b){var c=new Eb;c.f=a;c.g=b;return c}
Ib("<!DOCTYPE html>",0);var Jb=Ib("",0);Ib("<br>",0);function Kb(a,b){var c=b instanceof F?b:zb(b);a.href=xb(c)}
function Lb(a){var b=mb(ib instanceof fb&&ib.constructor===fb&&ib.g===hb?ib.f:"type_error:Const");a.src=lb(b).toString()}
function Mb(a,b){a.src=lb(b);if(null===xa)b:{var c=r.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&wa.test(c)){xa=c;break b}xa=""}c=xa;c&&a.setAttribute("nonce",c)}
;function Nb(a){return a=ob(a,void 0)}
function Ob(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Pb=G("Opera"),Qb=G("Trident")||G("MSIE"),Rb=G("Edge"),Sb=G("Gecko")&&!(-1!=Bb.toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),Tb=-1!=Bb.toLowerCase().indexOf("webkit")&&!G("Edge");function Ub(){var a=r.document;return a?a.documentMode:void 0}
var Vb;a:{var Wb="",Xb=function(){var a=Bb;if(Sb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Rb)return/Edge\/([\d\.]+)/.exec(a);if(Qb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Tb)return/WebKit\/(\S+)/.exec(a);if(Pb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Xb&&(Wb=Xb?Xb[1]:"");if(Qb){var Yb=Ub();if(null!=Yb&&Yb>parseFloat(Wb)){Vb=String(Yb);break a}}Vb=Wb}var Zb=Vb,$b;var ac=r.document;$b=ac&&Qb?Ub()||("CSS1Compat"==ac.compatMode?parseInt(Zb,10):5):void 0;var bc=null,cc=null;function dc(a){this.f=a||{cookie:""}}
m=dc.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');u(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(A()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=nb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=u(this.get(a));this.set(a,"",0,b,c);return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=nb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ec=new dc("undefined"==typeof document?null:document);function fc(a){var b=y("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(v(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||r.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&a.constructor instanceof
Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,gc[b]?b=gc[b]:(b=String(b),gc[b]||(c=/function\s+([^\(]+)/m.exec(b),gc[b]=c?c[1]:"[Anonymous]"),b=gc[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var gc={};var hc=!Qb||9<=Number($b);function ic(a,b){this.x=u(a)?a:0;this.y=u(b)?b:0}
m=ic.prototype;m.clone=function(){return new ic(this.x,this.y)};
m.equals=function(a){return a instanceof ic&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function jc(a,b){this.width=a;this.height=b}
m=jc.prototype;m.clone=function(){return new jc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function kc(a){var b=document;return v(a)?b.getElementById(a):a}
function lc(a,b){Va(b,function(c,d){c&&"object"==typeof c&&c.J&&(c=c.I());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:mc.hasOwnProperty(d)?a.setAttribute(mc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var mc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function nc(a,b,c){var d=arguments,e=document,f=String(d[0]),h=d[1];if(!hc&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',Nb(h.name),'"');if(h.type){f.push(' type="',Nb(h.type),'"');var g={};eb(g,h);delete g.type;h=g}f.push(">");f=f.join("")}f=e.createElement(f);h&&(v(h)?f.className=h:Ba(h)?f.className=h.join(" "):lc(f,h));2<d.length&&oc(e,f,d);return f}
function oc(a,b,c){function d(h){h&&b.appendChild(v(h)?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];!Ca(f)||Ea(f)&&0<f.nodeType?d(f):E(pc(f)?Sa(f):f,d)}}
function pc(a){if(a&&"number"==typeof a.length){if(Ea(a))return"function"==typeof a.item||"string"==typeof a.item;if(Da(a))return"function"==typeof a.item}return!1}
function qc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function rc(a){sc();return mb(a)}
var sc=ya;function tc(a){var b=uc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function vc(){var a=[];tc(function(b){a.push(b)});
return a}
var uc={Va:"allow-forms",Wa:"allow-modals",Xa:"allow-orientation-lock",Ya:"allow-pointer-lock",Za:"allow-popups",ab:"allow-popups-to-escape-sandbox",bb:"allow-presentation",cb:"allow-same-origin",eb:"allow-scripts",fb:"allow-top-navigation",gb:"allow-top-navigation-by-user-activation"},wc=Ua(function(){return vc()});
function yc(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};E(wc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function zc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Ac=(new Date).getTime();function Bc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Cc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=l=0}
function b(t){for(var w=h,p=0;64>p;p+=4)w[p/4]=t[p]<<24|t[p+1]<<16|t[p+2]<<8|t[p+3];for(p=16;80>p;p++)t=w[p-3]^w[p-8]^w[p-14]^w[p-16],w[p]=(t<<1|t>>>31)&4294967295;t=e[0];var H=e[1],U=e[2],pa=e[3],xc=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var La=pa^H&(U^pa);var Fb=1518500249}else La=H^U^pa,Fb=1859775393;else 60>p?(La=H&U|pa&(H|U),Fb=2400959708):(La=H^U^pa,Fb=3395469782);La=((t<<5|t>>>27)&4294967295)+La+xc+Fb+w[p]&4294967295;xc=pa;pa=U;U=(H<<30|H>>>2)&4294967295;H=t;t=La}e[0]=e[0]+t&4294967295;e[1]=
e[1]+H&4294967295;e[2]=e[2]+U&4294967295;e[3]=e[3]+pa&4294967295;e[4]=e[4]+xc&4294967295}
function c(t,w){if("string"===typeof t){t=unescape(encodeURIComponent(t));for(var p=[],H=0,U=t.length;H<U;++H)p.push(t.charCodeAt(H));t=p}w||(w=t.length);p=0;if(0==l)for(;p+64<w;)b(t.slice(p,p+64)),p+=64,q+=64;for(;p<w;)if(f[l++]=t[p++],q++,64==l)for(l=0,b(f);p+64<w;)b(t.slice(p,p+64)),p+=64,q+=64}
function d(){var t=[],w=8*q;56>l?c(g,56-l):c(g,64-(l-56));for(var p=63;56<=p;p--)f[p]=w&255,w>>>=8;b(f);for(p=w=0;5>p;p++)for(var H=24;0<=H;H-=8)t[w++]=e[p]>>H&255;return t}
for(var e=[],f=[],h=[],g=[128],k=1;64>k;++k)g[k]=0;var l,q;a();return{reset:a,update:c,digest:d,qa:function(){for(var t=d(),w="",p=0;p<t.length;p++)w+="0123456789ABCDEF".charAt(Math.floor(t[p]/16))+"0123456789ABCDEF".charAt(t[p]%16);return w}}}
;function Dc(a,b,c){var d=[],e=[];if(1==(Ba(c)?2:1))return e=[b,a],E(d,function(g){e.push(g)}),Ec(e.join(" "));
var f=[],h=[];E(c,function(g){h.push(g.key);f.push(g.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(g){e.push(g)});
a=Ec(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")}
function Ec(a){var b=Cc();b.update(a);return b.qa().toLowerCase()}
;function Fc(a){var b=Bc(String(r.location.href)),c=r.__OVERRIDE_SID;null==c&&(c=(new dc(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?r.__SAPISID:r.__APISID,null==b&&(b=(new dc(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(r.location.href);return d&&b&&c?[c,Dc(Bc(d),b,a||null)].join(" "):null}return null}
;function Gc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Gc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Hc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Ic(a){r.setTimeout(function(){throw a;},0)}
var Jc;
function Kc(){var a=r.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Lb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Hb(Jb));e.close();var h="callImmediate"+Math.random(),g="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=z(function(k){if(("*"==g||k.origin==g)&&k.data==
h)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(h,g)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(u(c.next)){c=c.next;var e=c.fa;c.fa=null;e()}};
return function(e){d.next={fa:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){r.setTimeout(e,0)}}
;function Lc(){this.g=this.f=null}
var Nc=new Gc(function(){return new Mc},function(a){a.reset()});
Lc.prototype.add=function(a,b){var c=Nc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Lc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Mc(){this.next=this.scope=this.f=null}
Mc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Mc.prototype.reset=function(){this.next=this.scope=this.f=null};function Oc(a,b){Pc||Qc();Rc||(Pc(),Rc=!0);Sc.add(a,b)}
var Pc;function Qc(){if(r.Promise&&r.Promise.resolve){var a=r.Promise.resolve(void 0);Pc=function(){a.then(Tc)}}else Pc=function(){var b=Tc;
!Da(r.setImmediate)||r.Window&&r.Window.prototype&&!G("Edge")&&r.Window.prototype.setImmediate==r.setImmediate?(Jc||(Jc=Kc()),Jc(b)):r.setImmediate(b)}}
var Rc=!1,Sc=new Lc;function Tc(){for(var a;a=Sc.remove();){try{a.f.call(a.scope)}catch(b){Ic(b)}Hc(Nc,a)}Rc=!1}
;function Uc(){this.g=-1}
;function Vc(){this.g=64;this.f=[];this.l=[];this.w=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
B(Vc,Uc);Vc.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function Wc(a,b,c){c||(c=0);var d=a.w;if(v(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var h=a.f[2],g=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=g^c&(h^g);var l=1518500249}else f=c^h^g,l=1859775393;else 60>e?(f=c&h|g&(c|h),l=2400959708):(f=c^h^g,l=
3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=g;g=h;h=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+h&4294967295;a.f[3]=a.f[3]+g&4294967295;a.f[4]=a.f[4]+k&4294967295}
Vc.prototype.update=function(a,b){if(null!=a){u(b)||(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)Wc(this,a,d),d+=this.g;if(v(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Wc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Wc(this,e);f=0;break}}this.h=f;this.j+=b}};
Vc.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;Wc(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function I(){this.g=this.g;this.w=this.w}
I.prototype.g=!1;I.prototype.dispose=function(){this.g||(this.g=!0,this.m())};
function Xc(a,b){a.g?u(void 0)?b.call(void 0):b():(a.w||(a.w=[]),a.w.push(u(void 0)?z(b,void 0):b))}
I.prototype.m=function(){if(this.w)for(;this.w.length;)this.w.shift()()};
function Yc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Zc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ca(d)?Zc.apply(null,d):Yc(d)}}
;function $c(a){if(a.classList)return a.classList;a=a.className;return v(a)&&a.match(/\S+/g)||[]}
function ad(a,b){if(a.classList)var c=a.classList.contains(b);else c=$c(a),c=0<=Ma(c,b);return c}
function bd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ad(a,"inverted-hdpi")&&(a.className=Na($c(a),function(b){return"inverted-hdpi"!=b}).join(" "))}
;var cd="StopIteration"in r?r.StopIteration:{message:"StopIteration",stack:""};function dd(){}
dd.prototype.next=function(){throw cd;};
dd.prototype.G=function(){return this};
function ed(a){if(a instanceof dd)return a;if("function"==typeof a.G)return a.G(!1);if(Ca(a)){var b=0,c=new dd;c.next=function(){for(;;){if(b>=a.length)throw cd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function fd(a,b){if(Ca(a))try{E(a,b,void 0)}catch(c){if(c!==cd)throw c;}else{a=ed(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==cd)throw c;}}}
function gd(a){if(Ca(a))return Sa(a);a=ed(a);var b=[];fd(a,function(c){b.push(c)});
return b}
;function hd(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof hd)for(c=id(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function id(a){jd(a);return a.f.concat()}
m=hd.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||kd;jd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function kd(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.h={};this.i=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&jd(this),!0):!1};
function jd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
m.forEach=function(a,b){for(var c=id(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new hd(this)};
m.G=function(a){jd(this);var b=0,c=this.i,d=this,e=new dd;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw cd;var f=d.f[b++];return a?f:d.h[f]};
return e};function ld(a){var b=[];md(new nd,a,b);return b.join("")}
function nd(){}
function md(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Ba(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),md(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),od(d,c),c.push(":"),md(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":od(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var pd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},qd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function od(a,b){b.push('"',a.replace(qd,function(c){var d=pd[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),pd[c]=d);return d}),'"')}
;function rd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function J(a){this.f=0;this.w=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=ya)try{var b=this;a.call(void 0,function(c){sd(b,2,c)},function(c){sd(b,3,c)})}catch(c){sd(this,3,c)}}
function td(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
td.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var ud=new Gc(function(){return new td},function(a){a.reset()});
function vd(a,b,c){var d=ud.get();d.g=a;d.onRejected=b;d.context=c;return d}
function wd(a){return new J(function(b,c){c(a)})}
J.prototype.then=function(a,b,c){return xd(this,Da(a)?a:null,Da(b)?b:null,c)};
J.prototype.$goog_Thenable=!0;function yd(a,b){return xd(a,null,b,void 0)}
J.prototype.cancel=function(a){0==this.f&&Oc(function(){var b=new zd(a);Ad(this,b)},this)};
function Ad(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,h=c.g;h&&(h.h||(d++,h.f==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.f&&1==d?Ad(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Bd(c),Cd(c,e,3,b)))}a.h=null}else sd(a,3,b)}
function Dd(a,b){a.g||2!=a.f&&3!=a.f||Ed(a);a.i?a.i.next=b:a.g=b;a.i=b}
function xd(a,b,c,d){var e=vd(null,null,null);e.f=new J(function(f,h){e.g=b?function(g){try{var k=b.call(d,g);f(k)}catch(l){h(l)}}:f;
e.onRejected=c?function(g){try{var k=c.call(d,g);!u(k)&&g instanceof zd?h(g):f(k)}catch(l){h(l)}}:h});
e.f.h=a;Dd(a,e);return e.f}
J.prototype.B=function(a){this.f=0;sd(this,2,a)};
J.prototype.C=function(a){this.f=0;sd(this,3,a)};
function sd(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.B,f=a.C;if(d instanceof J){Dd(d,vd(e||ya,f||null,a));var h=!0}else if(rd(d))d.then(e,f,a),h=!0;else{if(Ea(d))try{var g=d.then;if(Da(g)){Fd(d,g,e,f,a);h=!0;break a}}catch(k){f.call(a,k);h=!0;break a}h=!1}}h||(a.w=c,a.f=b,a.h=null,Ed(a),3!=b||c instanceof zd||Gd(a,c))}}
function Fd(a,b,c,d,e){function f(k){g||(g=!0,d.call(e,k))}
function h(k){g||(g=!0,c.call(e,k))}
var g=!1;try{b.call(a,h,f)}catch(k){f(k)}}
function Ed(a){a.l||(a.l=!0,Oc(a.o,a))}
function Bd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
J.prototype.o=function(){for(var a;a=Bd(this);)Cd(this,a,this.f,this.w);this.l=!1};
function Cd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Hd(b,c,d);else try{b.h?b.g.call(b.context):Hd(b,c,d)}catch(e){Id.call(null,e)}Hc(ud,b)}
function Hd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Gd(a,b){a.j=!0;Oc(function(){a.j&&Id.call(null,b)})}
var Id=Ic;function zd(a){D.call(this,a)}
B(zd,D);zd.prototype.name="cancel";function K(a){I.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.o=!!a}
B(K,I);m=K.prototype;m.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function Jd(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=Qa(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.M(b)}}
m.M=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=ya):(c&&Ra(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
m.L=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var h=c[e];Kd(this.f[h+1],this.f[h+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.f[h+1].apply(this.f[h+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.M(c)}}return 0!=e}return!1};
function Kd(a,b,c){Oc(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.h[a];b&&(E(b,this.M,this),delete this.h[a])}else this.f.length=0,this.h={}};
m.m=function(){K.A.m.call(this);this.clear();this.i.length=0};function Ld(a){this.f=a}
Ld.prototype.set=function(a,b){u(b)?this.f.set(a,ld(b)):this.f.remove(a)};
Ld.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ld.prototype.remove=function(a){this.f.remove(a)};function Md(a){this.f=a}
B(Md,Ld);function Nd(a){this.data=a}
function Od(a){return!u(a)||a instanceof Nd?a:new Nd(a)}
Md.prototype.set=function(a,b){Md.A.set.call(this,a,Od(b))};
Md.prototype.g=function(a){a=Md.A.get.call(this,a);if(!u(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Md.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!u(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Pd(a){this.f=a}
B(Pd,Md);Pd.prototype.set=function(a,b,c){if(b=Od(b)){if(c){if(c<A()){Pd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=A()}Pd.A.set.call(this,a,b)};
Pd.prototype.g=function(a){var b=Pd.A.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<A()||c&&c>A())Pd.prototype.remove.call(this,a);else return b}};function Qd(){}
;function Rd(){}
B(Rd,Qd);Rd.prototype.clear=function(){var a=gd(this.G(!0)),b=this;E(a,function(c){b.remove(c)})};function Sd(a){this.f=a}
B(Sd,Rd);m=Sd.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if(!v(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.G=function(a){var b=0,c=this.f,d=new dd;d.next=function(){if(b>=c.length)throw cd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!v(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function Td(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
B(Td,Sd);function Ud(a,b){this.g=a;this.f=null;if(Qb&&!(9<=Number($b))){Vd||(Vd=new hd);this.f=Vd.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Vd.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
B(Ud,Rd);var Wd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Vd=null;function Xd(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Wd[b]})}
m=Ud.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(Xd(a),b);Yd(this)};
m.get=function(a){a=this.f.getAttribute(Xd(a));if(!v(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(Xd(a));Yd(this)};
m.G=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new dd;d.next=function(){if(b>=c.length)throw cd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if(!v(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Yd(this)};
function Yd(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Zd(a,b){this.g=a;this.f=b+"::"}
B(Zd,Rd);Zd.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Zd.prototype.get=function(a){return this.g.get(this.f+a)};
Zd.prototype.remove=function(a){this.g.remove(this.f+a)};
Zd.prototype.G=function(a){var b=this.g.G(!0),c=this,d=new dd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var $d=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function L(a){return a?decodeURI(a):a}
function M(a,b){return b.match($d)[a]||null}
function ae(a,b,c){if(Ba(b))for(var d=0;d<b.length;d++)ae(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function be(a){var b=[],c;for(c in a)ae(c,a[c],b);return b.join("&")}
function ce(a,b){var c=be(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var de=/#|$/;function ee(a,b){var c=a.search(de);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function fe(){this.g=[];this.f=-1}
fe.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
fe.prototype.get=function(a){return!!this.g[a]};
function ge(a){-1==a.f&&(a.f=Pa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function he(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var N=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var ie=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};x("yt.config_",ie,void 0);function O(a){he(ie,arguments)}
function P(a,b){return a in ie?ie[a]:b}
function je(a){return P(a,void 0)}
function ke(){return P("PLAYER_CONFIG",{})}
;function le(){var a=me;y("yt.ads.biscotti.getId_")||x("yt.ads.biscotti.getId_",a,void 0)}
function ne(a){x("yt.ads.biscotti.lastId_",a,void 0)}
;function oe(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Q(b)}}:a}
function Q(a,b,c,d,e){var f=y("yt.logging.errors.log");f?f(a,b,c,d,e):(f=P("ERRORS",[]),f.push([a,b,c,d,e]),O("ERRORS",f))}
function pe(a){Q(a,"WARNING",void 0,void 0,void 0)}
;function qe(){var a=re(),b=[];Va(a,function(c,d){var e=encodeURIComponent(String(d)),f;Ba(c)?f=c:f=[c];E(f,function(h){""==h?b.push(e):b.push(e+"="+encodeURIComponent(String(h)))})});
return b.join("&")}
function se(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),h=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Ba(b[f])?Ta(b[f],h):b[f]=[b[f],h]:b[f]=h}catch(k){var g=Error("Error decoding URL component");g.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?pe(g):Q(g)}}return b}
function te(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=se(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ce(a,e)+d}
;function re(a){var b=ue;a=void 0===a?y("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(ve(b),we(b));b.ca_type="image";a&&(b.bid=a);return b}
function ve(a){var b={};b.dt=Ac;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?C:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!C.navigator&&"unknown"!==typeof C.navigator.javaEnabled&&!!C.navigator.javaEnabled&&C.navigator.javaEnabled();C.screen&&(b.u_h=C.screen.height,b.u_w=C.screen.width,b.u_ah=C.screen.availHeight,b.u_aw=C.screen.availWidth,b.u_cd=C.screen.colorDepth);
C.navigator&&C.navigator.plugins&&(b.u_nplug=C.navigator.plugins.length);C.navigator&&C.navigator.mimeTypes&&(b.u_nmime=C.navigator.mimeTypes.length);return b}
function we(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(t){}try{var e=b.outerWidth;var f=b.outerHeight}catch(t){}try{var h=b.innerWidth;var g=b.innerHeight}catch(t){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,h,g];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var q=(new jc(l.clientWidth,l.clientHeight)).round()}catch(t){q=new jc(-12245933,-12245933)}k=q;q={};l=new fe;r.SVGElement&&
r.document.createElementNS&&l.set(0);c=yc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);r.crypto&&r.crypto.subtle&&l.set(3);r.TextDecoder&&r.TextEncoder&&l.set(4);l=ge(l);q.bc=l;q.bih=k.height;q.biw=k.width;q.brdim=b.join();a=a.g;return q.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,q.wgl=!!C.WebGLRenderingContext,q}
var ue=new function(){var a=window.document;this.f=window;this.g=a};
x("yt.ads_.signals_.getAdSignalsString",function(){return qe()},void 0);A();function xe(a,b){var c=R(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function R(a){return P("EXPERIMENT_FLAGS",{})[a]}
;var ye=u(XMLHttpRequest)?function(){return new XMLHttpRequest}:u(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function ze(){if(!ye)return null;var a=ye();return"open"in a?a:null}
function Ae(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function S(a,b){Da(a)&&(a=oe(a));return window.setTimeout(a,b)}
function T(a){window.clearTimeout(a)}
;var Be={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ce="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
De=!1;
function Ee(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=M(1,a),e=L(M(3,a));d&&e?(d=c,c=a.match($d),d=d.match($d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?L(M(3,c))==e&&(Number(M(4,c))||null)==(Number(M(4,a))||null):!0;d=!!R("web_ajax_ignore_global_headers_if_set");for(var f in Be)e=P(Be[f]),!e||!c&&!Fe(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Fe(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(R("pass_biscotti_id_in_header_ajax")||R("pass_biscotti_id_in_header_ajax_tv"))&&(c||
Fe(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=qe());return b}
function Ge(a){var b=window.location.search,c=L(M(3,a)),d=L(M(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=se(b),f={};E(Ce,function(h){e[h]&&(f[h]=e[h])});
return te(a,f||{},!1)}
function Fe(a,b){var c=P("CORS_HEADER_WHITELIST")||{},d=L(M(3,a));return d?(c=c[d])?0<=Ma(c,b):!1:!0}
function He(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ie(a,b);var d=Je(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(h){if(!e){e=!0;f&&T(f);var g=h.ok,k=function(l){l=l||{};var q=b.context||r;g?b.onSuccess&&b.onSuccess.call(q,l,h):b.onError&&b.onError.call(q,l,h);b.da&&b.da.call(q,l,h)};
"JSON"==(b.format||"JSON")&&(g||400<=h.status&&500>h.status)?h.json().then(k,function(){k(null)}):k(null)}});
b.ha&&0<b.timeout&&(f=S(function(){e||(e=!0,T(f),b.ha.call(b.context||r))},b.timeout))}else Ke(a,b)}
function Ke(a,b){var c=b.format||"JSON";a=Ie(a,b);var d=Je(a,b),e=!1,f,h=Le(a,function(g){if(!e){e=!0;f&&T(f);var k=Ae(g),l=null,q=400<=g.status&&500>g.status,t=500<=g.status&&600>g.status;if(k||q||t)l=Me(c,g,b.lb);if(k)a:if(g&&204==g.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};q=b.context||r;k?b.onSuccess&&b.onSuccess.call(q,g,l):b.onError&&b.onError.call(q,g,l);b.da&&b.da.call(q,g,l)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.N&&0<b.timeout&&(f=S(function(){e||(e=!0,h.abort(),T(f),b.N.call(b.context||r,h))},b.timeout));
return h}
function Ie(a,b){b.va&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.Ua;d&&(d[c]&&delete d[c],a=te(a,d||{},!0));return a}
function Je(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.D,h=je("XSRF_FIELD_NAME"),g;b.headers&&(g=b.headers["Content-Type"]);b.mb||L(M(3,a))&&!b.withCredentials&&L(M(3,a))!=document.location.hostname||"POST"!=b.method||g&&"application/x-www-form-urlencoded"!=g||b.D&&b.D[h]||(f||(f={}),f[c]=d);f&&v(e)&&(e=se(e),eb(e,f),e=b.ia&&"JSON"==b.ia?JSON.stringify(e):be(e));f=e||f&&!Za(f);!De&&f&&"POST"!=b.method&&(De=!0,Q(Error("AJAX request with postData should use POST")));
return e}
function Me(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ne(b):null)d={},E(b.getElementsByTagName("*"),function(e){d[e.tagName]=Oe(e)})}c&&Pe(d);
return d}
function Pe(a){if(Ea(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Ib(a[b],null);a[c]=d}else Pe(a[b])}}
function Ne(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Oe(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Qe(a,b){b.method="POST";b.D||(b.D={});Ke(a,b)}
function Le(a,b,c,d,e,f,h){function g(){4==(k&&"readyState"in k?k.readyState:0)&&b&&oe(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ze();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",g,!1):k.onreadystatechange=g;R("debug_forward_web_query_parameters")&&(a=Ge(a));k.open(c,a,!0);f&&(k.responseType=f);h&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ee(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Re={},Se=0;
function Te(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Bb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof F||(a="object"==typeof a&&a.J?a.I():String(a),yb.test(a)||(a="about:invalid#zClosurez"),a=Ab(a)),b=xb(a).toString(),"about:invalid#zClosurez"===b?a="":(b instanceof Eb?a=b:(d="object"==typeof b,a=null,d&&b.ba&&(a=b.Y()),b=ob(d&&b.J?b.I():String(b)),a=Ib(b,a)),a=Hb(a).toString(),a=encodeURIComponent(String(ld(a)))),/^[\s\xa0]*$/.test(a)||(a=nc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Le(a,b,"POST",e,d):P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Le(a,b,"GET","",d):((d=ie.EXPERIMENT_FLAGS)&&d.web_use_beacon_api_for_ad_click_server_pings&&-1!=L(M(5,a)).indexOf("/aclk")&&"1"===ee(a,"ae")&&"1"===ee(a,"act")?Ue(a)?(b&&b(),d=!0):d=!1:d=!1,d||Ve(a,b)))}
function Ue(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Ve(a,b){var c=new Image,d=""+Se++;Re[d]=c;c.onload=c.onerror=function(){b&&Re[d]&&b();delete Re[d]};
c.src=a}
;var We={},Xe=0;
function Ye(a,b,c,d,e,f){f=f||{};f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Xe||(R("console_log_js_exceptions")&&(e=a,c=[],c.push("Name: "+e.name),c.push("Message: "+e.message),e.hasOwnProperty("params")&&c.push("Error Params: "+JSON.stringify(e.params)),c.push("File name: "+e.fileName),c.push("Stacktrace: "+e.stack),
window.console.log(c.join("\n"),e)),e=a.stacktrace,c=a.columnNumber,a.hasOwnProperty("params")&&(d=String(JSON.stringify(a.params)),f.params=d.substr(0,500)),a=fc(a),e=e||a.stack,d=a.lineNumber.toString(),isNaN(d)||isNaN(c)||(d=d+":"+c),window.yterr&&Da(window.yterr)&&window.yterr(a),We[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={Ua:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:d,level:b,"client.name":f.name},D:{url:P("PAGE_NAME",window.location.href),
file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);e&&(b.D.stack=e);for(var h in f)b.D["client."+h]=f[h];if(h=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var g in h)b.D[g]=h[g];Ke(P("ECATCHER_REPORT_HOST","")+"/error_204",b);We[a.message]=!0;Xe++}}
;var Ze=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};x("yt.msgs_",Ze,void 0);function $e(a){he(Ze,arguments)}
;function af(a){a&&(a.dataset?a.dataset[bf("loaded")]="true":a.setAttribute("data-loaded","true"))}
function cf(a,b){return a?a.dataset?a.dataset[bf(b)]:a.getAttribute("data-"+b):null}
var df={};function bf(a){return df[a]||(df[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var ef=y("ytPubsubPubsubInstance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.M;K.prototype.publish=K.prototype.L;K.prototype.clear=K.prototype.clear;x("ytPubsubPubsubInstance",ef,void 0);var ff=y("ytPubsubPubsubSubscribedKeys")||{};x("ytPubsubPubsubSubscribedKeys",ff,void 0);var gf=y("ytPubsubPubsubTopicToKeys")||{};x("ytPubsubPubsubTopicToKeys",gf,void 0);var hf=y("ytPubsubPubsubIsSynchronous")||{};x("ytPubsubPubsubIsSynchronous",hf,void 0);
function jf(a,b){var c=kf();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){ff[d]&&b.apply(window,e)};
try{hf[a]?f():S(f,0)}catch(h){Q(h)}},void 0);
ff[d]=!0;gf[a]||(gf[a]=[]);gf[a].push(d);return d}return 0}
function lf(a){var b=kf();b&&("number"==typeof a?a=[a]:v(a)&&(a=[parseInt(a,10)]),E(a,function(c){b.unsubscribeByKey(c);delete ff[c]}))}
function mf(a,b){var c=kf();c&&c.publish.apply(c,arguments)}
function nf(a){var b=kf();if(b)if(b.clear(a),a)of(a);else for(var c in gf)of(c)}
function kf(){return y("ytPubsubPubsubInstance")}
function of(a){gf[a]&&(a=gf[a],E(a,function(b){ff[b]&&delete ff[b]}),a.length=0)}
;var pf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,qf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function rf(a,b,c){c=void 0===c?null:c;if(window.spf){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(pf,""),c=c.replace(qf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else sf(a,b,c)}
function sf(a,b,c){c=void 0===c?null:c;var d=tf(a),e=document.getElementById(d),f=e&&cf(e,"loaded"),h=e&&!f;f?b&&b():(b&&(f=jf(d,b),b=""+(b[Fa]||(b[Fa]=++Ga)),uf[b]=f),h||(e=vf(a,d,function(){cf(e,"loaded")||(af(e),mf(d),S(Ja(nf,d),0))},c)))}
function vf(a,b,c,d){d=void 0===d?null:d;var e=document.createElement("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Mb(e,rc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function wf(a){a=tf(a);var b=document.getElementById(a);b&&(nf(a),b.parentNode.removeChild(b))}
function xf(a,b){if(a&&b){var c=""+(b[Fa]||(b[Fa]=++Ga));(c=uf[c])&&lf(c)}}
function tf(a){var b=document.createElement("a");Kb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ob(a)}
var uf={};function yf(){}
function zf(a,b){return Af(a,1,b)}
;function Bf(){}
n(Bf,yf);function Af(a,b,c){isNaN(c)&&(c=void 0);var d=y("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):S(a,c||0)}
function Cf(a){if(!isNaN(a)){var b=y("yt.scheduler.instance.cancelJob");b?b(a):T(a)}}
Bf.prototype.start=function(){var a=y("yt.scheduler.instance.start");a&&a()};
Bf.prototype.pause=function(){var a=y("yt.scheduler.instance.pause");a&&a()};
za(Bf);Bf.getInstance();var Df=[],Ef=!1;function Ff(){if("1"!=Wa(ke(),"args","privembed")){var a=function(){Ef=!0;"google_ad_status"in window?O("DCLKSTAT",1):O("DCLKSTAT",2)};
rf("//static.doubleclick.net/instream/ad_status.js",a);Df.push(zf(function(){Ef||"google_ad_status"in window||(xf("//static.doubleclick.net/instream/ad_status.js",a),Ef=!0,O("DCLKSTAT",3))},5E3))}}
function Gf(){return parseInt(P("DCLKSTAT",0),10)}
;function Hf(){this.g=!1;this.f=null}
Hf.prototype.initialize=function(a,b,c,d,e){var f=this;b?(this.g=!0,rf(b,function(){f.g=!1;if(window.botguard)If(f,c,d);else{wf(b);var h=Error("Unable to load Botguard");h.params="from "+b;pe(h)}},e)):a&&(eval(a),window.botguard?If(this,c,d):pe(Error("Unable to load Botguard from JS")))};
function If(a,b,c){try{a.f=new window.botguard.bg(b)}catch(d){pe(d)}c&&c(b)}
Hf.prototype.dispose=function(){this.f=null};var Jf=new Hf,Kf=!1,Lf=0,Mf="";function Nf(a){R("botguard_periodic_refresh")?Lf=N():R("botguard_always_refresh")&&(Mf=a)}
function Of(a){if(a){if(Jf.g)return!1;if(R("botguard_periodic_refresh"))return 72E5<N()-Lf;if(R("botguard_always_refresh"))return Mf!=a}else return!1;return!Kf}
function Pf(){return!!Jf.f}
function Qf(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Jf.f?Jf.f.invoke(void 0,void 0,a):null}
;var Rf=0;x("ytDomDomGetNextId",y("ytDomDomGetNextId")||function(){return++Rf},void 0);var Sf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Tf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){if(R("kevlar_js_fixes"))return;throw c;}for(var b in a)b in Sf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}
function Uf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
Tf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Tf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Tf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ya=y("ytEventsEventsListeners")||{};x("ytEventsEventsListeners",Ya,void 0);var Vf=y("ytEventsEventsCounter")||{count:0};x("ytEventsEventsCounter",Vf,void 0);
function Wf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Xa(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,h=Ea(e[4])&&Ea(d)&&ab(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||h)})}
var Xf=Ua(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Wf(a,b,c,d);if(e)return e;e=++Vf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(g){g=new Tf(g);if(!qc(g.relatedTarget,function(k){return k==a}))return g.currentTarget=a,g.type=b,c.call(a,g)}:function(g){g=new Tf(g);
g.currentTarget=a;return c.call(a,g)};
h=oe(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Xf()||"boolean"==typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);Ya[e]=[a,b,c,h,d];return e}
function Yf(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in Ya){var c=Ya[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Xf()||"boolean"==typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Ya[b]}}))}
;function Zf(a){this.B=a;this.f=null;this.j=0;this.o=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.F=V(window,"mousemove",z(this.H,this));a=z(this.C,this);Da(a)&&(a=oe(a));this.K=window.setInterval(a,25)}
B(Zf,I);Zf.prototype.H=function(a){u(a.f)||Uf(a);var b=a.f;u(a.g)||Uf(a);this.f=new ic(b,a.g)};
Zf.prototype.C=function(){if(this.f){var a=N();if(0!=this.j){var b=this.o,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.B();this.l=d}this.j=a;this.o=this.f;this.i=(this.i+1)%4}};
Zf.prototype.m=function(){window.clearInterval(this.K);Yf(this.F)};var $f={};
function ag(a){var b=void 0===a?{}:a;a=void 0===b.wa?!0:b.wa;b=void 0===b.Ja?!1:b.Ja;if(null==y("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?A()-Math.max(c,0):-1;x("_lact",c,window);x("_fact",c,window);-1==c&&bg();V(document,"keydown",bg);V(document,"keyup",bg);V(document,"mousedown",bg);V(document,"mouseup",bg);a&&(b?V(window,"touchmove",function(){cg("touchmove",200)},{passive:!0}):(V(window,"resize",function(){cg("resize",200)}),V(window,"scroll",function(){cg("scroll",200)})));
new Zf(function(){cg("mouse",100)});
V(document,"touchstart",bg,{passive:!0});V(document,"touchend",bg,{passive:!0})}}
function cg(a,b){$f[a]||($f[a]=!0,zf(function(){bg();$f[a]=!1},b))}
function bg(){null==y("_lact",window)&&ag();var a=A();x("_lact",a,window);-1==y("_fact",window)&&x("_fact",a,window);(a=y("ytglobal.ytUtilActivityCallback_"))&&a()}
function dg(){var a=y("_lact",window);return null==a?-1:Math.max(A()-a,0)}
;var eg=Math.pow(2,16)-1,fg=null,gg=0,hg={log_event:"events",log_interaction:"interactions"},ig=Object.create(null);ig.log_event="GENERIC_EVENT_LOGGING";ig.log_interaction="INTERACTION_LOGGING";var jg=new Set(["log_event"]),kg={},lg=0,mg=0,W=y("ytLoggingTransportLogPayloadsQueue_")||{};x("ytLoggingTransportLogPayloadsQueue_",W,void 0);var ng=y("ytLoggingTransportTokensToCttTargetIds_")||{};x("ytLoggingTransportTokensToCttTargetIds_",ng,void 0);var og=y("ytLoggingTransportDispatchedStats_")||{};
x("ytLoggingTransportDispatchedStats_",og,void 0);x("ytytLoggingTransportCapturedTime_",y("ytLoggingTransportCapturedTime_")||{},void 0);function pg(){T(lg);T(mg);mg=0;if(!Za(W)){for(var a in W){var b=kg[a];b&&(qg(a,b),delete W[a])}Za(W)||rg()}}
function rg(){R("web_gel_timeout_cap")&&!mg&&(mg=S(pg,3E4));T(lg);lg=S(pg,P("LOGGING_BATCH_TIMEOUT",xe("web_gel_debounce_ms",1E4)))}
function sg(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
function qg(a,b){var c=hg[a],d=og[a]||{};og[a]=d;var e=Math.round(N());for(l in W[a]){var f=cb,h=b.f;h={client:{hl:h.Ca,gl:h.Ba,clientName:h.za,clientVersion:h.Aa}};var g=window.devicePixelRatio;g&&1!=g&&(h.client.screenDensityFloat=String(g));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(h.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});f=f({context:h});f[c]=sg(a,l);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(h=ng[l])a:{var k=l;if(h.videoId)g=
"VIDEO";else if(h.playlistId)g="PLAYLIST";else break a;f.credentialTransferTokenTargetId=h;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:k,scope:g}]}delete ng[l];f.requestTimeMs=e;if(h=je("EVENT_ID"))g=(P("BATCH_CLIENT_COUNTER",void 0)||0)+1,g>eg&&(g=1),O("BATCH_CLIENT_COUNTER",g),h={serializedEventId:h,clientCounter:g},f.serializedClientEventId=h,fg&&gg&&R("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:fg,roundtripMs:gg}),
fg=h,gg=0;tg(b,a,f,{retry:jg.has(a),onSuccess:z(ug,this,N())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var l=d.diffCount||0;d.averageTimeBetweenDispatchesMs=l?(d.averageTimeBetweenDispatchesMs*l+c)/(l+1):c;d.diffCount=l+1}d.previousDispatchMs=e}
function ug(a){gg=Math.round(N()-a)}
;function vg(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||N());f[a]=b;f.context={lastActivityMs:String(d?-1:dg())};e?(a={},e.videoId?a.videoId=e.videoId:e.playlistId&&(a.playlistId=e.playlistId),ng[e.token]=a,e=sg("log_event",e.token)):e=sg("log_event");e.push(f);c&&(kg.log_event=new c);e.length>=(xe("web_logging_max_batch")||20)?pg():rg()}
;function wg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.ib||P("AUTHORIZATION"))||(a?b="Bearer "+y("gapi.auth.getToken")().hb:b=Fc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
function xg(a){a=Object.assign({},a);delete a.Authorization;var b=Fc();if(b){var c=new Vc;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();Ca(b);if(!bc)for(bc={},cc={},c=0;65>c;c++)bc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),cc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=cc;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],h=e+1<b.length,g=h?b[e+1]:0,k=e+2<b.length,l=k?b[e+2]:0,q=f>>2;f=(f&3)<<4|g>>4;g=(g&15)<<
2|l>>6;l&=63;k||(l=64,h||(g=64));d.push(c[q],c[f],c[g],c[l])}a.hash=d.join("")}return a}
;function yg(a,b,c,d){ec.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function zg(){var a=new Td;(a=a.isAvailable()?new Zd(a,"yt.innertube"):null)||(a=new Ud("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Pd(a):null;this.g=document.domain||window.location.hostname}
zg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,A()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ld(b))}catch(f){return}else e=escape(b);yg(a,e,c,this.g)};
zg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=ec.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
zg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;ec.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ag=new zg;function Bg(a,b,c,d){if(d)return null;d=Ag.get("nextId",!0)||1;var e=Ag.get("requests",!0)||{};e[d]={method:a,request:b,authState:xg(c),requestTime:Math.round(N())};Ag.set("nextId",d+1,86400,!0);Ag.set("requests",e,86400,!0);return d}
function Cg(a){var b=Ag.get("requests",!0)||{};delete b[a];Ag.set("requests",b,86400,!0)}
function Dg(a){var b=Ag.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(N())-d.requestTime)){var e=d.authState,f=xg(wg(!1));ab(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(N())),tg(a,d.method,e,{}));delete b[c]}}Ag.set("requests",b,86400,!0)}}
;function Eg(a){var b=this;this.f=a||{xa:je("INNERTUBE_API_KEY"),ya:je("INNERTUBE_API_VERSION"),za:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Aa:je("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ca:je("INNERTUBE_CONTEXT_HL"),Ba:je("INNERTUBE_CONTEXT_GL"),Da:je("INNERTUBE_HOST_OVERRIDE")||"",Ea:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};Af(function(){Dg(b)},0,5E3)}
function tg(a,b,c,d){!P("VISITOR_DATA")&&.01>Math.random()&&Q(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",D:c,ia:"JSON",N:function(){d.N()},
ha:d.N,onSuccess:function(w,p){if(d.onSuccess)d.onSuccess(p)},
ga:function(w){if(d.onSuccess)d.onSuccess(w)},
onError:function(w,p){if(d.onError)d.onError(p)},
nb:function(w){if(d.onError)d.onError(w)},
timeout:d.timeout,withCredentials:!0},f="",h=a.f.Da;h&&(f=h);h=a.f.Ea||!1;var g=wg(h,f,d);Object.assign(e.headers,g);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=""+f+("/youtubei/"+a.f.ya+"/"+b)+"?alt=json&key="+a.f.xa,l;if(d.retry&&R("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=Bg(b,c,g,h))){var q=e.onSuccess,t=e.ga;e.onSuccess=function(w,p){Cg(l);q(w,p)};
c.ga=function(w,p){Cg(l);t(w,p)}}try{R("use_fetch_for_op_xhr")?He(k,e):Qe(k,e)}catch(w){if("InvalidAccessError"==w)l&&(Cg(l),l=0),Q(Error("An extension is blocking network request."),"WARNING");
else throw w;}l&&Af(function(){Dg(a)},0,5E3)}
;var Fg=A().toString();
function Gg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=A();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Fg)for(a=1,b=0;b<Fg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Fg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Hg=y("ytLoggingTimeDocumentNonce_")||Gg();x("ytLoggingTimeDocumentNonce_",Hg,void 0);function Ig(a){this.f=a}
function Jg(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,null!=a.f.veCounter&&(b.veCounter=a.f.veCounter),null!=a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=Jg(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
Ig.prototype.toString=function(){return JSON.stringify(Jg(this))};
var Kg=1;function Lg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Mg(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Ng(a){return P(Mg(void 0===a?0:a),void 0)}
x("yt_logging_screen.getRootVeType",Ng,void 0);function Og(){var a=Ng(0),b;a?b=new Ig({veType:a,youtubeData:void 0}):b=null;return b}
function Pg(a){a=void 0===a?0:a;var b=P(Lg(a));b||0!=a||(b=P("EVENT_ID"));return b?b:null}
x("yt_logging_screen.getCurrentCsn",Pg,void 0);function Qg(a,b,c){c=void 0===c?0:c;if(a!==P(Lg(c))||b!==P(Mg(c)))O(Lg(c),a),O(Mg(c),b),0==c&&(b=function(){setTimeout(function(){a&&vg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Hg,clientScreenNonce:a},Eg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
x("yt_logging_screen.setCurrentScreen",Qg,void 0);function Rg(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=L(M(3,window.location.href));f&&e.push(f);f=L(M(3,d));if(0<=Ma(e,f)||!f&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(e=document.createElement("a"),Kb(e,d),d=e.href),d){f=d.match($d);d=f[5];e=f[6];f=f[7];var h="";d&&(h+=d);e&&(h+="?"+e);f&&(h+="#"+f);d=h;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||Pg();if(g){var g=
parseInt(g,10);isFinite(g)&&0<g&&(d="ST-"+Ob(d).toString(36),b=b?be(b):"",yg(d,b,g||5))}else g="ST-"+Ob(d).toString(36),b=b?be(b):"",yg(g,b,5)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var l=void 0===l?"":l;var q=void 0===q?window:q;c=q.location;a=ce(a,k)+l;a=a instanceof F?a:zb(a);c.href=xb(a)}return!0}
;function Sg(a,b,c){a={csn:a,parentVe:Jg(b),childVes:Oa(c,function(d){return Jg(d)})};
c=ba(c);for(b=c.next();!b.done;b=c.next())b=Jg(b.value),(Za(b)||!b.trackingParams&&!b.veType)&&Ye(Error("Child VE logged with no data"),"WARNING");vg("visualElementAttached",a,Eg,void 0,void 0)}
;function Tg(a){a=a||{};var b={enablejsapi:1},c={};this.url=a.url||"";this.args=a.args||bb(b);this.assets=a.assets||{};this.attrs=a.attrs||bb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Tg.prototype.clone=function(){var a=new Tg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Aa(c)?a[b]=bb(c):a[b]=c}return a};function Ug(){I.call(this);this.f=[]}
n(Ug,I);Ug.prototype.m=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.kb)}I.prototype.m.call(this)};var Vg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Wg(a){a=a||"";if(window.spf){var b=a.match(Vg);spf.style.load(a,b?b[1]:"",void 0)}else Xg(a)}
function Xg(a){var b=Yg(a),c=document.getElementById(b),d=c&&cf(c,"loaded");d||c&&!d||(c=Zg(a,b,function(){cf(c,"loaded")||(af(c),mf(b),S(Ja(nf,b),0))}))}
function Zg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=rc(a);d.rel="stylesheet";d.href=lb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Yg(a){var b=document.createElement("A");a=Ab(a);Kb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ob(b)}
;function $g(a,b){I.call(this);this.l=this.T=a;this.F=b;this.o=!1;this.api={};this.R=this.C=null;this.H=new K;Xc(this,Ja(Yc,this.H));this.i={};this.O=this.S=this.h=this.X=this.f=null;this.K=!1;this.j=this.B=null;this.U={};this.ma=["onReady"];this.W=null;this.ea=NaN;this.P={};ah(this);this.V("WATCH_LATER_VIDEO_ADDED",this.Ga.bind(this));this.V("WATCH_LATER_VIDEO_REMOVED",this.Ha.bind(this));this.V("onAdAnnounce",this.oa.bind(this));this.na=new Ug(this);Xc(this,Ja(Yc,this.na))}
n($g,I);m=$g.prototype;m.getId=function(){return this.F};
m.loadNewVideoConfig=function(a){if(!this.g){a instanceof Tg||(a=new Tg(a));this.X=a;this.f=a.clone();this.h=this.f.attrs.id||this.h;"video-player"==this.h&&(this.h=this.F,this.f.attrs.id=this.F);this.l.id==this.h&&(this.h+="-player",this.f.attrs.id=this.h);this.f.args.enablejsapi="1";this.f.args.playerapiid=this.F;this.S||(this.S=bh(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.l.style.width=zc(Number(a)||a);if(a=this.f.attrs.height)this.l.style.height=
zc(Number(a)||a);ch(this);this.o&&dh(this)}};
m.sa=function(){return this.X};
function dh(a){a.f.loaded||(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function eh(a){var b=!0,c=fh(a);c&&a.f&&(a=a.f,b=cf(c,"version")==a.assets.js);return b&&!!y("yt.player.Application.create")}
function ch(a){if(!a.g&&!a.K){var b=eh(a);if(b&&"html5"==(fh(a)?"html5":null))a.O="html5",a.o||gh(a);else if(hh(a),a.O="html5",b&&a.j)a.T.appendChild(a.j),gh(a);else{a.f.loaded=!0;var c=!1;a.B=function(){c=!0;var d=a.f.clone();y("yt.player.Application.create")(a.T,d);gh(a)};
a.K=!0;b?a.B():(rf(a.f.assets.js,a.B),Wg(a.f.assets.css),ih(a)&&!c&&x("yt.player.Application.create",null,void 0))}}}
function fh(a){var b=kc(a.h);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.h));return b}
function gh(a){if(!a.g){var b=fh(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.K=!1,b.isNotServable&&b.isNotServable(a.f.args.video_id)||jh(a)):a.ea=S(function(){gh(a)},50)}}
function jh(a){ah(a);a.o=!0;var b=fh(a);b.addEventListener&&(a.C=kh(a,b,"addEventListener"));b.removeEventListener&&(a.R=kh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=kh(a,b,e))}for(var f in a.i)a.C(f,a.i[f]);dh(a);a.S&&a.S(a.api);a.H.L("onReady",a.api)}
function kh(a,b,c){var d=b[c];return function(){try{return a.W=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.W=e,pe(e))}}}
function ah(a){a.o=!1;if(a.R)for(var b in a.i)a.R(b,a.i[b]);for(var c in a.P)T(parseInt(c,10));a.P={};a.C=null;a.R=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.V.bind(a);a.api.removeEventListener=a.La.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.ta.bind(a);a.api.getPlayerType=a.ua.bind(a);a.api.getCurrentVideoConfig=a.sa.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Fa.bind(a)}
m.Fa=function(){return this.o};
m.V=function(a,b){var c=this,d=bh(this,b);if(d){if(!(0<=Ma(this.ma,a)||this.i[a])){var e=lh(this,a);this.C&&this.C(a,e)}this.H.subscribe(a,d);"onReady"==a&&this.o&&S(function(){d(c.api)},0)}};
m.La=function(a,b){if(!this.g){var c=bh(this,b);c&&Jd(this.H,a,c)}};
function bh(a,b){var c=b;if("string"==typeof b){if(a.U[b])return a.U[b];c=function(){var d=y(b);d&&d.apply(r,arguments)};
a.U[b]=c}return c?c:null}
function lh(a,b){var c="ytPlayer"+b+a.F;a.i[b]=c;r[c]=function(d){var e=S(function(){if(!a.g){a.H.L(b,d);var f=a.P,h=String(e);h in f&&delete f[h]}},0);
$a(a.P,String(e))};
return c}
m.oa=function(a){mf("a11y-announce",a)};
m.Ga=function(a){mf("WATCH_LATER_VIDEO_ADDED",a)};
m.Ha=function(a){mf("WATCH_LATER_VIDEO_REMOVED",a)};
m.ua=function(){return this.O||(fh(this)?"html5":null)};
m.ta=function(){return this.W};
function hh(a){a.cancel();ah(a);a.O=null;a.f&&(a.f.loaded=!1);var b=fh(a);b&&(eh(a)||!ih(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.T;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&xf(this.f.assets.js,this.B);T(this.ea);this.K=!1};
m.m=function(){hh(this);if(this.j&&this.f&&this.j.destroy)try{this.j.destroy()}catch(b){Q(b)}this.U=null;for(var a in this.i)r[this.i[a]]=null;this.X=this.f=this.api=null;delete this.T;delete this.l;I.prototype.m.call(this)};
function ih(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var mh={},nh="player_uid_"+(1E9*Math.random()>>>0);function oh(a){var b="player";b=v(b)?kc(b):b;var c=nh+"_"+(b[Fa]||(b[Fa]=++Ga)),d=mh[c];if(d)return d.loadNewVideoConfig(a),d.api;d=new $g(b,c);mh[c]=d;mf("player-added",d.api);Xc(d,Ja(ph,d));S(function(){d.loadNewVideoConfig(a)},0);
return d.api}
function ph(a){delete mh[a.getId()]}
;function qh(a,b,c){var d=Eg;P("ytLoggingEventsDefaultDisabled",!1)&&Eg==Eg&&(d=null);vg(a,b,d,c,void 0)}
;var rh=y("ytLoggingLatencyUsageStats_")||{};x("ytLoggingLatencyUsageStats_",rh,void 0);var sh=0;function th(a){rh[a]=rh[a]||{count:0};var b=rh[a];b.count++;b.time=N();sh||(sh=Af(uh,0,5E3));if(5<b.count){if(6==b.count&&1>1E5*Math.random()){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;Ye(c,b)}return!0}return!1}
function uh(){var a=N(),b;for(b in rh)6E4<a-rh[b].time&&delete rh[b];sh=0}
;function vh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!wh(a)||c.some(function(e){return!wh(e)}))throw Error("Only objects may be merged.");
c=ba(c);for(d=c.next();!d.done;d=c.next())xh(a,d.value)}
function xh(a,b){for(var c in b)if(wh(b[c])){if(c in a&&!wh(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});xh(a[c],b[c])}else if(yh(b[c])){if(c in a&&!yh(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);zh(a[c],b[c])}else a[c]=b[c];return a}
function zh(a,b){for(var c=ba(b),d=c.next();!d.done;d=c.next())d=d.value,wh(d)?a.push(xh({},d)):yh(d)?a.push(zh([],d)):a.push(d);return a}
function wh(a){return"object"===typeof a&&!Array.isArray(a)}
function yh(a){return"object"===typeof a&&Array.isArray(a)}
;function Ah(a,b){this.version=a;this.args=b}
;function Bh(a){this.topic=a}
Bh.prototype.toString=function(){return this.topic};var Ch=y("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.M;K.prototype.publish=K.prototype.L;K.prototype.clear=K.prototype.clear;x("ytPubsub2Pubsub2Instance",Ch,void 0);x("ytPubsub2Pubsub2SubscribedKeys",y("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);x("ytPubsub2Pubsub2TopicToKeys",y("ytPubsub2Pubsub2TopicToKeys")||{},void 0);x("ytPubsub2Pubsub2IsAsync",y("ytPubsub2Pubsub2IsAsync")||{},void 0);
x("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Dh(a,b){var c=y("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Eh(){var a=P("TIMING_TICK_EXPIRATION");a||(a={},O("TIMING_TICK_EXPIRATION",a));return a}
function Fh(){var a=Eh(),b;for(b in a)Cf(a[b]);O("TIMING_TICK_EXPIRATION",{})}
;function Gh(a,b){Ah.call(this,1,arguments)}
n(Gh,Ah);function Hh(a,b){Ah.call(this,1,arguments)}
n(Hh,Ah);var Ih=new Bh("aft-recorded"),Jh=new Bh("timing-sent");var Kh={vc:!0},Y={},Lh=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.csn="clientScreenNonce",Y.docid="videoId",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id=
"kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",
Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Mh="ap c cver cbrand cmodel ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
Nh="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist".split(" "),Oh={},Ph=(Oh.pa="LATENCY_ACTION_",Oh.yt_pt="LATENCY_PLAYER_",Oh.yt_vst="VIDEO_STREAM_TYPE_",Oh),Qh=!1;
function Rh(){Sh().info.yt_lt="hot_bg";if(Th()){var a="hot_bg";Uh().info_yt_lt=a;if("yt_lt"in Lh){var b=Lh.yt_lt;0<=Ma(Nh,b)&&(a=!!a);"yt_lt"in Ph&&(a=Ph.yt_lt+a.toUpperCase());var c={};b=b.split(".");for(var d=c,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=a;Th()&&(a=Sh(),"gelInfo"in a||(a.gelInfo={}),vh(a.gelInfo,c),a=Vh(),b=Object.keys(c).join(""),th("info_"+b+"_"+a)||(c.clientActionNonce=a,qh("latencyActionInfo",c)))}else 0<=Ma(Mh,"yt_lt")||(c=Error("Unknown label logged with GEL CSI"),
c.params="yt_lt",pe(c))}}
function Wh(){var a=Xh();if(a.aft)return a.aft;for(var b=P("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
z(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||ya,X);function Vh(){var a=Sh().nonce;a||(a=Gg(),Sh().nonce=a);return a}
function Xh(){return Sh().tick}
function Uh(){var a=Sh();"gel"in a||(a.gel={});return a.gel}
function Sh(){var a;(a=y("ytcsi.data_"))||(a={tick:{},info:{}},Ka("ytcsi.data_",a));return a}
function Yh(){var a=Xh(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Sh().info.yt_pvis}
function Th(){return!!R("csi_on_gel")||!!Sh().useGel}
function Zh(){Fh();if(!Th()){var a=Xh(),b=Sh().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&Ba(a[f])){var d=f.slice(1);if(d in Kh){var e=Oa(a[f],function(l){return Math.round(l-c)});
b["all_"+d]=e.join()}delete a[f]}e=P("CSI_SERVICE_NAME","youtube");var f={v:2,s:e,action:P("TIMING_ACTION",void 0)};d=Rh.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var h=window.location.protocol+y("ytplayer.config.assets.js");(h=X.getEntriesByName?X.getEntriesByName(h)[0]:null)?b.h5jse=Math.round(b.h5jse-h.responseEnd):delete b.h5jse}a.aft=Wh();Yh()&&"youtube"==e&&(Rh(),e=a.vc,h=a.pbs,delete a.aft,b.aft=Math.round(h-e));for(var g in b)"_"!=g.charAt(0)&&(f[g]=b[g]);a.ps=N();g={};e=[];for(var k in a)"_"!=
k.charAt(0)&&(h=Math.round(a[k]-c),g[k]=h,e.push(k+"."+h));f.rt=e.join(",");(a=y("ytdebug.logTiming"))&&a(f,g);$h(f,!!b.ap);Dh(Jh,new Hh(g.aft+(d||0),void 0))}}
function $h(a,b){if(R("debug_csi_data")){var c=y("yt.timing.csiData");c||(c=[],x("yt.timing.csiData",c,void 0));c.push({page:location.href,time:new Date,args:a})}c="";for(var d in a)c+="&"+d+"="+a[d];d="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var e=void 0===e?"":e;Ue(d,e)||Te(d,void 0,void 0,void 0,e)}else Te(d);Ka("yt.timing.pingSent_",!0)}
;function ai(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function bi(a,b,c){v(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return ci(a)}
function ci(a,b,c){if(Ea(a)){b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function di(a,b,c,d){if(Ea(a)&&!Ba(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};v(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
;function ei(a){I.call(this);this.f=a;this.f.subscribe("command",this.ja,this);this.h={};this.j=!1}
B(ei,I);m=ei.prototype;m.start=function(){this.j||this.g||(this.j=!0,fi(this.f,"RECEIVING"))};
m.ja=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":v(d.event)&&(a=d.event,a in this.h||(c=z(this.Na,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":v(d.event)&&gi(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=hi(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=ii(a,c))&&this.j&&!this.g&&fi(this.f,a,c))}}};
m.Na=function(a,b){this.j&&!this.g&&fi(this.f,a,this.Z(a,b))};
m.Z=function(a,b){if(null!=b)return{value:b}};
function gi(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
m.m=function(){var a=this.f;a.g||Jd(a.f,"command",this.ja,this);this.f=null;for(var b in this.h)gi(this,b);ei.A.m.call(this)};function ji(a,b){ei.call(this,b);this.i=a;this.start()}
B(ji,ei);ji.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
ji.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function hi(a,b){switch(a){case "loadVideoById":return b=ci(b),[b];case "cueVideoById":return b=ci(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=di(b),[b];case "cuePlaylist":return b=di(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.tieng];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey]}return[]}
function ii(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ji.prototype.Z=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ji.A.Z.call(this,a,b)};
ji.prototype.m=function(){ji.A.m.call(this);delete this.i};function ki(a,b,c,d){I.call(this);this.h=b||null;this.B="*";this.i=c||null;this.sessionId=null;this.channel=d||null;this.F=!!a;this.o=z(this.C,this);window.addEventListener("message",this.o)}
n(ki,I);ki.prototype.C=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.h&&a.source!=this.h)&&v(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.F&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.i=this.B=a.origin);this.h=a.source;this.sessionId=b.id;this.f&&(this.f(),this.f=null);break;case "command":this.j&&(!this.l||0<=Ma(this.l,b.func))&&this.j(b.func,b.args,a.origin)}}};
ki.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=ld(a);c.postMessage(d,this.B)}catch(e){Q(e,"WARNING")}}};
ki.prototype.m=function(){window.removeEventListener("message",this.o);I.prototype.m.call(this)};function li(a,b,c){ki.call(this,a,b,c||P("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.l=this.f=this.j=null}
n(li,ki);function mi(){var a=this.g=new li(!!P("WIDGET_ID_ENFORCE")),b=z(this.Ka,this);a.j=b;a.l=null;this.g.channel="widget";if(a=P("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
m=mi.prototype;m.Ka=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,ni(this,a)),this.j[a]=!0)):this.la(a,b,c)};
m.la=function(){};
function ni(a,b){return z(function(c){this.sendMessage(b,c)},a)}
m.addEventListener=function(){};
m.ra=function(){this.l=!0;this.sendMessage("initialDelivery",this.aa());this.sendMessage("onReady");E(this.i,this.ka,this);this.i=[]};
m.aa=function(){return null};
function oi(a,b){a.sendMessage("infoDelivery",b)}
m.ka=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.ka({event:a,info:void 0==b?null:b})};
m.dispose=function(){this.g=null};function pi(a){mi.call(this);this.f=a;this.h=[];this.addEventListener("onReady",z(this.Ia,this));this.addEventListener("onVideoProgress",z(this.Ra,this));this.addEventListener("onVolumeChange",z(this.Sa,this));this.addEventListener("onApiChange",z(this.Ma,this));this.addEventListener("onPlaybackQualityChange",z(this.Oa,this));this.addEventListener("onPlaybackRateChange",z(this.Pa,this));this.addEventListener("onStateChange",z(this.Qa,this));this.addEventListener("onWebglSettingsChanged",z(this.Ta,
this))}
B(pi,mi);m=pi.prototype;m.la=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&ai(a)){var d=b;if(Ea(d[0])&&!Ba(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=ci.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=bi.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=di.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);ai(a)&&oi(this,this.aa())}};
m.Ia=function(){var a=z(this.ra,this);this.g.f=a};
m.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
m.aa=function(){if(!this.f)return null;var a=this.f.getApiInterface();Ra(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var g=this.f[e]();b[f]=g}catch(k){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=A()/1E3;return b};
m.Qa=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:A()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());oi(this,a)};
m.Oa=function(a){oi(this,{playbackQuality:a})};
m.Pa=function(a){oi(this,{playbackRate:a})};
m.Ma=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var h=0,g=f.length;h<g;h++){var k=f[h],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Sa=function(){oi(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
m.Ra=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:A()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());oi(this,a)};
m.Ta=function(){var a={sphericalProperties:this.f.getSphericalProperties()};oi(this,a)};
m.dispose=function(){pi.A.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function qi(a){a=void 0===a?!1:a;I.call(this);this.f=new K(a);Xc(this,Ja(Yc,this.f))}
B(qi,I);qi.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
qi.prototype.j=function(a,b){this.g||this.f.L.apply(this.f,arguments)};function ri(a,b,c){qi.call(this);this.h=a;this.i=b;this.l=c}
B(ri,qi);function fi(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(ld(a),d.i))}}
ri.prototype.m=function(){this.i=this.h=null;ri.A.m.call(this)};function si(a,b,c){I.call(this);this.f=a;this.i=c;this.j=V(window,"message",z(this.l,this));this.h=new ri(this,a,b);Xc(this,Ja(Yc,this.h))}
B(si,I);si.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,v(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
si.prototype.m=function(){Yf(this.j);this.f=null;si.A.m.call(this)};function ti(){var a=bb(ui),b;return yd(new J(function(c,d){a.onSuccess=function(e){Ae(e)?c(e):d(new vi("Request failed, status="+e.status,"net.badstatus",e))};
a.onError=function(e){d(new vi("Unknown request error","net.unknown",e))};
a.N=function(e){d(new vi("Request timed out","net.timeout",e))};
b=Ke("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof zd&&b.abort();
return wd(c)})}
function vi(a,b){D.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(vi,D);function wi(){this.g=0;this.f=null}
wi.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),rd(a)?a:xi(a)):2===this.g&&b?(a=b.call(c,this.f),rd(a)?a:yi(a)):this};
wi.prototype.getValue=function(){return this.f};
wi.prototype.$goog_Thenable=!0;function yi(a){var b=new wi;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function xi(a){var b=new wi;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function zi(a){D.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ai;this.isTimeout=a instanceof vi&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof zd}
n(zi,D);zi.prototype.name="BiscottiError";function Ai(){D.call(this,"Biscotti ID is missing from server")}
n(Ai,D);Ai.prototype.name="BiscottiMissingError";var ui={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Bi=null;function me(){if("1"===Wa(ke(),"args","privembed"))return wd(Error("Biscotti ID is not available in private embed mode"));Bi||(Bi=yd(ti().then(Ci),function(a){return Di(2,a)}));
return Bi}
function Ci(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ai;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ai;a=a.id;ne(a);Bi=xi(a);Ei(18E5,2);return a}
function Di(a,b){var c=new zi(b);ne("");Bi=yi(c);0<a&&Ei(12E4,a-1);throw c;}
function Ei(a,b){S(function(){yd(ti().then(Ci,function(c){return Di(b,c)}),ya)},a)}
function Fi(){try{var a=y("yt.ads.biscotti.getId_");return a?a():me()}catch(b){return wd(b)}}
;function Gi(a){if("1"!==Wa(ke(),"args","privembed")){a&&le();try{Fi().then(function(b){R("pass_biscotti_id_in_header_ajax_tv")||R("pass_biscotti_id_in_header_ajax")||(b=re(b),b.bsq=Hi++,Qe("//www.youtube.com/ad_data_204",{va:!1,D:b,withCredentials:!0}))},function(){}),S(Gi,18E5)}catch(b){Q(b)}}}
var Hi=0;var Z=y("ytglobal.prefsUserPrefsPrefs_")||{};x("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Ii(){this.f=P("ALT_PREF_COOKIE_NAME","PREF");var a=ec.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
m=Ii.prototype;m.get=function(a,b){Ji(a);Ki(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
m.set=function(a,b){Ji(a);Ki(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
m.remove=function(a){Ji(a);Ki(a);delete Z[a]};
m.save=function(){yg(this.f,this.dump(),63072E3)};
m.clear=function(){for(var a in Z)delete Z[a]};
m.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function Ki(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Ji(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Li(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
za(Ii);var Mi=null,Ni=null,Oi=null,Pi={};function Qi(a){var b=a.id;a=a.ve_type;var c=Kg++;a=new Ig({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Pi[b]=a;b=Pg();c=Og();b&&c&&Sg(b,c,[a])}
function Ri(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Qg(b,a),a=Og()))for(var c in Pi){var d=Pi[c];d&&Sg(b,a,[d])}}
function Si(a){Pi[a.id]=new Ig({trackingParams:a.tracking_params})}
function Ti(a){var b=Pg();a=Pi[a.id];b&&a&&vg("visualElementGestured",{csn:b,ve:Jg(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},Eg,void 0,void 0)}
function Ui(a){a=a.ids;var b=Pg();if(b)for(var c=0;c<a.length;c++){var d=Pi[a[c]];d&&vg("visualElementShown",{csn:b,ve:Jg(d),eventType:1},Eg,void 0,void 0)}}
;x("yt.setConfig",O,void 0);x("yt.config.set",O,void 0);x("yt.setMsg",$e,void 0);x("yt.msgs.set",$e,void 0);x("yt.logging.errors.log",Ye,void 0);
x("writeEmbed",function(){var a=P("PLAYER_CONFIG",void 0);Gi(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=P("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);P("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");Mi=a=oh(a);a.addEventListener("onScreenChanged",Ri);a.addEventListener("onLogClientVeCreated",Qi);a.addEventListener("onLogServerVeCreated",Si);a.addEventListener("onLogVeClicked",Ti);a.addEventListener("onLogVesShown",
Ui);b=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Oi=new pi(a):P("ENABLE_POST_API")&&v(b)&&v(c)&&(Ni=new si(window.parent,b,c),Oi=new ji(a,Ni.h));c=je("BG_P");Of(c)&&(P("BG_I")||P("BG_IU"))&&(Kf=!0,Jf.initialize(P("BG_I",null),P("BG_IU",null),c,Nf,void 0));Ff()},void 0);
x("yt.www.watch.ads.restrictioncookie.spr",function(a){Te(a+"mac_204?action_fcts=1");return!0},void 0);
var Vi=oe(function(){var a="ol";X.mark&&(0==a.lastIndexOf("mark_",0)||(a="mark_"+a),X.mark(a));a=Xh();var b=N();a.ol&&(a._ol=a._ol||[a.ol],a._ol.push(b));a.ol=b;a=Eh();if(b=a.ol)Cf(b),a.ol=0;Uh().tick_ol=void 0;N();Th()?(a=Vh(),th("tick_ol_"+a)||qh("latencyActionTicked",{tickName:"ol",clientActionNonce:a},void 0),a=!0):a=!1;if(a=!a)a=!y("yt.timing.pingSent_");if(a&&(b=P("TIMING_ACTION",void 0),a=Xh(),y("ytglobal.timingready_")&&b&&a._start&&(b=Wh()))){Qh||(Dh(Ih,new Gh(Math.round(b-a._start),void 0)),
Qh=!0);b=!0;var c=P("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Zh()}a=Ii.getInstance();c=!!((Li("f"+(Math.floor(119/31)+1))||0)&67108864);b=1<window.devicePixelRatio;document.body&&ad(document.body,"exp-invert-logo")&&(b&&!ad(document.body,"inverted-hdpi")?(d=document.body,d.classList?d.classList.add("inverted-hdpi"):ad(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")):!b&&ad(document.body,"inverted-hdpi")&&bd());
c!=b&&(c="f"+(Math.floor(119/31)+1),d=Li(c)||0,d=b?d|67108864:d&-67108865,0==d?delete Z[c]:(b=d.toString(16),Z[c]=b.toString()),a.save())}),Wi=oe(function(){var a=Mi;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();P("PL_ATT")&&Jf.dispose();a=0;for(var b=Df.length;a<b;a++)Cf(Df[a]);Df.length=0;wf("//static.doubleclick.net/instream/ad_status.js");Ef=!1;O("DCLKSTAT",0);Zc(Oi,Ni);if(a=Mi)a.removeEventListener("onScreenChanged",Ri),a.removeEventListener("onLogClientVeCreated",Qi),a.removeEventListener("onLogServerVeCreated",Si),a.removeEventListener("onLogVeClicked",Ti),a.removeEventListener("onLogVesShown",Ui),a.destroy();Pi={}});
window.addEventListener?(window.addEventListener("load",Vi),window.addEventListener("unload",Wi)):window.attachEvent&&(window.attachEvent("onload",Vi),window.attachEvent("onunload",Wi));Ka("yt.abuse.player.botguardInitialized",y("yt.abuse.player.botguardInitialized")||Pf);Ka("yt.abuse.player.invokeBotguard",y("yt.abuse.player.invokeBotguard")||Qf);Ka("yt.abuse.dclkstatus.checkDclkStatus",y("yt.abuse.dclkstatus.checkDclkStatus")||Gf);
Ka("yt.player.exports.navigate",y("yt.player.exports.navigate")||Rg);Ka("yt.util.activity.init",y("yt.util.activity.init")||ag);Ka("yt.util.activity.getTimeSinceActive",y("yt.util.activity.getTimeSinceActive")||dg);Ka("yt.util.activity.setTimestamp",y("yt.util.activity.setTimestamp")||bg);}).call(this);
