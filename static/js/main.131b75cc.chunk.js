(this.webpackJsonppopup=this.webpackJsonppopup||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"RECEIVE_LIST",(function(){return O})),n.d(r,"REMOVE_LIST",(function(){return m})),n.d(r,"RENAME_LIST",(function(){return v})),n.d(r,"RECEIVE_LISTS",(function(){return p})),n.d(r,"RECEIVE_OPEN_LIST",(function(){return x})),n.d(r,"RECEIVE_CLOSE_LIST",(function(){return g})),n.d(r,"RECEIVE_LIST_ERRORS",(function(){return E})),n.d(r,"CLEAR_LIST_ERRORS",(function(){return y})),n.d(r,"REMOVE_LIST_ITEM",(function(){return S})),n.d(r,"removeListItem",(function(){return R})),n.d(r,"clearListErrors",(function(){return _})),n.d(r,"receiveListErrors",(function(){return L})),n.d(r,"closeList",(function(){return N})),n.d(r,"openList",(function(){return k})),n.d(r,"receiveLists",(function(){return I})),n.d(r,"removeList",(function(){return C})),n.d(r,"addToList",(function(){return w})),n.d(r,"createList",(function(){return A})),n.d(r,"renameList",(function(){return T})),n.d(r,"updateList",(function(){return z})),n.d(r,"validateList",(function(){return V}));var c={};n.r(c),n.d(c,"RECEIVE_SEARCH_RESULTS",(function(){return ne})),n.d(c,"CLEAR_SEARCH_RESULTS",(function(){return re})),n.d(c,"RECEIVE_SEARCH_ERRORS",(function(){return ce})),n.d(c,"receiveSearchErrors",(function(){return se})),n.d(c,"clearSearchResults",(function(){return ae})),n.d(c,"receiveSearchResults",(function(){return ie})),n.d(c,"fetchSearchResults",(function(){return ue}));var s={};n.r(s),n.d(s,"RECEIVE_BATCH_QUOTES",(function(){return je})),n.d(s,"RECEIVE_API_ERRORS",(function(){return de})),n.d(s,"CLEAR_API_ERRORS",(function(){return be})),n.d(s,"clearApiErrors",(function(){return fe})),n.d(s,"receiveApiErrors",(function(){return he})),n.d(s,"receiveBatchQuotes",(function(){return Oe})),n.d(s,"fetchQuotes",(function(){return me})),n.d(s,"maybeFetchQuotes",(function(){return ve}));var a=n(2),i=n(18),u=n(3),o=n.n(u),l=n(16),j=n.n(l),d=n(11),b=n(10),f=n(37),h=function(e,t){var n,r=Object(f.a)(t);try{for(r.s();!(n=r.n()).done;){var c=n.value;if(c.name===e)return c}}catch(s){r.e(s)}finally{r.f()}return null},O="RECEIVE_LIST",m="REMOVE_LIST",v="RENAME_LIST",p="RECEIVE_LISTS",x="RECEIVE_OPEN_LIST",g="RECEIVE_CLOSE_LIST",E="RECEIVE_LIST_ERRORS",y="CLEAR_LIST_ERRORS",S="REMOVE_LIST_ITEM",R=function(e,t){return{type:S,list:e,item:t}},_=function(){return{type:y}},L=function(e){return{type:E,errors:e}},N=function(e){return{type:g,name:e}},k=function(e){return{type:x,name:e}},I=function(e){return{type:p,lists:e}},C=function(e){return{type:m,name:e}},w=function(e,t){var n=e.name;return{type:O,list:{name:n,items:t}}},A=function(e){return{type:O,list:{name:e,items:[]}}},T=function(e,t){return{type:v,newName:t,oldName:e}},z=function(e){return{type:O,list:e}},V=function(e,t){return e.length?h(e,t)?["".concat(e," already exists!")]:[]:["must be named"]},P=function(){return function(e){return!1}},q=function(e){for(var t=0,n=Object.entries(e);t<n.length;t++){var r=Object(b.a)(n[t],2),c=r[0],s=r[1];localStorage.setItem(c,JSON.stringify(s))}console.log("Settings saved to localStorage")},M=n(17),K=n(15),F=n.n(K),H=n(21),D=n(38),U=function(e,t){if(0===e.length)return[];for(var n,r=0,c=[],s=new RegExp(e,"ig");(n=s.exec(t))&&r<t.length;)n.index>0&&c.push({match:!1,value:t.slice(r,n.index)}),c.push({match:!0,value:t.slice(n.index,n.index+e.length)}),r=n.index+e.length;return r<t.length&&c.push({match:!1,value:t.slice(r)}),c},B=function(e,t){return e.apikey=t,"https://www.alphavantage.co/query?"+Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")},Q=function(){var e=Object(H.a)(F.a.mark((function e(t,n){var r,c,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=B(t,n),console.log("API: ",r),e.next=4,fetch(r);case 4:if((c=e.sent).ok){e.next=7;break}throw new Error("API Error: ".concat(c.status));case 7:return e.next=9,c.json();case 9:if("undefined"===typeof(s=e.sent)["Error Message"]){e.next=14;break}throw new Error(s["Error Message"]);case 14:if("undefined"===typeof s.Note){e.next=16;break}throw new Error("API limit exceeded: ".concat(s.Note));case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),J=function(e){return e.map((function(e){return t=e,n=function(e,t){return t.slice(3).replace(/ /g,"_")},Object.keys(t).reduce((function(e,r){return e[n(t[r],r,t)]=t[r],e}),{});var t,n}))},Y=function(){var e=Object(H.a)(F.a.mark((function e(t,n){var r,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={function:"SYMBOL_SEARCH",keywords:t},e.next=3,Q(r,n);case 3:return c=e.sent,e.abrupt("return",c.bestMatches?J(c.bestMatches):[]);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$=function(e,t,n){t.token=n;var r=Object.keys(t).map((function(e){return"".concat(e,"=").concat(t[e])})).join("&");return"".concat("https://cloud.iexapis.com/stable").concat(e,"?").concat(r)},W=function(){var e=Object(H.a)(F.a.mark((function e(t,n,r){var c,s,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=$(t,n,r),console.log("API: ",c),e.next=4,fetch(c);case 4:if((s=e.sent).ok){e.next=7;break}throw new Error("API Error: ".concat(s.status));case 7:return e.next=9,s.json();case 9:return a=e.sent,e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),G=function(){var e=Object(H.a)(F.a.mark((function e(t,n,r){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W("/stock/market/batch",Object(i.a)({symbols:t.join(","),types:"quote"},n),r));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),X=function(e,t){var n=Object(D.partition)(t.map((function(t){var n=t.symbol,r=t.name,c=t.type,s=t.region;return{value:n,symbol:U(e,n),name:U(e,r),type:c,region:s}})),["type","Equity"]),r=Object(b.a)(n,2);return{stocks:r[0],funds:r[1]}},Z=function(){var e=Object(H.a)(F.a.mark((function e(t){var n,r,c=arguments;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:null,e.next=3,Y(t,n);case 3:return r=e.sent,e.abrupt("return",X(t,r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=G,te=function(){var e=Object(H.a)(F.a.mark((function e(t,n,r,c){var s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(s=t.filter((function(e){return!n[e]}))).length){e.next=3;break}return e.abrupt("return",ee(s,r,c));case 3:return e.abrupt("return",!1);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),ne="RECEIVE_SEARCH_RESULTS",re="CLEAR_SEARCH_RESULTS",ce="RECEIVE_SEARCH_ERRORS",se=function(e){return{type:ce,errors:e}},ae=function(){return{type:re}},ie=function(e){return{type:ne,results:e}},ue=function(e,t){return function(n){return Z(e,t).then((function(e){return n(ie(e))})).catch((function(e){return n(se(e))}))}},oe=n(35),le=function(e,t){return t.filter((function(t){return t.name!==e}))},je="RECEIVE_BATCH_QUOTES",de="RECEIVE_API_ERRORS",be="CLEAR_API_ERRORS",fe=function(){return{type:be}},he=function(e){return{type:de,errors:e}},Oe=function(e){return{type:je,data:e}},me=function(e,t,n){return function(r){return ee(e,t,n).then((function(e){return r(Oe(e))})).catch((function(e){return r(he(e))}))}},ve=function(e,t,n,r){return function(c){return te(e,t,n,r).then((function(e){return e&&c(Oe(e))})).catch((function(e){return c(he(e))}))}},pe=Object(M.c)({searchResults:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case ne:return t.results;case re:return{};default:return e}},lists:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(n),r.type){case p:return r.lists;case O:e=Object(oe.a)(n);var c=r.list.items.map((function(e){return e.toUpperCase()}));(t=h(r.list.name,n))?(c=Object(oe.a)(new Set(c.concat(t.items))),t.items=c):e.push({name:r.list.name,items:c});break;case S:e=Object(oe.a)(n),(t=h(r.list.name,n)).items=t.items.filter((function(e){return e!==r.item}));break;case m:e=le(r.name,n);break;case v:e=Object(oe.a)(n);var s,a=Object(f.a)(n);try{for(a.s();!(s=a.n()).done;){var i=s.value;if(i.name===r.oldName){i.name=r.newName;break}}}catch(u){a.e(u)}finally{a.f()}break;default:return n}return q({lists:e}),e},quotes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case je:for(var n=Object.assign({},e),r=0,c=Object.entries(t.data);r<c.length;r++){var s=Object(b.a)(c[r],2),a=s[0],i=s[1];n[a]=i.quote}return n;default:return e}}}),xe=Object(M.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case ce:return[t.errors.message];case ne:case re:return[];default:return e}},api:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case de:return[t.errors.message];case be:case je:return[];default:return e}},lists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case E:return t.errors;case O:case y:return[];default:return e}}}),ge=n(39),Ee={keys:{}},ye="RECEIVE_CURRENT_SYMBOL",Se="CLEAR_CURRENT_SYMBOL",Re=n(36),_e=Object(M.c)({lists:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(t),n.type){case x:e=Object.assign({},t,Object(Re.a)({},n.name,!0));break;case g:delete(e=Object.assign({},t))[n.name];break;default:return t}return q({ui:{lists:e}}),e}}),Le=Object(M.c)({entities:pe,errors:xe,settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case ge.a:var n=Object.assign({},e.keys);return Object.assign({},e,Object(D.merge)(n,t.keys));default:return e}},current:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case ye:return t.symbol;case Se:return null;default:return e}},ui:_e}),Ne=[n(71).a],ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(M.d)(Le,e,M.a.apply(void 0,Ne));return t},Ie=n(19),Ce=n(142),we=n(144),Ae=(n(92),n(93),Object(d.b)((function(e,t){return{avKey:e.settings.keys.avKey}}),(function(e,t){var n=t.avKey;return{fetchSearchResults:function(t){return e(ue(t,n))},clearSearchResults:function(){return e(ae())}}}))((function(e){var t=e.fetchSearchResults,n=e.clearSearchResults,r=o.a.useState(""),c=Object(b.a)(r,2),s=c[0],i=c[1];return Object(a.jsx)("form",{id:"search-form",onSubmit:function(e){e.preventDefault(),s.length?t(s):n(),i("")},children:Object(a.jsx)("input",{type:"text",className:"search-input",placeholder:"Search...",value:s,onChange:function(e){return i(e.currentTarget.value)},autoFocus:!0})})}))),Te=n(20),ze=(n(94),n(145)),Ve=n(135),Pe=n(136),qe=n(28),Me=(n(95),function(e){var t=e.list,n=e.symbol,r=e.apiKey,c=e.quotes,s=e.addToList,i=e.removeListItem,u=function(e,t){return e.items.some((function(e){return e===t}))}(t,n);return Object(a.jsxs)("div",{className:"list-modal-item",onClick:function(){u?i(t):s(t,c,r)},children:[Object(a.jsx)("span",{children:t.name}),Object(a.jsx)("div",{children:u&&Object(a.jsx)(qe.b,{size:24,color:"var(--st__primary-base)"})})]})}),Ke=Object(d.b)((function(e,t){return{lists:e.entities.lists,apiKey:e.settings.keys.iex,quotes:e.entities.quotes}}),(function(e,t){var n=t.symbol;return{addToList:function(t,r,c){e(w(t,[n])),e(ve([n],r,{},c))},removeListItem:function(t){return e(R(t,n))},clearSearchResults:function(){return e(ae())}}}))((function(e){var t=e.symbol,n=e.lists,r=Object(Te.a)(e,["symbol","lists"]),c=o.a.useState(!1),s=Object(b.a)(c,2),u=s[0],l=s[1],j=function(){return l(!u)};return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{type:"button",onClick:j,className:"list-modal-toggle",children:Object(a.jsx)(Ie.c,{size:24,color:"transparent",className:"add-symbol-icon"})}),Object(a.jsxs)(ze.a,{isOpen:u,toggle:j,className:"list-modal",onClosed:function(){return r.clearSearchResults()},children:[Object(a.jsx)(Ve.a,{toggle:j,children:"Click List to add ".concat(t)}),Object(a.jsx)(Pe.a,{className:"list-modal-body",children:n.map((function(e,n){return Object(a.jsx)(Me,Object(i.a)({symbol:t,list:e},r),n)}))})]})]})})),Fe=function(e){var t=e.value,n=e.symbol,r=e.name,c=(e.type,e.region,e.addable);Object(Te.a)(e,["value","symbol","name","type","region","addable"]);return Object(a.jsxs)("div",{className:"search-result",value:t,role:"option",children:[Object(a.jsx)("div",{className:"search-result-symbol",children:Object(a.jsx)("span",{children:n.map((function(e,t){return Object(a.jsx)("span",{className:e.match?"search-match":"",children:e.value},t)}))})}),Object(a.jsx)("div",{className:"search-result-company",children:Object(a.jsx)("span",{children:r.map((function(e,t){return Object(a.jsx)("span",{className:e.match?"search-match":"",children:e.value},t)}))})}),c&&Object(a.jsx)("div",{className:"search-result-controls",children:Object(a.jsx)(Ke,{symbol:t})})]})},He=function(e){var t=e.name,n=e.results,r=e.addable,c=Object(Te.a)(e,["name","results","addable"]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("section",{children:Object(a.jsx)("h4",{children:t})}),n.map((function(e,t){return Object(u.createElement)(Fe,Object(i.a)(Object(i.a)({},e),{},{key:t,addable:r},c))}))]})},De=function(e){var t=e.errors;return Object(a.jsx)("ul",{children:t.map((function(e,t){return Object(a.jsx)("li",{className:"error-message",children:e})}))})},Ue=Object(d.b)((function(e,t){var n=e.entities.searchResults,r=n.stocks,c=n.funds;return{errors:e.errors.search,stocks:r,funds:c}}),(function(e){return{setCurrent:function(t){return e(function(e){return{type:ye,symbol:e}}(t))},clearCurrent:function(){return e({type:Se})},clearSearchResults:function(){return e(ae())}}}))((function(e){var t=e.errors,n=e.stocks,r=e.funds,c=Object(Te.a)(e,["errors","stocks","funds"]),s=t.length?Object(a.jsx)(De,{errors:t}):n||r?n&&n.length||r&&r.length?Object(a.jsxs)("div",{className:"search-results",children:[n.length&&Object(a.jsx)(He,Object(i.a)({addable:!0,name:"Stocks",results:n},c)),r.length>0&&Object(a.jsx)(He,Object(i.a)({name:"Funds",results:r},c))]}):Object(a.jsx)("section",{children:Object(a.jsx)("h4",{children:"No matches founds"})}):Object(a.jsx)(a.Fragment,{});return Object(a.jsx)("div",{className:"fade-in",children:Object(a.jsx)("div",{className:"search-menu",children:s})})})),Be=n(26),Qe=n(40),Je=n.n(Qe),Ye=n(51),$e=(n(111),Object(d.b)((function(e,t){return{errors:e.errors.lists}}),(function(e,t){var n=t.name;return{renameList:function(t){return e(T(n,t))},clearListErrors:function(){return e(_())}}}))((function(e){var t=e.errors,n=e.name,r=e.setEditing,c=e.validate,s=e.renameList,i=e.clearListErrors,u=o.a.useState(n),l=Object(b.a)(u,2),j=l[0],d=l[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("form",{className:"list-edit-form",onSubmit:function(e){e.preventDefault(),(j===n||c(j))&&(j!==n&&s(j),r(!1),d(""),i())},children:Object(a.jsx)("input",{type:"text",className:"input",value:j,onChange:function(e){return d(e.currentTarget.value)},autoFocus:!0})}),t.length?Object(a.jsx)("ul",{children:t.map((function(e,t){return Object(a.jsx)("li",{className:"error-message",children:e},t)}))}):null]})})}))),We=n(73),Ge=n(76),Xe=n(77),Ze=n(146),et=n(147),tt=n(148),nt=n(137),rt=(n(112),Object(d.b)((function(e,t){return{lists:e.entities.lists}}),(function(e,t){var n=t.list;return{removeListItem:function(t){return e(R(n,t))}}}))((function(e){var t=e.list,n=e.open,r=e.toggle,c=e.removeListItem,s=(Object(Te.a)(e,["list","open","toggle","removeListItem"]),t.name,t.items);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(ze.a,{isOpen:n,toggle:r,className:"list-modal",children:[Object(a.jsx)(Ve.a,{toggle:r,children:"Click to Remove"}),Object(a.jsx)(Pe.a,{className:"list-modal-body",children:s.map((function(e,t){return Object(a.jsxs)("div",{className:"list-modal-item",onClick:function(t){t.preventDefault(),c(e)},children:[Object(a.jsx)("span",{children:e}),Object(a.jsx)("div",{children:Object(a.jsx)(qe.a,{size:24,color:"var(--st__semantic-error-base)"})})]},t)}))})]})})}))),ct=function(e){var t=e.list,n=e.removeList,r=e.toggleEdit,c=o.a.useState(!1),s=Object(b.a)(c,2),i=s[0],u=s[1],l=o.a.useState(!1),j=Object(b.a)(l,2),d=j[0],f=j[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(Ze.a,{isOpen:i,toggle:function(){return u(!i)},direction:"down",children:[Object(a.jsx)(et.a,{color:"transparent",className:"list-dropdown-toggle","data-toggle":"modal",children:Object(a.jsx)(We.a,{size:24,color:"transparent"})}),Object(a.jsxs)(tt.a,{className:"list-dropdown-menu",right:!0,children:[Object(a.jsxs)(nt.a,{onClick:n,children:[Object(a.jsx)("span",{children:Object(a.jsx)(Ge.a,{size:24})}),"Delete List"]}),Object(a.jsxs)(nt.a,{onClick:r,children:[Object(a.jsx)("span",{children:Object(a.jsx)(Ie.b,{size:24})}),"Rename List"]}),Object(a.jsxs)(nt.a,{onClick:function(){return f(!0)},children:[Object(a.jsx)("span",{children:Object(a.jsx)(Xe.a,{size:24})}),"Edit List"]})]})]}),Object(a.jsx)(rt,{list:t,open:d,toggle:function(){return f(!d)}})]})},st=(n(127),function(e){return e.toFixed(2).toLocaleString("en")}),at=function(e){return!e||e<0?"-$"+st(Math.abs(e)):"$"+st(e)},it=function(e){return e?st(100*e)+"%":"\u2014"},ut=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"changePercent";return it(e&&e[t])},ot=function(e){return at(e&&e.latestPrice)},lt=function(e){var t=e.quote,n=function(e){return(t=e&&e.changePercent)&&t>0?"positive":"negative";var t}(t);return Object(a.jsx)("span",{className:n,children:ut(t)})},jt=Object(d.b)((function(e,t){var n=t.symbol;return{quote:e.entities.quotes[n]}}))((function(e){var t=e.symbol,n=e.quote;return Object(a.jsxs)("div",{className:"list-item",children:[Object(a.jsx)("span",{children:t.toUpperCase()}),Object(a.jsx)("div",{className:"list-chart-container",children:"--chart--"}),Object(a.jsxs)("div",{className:"quote-price",children:[Object(a.jsx)("span",{children:ot(n)}),Object(a.jsx)("div",{style:{height:"2px"}}),Object(a.jsx)(lt,{quote:n})]})]})})),dt=Object(Be.b)((function(e){var t=e.symbol;return Object(a.jsx)(jt,{symbol:t})})),bt=Object(Be.a)((function(e){var t=e.items;return Object(a.jsx)("div",{children:t.map((function(e,t){return Object(a.jsx)(dt,{symbol:e,index:t},"item-".concat(e))}))})})),ft=Object(d.b)((function(e,t){var n=t.list;return{open:Boolean(e.ui.lists[n.name]),quotes:e.entities.quotes,apiKey:e.settings.keys.iex}}),(function(e,t){var n=t.list.name;return{closeList:function(){return e(N(n))},openList:function(){return e(k(n))},maybeFetchQuotes:function(t,n,r,c){return e(ve(t,n,r,c))},updateList:function(t){return e(z({name:n,items:t}))},removeList:function(){return e(C(n))}}}))((function(e){var t=e.list,n=e.handle,r=e.quotes,c=e.open,s=e.openList,i=e.closeList,u=e.updateList,l=e.maybeFetchQuotes,j=e.removeList,d=e.apiKey,f=e.validate,h=t.name,O=t.items;o.a.useEffect((function(){d&&c&&l(O,r,{},d)}),[]);var m=o.a.useState(!1),v=Object(b.a)(m,2),p=v[0],x=v[1];d||console.warn("Must have iex API key to access quote data!");var g=Object(a.jsx)("span",{className:"list-caret",children:c?Object(a.jsx)(Ye.a,{size:24}):Object(a.jsx)(Ye.b,{size:24})});return t?Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsxs)("div",{className:"list-item list-header-cell",children:[Object(a.jsxs)("div",{className:"list-title",children:[n,p?Object(a.jsx)($e,{name:h,validate:f,setEditing:x}):Object(a.jsx)("span",{children:h})]}),Object(a.jsxs)("div",{className:"list-controls",children:[Object(a.jsx)(ct,{list:t,removeList:j,toggleEdit:function(){return x(!0)}}),Object(a.jsx)("div",{onClick:function(){c?i():(d&&l(O,r,{},d),s())},children:g})]})]}),c&&Object(a.jsx)(bt,{items:O,onSortEnd:function(e){var t=e.oldIndex,n=e.newIndex;u(Je()(O,t,n))}})]},h):null})),ht=n(78),Ot=(n(130),function(e){var t=e.listName,n=e.action,r=e.cancel,c=e.errors,s=o.a.useState(t||""),i=Object(b.a)(s,2),u=i[0],l=i[1];return Object(a.jsxs)("div",{className:"list-form-container",children:[Object(a.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),n(u),l("")}(e)},className:"list-form",children:[Object(a.jsx)("input",{type:"text",className:"list-input",value:u,placeholder:"List Name",onChange:function(e){return l(e.currentTarget.value)},autoFocus:!0}),Object(a.jsxs)("div",{className:"list-form-controls",children:[Object(a.jsx)("button",{type:"submit",children:Object(a.jsx)(ht.a,{size:18,color:"var(--st__semantic-success-base)"})}),Object(a.jsx)("button",{type:"button",onClick:r,children:Object(a.jsx)(Ie.a,{size:18,color:"var(--st__semantic-error-base)"})})]})]}),Object(a.jsx)("ul",{className:"errors",children:c&&c.map((function(e,t){return Object(a.jsx)("li",{children:e},t)}))})]})}),mt=(n(131),Object(Be.c)((function(){return Object(a.jsx)("span",{className:"drag-burger",children:Object(a.jsx)(qe.c,{size:24,color:"var(--st__neutral-fg2)"})})}))),vt=Object(Be.b)((function(e){var t=e.list,n=e.validate;return Object(a.jsx)(ft,{list:t,handle:Object(a.jsx)(mt,{}),validate:n})})),pt=Object(Be.a)((function(e){var t=e.lists,n=e.validate;return Object(a.jsx)("div",{children:t.map((function(e,t){return Object(a.jsx)(vt,{index:t,list:e,validate:n},"list-item-".concat(e.name))}))})})),xt=Object(d.b)((function(e,t){return{lists:e.entities.lists}}),(function(e){return{createList:function(t){return e(A(t))},updateLists:function(t){return e(I(t))},validateList:function(t,n){var r=V(t,n);return!r.length||(e(L(r)),!1)}}}))((function(e){var t=e.lists,n=e.createList,r=e.updateLists,c=e.validateList,s=o.a.useState(!1),i=Object(b.a)(s,2),u=i[0],l=i[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"lists",children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("h4",{children:"WatchLists"})}),Object(a.jsx)("div",{onClick:function(){return l((function(e){return!e}))},children:Object(a.jsx)(Ie.c,{size:24,color:"var(--st__neutral-fg2)",className:"new-list-icon"})})]}),u&&Object(a.jsx)(Ot,{listName:"",action:n,cancel:function(){return l(!1)}}),Object(a.jsx)(pt,{lists:t,validate:function(e){return c(e,t)},onSortEnd:function(e){var n=e.oldIndex,c=e.newIndex;r(Je()(t,n,c))},useDragHandle:!0})]})})})),gt=n(134).default,Et=function(){var e=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Ce.a,{children:Object(a.jsxs)("section",{className:"search-section",children:[Object(a.jsxs)("header",{children:[Object(a.jsx)(Ae,{}),Object(a.jsx)("div",{className:"cancel-button",children:Object(a.jsx)(Ie.a,{size:24,className:"cancel-button-icon",color:"gray"})})]}),Object(a.jsx)(Ue,{})]})}),Object(a.jsx)(Ce.a,{}),Object(a.jsx)(Ce.a,{children:Object(a.jsx)("section",{className:"lists-section",children:Object(a.jsx)(xt,{})})})]});return Object(a.jsx)(we.a,{fluid:!0,children:Object(a.jsx)(gt,{children:e})})};n(132);document.addEventListener("DOMContentLoaded",(function(){var e={};e=Object(i.a)(Object(i.a)({},e),{},{entities:{lists:JSON.parse(localStorage.getItem("lists"))||[]},settings:{keys:JSON.parse(localStorage.getItem("keys"))||{}},ui:JSON.parse(localStorage.getItem("ui"))||{}});var t=ke(e),n=document.getElementById("root");j.a.render(Object(a.jsx)(d.a,{store:t,children:Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(Et,{})})}),n),document.getElementsByTagName("body")[0].className+="standalone",window.store=t,window.search=c,window.list=r,window.stocks=s,window.loadSettings=P}))},134:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(10),s=n(20),a=n(3),i=n.n(a),u=n(11),o=n(72),l=n(142),j=n(143),d=n(34),b=n.n(d),f=n(138),h=n(139),O=n(140),m=n(141),v=n(79),p=n.n(v),x=n(39),g=Object(u.b)((function(e){return{apiKeys:e.settings.keys}}),(function(e){return{receiveApiKeys:function(t){return e(Object(x.b)(t))}}}))((function(e){var t=e.apiKeys,n=e.receiveApiKeys,s=t.iex,a=t.av,u=i.a.useState(s||""),l=Object(c.a)(u,2),j=l[0],d=l[1],b=i.a.useState(a||""),v=Object(c.a)(b,2),x=v[0],g=v[1],E=i.a.useState(!1),y=Object(c.a)(E,2),S=y[0],R=y[1];return Object(r.jsxs)(f.a,{onSubmit:function(e){if(e.preventDefault(),0!==j.length||0!==x.length){var t={};j.length&&(t.iex=j),x.length&&(t.av=x),n({keys:t}),R(!0),setTimeout((function(){R(!1)}),3e3)}},children:[Object(r.jsx)(h.a,{for:"iexKey",className:s?"positive":"negative",children:"Iex API key"}),Object(r.jsx)(O.a,{id:"iexKey",type:"text",className:"settings-input",value:j,placeholder:"Iex API key",required:!0,onChange:function(e){return d(e.currentTarget.value)}}),Object(r.jsx)(m.a,{children:Object(r.jsxs)("p",{children:["Need to add iex API key to have access to stock data. Sign up"," ",Object(r.jsx)("a",{target:"_blank",href:"https://iexcloud.io/",children:"here"})]})}),Object(r.jsx)(h.a,{for:"avKey",className:x?"positive":"negative",children:"Alphavantage API key"}),Object(r.jsx)(O.a,{id:"avKey",type:"text",className:"settings-input",value:x,placeholder:"Alphavantage API key",onChange:function(e){return g(e.currentTarget.value)}}),Object(r.jsx)(m.a,{children:Object(r.jsxs)("p",{children:[Object(r.jsx)("b",{children:"Note"}),": this isn't currently required. Sign up for a free Alphavantage key",Object(r.jsxs)("a",{target:"_blank",href:"https://iexcloud.io/",children:[" ","here"]})]})}),Object(r.jsx)(o.a,{children:"Submit"}),S&&Object(r.jsx)("div",{className:p.a.success,children:Object(r.jsx)("p",{className:"positive",children:"Settings Saved"})})]})}));t.default=Object(u.b)((function(e){return{settings:e.settings}}))((function(e){var t=e.settings,n=Object(s.a)(e,["settings"]),a=i.a.useState(!1),u=Object(c.a)(a,2),d=u[0],f=u[1],h=t.keys.iex,O=Object(r.jsx)(o.a,{onClick:function(){return f(!d)},children:d?"Hide Settings":"Change Settings"});return Object(r.jsxs)(l.a,{className:b.a.body,children:[Object(r.jsx)(j.a,{md:8,className:b.a.main,children:Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Some page with the sidebar opened at the right."}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:b.a.settings,children:[Object(r.jsx)("div",{children:h&&O}),(!h||d)&&Object(r.jsx)(g,{})]})]})}),Object(r.jsx)(j.a,{md:4,className:b.a.panel,children:n.children})]})}))},34:function(e,t,n){e.exports={body:"standalone_body__20-Hp",main:"standalone_main__29tAz",panel:"standalone_panel__3-ksf",settings:"standalone_settings__hgKD0"}},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var r="RECEIVE_API_KEYS",c=function(e){return{type:r,keys:e}}},79:function(e,t,n){e.exports={success:"settings_success__3DQmC"}},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){}},[[133,1,2]]]);
//# sourceMappingURL=main.131b75cc.chunk.js.map