(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{408:function(e,t,r){"use strict";r.r(t);var o={data:function(){return{show_code:!1}},methods:{showCode:function(){this.show_code=!this.show_code}}},l=r(13),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"border p-4"},[r("div",{staticClass:"flex justify-end gap-x-1 mb-2"},[r("button",{staticClass:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 text-xs border border-gray-400 rounded shadow",on:{click:e.showCode}},[r("span",{directives:[{name:"show",rawName:"v-show",value:!e.show_code,expression:"!show_code"}],staticClass:"flex justify-center items-center gap-x-1"},[e._v("\n          Show Code\n          "),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"}},[r("g",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[r("path",{attrs:{d:"M10 9l-7 8l7 8M22 9l7 8l-7 8M18 7l-4 20"}})])])]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.show_code,expression:"show_code"}],staticClass:"flex justify-center items-center gap-x-1"},[e._v("\n          Preview\n          "),r("svg",{staticStyle:{"vertical-align":"-0.125em"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"}},[r("path",{attrs:{fill:"currentColor",d:"M472 16H40a24.028 24.028 0 0 0-24 24v336a24.028 24.028 0 0 0 24 24h200v64h-80v32h192v-32h-80v-64h200a24.028 24.028 0 0 0 24-24V40a24.028 24.028 0 0 0-24-24zm-8 352H48v-96h416zm0-128H48V48h416z"}}),r("path",{attrs:{fill:"currentColor",d:"M400 304h32v32h-32z"}})])])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.show_code,expression:"!show_code"}],staticClass:"preview"},[e._t("preview")],2),e._v(" "),r("pre",{directives:[{name:"show",rawName:"v-show",value:e.show_code,expression:"show_code"}]},[e._v("    "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"html"},[e._v("\n      "),e._t("code"),e._v("\n    ")],2),e._v("\n  ")])])}),[],!1,null,null,null);t.default=component.exports},413:function(e,t,r){"use strict";r.r(t);var o={components:{CodeAndPreview:r(408).default},layout:"App"},l=r(13),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4"},[r("h1",{staticClass:"text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white"},[e._v("Breadcrumb")]),e._v(" "),r("p",{staticClass:"text-gray-700"},[e._v("Indicate the current page’s location within a navigational hierarchy")]),e._v(" "),r("h2",{staticClass:"text-xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white"},[e._v("Examples")]),e._v(" "),r("code-and-preview",{scopedSlots:e._u([{key:"preview",fn:function(){return[r("ol",{staticClass:"list-reset flex d-flex text-gray-500 gap-x-2"},[r("li",[r("a",{attrs:{href:"#"}},[e._v("Home /")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#"}},[e._v("Components /")])]),e._v(" "),r("li",{staticClass:"text-blue-500"},[e._v("Breadcrumbs")])])]},proxy:!0},{key:"code",fn:function(){return[e._v('\n        <ol class="list-reset flex d-flex text-gray-500 gap-x-2">\n            <li><a href="#">Home /</a> </li>\n            <li><a href="#">Components /</a> </li>\n            <li class="text-blue-500">Breadcrumbs</li>\n        </ol>\n      ')]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CodeAndPreview:r(408).default})}}]);