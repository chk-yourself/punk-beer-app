(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/feather-sprite.0ed672ce.svg"},41:function(e,t,a){e.exports=a.p+"static/media/brewdog-logo.fb243bee.png"},42:function(e,t,a){e.exports=a(77)},52:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"beers",function(){return O});var n=a(0),i=a.n(n),c=a(33),s=a.n(c),l=a(16),o=a(14),u=a(36),d=a(15),m=a(26),b=a(13),h=a(4),p="FETCH_BEERS_SUCCESS",f="ADD_TO_FAVORITES",v="REMOVE_FROM_FAVORITES",g="LOAD_FAVORITED_BEERS",_="SET_FILTER",E="SELECT_BEER",y="CLEAR_SELECTED_BEER",C="SUBMIT_QUERY",k={beersArray:[],beersById:{},favoritedBeerIds:[],query:"",filters:{abv:{mild:{isActive:!0,value:"mild",min:0,max:3.9},medium:{isActive:!0,value:"medium",min:4,max:7.5},high:{isActive:!0,value:"high",min:7.6,max:null}},ebc:{straw:{isActive:!0,value:"straw",min:4,max:7},gold:{isActive:!0,value:"gold",min:8,max:17},amber:{isActive:!0,value:"amber",min:18,max:38},brown:{isActive:!0,value:"brown",min:39,max:78},black:{isActive:!0,value:"black",min:79,max:null}},ibu:{min:0,max:null}},selectedBeerId:""};function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case p:return Object(h.a)({},e,{beersArray:t.beersArray,beersById:t.beersById});case g:return Object(h.a)({},e,{favoritedBeerIds:e.favoritedBeerIds.concat(t.favoritedBeerIds)});case f:return Object(h.a)({},e,{favoritedBeerIds:e.favoritedBeerIds.concat(t.beerId)});case v:return Object(h.a)({},e,{favoritedBeerIds:e.favoritedBeerIds.filter(function(e){return e!==t.beerId})});case _:var a=t.filter,r=a.type,n=a.key,i=a.val,c="boolean"===typeof i;return Object(h.a)({},e,{filters:Object(h.a)({},e.filters,Object(b.a)({},r,Object(h.a)({},e.filters[r],Object(b.a)({},n,c?Object(h.a)({},e.filters[r][n],{isActive:i}):i))))});case C:return Object(h.a)({},e,{query:t.query});case E:case y:return Object(h.a)({},e,{selectedBeerId:t.beerId});default:return e}}function x(e){return[e.beers.beersArray,e.beers.beersById,Object.keys(e.beers.beersById)]}var j=function(e){return e.beers.favoritedBeerIds},F=function(e){var t=e.beers.beersArray,a=e.beers.favoritedBeerIds;return t.map(function(e){return Object(h.a)({},e,{isFavorite:-1!==a.indexOf("".concat(e.id))})})},B=function(e){var t=F(e),a=e.beers.query.toLowerCase();return t.filter(function(e){return Object.keys(e).some(function(t){return"string"===typeof e[t]&&"imageURL"!==t?e[t].toLowerCase().includes(a):Array.isArray(e[t])?e[t].some(function(e){return e.toLowerCase().includes(a)}):(r=e[t])===Object(r)?Object.values(e[t]).some(function(e){return Array.isArray(e)?e.some(function(e){return Object.values(e).some(function(e){if("string"===typeof e)return e.toLowerCase().includes(a)})}):"string"===typeof e?e.toLowerCase().includes(a):void 0}):void 0;var r})})},N=function(e){var t=e.beers.filters,a=t.abv,r=t.ebc,n=t.ibu,i=function(e){return Object.values(e).reduce(function(e,t){if(t.isActive){var a=e.length-1,r=e[a]||[null,null],n=Object(d.a)(r,2),i=n[0],c=n[1],s=[t.min,t.max],l=s[0],o=s[1],u=Math.ceil(c)===Math.floor(l)||c+1===l;-1!==a&&u?e[a]=[i,o]:e.push([l,o])}return e},[])},c=function(e,t){return e.some(function(e){var a=Object(m.a)(e),r=a[0],n=a[1];return t>=r&&(null===n||t<=n)})},s=[[n.min,n.max]],l=i(a),o=i(r);return F(e).filter(function(e){return c(s,e.ibu)&&c(l,e.abv)&&c(o,e.ebc)})},S=function(e){return e.beers.query},I=function(e){return e.beers.filters},w=function(e){return e.beers.selectedBeerId},A=function(e){return function(e){return F(e).reduce(function(e,t){return e["".concat(t.id)]={name:t.name,id:t.id,tagline:t.tagline,description:t.description,imageURL:t.imageURL,ingredients:t.ingredients,foodPairings:t.foodPairings,abv:t.abv,ibu:t.ibu,ebc:t.ebc,isFavorite:t.isFavorite},e},{})}(e)[e.beers.selectedBeerId]},H=(a(52),a(8)),R=a(9),T=a(11),L=a(10),U=a(12),V=a(2),M=a(17),q=a.n(M),P=a(18),D=a(37),W=a.n(D),Q=function(){var e=W.a.create({method:"get",baseURL:"https://api.punkapi.com/v2"});return{getAllBeers:function(){var t=Object(P.a)(q.a.mark(function t(){var a,r;return q.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.get("/beers");case 2:return a=t.sent,r=a.data,t.abrupt("return",r.map(function(e){return{name:e.name,id:e.id,tagline:e.tagline,description:e.description,imageURL:e.image_url,ingredients:e.ingredients,foodPairings:e.food_pairing,abv:e.abv,ibu:e.ibu,ebc:e.ebc}}));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}(),J={getCachedFavoritedBeers:function(){try{var e=localStorage.getItem("FAVORITED_BEERS");return e&&"undefined"!==e?JSON.parse(e):[]}catch(t){console.error(t)}},saveFavoritedBeers:function(e){try{var t=JSON.stringify(e.favoritedBeerIds);localStorage.setItem("FAVORITED_BEERS",t)}catch(a){console.error(a)}}},Y=function(e){return{type:p,beersById:e.reduce(function(e,t){return e["".concat(t.id)]={name:t.name,id:t.id,tagline:t.tagline,description:t.description,imageURL:t.imageURL,ingredients:t.ingredients,foodPairings:t.foodPairings,abv:t.abv,ibu:t.ibu,ebc:t.ebc},e},{}),beersArray:e}},X=function(e){return{type:f,beerId:e}},$=function(e){return{type:v,beerId:e}},z=function(){return function(e){try{e(function(e){return{type:g,favoritedBeerIds:e}}(J.getCachedFavoritedBeers()))}catch(t){console.error(t)}}},G=function(e){var t=e.type,a=e.key,r=e.val;return{type:_,filter:{type:t,key:a,val:r}}},K=a(38),Z=a.n(K);var ee=function(e){return i.a.createElement("svg",{className:"feather feather-".concat(e.name," ").concat(e.addClass||"").trim(),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i.a.createElement("use",{xlinkHref:"".concat(Z.a,"#").concat(e.name)}))},te=function(e){function t(e){var a;return Object(H.a)(this,t),(a=Object(T.a)(this,Object(L.a)(t).call(this,e))).favoriteToggler=i.a.createRef(),a.cardClickHandler=a.cardClickHandler.bind(Object(V.a)(Object(V.a)(a))),a.heartClickHandler=a.heartClickHandler.bind(Object(V.a)(Object(V.a)(a))),a}return Object(U.a)(t,e),Object(R.a)(t,[{key:"cardClickHandler",value:function(e,t){t.target!==this.favoriteToggler.current&&this.props.onCardClick(e)}},{key:"heartClickHandler",value:function(e){e.stopPropagation()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"card",onClick:function(t){return e.cardClickHandler("".concat(e.props.beer.id),t)}},i.a.createElement("div",{className:"card__header"},i.a.createElement("input",{type:"checkbox",id:"cardCheckbox-".concat(this.props.beer.id),className:"card__input-favorite",name:"favorites",checked:this.props.beer.isFavorite,onChange:function(){return e.props.onHeartClick("".concat(e.props.beer.id))},onClick:function(t){return e.heartClickHandler(t)},ref:this.favoriteToggler}),i.a.createElement("label",{htmlFor:"cardCheckbox-".concat(this.props.beer.id),className:"card__label-favorite",onClick:function(t){return e.heartClickHandler(t)}},i.a.createElement(ee,{name:"heart"}))),i.a.createElement("div",{className:"card__body"},i.a.createElement("div",{className:"card__img-wrapper"},i.a.createElement("img",{className:"card__img",src:this.props.beer.imageURL,alt:this.props.beer.name}))),i.a.createElement("div",{className:"card__footer"},i.a.createElement("h4",{className:"card__title"},this.props.beer.name),i.a.createElement("p",{className:"card__tagline"},this.props.beer.tagline),i.a.createElement("ul",{className:"card__details"},i.a.createElement("li",{className:"card__detail"},i.a.createElement("span",{className:"card__subheading"},"ABV:"),this.props.beer.abv),i.a.createElement("li",{className:"card__detail"},i.a.createElement("span",{className:"card__subheading"},"EBC:"),this.props.beer.ebc),i.a.createElement("li",{className:"card__detail"},i.a.createElement("span",{className:"card__subheading"},"IBU:"),this.props.beer.ibu))))}}]),t}(n.Component);function ae(e){var t=e.beers.map(function(t){return i.a.createElement(te,{key:t.id,beer:t,onHeartClick:function(t){return e.onHeartClick(t)},onCardClick:function(t){return e.onCardClick(t)}})}),a=e.beers.length%2===0;return i.a.createElement("section",{className:"section beers"},i.a.createElement("header",{className:"section__header"},i.a.createElement("h1",{className:"section__title"},"Punk Beers")),i.a.createElement("div",{className:"card-grid ".concat(a?"has-even-cards":"has-odd-cards")},t))}function re(e){var t=e.beers.map(function(t){return i.a.createElement(te,{key:t.id,beer:t,onHeartClick:function(t){return e.onHeartClick(t)},onCardClick:function(t){return e.onCardClick(t)}})}),a=e.beers.length%2===0;return i.a.createElement("section",{className:"section favorites"},i.a.createElement("header",{className:"section__header"},i.a.createElement("h1",{className:"section__title"},"My Favorites")),i.a.createElement("div",{className:"card-grid ".concat(a?"has-even-cards":"has-odd-cards")},t))}function ne(e){return i.a.createElement("div",{"data-id":e.id,className:"filter-bar__pane"},i.a.createElement("h3",{className:"filter-bar__pane-title"},"".concat(e.title,":")),e.content)}function ie(e){return i.a.createElement("fieldset",{className:"filter-bar__fieldset"},e.children)}function ce(e){return i.a.createElement("div",{className:"filter-bar__tab ".concat(e.isActive?"is-active":"")},i.a.createElement("a",{href:"#".concat(e.id),onClick:e.clickHandler},e.id,i.a.createElement("span",{className:"filter-bar__tab--full"},"(",e.name,")")),e.children)}function se(e){return i.a.createElement("label",{htmlFor:e.id,className:"filter-bar__label"},i.a.createElement("input",{type:"checkbox",id:e.id,value:"".concat(e.min,", ").concat(e.max),className:"filter-bar__checkbox",onChange:e.onFilterChange,checked:e.filterIsApplied}),e.label)}function le(e){return i.a.createElement("div",{className:"range-slider"},i.a.createElement("input",{type:"range",className:"range-slider__min",name:"range-slider__min",min:"0",max:"100",step:"10",value:e.min,onChange:e.minChangeHandler}),i.a.createElement("div",{className:"range-slider__output",style:{width:2*(e.max-e.min),left:"".concat(e.min,"%")},"data-min":e.min,"data-max":100===e.max?">100":e.max}),i.a.createElement("input",{type:"range",className:"range-slider__max",name:"range-slider__max",min:"0",max:"100",step:"10",value:e.max,onChange:e.maxChangeHandler}))}var oe=[{name:"Alcohol",id:"abv",inputType:"checkbox",values:{mild:{index:0,strength:"mild",min:0,max:3.9,rangeStr:"< 4%"},medium:{index:1,strength:"medium",min:4,max:7.5,rangeStr:"4.0 - 7.5%"},high:{index:2,strength:"high",min:7.6,max:null,rangeStr:"> 7.5%"}},subtitle:"Filter by alcohol content"},{name:"Color",id:"ebc",inputType:"checkbox",values:{straw:{index:0,color:"straw",min:4,max:7,rangeStr:"4 - 7"},gold:{index:1,color:"gold",min:8,max:17,rangeStr:"8 - 17"},amber:{index:2,color:"amber",min:18,max:38,rangeStr:"18 - 38"},brown:{index:3,color:"brown",min:39,max:78,rangeStr:"39 - 78"},black:{index:4,color:"black",min:79,max:null,rangeStr:"79+"}},subtitle:"Filter by color"},{name:"Bitterness",id:"ibu",inputType:"range",scale:{min:0,max:100,step:10},subtitle:"Filter by hops intensity"}],ue=function(e){function t(e){var a;return Object(H.a)(this,t),(a=Object(T.a)(this,Object(L.a)(t).call(this,e))).state={currentTab:null,abvFilter:[{isActive:!0,value:"mild",min:0,max:3.9},{isActive:!0,value:"medium",min:4,max:7.5},{isActive:!0,value:"high",min:7.6,max:null}],ebcFilter:[{isActive:!0,value:"straw",min:4,max:7},{isActive:!0,value:"gold",min:8,max:17},{isActive:!0,value:"amber",min:18,max:38},{isActive:!0,value:"brown",min:39,max:78},{isActive:!0,value:"black",min:79,max:null}],ibuFilter:{min:0,max:100}},a.clickHandler=a.clickHandler.bind(Object(V.a)(Object(V.a)(a))),a.onFilterChange=a.onFilterChange.bind(Object(V.a)(Object(V.a)(a))),a.minChangeHandler=a.minChangeHandler.bind(Object(V.a)(Object(V.a)(a))),a.maxChangeHandler=a.maxChangeHandler.bind(Object(V.a)(Object(V.a)(a))),a}return Object(U.a)(t,e),Object(R.a)(t,[{key:"clickHandler",value:function(e,t){t.preventDefault(),this.setState(function(t){return{currentTab:t.currentTab!==e?e:null}})}},{key:"onFilterChange",value:function(e,t,a,r){var n=!0===r.target.checked,i="".concat(e,"Filter");this.setState(function(e){return Object(b.a)({},i,e[i].map(function(e,a){return a===t?Object(h.a)({},e,{isActive:!e.isActive}):Object(h.a)({},e)}))}),this.props.setFilter({type:e,key:a,val:n})}},{key:"minChangeHandler",value:function(e){var t=+e.target.value;this.setState(function(e){return{ibuFilter:Object(h.a)({},e.ibuFilter,{min:t<e.ibuFilter.max?t:e.ibuFilter.min})}}),t<this.state.ibuFilter.max&&this.props.setFilter({type:"ibu",key:"min",val:t})}},{key:"maxChangeHandler",value:function(e){var t=+e.target.value;this.setState(function(e){return{ibuFilter:Object(h.a)({},e.ibuFilter,{max:t>e.ibuFilter.min?t:e.ibuFilter.max})}}),t>this.state.ibuFilter.min&&this.props.setFilter({type:"ibu",key:"max",val:t})}},{key:"render",value:function(){var e=this;console.log(this.state.currentFilter);var t=function(t){return Object.keys(t.values).map(function(a){return i.a.createElement(se,{key:a,id:a,label:"".concat(a," (").concat(t.values[a].rangeStr,")"),min:t.values[a].min,max:t.values[a].max,filterIsApplied:e.state["".concat(t.id,"Filter")][t.values[a].index].isActive,onFilterChange:function(r){return e.onFilterChange(t.id,t.values[a].index,a,r)}})})},a=oe.map(function(a){return i.a.createElement(ce,{clickHandler:function(t){return e.clickHandler(a.id,t)},key:a.id,id:a.id,name:a.name,isActive:e.state.currentTab===a.id},e.state.currentTab===a.id&&i.a.createElement(ne,{id:a.id,title:a.subtitle,content:"checkbox"===a.inputType?i.a.createElement(ie,null,t(a)):i.a.createElement("div",{className:"range-slider__wrapper"},i.a.createElement(le,{min:e.state.ibuFilter.min,max:e.state.ibuFilter.max,minChangeHandler:function(t){return e.minChangeHandler(t)},maxChangeHandler:function(t){return e.maxChangeHandler(t)}}))}))}),r=oe.find(function(t){return t.id===e.state.currentTab});return i.a.createElement("div",{className:"filter-bar"},i.a.createElement("div",{className:"filter-bar__title"},"Filter by:"),i.a.createElement("div",{className:"filter-bar__tabs"},a),i.a.createElement("div",{className:"filter-bar__content"},null!==this.state.currentTab&&i.a.createElement(ne,{id:this.state.currentTab,title:r.subtitle,content:"checkbox"===r.inputType?i.a.createElement(ie,null,t(r)):i.a.createElement("div",{className:"range-slider__wrapper"},i.a.createElement(le,{min:this.state.ibuFilter.min,max:this.state.ibuFilter.max,minChangeHandler:function(t){return e.minChangeHandler(t)},maxChangeHandler:function(t){return e.maxChangeHandler(t)}}))})))}}]),t}(n.Component);function de(e){var t=e.beers.map(function(t){return i.a.createElement(te,{key:t.id,beer:t,onHeartClick:function(t){return e.onHeartClick(t)},onCardClick:function(t){return e.onCardClick(t)}})}),a=e.beers.length%2===0;return i.a.createElement("section",{className:"section search-results"},i.a.createElement("header",{className:"section__header"},i.a.createElement("h1",{className:"section__title section__title--sm"},i.a.createElement("span",{className:"search-results__count"},e.resultsCount),"".concat(1===e.resultsCount?"beer":"beers"," tagged"),i.a.createElement("span",{className:"search-results__query"},'"',e.searchQuery,'"')),i.a.createElement(ue,{setFilter:e.setFilter})),i.a.createElement("div",{className:"card-grid ".concat(a?"has-even-cards":"has-odd-cards")},t))}var me=a(80),be=a(76),he=a(81),pe=function(e){function t(e){var a;return Object(H.a)(this,t),(a=Object(T.a)(this,Object(L.a)(t).call(this,e))).state={currentPath:"",showFilteredList:!1},a.handleRouteChange=a.handleRouteChange.bind(Object(V.a)(Object(V.a)(a))),a.toggleFavorite=a.toggleFavorite.bind(Object(V.a)(Object(V.a)(a))),a.updateSelectedBeer=a.updateSelectedBeer.bind(Object(V.a)(Object(V.a)(a))),a.updateFilterView=a.updateFilterView.bind(Object(V.a)(Object(V.a)(a))),a}return Object(U.a)(t,e),Object(R.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.unlisten=this.props.history.listen(function(t,a){console.log("history",a,t.pathname),e.state.currentPath!==t.pathname&&e.handleRouteChange(t.pathname)})}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"componentDidMount",value:function(){this.props.fetchBeers(),this.props.getCachedFavoritedBeers()}},{key:"toggleFavorite",value:function(e){-1===this.props.favoritedBeerIds.indexOf(e)?this.props.addToFavorites(e):this.props.removeFromFavorites(e)}},{key:"handleRouteChange",value:function(e){this.setState({currentPath:e})}},{key:"updateSelectedBeer",value:function(e){this.props.selectBeer(e)}},{key:"updateFilterView",value:function(e){this.props.setFilter(e),this.setState(function(e){return{showFilteredList:!e.showFilteredList}})}},{key:"render",value:function(){var e=this;return console.table(this.props.filteredBeers),console.log(this.props.filters),i.a.createElement(me.a,null,i.a.createElement(be.a,{exact:!0,path:"/",render:function(t){return i.a.createElement(ae,{beers:e.props.ratedBeers,onHeartClick:function(t){return e.toggleFavorite(t)},onCardClick:function(t){return e.updateSelectedBeer(t)},location:t.location})}}),i.a.createElement(be.a,{path:"/favorites",render:function(t){return i.a.createElement(re,{beers:e.props.favoritedBeers,onHeartClick:function(t){return e.toggleFavorite(t)},location:t.location,onCardClick:function(t){return e.updateSelectedBeer(t)}})}}),i.a.createElement(be.a,{path:"/search",render:function(t){return i.a.createElement(de,{beers:e.state.showFilteredList?e.props.filteredBeers:e.props.queryResults,onHeartClick:function(t){return e.toggleFavorite(t)},location:t.location,searchQuery:e.props.query,resultsCount:e.state.showFilteredList?e.props.filteredBeersCount:e.props.queryResultsCount,onCardClick:function(t){return e.updateSelectedBeer(t)},setFilter:function(t){return e.updateFilterView(t)}})}}))}}]),t}(n.Component),fe=Object(he.a)(Object(o.b)(function(e){var t=x(e),a=Object(d.a)(t,3);return{beersArray:a[0],beersById:a[1],beerIdsArray:a[2],ratedBeers:F(e),favoritedBeers:function(e){return F(e).filter(function(e){return!0===e.isFavorite})}(e),favoritedBeerIds:j(e),favoritedBeersById:function(e){var t=e.beers.beersById,a=e.beers.favoritedBeerIds.map(function(e){return Object(b.a)({},e,t[e])});return Object.assign.apply(Object,[{}].concat(Object(m.a)(a)))}(e),filters:I(e),query:S(e),filteredBeers:N(e),queryResults:B(e),queryResultsCount:function(e){return B(e).length}(e),filteredBeersCount:function(e){return N(e).length}(e),selectedBeerId:w(e),selectedBeer:A(e)}},function(e){return{fetchBeers:function(){return e(function(){var e=Object(P.a)(q.a.mark(function e(t){var a;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.getAllBeers();case 3:a=e.sent,t(Y(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}())},addToFavorites:function(t){return e(X(t))},removeFromFavorites:function(t){return e($(t))},getCachedFavoritedBeers:function(){return e(z())},selectBeer:function(t){return e(function(e){return{type:E,beerId:e}}(t))},setFilter:function(t){return e(G(t))}}})(pe)),ve=function(e){function t(e){var a;return Object(H.a)(this,t),(a=Object(T.a)(this,Object(L.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(V.a)(Object(V.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(V.a)(Object(V.a)(a))),a.handleChange=a.handleChange.bind(Object(V.a)(Object(V.a)(a))),a.searchTextInput=i.a.createRef(),a}return Object(U.a)(t,e),Object(R.a)(t,[{key:"handleClick",value:function(e){e.stopPropagation(),e.target.classList.contains("search-form__input")||""!==this.props.searchInputVal||(this.props.isExpanded||this.searchTextInput.current.focus(),this.props.handleSearchClick())}},{key:"handleChange",value:function(e){this.props.handleSearchChange(e.target.value)}},{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.props.searchInputVal&&this.props.handleSearchSubmit(this.props.searchInputVal)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{onClick:function(t){return e.handleClick(t)},className:"search-bar".concat(this.props.isExpanded?" is-expanded":"")},i.a.createElement("form",{className:"search-form",onSubmit:function(t){return e.handleSubmit(t)}},i.a.createElement("input",{className:"search-form__input",type:"text",onChange:this.handleChange,value:this.props.searchInputVal,ref:this.searchTextInput}),i.a.createElement("input",{className:"search-form__submit",type:"submit",value:""}),i.a.createElement("button",{type:"button",className:"btn search-form__btn"},i.a.createElement(ee,{name:"search"}))))}}]),t}(n.Component);function ge(e){return i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"modal__content"},i.a.createElement("button",{type:"button",className:"modal__btn--close modal__icon-btn--close",onClick:function(){return e.onModalClose()}},i.a.createElement(ee,{name:"x"})),i.a.createElement("div",{className:"modal__content--left"},i.a.createElement("div",{className:"modal__img-wrapper"},i.a.createElement("img",{className:"modal__img",src:e.beer.imageURL}))),i.a.createElement("div",{className:"modal__content--right"},i.a.createElement("h2",{className:"modal__title"},e.beer.name),i.a.createElement("p",{className:"modal__tagline"},e.beer.tagline),i.a.createElement("p",{className:"modal__desc"},e.beer.description),i.a.createElement("input",{type:"checkbox",id:"modalCheckbox-".concat(e.beer.id),className:"modal__input-favorite",name:"favorites",checked:e.beer.isFavorite,onChange:function(){return e.onHeartClick("".concat(e.beer.id))}}),i.a.createElement("label",{htmlFor:"modalCheckbox-".concat(e.beer.id),className:"modal__label-favorite"},i.a.createElement(ee,{name:"heart"}),"".concat(e.beer.isFavorite?"Remove from":"Add to"," Favorites")),i.a.createElement("ul",{className:"modal__list"},i.a.createElement("li",null,i.a.createElement("ul",{className:"modal__sublist"},i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"ABV:"),e.beer.abv),i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"EBC:"),e.beer.ebc),i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"IBU:"),e.beer.ibu))),i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"Food Pairings:"),e.beer.foodPairings.join(", ")),i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"Malt:"),e.beer.ingredients.malt.map(function(e){return e.name}).join(", ")),i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"Hops:"),e.beer.ingredients.hops.map(function(e){return e.name}).join(", ")),i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"Yeast:"),e.beer.ingredients.yeast)))))}var _e=a(79),Ee=a(41),ye=a.n(Ee);function Ce(e){return console.log(e.selectedBeer),i.a.createElement("div",{className:"app"},i.a.createElement("header",{className:"app__header"},i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"navbar__left"},i.a.createElement(_e.a,{exact:!0,to:"/"},i.a.createElement("div",{className:"logo"},i.a.createElement("img",{className:"logo__img",src:ye.a,alt:"Brewdog logo"})))),i.a.createElement("div",{className:"navbar__right"},i.a.createElement("div",{className:"search-bar__wrapper clearfix"},i.a.createElement(ve,{handleSearchSubmit:e.handleSearchSubmit,handleSearchClick:e.handleSearchClick,handleSearchChange:e.handleSearchChange,searchInputVal:e.searchInputVal,isExpanded:e.searchIsExpanded})),i.a.createElement(_e.a,{to:"/favorites",className:"navbar__link navbar__link--favorites"},i.a.createElement("span",null,"My Favorites"),i.a.createElement("div",{className:"navbar__icon-wrapper".concat(0===e.favoritesCount?" hide-count":""),"data-favorites-count":e.favoritesCount},i.a.createElement(ee,{name:"heart"})))))),e.loadModal&&i.a.createElement(ge,{beer:e.selectedBeer,onModalClose:function(){return e.onModalClose()},onHeartClick:function(t){return e.onHeartClick(t)}}),i.a.createElement("main",{className:"app__main"},i.a.createElement(fe,null)))}var ke=function(e){function t(e){var a;return Object(H.a)(this,t),(a=Object(T.a)(this,Object(L.a)(t).call(this,e))).state={searchIsExpanded:!1,searchQuery:""},a.initSearchResults=a.initSearchResults.bind(Object(V.a)(Object(V.a)(a))),a.toggleSearchBar=a.toggleSearchBar.bind(Object(V.a)(Object(V.a)(a))),a.updateSearchInput=a.updateSearchInput.bind(Object(V.a)(Object(V.a)(a))),a.toggleFavorite=a.toggleFavorite.bind(Object(V.a)(Object(V.a)(a))),a}return Object(U.a)(t,e),Object(R.a)(t,[{key:"componentDidUpdate",value:function(e){var t=e.location.pathname;this.props.location.pathname!==t&&"/search"===t&&(this.updateSearchInput(""),this.toggleSearchBar(!1),this.props.submitQuery(""))}},{key:"initSearchResults",value:function(e){this.props.submitQuery(e),this.props.history.push("/search")}},{key:"toggleSearchBar",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===e?this.setState(function(e){return{searchIsExpanded:!e.searchIsExpanded}}):this.setState({searchIsExpanded:e})}},{key:"toggleFavorite",value:function(e){-1===this.props.favoritedBeerIds.indexOf(e)?this.props.addToFavorites(e):this.props.removeFromFavorites(e)}},{key:"updateSearchInput",value:function(e){this.setState({searchQuery:e})}},{key:"render",value:function(){var e=this;return i.a.createElement(Ce,{handleSearchClick:this.toggleSearchBar,handleSearchSubmit:this.initSearchResults,handleSearchChange:this.updateSearchInput,favoritesCount:this.props.favoritesCount,searchInputVal:this.state.searchQuery,searchIsExpanded:this.state.searchIsExpanded,loadModal:""!==this.props.selectedBeerId,selectedBeer:this.props.selectedBeer,onModalClose:function(){return e.props.clearSelectedBeer()},onHeartClick:function(t){return e.toggleFavorite(t)},setFilter:function(t){return e.props.setFilter(t)}})}}]),t}(n.Component),Oe=Object(he.a)(Object(o.b)(function(e){var t=x(e),a=Object(d.a)(t,3);return{beersArray:a[0],beersById:a[1],beerIdsArray:a[2],ratedBeers:F(e),favoritesCount:function(e){return e.beers.favoritedBeerIds.length}(e),filteredBeers:N(e),queryResults:B(e),favoritedBeerIds:j(e),filters:I(e),query:S(e),selectedBeerId:w(e),selectedBeer:A(e)}},function(e){return{addToFavorites:function(t){return e(X(t))},removeFromFavorites:function(t){return e($(t))},setFilter:function(t){return e(G(t))},submitQuery:function(t){return e(function(e){return{type:C,query:e}}(t))},clearSelectedBeer:function(){return e({type:y,beerId:""})}}})(ke)),xe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function je(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Fe=a(78),Be=a(21),Ne={history:Object(Be.a)({basename:"/punk-beer-app"})},Se=Object(l.d)(Object(l.c)(r),Object(l.a)(u.a)),Ie=Ne.history;window.addEventListener("unload",function(){var e=Se.getState().beers;J.saveFavoritedBeers(e)}),s.a.render(i.a.createElement(o.a,{store:Se},i.a.createElement(Fe.a,{basename:"/punk-beer-app",history:Ie},i.a.createElement(Oe,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/punk-beer-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/punk-beer-app","/service-worker.js");xe?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):je(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):je(t,e)})}}()}},[[42,2,1]]]);
//# sourceMappingURL=main.65057aec.chunk.js.map