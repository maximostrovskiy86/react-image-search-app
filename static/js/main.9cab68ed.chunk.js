(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__18xn0",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__193Xf"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3zur2",Modal:"Modal_Modal__JzWj5"}},13:function(e,t,a){e.exports={App:"App_App__2s_Fq"}},14:function(e,t,a){e.exports={Button:"Button_Button__UUCg_"}},20:function(e,t,a){},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3nP09",SearchForm:"Searchbar_SearchForm__l0-6e",SearchFormButton:"Searchbar_SearchFormButton__18FfJ","SearchForm-button":"Searchbar_SearchForm-button__3pqnD",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2QS5Z",SearchFormInput:"Searchbar_SearchFormInput__3FzPn"}},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),o=a.n(r),l=(a(20),a(3)),u=a(13),i=a.n(u),s=a(4),m=a.n(s),b=a(1),h=function(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],o=c[1];return Object(b.jsx)("header",{className:m.a.Searchbar,children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==r.trim()?(t(r),o("")):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f")},className:m.a.SearchForm,children:[Object(b.jsx)("button",{type:"submit",className:m.a.SearchFormButton,children:Object(b.jsx)("span",{className:m.a.SearchFormButtonLabel,children:"Search"})}),Object(b.jsx)("input",{className:m.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){var t=e.target.value;o(t.toLowerCase())},value:r})]})})},j=a(12),f=a(9),d=a.n(f),p=(a(22),a(10)),O=a.n(p),_=function(e){var t=e.src,a=e.alt,n=e.modalUrl,c=e.onClickCurrentImage;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(b.jsx)("img",{src:t,alt:a,className:O.a.ImageGalleryItemImage,onClick:function(){return c(n)}})})})},g=a(14),S=a.n(g),y=function(e){var t=e.LoadMore;return Object(b.jsx)("button",{type:"button",className:S.a.Button,onClick:t,children:"Load more"})},x=a(11),I=a.n(x),v=document.querySelector("#modal-root"),F=function(e){var t=e.onClose,a=e.children;Object(n.useEffect)((function(){return window.addEventListener("keydown",c),document.querySelector("body").style.overflow="hidden",function(){window.removeEventListener("keydown",c),document.querySelector("body").style.overflow="auto"}}));var c=function(e){"Escape"===e.code&&t()};return Object(r.createPortal)(Object(b.jsx)("div",{className:I.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(b.jsx)("div",{className:I.a.Modal,children:a})}),v)},w="https://pixabay.com/api/?",G="23297096-fdec21a8bcbab7faa251f0233",k=function(e){return fetch(w+"q=".concat(e,"&page=1&key=").concat(G,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()}))},C=function(e,t){return fetch(w+"q=".concat(e,"&page=").concat(t,"&key=").concat(G,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()}))},N=a(15),B=a.n(N),L=function(e){var t=e.inputValue,a=Object(n.useState)([]),c=Object(l.a)(a,2),r=c[0],o=c[1],u=Object(n.useState)(1),i=Object(l.a)(u,2),s=i[0],m=i[1],h=Object(n.useState)(!1),f=Object(l.a)(h,2),p=f[0],O=f[1],g=Object(n.useState)(""),S=Object(l.a)(g,2),x=S[0],I=S[1],v=Object(n.useState)(null),w=Object(l.a)(v,2),G=w[0],N=w[1],L=Object(n.useState)(!1),E=Object(l.a)(L,2),M=E[0],q=E[1],U=function(e,t){(t?C(e,t):k(e)).then((function(e){return t?o((function(t){return[].concat(Object(j.a)(t),Object(j.a)(e.hits))})):(o(e.hits),m(1))})).catch((function(e){N(e)})).finally((function(){q(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))};Object(n.useEffect)((function(){""!==t&&(q(!0),U(t))}),[t]),Object(n.useEffect)((function(){console.log("useEffect PAGE"),1!==s&&(q(!0),U(t,s))}),[s,t]);var z=function(e){O((function(e){return!e})),I(e)};return Object(b.jsxs)("main",{className:d.a.main,children:[G&&Object(b.jsx)("h2",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u0435\u0449\u0451 \u0440\u0430\u0437"}),Object(b.jsx)("ul",{className:d.a.ImageGallery,children:r.map((function(e){return Object(b.jsx)(_,{src:e.webformatURL,alt:e.tags,modalUrl:e.largeImageURL,onClickCurrentImage:z},e.id)}))}),M&&Object(b.jsx)(B.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}),p&&Object(b.jsx)(F,{onClose:function(){O((function(e){return!e}))},children:Object(b.jsx)("img",{src:x,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"})}),r.length>0&&Object(b.jsx)(y,{LoadMore:function(){m((function(e){return console.log(e),e+1}))}})]})},E=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(b.jsxs)("div",{className:i.a.App,children:[Object(b.jsx)(h,{onSubmit:function(e){c(e)}}),Object(b.jsx)(L,{inputValue:a})]})};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3kJ-U",main:"ImageGallery_main__1kH0o"}}},[[43,1,2]]]);
//# sourceMappingURL=main.9cab68ed.chunk.js.map