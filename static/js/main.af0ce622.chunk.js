(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,r){},43:function(e,t,r){e.exports=r(63)},51:function(e,t,r){},63:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(40),i=r.n(o),c=(r(51),r(9)),l=r(7),u=r(69),s=r(65),h=r(70),f=r(16);r(38);var m=function(e){var t=e.user,r=e.handleLogout,n="https://imgur.com/1vfKBtj.png";return t?a.a.createElement(u.a,{style:{backgroundColor:"#7431A2"},variant:"dark"},a.a.createElement(s.a,null,a.a.createElement(u.a.Brand,{as:c.b,to:"/"},a.a.createElement("img",{className:"logo-image",src:n,alt:"logo image"})),a.a.createElement(h.a,{className:"d-inline-flex p-2 bd-highlight",style:{textAlign:"center",margin:"auto",fontSize:"24px"}},a.a.createElement(h.a.Link,{as:c.b,to:"/"},a.a.createElement(f.b,null)," Home"),a.a.createElement(h.a.Link,{as:c.b,to:"/about"},a.a.createElement(f.c,null),"About"),a.a.createElement(h.a.Link,{as:c.b,to:"/create"},a.a.createElement(f.e,null),"Add Content"),a.a.createElement(h.a.Link,{as:c.b,to:"#",onClick:r},a.a.createElement(f.g,null)," Logout"),a.a.createElement("h5",{id:"nav-header-name"},"Yaaas, ",t.name,"!")))):a.a.createElement(u.a,{style:{backgroundColor:"#7431A2",textAlign:"center"},variant:"dark"},a.a.createElement(s.a,null,a.a.createElement(u.a.Brand,{as:c.b,to:"/"},a.a.createElement("img",{className:"logo-image",src:n,alt:"logo image"})),a.a.createElement(h.a,{className:"d-inline-flex p-2 bd-highlight",style:{textAlign:"center",margin:"auto",fontSize:"24px"}},a.a.createElement(h.a.Link,{as:c.b,to:"/"},a.a.createElement(f.b,null),"Home"),a.a.createElement(h.a.Link,{as:c.b,to:"/register"},a.a.createElement(f.h,null)," SignUp"),a.a.createElement(h.a.Link,{as:c.b,to:"/login"},a.a.createElement(f.f,null)," Login"),a.a.createElement(h.a.Link,{as:c.b,to:"/about"},a.a.createElement(f.c,null),"About"))))},p=r(20),d=r(5),v=r(66),g=r(41),y=r(26);var E=function(e){var t=Object(n.useState)(0),r=Object(l.a)(t,2),o=r[0],i=r[1],u=function(){i(o+1)};return e.culture?a.a.createElement("div",{className:"shadow-lg p-3 mb-5 bg-white rounded"},a.a.createElement(s.a,null,a.a.createElement(v.a,{className:"row"},e.culture.map(function(e){return a.a.createElement(g.a,{key:e._id,md:"12",lg:"4",className:"mb-4"},a.a.createElement(y.a,{style:{width:"18rem"}},a.a.createElement(y.a.Img,{src:e.url}),a.a.createElement(y.a.Body,null,a.a.createElement(y.a.Title,null,e.name),a.a.createElement(y.a.Text,null,e.description),a.a.createElement("p",{onClick:u},a.a.createElement("span",{alt:"thumbs up emoji"},"\ud83d\udc4d"),a.a.createElement("span",null,e.vote||o)),a.a.createElement(c.b,{to:"/culture/".concat(e._id)},a.a.createElement("button",{className:"btn btn-primary"},"Why It's Gay?")))))})))):a.a.createElement("h1",null,"Loading...")};var w=function(e){var t=e.culture,r=e.deleteCulture,n=Object(d.g)().id,o=t.find(function(e){return e._id===n}),i=Object(d.f)();return a.a.createElement("div",{className:"cult"},a.a.createElement("h1",null,o.name),a.a.createElement("img",{src:o.url,alt:o.name}),a.a.createElement("h2",null,o.description),a.a.createElement("h2",null,o.reason),a.a.createElement("button",{id:"delete",onClick:function(){r(n),i("/")}},"DELETE"),a.a.createElement("button",{id:"update",onClick:function(){i("/update/".concat(o._id))}},"UPDATE"))};var b=function(e){return a.a.createElement("h1",null,"About")},x=r(8),L=r(2);var O=function(e){var t=Object(d.f)(),r=Object(n.useState)({name:"",description:"",reason:"",url:""}),o=Object(l.a)(r,2),i=o[0],u=o[1],s=function(e){u(Object(L.a)({},i,Object(x.a)({},e.target.name,e.target.value)))};return a.a.createElement("section",null,a.a.createElement("form",{onSubmit:function(r){r.preventDefault(),e.createCulture(i),u({name:"",description:"",reason:"",url:""}),t("/")}},a.a.createElement("input",{type:"text",value:i.name,name:"name",placeholder:"name",onChange:s}),a.a.createElement("input",{type:"text",value:i.description,name:"description",placeholder:"description",onChange:s}),a.a.createElement("input",{type:"text",value:i.reason,name:"reason",placeholder:"reason",onChange:s}),a.a.createElement("input",{type:"text",value:i.url,name:"url",placeholder:"image URL",onChange:s}),a.a.createElement("input",{type:"submit",value:"Add Content"})),e.culture?e.culture.map(function(e){return a.a.createElement("div",{key:e._id,className:"cult"},a.a.createElement(c.b,{to:"/culture/".concat(e._id)},a.a.createElement("h1",null,e.name)),a.a.createElement("img",{src:e.url,alt:e.name}))}):a.a.createElement("h1",null,"Loading..."))};function j(e){var t=e.culture,r=e.updateCulture,o=Object(d.g)().id,i=t.find(function(e){return e._id===o}),c=Object(d.f)(),u=Object(n.useState)([i]),s=Object(l.a)(u,2),h=s[0],f=s[1],m=function(e){f(Object(L.a)({},h,Object(x.a)({},e.target.name,e.target.value)))};return a.a.createElement("div",{className:"cult"},a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r(h,o),c("/")}},a.a.createElement("input",{type:"text",name:"name",placeholder:i.name,value:h.name||"",onChange:m}),a.a.createElement("input",{type:"text",name:"description",placeholder:i.description,value:h.description||"",onChange:m}),a.a.createElement("input",{type:"text",name:"reason",placeholder:i.reason,value:h.reason||"",onChange:m}),a.a.createElement("input",{type:"text",name:"url",placeholder:i.url,value:h.url||"",onChange:m}),a.a.createElement("button",{type:"submit"},"Update")))}var k=r(71),N=r(67),S={PROD:{URL:"https://isitgayapi.herokuapp.com/auth"},DEV:{URL:"http://localhost:3000"}};function _(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")}function C(){var e=function(){var e=localStorage.getItem("token");return e&&JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null),e}();return e?JSON.parse(atob(e.split(".")[1])).user:null}function G(){return C()}function P(){localStorage.removeItem("token")}function T(){T=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var s={};function h(){}function f(){}function m(){}var p={};c(p,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(O([])));v&&v!==t&&r.call(v,a)&&(p=v);var g=m.prototype=h.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var n;this._invoke=function(a,o){function i(){return new t(function(n,i){!function n(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(h).then(function(e){s.value=e,i(s)},function(e){return n("throw",e,i,c)})}c(l.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=m,c(g,"constructor",m),c(m,"constructor",f),f.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}var I=function(e){var t=e.updateMessage,r=e.handleRegisterOrLogin,o=Object(n.useState)({name:"",email:"",password:"",passwordConf:""}),i=Object(l.a)(o,2),u=i[0],h=i[1],f=Object(d.f)();function m(e){t(""),h(function(t){return Object(L.a)({},t,Object(x.a)({},e.target.name,e.target.value))})}function v(){return(v=Object(p.a)(T().mark(function e(n){return T().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,a=u,fetch("".concat(S.PROD.URL,"/register"),{method:"POST",headers:new Headers({"Content-Type":"Application/json"}),body:JSON.stringify(a)}).then(function(e){if(e.ok)return e.json();throw new Error("Email already taken!")}).then(function(e){_(e.token)});case 4:r(),f("/",{replace:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(e.t0.message);case 11:case"end":return e.stop()}var a},e,null,[[1,8]])}))).apply(this,arguments)}return a.a.createElement(s.a,{id:"main-container",className:"d-grid h-100"},a.a.createElement(k.a,{id:"sign-in-form",onSubmit:function(e){return v.apply(this,arguments)}},a.a.createElement("img",{className:"mb-4 bootstrap-logo",src:"https://imgur.com/1vfKBtj.png",alt:"Is it Gay Logo"}),a.a.createElement(k.a.Group,{className:"mb-3",controlId:"formBasicEmail"},a.a.createElement(k.a.Label,null,"Signup"),a.a.createElement(k.a.Control,{type:"text",placeholder:"Enter Name",defaultValue:u.name,name:"name",onChange:m})),a.a.createElement(k.a.Group,{className:"mb-3",controlId:"formBasicEmail"},a.a.createElement(k.a.Control,{type:"email",placeholder:"Enter Email",defaultValue:u.email,name:"email",onChange:m,required:!0})),a.a.createElement(k.a.Group,{className:"mb-3",controlId:"formBasicPassword"},a.a.createElement(k.a.Control,{type:"password",placeholder:"Enter Password",defaultValue:u.password,name:"password",onChange:m,required:!0})),a.a.createElement(k.a.Group,{className:"mb-3",controlId:"formBasicPassword"},a.a.createElement(k.a.Control,{type:"password",placeholder:"Confirm Password",defaultValue:u.passwordConf,name:"passwordConf",onChange:m,required:!0}),a.a.createElement(k.a.Text,{className:"text-muted"},"We'll never share your email with anyone."),a.a.createElement("br",null),a.a.createElement(k.a.Text,{className:"forgot-password text-right"},"Already registered? ",a.a.createElement(c.b,{to:"/login"},"Signin"))),a.a.createElement(N.a,{variant:"primary",type:"submit"},"Login")))};var A=function(e){var t=Object(n.useState)({msg:""}),r=Object(l.a)(t,2),o=r[0],i=r[1];return a.a.createElement("div",null,a.a.createElement(I,Object.assign({},e,{updateMessage:function(e){i({message:e})}})),a.a.createElement("p",null,o.msg))};function F(){F=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var s={};function h(){}function f(){}function m(){}var p={};c(p,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(O([])));v&&v!==t&&r.call(v,a)&&(p=v);var g=m.prototype=h.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var n;this._invoke=function(a,o){function i(){return new t(function(n,i){!function n(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(h).then(function(e){s.value=e,i(s)},function(e){return n("throw",e,i,c)})}c(l.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=m,c(g,"constructor",m),c(m,"constructor",f),f.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}var B=function(e){var t=e.handleRegisterOrLogin,r=(e.updateMessage,Object(n.useState)({email:"",password:""})),o=Object(l.a)(r,2),i=o[0],u=o[1],h=Object(d.f)();function f(e){u(function(t){return Object(L.a)({},t,Object(x.a)({},e.target.name,e.target.value))})}function m(){return(m=Object(p.a)(F().mark(function e(r){return F().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,n=i,fetch("".concat(S.PROD.URL,"/login"),{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(n)}).then(function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")}).then(function(e){return _(e.token)});case 4:t(),h("/",{replace:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.message);case 11:case"end":return e.stop()}var n},e,null,[[1,8]])}))).apply(this,arguments)}return a.a.createElement(s.a,{id:"main-container",className:"d-grid h-100"},a.a.createElement(k.a,{id:"sign-in-form",onSubmit:function(e){return m.apply(this,arguments)}},a.a.createElement("img",{className:"mb-4 bootstrap-logo",src:"https://imgur.com/1vfKBtj.png",alt:"Is it Gay Logo"}),a.a.createElement(k.a.Group,{className:"mb-3",controlId:"formBasicEmail"},a.a.createElement(k.a.Label,null,"Login"),a.a.createElement(k.a.Control,{type:"email",placeholder:"Enter email",defaultValue:i.email,name:"email",onChange:f}),a.a.createElement(k.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),a.a.createElement(k.a.Group,{className:"mb-3",controlId:"formBasicPassword"},a.a.createElement(k.a.Label,null,"Password"),a.a.createElement(k.a.Control,{type:"password",placeholder:"Password",defaultValue:i.password,name:"password",onChange:f}),a.a.createElement(k.a.Text,{className:"forgot-password text-right"},"Not a member? ",a.a.createElement(c.b,{to:"/register"},"Sign-up now!"))),a.a.createElement(N.a,{variant:"primary",type:"submit"},"Login")))};function R(){R=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var s={};function h(){}function f(){}function m(){}var p={};c(p,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(O([])));v&&v!==t&&r.call(v,a)&&(p=v);var g=m.prototype=h.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var n;this._invoke=function(a,o){function i(){return new t(function(n,i){!function n(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(h).then(function(e){s.value=e,i(s)},function(e){return n("throw",e,i,c)})}c(l.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=m,c(g,"constructor",m),c(m,"constructor",f),f.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}var D=function(e){var t=Object(n.useState)(null),r=Object(l.a)(t,2),o=r[0],i=r[1],c="https://isitgayapi.herokuapp.com/culture/",u=function(){var e=Object(p.a)(R().mark(function e(){var t,r;return R().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c);case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,i(r);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(p.a)(R().mark(function e(t){return R().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c,{method:"POST",headers:{"Content-Type":"Application/json"},body:JSON.stringify(t)});case 2:u();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(R().mark(function e(t,r){return R().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c+r,{method:"PUT",headers:{"Content-Type":"Application/json"},body:JSON.stringify(t)});case 2:u();case 3:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=Object(p.a)(R().mark(function e(t){return R().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c+t,{method:"DELETE"});case 2:u();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){u()},[]),a.a.createElement("main",null,a.a.createElement(d.c,null,a.a.createElement(d.a,{path:"/register",element:a.a.createElement(A,e)}),a.a.createElement(d.a,{path:"/login",element:a.a.createElement(B,e)}),a.a.createElement(d.a,{exact:!0,path:"/",element:a.a.createElement(E,{culture:o,updateCulture:h})}),a.a.createElement(d.a,{path:"/culture/:id",element:a.a.createElement(w,{culture:o,deleteCulture:f,updateCulture:h})}),a.a.createElement(d.a,{path:"/about",element:a.a.createElement(b,null)}),a.a.createElement(d.a,{path:"/create",element:a.a.createElement(O,{createCulture:s})}),a.a.createElement(d.a,{path:"/update/:id",element:a.a.createElement(j,{culture:o,updateCulture:h})})))};var U=function(e){return a.a.createElement("footer",{className:"footer",style:{backgroundColor:"#7431A2"}},a.a.createElement("p",{className:"footer-tag"},"Is it Gay"),a.a.createElement("p",{className:"footer-rights"},"IIG All Right Reserved\xae"),a.a.createElement("div",{className:"footer-icons"},a.a.createElement("a",{href:"https://www.linkedin.com/in/ashleymrichard1",className:"social-link",alt:"Link/edin Link"},a.a.createElement(f.d,{size:20})),a.a.createElement("a",{href:"https://github.com/amr745/isitgay",className:"social-link",alt:"Github Link"},a.a.createElement(f.a,{size:20}))))};var J=function(){var e=Object(n.useState)({user:G()}),t=Object(l.a)(e,2),r=t[0],o=t[1];return a.a.createElement("div",{className:"App"},a.a.createElement(m,{user:r.user,handleLogout:function(){P(),o({user:null})}}),a.a.createElement(D,{user:r.user,handleRegisterOrLogin:function(){o({user:G()})}}),a.a.createElement(U,null))},V=function(e){e&&e instanceof Function&&r.e(1).then(r.bind(null,68)).then(function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),o(e),i(e)})};r(61);i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,null,a.a.createElement(J,null)))),V()}},[[43,3,2]]]);
//# sourceMappingURL=main.af0ce622.chunk.js.map