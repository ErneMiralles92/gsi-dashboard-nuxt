(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{247:function(t,e,o){var content=o(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("399b2d64",content,!0,{sourceMap:!1})},260:function(t,e,o){"use strict";o(247)},261:function(t,e,o){var r=o(22)(!1);r.push([t.i,".app-switch[data-v-32f18f70]{width:38px;height:24px;display:inline-flex;flex:0 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.app-switch-track[data-v-32f18f70]{border-radius:8px;width:36px;height:20px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 10px)}.app-switch-circle[data-v-32f18f70],.app-switch-track[data-v-32f18f70]{background-color:currentColor;pointer-events:none;transition:inherit}.app-switch-circle[data-v-32f18f70]{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1);box-shadow:0 2px 4px -1px rgb(0 0 0/20%),0 4px 5px 0 rgb(0 0 0/14%),0 1px 10px 0 rgb(0 0 0/12%)}.app-switch-active .app-switch-circle[data-v-32f18f70]{transform:translate(20px)}.app-switch.app-switch-disabled[data-v-32f18f70]{pointer-events:none;transition:inherit}",""]),t.exports=r},270:function(t,e,o){"use strict";o.r(e);var r={name:"AppSwitch",inheritAttrs:!1,props:{value:{type:Boolean,default:!1},color:{type:String,default:"#3F51B5"},disabled:{type:Boolean,default:!1}},computed:{switchClasses:function(){var t={"app-switch-active":this.value,"app-switch-disabled":this.disabled};return t},switchStyle:function(){var style={color:this.value?this.color:"#FFF","caret-color":this.value?this.color:"#FFF"};return this.disabled&&(style.color="#BDBDBD",style["caret-color"]="#BDBDBD"),style},trackStyle:function(){var style={color:this.value?this.color:"#9E9E9E","caret-color":this.value?this.color:"#9E9E9E"};return this.disabled&&(style.color="#E0E0E0",style["caret-color"]="#E0E0E0"),style}},methods:{toggle:function(){console.log({value:this.value}),this.$emit("input",!this.value)}}},c=(o(260),o(8)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._g(t._b({staticClass:"app-switch",class:t.switchClasses,style:t.switchStyle,on:{click:t.toggle}},"div",t.$attrs,!1),t.$listeners),[o("div",{staticClass:"app-switch-track",style:t.trackStyle}),t._v(" "),o("div",{staticClass:"app-switch-circle"})])}),[],!1,null,"32f18f70",null);e.default=component.exports}}]);