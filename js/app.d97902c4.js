(function(e){function t(t){for(var r,o,l=t[0],u=t[1],c=t[2],f=0,d=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/check-on-random-number/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"35a3":function(e,t,n){},"4b15":function(e,t,n){"use strict";var r=n("35a3"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("43f9"),i=n.n(a),o=(n("51de"),n("e094"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("France",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)}),l=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-container"},[n("md-table",{attrs:{"md-card":""}},[n("md-table-toolbar",[n("h1",{staticClass:"md-title"},[n("md-button",{staticClass:"md-raised md-primary",on:{click:e.start}},[e._v("Restart")])],1)]),n("md-table-row",[n("md-table-head",{staticClass:"text-center"},[e._v("ID")]),n("md-table-head",{staticClass:"text-center"},[e._v("Number")]),n("md-table-head",{staticClass:"text-center"},[e._v("Input")]),n("md-table-head",{staticClass:"text-center"},[e._v("Verify")]),n("md-table-head",{staticStyle:{"min-width":"350px"}},[e._v("Answer")])],1),e._l(e.list,(function(t){return n("md-table-row",{key:t.num},[n("md-table-cell",[e._v(e._s(t.id))]),n("md-table-cell",[e._v(e._s(t.num))]),n("md-table-cell",[n("md-field",{attrs:{"md-inline":""}},[n("label"),n("md-input",{on:{blur:function(n){return e.verifyNum(t)},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.verifyNum(t)}},model:{value:t.input,callback:function(n){e.$set(t,"input",n)},expression:"l.input"}})],1)],1),n("md-table-cell",[n("md-icon",{class:t.color},[e._v(e._s(t.verify))])],1),n("md-table-cell",{staticClass:"text-left"},[t.view?n("div",{staticClass:"answer"},[e._v(e._s(t.answer))]):n("div",{on:{click:function(e){t.view=!0}}},[n("md-icon",[e._v("help_outline")])],1)])],1)}))],2)],1)},c=[],s=(n("4160"),n("159b"),n("caad"),n("a15b"),n("ac1f"),n("2532"),n("5319"),["I","II","III","IV","V","VI","VII","VIII","IX","X"]);function f(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function d(e,t){var n=f(Math.pow(10,e-1),Math.pow(10,e));t.includes(n)?d(e,t):t.push(n)}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=0,n=[];for(t=0;t<10;t++){var r=Math.ceil(Math.random()*e);d(r,n)}return n}function v(e){var t=[];while(e>0)t.push(e%1e3),e=Math.floor(e/1e3);return t}function m(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach((function(t){e.push(t)})),e}function b(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach((function(t){e=e.replace(/%s/,t)})),e}function h(e){var t=["","mille","million","milliard","billion","billiard","trillion","trilliard","quadrillion","quadrilliard","quintillion","quintilliard"],n=["","un","deux","trois","quatre","cinq","six","sept","huit","neuf"],r=["","dix","vingt","trente","quarante","cinquante","soixante","soixante","quatre-vingt","quatre-vingt"],a=["dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"],i=[];e<0&&(i=m(i,"moins"),e*=-1);var o=v(e);if(0==o.length)return"zéro";for(var l=function(e){var l=o[e];if(0==l)return"continue";if(1==l&&1==e)return i=m(i,"mille"),"continue";var u=Math.floor(l/100)%10,c=Math.floor(l/10)%10,s=l%10;if(u>0)if(1==u)i=m(i,"cent");else{if(0==c&&0==s)return i=m(i,n[u],"cents"),h(),"continue";i=m(i,n[u],"cent")}if(0==c&&0==s)return h(),"continue";switch(c){case 0:i=m(i,n[s]);break;case 1:i=m(i,a[s]);break;case 7:switch(s){case 1:i=m(i,r[c],"et",a[s]);break;default:var f=b("%s-%s",r[c],a[s]);i=m(i,f);break}break;case 8:switch(s){case 0:i=m(i,r[c]+"s");break;default:var d=b("%s-%s",r[c],n[s]);i=m(i,d);break}break;case 9:var p=b("%s-%s",r[c],a[s]);i=m(i,p);break;default:switch(s){case 0:i=m(i,r[c]);break;case 1:i=m(i,r[c],"et",n[s]);break;default:var v=b("%s-%s",r[c],n[s]);i=m(i,v);break}break}function h(){var n=t[e];""!=n&&("mille"!=n&&l>1&&(n+="s"),i=m(i,n))}h()},u=o.length-1;u>=0;u--)l(u);return i.join(" ")}var y={name:"France",props:{msg:String},mounted:function(){this.start()},data:function(){return{list:[]}},methods:{start:function(){var e=this;this.list=[];var t=p();t.sort((function(e,t){return e-t})).forEach((function(t,n){e.list.push({id:s[n],num:t,input:"",verify:"remove",view:!1,answer:h(t)})}))},verifyNum:function(e){console.log(e),""!=e.input&&(e.input==e.answer?(e.verify="done_all",e.color="md-primary"):(e.verify="block",e.color="md-accent"))}}},w=y,_=(n("4b15"),n("2877")),k=Object(_["a"])(w,u,c,!1,null,"0e38d712",null),x=k.exports,g={name:"App",components:{France:x}},I=g,M=(n("034f"),Object(_["a"])(I,o,l,!1,null,null,null)),O=M.exports;r["default"].use(i.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(O)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.d97902c4.js.map