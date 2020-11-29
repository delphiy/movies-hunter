(function(t){function e(e){for(var a,n,o=e[0],c=e[1],l=e[2],m=0,d=[];m<o.length;m++)n=o[m],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/movies-hunter/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034b":function(t,e,s){},"2cb5":function(t,e,s){"use strict";s("eb9e")},3921:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABoklEQVR42u3VSyhEURzH8TOUDVZYiWYhShaTZyyUBbKQleRVk0LSxMZrY2HjtaFJQkl5JStZCAtlQZ5ZSJHFNLLCChvl8T3do8bh3rkzk4Vy6tOd7pl7fp1zz/0fh/jl5vgPCDcgC3VIxwuOMI971Z+IRuQhBldYwnmwgCiMoAGzOEEsSlGOVvW/KWxiG8/IQRMW0I03swA5eBGq8KD15WNd/a7EodafgDXsqZBvAWnYRybuTJauTF23TPqTcIFCXOsBvUiGJ+ibs25e3GJID5gWxsuciTCgWRgvv0UP8KppjUcY0CGM5fboAW0ogDvCgDkcYFIPSMUpnHgKc/A4+JANvx4g2wou0R9mwAAyUPN5Qw9IwTGqsRvi4MVYRS5uzAJkq1DrKL/cM5uDu4TxZbuxEdhhVovkDCZQL4xyYNVkGVlEu5rBl2ZVTUuwLIztOygC6otqsm71CWM71mLnp0GClWu5s2QVfVfT96n7TrWM8nlZVf1mA9g5D6LRg050qXujGMMwXq0eDuXAcaklE2pJbG2AUE+0eHV9tPvA3z+TPwDkH0sZhv6IlwAAAABJRU5ErkJggg=="},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=s("8c4f"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mx-auto"},[s("PopularMovies"),s("UpcomingMovies")],1)},n=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mx-5"},[s("h2",{staticClass:"uppercase mt-5 text-yellow-500 text-lg font-semibold"},[t._v(" Popular Movies ")]),s("div",{staticClass:"grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8"},t._l(t.movies,(function(e){return s("MovieItem",{key:e.id,attrs:{movie:e,genres:t.genres}})})),1)])},c=[],l=(s("96cf"),s("1da1")),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("router-link",{attrs:{to:"/movie/"+t.movie.id}},[s("img",{staticClass:"hover:opacity-75 tansition easy-in-out duration-150",attrs:{src:t.posterPath}})]),s("h3",[t._v(t._s(t.movie.title))]),s("div",{staticClass:"flex"},[s("svg",{staticClass:"fill-current text-yellow-500 w-4 h-4 mt-1",attrs:{viewBox:"0 0 24 24"}},[s("g",{attrs:{"data-name":"Layer 2"}},[s("path",{attrs:{d:"M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z","data-name":"star"}})])]),s("span",{staticClass:"ml-2"},[t._v(t._s(10*t.movie.vote_average)+"% | "+t._s(t.movie.release_date)+" ")]),s("br")]),s("span",{staticClass:"text-sm text-gray-500"},t._l(t.movie.genre_ids,(function(e,a){return s("span",{key:e},[t._v(" "+t._s(t.genreTypeName(e,a))+" ")])})),0)],1)},m=[],d=(s("b0c0"),s("b85c")),h={props:{movie:{required:!0},genres:{required:!0}},computed:{posterPath:function(){return"https://image.tmdb.org/t/p/w500/"+this.movie.poster_path}},methods:{genreTypeName:function(t,e){var s,a=Object(d["a"])(this.genres);try{for(a.s();!(s=a.n()).done;){var r=s.value;if(r.id==t)return this.movie.genre_ids.length-1==e?r.name:r.name+","}}catch(i){a.e(i)}finally{a.f()}}}},p=h,v=s("2877"),f=Object(v["a"])(p,u,m,!1,null,null,null),g=f.exports,x={components:{MovieItem:g},data:function(){return{movies:[],genres:[]}},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.fetchGenres(),e.prev=1,e.next=4,t.$http.get("/movie/popular");case 4:s=e.sent,t.movies=s.data.results,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},methods:{fetchGenres:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.get("/genre/movie/list");case 3:s=e.sent,t.genres=s.data.genres,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},b=x,w=Object(v["a"])(b,o,c,!1,null,null,null),_=w.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"example"}},[s("h2",{staticClass:"uppercase text-yellow-500 font-semibold text-lg mt-20 ml-2"},[t._v(" Upcoming Movies ")]),s("carousel-3d",{key:t.upcomingMovies.length,attrs:{"controls-visible":!0,clickable:!1,listData:t.upcomingMovies,height:500}},t._l(this.upcomingMovies,(function(e,a){return s("slide",{key:a,attrs:{index:a}},[s("figure",[s("img",{attrs:{src:"https://image.tmdb.org/t/p/w500/"+e.poster_path}}),s("figcaption",[s("router-link",{attrs:{to:"/movie/"+e.id}},[t._v(" "+t._s(e.title)+" ")])],1)])])})),1)],1)},y=[],k=(s("fb6a"),s("2af0")),M={data:function(){return{upcomingMovies:[]}},components:{Carousel3d:k["Carousel3d"],Slide:k["Slide"]},mounted:function(){this.fetchUpcomingMovies()},methods:{fetchUpcomingMovies:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("https://api.themoviedb.org/3/movie/upcoming");case 2:s=e.sent,t.upcomingMovies=s.data.results.slice(1,6),console.log(t.upcomingMovies);case 5:case"end":return e.stop()}}),e)})))()}}},O=M,R=(s("2cb5"),Object(v["a"])(O,C,y,!1,null,null,null)),A=R.exports,j={components:{PopularMovies:_,UpcomingMovies:A},mounted:function(){console.log("Your process.env.VUE_APP_PUBLIC_URL","/")}},I=j,z=Object(v["a"])(I,i,n,!1,null,null,null),S=z.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container mx-auto flex mt-20 border-b border-gray-600 pb-2"},[s("img",{staticClass:"w-64 md:w-full",attrs:{src:t.posterPath,alt:""}}),s("div",{staticClass:"ml-24"},[s("h1",{staticClass:"text-4xl font-semibold"},[t._v(t._s(this.movie.title))]),s("span",{staticClass:"text-gray-500 text-sm flex"},[s("svg",{staticClass:"fill-current text-yellow-500 w-4 h-4 mr-1",attrs:{viewBox:"0 0 24 24"}},[s("g",{attrs:{"data-name":"Layer 2"}},[s("path",{attrs:{d:"M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z","data-name":"star"}})])]),t._v(" "+t._s(10*this.movie.vote_average)+" % | "+t._s(t.movie.release_date)+" "),t._l(t.movie.genres,(function(e,a){return s("span",{key:a,staticClass:"ml-1"},[t._v(" "+t._s(e.name)+" "),t.movie.genres.length-1!=a?s("span",[t._v(",")]):t._e()])}))],2),s("p",{staticClass:"mt-5"},[t._v(" "+t._s(this.movie.overview)+" ")]),s("div",{staticClass:"mt-5"},[s("span",{staticClass:"mt-5 font-semibold"},[t._v("Featured Cast")]),s("div",{staticClass:"flex"},t._l(t.movie.credits.crew,(function(e,a){return s("div",{key:a},[a<2?s("div",{staticClass:"flex flex-col mt-5 mr-5"},[s("span",[t._v(t._s(e.name))]),s("span",{staticClass:"text-gray-500"},[t._v(t._s(e.job))])]):t._e()])})),0)]),s("div",{staticClass:"mt-5"},[s("a",{staticClass:"rounded bg-yellow-500 px-5 py-3 inline-flex text-black cursor-auto",attrs:{target:"blank"},on:{click:function(e){return e.preventDefault(),t.openYouTubeModel(e)}}},[s("svg",{staticClass:"w-6 h-6 fill-current",attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),s("path",{attrs:{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}})]),s("span",{staticClass:"ml-3"},[t._v("Play Trailer")])]),t._m(0)])])]),s("Cast",{attrs:{casts:t.movie.credits.cast}}),s("Images",{attrs:{images:t.movie.images.backdrops},on:{"on-image-click":t.showImageModel}}),s("MediaModel",{attrs:{mediaURL:t.mediaURL,isVideo:this.isVideo},model:{value:t.modelOpen,callback:function(e){t.modelOpen=e},expression:"modelOpen"}})],1)},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"rounded bg-yellow-500 px-5 py-3 inline-flex text-black ml-5",attrs:{href:"#"}},[a("img",{attrs:{src:s("3921"),alt:""}}),a("span",{staticClass:"ml-3"},[t._v("Favourite")])])}],E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mx-auto  border-b border-gray-600 px-4 py-4"},[s("h2",{staticClass:"text-4xl font-semibold mb-5"},[t._v(" Cast ")]),s("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},t._l(t.casts,(function(e,a){return s("div",{key:a,staticClass:"mr-2"},[s("img",{staticClass:"hover:opacity-75 tansition easy-in-out duration-150",attrs:{src:t.castProfileImage(e),alt:""}}),s("span",{staticClass:"text-gray-300"},[t._v(t._s(e.name))])])})),0)])},$=[],P={props:{casts:{required:!0}},methods:{castProfileImage:function(t){return t.profile_path?"https://image.tmdb.org/t/p/w300/"+t.profile_path:"https://via.placeholder.com/300x450"}}},U=P,L=Object(v["a"])(U,E,$,!1,null,null,null),D=L.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mx-auto  border-b border-gray-600 px-4 py-4"},[s("h2",{staticClass:"text-4xl font-semibold mb-5"},[t._v(" Images ")]),s("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},t._l(t.images,(function(e,a){return s("div",{key:a,staticClass:"mr-2 mt-2"},[s("img",{staticClass:"hover:opacity-75 tansition easy-in-out duration-150",attrs:{src:t.movieImage(e),alt:""},on:{click:function(s){return t.openModel(e)}}})])})),0)])},J=[],N={props:{images:{required:!0}},methods:{movieImage:function(t){return t.file_path?"https://image.tmdb.org/t/p/w300/"+t.file_path:"https://via.placeholder.com/300x450"},openModel:function(t){var e="";e=t.file_path?"https://image.tmdb.org/t/p/original/"+t.file_path:"https://via.placeholder.com/300x450",this.$emit("on-image-click",e)}}},Y=N,W=Object(v["a"])(Y,B,J,!1,null,null,null),Z=W.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto  z-50",staticStyle:{"background-color":"rgba(0, 0, 0, .5)"},attrs:{tabindex:"0"}},[s("div",{staticClass:"container mx-auto lg:px-32 rounded-lg overflow-y-auto"},[s("div",{staticClass:"bg-gray-900 rounded"},[s("div",{staticClass:"flex justify-end pr-4 pt-2"},[s("button",{staticClass:"text-3xl leading-none hover:text-gray-300",on:{click:t.close}},[t._v(" × ")])]),s("div",{staticClass:"modal-body px-8 py-8"},[s("div",{staticClass:"responsive-container overflow-hidden relative",style:t.isVideo?{"padding-top":"56.25%"}:{}},[t.isVideo?t._e():s("img",{attrs:{src:t.mediaURL}}),t.isVideo?s("iframe",{staticClass:"responsive-iframe absolute top-0 left-0 w-full h-full",staticStyle:{border:"0"},attrs:{allow:"autoplay; encrypted-media",allowfullscreen:"",src:t.mediaURL}}):t._e()])])])])])},q=[],G={props:{value:{required:!0},mediaURL:{required:!0},isVideo:{required:!0}},methods:{close:function(){this.$emit("input",!this.value)}}},H=G,Q=Object(v["a"])(H,F,q,!1,null,null,null),K=Q.exports,X={components:{Cast:D,Images:Z,MediaModel:K},data:function(){return{movie:{credits:{crew:{}},images:{backdrops:{}}},modelOpen:!1,isVideo:!1,mediaURL:""}},watch:{"$route.params.id":{handler:function(){this.fetchMovie(this.$route.params.id)},immediate:!0}},methods:{fetchMovie:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.$http.get("/movie/"+t+"?append_to_response=credits,videos,images");case 2:a=s.sent,e.movie=a.data;case 4:case"end":return s.stop()}}),s)})))()},openYouTubeModel:function(){this.mediaURL=this.youtubeVideo(),this.isVideo=!0,this.modelOpen=!0},openImageModel:function(){this.isVideo=!1,this.modelOpen=!0},youtubeVideo:function(){if(this.movie.videos)return"https://www.youtube.com/embed/"+this.movie.videos.results[0].key},showImageModel:function(t){this.mediaURL=t,this.isVideo=!1,this.modelOpen=!0}},computed:{posterPath:function(){return"https://image.tmdb.org/t/p/w500/"+this.movie.poster_path}}},tt=X,et=Object(v["a"])(tt,T,V,!1,null,null,null),st=et.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mx-auto px-4 py-16"},[s("h2",{staticClass:"text-yellow-500 text-lg font-semibold"},[t._v(" POPULAR ACTORS ")]),s("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},t._l(this.actors,(function(t){return s("ActorItem",{key:t.id,attrs:{actor:t}})})),1),s("div",{staticClass:"text-center mt-5"},[s("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.previous()}}},[t._v(" Previous ")]),s("a",{staticClass:"ml-5",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.next()}}},[t._v(" Next ")])])])},rt=[],it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("router-link",{attrs:{to:"/actor/"+this.actor.id}},[s("img",{attrs:{src:t.profileImage,alt:""}}),s("h3",[t._v(t._s(t.actor.name))]),s("p",{staticClass:"text-gray-400"},[t._v(" "+t._s(t.knownFor)+" ")])])],1)},nt=[],ot={props:{actor:{required:!0}},computed:{profileImage:function(){return"https://image.tmdb.org/t/p/w235_and_h235_face/"+this.actor.profile_path},knownFor:function(){for(var t,e="";t<this.actor.known_for.length-1;t++)e+=this.actor.known_for[t].title;return e}}},ct=ot,lt=Object(v["a"])(ct,it,nt,!1,null,null,null),ut=lt.exports,mt=1,dt={data:function(){return{actors:[]}},components:{ActorItem:ut},mounted:function(){this.fetchActors(mt)},methods:{fetchActors:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,e.$http.get("https://api.themoviedb.org/3/person/popular?page="+t);case 3:a=s.sent,e.actors=a.data.results,s.next=10;break;case 7:s.prev=7,s.t0=s["catch"](0),console.log(s.t0);case 10:case"end":return s.stop()}}),s,null,[[0,7]])})))()},scroll:function(){var t=this;window.onscroll=function(){var e=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;e&&(mt+=1,t.fetchActors(mt+=1))}},next:function(){mt+=1,this.fetchActors(mt)},previous:function(){mt-=1,this.fetchActors(mt)}}},ht=dt,pt=Object(v["a"])(ht,at,rt,!1,null,null,null),vt=pt.exports,ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container mx-auto px-4 py-16 flex"},[s("div",{staticClass:"flex-none"},[s("img",{attrs:{src:"https://image.tmdb.org/t/p/w300/"+this.actor.profile_path,alt:""}}),s("ul",{staticClass:"flex items-center mt-4"},[s("li",[s("a",{attrs:{href:"https://facebook.com/"+t.socialDetails.facebook_id,title:"Facebook"}},[s("svg",{staticClass:"fill-current text-gray-400 hover:text-white w-6",attrs:{viewBox:"0 0 448 512"}},[s("path",{attrs:{d:"M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"}})])])]),s("li",{staticClass:"ml-6"},[s("a",{attrs:{href:"https://instagram.com/"+t.socialDetails.instagram_id,title:"Instagram"}},[s("svg",{staticClass:"fill-current text-gray-400 hover:text-white w-6",attrs:{viewBox:"0 0 448 512"}},[s("path",{attrs:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}})])])]),s("li",{staticClass:"ml-6"},[s("a",{attrs:{href:"https://twitter.com/"+t.socialDetails.twitter_id,title:"Twitter"}},[s("svg",{staticClass:"fill-current text-gray-400 hover:text-white w-6",attrs:{viewBox:"0 0 512 512"}},[s("path",{attrs:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])])]),s("li",{staticClass:"ml-6"},[s("a",{attrs:{href:"",title:"Website"}},[s("svg",{staticClass:"fill-current text-gray-400 hover:text-white w-6",attrs:{viewBox:"0 0 496 512"}},[s("path",{attrs:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 01-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 01-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 00-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 00-15.55-3.1l-31.17 10.39a11.95 11.95 0 00-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 018.93 21.57 46.536 46.536 0 01-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 010-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"}})])])])])]),s("div",{staticClass:"ml-20"},[s("h2",{staticClass:"text-4xl font-semibold"},[t._v(" "+t._s(this.actor.name)+" ")]),s("div",{staticClass:"flex"},[s("svg",{staticClass:"fill-current text-gray-400 hover:text-white w-4",attrs:{viewBox:"0 0 448 512"}},[s("path",{attrs:{d:"M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"}})]),s("span",{staticClass:"ml-2 text-gray-400 text-sm"},[t._v("1988-12-16 (31)")])]),s("p",{staticClass:"text-gray-300 mt-8"},[t._v(" "+t._s(this.actor.biography)+" ")]),s("h4",{staticClass:"mt-12 font-semibold"},[t._v("Known For")]),s("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"},t._l(this.knownFor,(function(e){return s("div",{key:e.id},[s("router-link",{staticClass:"text-gray-400 text-sm leading-normal hover:text-white",attrs:{to:"/movie/"+e.id}},[s("img",{staticClass:"mt-1 hover:opacity-75 transition ease-in-out duration-150",attrs:{src:t.movieImage(e),alt:"poster"}}),t._v(" "+t._s(e.name)+" ")])],1)})),0)])]),s("div",{staticClass:"credits border-b border-gray-800"},[s("div",{staticClass:"container mx-auto px-4 py-16"},[s("h2",{staticClass:"text-4xl font-semibold"},[t._v("Credits")]),s("ul",{staticClass:"list-disc leading-loose pl-5 mt-8"},t._l(t.castMovies,(function(e){return s("li",{key:e.id},[s("strong",[t._v(t._s(t.castDetails(e))+" ")]),s("router-link",{staticClass:"hover:underline",attrs:{to:"/movie/"+e.id}},[t._v(" "+t._s(e.title)+" ")]),t._v(" as "+t._s(e.character)+" ")],1)})),0)])])])},gt=[],xt={data:function(){return{socialDetails:[],actor:{},knownFor:[],castMovies:{}}},mounted:function(){this.fetchActor(this.$route.params.id),this.fetchCredits(this.$route.params.id),this.fetchSocial(this.$route.params.id)},methods:{fetchActor:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.$http.get("https://api.themoviedb.org/3/person/"+t);case 2:a=s.sent,e.actor=a.data;case 4:case"end":return s.stop()}}),s)})))()},fetchCredits:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.$http.get("https://api.themoviedb.org/3/person/"+t+"/combined_credits");case 2:a=s.sent,e.castMovies=a.data.cast,e.knownFor=a.data.cast.slice(Math.max(a.data.cast.length-5,1));case 5:case"end":return s.stop()}}),s)})))()},movieImage:function(t){var e=t.poster_path;return e?"https://image.tmdb.org/t/p/w185/"+e:"https://via.placeholder.com/185x278"},fetchSocial:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.$http.get("https://api.themoviedb.org/3/person/"+t+"/external_ids");case 2:a=s.sent,e.socialDetails=a.data;case 4:case"end":return s.stop()}}),s)})))()},castDetails:function(t){return parseInt(t.release_date)+" ."}}},bt=xt,wt=Object(v["a"])(bt,ft,gt,!1,null,null,null),_t=wt.exports,Ct=new r["a"]({mode:"history",routes:[{path:"/movies-hunter/",name:"home",component:S},{path:"/movie/:id",name:"movie",component:st},{path:"/actors",name:"actors",component:vt},{path:"/actor/:id",name:"actor",component:_t}]}),yt=Ct,kt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"flex justify-between border-b border-gray-500"},[s("Navbar"),s("Searchbar")],1),s("router-view")],1)},Mt=[],Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex"},[a("router-link",{attrs:{to:"/movies-hunter/"}},[a("img",{attrs:{src:s("9d64"),alt:""}})]),a("ul",{staticClass:"flex mt-5"},[a("li",[a("router-link",{staticClass:"ml-5",attrs:{to:"/movies-hunter/"}},[t._v(" Movies ")])],1),a("li",[a("router-link",{staticClass:"ml-5",attrs:{to:"/actors"}},[t._v(" Actors ")])],1),a("li",[a("router-link",{staticClass:"ml-5",attrs:{to:"/profile"}},[t._v(" Profile ")])],1)])],1)},Rt=[],At={},jt=At,It=Object(v["a"])(jt,Ot,Rt,!1,null,null,null),zt=It.exports,St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5 flex relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],ref:"searchBox",staticClass:"rounded-full bg-gray-600 px-7 w-50 h-10 mr-3 focus:outline-none focus:outline-shawod",attrs:{type:"text",placeholder:"Search.."},domProps:{value:t.searchTerm},on:{input:[function(e){e.target.composing||(t.searchTerm=e.target.value)},t.debounceSearch],focus:t.handleFocus}}),a("div",{staticClass:"absolute top-0"},[a("svg",{staticClass:"fill-current w-4 text-gray-300 mt-2 ml-2 mt-3",attrs:{viewBox:"0 0 24 24"}},[a("path",{staticClass:"heroicon-ui",attrs:{d:"M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"}})])]),a("div",{staticClass:"absolute mt-12 rounded bg-gray-600 w-60 z-50"},[t.showSearchResult?a("ul",{staticClass:"mt-3"},t._l(t.searchResult,(function(e,s){return a("li",{key:s},[a("router-link",{staticClass:"flex items-center border-b border-gray-500 p-1",attrs:{to:"/movie/"+e.id},nativeOn:{click:function(e){t.showSearchResult=!1}}},[a("img",{staticClass:"w-10",attrs:{src:t.posterPath(e.poster_path),alt:""}}),a("span",{staticClass:"ml-3"},[t._v(t._s(e.title))])])],1)})),0):t._e(),0==t.searchResult.length&&t.showSearchResult?a("ul",{staticClass:"px-3"},[a("li",[t._v('No result found for "'+t._s(t.searchTerm)+'"')])]):t._e()]),a("img",{staticClass:"h-10 rounded-full",attrs:{src:s("92ef"),alt:""}})])},Tt=[],Vt={data:function(){return{searchResult:[],searchTerm:"",showSearchResult:!1}},mounted:function(){this.keyboardEvents()},methods:{debounceSearch:function(t){var e=this;clearTimeout(this.debounce),this.debounce=setTimeout((function(){t.target.value.length>3?e.fetchSearch(t.target.value):e.showSearchResult=!1}),600)},fetchSearch:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,e.$http.get("/search/movie?query="+t);case 3:a=s.sent,e.searchResult=a.data.results,e.showSearchResult=!!a.data.results,s.next=11;break;case 8:s.prev=8,s.t0=s["catch"](0),console.log(s.t0);case 11:case"end":return s.stop()}}),s,null,[[0,8]])})))()},handleFocus:function(){""!=this.searchTerm&&(this.showSearchResult=!0)},keyboardEvents:function(){var t=this,e=this;window.addEventListener("click",(function(e){t.$el.contains(e.target)||(t.showSearchResult=!1)})),window.addEventListener("keypress",(function(t){"47"==t.keyCode&&(t.preventDefault(),e.$refs.searchBox.focus())})),window.addEventListener("keydown",(function(e){"Escape"==e.key&&(t.showSearchResult=!1)}))},posterPath:function(t){return t?"https://image.tmdb.org/t/p/w500/"+t:"https://via.placeholder.com/50x75"}}},Et=Vt,$t=Object(v["a"])(Et,St,Tt,!1,null,null,null),Pt=$t.exports,Ut={name:"App",components:{Navbar:zt,Searchbar:Pt}},Lt=Ut,Dt=Object(v["a"])(Lt,kt,Mt,!1,null,null,null),Bt=Dt.exports,Jt=(s("034b"),s("bc3a")),Nt=s.n(Jt),Yt=Nt.a.create({baseURL:"https://api.themoviedb.org/3",headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjA0MzQ4YTlhOTIzMzY2NTg0NzUxZDY0ZTc1NDIzZiIsInN1YiI6IjVmYWFiYzcwMmEwOWJjMDA0MThlODI2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gFWvilnXld3rm7-LN333OU-TAu-wJiJzLv-9r5w94jM")}});a["a"].prototype.$http=Yt,a["a"].config.productionTip=!1,a["a"].use(r["a"]),new a["a"]({render:function(t){return t(Bt)},router:yt}).$mount("#app")},"92ef":function(t,e,s){t.exports=s.p+"img/avatar.ac331920.jpg"},"9d64":function(t,e,s){t.exports=s.p+"img/logo.147b0df4.png"},eb9e:function(t,e,s){}});
//# sourceMappingURL=app.9ed972e9.js.map