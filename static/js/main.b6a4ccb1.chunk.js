(this["webpackJsonpra-2.2"]=this["webpackJsonpra-2.2"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(3),o=c.n(r),a=(c(9),c(4)),i=[],m=0;[{name:"Nike Metcon 2",price:"130",color:"red",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"},{name:"Nike Metcon 2",price:"130",color:"green",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"},{name:"Nike Metcon 2",price:"130",color:"blue",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"},{name:"Nike Metcon 2",price:"130",color:"black",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"},{name:"Nike free run",price:"170",color:"black",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"},{name:"Nike Metcon 3",price:"150",color:"green",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"}].forEach((function(e){e.id=m++,i.push(e)}));var l=i,d=(c(10),c(0));var h=function(e){var t=e.icon,c=["view_list","view_module"];return Object(d.jsx)("button",{className:"iconSwitch__icon material-icons",onClick:function(){e.onSwitch(t)},children:t?c[0]:c[1]})};c(12);var u=function(e){var t=e.card;return Object(d.jsxs)("div",{className:"shopCard__card",children:[Object(d.jsx)("h2",{className:"shopCard__item shopCard__title",children:t.name}),Object(d.jsx)("div",{className:"shopCard__item shopCard__color",children:t.color}),Object(d.jsx)("img",{className:"shopCard__item shopCard__img",src:t.img,alt:t.name}),Object(d.jsxs)("div",{className:"shopCard__item shopCard__inner",children:[Object(d.jsx)("div",{className:"shopCard__price",children:t.price}),Object(d.jsx)("button",{className:"shopCard__btn",children:"add to cart"})]})]})};c(13);var j=function(e){var t=e.cards;return Object(d.jsx)("div",{className:"cardView__container",children:t.map((function(e){return Object(d.jsx)(u,{card:e},e.id)}))})};c(14);var _=function(e){var t=e.card;return Object(d.jsxs)("div",{className:"shopItem__card",children:[Object(d.jsx)("img",{className:"shopItem__item shopItem__img",src:t.img,alt:t.name}),Object(d.jsx)("h2",{className:"shopItem__item shopItem__title",children:t.name}),Object(d.jsx)("div",{className:"shopItem__item shopItem__color",children:t.color}),Object(d.jsx)("div",{className:"shopItem__item shopItem__price",children:t.price}),Object(d.jsx)("button",{className:"shopItem__item shopItem__btn",children:"add to cart"})]})};c(15);var p=function(e){var t=e.cards;return Object(d.jsx)("div",{className:"listView__container",children:t.map((function(e){return Object(d.jsx)(_,{card:e},e.id)}))})};c(16);var b=function(){var e=Object(n.useState)(!0),t=Object(a.a)(e,2),c=t[0],s=t[1],r=l,o=[Object(d.jsx)(j,{cards:r}),Object(d.jsx)(p,{cards:r})],i=c?0:1;return Object(d.jsxs)("div",{className:"store__container",children:[Object(d.jsx)("div",{className:"store__icon",children:Object(d.jsx)(h,{onSwitch:function(e){s((function(e){return!e}))},icon:c})}),Object(d.jsx)("div",{children:o[i]})]})};c(17);var g=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(b,{})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),v()}],[[18,1,2]]]);
//# sourceMappingURL=main.b6a4ccb1.chunk.js.map