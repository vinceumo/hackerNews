(function(t){function e(e){for(var o,i,c=e[0],a=e[1],l=e[2],f=0,d=[];f<c.length;f++)i=c[f],r[i]&&d.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},s=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/hackerNews/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=a;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c55":function(t,e,n){"use strict";var o=n("b5a5"),r=n.n(o);r.a},"370d":function(t,e,n){},4291:function(t,e,n){"use strict";var o=n("9192"),r=n.n(o);r.a},"4b77":function(t,e,n){},"507a":function(t,e,n){},"55fb":function(t,e,n){"use strict";var o=n("8b8b"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AppHeader"),n("NewsBoard")],1)},s=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"container header-wraper"},[n("h1",[t._v("Hacker News Reader")]),n("a",{attrs:{href:"https://github.com/vinceumo/hackerNews"}},[t._v("Github")])])])}],a=(n("cecb"),n("2877")),l={},u=Object(a["a"])(l,i,c,!1,null,"f92eefee",null),f=u.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.showSlider?n("CommentsSlider",{attrs:{commentsToDisplay:t.commentsToDisplay},on:{onCloseComments:function(e){t.showSlider=!1}}}):t._e(),n("ol",{staticClass:"news-board"},t._l(t.topStories,function(e,o){return n("NewsStory",{key:"story"+o,attrs:{story:e,index:o},on:{onShowComments:t.getCommentsToShow}})}),1),t.isLoading?n("LoadingSpinner"):t._e(),t.infinityScroll?n("Observer",{on:{intersect:t.intersected}}):t._e()],1)},p=[],m=n("bc3a"),h=n.n(m),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider"},[n("div",{staticClass:"container"},[n("button",{staticClass:"btn is-primary",on:{click:t.closeComments}},[t._v("Close")]),n("ul",t._l(t.commentsToDisplay,function(t){return n("Comment",{key:t,attrs:{commentId:t}})}),1)])])},v=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t.isLoading?n("LoadingSpinner"):n("div",[t.comment.text?n("p",{staticClass:"author"},[n("b",[t._v("By "+t._s(t.comment.by))])]):t._e(),t.comment.text?n("p",{domProps:{innerHTML:t._s(t.comment.text)}}):t._e(),n("ul",t._l(t.comment.kids,function(t){return n("Comment",{key:t,attrs:{commentId:t}})}),1)])],1)},g=[],_=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner"})}),w=[],S=(n("55fb"),{}),C=Object(a["a"])(S,_,w,!1,null,"55b654ce",null),k=C.exports,j={name:"Comment",components:{LoadingSpinner:k},props:{commentId:Number},data:function(){return{comment:{},isLoading:!0}},mounted:function(){var t=this;h.a.get("https://hacker-news.firebaseio.com/v0/item/".concat(t.commentId,".json?print=pretty")).then(function(e){e.data&&(t.comment=e.data,t.isLoading=!1)})}},O=j,x=(n("b444"),Object(a["a"])(O,y,g,!1,null,"338126d3",null)),T=x.exports,L={components:{Comment:T},props:{commentsToDisplay:Array},methods:{closeComments:function(){this.$emit("onCloseComments",!1)}}},$=L,E=(n("febb"),Object(a["a"])($,b,v,!1,null,"579563a6",null)),I=E.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"news-story"},[n("p",{staticClass:"title"},[t.story.url?n("a",{attrs:{rel:"noopener",target:"_blank",href:t.story.url}},[t._v("\n     "+t._s(t.story.title)+"\n   ")]):n("span",[t._v(t._s(t.story.title))])]),n("p",[n("small",[n("span",{staticClass:"tag",class:"is-"+t.story.type},[t._v(t._s(t.story.type))]),t._v(" |\n     "+t._s(t.story.score)+" points | by "+t._s(t.story.by)),t.story.kids?n("span",[t._v(" | "),n("button",{staticClass:"cta is-secondary",on:{click:function(e){return t.showComments(t.index)}}},[t._v(" "+t._s(t.story.kids.length)+" comments")])]):t._e()])])])},A=[],P={props:{index:Number,story:Object},methods:{showComments:function(t){this.$emit("onShowComments",t)}}},D=P,M=(n("0c55"),Object(a["a"])(D,N,A,!1,null,"5ebb2dfb",null)),B=M.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"observer"})},z=[],F=n("768b");n("5abe");var J={props:["options"],data:function(){return{observer:null}},mounted:function(){var t=this,e=this.options||{};this.observer=new IntersectionObserver(function(e){var n=Object(F["a"])(e,1),o=n[0];o&&o.isIntersecting&&t.$emit("intersect")},e),this.observer.observe(this.$el)},destroyed:function(){this.observer.disconnect()}},q=J,G=(n("e0b5"),Object(a["a"])(q,H,z,!1,null,null,null)),R=G.exports,K={components:{CommentsSlider:I,LoadingSpinner:k,NewsStory:B,Observer:R},data:function(){return{commentsToDisplay:[],topStoryIds:[],topStories:[],batchSizeToLoad:30,hasApiCallError:!1,infinityScroll:!1,showSlider:!1,isLoading:!0}},created:function(){this.getTopStoryIds()},watch:{showSlider:function(){document.body.style.overflow=this.showSlider?"hidden":""}},methods:{getCommentsToShow:function(t){this.commentsToDisplay=this.topStories[t].kids,this.showSlider=!0},getTopStoryIds:function(){var t=this;h.a.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then(function(e){t.topStoryIds=e.data,t.infinityScroll=!0}).catch(function(){t.hasApiCallError=!0})},getTopStories:function(t){var e,n=this;this.isLoading=!0,this.topStoryIds.length-t<=this.batchSizeToLoad?(n.infinityScroll=!1,e=this.topStoryIds.length-t):e=this.batchSizeToLoad;for(var o=function(o){h.a.get("https://hacker-news.firebaseio.com/v0/item/".concat(n.topStoryIds[o+t],".json?print=pretty")).then(function(t){t.data&&(n.topStories.push(t.data),o===e-1&&(n.isLoading=!1))}).catch(function(){n.hasApiCallError=!0,n.isLoading=!1})},r=0;r<e;r++)o(r)},intersected:function(){this.getTopStories(this.topStories.length)}}},Q=K,U=(n("4291"),Object(a["a"])(Q,d,p,!1,null,"54e74a43",null)),V=U.exports,W=n("be30"),X={name:"app",components:{AppHeader:f,NewsBoard:V},mounted:function(){Object(W["a"])()}},Y=X,Z=(n("5c0b"),Object(a["a"])(Y,r,s,!1,null,null,null)),tt=Z.exports,et=n("9483");Object(et["a"])("".concat("/hackerNews/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("507a");o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(tt)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("8fba"),r=n.n(o);r.a},"8b8b":function(t,e,n){},"8fba":function(t,e,n){},9192:function(t,e,n){},b444:function(t,e,n){"use strict";var o=n("370d"),r=n.n(o);r.a},b5a5:function(t,e,n){},cecb:function(t,e,n){"use strict";var o=n("fefb"),r=n.n(o);r.a},e0b5:function(t,e,n){"use strict";var o=n("e6ee"),r=n.n(o);r.a},e6ee:function(t,e,n){},febb:function(t,e,n){"use strict";var o=n("4b77"),r=n.n(o);r.a},fefb:function(t,e,n){}});
//# sourceMappingURL=app.b413e4d1.js.map