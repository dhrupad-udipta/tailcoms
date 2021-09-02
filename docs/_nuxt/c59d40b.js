(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2],{408:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{show_code:!1}},methods:{showCode:function(){this.show_code=!this.show_code}}},r=n(13),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"border p-4"},[n("div",{staticClass:"flex justify-end gap-x-1 mb-2"},[n("button",{staticClass:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 text-xs border border-gray-400 rounded shadow",on:{click:e.showCode}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.show_code,expression:"!show_code"}],staticClass:"flex justify-center items-center gap-x-1"},[e._v("\n          Show Code\n          "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"}},[n("g",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[n("path",{attrs:{d:"M10 9l-7 8l7 8M22 9l7 8l-7 8M18 7l-4 20"}})])])]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.show_code,expression:"show_code"}],staticClass:"flex justify-center items-center gap-x-1"},[e._v("\n          Preview\n          "),n("svg",{staticStyle:{"vertical-align":"-0.125em"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M472 16H40a24.028 24.028 0 0 0-24 24v336a24.028 24.028 0 0 0 24 24h200v64h-80v32h192v-32h-80v-64h200a24.028 24.028 0 0 0 24-24V40a24.028 24.028 0 0 0-24-24zm-8 352H48v-96h416zm0-128H48V48h416z"}}),n("path",{attrs:{fill:"currentColor",d:"M400 304h32v32h-32z"}})])])])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.show_code,expression:"!show_code"}],staticClass:"preview"},[e._t("preview")],2),e._v(" "),n("pre",{directives:[{name:"show",rawName:"v-show",value:e.show_code,expression:"show_code"}]},[e._v("    "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"html"},[e._v("\n      "),e._t("code"),e._v("\n    ")],2),e._v("\n  ")])])}),[],!1,null,null,null);t.default=component.exports},415:function(e,t,n){"use strict";n.r(t);var o={layout:"App"},r=n(13),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"w-full flex flex-col justify-start gap-y-2 bg-white dark:bg-gray-800 h-full p-4"},[o("h1",{staticClass:"text-2xl font-semibold tracking-widest text-gray-700 rounded-lg dark-mode:text-white mb-4"},[e._v("Pages  | Login Page")]),e._v(" "),o("code-and-preview",{scopedSlots:e._u([{key:"preview",fn:function(){return[o("div",{staticClass:"min-h-100 w-100 bg-purple-400 flex justify-center items-center p-6"},[o("div",{staticClass:"p-6 md:w-1/2 w-100  bg-white rounded-2xl shadow-xl z-20"},[o("div",{staticClass:"flex flex-col justify-center items-center w-100"},[o("img",{staticClass:"w-36 mb-2",attrs:{src:n(162),alt:""}}),e._v(" "),o("h2",{staticClass:"text-2xl font-bold text-center mb-4 cursor-pointer"},[e._v("Sign In")]),e._v(" "),o("p",{staticClass:"text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer"},[e._v("Create\n                    an account to enjoy all the services without any ads for free!")])]),e._v(" "),o("form",{attrs:{method:"POST",action:"#"}},[o("div",{staticClass:"mb-4"},[o("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2"},[e._v("Name")]),e._v(" "),o("input",{staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{placeholder:"Name",type:"text"}})]),e._v(" "),o("div",{staticClass:"mb-4"},[o("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2"},[e._v("Email")]),e._v(" "),o("input",{staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{placeholder:"Email",type:"email"}})]),e._v(" "),o("div",{staticClass:"mb-4"},[o("label",{staticClass:"block font-medium text-sm text-gray-700"},[e._v("Password")]),e._v(" "),o("input",{staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{placeholder:"Email",type:"password"}})]),e._v(" "),o("div",{staticClass:"block"},[o("label",{staticClass:"flex items-center",attrs:{for:"remember_me"}},[o("input",{staticClass:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",attrs:{type:"checkbox",id:"remember_me",name:"remember"}}),e._v(" "),o("span",{staticClass:"ml-2 text-sm text-gray-600"},[e._v("Remember me")])])]),e._v(" "),o("div",{staticClass:"flex flex-col items-center justify-center gap-y-2 mt-4"},[o("button",{staticClass:"py-2 w-64 text-md text-white bg-purple-500 rounded-2xl",attrs:{type:"submit"}},[e._v("\n                      Log in\n                    ")]),e._v(" "),o("a",{staticClass:"underline text-sm text-gray-600 hover:text-gray-900",attrs:{href:"#"}},[e._v("\n                      Forgot your password?\n                    ")])]),e._v(" "),o("p",{staticClass:"mt-4 text-sm text-center"},[e._v("New User? "),o("span",{staticClass:"underline cursor-pointer"},[o("a",{attrs:{href:"#"}},[e._v("Create Account")])])])])])])]},proxy:!0},{key:"code",fn:function(){return[e._v('\n      <div class="min-h-100 w-100 bg-purple-400 flex justify-center items-center p-6">\n        <div class="p-6 md:w-1/2 w-100  bg-white rounded-2xl shadow-xl z-20">\n            <div class="flex flex-col justify-center items-center w-100">\n                <img src="~/assets/logo.png" class="w-36 mb-2" alt="">\n                <h2 class="text-2xl font-bold text-center mb-4 cursor-pointer">Sign In</h2>\n                <p class="text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create\n                    an account to enjoy all the services without any ads for free!</p>\n            </div>\n            <form method="POST" action="#">\n                <div class="mb-4">\n                  <label class="block text-gray-700 text-sm font-bold mb-2">Name</label>\n                  <input placeholder="Name" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>\n                </div>\n                <div class="mb-4">\n                  <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>\n                  <input placeholder="Email" type="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>\n                </div>\n\n                <div class="mb-4">\n                  <label class="block font-medium text-sm text-gray-700">Password</label>\n                  <input placeholder="Email" type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>\n                </div>\n\n                <div class="block">\n                    <label for="remember_me" class="flex items-center">\n                        <input type="checkbox"  id="remember_me" name="remember" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">\n                        <span class="ml-2 text-sm text-gray-600">Remember me</span>\n                    </label>\n                </div>\n\n                <div class="flex flex-col items-center justify-center gap-y-2 mt-4">\n                    <button type="submit" class="py-2 w-64 text-md text-white bg-purple-500 rounded-2xl">\n                      Log in\n                    </button>\n                    <a class="underline text-sm text-gray-600 hover:text-gray-900" href="#">\n                      Forgot your password?\n                    </a>\n                </div>\n                <p class="mt-4 text-sm text-center">New User? <span class="underline cursor-pointer"> <a href="#">Create Account</a> </span></p>\n            </form>\n        </div>\n      </div>\n    ')]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CodeAndPreview:n(408).default})}}]);