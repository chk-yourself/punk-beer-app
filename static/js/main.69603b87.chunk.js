(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/feather-sprite.0ed672ce.svg"},40:function(e,t,a){e.exports=a.p+"static/media/brewdog-logo.fb243bee.png"},42:function(e,t,a){e.exports=a(77)},52:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"beers",function(){return y});var n=a(0),i=a.n(n),c=a(32),o=a.n(c),s=a(15),l=a(14),u=a(35),d=a(41),m=a(13),b=a(5),h="FETCH_BEERS_SUCCESS",p="ADD_TO_FAVORITES",f="REMOVE_FROM_FAVORITES",v="LOAD_FAVORITED_BEERS",g="SET_FILTERS",E="SELECT_BEER",_="CLEAR_SELECTED_BEER",C="SUBMIT_QUERY",k={beersArray:[],beersById:{},favoritedBeerIds:[],query:"",filters:{abv:{min:0,max:null},ebc:{min:0,max:null},ibu:{min:0,max:null}},selectedBeerId:""};function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case h:return Object(b.a)({},e,{beersArray:t.beersArray,beersById:t.beersById});case v:return Object(b.a)({},e,{favoritedBeerIds:e.favoritedBeerIds.concat(t.favoritedBeerIds)});case p:return Object(b.a)({},e,{favoritedBeerIds:e.favoritedBeerIds.concat(t.beerId)});case f:return Object(b.a)({},e,{favoritedBeerIds:e.favoritedBeerIds.filter(function(e){return e!==t.beerId})});case g:return Object(b.a)({},e,{filters:t.filters});case C:return Object(b.a)({},e,{query:t.query});case E:case _:return Object(b.a)({},e,{selectedBeerId:t.beerId});default:return e}}function O(e){return[e.beers.beersArray,e.beers.beersById,Object.keys(e.beers.beersById)]}var j=function(e){return e.beers.favoritedBeerIds},B=function(e){var t=e.beers.beersArray,a=e.beers.favoritedBeerIds;return t.map(function(e){return Object(b.a)({},e,{isFavorite:-1!==a.indexOf("".concat(e.id))})})},x=function(e){var t=B(e),a=e.beers.query.toLowerCase();return t.filter(function(e){return Object.keys(e).some(function(t){return"string"===typeof e[t]&&"imageURL"!==t?e[t].toLowerCase().includes(a):Array.isArray(e[t])?e[t].some(function(e){return e.toLowerCase().includes(a)}):(r=e[t])===Object(r)?Object.values(e[t]).some(function(e){return Array.isArray(e)?e.some(function(e){return Object.values(e).some(function(e){if("string"===typeof e)return e.toLowerCase().includes(a)})}):"string"===typeof e?e.toLowerCase().includes(a):void 0}):void 0;var r})})},N=function(e){return e.beers.query},S=function(e){return e.beers.filters},F=function(e){return e.beers.selectedBeerId},I=function(e){return function(e){return B(e).reduce(function(e,t){return e["".concat(t.id)]={name:t.name,id:t.id,tagline:t.tagline,description:t.description,imageURL:t.imageURL,ingredients:t.ingredients,foodPairings:t.foodPairings,abv:t.abv,ibu:t.ibu,ebc:t.ebc,isFavorite:t.isFavorite},e},{})}(e)[e.beers.selectedBeerId]},w=(a(52),a(21)),H=a(8),R=a(9),A=a(12),T=a(10),L=a(11),U=a(2),M=a(16),P=a.n(M),V=a(17),D=a(36),q=a.n(D),W=function(){var e=q.a.create({method:"get",baseURL:"https://api.punkapi.com/v2"});return{getAllBeers:function(){var t=Object(V.a)(P.a.mark(function t(){var a,r;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.get("/beers");case 2:return a=t.sent,r=a.data,t.abrupt("return",r.map(function(e){return{name:e.name,id:e.id,tagline:e.tagline,description:e.description,imageURL:e.image_url,ingredients:e.ingredients,foodPairings:e.food_pairing,abv:e.abv,ibu:e.ibu,ebc:e.ebc}}));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}(),Q={getCachedFavoritedBeers:function(){try{var e=localStorage.getItem("FAVORITED_BEERS");return e&&"undefined"!==e?JSON.parse(e):[]}catch(t){console.error(t)}},saveFavoritedBeers:function(e){try{var t=JSON.stringify(e.favoritedBeerIds);localStorage.setItem("FAVORITED_BEERS",t)}catch(a){console.error(a)}}},J=function(e){return{type:h,beersById:e.reduce(function(e,t){return e["".concat(t.id)]={name:t.name,id:t.id,tagline:t.tagline,description:t.description,imageURL:t.imageURL,ingredients:t.ingredients,foodPairings:t.foodPairings,abv:t.abv,ibu:t.ibu,ebc:t.ebc},e},{}),beersArray:e}},Y=function(e){return{type:p,beerId:e}},X=function(e){return{type:f,beerId:e}},$=function(){return function(e){try{e(function(e){return{type:v,favoritedBeerIds:e}}(Q.getCachedFavoritedBeers()))}catch(t){console.error(t)}}},z=a(37),G=a.n(z);var K=function(e){return i.a.createElement("svg",{className:"feather feather-".concat(e.name," ").concat(e.addClass||"").trim(),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i.a.createElement("use",{xlinkHref:"".concat(G.a,"#").concat(e.name)}))},Z=function(e){function t(e){var a;return Object(H.a)(this,t),(a=Object(A.a)(this,Object(T.a)(t).call(this,e))).favoriteToggler=i.a.createRef(),a.cardClickHandler=a.cardClickHandler.bind(Object(U.a)(Object(U.a)(a))),a.heartClickHandler=a.heartClickHandler.bind(Object(U.a)(Object(U.a)(a))),a}return Object(L.a)(t,e),Object(R.a)(t,[{key:"cardClickHandler",value:function(e,t){t.target!==this.favoriteToggler.current&&this.props.onCardClick(e)}},{key:"heartClickHandler",value:function(e){e.stopPropagation()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"card",onClick:function(t){return e.cardClickHandler("".concat(e.props.beer.id),t)}},i.a.createElement("div",{className:"card__header"},i.a.createElement("input",{type:"checkbox",id:"cardCheckbox-".concat(this.props.beer.id),className:"card__input-favorite",name:"favorites",checked:this.props.beer.isFavorite,onChange:function(){return e.props.onHeartClick("".concat(e.props.beer.id))},onClick:function(t){return e.heartClickHandler(t)},ref:this.favoriteToggler}),i.a.createElement("label",{htmlFor:"cardCheckbox-".concat(this.props.beer.id),className:"card__label-favorite",onClick:function(t){return e.heartClickHandler(t)}},i.a.createElement(K,{name:"heart"}))),i.a.createElement("div",{className:"card__body"},i.a.createElement("div",{className:"card__img-wrapper"},i.a.createElement("img",{className:"card__img",src:this.props.beer.imageURL,alt:this.props.beer.name}))),i.a.createElement("div",{className:"card__footer"},i.a.createElement("h4",{className:"card__title"},this.props.beer.name),i.a.createElement("p",{className:"card__tagline"},this.props.beer.tagline)))}}]),t}(n.Component);function ee(e){var t=e.beers.map(function(t){return i.a.createElement(Z,{key:t.id,beer:t,onHeartClick:function(t){return e.onHeartClick(t)},onCardClick:function(t){return e.onCardClick(t)}})}),a=e.beers.length%2===0;return i.a.createElement("section",{className:"section beers"},i.a.createElement("header",{className:"section__header"},i.a.createElement("h1",{className:"section__title"},"Punk Beers")),i.a.createElement("div",{className:"card-grid ".concat(a?"has-even-cards":"has-odd-cards")},t))}function te(e){var t=e.beers.map(function(t){return i.a.createElement(Z,{key:t.id,beer:t,onHeartClick:function(t){return e.onHeartClick(t)},onCardClick:function(t){return e.onCardClick(t)}})}),a=e.beers.length%2===0;return i.a.createElement("section",{className:"section favorites"},i.a.createElement("header",{className:"section__header"},i.a.createElement("h1",{className:"section__title"},"My Favorites")),i.a.createElement("div",{className:"card-grid ".concat(a?"has-even-cards":"has-odd-cards")},t))}function ae(e){return i.a.createElement("div",{"data-id":e.id,className:"filter-bar__pane"},i.a.createElement("h3",{className:"filter-bar__pane-title"},"".concat(e.title,":")),e.content)}function re(e){return i.a.createElement("fieldset",{className:"filter-bar__fieldset"},e.children)}function ne(e){return i.a.createElement("div",{className:"filter-bar__tab ".concat(e.isActive?"is-active":"")},i.a.createElement("a",{href:"#".concat(e.id),onClick:e.clickHandler},e.id,i.a.createElement("span",{className:"filter-bar__tab--full"},"(",e.name,")")),e.children)}function ie(e){return i.a.createElement("label",{htmlFor:e.id,className:"filter-bar__label"},i.a.createElement("input",{type:"checkbox",id:e.id,value:"".concat(e.min,", ").concat(e.max),className:"filter-bar__checkbox",onChange:e.updateFilter,checked:e.filterIsApplied}),e.label)}function ce(e){return i.a.createElement("div",{className:"range-slider"},i.a.createElement("input",{type:"range",className:"range-slider__min",name:"range-slider__min",min:"0",max:"100",step:"10",value:e.min,onChange:e.minChangeHandler}),i.a.createElement("div",{className:"range-slider__output",style:{width:2*(e.max-e.min),left:"".concat(e.min,"%")},"data-min":e.min,"data-max":100===e.max?">100":e.max}),i.a.createElement("input",{type:"range",className:"range-slider__max",name:"range-slider__max",min:"0",max:"100",step:"10",value:e.max,onChange:e.maxChangeHandler}))}var oe=[{name:"Alcohol",id:"abv",inputType:"checkbox",values:{mild:{strength:"mild",min:0,max:3.9,rangeStr:"< 4%"},medium:{strength:"medium",min:4,max:7.5,rangeStr:"4.0 - 7.5%"},high:{strength:"high",min:7.6,max:null,rangeStr:"> 7.5%"}},subtitle:"Filter by alcohol content"},{name:"Color",id:"ebc",inputType:"checkbox",values:{straw:{color:"straw",min:4,max:7,rangeStr:"4 - 7"},gold:{color:"gold",min:8,max:17,rangeStr:"8 - 17"},amber:{color:"amber",min:18,max:38,rangeStr:"18 - 38"},brown:{color:"brown",min:39,max:78,rangeStr:"39 - 78"},black:{color:"black",min:79,max:null,rangeStr:"79+"}},subtitle:"Filter by color"},{name:"Bitterness",id:"ibu",inputType:"range",scale:{min:0,max:100,step:10},subtitle:"Filter by hops intensity"}],se=function(e){function t(e){var a;return Object(H.a)(this,t),(a=Object(A.a)(this,Object(T.a)(t).call(this,e))).state={currentTab:null,abvFilter:["mild","medium","high"],ebcFilter:["straw","gold","amber","brown","black"],ibuFilter:{min:0,max:100}},a.clickHandler=a.clickHandler.bind(Object(U.a)(Object(U.a)(a))),a.updateFilter=a.updateFilter.bind(Object(U.a)(Object(U.a)(a))),a.minChangeHandler=a.minChangeHandler.bind(Object(U.a)(Object(U.a)(a))),a.maxChangeHandler=a.maxChangeHandler.bind(Object(U.a)(Object(U.a)(a))),a}return Object(L.a)(t,e),Object(R.a)(t,[{key:"clickHandler",value:function(e,t){t.preventDefault(),this.setState(function(t){return{currentTab:t.currentTab!==e?e:null}})}},{key:"updateFilter",value:function(e,t,a){var r=!0===a.target.checked,n="".concat(e,"Filter");this.setState(function(e){return Object(m.a)({},n,r?e[n].concat(t):e[n].filter(function(e){return e!==t}))})}},{key:"minChangeHandler",value:function(e){var t=+e.target.value;this.setState(function(e){return{ibuFilter:Object(b.a)({},e.ibuFilter,{min:t<e.ibuFilter.max?t:e.ibuFilter.min})}})}},{key:"maxChangeHandler",value:function(e){var t=+e.target.value;this.setState(function(e){return{ibuFilter:Object(b.a)({},e.ibuFilter,{max:t>e.ibuFilter.min?t:e.ibuFilter.max})}})}},{key:"render",value:function(){var e=this;console.log(this.state.currentFilter);var t=function(t){return Object.keys(t.values).map(function(a){return i.a.createElement(ie,{key:a,id:a,label:"".concat(a," (").concat(t.values[a].rangeStr,")"),min:t.values[a].min,max:t.values[a].max,filterIsApplied:-1!==e.state["".concat(t.id,"Filter")].indexOf(a),updateFilter:function(r){return e.updateFilter(t.id,a,r)}})})},a=oe.map(function(a){return i.a.createElement(ne,{clickHandler:function(t){return e.clickHandler(a.id,t)},key:a.id,id:a.id,name:a.name,isActive:e.state.currentTab===a.id},e.state.currentTab===a.id&&i.a.createElement(ae,{id:a.id,title:a.subtitle,content:"checkbox"===a.inputType?i.a.createElement(re,null,t(a)):i.a.createElement("div",{className:"range-slider__wrapper"},i.a.createElement(ce,{min:e.state.ibuFilter.min,max:e.state.ibuFilter.max,minChangeHandler:function(t){return e.minChangeHandler(t)},maxChangeHandler:function(t){return e.maxChangeHandler(t)}}))}))}),r=oe.find(function(t){return t.id===e.state.currentTab});return i.a.createElement("div",{className:"filter-bar"},i.a.createElement("div",{className:"filter-bar__title"},"Filter by:"),i.a.createElement("div",{className:"filter-bar__tabs"},a),i.a.createElement("div",{className:"filter-bar__content"},null!==this.state.currentTab&&i.a.createElement(ae,{id:this.state.currentTab,title:r.subtitle,content:"checkbox"===r.inputType?i.a.createElement(re,null,t(r)):i.a.createElement("div",{className:"range-slider__wrapper"},i.a.createElement(ce,{min:this.state.ibuFilter.min,max:this.state.ibuFilter.max,minChangeHandler:function(t){return e.minChangeHandler(t)},maxChangeHandler:function(t){return e.maxChangeHandler(t)}}))})))}}]),t}(n.Component);function le(e){var t=e.beers.map(function(t){return i.a.createElement(Z,{key:t.id,beer:t,onHeartClick:function(t){return e.onHeartClick(t)},onCardClick:function(t){return e.onCardClick(t)}})}),a=e.beers.length%2===0;return i.a.createElement("section",{className:"section search-results"},i.a.createElement("header",{className:"section__header"},i.a.createElement("h1",{className:"section__title section__title--sm"},i.a.createElement("span",{className:"search-results__count"},e.resultsCount),"".concat(1===e.resultsCount?"beer":"beers"," tagged"),i.a.createElement("span",{className:"search-results__query"},'"',e.searchQuery,'"')),i.a.createElement(se,null)),i.a.createElement("div",{className:"card-grid ".concat(a?"has-even-cards":"has-odd-cards")},t))}var ue=a(79),de=a(76),me=a(81),be=function(e){function t(e){var a;return Object(H.a)(this,t),(a=Object(A.a)(this,Object(T.a)(t).call(this,e))).state={currentPath:""},a.handleRouteChange=a.handleRouteChange.bind(Object(U.a)(Object(U.a)(a))),a.toggleFavorite=a.toggleFavorite.bind(Object(U.a)(Object(U.a)(a))),a.updateSelectedBeer=a.updateSelectedBeer.bind(Object(U.a)(Object(U.a)(a))),a}return Object(L.a)(t,e),Object(R.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.unlisten=this.props.history.listen(function(t,a){console.log("history",a,t.pathname),e.state.currentPath!==t.pathname&&e.handleRouteChange(t.pathname)})}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"componentDidMount",value:function(){this.props.fetchBeers(),this.props.getCachedFavoritedBeers()}},{key:"toggleFavorite",value:function(e){-1===this.props.favoritedBeerIds.indexOf(e)?this.props.addToFavorites(e):this.props.removeFromFavorites(e)}},{key:"handleRouteChange",value:function(e){this.setState({currentPath:e})}},{key:"updateSelectedBeer",value:function(e){this.props.selectBeer(e)}},{key:"render",value:function(){var e=this;return console.table(this.props.ratedBeers),i.a.createElement(ue.a,null,i.a.createElement(de.a,{exact:!0,path:"/",render:function(t){return i.a.createElement(ee,{beers:e.props.ratedBeers,onHeartClick:function(t){return e.toggleFavorite(t)},onCardClick:function(t){return e.updateSelectedBeer(t)},location:t.location})}}),i.a.createElement(de.a,{path:"/favorites",render:function(t){return i.a.createElement(te,{beers:e.props.favoritedBeers,onHeartClick:function(t){return e.toggleFavorite(t)},location:t.location,onCardClick:function(t){return e.updateSelectedBeer(t)}})}}),i.a.createElement(de.a,{path:"/search",render:function(t){return i.a.createElement(le,{beers:e.props.filteredBeers,onHeartClick:function(t){return e.toggleFavorite(t)},location:t.location,searchQuery:e.props.query,resultsCount:e.props.filteredBeersCount,onCardClick:function(t){return e.updateSelectedBeer(t)}})}}))}}]),t}(n.Component),he=Object(me.a)(Object(l.b)(function(e){var t=O(e),a=Object(w.a)(t,3);return{beersArray:a[0],beersById:a[1],beerIdsArray:a[2],ratedBeers:B(e),favoritedBeers:function(e){return B(e).filter(function(e){return!0===e.isFavorite})}(e),favoritedBeerIds:j(e),favoritedBeersById:function(e){var t=e.beers.beersById,a=e.beers.favoritedBeerIds.map(function(e){return Object(m.a)({},e,t[e])});return Object.assign.apply(Object,[{}].concat(Object(d.a)(a)))}(e),filters:S(e),query:N(e),filteredBeers:x(e),filteredBeersCount:function(e){return x(e).length}(e),selectedBeerId:F(e),selectedBeer:I(e)}},function(e){return{fetchBeers:function(){return e(function(){var e=Object(V.a)(P.a.mark(function e(t){var a;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.getAllBeers();case 3:a=e.sent,t(J(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}())},addToFavorites:function(t){return e(Y(t))},removeFromFavorites:function(t){return e(X(t))},getCachedFavoritedBeers:function(){return e($())},selectBeer:function(t){return e(function(e){return{type:E,beerId:e}}(t))}}})(be)),pe=function(e){function t(e){var a;return Object(H.a)(this,t),(a=Object(A.a)(this,Object(T.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(U.a)(Object(U.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(U.a)(Object(U.a)(a))),a.handleChange=a.handleChange.bind(Object(U.a)(Object(U.a)(a))),a}return Object(L.a)(t,e),Object(R.a)(t,[{key:"handleClick",value:function(e){e.stopPropagation(),e.target.classList.contains("search-form__input")||""!==this.props.searchInputVal||this.props.handleSearchClick()}},{key:"handleChange",value:function(e){this.props.handleSearchChange(e.target.value)}},{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.props.searchInputVal&&this.props.handleSearchSubmit(this.props.searchInputVal)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{onClick:function(t){return e.handleClick(t)},className:"search-bar".concat(this.props.isExpanded?" is-expanded":"")},i.a.createElement("form",{className:"search-form",onSubmit:function(t){return e.handleSubmit(t)}},i.a.createElement("input",{className:"search-form__input",type:"text",onChange:this.handleChange,value:this.props.searchInputVal}),i.a.createElement("input",{className:"search-form__submit",type:"submit",value:""}),i.a.createElement("button",{type:"button",className:"btn search-form__btn"},i.a.createElement(K,{name:"search"}))))}}]),t}(n.Component);function fe(e){return i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"modal__content"},i.a.createElement("button",{type:"button",className:"modal__btn--close modal__icon-btn--close",onClick:function(){return e.onModalClose()}},i.a.createElement(K,{name:"x"})),i.a.createElement("div",{className:"modal__content--left"},i.a.createElement("div",{className:"modal__img-wrapper"},i.a.createElement("img",{className:"modal__img",src:e.beer.imageURL}))),i.a.createElement("div",{className:"modal__content--right"},i.a.createElement("h2",{className:"modal__title"},e.beer.name),i.a.createElement("p",{className:"modal__tagline"},e.beer.tagline),i.a.createElement("p",{className:"modal__desc"},e.beer.description),i.a.createElement("input",{type:"checkbox",id:"modalCheckbox-".concat(e.beer.id),className:"modal__input-favorite",name:"favorites",checked:e.beer.isFavorite,onChange:function(){return e.onHeartClick("".concat(e.beer.id))}}),i.a.createElement("label",{htmlFor:"modalCheckbox-".concat(e.beer.id),className:"modal__label-favorite"},i.a.createElement(K,{name:"heart"}),"".concat(e.beer.isFavorite?"Remove from":"Add to"," Favorites")),i.a.createElement("ul",{className:"modal__list"},i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"ABV:"),e.beer.abv),i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"Food Pairings:"),e.beer.foodPairings.join(", ")),i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"Malt:"),e.beer.ingredients.malt.map(function(e){return e.name}).join(", ")),i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"Hops:"),e.beer.ingredients.hops.map(function(e){return e.name}).join(", ")),i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"Yeast:"),e.beer.ingredients.yeast)))))}var ve=a(78),ge=a(40),Ee=a.n(ge);function _e(e){return console.log(e.selectedBeer),console.log(e.loadModal),i.a.createElement("div",{className:"app"},i.a.createElement("header",{className:"app__header"},i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"navbar__left"},i.a.createElement(ve.a,{exact:!0,to:"/"},i.a.createElement("div",{className:"logo"},i.a.createElement("img",{className:"logo__img",src:Ee.a,alt:"Brewdog logo"})))),i.a.createElement("div",{className:"navbar__right"},i.a.createElement("div",{className:"search-bar__wrapper clearfix"},i.a.createElement(pe,{handleSearchSubmit:e.handleSearchSubmit,handleSearchClick:e.handleSearchClick,handleSearchChange:e.handleSearchChange,searchInputVal:e.searchInputVal,isExpanded:e.searchIsExpanded})),i.a.createElement(ve.a,{to:"/favorites",className:"navbar__link navbar__link--favorites"},i.a.createElement("span",null,"My Favorites"),i.a.createElement("div",{className:"navbar__icon-wrapper".concat(0===e.favoritesCount?" hide-count":""),"data-favorites-count":e.favoritesCount},i.a.createElement(K,{name:"heart"})))))),e.loadModal&&i.a.createElement(fe,{beer:e.selectedBeer,onModalClose:function(){return e.onModalClose()},onHeartClick:function(t){return e.onHeartClick(t)}}),i.a.createElement("main",{className:"app__main"},i.a.createElement(he,null)))}var Ce=function(e){function t(e){var a;return Object(H.a)(this,t),(a=Object(A.a)(this,Object(T.a)(t).call(this,e))).state={searchIsExpanded:!1,searchQuery:""},a.initSearchResults=a.initSearchResults.bind(Object(U.a)(Object(U.a)(a))),a.toggleSearchBar=a.toggleSearchBar.bind(Object(U.a)(Object(U.a)(a))),a.updateSearchInput=a.updateSearchInput.bind(Object(U.a)(Object(U.a)(a))),a.toggleFavorite=a.toggleFavorite.bind(Object(U.a)(Object(U.a)(a))),a}return Object(L.a)(t,e),Object(R.a)(t,[{key:"componentDidUpdate",value:function(e){var t=e.location.pathname;this.props.location.pathname!==t&&"/search"===t&&(this.updateSearchInput(""),this.toggleSearchBar(!1),this.props.submitQuery(""))}},{key:"initSearchResults",value:function(e){this.props.submitQuery(e),this.props.history.push("/search")}},{key:"toggleSearchBar",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===e?this.setState(function(e){return{searchIsExpanded:!e.searchIsExpanded}}):this.setState({searchIsExpanded:e})}},{key:"toggleFavorite",value:function(e){-1===this.props.favoritedBeerIds.indexOf(e)?this.props.addToFavorites(e):this.props.removeFromFavorites(e)}},{key:"updateSearchInput",value:function(e){this.setState({searchQuery:e})}},{key:"render",value:function(){var e=this;return i.a.createElement(_e,{handleSearchClick:this.toggleSearchBar,handleSearchSubmit:this.initSearchResults,handleSearchChange:this.updateSearchInput,favoritesCount:this.props.favoritesCount,searchInputVal:this.state.searchQuery,searchIsExpanded:this.state.searchIsExpanded,loadModal:""!==this.props.selectedBeerId,selectedBeer:this.props.selectedBeer,onModalClose:function(){return e.props.clearSelectedBeer()},onHeartClick:function(t){return e.toggleFavorite(t)}})}}]),t}(n.Component),ke=Object(me.a)(Object(l.b)(function(e){var t=O(e),a=Object(w.a)(t,3);return{beersArray:a[0],beersById:a[1],beerIdsArray:a[2],ratedBeers:B(e),favoritesCount:function(e){return e.beers.favoritedBeerIds.length}(e),filteredBeers:x(e),favoritedBeerIds:j(e),filters:S(e),query:N(e),selectedBeerId:F(e),selectedBeer:I(e)}},function(e){return{addToFavorites:function(t){return e(Y(t))},removeFromFavorites:function(t){return e(X(t))},setFilters:function(t){return e(function(e){return{type:g,filters:e}}(t))},submitQuery:function(t){return e(function(e){return{type:C,query:e}}(t))},clearSelectedBeer:function(){return e({type:_,beerId:""})}}})(Ce)),ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Oe(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var je=a(80),Be=a(20),xe={history:Object(Be.a)({basename:"/punk-beer-app"})},Ne=Object(s.d)(Object(s.c)(r),Object(s.a)(u.a)),Se=xe.history;window.addEventListener("unload",function(){var e=Ne.getState().beers;Q.saveFavoritedBeers(e)}),o.a.render(i.a.createElement(l.a,{store:Ne},i.a.createElement(je.a,{basename:"/punk-beer-app",history:Se},i.a.createElement(ke,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/punk-beer-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/punk-beer-app","/service-worker.js");ye?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Oe(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Oe(t,e)})}}()}},[[42,2,1]]]);
//# sourceMappingURL=main.69603b87.chunk.js.map