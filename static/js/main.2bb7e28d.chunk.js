(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/feather-sprite.0ed672ce.svg"},41:function(e,t,a){e.exports=a.p+"static/media/brewdog-logo.fb243bee.png"},42:function(e,t,a){e.exports=a(77)},52:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"beers",function(){return B});var n=a(0),i=a.n(n),c=a(33),s=a.n(c),l=a(15),o=a(14),u=a(36),d=a(13),m=a(22),h=a(16),p=a(5),b="FETCH_BEERS_SUCCESS",f="ADD_TO_FAVORITES",v="REMOVE_FROM_FAVORITES",g="LOAD_FAVORITED_BEERS",_="SET_FILTER",E="SELECT_BEER",y="CLEAR_SELECTED_BEER",k="SUBMIT_QUERY",C={beersArray:[],beersById:{},favoritedBeerIds:[],query:"",filters:{abv:{mild:{isActive:!0,value:"mild",min:0,max:3.9},medium:{isActive:!0,value:"medium",min:4,max:7.5},high:{isActive:!0,value:"high",min:7.6,max:null}},ebc:{straw:{isActive:!0,value:"straw",min:4,max:7},gold:{isActive:!0,value:"gold",min:8,max:17},amber:{isActive:!0,value:"amber",min:18,max:38},brown:{isActive:!0,value:"brown",min:39,max:78},black:{isActive:!0,value:"black",min:79,max:null}},ibu:{min:0,max:null}},selectedBeerId:""};function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case b:return Object(p.a)({},e,{beersArray:t.beersArray,beersById:t.beersById});case g:return Object(p.a)({},e,{favoritedBeerIds:e.favoritedBeerIds.concat(t.favoritedBeerIds)});case f:return Object(p.a)({},e,{favoritedBeerIds:e.favoritedBeerIds.concat(t.beerId)});case v:return Object(p.a)({},e,{favoritedBeerIds:e.favoritedBeerIds.filter(function(e){return e!==t.beerId})});case _:var a=t.filter,r=a.type,n=a.key,i=a.val,c="boolean"===typeof i;return Object(p.a)({},e,{filters:Object(p.a)({},e.filters,Object(h.a)({},r,Object(p.a)({},e.filters[r],Object(h.a)({},n,c?Object(p.a)({},e.filters[r][n],{isActive:i}):i))))});case k:return Object(p.a)({},e,{query:t.query});case E:case y:return Object(p.a)({},e,{selectedBeerId:t.beerId});default:return e}}function O(e){return[e.beers.beersArray,e.beers.beersById,Object.keys(e.beers.beersById)]}var x=function(e){return e.beers.favoritedBeerIds},j=function(e){var t=e.beers.beersArray,a=e.beers.favoritedBeerIds;return t.map(function(e){return Object(p.a)({},e,{isFavorite:-1!==a.indexOf("".concat(e.id))})})},F=function(e){var t=j(e),a=e.beers.query.toLowerCase();return t.filter(function(e){return Object.keys(e).some(function(t){return"string"===typeof e[t]&&"imageURL"!==t?e[t].toLowerCase().includes(a):Array.isArray(e[t])?e[t].some(function(e){return e.toLowerCase().includes(a)}):(r=e[t])===Object(r)?Object.values(e[t]).some(function(e){return Array.isArray(e)?e.some(function(e){return Object.values(e).some(function(e){if("string"===typeof e)return e.toLowerCase().includes(a)})}):"string"===typeof e?e.toLowerCase().includes(a):void 0}):void 0;var r})})},N=function(e){return Object.values(e).reduce(function(e,t){if(t.isActive){var a=e.length-1,r=e[a]||[null,null],n=Object(d.a)(r,2),i=n[0],c=n[1],s=[t.min,t.max],l=s[0],o=s[1],u=Math.ceil(c)===Math.floor(l)||c+1===l;-1!==a&&u?e[a]=[i,o]:e.push([l,o])}return e},[])},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j(e),a=e.beers.filters,r=a.abv,n=a.ebc,i=a.ibu,c=function(e,t){return e.some(function(e){var a=Object(m.a)(e),r=a[0],n=a[1];return t>=r&&(null===n||t<=n)})},s=[[i.min,i.max]],l=N(r),o=N(n);return t.filter(function(e){return c(s,e.ibu)&&c(l,e.abv)&&c(o,e.ebc)})},w=function(e){return e.beers.query},I=function(e){return e.beers.filters},H=function(e){return e.beers.selectedBeerId},A=function(e){return function(e){return j(e).reduce(function(e,t){return e["".concat(t.id)]={name:t.name,id:t.id,tagline:t.tagline,description:t.description,imageURL:t.imageURL,ingredients:t.ingredients,foodPairings:t.foodPairings,abv:t.abv,ibu:t.ibu,ebc:t.ebc,isFavorite:t.isFavorite},e},{})}(e)[e.beers.selectedBeerId]},R=function(e){return S(e,F(e))},T=function(e){return Object.values(e).every(function(e){return!0===e.isActive})},L=(a(52),a(8)),V=a(9),U=a(11),M=a(10),P=a(12),q=a(2),Q=a(17),D=a.n(Q),W=a(18),J=a(37),Y=a.n(J),X=function(){var e=Y.a.create({method:"get",baseURL:"https://api.punkapi.com/v2"});return{getAllBeers:function(){var t=Object(W.a)(D.a.mark(function t(){var a,r;return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.get("/beers",{params:{ibu_gt:1,ebc_gt:1}});case 2:return a=t.sent,r=a.data,t.abrupt("return",r.map(function(e){return{name:e.name,id:e.id,tagline:e.tagline,description:e.description,imageURL:e.image_url,ingredients:e.ingredients,foodPairings:e.food_pairing,abv:e.abv,ibu:e.ibu,ebc:e.ebc}}));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}(),$={getCachedFavoritedBeers:function(){try{var e=localStorage.getItem("FAVORITED_BEERS");return e&&"undefined"!==e?JSON.parse(e):[]}catch(t){console.error(t)}},saveFavoritedBeers:function(e){try{var t=JSON.stringify(e.favoritedBeerIds);localStorage.setItem("FAVORITED_BEERS",t)}catch(a){console.error(a)}}},z=function(e){return{type:b,beersById:e.reduce(function(e,t){return e["".concat(t.id)]={name:t.name,id:t.id,tagline:t.tagline,description:t.description,imageURL:t.imageURL,ingredients:t.ingredients,foodPairings:t.foodPairings,abv:t.abv,ibu:t.ibu,ebc:t.ebc},e},{}),beersArray:e}},G=function(e){return{type:f,beerId:e}},K=function(e){return{type:v,beerId:e}},Z=function(){return function(e){try{e(function(e){return{type:g,favoritedBeerIds:e}}($.getCachedFavoritedBeers()))}catch(t){console.error(t)}}},ee=function(e){var t=e.type,a=e.key,r=e.val;return{type:_,filter:{type:t,key:a,val:r}}},te=a(38),ae=a.n(te);var re=function(e){return i.a.createElement("svg",{className:"feather feather-".concat(e.name," ").concat(e.addClass||"").trim(),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i.a.createElement("use",{xlinkHref:"".concat(ae.a,"#").concat(e.name)}))},ne=function(e){function t(e){var a;return Object(L.a)(this,t),(a=Object(U.a)(this,Object(M.a)(t).call(this,e))).favoriteToggler=i.a.createRef(),a.cardClickHandler=a.cardClickHandler.bind(Object(q.a)(Object(q.a)(a))),a.heartClickHandler=a.heartClickHandler.bind(Object(q.a)(Object(q.a)(a))),a}return Object(P.a)(t,e),Object(V.a)(t,[{key:"cardClickHandler",value:function(e,t){t.target!==this.favoriteToggler.current&&this.props.onCardClick(e)}},{key:"heartClickHandler",value:function(e){e.stopPropagation()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"card",onClick:function(t){return e.cardClickHandler("".concat(e.props.beer.id),t)}},i.a.createElement("div",{className:"card__header"},i.a.createElement("input",{type:"checkbox",id:"cardCheckbox-".concat(this.props.beer.id),className:"card__input-favorite",name:"favorites",checked:this.props.beer.isFavorite,onChange:function(){return e.props.onHeartClick("".concat(e.props.beer.id))},onClick:function(t){return e.heartClickHandler(t)},ref:this.favoriteToggler}),i.a.createElement("label",{htmlFor:"cardCheckbox-".concat(this.props.beer.id),className:"card__label-favorite",onClick:function(t){return e.heartClickHandler(t)}},i.a.createElement(re,{name:"heart"}))),i.a.createElement("div",{className:"card__body"},i.a.createElement("div",{className:"card__img-wrapper"},i.a.createElement("img",{className:"card__img",src:this.props.beer.imageURL,alt:this.props.beer.name}))),i.a.createElement("div",{className:"card__footer"},i.a.createElement("h4",{className:"card__title"},this.props.beer.name),i.a.createElement("p",{className:"card__tagline"},this.props.beer.tagline),i.a.createElement("ul",{className:"card__details"},i.a.createElement("li",{className:"card__detail"},i.a.createElement("span",{className:"card__subheading"},"ABV:"),this.props.beer.abv),i.a.createElement("li",{className:"card__detail"},i.a.createElement("span",{className:"card__subheading"},"EBC:"),this.props.beer.ebc),i.a.createElement("li",{className:"card__detail"},i.a.createElement("span",{className:"card__subheading"},"IBU:"),this.props.beer.ibu))))}}]),t}(n.Component);function ie(e){var t=e.beers.map(function(t){return i.a.createElement(ne,{key:t.id,beer:t,onHeartClick:function(t){return e.onHeartClick(t)},onCardClick:function(t){return e.onCardClick(t)}})}),a=e.beers.length%2===0,r=e.beers.length,n=e.refinedFilters.map(function(e,t){return i.a.createElement("span",{key:t,className:"filter-tag".concat(0===t?" filter-tag--first":"")},e)});return i.a.createElement("section",{className:"section beers"},i.a.createElement("header",{className:"section__header"},i.a.createElement("h1",{className:"section__title"},"Punk Beers"),e.filterBar,e.showFilteredList&&i.a.createElement("h2",{className:"section__subheading"},i.a.createElement("span",{className:"search-results__count"},r),"".concat(1===r?"beer":"beers"," tagged"),n)),i.a.createElement("div",{className:"card-grid ".concat(a?"has-even-cards":"has-odd-cards")},t))}function ce(e){var t=e.beers.map(function(t){return i.a.createElement(ne,{key:t.id,beer:t,onHeartClick:function(t){return e.onHeartClick(t)},onCardClick:function(t){return e.onCardClick(t)}})}),a=e.beers.length%2===0;return i.a.createElement("section",{className:"section favorites"},i.a.createElement("header",{className:"section__header"},i.a.createElement("h1",{className:"section__title"},"My Favorites"),e.filterBar),i.a.createElement("div",{className:"card-grid ".concat(a?"has-even-cards":"has-odd-cards")},t))}function se(e){return i.a.createElement("div",{"data-id":e.id,className:"filter-bar__pane"},i.a.createElement("h3",{className:"filter-bar__pane-title"},"".concat(e.title,":")),e.content)}function le(e){return i.a.createElement("fieldset",{className:"filter-bar__fieldset"},e.children)}function oe(e){return i.a.createElement("div",{className:"filter-bar__tab".concat(e.isActive?" is-active":"").concat(e.isRefined?" is-refined":"")},i.a.createElement("a",{href:"#".concat(e.id),onClick:e.clickHandler},e.id,i.a.createElement("span",{className:"filter-bar__tab--full"},"(",e.name,")")),e.children)}function ue(e){return i.a.createElement("label",{htmlFor:e.id,className:"filter-bar__label"},i.a.createElement("input",{type:"checkbox",id:e.id,value:"".concat(e.min,", ").concat(e.max),className:"filter-bar__checkbox",onChange:e.onFilterChange,checked:e.filterIsApplied}),e.label)}function de(e){return i.a.createElement("div",{className:"range-slider"},i.a.createElement("input",{type:"range",className:"range-slider__min",name:"range-slider__min",min:"0",max:"100",step:"10",value:e.min,onChange:e.minChangeHandler}),i.a.createElement("div",{className:"range-slider__output",style:{width:2*(e.max-e.min),left:"".concat(e.min,"%")},"data-min":e.min,"data-max":100===e.max?">100":e.max}),i.a.createElement("input",{type:"range",className:"range-slider__max",name:"range-slider__max",min:"0",max:"100",step:"10",value:e.max,onChange:e.maxChangeHandler}))}var me=[{name:"Alcohol",id:"abv",inputType:"checkbox",values:{mild:{index:0,strength:"mild",min:0,max:3.9,rangeStr:"< 4%"},medium:{index:1,strength:"medium",min:4,max:7.5,rangeStr:"4.0 - 7.5%"},high:{index:2,strength:"high",min:7.6,max:null,rangeStr:"> 7.5%"}},subtitle:"Filter by alcohol strength"},{name:"Color",id:"ebc",inputType:"checkbox",values:{straw:{index:0,color:"straw",min:4,max:7,rangeStr:"4 - 7"},gold:{index:1,color:"gold",min:8,max:17,rangeStr:"8 - 17"},amber:{index:2,color:"amber",min:18,max:38,rangeStr:"18 - 38"},brown:{index:3,color:"brown",min:39,max:78,rangeStr:"39 - 78"},black:{index:4,color:"black",min:79,max:null,rangeStr:"79+"}},subtitle:"Filter by color"},{name:"Bitterness",id:"ibu",inputType:"range",scale:{min:0,max:100,step:10},subtitle:"Filter by hops intensity"}],he=function(e){function t(e){var a;return Object(L.a)(this,t),(a=Object(U.a)(this,Object(M.a)(t).call(this,e))).state={currentTab:null},a.clickHandler=a.clickHandler.bind(Object(q.a)(Object(q.a)(a))),a.onFilterChange=a.onFilterChange.bind(Object(q.a)(Object(q.a)(a))),a.minChangeHandler=a.minChangeHandler.bind(Object(q.a)(Object(q.a)(a))),a.maxChangeHandler=a.maxChangeHandler.bind(Object(q.a)(Object(q.a)(a))),a}return Object(P.a)(t,e),Object(V.a)(t,[{key:"clickHandler",value:function(e,t){t.preventDefault(),this.setState(function(t){return{currentTab:t.currentTab!==e?e:null}})}},{key:"onFilterChange",value:function(e,t,a){var r=!0===a.target.checked;this.props.setFilter({type:e,key:t,val:r})}},{key:"minChangeHandler",value:function(e){var t=null===this.props.filters.ibu.max?100:this.props.filters.ibu.max,a=+e.target.value;a<t&&this.props.setFilter({type:"ibu",key:"min",val:a})}},{key:"maxChangeHandler",value:function(e){var t=+e.target.value;t>this.props.filters.ibu.min&&this.props.setFilter({type:"ibu",key:"max",val:100===t?null:t})}},{key:"render",value:function(){var e=this;console.log(this.state.currentFilter);var t=function(t){return Object.keys(t.values).map(function(a){return i.a.createElement(ue,{key:a,id:a,label:"".concat(a," (").concat(t.values[a].rangeStr,")"),min:t.values[a].min,max:t.values[a].max,filterIsApplied:e.props.filters[t.id][a].isActive,onFilterChange:function(r){return e.onFilterChange(t.id,a,r)}})})},a=me.map(function(a){return i.a.createElement(oe,{clickHandler:function(t){return e.clickHandler(a.id,t)},key:a.id,id:a.id,name:a.name,isActive:e.state.currentTab===a.id,isRefined:-1!==e.props.refinedFilterTypes.indexOf(a.id)},e.state.currentTab===a.id&&i.a.createElement(se,{id:a.id,title:a.subtitle,content:"checkbox"===a.inputType?i.a.createElement(le,null,t(a)):i.a.createElement("div",{className:"range-slider__wrapper"},i.a.createElement(de,{min:e.props.filters.ibu.min,max:null===e.props.filters.ibu.max?100:e.props.filters.ibu.max,minChangeHandler:function(t){return e.minChangeHandler(t)},maxChangeHandler:function(t){return e.maxChangeHandler(t)}}))}))}),r=me.find(function(t){return t.id===e.state.currentTab});return i.a.createElement("div",{className:"filter-bar"},i.a.createElement("button",{type:"button",className:"btn filter-bar__btn--toggle ".concat(this.props.isVisible?"is-active":""),onClick:function(){return e.props.toggleHandler()}},i.a.createElement(re,{name:"sliders"})),this.props.isVisible&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"filter-bar__tabs"},a),i.a.createElement("div",{className:"filter-bar__content"},null!==this.state.currentTab&&i.a.createElement(se,{id:this.state.currentTab,title:r.subtitle,content:"checkbox"===r.inputType?i.a.createElement(le,null,t(r)):i.a.createElement("div",{className:"range-slider__wrapper"},i.a.createElement(de,{min:this.props.filters.ibu.min,max:null===this.props.filters.ibu.max?100:this.props.filters.ibu.max,minChangeHandler:function(t){return e.minChangeHandler(t)},maxChangeHandler:function(t){return e.maxChangeHandler(t)}}))}))))}}]),t}(n.Component);function pe(e){var t=e.beers.map(function(t){return i.a.createElement(ne,{key:t.id,beer:t,onHeartClick:function(t){return e.onHeartClick(t)},onCardClick:function(t){return e.onCardClick(t)}})}),a=e.beers.length%2===0,r=e.beers.length,n=e.refinedFilters.map(function(e,t){return i.a.createElement("span",{key:t,className:"filter-tag".concat(0===t?" filter-tag--first":"")},e)});return i.a.createElement("section",{className:"section search-results"},i.a.createElement("header",{className:"section__header"},(""!==e.searchQuery||!1!==e.showFilteredList)&&i.a.createElement("h1",{className:"section__title section__title--sm"},i.a.createElement("span",{className:"search-results__count"},r),"".concat(1===r?"beer":"beers"," tagged"),""!==e.searchQuery&&i.a.createElement("span",{className:"search-results__query"},e.searchQuery),e.showFilteredList&&n),e.filterBar),i.a.createElement("div",{className:"card-grid ".concat(a?"has-even-cards":"has-odd-cards")},t))}var be=a(80),fe=a(76),ve=a(81),ge=function(e){function t(e){var a;return Object(L.a)(this,t),(a=Object(U.a)(this,Object(M.a)(t).call(this,e))).state={currentPath:""},a.handleRouteChange=a.handleRouteChange.bind(Object(q.a)(Object(q.a)(a))),a.toggleFavorite=a.toggleFavorite.bind(Object(q.a)(Object(q.a)(a))),a.updateSelectedBeer=a.updateSelectedBeer.bind(Object(q.a)(Object(q.a)(a))),a}return Object(P.a)(t,e),Object(V.a)(t,[{key:"componentWillMount",value:function(){this.unlisten=this.props.history.listen(function(e,t){console.log("history",t,e.pathname)})}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"componentDidMount",value:function(){this.props.fetchBeers(),this.props.getCachedFavoritedBeers();var e=this.props.location;this.state.currentPath!==e.pathname&&this.handleRouteChange(e.pathname)}},{key:"componentDidUpdate",value:function(e){var t=e.location.pathname,a=this.props.location.pathname;a!==t&&this.handleRouteChange(a)}},{key:"toggleFavorite",value:function(e){-1===this.props.favoritedBeerIds.indexOf(e)?this.props.addToFavorites(e):this.props.removeFromFavorites(e)}},{key:"handleRouteChange",value:function(e){this.setState({currentPath:e})}},{key:"updateSelectedBeer",value:function(e){this.props.selectBeer(e)}},{key:"render",value:function(){var e=this;console.table(this.props.filteredBeers),console.table(this.props.ratedBeers),console.log(this.props.filters),console.log(this.props.refinedFilterTypes),console.log(this.props.refinedFilters);var t=this.props.isFilteredView;return i.a.createElement(be.a,null,i.a.createElement(fe.a,{exact:!0,path:"/",render:function(a){return i.a.createElement(ie,{beers:t?e.props.filteredBeers:e.props.ratedBeers,onHeartClick:function(t){return e.toggleFavorite(t)},onCardClick:function(t){return e.updateSelectedBeer(t)},location:a.location,filterBar:e.props.children,showFilteredList:t,refinedFilters:e.props.refinedFilters})}}),i.a.createElement(fe.a,{path:"/favorites",render:function(t){return i.a.createElement(ce,{beers:e.props.favoritedBeers,onHeartClick:function(t){return e.toggleFavorite(t)},location:t.location,onCardClick:function(t){return e.updateSelectedBeer(t)},filterBar:e.props.children,refinedFilters:e.props.refinedFilters})}}),i.a.createElement(fe.a,{path:"/search",render:function(a){return i.a.createElement(pe,{beers:t?e.props.filteredQueryResults:e.props.queryResults,onHeartClick:function(t){return e.toggleFavorite(t)},location:a.location,searchQuery:e.props.query,onCardClick:function(t){return e.updateSelectedBeer(t)},filterBar:e.props.children,showFilteredList:t,refinedFilters:e.props.refinedFilters})}}))}}]),t}(n.Component),_e=Object(ve.a)(Object(o.b)(function(e){var t=O(e),a=Object(d.a)(t,3);return{beersArray:a[0],beersById:a[1],beerIdsArray:a[2],ratedBeers:j(e),favoritedBeers:function(e){return j(e).filter(function(e){return!0===e.isFavorite})}(e),favoritedBeerIds:x(e),favoritedBeersById:function(e){var t=e.beers.beersById,a=e.beers.favoritedBeerIds.map(function(e){return Object(h.a)({},e,t[e])});return Object.assign.apply(Object,[{}].concat(Object(m.a)(a)))}(e),filters:I(e),query:w(e),filteredBeers:S(e),queryResults:F(e),queryResultsCount:function(e){return F(e).length}(e),filteredBeersCount:function(e){return S(e).length}(e),selectedBeerId:H(e),selectedBeer:A(e),filteredQueryResults:R(e),isFilteredView:function(e){var t=e.beers.filters,a=t.abv,r=t.ebc,n=t.ibu;return!(T(a)&&T(r)&&0===n.min&&null===n.max)}(e),refinedFilters:function(e){var t=e.beers.filters;return Object.keys(t).reduce(function(e,a){if("ibu"===a){var r=t[a].min,n=t[a].max;if(0!==r||null!==n){var i=null===n?"".concat(a," (").concat(r,"+)"):"".concat(a," (").concat(r,"\u2014").concat(n,")");return e.concat(i)}}else if(!T(t[a])){var c=N(t[a]).map(function(e){var t=Object(d.a)(e,2),r=t[0],n=t[1];return null===n?"".concat(a," (").concat(r,"+)"):"".concat(a," (").concat(r,"\u2014").concat(n,")")});return e.concat.apply(e,Object(m.a)(c))}return e},[])}(e)}},function(e){return{fetchBeers:function(){return e(function(){var e=Object(W.a)(D.a.mark(function e(t){var a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X.getAllBeers();case 3:a=e.sent,t(z(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}())},addToFavorites:function(t){return e(G(t))},removeFromFavorites:function(t){return e(K(t))},getCachedFavoritedBeers:function(){return e(Z())},selectBeer:function(t){return e(function(e){return{type:E,beerId:e}}(t))},setFilter:function(t){return e(ee(t))}}})(ge)),Ee=function(e){function t(e){var a;return Object(L.a)(this,t),(a=Object(U.a)(this,Object(M.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(q.a)(Object(q.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(q.a)(Object(q.a)(a))),a.handleChange=a.handleChange.bind(Object(q.a)(Object(q.a)(a))),a.searchTextInput=i.a.createRef(),a}return Object(P.a)(t,e),Object(V.a)(t,[{key:"handleClick",value:function(e){e.stopPropagation(),e.target.classList.contains("search-form__input")||""!==this.props.searchInputVal||(this.props.isExpanded||this.searchTextInput.current.focus(),this.props.handleSearchClick())}},{key:"handleChange",value:function(e){this.props.handleSearchChange(e.target.value)}},{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.props.searchInputVal&&this.props.handleSearchSubmit(this.props.searchInputVal)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{onClick:function(t){return e.handleClick(t)},className:"search-bar".concat(this.props.isExpanded?" is-expanded":"")},i.a.createElement("form",{className:"search-form",onSubmit:function(t){return e.handleSubmit(t)}},i.a.createElement("input",{className:"search-form__input",type:"text",onChange:this.handleChange,value:this.props.searchInputVal,ref:this.searchTextInput}),i.a.createElement("input",{className:"search-form__submit",type:"submit",value:""}),i.a.createElement("button",{type:"button",className:"btn search-form__btn"},i.a.createElement(re,{name:"search"}))))}}]),t}(n.Component);function ye(e){return i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"modal__content"},i.a.createElement("button",{type:"button",className:"modal__btn--close modal__icon-btn--close",onClick:function(){return e.onModalClose()}},i.a.createElement(re,{name:"x"})),i.a.createElement("div",{className:"modal__content--left"},i.a.createElement("div",{className:"modal__img-wrapper"},i.a.createElement("img",{className:"modal__img",src:e.beer.imageURL}))),i.a.createElement("div",{className:"modal__content--right"},i.a.createElement("h2",{className:"modal__title"},e.beer.name),i.a.createElement("p",{className:"modal__tagline"},e.beer.tagline),i.a.createElement("p",{className:"modal__desc"},e.beer.description),i.a.createElement("input",{type:"checkbox",id:"modalCheckbox-".concat(e.beer.id),className:"modal__input-favorite",name:"favorites",checked:e.beer.isFavorite,onChange:function(){return e.onHeartClick("".concat(e.beer.id))}}),i.a.createElement("label",{htmlFor:"modalCheckbox-".concat(e.beer.id),className:"modal__label-favorite"},i.a.createElement(re,{name:"heart"}),"".concat(e.beer.isFavorite?"Remove from":"Add to"," Favorites")),i.a.createElement("ul",{className:"modal__list"},i.a.createElement("li",null,i.a.createElement("ul",{className:"modal__sublist"},i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"ABV:"),e.beer.abv),i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"EBC:"),e.beer.ebc),i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"IBU:"),e.beer.ibu))),i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"Food Pairings:"),e.beer.foodPairings.join(", ")),i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"Malt:"),e.beer.ingredients.malt.map(function(e){return e.name}).join(", ")),i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"Hops:"),e.beer.ingredients.hops.map(function(e){return e.name}).join(", ")),i.a.createElement("li",{className:"modal__item"},i.a.createElement("span",{className:"modal__label"},"Yeast:"),e.beer.ingredients.yeast)))))}var ke=a(79),Ce=a(41),Be=a.n(Ce);function Oe(e){return console.log(e.selectedBeer),i.a.createElement("div",{className:"app"},i.a.createElement("header",{className:"app__header"},i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"navbar__left"},i.a.createElement(ke.a,{exact:!0,to:"/"},i.a.createElement("div",{className:"logo"},i.a.createElement("img",{className:"logo__img",src:Be.a,alt:"Brewdog logo"})))),i.a.createElement("div",{className:"navbar__right"},i.a.createElement("div",{className:"search-bar__wrapper clearfix"},i.a.createElement(Ee,{handleSearchSubmit:e.handleSearchSubmit,handleSearchClick:e.handleSearchClick,handleSearchChange:e.handleSearchChange,searchInputVal:e.searchInputVal,isExpanded:e.searchBarIsExpanded})),i.a.createElement(ke.a,{to:"/favorites",className:"navbar__link navbar__link--favorites"},i.a.createElement("div",{className:"navbar__icon-wrapper".concat(0===e.favoritesCount?" hide-count":""),"data-favorites-count":e.favoritesCount},i.a.createElement(re,{name:"heart"})))))),e.loadModal&&i.a.createElement(ye,{beer:e.selectedBeer,onModalClose:function(){return e.onModalClose()},onHeartClick:function(t){return e.onHeartClick(t)}}),i.a.createElement("main",{className:"app__main"},i.a.createElement(_e,null,i.a.createElement(he,{setFilter:e.setFilter,toggleHandler:e.toggleFilterBar,isVisible:e.filterBarIsVisible,filters:e.filters,refinedFilterTypes:e.refinedFilterTypes}))))}var xe=function(e){function t(e){var a;return Object(L.a)(this,t),(a=Object(U.a)(this,Object(M.a)(t).call(this,e))).state={expandSearchBar:!1,searchQuery:"",showFilterBar:!0},a.initSearchResults=a.initSearchResults.bind(Object(q.a)(Object(q.a)(a))),a.toggleSearchBar=a.toggleSearchBar.bind(Object(q.a)(Object(q.a)(a))),a.toggleFilterBar=a.toggleFilterBar.bind(Object(q.a)(Object(q.a)(a))),a.updateSearchInput=a.updateSearchInput.bind(Object(q.a)(Object(q.a)(a))),a.toggleFavorite=a.toggleFavorite.bind(Object(q.a)(Object(q.a)(a))),a}return Object(P.a)(t,e),Object(V.a)(t,[{key:"componentDidUpdate",value:function(e){var t=e.location.pathname;this.props.location.pathname!==t&&"/search"===t&&(this.updateSearchInput(""),this.toggleSearchBar(!1),this.props.submitQuery(""))}},{key:"initSearchResults",value:function(e){this.props.submitQuery(e),this.props.history.push("/search")}},{key:"toggleSearchBar",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===e?this.setState(function(e){return{expandSearchBar:!e.expandSearchBar}}):this.setState({expandSearchBar:e})}},{key:"toggleFilterBar",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===e?this.setState(function(e){return{showFilterBar:!e.showFilterBar}}):this.setState({showFilterBar:e})}},{key:"toggleFavorite",value:function(e){-1===this.props.favoritedBeerIds.indexOf(e)?this.props.addToFavorites(e):this.props.removeFromFavorites(e)}},{key:"updateSearchInput",value:function(e){this.setState({searchQuery:e})}},{key:"render",value:function(){var e=this;return i.a.createElement(Oe,{handleSearchClick:this.toggleSearchBar,handleSearchSubmit:this.initSearchResults,handleSearchChange:this.updateSearchInput,favoritesCount:this.props.favoritesCount,searchInputVal:this.state.searchQuery,searchBarIsExpanded:this.state.expandSearchBar,filterBarIsVisible:this.state.showFilterBar,toggleFilterBar:this.toggleFilterBar,loadModal:""!==this.props.selectedBeerId,selectedBeer:this.props.selectedBeer,onModalClose:function(){return e.props.clearSelectedBeer()},onHeartClick:function(t){return e.toggleFavorite(t)},setFilter:function(t){return e.props.setFilter(t)},filters:this.props.filters,refinedFilterTypes:this.props.refinedFilterTypes})}}]),t}(n.Component),je=Object(ve.a)(Object(o.b)(function(e){var t=O(e),a=Object(d.a)(t,3);return{beersArray:a[0],beersById:a[1],beerIdsArray:a[2],ratedBeers:j(e),favoritesCount:function(e){return e.beers.favoritedBeerIds.length}(e),filteredBeers:S(e),queryResults:F(e),favoritedBeerIds:x(e),filters:I(e),query:w(e),selectedBeerId:H(e),selectedBeer:A(e),filteredQueryResults:R(e),refinedFilterTypes:function(e){var t=e.beers.filters;return Object.keys(t).reduce(function(e,a){if("ibu"===a){if(0!==t[a].min||null!==t[a].max)return e.concat(a)}else if(!T(t[a]))return e.concat(a);return e},[])}(e)}},function(e){return{addToFavorites:function(t){return e(G(t))},removeFromFavorites:function(t){return e(K(t))},setFilter:function(t){return e(ee(t))},submitQuery:function(t){return e(function(e){return{type:k,query:e}}(t))},clearSelectedBeer:function(){return e({type:y,beerId:""})}}})(xe)),Fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ne(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Se=a(78),we=a(21),Ie={history:Object(we.a)({basename:"/punk-beer-app"})},He=Object(l.d)(Object(l.c)(r),Object(l.a)(u.a)),Ae=Ie.history;window.addEventListener("unload",function(){var e=He.getState().beers;$.saveFavoritedBeers(e)}),s.a.render(i.a.createElement(o.a,{store:He},i.a.createElement(Se.a,{basename:"/punk-beer-app",history:Ae},i.a.createElement(je,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/punk-beer-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/punk-beer-app","/service-worker.js");Fe?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ne(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Ne(t,e)})}}()}},[[42,2,1]]]);
//# sourceMappingURL=main.2bb7e28d.chunk.js.map