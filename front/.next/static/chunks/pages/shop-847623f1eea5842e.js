(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{1004:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop",function(){return n(2184)}])},2969:function(e,r,n){"use strict";n.d(r,{b:function(){return t}});var s=n(5893),i=n(1664),t=function(e){var r=e.product,n=e.onAddToWish,t=e.onAddToCart,a=e.addedInCart,c=r.name,l=r.oldPrice,o=r.price,d=r.image,u=r.isSale,m=r.isNew,h=r.id;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"products-item",children:[(0,s.jsxs)("div",{className:"products-item__type",children:[u&&(0,s.jsx)("span",{className:"products-item__sale",children:"sale"}),m&&(0,s.jsx)("span",{className:"products-item__new",children:"new"})]}),(0,s.jsxs)("div",{className:"products-item__img",children:[(0,s.jsx)("img",{src:d,className:"js-img",alt:""}),(0,s.jsxs)("div",{className:"products-item__hover",children:[(0,s.jsx)(i.default,{href:"/product/".concat(h),children:(0,s.jsx)("a",{children:(0,s.jsx)("i",{className:"icon-search"})})}),(0,s.jsxs)("div",{className:"products-item__hover-options",children:[(0,s.jsx)("button",{className:"addList",onClick:function(){return n(h)},children:(0,s.jsx)("i",{className:"icon-heart"})}),(0,s.jsx)("button",{disabled:a,className:"addList ".concat(a?"added":""),onClick:function(){return t(h)},children:(0,s.jsx)("i",{className:"icon-cart"})})]})]})]}),(0,s.jsxs)("div",{className:"products-item__info",children:[(0,s.jsx)(i.default,{href:"/product/".concat(h),children:(0,s.jsx)("a",{children:(0,s.jsx)("span",{className:"products-item__name",children:c})})}),(0,s.jsxs)("span",{className:"products-item__cost",children:[(0,s.jsx)("span",{children:l&&"$".concat(l)})," $",o]})]})]})})}},4965:function(e,r,n){"use strict";n.d(r,{P:function(){return t}});var s=n(5893);function i(e){return function(e){if(Array.isArray(e)){for(var r=0,n=new Array(e.length);r<e.length;r++)n[r]=e[r];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var t=function(e){var r=e.paginate;return(0,s.jsxs)("ul",{className:"paging-list",children:[(0,s.jsx)("li",{onClick:function(){return r.prev()},className:"paging-list__item paging-prev",children:(0,s.jsx)("button",{className:"paging-list__link",children:(0,s.jsx)("i",{className:"icon-arrow"})})}),i(Array(r.maxPage)).map((function(e,n){return(0,s.jsx)("li",{onClick:function(){return r.jump(n+1)},className:"paging-list__item ".concat(r.currentPage===n+1&&"active"),children:(0,s.jsx)("button",{className:"paging-list__link",children:n+1})},n)})),(0,s.jsx)("li",{onClick:function(){return r.next()},className:"paging-list__item paging-next",children:(0,s.jsx)("button",{className:"paging-list__link",children:(0,s.jsx)("i",{className:"icon-arrow"})})})]})}},3873:function(e,r,n){"use strict";n.d(r,{x:function(){return i}});var s=n(5893),i=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"subscribe",children:(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsxs)("div",{className:"subscribe-form",children:[(0,s.jsx)("div",{className:"subscribe-form__img",children:(0,s.jsx)("img",{src:"/assets/img/subscribe-img.png",className:"js-img",alt:""})}),(0,s.jsxs)("form",{children:[(0,s.jsx)("h3",{children:"Stay in touch"}),(0,s.jsx)("p",{children:"Nourish your skin with toxin-free cosmetic roducts."}),(0,s.jsxs)("div",{className:"box-field__row",children:[(0,s.jsx)("div",{className:"box-field",children:(0,s.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter your email"})}),(0,s.jsx)("button",{type:"submit",className:"btn",children:"subscribe"})]})]})]})})})})}},1775:function(e,r,n){"use strict";n.d(r,{h:function(){return i}});var s=n(7294),i=function(e,r){var n=(0,s.useState)(1),i=n[0],t=n[1],a=Math.ceil(e.length/r);return{next:function(){t((function(e){return Math.min(e+1,a)}))},prev:function(){t((function(e){return Math.max(e-1,1)}))},jump:function(e){var r=Math.max(1,e);t((function(e){return Math.min(r,a)}))},currentData:function(){var n=(i-1)*r,s=n+r;return e.slice(n,s)},currentPage:i,maxPage:a}}},6731:function(e,r,n){"use strict";n.d(r,{Y:function(){return o}});var s=n(5893),i=n(1664),t=n(1163),a=n(7294),c=function(e){var r=e.breadcrumb,n=e.title,c=e.description,l=(0,t.useRouter)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"detail-block detail-block_margin",children:(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsxs)("div",{className:"detail-block__content",children:[(0,s.jsx)("h1",{children:n}),r&&(0,s.jsx)("ul",{className:"bread-crumbs",children:null===r||void 0===r?void 0:r.map((function(e,r){var n=e.path,t=e.label;return(0,s.jsx)(a.Fragment,{children:n===l.asPath?(0,s.jsx)("li",{className:"bread-crumbs__item",children:t}):(0,s.jsx)("li",{className:"bread-crumbs__item",children:(0,s.jsx)(i.default,{href:n,children:(0,s.jsx)("a",{className:"bread-crumbs__link",children:t})})})},r)}))}),c&&(0,s.jsx)("span",{className:"error-descr",children:c})]})})})})},l=n(5108),o=function(e){var r=e.children,n=e.breadcrumb,i=e.breadcrumbTitle,t=e.description;return(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c,{breadcrumb:n,title:i,description:t}),(0,s.jsx)(s.Fragment,{children:r})]})}},2184:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return O}});var s=n(5893),i=n(3873),t=n(2654),a=n(7294),c=n(2969);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(r){l(e,r,n[r])}))}return e}function d(e){return function(e){if(Array.isArray(e)){for(var r=0,n=new Array(e.length);r<e.length;r++)n[r]=e[r];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=function(e){var r=e.products,n=(0,a.useContext)(t.CartContext),i=n.cart,l=n.setCart,u=function(e){var n=null===r||void 0===r?void 0:r.find((function(r){return r.id===e}));l(d(i).concat([o({},n,{quantity:1})]))};return(0,s.jsx)(s.Fragment,{children:r.map((function(e){return(0,s.jsx)(c.b,{addedInCart:Boolean(null===i||void 0===i?void 0:i.find((function(r){return r.id===e.id}))),product:e,onAddToWish:function(e){return console.log(e)},onAddToCart:u},e.id)}))})},m=n(4965),h=n(1775),p=n(2136),f=n(2832),j=n(3658),x=n(1664);function b(e){return function(e){if(Array.isArray(e)){for(var r=0,n=new Array(e.length);r<e.length;r++)n[r]=e[r];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var v=function(e){var r=e.aside,n=r.id,i=r.image,t=r.name,a=r.price,c=r.star;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(x.default,{href:"/product/".concat(n),children:(0,s.jsxs)("a",{className:"shop-aside__item-product",children:[(0,s.jsx)("div",{className:"shop-aside__item-product-img",children:(0,s.jsx)("img",{src:i,className:"js-img",alt:""})}),(0,s.jsxs)("div",{className:"shop-aside__item-product-info",children:[(0,s.jsx)("span",{className:"shop-aside__item-product-title",children:t}),(0,s.jsxs)("span",{className:"shop-aside__item-product-price",children:["$",a]}),(0,s.jsx)("ul",{className:"star-rating",children:b(Array(c)).map((function(e,r){}))})]})]})})})};function N(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function _(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(r){N(e,r,n[r])}))}return e}function g(e){return function(e){if(Array.isArray(e)){for(var r=0,n=new Array(e.length);r<e.length;r++)n[r]=e[r];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y=(0,f.ZP.createSliderWithTooltip)(f.ZP.Range),w=[{value:"highToMin",label:"From expensive to cheap"},{value:"minToHigh",label:"From cheap to expensive"}],S=function(){var e=g(p),r=(0,a.useState)(e.sort((function(e,r){return e.price<r.price?1:-1}))),n=r[0],i=r[1],t=(0,a.useState)(g(n)),c=t[0],l=t[1],o=(0,a.useState)({isNew:!1,isSale:!0}),d=o[0],f=o[1];(0,a.useEffect)((function(){l(n)}),[n]),(0,a.useEffect)((function(){if(d.isNew&&d.isSale){var e=n.filter((function(e){return!0===e.isNew&&!0===e.isSale}));l(e)}else if(d.isNew&&!d.isSale){var r=n.filter((function(e){return!0===e.isNew}));l(r)}else if(d.isSale&&!d.isNew){var s=n.filter((function(e){return!0===e.isSale}));l(s)}else l(g(n))}),[d,n]);var x=g(p).slice(0,3),b=g(p).slice(3,6),N=(0,h.h)(c,9);return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"shop",children:[(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsxs)("div",{className:"shop-content",children:[(0,s.jsxs)("div",{className:"shop-aside",children:[(0,s.jsxs)("div",{className:"box-field box-field__search",children:[(0,s.jsx)("input",{type:"search",className:"form-control",placeholder:"Search"}),(0,s.jsx)("i",{className:"icon-search"})]}),(0,s.jsxs)("div",{className:"shop-aside__item",children:[(0,s.jsx)("span",{className:"shop-aside__item-title",children:"Categories"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:"#",children:["Make up ",(0,s.jsx)("span",{children:"(37)"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:"#",children:["SPA ",(0,s.jsx)("span",{children:"(162)"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:"#",children:["Perfume ",(0,s.jsx)("span",{children:"(153)"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:"#",children:["Nails ",(0,s.jsx)("span",{children:"(86)"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:"#",children:["Skin care ",(0,s.jsx)("span",{children:"(48)"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:"#",children:["Hair care ",(0,s.jsx)("span",{children:"(54)"})]})})]})]}),(0,s.jsxs)("div",{className:"shop-aside__item",children:[(0,s.jsx)("span",{className:"shop-aside__item-title",children:"Price"}),(0,s.jsx)("div",{className:"range-slider",children:(0,s.jsx)(y,{min:0,max:20,defaultValue:[0,20],tipFormatter:function(e){return"".concat(e,"$")},allowCross:!1,tipProps:{placement:"bottom",prefixCls:"rc-slider-tooltip"}})})]}),(0,s.jsxs)("div",{className:"shop-aside__item",children:[(0,s.jsx)("span",{className:"shop-aside__item-title",children:"You have viewed"}),x.map((function(e){return(0,s.jsx)(v,{aside:e},e.id)}))]}),(0,s.jsxs)("div",{className:"shop-aside__item",children:[(0,s.jsx)("span",{className:"shop-aside__item-title",children:"Top 3 for today"}),b.map((function(e){return(0,s.jsx)(v,{aside:e},e.id)}))]})]}),(0,s.jsxs)("div",{className:"shop-main",children:[(0,s.jsxs)("div",{className:"shop-main__filter",children:[(0,s.jsxs)("div",{className:"shop-main__checkboxes",children:[(0,s.jsxs)("label",{className:"checkbox-box",children:[(0,s.jsx)("input",{checked:d.isSale,onChange:function(){return f(_({},d,{isSale:!d.isSale}))},type:"checkbox"}),(0,s.jsx)("span",{className:"checkmark"}),"SALE"]}),(0,s.jsxs)("label",{className:"checkbox-box",children:[(0,s.jsx)("input",{checked:d.isNew,onChange:function(){return f(_({},d,{isNew:!d.isNew}))},type:"checkbox"}),(0,s.jsx)("span",{className:"checkmark"}),"NEW"]})]}),(0,s.jsx)("div",{className:"shop-main__select",children:(0,s.jsx)(j.Z,{options:w,className:"react-dropdown",onChange:function(r){return function(r){if("highToMin"===r){var n=e.sort((function(e,r){return e.price<r.price?1:-1}));i(n)}if("minToHigh"===r){var s=e.sort((function(e,r){return e.price>r.price?1:-1}));i(s)}}(r.value)},value:w[0]})})]}),(0,s.jsx)("div",{className:"shop-main__items",children:(0,s.jsx)(u,{products:null===N||void 0===N?void 0:N.currentData()})}),(0,s.jsx)(m.P,{paginate:N})]})]})}),(0,s.jsx)("img",{className:"promo-video__decor js-img",src:"/assets/img/promo-video__decor.jpg",alt:""}),(0,s.jsx)("img",{className:"shop-decor js-img",src:"/assets/img/shop-decor.jpg",alt:""})]})})},k=n(6731),A=[{label:"Home",path:"/"},{label:"Shop",path:"/shop"}],O=function(){return(0,s.jsxs)(k.Y,{breadcrumb:A,breadcrumbTitle:"Shop",children:[(0,s.jsx)(S,{}),(0,s.jsx)(i.x,{})]})}}},function(e){e.O(0,[994,116,411,108,136,774,888,179],(function(){return r=1004,e(e.s=r);var r}));var r=e.O();_N_E=r}]);