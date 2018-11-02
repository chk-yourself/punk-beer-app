(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/feather-sprite.0ed672ce.svg"},41:function(e,t,a){e.exports=a.p+"static/media/brewdog-logo.fb243bee.png"},43:function(e,t,a){e.exports=a(77)},53:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"beers",function(){return y});var n=a(0),c=a.n(n),s=a(32),i=a.n(s),o=a(14),l=a(11),u=a(35),d=a(42),h=a(16),f=a(7),p="FETCH_BEERS_SUCCESS",m="ADD_TO_FAVORITES",b="REMOVE_FROM_FAVORITES",v="LOAD_FAVORITED_BEERS",g="SET_FILTERS",E={beersArray:[],beersById:{},favoritedBeerIds:[],filters:""};function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case p:return Object(f.a)({},e,{beersArray:t.beersArray,beersById:t.beersById});case v:return Object(f.a)({},e,{favoritedBeerIds:e.favoritedBeerIds.concat(t.favoritedBeerIds)});case m:return Object(f.a)({},e,{favoritedBeerIds:e.favoritedBeerIds.concat(t.beerId)});case b:return Object(f.a)({},e,{favoritedBeerIds:e.favoritedBeerIds.filter(function(e){return e!==t.beerId})});case g:return Object(f.a)({},e,{filters:t.filters});default:return e}}function _(e){return[e.beers.beersArray,e.beers.beersById,Object.keys(e.beers.beersById)]}var O=function(e){var t=e.beers.beersArray,a=e.beers.favoritedBeerIds;return t.map(function(e){return Object(f.a)({},e,{isFavorite:-1!==a.indexOf("".concat(e.id))})})},k=function(e){var t=O(e),a=e.beers.filters.toLowerCase();return t.filter(function(e){return Object.keys(e).some(function(t){return"string"===typeof e[t]&&"imageURL"!==t?e[t].toLowerCase().includes(a):Array.isArray(e[t])?e[t].some(function(e){return e.toLowerCase().includes(a)}):(r=e[t])===Object(r)?Object.values(e[t]).some(function(e){return Array.isArray(e)?e.some(function(e){return Object.values(e).some(function(e){if("string"===typeof e)return e.toLowerCase().includes(a)})}):"string"===typeof e?e.toLowerCase().includes(a):void 0}):void 0;var r})})},C=function(e){return e.beers.filters},I=(a(53),a(21)),B=a(8),j=a(9),S=a(12),w=a(10),N=a(13),x=a(2),F=a(15),R=a.n(F),A=a(17),L=a(36),T=a.n(L),V=function(){var e=T.a.create({method:"get",baseURL:"https://api.punkapi.com/v2"});return{getAllBeers:function(){var t=Object(A.a)(R.a.mark(function t(){var a,r;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.get("/beers");case 2:return a=t.sent,r=a.data,t.abrupt("return",r.map(function(e){return{name:e.name,id:e.id,tagline:e.tagline,description:e.description,imageURL:e.image_url,ingredients:e.ingredients,foodPairing:e.food_pairing,abv:e.abv}}));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}(),H={getCachedFavoritedBeers:function(){try{var e=localStorage.getItem("FAVORITED_BEERS");return e&&"undefined"!==e?JSON.parse(e):[]}catch(t){console.error(t)}},saveFavoritedBeers:function(e){try{var t=JSON.stringify(e.favoritedBeerIds);localStorage.setItem("FAVORITED_BEERS",t)}catch(a){console.error(a)}}},U=function(e){return{type:p,beersById:e.reduce(function(e,t){return e["".concat(t.id)]={name:t.name,id:t.id,tagline:t.tagline,description:t.description,imageURL:t.imageURL,ingredients:t.ingredients,foodPairing:t.foodPairing,abv:t.abv},e},{}),beersArray:e}},P=function(){return function(e){try{e(function(e){return{type:v,favoritedBeerIds:e}}(H.getCachedFavoritedBeers()))}catch(t){console.error(t)}}},W=a(37),D=a.n(W);var M=function(e){return c.a.createElement("svg",{className:"feather feather-".concat(e.name," ").concat(e.addClass||"").trim(),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c.a.createElement("use",{xlinkHref:"".concat(D.a,"#").concat(e.name)}))};function Q(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__header"},c.a.createElement("input",{type:"checkbox",id:"item-".concat(e.beer.id),className:"card__input-favorite",name:"favorites",checked:e.beer.isFavorite,onChange:function(){return e.onHeartClick("".concat(e.beer.id))}}),c.a.createElement("label",{htmlFor:"item-".concat(e.beer.id),className:"card__label-favorite"},c.a.createElement(M,{name:"heart"}))),c.a.createElement("div",{className:"card__body"},c.a.createElement("div",{className:"card__img-wrapper"},c.a.createElement("img",{className:"card__img",src:e.beer.imageURL,alt:e.name}))),c.a.createElement("div",{className:"card__footer"},c.a.createElement("h4",{className:"card__title"},e.beer.name),c.a.createElement("p",{className:"card__tagline"},e.beer.tagline)))}function J(e){var t=e.beers.map(function(t){return c.a.createElement(Q,{key:t.id,beer:t,onHeartClick:function(t){return e.onHeartClick(t)}})}),a=e.beers.length%2===0;return c.a.createElement("section",{className:"section beers"},c.a.createElement("header",{className:"section__header"},c.a.createElement("h1",{className:"section__title"},"Punk Beers")),c.a.createElement("div",{className:"card-grid ".concat(a?"has-even-cards":"has-odd-cards")},t))}function q(e){var t=e.beers.map(function(t){return c.a.createElement(Q,{key:t.id,beer:t,onHeartClick:function(t){return e.onHeartClick(t)}})}),a=e.beers.length%2===0;return c.a.createElement("section",{className:"section favorites"},c.a.createElement("header",{className:"section__header"},c.a.createElement("h1",{className:"section__title"},"My Favorites")),c.a.createElement("div",{className:"card-grid ".concat(a?"has-even-cards":"has-odd-cards")},t))}function X(e){var t=e.beers.map(function(t){return c.a.createElement(Q,{key:t.id,beer:t,onHeartClick:function(t){return e.onHeartClick(t)}})}),a=e.beers.length%2===0;return c.a.createElement("section",{className:"section search-results"},c.a.createElement("header",{className:"section__header"},c.a.createElement("h1",{className:"section__title section__title--sm"},c.a.createElement("span",{className:"search-results__count"},e.resultsCount),"".concat(1===e.resultsCount?"beer":"beers"," tagged"),c.a.createElement("span",{className:"search-results__query"},'"',e.searchQuery,'"'))),c.a.createElement("div",{className:"card-grid ".concat(a?"has-even-cards":"has-odd-cards")},t))}var $=a(81),z=a(39),G=a(82),K=function(e){function t(e){var a;return Object(B.a)(this,t),(a=Object(S.a)(this,Object(w.a)(t).call(this,e))).state={currentPath:""},a.handleRouteChange=a.handleRouteChange.bind(Object(x.a)(Object(x.a)(a))),a.toggleFavorite=a.toggleFavorite.bind(Object(x.a)(Object(x.a)(a))),a}return Object(N.a)(t,e),Object(j.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.unlisten=this.props.history.listen(function(t,a){console.log("history",a,t.pathname),e.state.currentPath!==t.pathname&&e.handleRouteChange(t.pathname)})}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"componentDidMount",value:function(){this.props.fetchBeers(),this.props.getCachedFavoritedBeers()}},{key:"toggleFavorite",value:function(e){-1===this.props.favoritedBeerIds.indexOf(e)?this.props.addToFavorites(e):this.props.removeFromFavorites(e)}},{key:"handleRouteChange",value:function(e){this.setState({currentPath:e})}},{key:"render",value:function(){var e=this;return console.log(this.props.ratedBeers),c.a.createElement($.a,null,c.a.createElement(z.a,{exact:!0,path:"/",render:function(t){return c.a.createElement(J,{beers:e.props.ratedBeers,onHeartClick:function(t){return e.toggleFavorite(t)},location:t.location})}}),c.a.createElement(z.a,{exact:!0,path:"/favorites",render:function(t){return c.a.createElement(q,{beers:e.props.favoritedBeers,onHeartClick:function(t){return e.toggleFavorite(t)},location:t.location})}}),c.a.createElement(z.a,{exact:!0,path:"/search",render:function(t){return c.a.createElement(X,{beers:e.props.filteredBeers,onHeartClick:function(t){return e.toggleFavorite(t)},location:t.location,searchQuery:e.props.filters,resultsCount:e.props.filteredBeersCount})}}))}}]),t}(n.Component),Y=Object(G.a)(Object(l.b)(function(e){var t=_(e),a=Object(I.a)(t,3);return{beersArray:a[0],beersById:a[1],beerIdsArray:a[2],ratedBeers:O(e),favoritedBeers:function(e){return O(e).filter(function(e){return!0===e.isFavorite})}(e),favoritedBeerIds:function(e){return e.beers.favoritedBeerIds}(e),favoritedBeersById:function(e){var t=e.beers.beersById,a=e.beers.favoritedBeerIds.map(function(e){return Object(h.a)({},e,t[e])});return Object.assign.apply(Object,[{}].concat(Object(d.a)(a)))}(e),filters:C(e),filteredBeers:k(e),filteredBeersCount:function(e){return k(e).length}(e)}},function(e){return{fetchBeers:function(){return e(function(){var e=Object(A.a)(R.a.mark(function e(t){var a;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.getAllBeers();case 3:a=e.sent,t(U(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}())},addToFavorites:function(t){return e(function(e){return{type:m,beerId:e}}(t))},removeFromFavorites:function(t){return e(function(e){return{type:b,beerId:e}}(t))},getCachedFavoritedBeers:function(){return e(P())}}})(K)),Z=function(e){function t(e){var a;return Object(B.a)(this,t),(a=Object(S.a)(this,Object(w.a)(t).call(this,e))).textInput=c.a.createRef(),a.handleClick=a.handleClick.bind(Object(x.a)(Object(x.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(x.a)(Object(x.a)(a))),a.handleChange=a.handleChange.bind(Object(x.a)(Object(x.a)(a))),a}return Object(N.a)(t,e),Object(j.a)(t,[{key:"handleClick",value:function(e){e.stopPropagation(),e.target.classList.contains("search-form__input")||""!==this.props.searchInputVal||(this.props.handleSearchClick(),!1===this.props.isExpanded&&this.textInput.current.focus())}},{key:"handleChange",value:function(e){this.props.handleSearchChange(e.target.value)}},{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.props.searchInputVal&&this.props.handleSearchSubmit(this.props.searchInputVal)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{onClick:function(t){return e.handleClick(t)},className:"search-bar".concat(this.props.isExpanded?" is-expanded":"")},c.a.createElement("form",{className:"search-form",onSubmit:function(t){return e.handleSubmit(t)}},c.a.createElement("input",{className:"search-form__input",type:"text",onChange:this.handleChange,ref:this.textInput,value:this.props.searchInputVal}),c.a.createElement("input",{className:"search-form__submit",type:"submit",value:""}),c.a.createElement("button",{type:"button",className:"btn search-form__btn"},c.a.createElement(M,{name:"search"}))))}}]),t}(n.Component),ee=a(80),te=a(41),ae=a.n(te);function re(e){return c.a.createElement("div",{className:"app"},c.a.createElement("header",{className:"app__header"},c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"navbar__left"},c.a.createElement(ee.a,{exact:!0,to:"/"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{className:"logo__img",src:ae.a,alt:"Brewdog logo"})))),c.a.createElement("div",{className:"navbar__right"},c.a.createElement("div",{className:"search-bar__wrapper clearfix"},c.a.createElement(Z,{handleSearchSubmit:e.handleSearchSubmit,handleSearchClick:e.handleSearchClick,handleSearchChange:e.handleSearchChange,searchInputVal:e.searchInputVal,isExpanded:e.searchIsExpanded})),c.a.createElement(ee.a,{to:"/favorites",className:"navbar__link navbar__link--favorites"},c.a.createElement("span",null,"My Favorites"),c.a.createElement("div",{className:"navbar__icon-wrapper".concat(0===e.favoritesCount?" hide-count":""),"data-favorites-count":e.favoritesCount},c.a.createElement(M,{name:"heart"})))))),c.a.createElement("main",{className:"app__main"},c.a.createElement(Y,null)))}var ne=function(e){function t(e){var a;return Object(B.a)(this,t),(a=Object(S.a)(this,Object(w.a)(t).call(this,e))).state={searchIsExpanded:!1,searchQuery:""},a.initSearchResults=a.initSearchResults.bind(Object(x.a)(Object(x.a)(a))),a.toggleSearchBar=a.toggleSearchBar.bind(Object(x.a)(Object(x.a)(a))),a.updateSearchInput=a.updateSearchInput.bind(Object(x.a)(Object(x.a)(a))),a}return Object(N.a)(t,e),Object(j.a)(t,[{key:"componentDidUpdate",value:function(e){var t=e.location.pathname;this.props.location.pathname!==t&&"/search"===t&&(this.updateSearchInput(""),this.toggleSearchBar(!1),this.props.setFilters(""))}},{key:"initSearchResults",value:function(e){this.props.setFilters(e),this.props.history.push("/search")}},{key:"toggleSearchBar",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===e?this.setState(function(e){return{searchIsExpanded:!e.searchIsExpanded}}):this.setState({searchIsExpanded:e})}},{key:"updateSearchInput",value:function(e){this.setState({searchQuery:e})}},{key:"render",value:function(){return c.a.createElement(re,{handleSearchClick:this.toggleSearchBar,handleSearchSubmit:this.initSearchResults,handleSearchChange:this.updateSearchInput,favoritesCount:this.props.favoritesCount,searchInputVal:this.state.searchQuery,searchIsExpanded:this.state.searchIsExpanded})}}]),t}(n.Component),ce=Object(G.a)(Object(l.b)(function(e){var t=_(e),a=Object(I.a)(t,3);return{beersArray:a[0],beersById:a[1],beerIdsArray:a[2],ratedBeers:O(e),favoritesCount:function(e){return e.beers.favoritedBeerIds.length}(e),filteredBeers:k(e),filters:C(e)}},function(e){return{setFilters:function(t){return e(function(e){return{type:g,filters:e}}(t))}}})(ne)),se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var oe=a(79),le=a(20),ue={history:Object(le.a)({basename:"/punk-beer-app"})},de=Object(o.d)(Object(o.c)(r),Object(o.a)(u.a)),he=ue.history;window.addEventListener("unload",function(){var e=de.getState().beers;H.saveFavoritedBeers(e)}),i.a.render(c.a.createElement(l.a,{store:de},c.a.createElement(oe.a,{basename:"/punk-beer-app",history:he},c.a.createElement(ce,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/punk-beer-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/punk-beer-app","/service-worker.js");se?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ie(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ie(t,e)})}}()}},[[43,2,1]]]);
//# sourceMappingURL=main.f80c7f9a.chunk.js.map