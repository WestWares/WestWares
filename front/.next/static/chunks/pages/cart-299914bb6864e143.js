(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{4701:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return r(9767)}])},6731:function(e,a,r){"use strict";r.d(a,{Y:function(){return o}});var t=r(5893),s=r(1664),c=r(1163),n=r(7294),i=function(e){var a=e.breadcrumb,r=e.title,i=e.description,l=(0,c.useRouter)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"detail-block detail-block_margin",children:(0,t.jsx)("div",{className:"wrapper",children:(0,t.jsxs)("div",{className:"detail-block__content",children:[(0,t.jsx)("h1",{children:r}),a&&(0,t.jsx)("ul",{className:"bread-crumbs",children:null===a||void 0===a?void 0:a.map((function(e,a){var r=e.path,c=e.label;return(0,t.jsx)(n.Fragment,{children:r===l.asPath?(0,t.jsx)("li",{className:"bread-crumbs__item",children:c}):(0,t.jsx)("li",{className:"bread-crumbs__item",children:(0,t.jsx)(s.default,{href:r,children:(0,t.jsx)("a",{className:"bread-crumbs__link",children:c})})})},a)}))}),i&&(0,t.jsx)("span",{className:"error-descr",children:i})]})})})})},l=r(5108),o=function(e){var a=e.children,r=e.breadcrumb,s=e.breadcrumbTitle,c=e.description;return(0,t.jsxs)(l.A,{children:[(0,t.jsx)(i,{breadcrumb:r,title:s,description:c}),(0,t.jsx)(t.Fragment,{children:a})]})}},9767:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return h}});var t=r(5893),s=r(1664),c=function(e){var a=e.cart,r=e.onChangeQuantity,c=a.name,n=a.image,i=a.id,l=a.isStocked,o=a.productNumber,d=a.oldPrice,u=a.price,m=a.quantity;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"cart-table__row",children:[(0,t.jsxs)("div",{className:"cart-table__col",children:[(0,t.jsx)(s.default,{href:"/product/".concat(i),children:(0,t.jsx)("a",{className:"cart-table__img",children:(0,t.jsx)("img",{src:n,className:"js-img",alt:""})})}),(0,t.jsxs)("div",{className:"cart-table__info",children:[(0,t.jsx)(s.default,{href:"/product/".concat(i),children:(0,t.jsx)("a",{className:"title5",children:c})}),l&&(0,t.jsx)("span",{className:"cart-table__info-stock",children:"in stock"}),(0,t.jsxs)("span",{className:"cart-table__info-num",children:["SKU: ",o]})]})]}),(0,t.jsx)("div",{className:"cart-table__col",children:d?(0,t.jsxs)("span",{className:"cart-table__price",children:[(0,t.jsxs)("span",{children:["$",d]}),"$",u]}):(0,t.jsxs)("span",{className:"cart-table__price",children:["$",u]})}),(0,t.jsx)("div",{className:"cart-table__col",children:(0,t.jsx)("div",{className:"cart-table__quantity",children:(0,t.jsxs)("div",{className:"counter-box",children:[(0,t.jsx)("span",{onClick:function(){return r("decrement",m)},className:"counter-link counter-link__prev",children:(0,t.jsx)("i",{className:"icon-arrow"})}),(0,t.jsx)("input",{type:"text",className:"counter-input",disabled:!0,value:m}),(0,t.jsx)("span",{onClick:function(){return r("increment",m)},className:"counter-link counter-link__next",children:(0,t.jsx)("i",{className:"icon-arrow"})})]})})}),(0,t.jsx)("div",{className:"cart-table__col",children:(0,t.jsxs)("span",{className:"cart-table__total",children:["$",(u*m).toFixed(2)]})})]})})},n=r(5941),i=r(2654),l=r(7294);function o(e){return function(e){if(Array.isArray(e)){for(var a=0,r=new Array(e.length);a<e.length;a++)r[a]=e[a];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d=function(){var e=(0,l.useContext)(i.CartContext),a=e.cart,r=e.setCart,d=(0,l.useState)(0),u=d[0],m=d[1],h=o(n),x=a.reduce((function(e,a){return e+Number(a.price)*Number(a.quantity)}),0);return(0,l.useEffect)((function(){r(a)}),[a,u]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"cart",children:[(0,t.jsxs)("div",{className:"wrapper",children:[(0,t.jsx)("div",{className:"cart-table",children:(0,t.jsxs)("div",{className:"cart-table__box",children:[(0,t.jsxs)("div",{className:"cart-table__row cart-table__row-head",children:[(0,t.jsx)("div",{className:"cart-table__col",children:"Product"}),(0,t.jsx)("div",{className:"cart-table__col",children:"Price"}),(0,t.jsx)("div",{className:"cart-table__col",children:"Quantity"}),(0,t.jsx)("div",{className:"cart-table__col",children:"Total"})]}),a.map((function(e){return(0,t.jsx)(c,{onChangeQuantity:function(r,t){return function(e,r,t){console.log(e,r,t),"increment"===e&&(a.find((function(e){return e.id===t})).quantity=r+1,m(u+1)),"decrement"===e&&r>1&&(a.find((function(e){return e.id===t})).quantity=r-1,m(u+1))}(r,t,e.id)},cart:e},e.id)}))]})}),(0,t.jsxs)("div",{className:"cart-bottom",children:[(0,t.jsxs)("div",{className:"cart-bottom__promo",children:[(0,t.jsx)("form",{className:"cart-bottom__promo-form",children:(0,t.jsxs)("div",{className:"box-field__row",children:[(0,t.jsx)("div",{className:"box-field",children:(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter promo code"})}),(0,t.jsx)("button",{type:"submit",className:"btn btn-grey",children:"apply code"})]})}),(0,t.jsx)("h6",{children:"How to get a promo code?"}),(0,t.jsx)("p",{children:"Follow our news on the website, as well as subscribe to our social networks. So you will not only be able to receive up-to-date codes, but also learn about new products and promotional items."}),(0,t.jsxs)("div",{className:"contacts-info__social",children:[(0,t.jsx)("span",{children:"Find us here:"}),(0,t.jsx)("ul",{children:h.map((function(e,a){return(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:e.path,target:"_blank",children:(0,t.jsx)("i",{className:e.icon})})},a)}))})]})]}),(0,t.jsxs)("div",{className:"cart-bottom__total",children:[(0,t.jsxs)("div",{className:"cart-bottom__total-goods",children:["Goods on",(0,t.jsxs)("span",{children:["$",x.toFixed(2)]})]}),(0,t.jsxs)("div",{className:"cart-bottom__total-promo",children:["Discount on promo code",(0,t.jsx)("span",{children:"No"})]}),(0,t.jsxs)("div",{className:"cart-bottom__total-num",children:["total:",(0,t.jsxs)("span",{children:["$",x.toFixed(2)]})]}),(0,t.jsx)(s.default,{href:"/checkout",children:(0,t.jsx)("a",{className:"btn",children:"Checkout"})})]})]})]}),(0,t.jsx)("img",{className:"promo-video__decor js-img",src:"assets/img/promo-video__decor.jpg",alt:""})]})})},u=r(6731),m=[{label:"Home",path:"/"},{label:"Cart",path:"/cart"}],h=function(){return(0,t.jsx)(u.Y,{breadcrumb:m,breadcrumbTitle:"Cart",children:(0,t.jsx)(d,{})})}}},function(e){e.O(0,[994,108,774,888,179],(function(){return a=4701,e(e.s=a);var a}));var a=e.O();_N_E=a}]);