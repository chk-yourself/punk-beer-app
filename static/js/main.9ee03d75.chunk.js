(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/feather-sprite.0ed672ce.svg"},41:function(e,t,a){e.exports=a.p+"static/media/brewdog-logo.fb243bee.png"},43:function(e,t,a){e.exports=a(77)},53:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"beers",function(){return y});var n=a(0),c=a.n(n),i=a(32),o=a.n(i),s=a(14),l=a(11),u=a(35),d=a(42),m=a(16),f=a(7),h="FETCH_BEERS_SUCCESS",v="ADD_TO_FAVORITES",b="REMOVE_FROM_FAVORITES",p="LOAD_FAVORITED_BEERS",g="SET_FILTERS",E={beersArray:[],beersById:{},favoritedBeerIds:[],filters:""};function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case h:return Object(f.a)({},e,{beersArray:t.beersArray,beersById:t.beersById});case p:return Object(f.a)({},e,{favoritedBeerIds:e.favoritedBeerIds.concat(t.favoritedBeerIds)});case v:return Object(f.a)({},e,{favoritedBeerIds:e.favoritedBeerIds.concat(t.beerId)});case b:return Object(f.a)({},e,{favoritedBeerIds:e.favoritedBeerIds.filter(function(e){return e!==t.beerId})});case g:return Object(f.a)({},e,{filters:t.filters});default:return e}}function _(e){return[e.beers.beersArray,e.beers.beersById,Object.keys(e.beers.beersById)]}var O=function(e){var t=e.beers.beersArray,a=e.beers.favoritedBeerIds;return t.map(function(e){return Object(f.a)({},e,{isFavorite:-1!==a.indexOf("".concat(e.id))})})},j=function(e){var t=O(e),a=e.beers.filters.toLowerCase();return t.filter(function(e){return Object.values(e).some(function(e){return"string"===typeof e?e.toLowerCase().includes(a):Array.isArray(e)?e.some(function(e){return Object.values(e).some(function(e){if("string"===typeof e)return e.toLowerCase().includes(a)})}):(t=e)===Object(t)?Object.values(e).some(function(e){if("string"===typeof e)return e.toLowerCase().includes(a)}):void 0;var t})})},B=(a(53),a(21)),k=a(8),C=a(9),I=a(12),N=a(10),w=a(13),F=a(4),S=a(15),x=a.n(S),R=a(17),A=a(36),L=a.n(A),H=function(){var e=L.a.create({method:"get",baseURL:"https://api.punkapi.com/v2"});return{getAllBeers:function(){var t=Object(R.a)(x.a.mark(function t(){var a,r;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.get("/beers");case 2:return a=t.sent,r=a.data,t.abrupt("return",r.map(function(e){return{name:e.name,id:e.id,tagline:e.tagline,description:e.description,imageURL:e.image_url,ingredients:e.ingredients,foodPairing:e.food_pairing,abv:e.abv}}));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}(),T={getCachedFavoritedBeers:function(){try{var e=localStorage.getItem("FAVORITED_BEERS");return console.log({serializedFavorited:e}),e&&"undefined"!==e?JSON.parse(e):[]}catch(t){console.error(t)}},saveFavoritedBeers:function(e){try{var t=JSON.stringify(e.favoritedBeerIds);console.log("save",{serializedFavorited:t}),localStorage.setItem("FAVORITED_BEERS",t)}catch(a){console.error(a)}}},D=function(e){return{type:h,beersById:e.reduce(function(e,t){return e["".concat(t.id)]={name:t.name,id:t.id,tagline:t.tagline,description:t.description,imageURL:t.imageURL,ingredients:t.ingredients,foodPairing:t.foodPairing,abv:t.abv},e},{}),beersArray:e}},P=function(){return function(e){try{e(function(e){return{type:p,favoritedBeerIds:e}}(T.getCachedFavoritedBeers()))}catch(t){console.error(t)}}},U=a(37),M=a.n(U);var V=function(e){return c.a.createElement("svg",{className:"feather feather-".concat(e.name," ").concat(e.addClass||"").trim(),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c.a.createElement("use",{xlinkHref:"".concat(M.a,"#").concat(e.name)}))};function W(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__header"},c.a.createElement("input",{type:"checkbox",id:"item-".concat(e.beer.id),className:"card__input-favorite",name:"favorites",defaultChecked:e.beer.isFavorite}),c.a.createElement("label",{htmlFor:"item-".concat(e.beer.id),className:"card__label-favorite",onClick:function(){return e.onHeartClick("".concat(e.beer.id))}},c.a.createElement(V,{name:"heart"}))),c.a.createElement("div",{className:"card__body"},c.a.createElement("div",{className:"card__img-wrapper"},c.a.createElement("img",{className:"card__img",src:e.beer.imageURL,alt:e.name}))),c.a.createElement("div",{className:"card__footer"},c.a.createElement("h4",{className:"card__title"},e.beer.name),c.a.createElement("p",{className:"card__tagline"},e.beer.tagline)))}function q(e){var t=e.beers.map(function(t){return c.a.createElement(W,{key:t.id,beer:t,onHeartClick:function(t){return e.onHeartClick(t)}})}),a=e.beers.length%2===0;return c.a.createElement("section",{className:"section beers"},c.a.createElement("header",{className:"section__header"},c.a.createElement("h1",{className:"section__title"},"Punk Beers")),c.a.createElement("div",{className:"card-grid ".concat(a?"has-even-cards":"has-odd-cards")},t))}function J(e){var t=e.beers.map(function(t){return c.a.createElement(W,{key:t.id,beer:t,onHeartClick:function(t){return e.onHeartClick(t)}})}),a=e.beers.length%2===0;return c.a.createElement("section",{className:"section favorites"},c.a.createElement("header",{className:"section__header"},c.a.createElement("h1",{className:"section__title"},"My Favorites")),c.a.createElement("div",{className:"card-grid ".concat(a?"has-even-cards":"has-odd-cards")},t))}function z(e){var t=e.beers.map(function(t){return c.a.createElement(W,{key:t.id,beer:t,onHeartClick:function(t){return e.onHeartClick(t)}})}),a=e.beers.length%2===0;return c.a.createElement("section",{className:"section favorites"},c.a.createElement("header",{className:"section__header"},c.a.createElement("h1",{className:"section__title"},"Search Results")),c.a.createElement("div",{className:"card-grid ".concat(a?"has-even-cards":"has-odd-cards")},t))}var X=a(81),$=a(39),G=a(82),K=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(I.a)(this,Object(N.a)(t).call(this,e))).state={currentPath:""},a.handleRouteChange=a.handleRouteChange.bind(Object(F.a)(Object(F.a)(a))),a.toggleFavorite=a.toggleFavorite.bind(Object(F.a)(Object(F.a)(a))),a}return Object(w.a)(t,e),Object(C.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.unlisten=this.props.history.listen(function(t,a){console.log("history",a,t.pathname),e.state.currentPath!==t.pathname&&e.handleRouteChange(t.pathname)})}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"componentDidMount",value:function(){this.props.fetchBeers(),this.props.getCachedFavoritedBeers()}},{key:"toggleFavorite",value:function(e){-1===this.props.favoritedBeerIds.indexOf(e)?this.props.addToFavorites(e):this.props.removeFromFavorites(e)}},{key:"handleRouteChange",value:function(e){this.setState({currentPath:e})}},{key:"render",value:function(){var e=this;return console.log(this.props.favoritedBeerIds),c.a.createElement(X.a,null,c.a.createElement($.a,{exact:!0,path:"/",render:function(t){return c.a.createElement(q,{beers:e.props.ratedBeers,onHeartClick:function(t){return e.toggleFavorite(t)},location:t.location})}}),c.a.createElement($.a,{exact:!0,path:"/favorites",render:function(t){return c.a.createElement(J,{beers:e.props.favoritedBeers,onHeartClick:function(t){return e.toggleFavorite(t)},location:t.location})}}),c.a.createElement($.a,{exact:!0,path:"/search",render:function(t){return c.a.createElement(z,{beers:e.props.filteredBeers,onHeartClick:function(t){return e.toggleFavorite(t)},location:t.location})}}))}}]),t}(n.Component),Q=Object(G.a)(Object(l.b)(function(e){var t=_(e),a=Object(B.a)(t,3);return{beersArray:a[0],beersById:a[1],beerIdsArray:a[2],ratedBeers:O(e),favoritedBeers:function(e){return O(e).filter(function(e){return!0===e.isFavorite})}(e),favoritedBeerIds:function(e){return e.beers.favoritedBeerIds}(e),favoritedBeersById:function(e){var t=e.beers.beersById,a=e.beers.favoritedBeerIds.map(function(e){return Object(m.a)({},e,t[e])});return Object.assign.apply(Object,[{}].concat(Object(d.a)(a)))}(e),filteredBeers:j(e)}},function(e){return{fetchBeers:function(){return e(function(){var e=Object(R.a)(x.a.mark(function e(t){var a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.getAllBeers();case 3:a=e.sent,t(D(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}())},addToFavorites:function(t){return e(function(e){return{type:v,beerId:e}}(t))},removeFromFavorites:function(t){return e(function(e){return{type:b,beerId:e}}(t))},getCachedFavoritedBeers:function(){return e(P())}}})(K)),Y=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(I.a)(this,Object(N.a)(t).call(this,e))).state={isExpanded:!1,query:""},a.handleClick=a.handleClick.bind(Object(F.a)(Object(F.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(F.a)(Object(F.a)(a))),a.handleChange=a.handleChange.bind(Object(F.a)(Object(F.a)(a))),a}return Object(w.a)(t,e),Object(C.a)(t,[{key:"handleClick",value:function(e){e.stopPropagation();var t=document.querySelector(".search-form__input");e.target.classList.contains("search-form__input")||""!==t.value||this.setState(function(e){return{isExpanded:!e.isExpanded}})}},{key:"handleChange",value:function(e){this.setState({query:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleSearch(this.state.query)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{onClick:function(t){return e.handleClick(t)},className:"search-bar".concat(this.state.isExpanded?" is-expanded":"")},c.a.createElement("form",{className:"search-form",onSubmit:function(t){return e.handleSubmit(t)}},c.a.createElement("input",{className:"search-form__input",type:"text",onChange:this.handleChange}),c.a.createElement("input",{className:"search-form__submit",type:"submit",value:""}),c.a.createElement("button",{type:"button",className:"btn search-form__btn"},c.a.createElement(V,{name:"search"}))))}}]),t}(n.Component),Z=a(80),ee=a(41),te=a.n(ee);function ae(e){return c.a.createElement("div",{className:"app"},c.a.createElement("header",{className:"app__header"},c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"navbar__left"},c.a.createElement(Z.a,{exact:!0,to:"/"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{className:"logo__img",src:te.a,alt:"Brewdog logo"})))),c.a.createElement("div",{className:"navbar__right"},c.a.createElement("div",{className:"search-bar__wrapper clearfix"},c.a.createElement(Y,{handleSearch:e.handleSearch})),c.a.createElement(Z.a,{to:"/favorites",className:"navbar__link navbar__link--favorites"},"My Favorites",c.a.createElement("div",{className:"navbar__icon-wrapper","data-favorites-count":e.favoritesCount>0?e.favoritesCount:""},c.a.createElement(V,{name:"heart"})))))),c.a.createElement("main",{className:"app__main"},c.a.createElement(Q,null)))}var re=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(I.a)(this,Object(N.a)(t).call(this,e))).handleSearch=a.handleSearch.bind(Object(F.a)(Object(F.a)(a))),a}return Object(w.a)(t,e),Object(C.a)(t,[{key:"handleSearch",value:function(e){this.props.setFilters(e),this.props.history.push("/search")}},{key:"render",value:function(){return c.a.createElement(ae,{handleSearch:this.handleSearch,favoritesCount:this.props.favoritesCount})}}]),t}(n.Component),ne=Object(G.a)(Object(l.b)(function(e){var t=_(e),a=Object(B.a)(t,3);return{beersArray:a[0],beersById:a[1],beerIdsArray:a[2],ratedBeers:O(e),favoritesCount:function(e){return e.beers.favoritedBeerIds.length}(e),filteredBeers:j(e)}},function(e){return{setFilters:function(t){return e(function(e){return{type:g,filters:e}}(t))}}})(re));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=a(79),ie=a(20),oe={history:Object(ie.a)()},se=Object(s.d)(Object(s.c)(r),Object(s.a)(u.a)),le=oe.history;window.onbeforeunload=function(){var e=se.getState().beers;T.saveFavoritedBeers(e)},o.a.render(c.a.createElement(l.a,{store:se},c.a.createElement(ce.a,{basename:"/punk-beer-app",history:le},c.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.9ee03d75.chunk.js.map