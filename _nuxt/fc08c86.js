(window.webpackJsonp=window.webpackJsonp||[]).push([[13,4],{235:function(t,e,r){var content=r(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("70ff163e",content,!0,{sourceMap:!1})},236:function(t,e,r){"use strict";r.r(e);r(84);var o=r(40),n={name:"AppCard",props:{flat:{type:Boolean,default:!1},color:{type:String,default:"white"},height:{type:[Number,String],default:"fit-content"},borderRadius:{type:[Number,String],default:24},hover:{type:Boolean,default:!1},maxWidth:{type:[Number,String],default:"100%"},minWidth:{type:[Number,String],default:"24px"},minHeight:{type:[Number,String],default:"24px"},width:{type:[Number,String],default:""}},computed:{classes:function(){var t={"app-card-hover":this.hover};return t},styles:function(){return{height:Object(o.a)(this.height),width:Object(o.a)(this.width),"min-width":Object(o.a)(this.minWidth),"min-height":Object(o.a)(this.minHeight),"max-width":Object(o.a)(this.maxWidth),"border-radius":Object(o.a)(this.borderRadius),"background-color":this.color,"border-color":this.color}}}},c=(r(237),r(8)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"app-card",class:t.classes,style:t.styles},[t._t("default")],2)}),[],!1,null,"79778b24",null);e.default=component.exports},237:function(t,e,r){"use strict";r(235)},238:function(t,e,r){var o=r(23)(!1);o.push([t.i,".app-card[data-v-79778b24]{display:block;max-width:100%;outline:none;position:relative;white-space:normal;padding:16px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.app-card.app-card-hover[data-v-79778b24]:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)!important}",""]),t.exports=o},249:function(t,e,r){var content=r(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("7ce8f199",content,!0,{sourceMap:!1})},255:function(t,e,r){"use strict";var o=r(2),n=r(42),c=r(258),l=r(169),d=r(5),f=1..toFixed,h=Math.floor,v=function(t,e,r){return 0===e?r:e%2==1?v(t,e-1,r*t):v(t*t,e/2,r)},x=function(data,t,e){for(var r=-1,o=e;++r<6;)o+=t*data[r],data[r]=o%1e7,o=h(o/1e7)},m=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=h(r/t),r=r%t*1e7},y=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+l.call("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:f&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){f.call({})}))},{toFixed:function(t){var e,r,o,d,f=c(this),h=n(t),data=[0,0,0,0,0,0],w="",O="0";if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return String(f);if(f<0&&(w="-",f=-f),f>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(f*v(2,69,1))-69)<0?f*v(2,-e,1):f/v(2,e,1),r*=4503599627370496,(e=52-e)>0){for(x(data,0,r),o=h;o>=7;)x(data,1e7,0),o-=7;for(x(data,v(10,o,1),0),o=e-1;o>=23;)m(data,1<<23),o-=23;m(data,1<<o),x(data,1,1),m(data,2),O=y(data)}else x(data,0,r),x(data,1<<-e,0),O=y(data)+l.call("0",h);return O=h>0?w+((d=O.length)<=h?"0."+l.call("0",h-d)+O:O.slice(0,d-h)+"."+O.slice(d-h)):w+O}})},258:function(t,e,r){var o=r(38);t.exports=function(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}},263:function(t,e,r){"use strict";r(249)},264:function(t,e,r){var o=r(23)(!1);o.push([t.i,".app-table[data-v-06dc979b]{max-width:100%;text-align:left}.app-table-body[data-v-06dc979b]{width:100%;height:100%;overflow:auto}.app-table-wrapper[data-v-06dc979b]{overflow-x:auto;overflow-y:hidden}.app-table th[data-v-06dc979b]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.app-table tbody td[data-v-06dc979b]{border-bottom:thin solid rgba(0,0,0,.12)}.app-table td[data-v-06dc979b],.app-table th[data-v-06dc979b]{padding:8px 16px}.app-table td[data-v-06dc979b]:first-child,.app-table th[data-v-06dc979b]:first-child{padding-left:0}.app-table td[data-v-06dc979b]:last-child,.app-table th[data-v-06dc979b]:last-child{padding-right:0}table[data-v-06dc979b]{width:100%;border-spacing:0}",""]),t.exports=o},272:function(t,e,r){"use strict";r.r(e);r(30),r(25),r(31),r(43),r(26),r(44);var o=r(18);r(41),r(49),r(255);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{transactions:{type:Array,default:function(){return[]}}},data:function(){return{transactionIcon:{shopping:"mdi-cart",food:"mdi-food",sport:"mdi-football"},transactionName:{shopping:"Shopping",food:"Food",sport:"Sport"}}},computed:{headers:function(){return[{value:"receiver",text:"Receiver"},{value:"type",text:"Type",class:"grey-text"},{value:"date",text:"Date",class:"grey-text"},{value:"amount",text:"Amount",class:"font-weight-bold"}]},items:function(){var t=this;return this.transactions.map((function(e){return c(c({},e),{},{type:t.transactionName[e.type],icon:t.transactionIcon[e.type],date:new Date(e.date).toDateString().slice(4),amount:"$".concat(parseFloat(e.amount).toFixed(2))})}))}}},d=(r(263),r(8)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("AppCard",{staticClass:"app-row",staticStyle:{"padding-left":"24px"},attrs:{width:"100%"}},[r("div",{staticClass:"app-column col-12"},[r("div",{staticClass:"app-row"},[r("h3",{staticClass:"text-title"},[t._v("Transaction History")])]),t._v(" "),r("div",{staticClass:"app-table"},[r("div",{staticClass:"app-table-wrapper"},[r("table",{staticClass:"text-caption"},[r("thead",{staticClass:"grey-text"},[r("tr",t._l(t.headers,(function(header){return r("th",{key:"thead-"+header.value},[t._v("\n                "+t._s(header.text)+"\n              ")])})),0)]),t._v(" "),r("tbody",{staticClass:"app-table-body"},t._l(t.items,(function(e){return r("tr",{key:e.id},t._l(t.headers,(function(header){return r("td",{key:e.id+"-td-"+header.value},["receiver"===header.value?r("AppIcon",{staticClass:"mr-2",staticStyle:{"border-radius":"8px",padding:"4px"},attrs:{small:"",color:"#616161","background-color":"#EEEEEE"}},[t._v("\n                  "+t._s(e.icon)+"\n                ")]):t._e(),t._v(" "),r("span",{class:header.class},[t._v("\n                  "+t._s(e[header.value])+"\n                ")])],1)})),0)})),0)])])])])])}),[],!1,null,"06dc979b",null);e.default=component.exports;installComponents(component,{AppIcon:r(115).default,AppCard:r(236).default})}}]);