"use strict";(self.webpackChunkfilm=self.webpackChunkfilm||[]).push([[832],{2832:function(A,e,a){a.r(e),a.d(e,{default:function(){return _}});var t=a(2982),r=a(885),n=a(2791),i=a(4569),c=a.n(i),o={container:"MoviePage_container__1WdgN",MoviePage:"MoviePage_MoviePage__R5Vzk"},s=a(531),f={container:"Searchbar_container__NOhC3",SearchBar:"Searchbar_SearchBar__612Jc",SearchBar__searchForm:"Searchbar_SearchBar__searchForm__uTDnj",SearchBar__label:"Searchbar_SearchBar__label__24vkU",SearchBar__searchFormBtn:"Searchbar_SearchBar__searchFormBtn__PqfdW",SearchBar__searchFormButtonLabel:"Searchbar_SearchBar__searchFormButtonLabel__nJCJd",SearchBar__searchFormInput:"Searchbar_SearchBar__searchFormInput__VlhN4"},l=a(184);function u(A){var e=A.onSubmit,a=(0,n.useState)(""),t=(0,r.Z)(a,2),i=t[0],c=t[1],o=(0,n.useState)("all"),s=(0,r.Z)(o,2),u=s[0],h=s[1],p=function(A){h(A.target.dataset.type),e(i,u)};return(0,l.jsxs)("div",{className:f.SearchBar,children:[(0,l.jsxs)("form",{className:f.SearchBar__searchForm,onSubmit:function(A){A.preventDefault(),e(i,u),c("")},children:[(0,l.jsx)("button",{type:"submit",onClick:function(){return e(i,u)},className:f.SearchBar__searchFormBtn,children:(0,l.jsx)("span",{className:f.SearchBar__searchFormButtonLabel,children:"Search"})}),(0,l.jsx)("input",{className:f.SearchBar__searchFormInput,type:"text",onChange:function(A){var e=A.target;c(e.value)},value:i,placeholder:"Search movies"})]}),(0,l.jsxs)("form",{className:f.SearchBar__radioForm,children:[(0,l.jsxs)("label",{className:f.SearchBar__label,children:[(0,l.jsx)("input",{className:f.SearchBar__radio_btn,type:"radio",name:"type","data-type":"all",onChange:p,checked:"all"===u}),(0,l.jsx)("span",{children:"All"})]}),(0,l.jsxs)("label",{className:f.SearchBar__label,children:[(0,l.jsx)("input",{className:f.SearchBar__radio_btn,type:"radio",name:"type","data-type":"movie",onChange:p,checked:"movie"===u}),(0,l.jsx)("span",{children:"Movies only"})]}),(0,l.jsxs)("label",{className:f.SearchBar__label,children:[(0,l.jsx)("input",{className:f.SearchBar__radio_btn,type:"radio",name:"type","data-type":"tv",onChange:p,checked:"tv"===u}),(0,l.jsx)("span",{children:"Series only"})]})]})]})}var h=a(3557),p=a(9402);function _(){var A=(0,n.useState)(""),e=(0,r.Z)(A,2),a=e[0],i=e[1],f=(0,n.useState)(""),_=(0,r.Z)(f,2),d=_[0],m=_[1],v=(0,n.useState)([]),j=(0,r.Z)(v,2),P=j[0],w=j[1],N=(0,n.useState)(1),g=(0,r.Z)(N,2),C=g[0],B=g[1];(0,n.useEffect)((function(){var A="https://api.themoviedb.org/3/search/movie?api_key=923c2cf88ec4338da74c768a045101f0&language=en-US&page=".concat(C,"&include_adult=true&query=").concat(a,"&video=true");""!==a&&c().get(A).then((function(A){var e=A.data;w((function(A){return[].concat((0,t.Z)(A),(0,t.Z)(e.results))}))}))}),[a,C]),(0,n.useEffect)((function(){var A="https://api.themoviedb.org/3/search/movie?api_key=".concat("923c2cf88ec4338da74c768a045101f0","&language=en-US&page=1&include_adult=true&query=").concat(a);console.log(d),""!==a&&c().get(A).then((function(A){var e=A.data;w(e.results)}))}),[a]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"".concat(o.MoviePage," "),children:[(0,l.jsx)(u,{onChange:function(A){i(A.currentTarget.value)},onSubmit:function(A,e){i(A),m(e)},data:a}),(0,l.jsxs)("div",{className:o.MoviePage__wrapper,children:[(0,l.jsx)(h.Z,{data:P}),P.length>0&&(0,l.jsx)(p.Z,{onClick:function(){B((function(A){return A+1}))}})]})]}),P.length>0&&(0,l.jsx)(s.Z,{})]})}},531:function(A,e,a){a.d(e,{Z:function(){return c}});a(2791);var t="BtnUp_wrapper__CjVs0",r="BtnUp_BtnUp__m8SaE",n="BtnUp_ScrollBtn__p3Dqd",i=a(184);function c(){return(0,i.jsx)("div",{className:t,children:(0,i.jsx)("button",{className:n,onClick:function(){window.scrollTo({top:0,right:-1,behavior:"smooth"})},children:(0,i.jsx)("img",{className:r,src:"data:image/png;base64,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BuBbAvTfImBe/3kAvi5A/y0CJvafCOBrAvTfImBm/5kA/l+A/lsETO0/FcAXAe/0Pypgbv+5AC53H97pf0zA5P6TAfyXAP23CJjdfzaAfwvQf4uA6f2nA/inAP23CJjffz6AvwvQf4uABf0XAPirAP23CFjRfwWAPwXov0XAkv5LAPwhoPz6v40C1vRfA+B3AQtuMX8iAYv6LwLwRcB7/bcIWNV/FYDL3fuf9P9+Ac+r+i8DcLm71/X792pZl/hhdw8AAAwAA8AAMAAMAAPAADAADAADwAAwAAwAA8AAMAAMAAPAADAADAADwAAwAAwAA8AAMAAMAAPAADAADAADwAAwAAwAA8AAMAAMAAPAADAADAADwAAwAAwAA8AAMAAMAAPAADAADAADwAAwAAwAA8AAMAAMAAPAADAADAADwAAwAAwAA8AAMAAMAAPAADAADAADwAAwAAwAAAwAA8AAMAAMAAPAADAADAADwAAwAAwAA8AAMAAMAAPAADAADAADwAAwAAwAA8AAMAAMAAPAADAADAADwAAwAAwAA8AAMAAMAAPAADAADAADwAAwAAwAA8AAMAAMAAPAADAADAADwAAwAAyAb+3heeAeALi5vX47cK8BMAAMAAPAADAADAADwAAwAAwAA8AAMAAMAAPAADAADAADwAAwAAwAA8AAMAAMAAPAADAADAADwAAwAAwAA8AAMAAMAAPAADAADAADwAAwAGzwfgPoVoQu61ix2gAAAABJRU5ErkJggg==",alt:"img"})})})}},9402:function(A,e,a){a.d(e,{Z:function(){return n}});a(2791);var t="LoadMoreBtn_LoadMoreBtn__94TV7",r=a(184);function n(A){var e=A.onClick;return(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:t,onClick:e,children:"Load More"})})}},3557:function(A,e,a){a.d(e,{Z:function(){return p}});var t=a(8683),r=(a(2791),"MovieList_list__q2lPG"),n=a(3504),i=a(7718),c="MovieItem_MovieItem__3pmYn",o="MovieItem_MovieItem__img__I2qWo",s="MovieItem_MovieItem__wrapper__7GL2P",f="MovieItem_MovieItem__title__NhWXZ",l="MovieItem_MovieItem__rating__MlC55",u=a(184);function h(A){var e=A.poster_path,a=A.backdrop_path,t=A.title,r=A.vote_average,h=A.id;A.video;return(0,u.jsx)("li",{className:c,children:(0,u.jsxs)(n.rU,{to:"/movies/".concat(h),children:[(0,u.jsx)("img",{className:o,src:e?"https://image.tmdb.org/t/p/w500".concat(e||a):i,alt:"img"}),(0,u.jsxs)("div",{className:s,children:[(0,u.jsx)("h1",{className:f,children:t||"Unknown"}),(0,u.jsxs)("p",{className:l,children:["User Score: ",Math.round(r),"/10"]})]})]})})}function p(A){var e=A.data.map((function(A){return(0,u.jsx)(h,(0,t.Z)({},A),A.id)}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{className:r,children:e})})}},7718:function(A,e,a){A.exports=a.p+"static/media/default_image.7555b15218a0f4733bf7.png"},2982:function(A,e,a){a.d(e,{Z:function(){return n}});var t=a(907);var r=a(181);function n(A){return function(A){if(Array.isArray(A))return(0,t.Z)(A)}(A)||function(A){if("undefined"!==typeof Symbol&&null!=A[Symbol.iterator]||null!=A["@@iterator"])return Array.from(A)}(A)||(0,r.Z)(A)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=832.6b9caa80.chunk.js.map