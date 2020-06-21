(this["webpackJsonpnasa-app"]=this["webpackJsonpnasa-app"]||[]).push([[0],{37:function(e,t,a){e.exports=a(73)},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),o=a.n(l),c=a(13),s=a(10),i=a(2),u=r.a.createContext(),m=u.Provider,d=u.Consumer,p=function(){return function(e){return function(t){return r.a.createElement(d,null,(function(a){return r.a.createElement(e,Object.assign({},t,{astronomyService:a}))}))}}},h=(a(46),function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Astronomy Picture of the Day"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor02","aria-controls":"navbarColor02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor02"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item "},r.a.createElement(s.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/catalog"},"Catalog")))))}),E=a(9),v=a(12),y=a(19),f=a(18),g=(a(48),function(){return r.a.createElement("div",{className:"loadingio-spinner-eclipse-vsejm86ysv9"},r.a.createElement("div",{className:"ldio-nhgy21l9o6i"},r.a.createElement("div",null)))}),D=(a(49),function(){return r.a.createElement("div",{className:"alert alert-dismissible alert-secondary"},r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert"},"\xd7"),r.a.createElement("h2",null,"Ooops! Something gone wrong with API."),r.a.createElement("h3",null,"NASA has already sent astronauts to fix the problem."),r.a.createElement("h5",null,"(Try choose this date later!)"))}),b=function(e){return{type:"ASTRONOMY_ERROR",payload:e}},O=a(36),A=a.n(O),N=function(){function e(){Object(E.a)(this,e)}return Object(v.a)(e,null,[{key:"convertDateToDefaultFormat",value:function(e){return A()(e).format(this._defaultFormat)}}]),e}();N._defaultFormat="YYYY-MM-DD";a(51);var _=N.convertDateToDefaultFormat(new Date),T=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleChangeDate=function(t){var a=t.target.value;a!==_&&localStorage.setItem("date",a),e.props.fetchAstronomy(a)},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchAstronomy(this.props.selectedDate)}},{key:"render",value:function(){var e=this.props,t=e.astronomy,a=e.loading,n=e.error;return r.a.createElement("div",{className:"picture-details"},r.a.createElement("div",{className:"picture-date"},r.a.createElement("h3",null,"Choose another date"),r.a.createElement("input",{type:"date",max:_,value:t.length>0?t[0].date:_,onChange:this.handleChangeDate})),n?r.a.createElement(D,null):null,a?r.a.createElement(g,null):null,t.map((function(e,t){var a=e.media_type,n=e.title,l=e.date,o=e.url,c=e.explanation;return r.a.createElement("div",{className:"picture-details",key:t},r.a.createElement("h4",null,l),r.a.createElement("h1",null,n),"image"===a?r.a.createElement("img",{src:o,alt:"astronomy"}):r.a.createElement("iframe",{src:o,frameBorder:"0",width:"70%",height:"700px",title:"video",allowFullScreen:!0}),r.a.createElement("p",null,c))})))}}]),a}(n.Component),j=p()(Object(c.b)((function(e){return{astronomy:e.astronomy,loading:e.loading,error:e.error,selectedDate:e.selectedDate}}),(function(e,t){var a=t.astronomyService;return{fetchAstronomy:function(t){e({type:"ASTRONOMY_REQUESTED"}),a.getAstronomy(t).then((function(t){var a=t.data,n=[];n.push(a),e({type:"ASTRONOMY_LOADED",payload:n})})).catch((function(t){e(b(t))}))}}}))(T)),C=(a(52),function(){return r.a.createElement("div",{className:"alert alert-dismissible alert-secondary"},r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert"},"\xd7"),r.a.createElement("span",null,"Choose another date"))}),S=(a(53),function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleStartDateChanged=function(t){e.props.startDateChanged(t.target.value),e.props.fetchAstronomyList(t.target.value,e.props.endDate)},e.handleEndDateChanged=function(t){e.props.endDateChanged(t.target.value),e.props.fetchAstronomyList(e.props.startDate,t.target.value)},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchAstronomyList(this.props.startDate,this.props.endDate)}},{key:"render",value:function(){var e=this.props,t=e.astronomy,a=e.loading,n=e.error,l=e.startDate,o=e.endDate;return r.a.createElement("div",{className:"picture-list"},r.a.createElement("div",{className:"list-range"},r.a.createElement("span",null,"From:"),r.a.createElement("input",{type:"date",value:l,max:o,onChange:this.handleStartDateChanged}),r.a.createElement("span",null,"To:"),r.a.createElement("input",{type:"date",value:o,min:l,max:N.convertDateToDefaultFormat(new Date),onChange:this.handleEndDateChanged})),n?r.a.createElement(C,null):null,a?r.a.createElement(g,null):null,r.a.createElement("div",{className:"card-list"},t.map((function(e,t){var a=e.media_type,n=e.title,l=e.date,o=e.url;return r.a.createElement("div",{key:t,className:"card text-white bg-primary mb-3"},r.a.createElement("div",{className:"card-header"},n),r.a.createElement("div",{className:"card-body"},"image"===a?r.a.createElement("img",{src:o,alt:"astronomy"}):r.a.createElement("iframe",{src:o,frameBorder:"0",width:"100%",height:"100%",title:"video",allowFullScreen:!0}),r.a.createElement("span",null,l)))}))))}}]),a}(n.Component)),R=p()(Object(c.b)((function(e){return{astronomy:e.astronomy,loading:e.loading,error:e.error,startDate:e.startDate,endDate:e.endDate}}),(function(e,t){var a=t.astronomyService;return{fetchAstronomyList:function(t,n){e({type:"ASTRONOMY_REQUESTED"}),a.getAstronomyList(t,n).then((function(t){var a=t.data;e({type:"ASTRONOMY_LIST_LOADED",payload:a.reverse()})})).catch((function(t){e(b(t))}))},startDateChanged:function(t){e({type:"START_DATE_CHANGED",payload:t})},endDateChanged:function(t){e({type:"END_DATE_CHANGED",payload:t})}}}))(S)),w=(a(54),p()((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:j}),r.a.createElement(i.a,{path:"/catalog",component:R})))}))),k=a(24),Y=a.n(k),L=(a(72),a(17)),M=a(7),x=localStorage.getItem("date"),F=N.convertDateToDefaultFormat(new Date),K={astronomy:[],selectedDate:null===x?F:x,startDate:"2020-06-12",endDate:F,loading:!0,error:null},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ASTRONOMY_REQUESTED":return Object(M.a)(Object(M.a)({},e),{},{astronomy:[],loading:!0,error:null});case"ASTRONOMY_LOADED":return Object(M.a)(Object(M.a)({},e),{},{astronomy:t.payload,loading:!1,error:null});case"ASTRONOMY_ERROR":return Object(M.a)(Object(M.a)({},e),{},{astronomy:[],loading:!1,error:t.payload});case"ASTRONOMY_LIST_LOADED":return Object(M.a)(Object(M.a)({},e),{},{astronomy:t.payload,loading:!1,error:null});case"START_DATE_CHANGED":return Object(M.a)(Object(M.a)({},e),{},{startDate:t.payload});case"END_DATE_CHANGED":return Object(M.a)(Object(M.a)({},e),{},{endDate:t.payload});default:return e}},I=Object(L.b)(B),H=new function e(){var t=this;Object(E.a)(this,e),this._apiBase="https://api.nasa.gov/planetary/apod?",this._apiKey="&api_key=1Y7KbQaKepAKKDALm5fRa1FX69qfZJ50ddAXqtv3",this.getAstronomy=function(e){var a=Y.a.get("".concat(t._apiBase,"date=").concat(e).concat(t._apiKey));return new Promise((function(e){e(a)}))},this.getAstronomyList=function(e,a){var n=Y.a.get("".concat(t._apiBase,"start_date=").concat(e,"&end_date=").concat(a).concat(t._apiKey));return new Promise((function(e){return e(n)}))}};o.a.render(r.a.createElement(c.a,{store:I},r.a.createElement(m,{value:H},r.a.createElement(s.a,null,r.a.createElement(w,null)))),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.a76a4478.chunk.js.map