(window["matrixElement_jsonp"] = window["matrixElement_jsonp"] || []).push([[1],{

/***/ "0459":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("44c4");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("66986e8b", content, shadowRoot)
};

/***/ }),

/***/ "05d4":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vsa-item__heading{width:100%;height:100%}.vsa-item__heading,.vsa-item__trigger{display:flex;justify-content:flex-start;align-items:center}.vsa-item__trigger{margin:0;padding:0;color:inherit;font-family:inherit;font-size:100%;line-height:1.15;border-width:0;background-color:transparent;background-image:none;overflow:visible;text-transform:none;flex:1 1 auto;color:var(--vsa-text-color);transition:all .2s linear;padding:var(--vsa-heading-padding)}.vsa-item__trigger[role=button]{cursor:pointer}.vsa-item__trigger[type=button],.vsa-item__trigger[type=reset],.vsa-item__trigger[type=submit]{-webkit-appearance:button}.vsa-item__trigger:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.vsa-item__trigger::-moz-focus-inner,.vsa-item__trigger[type=button]::-moz-focus-inner,.vsa-item__trigger[type=reset]::-moz-focus-inner,.vsa-item__trigger[type=submit]::-moz-focus-inner{border-style:none;padding:0}.vsa-item__trigger:-moz-focusring,.vsa-item__trigger[type=button]:-moz-focusring,.vsa-item__trigger[type=reset]:-moz-focusring,.vsa-item__trigger[type=submit]:-moz-focusring{outline:1px dotted ButtonText}.vsa-item__trigger:focus,.vsa-item__trigger:hover{outline:none;background-color:var(--vsa-highlight-color);color:var(--vsa-bg-color)}.vsa-item__trigger__icon--is-default{width:40px;height:40px;transform:scale(var(--vsa-default-icon-size))}.vsa-item__trigger__icon--is-default:after,.vsa-item__trigger__icon--is-default:before{background-color:var(--vsa-text-color);content:\"\";height:3px;position:absolute;top:10px;transition:all .13333s ease-in-out;width:30px}.vsa-item__trigger__icon--is-default:before{left:0;transform:rotate(45deg) translate3d(8px,22px,0);transform-origin:100%}.vsa-item__trigger__icon--is-default:after{transform:rotate(-45deg) translate3d(-8px,22px,0);right:0;transform-origin:0}.vsa-item__trigger[aria-expanded=true] .vsa-item__trigger__icon--is-default:before{transform:rotate(45deg) translate3d(14px,14px,0)}.vsa-item__trigger[aria-expanded=true] .vsa-item__trigger__icon--is-default:after{transform:rotate(-45deg) translate3d(-14px,14px,0)}.vsa-item__trigger__icon{display:block;margin-left:auto;position:relative;transition:all .2s ease-in-out}.vsa-item__trigger:focus .vsa-item__trigger__icon--is-default:after,.vsa-item__trigger:focus .vsa-item__trigger__icon--is-default:before,.vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:after,.vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:before{background-color:var(--vsa-bg-color)}.vsa-item__trigger__content{font-weight:700;font-size:1.25rem}.vsa-item__content{margin:0;padding:var(--vsa-content-padding)}.vsa-item--is-active .vsa-item__heading,.vsa-item:not(:last-of-type){border-bottom:var(--vsa-border)}.vsa-collapse-enter-active,.vsa-collapse-leave-active{transition-property:opacity,height,padding-top,padding-bottom;transition-duration:.3s;transition-timing-function:ease-in-out}.vsa-collapse-enter,.vsa-collapse-leave-active{opacity:0;height:0;padding-top:0;padding-bottom:0;overflow:hidden}.vsa-list{--vsa-max-width:720px;--vsa-min-width:300px;--vsa-heading-padding:1rem 1rem;--vsa-text-color:#373737;--vsa-highlight-color:#57a;--vsa-bg-color:#fff;--vsa-border-color:rgba(0,0,0,0.2);--vsa-border-width:1px;--vsa-border-style:solid;--vsa-border:var(--vsa-border-width) var(--vsa-border-style) var(--vsa-border-color);--vsa-content-padding:1rem 1rem;--vsa-default-icon-size:1;display:block;max-width:var(--vsa-max-width);min-width:var(--vsa-min-width);width:100%;padding:0;margin:0;list-style:none;border:var(--vsa-border);color:var(--vsa-text-color);background-color:var(--vsa-bg-color)}.vsa-list [hidden]{display:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "0826":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"da79e258-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chats/assets/typing.vue?vue&type=template&id=a592ea3e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"typingBlock",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"typingBlockWrapper"},[_c('div',[_c('span',[_vm._v(_vm._s(_vm.$t("caption.typing")))])]),_c('div',[_c('PulseLoader',{attrs:{"color":_vm.color,"size":_vm.size,"loading":true}})],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/chats/assets/typing.vue?vue&type=template&id=a592ea3e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"da79e258-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-spinner/src/PulseLoader.vue?vue&type=template&id=7dc0198c&
var PulseLoadervue_type_template_id_7dc0198c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"v-spinner"},[_c('div',{staticClass:"v-pulse v-pulse1",style:([_vm.spinnerStyle,_vm.spinnerDelay1])}),_c('div',{staticClass:"v-pulse v-pulse2",style:([_vm.spinnerStyle,_vm.spinnerDelay2])}),_c('div',{staticClass:"v-pulse v-pulse3",style:([_vm.spinnerStyle,_vm.spinnerDelay3])})])}
var PulseLoadervue_type_template_id_7dc0198c_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-spinner/src/PulseLoader.vue?vue&type=template&id=7dc0198c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-spinner/src/PulseLoader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PulseLoadervue_type_script_lang_js_ = ({
  name: 'PulseLoader',
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#5dc596'
    },
    size: {
      type: String,
      default: '15px'
    },
    margin: {
      type: String,
      default: '2px'
    },
    radius: {
      type: String,
      default: '100%'
    }
  },
  data: function data() {
    return {
      spinnerStyle: {
        backgroundColor: this.color,
        width: this.size,
        height: this.size,
        margin: this.margin,
        borderRadius: this.radius,
        display: 'inline-block',
        animationName: 'v-pulseStretchDelay',
        animationDuration: '0.75s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'cubic-bezier(.2,.68,.18,1.08)',
        animationFillMode: 'both'
      },
      spinnerDelay1: {
        animationDelay: '0.12s'
      },
      spinnerDelay2: {
        animationDelay: '0.24s'
      },
      spinnerDelay3: {
        animationDelay: '0.36s'
      }
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-spinner/src/PulseLoader.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_PulseLoadervue_type_script_lang_js_ = (PulseLoadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/vue-spinner/src/PulseLoader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("671b")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_PulseLoadervue_type_script_lang_js_,
  PulseLoadervue_type_template_id_7dc0198c_render,
  PulseLoadervue_type_template_id_7dc0198c_staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var PulseLoader = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chats/assets/typing.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var typingvue_type_script_lang_js_ = ({
  name: 'typing',
  props: {},
  components: {
    PulseLoader: PulseLoader
  },
  data: function data() {
    return {
      color: '#868686',
      size: '2px',
      loading: true
    };
  },
  methods: {},
  computed: {}
});
// CONCATENATED MODULE: ./src/components/chats/assets/typing.vue?vue&type=script&lang=js&
 /* harmony default export */ var assets_typingvue_type_script_lang_js_ = (typingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/chats/assets/typing.vue



function typing_injectStyles (context) {
  
  var style0 = __webpack_require__("1b86")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var typing_component = Object(componentNormalizer["a" /* default */])(
  assets_typingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  typing_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var typing = __webpack_exports__["a"] = (typing_component.exports);

/***/ }),

/***/ "1173":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".aboutRoomAvatar[data-v-4ac0977b]{padding-top:1em}.bgImage[data-v-4ac0977b]{border-radius:50%}.threeAvatars[data-v-4ac0977b]{position:relative;background:none;width:80px;height:80px;margin:0 auto}.threeAvatars .bgImage[data-v-4ac0977b]{width:40px;height:40px}.threeAvatars .bgImage[data-v-4ac0977b]:first-child{position:absolute;left:50%;top:0;transform:translate(-50%)}.threeAvatars .bgImage[data-v-4ac0977b]:nth-child(2){position:absolute;right:-3px;bottom:0;transform:translate(0)}.threeAvatars .bgImage[data-v-4ac0977b]:nth-child(3){position:absolute;left:-3px;bottom:0}.twoAvatars[data-v-4ac0977b]{background:none;position:relative;margin:0 auto;width:80px;height:80px}.twoAvatars .bgImage[data-v-4ac0977b]{width:40px;height:40px;display:flex}.twoAvatars .bgImage[data-v-4ac0977b]:first-child{position:absolute;top:0;left:0}.twoAvatars .bgImage[data-v-4ac0977b]:last-child{position:absolute;right:0;bottom:0}.fourAvatars[data-v-4ac0977b]{background:none;position:relative;margin:0 auto;width:80px;height:80px}.fourAvatars .bgImage[data-v-4ac0977b]{width:40px;height:40px}.fourAvatars .bgImage[data-v-4ac0977b]:first-child{position:absolute;top:-3px;left:-3px;transform:translate(0)}.fourAvatars .bgImage[data-v-4ac0977b]:nth-child(2){position:absolute;right:-3px;top:-3px;transform:translate(0)}.fourAvatars .bgImage[data-v-4ac0977b]:nth-child(3){position:absolute;left:-3px;bottom:-3px}.fourAvatars .bgImage[data-v-4ac0977b]:nth-child(4){position:absolute;right:-3px;bottom:-3px}.fourMore[data-v-4ac0977b]{background:none;margin:0 auto;width:80px;height:80px}.bgImageMore[data-v-4ac0977b]{width:40px;height:40px}.imageSwiper[data-v-4ac0977b]{width:50px;height:50px;margin:0 auto}.imageSwiper img[data-v-4ac0977b]{display:block;border-radius:50%;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.invited[data-v-4ac0977b]{opacity:.5}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1259":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3459");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("919c9172", content, shadowRoot)
};

/***/ }),

/***/ "12d6":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".encryptedDataIcon[data-v-8acf856c]{position:absolute;color:#fff;opacity:.3;padding:.25em .5em;text-shadow:1px 1px 2px #000;left:0;top:0}.encryptedDataIcon i[data-v-8acf856c]{font-size:.7em}.filePreview[data-v-8acf856c]{position:relative}.filePreview .encryptedDataIcon[data-v-8acf856c]{color:#606369;text-shadow:none;right:0;left:auto}.aboutRoomFileWrapper .aboutRoomFile[data-v-8acf856c]{display:flex;justify-content:flex-start;align-items:flex-start;margin-bottom:.5em;padding:.5em}.aboutRoomFileWrapper .aboutRoomFile .filePreview[data-v-8acf856c]{border:1px solid #dfdfdf;border-radius:10px;position:relative;overflow:hidden}.aboutRoomFileWrapper .aboutRoomFile .fileName[data-v-8acf856c]{font-size:1.2em;margin-top:4px}.aboutRoomFileWrapper .aboutRoomFile .fileSize[data-v-8acf856c]{font-size:.8em;font-weight:700}.aboutRoomFileWrapper .aboutRoomFile a[data-v-8acf856c]{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin:.2em 0}.emptyBlock[data-v-8acf856c]{text-align:center;padding:.5em 0}.emptyBlock span[data-v-8acf856c]{font-size:.9em}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "15cc":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:swiper-icons;src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-container-pointer-events{touch-action:pan-y}.swiper-container-pointer-events.swiper-container-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/44*27);height:var(--swiper-navigation-size);margin-top:calc(0px - var(--swiper-navigation-size)/2);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-variant:normal;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:\"prev\"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:\"next\"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:opacity .3s;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:50%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s linear infinite;animation:swiper-preloader-spin 1s linear infinite;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;opacity:.6;z-index:0}.swiper-container-cube .swiper-cube-shadow:before{content:\"\";background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "15cd":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("cbaa");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("e523fee8", content, shadowRoot)
};

/***/ }),

/***/ "1b86":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typing_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5f7e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typing_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typing_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typing_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typing_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "266d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"da79e258-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/chatinfo.vue?vue&type=template&id=553f6714&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page chatInfo"},[_c('topheader',{staticClass:"topheader"}),_c('maincontent',{scopedSlots:_vm._u([{key:"content",fn:function(){return [(_vm.chat)?_c('chatInfo',{attrs:{"chat":_vm.chat}}):_vm._e()]},proxy:true}])})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/chatinfo.vue?vue&type=template&id=553f6714&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"da79e258-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chatInfo/topheader/index.vue?vue&type=template&id=6252f2b9&scoped=true&
var topheadervue_type_template_id_6252f2b9_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"chatTopheader"}},[_c('topheader',{scopedSlots:_vm._u([{key:"left",fn:function(){return [_c('backButton',{attrs:{"action":"back"}})]},proxy:true},{key:"info",fn:function(){return [_c('span',[_vm._v(_vm._s(_vm.$t("caption.Info")))])]},proxy:true},{key:"right",fn:function(){return undefined},proxy:true}])})],1)}
var topheadervue_type_template_id_6252f2b9_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/chatInfo/topheader/index.vue?vue&type=template&id=6252f2b9&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chatInfo/topheader/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var topheadervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./src/components/chatInfo/topheader/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var chatInfo_topheadervue_type_script_lang_js_ = (topheadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/chatInfo/topheader/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  chatInfo_topheadervue_type_script_lang_js_,
  topheadervue_type_template_id_6252f2b9_scoped_true_render,
  topheadervue_type_template_id_6252f2b9_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "6252f2b9",
  null
  ,true
)

/* harmony default export */ var topheader = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"da79e258-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chatInfo/index.vue?vue&type=template&id=7d9df4a3&scoped=true&
var chatInfovue_type_template_id_7d9df4a3_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{minimized: _vm.minimized},attrs:{"id":"chatInfo"}},[_c('info',{attrs:{"chat":_vm.chat,"events":_vm.events}})],1)}
var chatInfovue_type_template_id_7d9df4a3_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/chatInfo/index.vue?vue&type=template&id=7d9df4a3&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"da79e258-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chatInfo/info/index.vue?vue&type=template&id=71fb918e&scoped=true&
var infovue_type_template_id_71fb918e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"aboutRoom"},[_c('div',{staticClass:"roomInfoWrapper"},[_c('div',{class:{'chatIconWrapper':'chatIconWrapper', 'noSwipe' : true }},[_c('chatIcon',{attrs:{"slidesPerView":4,"chat":_vm.chat,"m_chat":_vm.m_chat,"hideunseen":true}})],1),(!_vm.canchangeChatName)?_c('chatName',{staticClass:"roomNameLine",attrs:{"preview":true,"chat":_vm.chat,"m_chat":_vm.m_chat}}):_vm._e(),_c('div',{staticClass:"roomInfo"},[(_vm.canchangeChatName)?_c('div',{staticClass:"name"},[(!_vm.nameEdit)?_c('div',{staticClass:"namewrapper"},[_c('chatName',{staticClass:"roomNameLine",attrs:{"preview":true,"chat":_vm.chat,"m_chat":_vm.m_chat}}),_c('div',{staticClass:"iconwrapper"},[_c('i',{staticClass:"fas fa-pencil-alt",on:{"click":_vm.showEditRoomName}})])],1):_c('div',{staticClass:"namewrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.roomName),expression:"roomName"}],class:{active: _vm.inputActive},attrs:{"type":"text"},domProps:{"value":(_vm.roomName)},on:{"focus":function($event){return $event.target.select()},"input":function($event){if($event.target.composing){ return; }_vm.roomName=$event.target.value}}}),_c('div',{staticClass:"iconwrapper"},[_c('i',{staticClass:"fas fa-check",on:{"click":_vm.saveRoomName}})])])]):_vm._e()])],1),_c('div',{staticClass:"roomActionsList"},[(_vm.canInvite)?_c('button',{staticClass:"button small rounded",on:{"click":_vm.modalInviteUser}},[_vm._v(" "+_vm._s(_vm.$t("caption.add"))+" "),_c('i',{staticClass:"fas fa-user-plus"})]):_vm._e(),_c('button',{staticClass:"button small black rounded",on:{"click":_vm.muteRoom}},[(!_vm.roomMuted)?_c('span',[_vm._v(" "+_vm._s(_vm.$t("caption.mute"))+" "),_c('i',{staticClass:"fas fa-bell-slash"})]):_vm._e(),(_vm.roomMuted)?_c('span',[_vm._v(" "+_vm._s(_vm.$t("caption.unmute"))+" "),_c('i',{staticClass:"fas fa-bell"})]):_vm._e()]),(!_vm.tetatet)?_c('button',{staticClass:"button small black rounded",on:{"click":function($event){return _vm.forgetRoom()}}},[_vm._v(" "+_vm._s(_vm.$t("caption.leave"))+" "),_c('i',{staticClass:"fas fa-sign-out-alt"})]):_vm._e(),(_vm.tetatet && !_vm.blockedCheck)?_c('button',{staticClass:"button small black rounded",on:{"click":function($event){return _vm.blockUser()}}},[_vm._v(" "+_vm._s(_vm.$t("button.block"))+" "),_c('i',{staticClass:"fas fa-sign-out-alt"})]):_vm._e(),(_vm.tetatet && _vm.blockedCheck)?_c('button',{staticClass:"button small black rounded",on:{"click":function($event){return _vm.unblock()}}},[_vm._v(" "+_vm._s(_vm.$t("button.unblock"))+" "),_c('i',{staticClass:"fas fa-sign-out-alt"})]):_vm._e()]),_c('div',{staticClass:"roomAccordionsList"},_vm._l((_vm.accordionList),function(item,index){return _c('div',{staticClass:"accordion",class:{active: _vm.isActive === index}},[_c('div',{staticClass:"aHeader",on:{"click":function($event){return _vm.toggleItem(index)}}},[_c('div',{staticClass:"head"},[_c('div',{staticClass:"leftBlock"},[(item.id === 'members')?_c('i',{staticClass:"fas fa-users"}):_vm._e(),(item.id === 'media')?_c('i',{staticClass:"far fa-image"}):_vm._e(),(item.id === 'files')?_c('i',{staticClass:"fas fa-folder"}):_vm._e(),_vm._v(" "+_vm._s(item.title)+" ")]),(item.id === 'members')?_c('div',{staticClass:"rightBlock"},[(_vm.membersList)?_c('div',{staticClass:"membersCount"},[_c('span',[_vm._v(_vm._s(_vm.membersList.length))])]):_vm._e()]):_vm._e()])]),_c('div',{staticClass:"body"},[(_vm.isActive === index && item.id === 'members')?_c('members',{attrs:{"membersList":_vm.membersList},on:{"admin":_vm.makeAdmin,"kick":_vm.kickUser}}):_vm._e(),(_vm.isActive === index && item.id === 'media')?_c('images',{attrs:{"chat":_vm.m_chat,"imageEvents":_vm.imageEvents}}):_vm._e(),(_vm.isActive === index && item.id === 'files')?_c('files',{attrs:{"chat":_vm.m_chat,"fileEvents":_vm.fileEvents}}):_vm._e()],1)])}),0),(_vm.inviteUserOpened)?_c('modal',{on:{"close":_vm.closeModal},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('span',[_vm._v(_vm._s(_vm.$t("caption.inviteUser")))])]},proxy:true},{key:"body",fn:function(){return [_c('contacts',{attrs:{"mode":"inviteUsers","chatRoomId":_vm.chat.roomId},on:{"closeModal":_vm.closeContactModal}})]},proxy:true},{key:"footer",fn:function(){return undefined},proxy:true}],null,false,1321158477)}):_vm._e()],1)}
var infovue_type_template_id_71fb918e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/chatInfo/info/index.vue?vue&type=template&id=71fb918e&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("a34a");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./src/components/chats/assets/name.vue + 4 modules
var assets_name = __webpack_require__("aa20");

// EXTERNAL MODULE: ./src/components/chats/assets/icon.vue + 4 modules
var icon = __webpack_require__("3094");

// EXTERNAL MODULE: ./src/components/chats/assets/typing.vue + 9 modules
var typing = __webpack_require__("0826");

// EXTERNAL MODULE: ./src/components/contacts/index.vue + 4 modules
var contacts = __webpack_require__("71da");

// EXTERNAL MODULE: ./src/application/functions.js
var functions = __webpack_require__("3139");

// CONCATENATED MODULE: ./src/components/chat/topheader/index.js















/* harmony default export */ var chat_topheader = ({
  name: 'chatTopheader',
  props: {
    chat: Object,
    u: String,
    roomInfo: false,
    aboutUser: false
  },
  components: {
    chatName: assets_name["a" /* default */],
    chatIcon: icon["a" /* default */],
    chatTyping: typing["a" /* default */],
    contacts: contacts["a" /* default */]
  },
  data: function data() {
    return {
      menuItems: [{
        click: "callupVideoHandler",
        title: this.$i18n.t("caption.videocall"),
        icon: "fas fa-camera"
      }, {
        click: "callupHandler",
        title: this.$i18n.t("caption.call"),
        icon: "fas fa-phone"
      }],
      menuItemsRoom: [{
        click: "AddMember",
        title: this.$i18n.t("caption.add"),
        icon: "fas fa-user-plus"
      }, {
        click: "MuteRoom",
        title: this.$i18n.t("caption.mute"),
        icon: "fas fa-bell-slash"
      }, {
        click: "LeaveFromRoom",
        title: this.$i18n.t("caption.leaveAndDelete"),
        icon: "fas fa-sign-out-alt"
      }],
      menuItemsRoomMuted: [{
        click: "AddMember",
        title: this.$i18n.t("caption.add"),
        icon: "fas fa-user-plus"
      }, {
        click: "MuteRoom",
        title: this.$i18n.t("caption.unmute"),
        icon: "fas fa-bell"
      }, {
        click: "LeaveFromRoom",
        title: this.$i18n.t("caption.leaveAndDelete"),
        icon: "fas fa-sign-out-alt"
      }],
      oneToOne: [{
        click: "MuteRoom",
        title: this.$i18n.t("caption.mute"),
        icon: "fas fa-bell-slash"
      },
      /*{
        click: "LeaveFromRoom",
        title: "Leave and Delete",
        icon: "fas fa-sign-out-alt"
      },*/
      {
        click: "Donate",
        title: this.$i18n.t("caption.donate"),
        icon: "fas fa-money-bill-wave"
      }],
      oneToOneMuted: [{
        click: "MuteRoom",
        title: this.$i18n.t("caption.unmute"),
        icon: "fas fa-bell"
      }, {
        click: "LeaveFromRoom",
        title: this.$i18n.t("caption.leaveAndDelete"),
        icon: "fas fa-sign-out-alt"
      }, {
        click: "Donate",
        title: this.$i18n.t("caption.donate"),
        icon: "fas fa-money-bill-wave"
      }],
      donateMenu: [{
        click: "Donate",
        title: this.$i18n.t("caption.donate"),
        icon: "fas fa-money-bill-wave"
      }],
      loading: false,
      typing: false,
      userinfo: null,
      aboutUserShow: false,
      roomBanned: false,
      roomMuted: false,
      // --- Variables for the donation part ---
      // Boolean when the donation modal is open
      donateUserOpened: false,
      // Object containing the receiver informations
      receiver: null,
      // How much PKOIN we want to donate
      donationAmount: 0,
      // Optional message for the transaction
      donationMessage: '',
      // Calculated fees needed for the transaction
      calculatedFees: null,
      // Booleans to show errors
      showFeesError: '',
      showTransactionError: '',
      // Booleans to show spinners
      calculatingFees: false,
      sending: false,
      // To choose by who the fee should be payed by
      feesDirection: 'include',
      feesDirectionPossibleValues: [{
        value: 'include',
        label: this.$i18n.t("caption.toBePaidByReceiver")
      }, {
        value: 'exclude',
        label: this.$i18n.t("caption.toBePaidBySender")
      }]
    };
  },
  watch: {//$route: 'getdata'
  },
  mounted: function mounted() {
    this.getuserinfo();
  },
  computed: Object(vuex_esm["c" /* mapState */])({
    auth: function auth(state) {
      return state.auth;
    },
    m_chat: function m_chat() {
      if (this.chat && this.chat.roomId) {
        var pushRules = this.core.mtrx.client._pushProcessor.getPushRuleById(this.chat.roomId);

        if (pushRules !== null) {
          this.roomMuted = true;
        }

        var m_chat = this.core.mtrx.client.getRoom(this.chat.roomId);
        return m_chat || {};
      }
    },
    m_chat_typing: function m_chat_typing() {
      var _this = this;

      if (!this.chat) return false;
      var chat = this.chat.roomId;
      var typing = this.$store.state.typing[chat] || {};

      var userTyping = _.find(typing, function (t, i) {
        if (t) {
          var _this$core$user$useri;

          if (i == ((_this$core$user$useri = _this.core.user.userinfo) === null || _this$core$user$useri === void 0 ? void 0 : _this$core$user$useri.id)) return false;
          return true;
        }
      });

      return userTyping || false;
    },
    totalDonationAmount: function totalDonationAmount() {
      return this.feesDirection == 'include' ? this.donationAmount : this.donationAmount + this.calculatedFees;
    }
  }),
  methods: {
    navigateToProfile: function navigateToProfile(id) {
      this.$router.push({
        path: "/contact?id=".concat(functions["a" /* default */].getmatrixid(id))
      });
    },
    getuserinfo: function getuserinfo() {
      var _this2 = this;

      if (this.u) {
        this.core.user.usersInfo(this.u).then(function (info) {
          _this2.userinfo = info[0];
        });
      }
    },
    // Return the another member in the chat
    // (it returns the last one, so make sense only for the one to one chat)
    // If no user found, return undefined
    findOtherUser: function findOtherUser() {
      var my = this.m_chat.myUserId;
      var receiver;
      var members = this.m_chat.currentState.getMembers();
      members.forEach(function (member) {
        if (member && member.userId !== my) receiver = member;
      });
      return receiver;
    },
    addMember: function addMember() {
      this.modalInviteUser();
    },
    menuItemClickHandler: function menuItemClickHandler(item, rowObject) {
      var _this3 = this;

      if (item.click === 'AddMember') {
        this.$emit('addMember', true);
        this.$refs.dropdownMenu.hidePopup();
      }

      if (item.click === 'MuteRoom') {
        var roomId = this.chat.roomId;
        var deviceID = this.core.mtrx.client.deviceId;
        var self = this;

        var pushRules = this.core.mtrx.client._pushProcessor.getPushRuleById(this.chat.roomId);

        if (pushRules !== null) {
          self.core.mtrx.client.deletePushRule('global', 'room', roomId);
          this.roomMuted = false;
        } else {
          self.core.mtrx.client.setRoomMutePushRule('global', roomId, 'true');
          this.roomMuted = true;
        }

        this.$refs.dropdownMenu.hidePopup();
      }

      if (item.click === 'LeaveFromRoom') {
        var _self = this;

        this.core.mtrx.client.leave(this.chat.roomId).then(function (r) {
          _this3.core.mtrx.client.forget(_this3.chat.roomId, true).then(function (r) {
            _this3.$store.commit('DELETE_ROOM', _this3.chat.roomId);
          }).then(function (r) {
            _this3.$router.push({
              path: '/chats'
            });
          });
        });
        this.$refs.dropdownMenu.hidePopup();
      }

      if (item.click === 'BanRoom') {
        var banUserId = '';
        var banUser = this.findOtherUser();
        if (banUser && banUser.userId) banUserId = banUser.userId;
        var roomID = this.chat.roomId;
        this.core.mtrx.client.ban(roomID, banUserId, 'ban').then(function (r) {});
        this.roomBanned = true;
        this.$refs.dropdownMenu.hidePopup();
      }

      if (item.click === 'Unban') {
        var _banUserId = '';

        var _banUser = this.findOtherUser();

        if (_banUser && _banUser.userId) _banUserId = _banUser.userId;
        this.core.mtrx.client.unban(this.chat.roomId, _banUserId).then(function (r) {
          _this3.core.mtrx.client.invite(_this3.chat.roomId, _banUserId);
        });
        this.roomBanned = false;
        this.$refs.dropdownMenu.hidePopup();
      }

      if (item.click === "Donate") {
        // Open modal
        this.donateUserOpened = true; // Close dropdown menu

        this.$refs.dropdownMenu.hidePopup(); // Find the user we are about to donate to

        var receiverObj = this.findOtherUser();
        this.receiver = receiverObj ? this.$f.deep(this, '$store.state.users.' + this.$f.getmatrixid(receiverObj.name)) : null;
      }
    },
    closeDonateModal: function closeDonateModal() {
      this.donateUserOpened = false;
    },
    onCalculateFeesClick: function onCalculateFeesClick() {
      var _this4 = this;

      this.calculatingFees = true;
      this.calculateFees().finally(function () {
        return _this4.calculatingFees = false;
      });
    },
    calculateFees: function calculateFees() {
      var _this5 = this;

      var self = this;
      this.showFeesError = '';
      return new Promise(function (resolve, reject) {
        // Check parameters
        if (_this5.donationAmount <= 0 || !_this5.receiver || !_this5.receiver.source || !_this5.receiver.source.address) {
          _this5.showFeesError = 'invalid';
          return reject('Missing amount or receiver');
        } // Try calculating fees


        try {
          var sdk = window.POCKETNETINSTANCE.platform.sdk;
          sdk.node.fee.estimate(function (fees) {
            var outputs = [{
              address: self.receiver.source.address,
              amount: self.donationAmount
            }];
            sdk.wallet.txbase([sdk.address.pnet().address], outputs, 0, self.feesDirection, function (err, inputs, _outputs) {
              if (err) {
                console.error(err);
                self.showFeesError = err;
                return reject(err);
              }

              var tx = sdk.node.transactions.create.wallet(inputs, _outputs);
              var totalFees = Math.min(tx.virtualSize() * fees.feerate, 0.0999); // Got the fees

              self.calculatedFees = totalFees;
              return resolve();
            });
          });
        } catch (err) {
          console.error(err);
          self.showFeesError = err;
          return reject(err);
        }
      });
    },
    sendDonation: function sendDonation() {
      var _this6 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var self, sdk;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = _this6;
                _this6.sending = true;
                _this6.showTransactionError = ''; // Recalculate the fees just before sending

                _context.prev = 3;
                _context.next = 6;
                return _this6.calculateFees();

              case 6:
                _context.next = 13;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](3);
                _this6.showTransactionError = 'error';
                _this6.sending = false;
                return _context.abrupt("return");

              case 13:
                // Check if current balance is enough
                sdk = window.POCKETNETINSTANCE.platform.sdk;
                sdk.node.transactions.get.canSpend(sdk.address.pnet().address, function (currentBalance) {
                  // If balance is too low
                  if (!currentBalance || isNaN(currentBalance) || currentBalance < self.totalDonationAmount) {
                    self.showTransactionError = 'balance too low';
                    self.sending = false;
                    return;
                  } // Start the send transaction process


                  try {
                    var outputs = [{
                      address: self.receiver.source.address,
                      amount: self.donationAmount
                    }];
                    sdk.wallet.embed(outputs, self.donationMessage); // Create a transaction

                    sdk.wallet.txbase([sdk.address.pnet().address], outputs, self.calculatedFees, self.feesDirection, function (err, inputs, _outputs) {
                      if (err) {
                        console.error(err);
                        self.showTransactionError = 'error';
                        self.sending = false;
                        return reject(err);
                      }

                      var tx = sdk.node.transactions.create.wallet(inputs, _outputs);
                      inputs.forEach(function (t) {
                        t.cantspend = true;
                      }); // Try sending the transaction

                      sdk.node.transactions.send(tx, function (d, err) {
                        if (err) {
                          sdk.node.transactions.releaseCS(inputs);
                          self.showTransactionError = 'error';
                          self.sending = false;
                          return;
                        } // Transaction has been sent


                        var ids = inputs.map(function (i) {
                          return i.txid;
                        });
                        sdk.node.transactions.clearUnspents(ids);
                        sdk.wallet.saveTempInfoWallet(d, inputs, _outputs); // Send an event to the chat

                        self.core.mtrx.client.sendEvent(self.chat.roomId, "m.room.message", {
                          from: self.$f.getmatrixid(self.m_chat.myUserId),
                          to: self.receiver.id,
                          amount: self.donationAmount,
                          txId: d,
                          msgtype: "m.notice"
                        }, ""); // Close the donation modal

                        self.closeDonateModal();
                      });
                    });
                  } catch (err) {
                    console.error(err);
                    self.showTransactionError = 'error';
                    self.sending = false;
                  }
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 8]]);
      }))();
    },
    resetDonation: function resetDonation() {
      this.calculatedFees = null;
      this.showFeesError = '';
      this.showTransactionError = '';
    }
  }
});
// EXTERNAL MODULE: ./node_modules/underscore/modules/index-all.js + 159 modules
var index_all = __webpack_require__("c46f");

// EXTERNAL MODULE: ./src/components/assets/userspic/many.vue + 4 modules
var many = __webpack_require__("ecec");

// CONCATENATED MODULE: ./src/components/assets/userspic/index.js


/* harmony default export */ var userspic = ({
  name: 'userspic',
  props: {
    users: Array,
    unseen: Number,
    slidesPerView: Number,
    status: {
      type: Object,
      default: {}
    }
  },
  data: function data() {
    return {};
  },
  components: {
    many: many["a" /* default */]
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"da79e258-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chatInfo/info/members/index.vue?vue&type=template&id=91225d6c&scoped=true&
var membersvue_type_template_id_91225d6c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.membersList)?_c('div',{staticClass:"membersList"},_vm._l((_vm.membersList),function(user,index){return _c('div',{key:user.userId,staticClass:"roomMember",class:user.membership,on:{"click":function($event){return _vm.navigateToProfile(user.userId)}}},[_c('div',{staticClass:"leftWrapper"},[_c('div',{staticClass:"avatarNameWrapper"},[_c('userpic',{attrs:{"userinfo":_vm.userinfo(user)}})],1),_c('div',{staticClass:"nameRole"},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(_vm.userinfo(user).name || ''))]),(user.powerLevel)?_c('span',{staticClass:"memberRole"},[_vm._v(_vm._s(_vm.$t('caption.' + _vm.role(user))))]):_vm._e(),(user.userId == _vm.meid)?_c('span',{staticClass:"memberRole"},[_vm._v("You")]):_vm._e()])]),(_vm.menu(user).length)?_c('div',[_c('div',{staticClass:"rightWrapper"},[_c('dropdownMenu',{ref:"dropdownMenu",refInFor:true,attrs:{"menuItems":_vm.menu(user),"rowObject":{user: user, index: index},"icon":"fas fa-ellipsis-h"},on:{"itemClicked":_vm.menuItemClickHandler}})],1)]):_vm._e()])}),0):_c('div',{staticClass:"empty"},[_c('span',[_vm._v("List Empty")])])}
var membersvue_type_template_id_91225d6c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/chatInfo/info/members/index.vue?vue&type=template&id=91225d6c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./src/components/chatInfo/info/members?vue&type=script&lang=js&





/* harmony default export */ var members_vue_type_script_lang_js_ = ({
  components: {
    chatIcon: icon["a" /* default */]
  },
  data: function data() {
    return {
      moderItems: [{
        click: "adminBan",
        title: this.$i18n.t("caption.ban"),
        icon: "fas fa-ban",
        upload: {
          multiple: true
        }
      }, {
        click: "adminKick",
        title: this.$i18n.t("caption.kick"),
        icon: "fas fa-user-times"
      }],
      menuItems: [{
        click: "adminMakeModer",
        title: this.$i18n.t("caption.makeModerator"),
        icon: "fas fa-user-shield"
      }, {
        click: "adminBan",
        title: this.$i18n.t("caption.ban"),
        icon: "fas fa-ban",
        upload: {
          multiple: true
        }
      }, {
        click: "adminKick",
        title: this.$i18n.t("caption.kick"),
        icon: "fas fa-user-times"
      }]
    };
  },
  props: {
    membersList: Array
  },
  computed: {
    meid: function meid() {
      return this.core.user.userinfo.id;
    },
    me: function me() {
      var _this = this;

      return _.find(this.membersList, function (m) {
        return m.userId == _this.core.user.userinfo.id;
      }) || {};
    }
  },
  methods: {
    userinfo: function userinfo(user) {
      return functions["a" /* default */].deep(this, 'core.store.state.users.' + user.userId) || {};
    },
    role: function role(user) {
      var r = 'member';
      if (user.powerLevel >= 50) r = 'moderator';
      if (user.powerLevel >= 100) r = 'admin';
      return r;
    },
    menu: function menu(user) {
      var items = {
        setAdmin: {
          click: "setAdmin",
          title: this.$i18n.t("caption.makeModerator"),
          icon: "fas fa-user-shield"
        },
        kick: {
          click: "kick",
          title: this.$i18n.t("caption.kick"),
          icon: "fas fa-user-times"
        },
        ban: {
          click: "ban",
          title: this.$i18n.t("caption.ban"),
          icon: "fas fa-user-times"
        }
      };
      var menu = [];
      if (user.powerLevel < this.me.powerLevel && this.me.powerLevel >= 50 && this.core.user.userinfo.id !== user.id) menu = [items.setAdmin, items.kick, items.ban];
      if (user.powerLevel < this.me.powerLevel && this.me.powerLevel == 100 && this.core.user.userinfo.id !== user.id) menu = [items.kick, items.ban];
      return menu;
    },
    navigateToProfile: function navigateToProfile(id) {
      this.$router.push({
        path: "/contact?id=".concat(functions["a" /* default */].getmatrixid(id))
      });
    },
    menuItemClickHandler: function menuItemClickHandler(item, rowObject) {
      if (!this[item.click]) return Promise.resolve();
      return this[item.click](rowObject.user);
    },
    setAdmin: function setAdmin(user) {
      this.$emit('setAdmin', user.id);
      return Promise.resolve();
    },
    ban: function ban(user) {
      this.$emit('adminKick', user.id);
      return Promise.resolve();
    },
    kick: function kick(user) {
      this.$emit('adminKick', user.id);
      return Promise.resolve();
    }
  }
});
// CONCATENATED MODULE: ./src/components/chatInfo/info/members?vue&type=script&lang=js&
 /* harmony default export */ var info_members_vue_type_script_lang_js_ = (members_vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/chatInfo/info/members/index.vue



function members_injectStyles (context) {
  
  var style0 = __webpack_require__("6c00")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var members_component = Object(componentNormalizer["a" /* default */])(
  info_members_vue_type_script_lang_js_,
  membersvue_type_template_id_91225d6c_scoped_true_render,
  membersvue_type_template_id_91225d6c_scoped_true_staticRenderFns,
  false,
  members_injectStyles,
  "91225d6c",
  null
  ,true
)

/* harmony default export */ var members = (members_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"da79e258-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chatInfo/info/images/index.vue?vue&type=template&id=c92b1d4e&scoped=true&
var imagesvue_type_template_id_c92b1d4e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chatInfoMedia"},[(_vm.imageEvents.length !== 0)?_c('div',{staticClass:"roomAboutWrapper"},_vm._l((_vm.imageEvents),function(item,index){return (!_vm.encrypted(item) || item.event.decryptedImage)?_c('div',{key:item.index,staticClass:"roomAboutImage"},[_c('img',{attrs:{"src":item.event.decryptedImage || item.event.content.url || item.getClearContent().url,"alt":"img"},on:{"click":function($event){return _vm.showPhotoSwipe(item)}}}),(_vm.encrypted(item))?_c('div',{staticClass:"encryptedDataIcon"},[_c('i',{staticClass:"fas fa-lock"})]):_vm._e()]):_vm._e()}),0):_c('div',{staticClass:"emptyBlock"},[_c('span',[_vm._v(_vm._s(_vm.$t("caption.noImages")))])])])}
var imagesvue_type_template_id_c92b1d4e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/chatInfo/info/images/index.vue?vue&type=template&id=c92b1d4e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./src/components/chatInfo/info/images?vue&type=script&lang=js&


/* harmony default export */ var images_vue_type_script_lang_js_ = ({
  data: function data() {
    return {};
  },
  props: {
    imageEvents: Array,
    chat: Object
  },
  computed: {
    /*galleryImages: function () {
      let imgArr = []
        this.imageEvents.forEach(function (event) {
        console.log(event, "event gallery")
        if (event.event.content.msgtype === 'm.image') {
            imgArr.push({
            src: event.event.content.url,
            w: event.event.content.info.w,
            h: event.event.content.info.h
          })
          }
          if (event.event.type === 'm.room.encrypted' && event.getClearContent().msgtype === 'm.image') {
            imgArr.push({
            src: event._clearEvent.content.url,
            w: event._clearEvent.content.info.w,
            h: event._clearEvent.content.info.h,
            eventId: event.event.event_id
          })
          }
      })
        return imgArr
    },*/
  },
  mounted: function mounted() {
    var _this = this;

    this.core.pcrypto.addroom(this.chat).then(function (r) {
      index_all["default"].each(_this.imageEvents, function (e) {
        if (_this.encrypted(e)) {
          _this.core.mtrx.getImage(_this.chat, e).catch(function (e) {
            console.error(e);
          });
        } //setTimeout(() => {
        //}, f.rand(0, 5000))

      });
    });
  },
  methods: {
    showPhotoSwipe: function showPhotoSwipe(event) {
      this.core.store.dispatch('SHOW_GALLERY_FROMEVENTS', {
        events: this.imageEvents,
        event: event
      });
      /*this.core.store.dispatch('SHOW_GALLERY', {
        images : this.galleryImages, 
        index
      })*/
    },
    encrypted: function encrypted(event) {
      return functions["a" /* default */].deep(event, 'event.content.info.secrets') ? true : false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/chatInfo/info/images?vue&type=script&lang=js&
 /* harmony default export */ var info_images_vue_type_script_lang_js_ = (images_vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/chatInfo/info/images/index.vue



function images_injectStyles (context) {
  
  var style0 = __webpack_require__("72c5")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var images_component = Object(componentNormalizer["a" /* default */])(
  info_images_vue_type_script_lang_js_,
  imagesvue_type_template_id_c92b1d4e_scoped_true_render,
  imagesvue_type_template_id_c92b1d4e_scoped_true_staticRenderFns,
  false,
  images_injectStyles,
  "c92b1d4e",
  null
  ,true
)

/* harmony default export */ var info_images = (images_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"da79e258-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chatInfo/info/files/index.vue?vue&type=template&id=8acf856c&scoped=true&
var filesvue_type_template_id_8acf856c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.fileEvents.length !== 0)?_c('div',{staticClass:"aboutRoomFileWrapper"},_vm._l((_vm.fileEvents),function(item){return _c('div',{key:item.event_id,staticClass:"aboutRoomFile"},[_c('div',{staticClass:"filePreview"},[_c('fileMessage',{attrs:{"encryptedData":_vm.encryptedData(item),"file":_vm.file(item)},on:{"download":function (e) { return _vm.download(item); }}}),(_vm.encryptedData)?_c('div',{staticClass:"encryptedDataIcon"},[_c('i',{staticClass:"fas fa-lock"})]):_vm._e()],1)])}),0):_c('div',{staticClass:"emptyBlock"},[_c('span',[_vm._v(_vm._s(_vm.$t("caption.noImages")))])])])}
var filesvue_type_template_id_8acf856c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/chatInfo/info/files/index.vue?vue&type=template&id=8acf856c&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./src/components/events/event/fileMessage/index.vue + 4 modules
var fileMessage = __webpack_require__("696c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chatInfo/info/files/index.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var filesvue_type_script_lang_js_ = ({
  props: {
    fileEvents: Array,
    chat: Object
  },
  components: {
    fileMessage: fileMessage["a" /* default */]
  },
  computed: {},
  methods: {
    encryptedData: function encryptedData(event) {
      return functions["a" /* default */].deep(event, 'event.content.info.secrets') || functions["a" /* default */].deep(event, 'event.content.pbody.secrets') ? true : false;
    },
    jsonConvertor: function jsonConvertor(data) {
      return JSON.parse(data);
    },
    humanReadableSize: function humanReadableSize(data) {
      return functions["a" /* default */].formatBytes(data);
    },
    content: function content(e) {
      return e.event.content;
    },
    file: function file(e) {
      if (this.content(e).msgtype === 'm.file') {
        return this.body(e);
      }
    },
    body: function body(e) {
      var bc = e.event.content;

      if (e.event.content.msgtype == 'm.encrypted') {
        bc = this.decryptEvent;
      }

      return bc.pbody || bc.body || '';
    },
    download: function download(event) {
      var _this = this;

      this.downloading = true;
      this.core.mtrx.downloadFile(this.chat, event).catch(function (e) {
        _this.error = e.toString();
        return Promise.resolve(e);
      }).then(function (r) {
        _this.downloading = false;
      }).catch(function (e) {
        console.error(e);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/chatInfo/info/files/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var info_filesvue_type_script_lang_js_ = (filesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/chatInfo/info/files/index.vue



function files_injectStyles (context) {
  
  var style0 = __webpack_require__("e46b")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var files_component = Object(componentNormalizer["a" /* default */])(
  info_filesvue_type_script_lang_js_,
  filesvue_type_template_id_8acf856c_scoped_true_render,
  filesvue_type_template_id_8acf856c_scoped_true_staticRenderFns,
  false,
  files_injectStyles,
  "8acf856c",
  null
  ,true
)

/* harmony default export */ var files = (files_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"da79e258-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chatInfo/assets/avatarsList/index.vue?vue&type=template&id=4ac0977b&scoped=true&
var avatarsListvue_type_template_id_4ac0977b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.membersList.length > 1)?_c('div',{staticClass:"aboutRoomAvatar"},[(_vm.membersList.length === 2)?_c('div',{staticClass:"userspicwrapper twoAvatars"},[_vm._l((_vm.membersList),function(user){return (user.roomStatus === 'invite')?_c('bgimage',{key:user.id,staticClass:"bgImage invited",attrs:{"src":user.image}}):_vm._e()}),_vm._l((_vm.membersList),function(user){return (user.roomStatus === 'join')?_c('bgimage',{key:user.id,staticClass:"bgImage",attrs:{"src":user.image}}):_vm._e()})],2):_vm._e(),(_vm.membersList.length === 3)?_c('div',{staticClass:"userspicwrapper threeAvatars"},[_vm._l((_vm.membersList),function(user){return (user.roomStatus === 'invite')?_c('bgimage',{key:user.id,staticClass:"bgImage invited",attrs:{"src":user.image}}):_vm._e()}),_vm._l((_vm.membersList),function(user){return (user.roomStatus === 'join')?_c('bgimage',{key:user.id,staticClass:"bgImage",attrs:{"src":user.image}}):_vm._e()})],2):_vm._e(),(_vm.membersList.length === 4)?_c('div',{staticClass:"userspicwrapper fourAvatars"},[_vm._l((_vm.membersList),function(user){return (user.roomStatus === 'invite')?_c('bgimage',{key:user.id,staticClass:"bgImage invited",attrs:{"src":user.image}}):_vm._e()}),_vm._l((_vm.membersList),function(user){return (user.roomStatus === 'join')?_c('bgimage',{key:user.id,staticClass:"bgImage",attrs:{"src":user.image}}):_vm._e()})],2):_vm._e(),(_vm.membersList.length > 4)?_c('swiper',{staticClass:"swiper",attrs:{"options":_vm.swiperOption}},[_vm._l((_vm.membersList),function(user){return _c('swiper-slide',{key:user.id},[(user.roomStatus === 'join')?_c('div',{staticClass:"imageSwiper"},[_c('img',{attrs:{"src":user.image,"alt":""}})]):_vm._e(),(user.roomStatus === 'invite')?_c('div',{staticClass:"imageSwiper invited"},[_c('img',{attrs:{"src":user.image,"alt":""}})]):_vm._e()])}),_c('div',{staticClass:"swiper-pagination",attrs:{"slot":"pagination"},slot:"pagination"})],2):_vm._e()],1):_vm._e()}
var avatarsListvue_type_template_id_4ac0977b_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/chatInfo/assets/avatarsList/index.vue?vue&type=template&id=4ac0977b&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js
var vue_awesome_swiper = __webpack_require__("7212");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chatInfo/assets/avatarsList/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var avatarsListvue_type_script_lang_js_ = ({
  props: {
    membersList: Array
  },
  data: function data() {
    return {
      swiperOption: {
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slidesPerView: 5,
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    };
  },
  components: {
    Swiper: vue_awesome_swiper["Swiper"],
    SwiperSlide: vue_awesome_swiper["SwiperSlide"]
  }
});
// CONCATENATED MODULE: ./src/components/chatInfo/assets/avatarsList/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var assets_avatarsListvue_type_script_lang_js_ = (avatarsListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/chatInfo/assets/avatarsList/index.vue



function avatarsList_injectStyles (context) {
  
  var style0 = __webpack_require__("6c71")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var avatarsList_component = Object(componentNormalizer["a" /* default */])(
  assets_avatarsListvue_type_script_lang_js_,
  avatarsListvue_type_template_id_4ac0977b_scoped_true_render,
  avatarsListvue_type_template_id_4ac0977b_scoped_true_staticRenderFns,
  false,
  avatarsList_injectStyles,
  "4ac0977b",
  null
  ,true
)

/* harmony default export */ var avatarsList = (avatarsList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./src/components/chatInfo/info?vue&type=script&lang=js&



















/* harmony default export */ var info_vue_type_script_lang_js_ = ({
  data: function data() {
    return {
      usr: {},
      ind: 0,
      roomMuted: false,
      encryptedEvents: [],
      imageEvents: [],
      pics: false,
      fileEvents: [],
      inputActive: false,
      menuItems: [{
        click: "adminMakeModer",
        title: this.$i18n.t("caption.makeModerator"),
        icon: "fas fa-user-shield"
      }, {
        click: "adminBan",
        title: this.$i18n.t("caption.ban"),
        icon: "fas fa-ban",
        upload: {
          multiple: true
        }
      }, {
        click: "adminKick",
        title: this.$i18n.t("caption.kick"),
        icon: "fas fa-user-times"
      }],
      menuItemsModer: [{
        click: "moderBan",
        title: this.$i18n.t("caption.ban"),
        icon: "fas fa-ban"
      }, {
        click: "moderKick",
        title: this.$i18n.t("caption.kick"),
        icon: "fas fa-user-times"
      }],
      admin: String,
      imagesList: [],
      localRoomName: '',
      humanSize: Number,
      inviteUserOpened: false,
      msList: [],
      isOpen: false,
      actionMemberShow: false,
      options: {
        index: 0,
        arrowEl: false,
        fullscreenEl: false,
        shareEl: false
      },
      roomName: '',
      nameEdit: false,
      accordionList: [{
        title: this.$i18n.t("caption.members"),
        id: 'members'
      }, {
        title: this.$i18n.t("caption.media"),
        id: 'media'
      }, {
        title: this.$i18n.t("caption.files"),
        id: 'files'
      }],
      isActive: null,
      isActiveAction: null,
      currentUser: '',
      actionUser: {},
      actionUserMenu: false,
      chatMembers: []
    };
  },
  props: {
    chat: {}
  },
  components: {
    images: info_images,
    members: members,
    files: files,
    topheader: chat_topheader,
    avatarsList: avatarsList,
    userspic: userspic,
    contacts: contacts["a" /* default */],
    chatName: assets_name["a" /* default */],
    chatIcon: icon["a" /* default */]
  },
  watch: {
    m_chat: {
      immediate: true,
      handler: function handler() {
        var _this = this;

        if (this.m_chat && !index_all["default"].isEmpty(this.m_chat)) {
          this.core.pcrypto.addroom(this.m_chat).then(function (r) {
            _this.ready = true;
            _this.encrypted = _this.m_chat.pcrypto.canBeEncrypt();
          });
        }
      }
    },
    chat: {
      immediate: true,
      handler: function handler() {
        if (this.chat) {
          this.$store.commit('SET_CURRENT_ROOM', this.chat.roomId);
        } else this.$store.commit('SET_CURRENT_ROOM', false);
      }
    }
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(['minimized', 'active'])), {}, {
    canchangeChatName: function canchangeChatName() {
      return !this.tetatet && this.me.powerLevel > 0;
    },
    canInvite: function canInvite() {
      return !this.tetatet && this.me.powerLevel > 0;
    },
    me: function me() {
      var _this2 = this;

      return index_all["default"].find(this.membersList, function (m) {
        return m.userId == _this2.core.user.userinfo.id;
      }) || {};
    },
    events: function events() {
      var pushRules = this.core.mtrx.client._pushProcessor.getPushRuleById(this.chat.roomId);

      if (pushRules !== null) {
        this.roomMuted = true;
      }

      return this.m_chat.timeline || {};
    },
    customRoomType: function customRoomType() {
      var type = this.core.mtrx.customRoomType(this.chat.roomId);
      return type;
    },
    blockedCheck: function blockedCheck() {
      var users = this.core.mtrx.anotherChatUsers(this.chat.roomId);
      console.log('users', users);

      if (users.length == 1) {
        return this.core.mtrx.blockeduser(users[0].userId);
      }
    },
    membersCount: function membersCount() {
      return this.users.length;
    },
    users: function users() {
      var _this$chat;

      return this.core.mtrx.chatUsersInfo((_this$chat = this.chat) === null || _this$chat === void 0 ? void 0 : _this$chat.roomId) || [];
    },
    m_chat: function m_chat() {
      if (this.chat && this.chat.roomId) {
        var m_chat = this.core.mtrx.client.getRoom(this.chat.roomId);
        return m_chat || {};
      }
    },
    galleryImages: function galleryImages() {
      var imgArr = [];
      this.imageEvents.forEach(function (event) {
        if (event.event.content.msgtype === 'm.image') {
          imgArr.push({
            src: event.event.content.url,
            w: event.event.content.info.w,
            h: event.event.content.info.h
          });
        }
      });
      return imgArr;
    },
    membersList: function membersList() {
      console.log(this.core.mtrx.chatUsers(this.chat.roomId));
      return this.core.mtrx.chatUsers(this.chat.roomId);
    },
    tetatet: function tetatet() {
      return this.core.mtrx.kit.tetatetchat(this.m_chat);
    },
    changeRoomName: function changeRoomName() {
      var roomName = this.m_chat.name;
      return roomName.replace('_', ' ');
    }
  }),
  mounted: function mounted() {
    // this.changeName()
    this.eventsList();
  },
  methods: {
    //// ???
    banForgetRoom: function banForgetRoom() {
      var banUserId = '';
      var my = this.m_chat.myUserId;
      var members = this.m_chat.currentState.getMembers();
      members.forEach(function (member) {
        if (member !== my) {
          banUserId = member.userId;
        }
      });
      this.core.mtrx.client.ban(this.chat.roomId, banUserId, 'leave').then(function (r) {
        return r;
      });
    },
    muteRoom: function muteRoom() {
      var roomId = this.chat.roomId;
      var deviceID = this.core.mtrx.client.deviceId;
      var self = this;

      if (this.roomMuted) {
        self.core.mtrx.client.deletePushRule('global', 'room', roomId);
        self.roomMuted = false;
      } else {
        self.core.mtrx.client.setRoomMutePushRule('global', roomId, 'true');
        self.roomMuted = true;
      }
    },
    blockUser: function blockUser() {
      var users = this.core.mtrx.anotherChatUsers(this.chat.roomId);

      if (users.length > 1) {
        return;
      }

      this.core.mtrx.blockUser(users[0].userId).catch(function (e) {});
    },
    unblock: function unblock() {
      var users = this.core.mtrx.anotherChatUsers(this.chat.roomId);

      if (users.length > 1) {
        return;
      }

      this.core.mtrx.unblockUser(users[0].userId).catch(function (e) {});
    },
    eventsList: function eventsList() {
      if (typeof this.events.filter == 'function') {
        this.imageEvents = this.events.filter(function (event) {
          return event.event.content.msgtype === 'm.image' || event.event.type === 'm.room.encrypted' && event.getClearContent().msgtype === 'm.image';
        });
        this.fileEvents = this.events.filter(function (event) {
          return event.event.content.msgtype === 'm.file';
        });
      }
    },
    toggleItem: function toggleItem(index) {
      this.isActive = this.isActive === index ? null : index;
      this.actionMemberShow = null;
    },
    forgetRoom: function forgetRoom() {
      var _this3 = this;

      this.core.mtrx.client.leave(this.chat.roomId).then(function (r) {
        _this3.core.mtrx.client.forget(_this3.chat.roomId, true).then(function (r) {
          return r;
        }).then(function (r) {
          _this3.$store.commit('DELETE_ROOM', _this3.chat.roomId);

          console.log(_this3.$store.state.chats, "chats new");

          _this3.$router.push({
            path: '/chats'
          });
        });
      });
    },
    ////// TODO
    changeName: function changeName() {
      this.localRoomName = this.m_chat.name.replace(/@/g, "");
      this.localRoomName.replace('_', ' ');
    },
    saveRoomName: function saveRoomName() {
      this.nameEdit = false;
      this.inputActive = false;
      this.core.mtrx.client.setRoomName(this.m_chat.roomId, '@' + this.roomName.replace(/[@]*/g, ""));
    },
    ///////////////
    kickUser: function kickUser(user) {
      this.core.mtrx.client.kick(this.m_chat.roomId, user).then(this.$nextTick(function () {}));
    },
    makeAdmin: function makeAdmin(user) {
      var event = this.m_chat.currentState.getStateEvents("m.room.power_levels");
      this.core.mtrx.client.setPowerLevel(this.m_chat.roomId, user, 50, event[0]).then(function (r) {});
    },
    /////////////////
    showEditRoomName: function showEditRoomName() {
      this.nameEdit = true;
      this.roomName = this.m_chat.name;
      this.inputActive = true;
    },
    editRoomName: function editRoomName() {},
    showPhotoSwipe: function showPhotoSwipe(index) {
      this.isOpen = true;
      this.$set(this.options, 'index', index);
    },
    accordion: function accordion(event) {
      event.target.classList.toggle('active');
    },
    hidePhotoSwipe: function hidePhotoSwipe() {
      this.isOpen = false;
    },
    focus: function focus() {
      return $event.target.select();
    },
    showUserAbout: function showUserAbout(user) {
      this.$emit('showAbout', user);
    },
    getClick: function getClick(room) {
      this.$emit('showRoomInfo', room);
    },
    modalInviteUser: function modalInviteUser() {
      this.inviteUserOpened = true;
    },
    closeModal: function closeModal() {
      this.inviteUserOpened = false;
    },
    closeContactModal: function closeContactModal(value) {
      this.inviteUserOpened = value;
    }
  }
});
// CONCATENATED MODULE: ./src/components/chatInfo/info?vue&type=script&lang=js&
 /* harmony default export */ var chatInfo_info_vue_type_script_lang_js_ = (info_vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/chatInfo/info/index.vue



function info_injectStyles (context) {
  
  var style0 = __webpack_require__("39aa")
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__("52e0")
if (style1.__inject__) style1.__inject__(context)
var style2 = __webpack_require__("86b1")
if (style2.__inject__) style2.__inject__(context)
var style3 = __webpack_require__("3117")
if (style3.__inject__) style3.__inject__(context)
var style4 = __webpack_require__("b2b7")
if (style4.__inject__) style4.__inject__(context)

}

/* normalize component */

var info_component = Object(componentNormalizer["a" /* default */])(
  chatInfo_info_vue_type_script_lang_js_,
  infovue_type_template_id_71fb918e_scoped_true_render,
  infovue_type_template_id_71fb918e_scoped_true_staticRenderFns,
  false,
  info_injectStyles,
  "71fb918e",
  null
  ,true
)

/* harmony default export */ var info = (info_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./src/components/chatInfo?vue&type=script&lang=js&



/* harmony default export */ var chatInfo_vue_type_script_lang_js_ = ({
  name: 'chatInfo',
  components: {
    info: info
  },
  props: {
    chat: {},
    events: {}
  },
  data: function data() {
    return {};
  },
  created: function created() {},
  mounted: function mounted() {
    this.$store.commit('blockactive', {
      value: true,
      item: 'chatinfo'
    });
  },
  destroyed: function destroyed() {
    this.$store.commit('blockactive', {
      value: false,
      item: 'chatinfo'
    });
  },
  watch: {//$route: 'getdata'
  },
  computed: Object(vuex_esm["c" /* mapState */])({
    pocketnet: function pocketnet(state) {
      return state.pocketnet;
    },
    minimized: function minimized(state) {
      return state.minimized;
    },
    active: function active(state) {
      return state.active;
    },
    auth: function auth(state) {
      return state.auth;
    },
    m_chat: function m_chat() {
      if (this.chat && this.chat.roomId) {
        var m_chat = this.core.mtrx.client.getRoom(this.chat.roomId);
        return m_chat || {};
      }
    },
    joinedMembers: function joinedMembers() {
      var self = this;
      return this.core.mtrx.client.getJoinedRoomMembers(self.chat.roomId).then(function (r) {
        return index_all["default"].mapObject(r.joined, function (key, value) {
          self.joinedRoomMembers.push(value);
        });
      });
    },
    downloadKeys: function downloadKeys() {
      var self = this;
      var accessToken = this.core.mtrx.access.accessToken;
      return self.core.mtrx.client.downloadKeysForUsers(this.joinedMembers, accessToken).then(function (r) {
        return r;
      });
    }
  })
});
// CONCATENATED MODULE: ./src/components/chatInfo?vue&type=script&lang=js&
 /* harmony default export */ var components_chatInfo_vue_type_script_lang_js_ = (chatInfo_vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/chatInfo/index.vue



function chatInfo_injectStyles (context) {
  
  var style0 = __webpack_require__("382e")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var chatInfo_component = Object(componentNormalizer["a" /* default */])(
  components_chatInfo_vue_type_script_lang_js_,
  chatInfovue_type_template_id_7d9df4a3_scoped_true_render,
  chatInfovue_type_template_id_7d9df4a3_scoped_true_staticRenderFns,
  false,
  chatInfo_injectStyles,
  "7d9df4a3",
  null
  ,true
)

/* harmony default export */ var chatInfo = (chatInfo_component.exports);
// EXTERNAL MODULE: ./src/components/contact/index.vue + 14 modules
var contact = __webpack_require__("d3ff");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/chatinfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var chatinfovue_type_script_lang_js_ = ({
  name: 'chatinfo',
  data: function data() {
    return {};
  },
  components: {
    topheader: topheader,
    contact: contact["a" /* default */],
    chatInfo: chatInfo
  },
  computed: Object(vuex_esm["c" /* mapState */])({
    pocketnet: function pocketnet(state) {
      return state.pocketnet;
    },
    minimized: function minimized(state) {
      return state.minimized;
    },
    u: function u() {
      return this.$route.query.u;
    },
    chat: function chat() {
      var id = this.$route.query.id;
      return this.$store.state.chatsMap[id];
    }
  }),
  methods: {}
});
// CONCATENATED MODULE: ./src/views/chatinfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_chatinfovue_type_script_lang_js_ = (chatinfovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/chatinfo.vue



function chatinfo_injectStyles (context) {
  
  var style0 = __webpack_require__("4b3e")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var chatinfo_component = Object(componentNormalizer["a" /* default */])(
  views_chatinfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  chatinfo_injectStyles,
  "553f6714",
  null
  ,true
)

/* harmony default export */ var chatinfo = __webpack_exports__["default"] = (chatinfo_component.exports);

/***/ }),

/***/ "289d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#matrix-root[theme=white] .unseen[data-v-71fb918e]{background:rgba(6,130,58,.8)}#matrix-root[theme=white] .userpic[data-v-71fb918e]{background:#dfdfdf;color:#213850}#matrix-root[theme=white] .userpic i[data-v-71fb918e]{color:#133591}#matrix-root[theme=white] .icon[data-v-71fb918e]{background:transparent;color:#606369}#matrix-root[theme=white] .icon.active[data-v-71fb918e]{color:#1556e4}#matrix-root[theme=white] .unseen[data-v-71fb918e]{background:rgba(0,90,224,.9);color:#fff}#matrix-root[theme=white] .aboutRoom .roomInfoWrapper[data-v-71fb918e]{background:hsla(0,0%,87.5%,.5)}#matrix-root[theme=white] .aboutRoom .roomInfoWrapper .namewrapper .active[data-v-71fb918e],#matrix-root[theme=white] .aboutRoom .roomInfoWrapper .roomInfo .name label[data-v-71fb918e],#matrix-root[theme=white] .aboutRoom .roomInfoWrapper .userpicWrapper[data-v-71fb918e]{border-bottom:1px solid #dfdfdf}#matrix-root[theme=white] .aboutRoom .roomInfoWrapper .roomInfo .name label input[data-v-71fb918e]{border:0}#matrix-root[theme=white] .aboutRoom .roomAccordionsList[data-v-71fb918e]{border-top:1px solid #dfdfdf}#matrix-root[theme=white] .aboutRoom .roomAccordionsList .accordion .aHeader .head[data-v-71fb918e]{border-bottom:1px solid #dfdfdf;transition:.3s}#matrix-root[theme=white] .aboutRoom .roomAccordionsList .accordion .aHeader .head .leftBlock i[data-v-71fb918e]{color:#005ae0}#matrix-root[theme=white] .aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember[data-v-71fb918e]{border-bottom:1px solid #dfdfdf}#matrix-root[theme=white] .aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .leftWrapper .avatarNameWrapper .avatar[data-v-71fb918e]{background:#dfdfdf;color:#213850}#matrix-root[theme=white] .aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .leftWrapper .nameRole .memberRole[data-v-71fb918e]{color:#919191}#matrix-root[theme=white] .aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper .adminActionsList .fa-caret-up[data-v-71fb918e]{color:#dfdfdf}#matrix-root[theme=white] .aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper .adminActionsList ul[data-v-71fb918e]{background:#fff}#matrix-root[theme=white] .aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper .adminActionsList ul li[data-v-71fb918e]{border-bottom:1px solid #dfdfdf}#matrix-root[theme=white] .aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper .adminActionsList ul li[data-v-71fb918e]:last-child{border:0}#matrix-root[theme=white] .aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper .adminActionsList ul li i[data-v-71fb918e]{color:#005ae0}#matrix-root[theme=white] .aboutRoom .roomAccordionsList .accordion .body .roomAboutWrapper .aboutRoomFileWrapper .aboutRoomFile[data-v-71fb918e]{border-bottom:1px solid #dfdfdf}#matrix-root[theme=white] .aboutRoom .roomAccordionsList .accordion .body .roomAboutWrapper .aboutRoomFileWrapper .aboutRoomFile[data-v-71fb918e]:last-child{border:none}#matrix-root[theme=white] .roomActionsList[data-v-71fb918e]{background:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "3117":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_vue_simple_accordion_css_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d8da");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_vue_simple_accordion_css_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_vue_simple_accordion_css_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_vue_simple_accordion_css_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_vue_simple_accordion_css_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "3459":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{transform:scale(1);-webkit-opacity:1;opacity:1}45%{transform:scale(.1);-webkit-opacity:.7;opacity:.7}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "382e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_7d9df4a3_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e847");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_7d9df4a3_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_7d9df4a3_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_7d9df4a3_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_7d9df4a3_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "39aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_71fb918e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ceec");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_71fb918e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_71fb918e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_71fb918e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_71fb918e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "44c4":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chatInfoMedia .roomAboutWrapper[data-v-c92b1d4e]{display:flex;justify-content:flex-start;flex-wrap:wrap;padding:0 .8em}.chatInfoMedia .roomAboutWrapper .roomAboutImage[data-v-c92b1d4e]{cursor:pointer;padding:.5em .2em;position:relative}.chatInfoMedia .roomAboutWrapper .roomAboutImage img[data-v-c92b1d4e]{display:block;width:100px;height:100px;-o-object-fit:cover;object-fit:cover;border-radius:1em}.chatInfoMedia .roomAboutWrapper .roomAboutImage .encryptedDataIcon[data-v-c92b1d4e]{left:0;top:0;position:absolute;color:#fff;opacity:.3;padding:.25em .5em;text-shadow:1px 1px 2px #000}.chatInfoMedia .roomAboutWrapper .roomAboutImage .encryptedDataIcon i[data-v-c92b1d4e]{font-size:.7em}.emptyBlock[data-v-c92b1d4e]{text-align:center;padding:.5em 0}.emptyBlock span[data-v-c92b1d4e]{font-size:.9em}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "4996":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1173");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("59deb01d", content, shadowRoot)
};

/***/ }),

/***/ "4b3e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chatinfo_vue_vue_type_style_index_0_id_553f6714_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a362");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chatinfo_vue_vue_type_style_index_0_id_553f6714_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chatinfo_vue_vue_type_style_index_0_id_553f6714_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chatinfo_vue_vue_type_style_index_0_id_553f6714_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chatinfo_vue_vue_type_style_index_0_id_553f6714_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "52e0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_theme_white_sass_vue_type_style_index_1_id_71fb918e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b172");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_theme_white_sass_vue_type_style_index_1_id_71fb918e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_theme_white_sass_vue_type_style_index_1_id_71fb918e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_theme_white_sass_vue_type_style_index_1_id_71fb918e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_theme_white_sass_vue_type_style_index_1_id_71fb918e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "5588":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("15cc");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("03279b80", content, shadowRoot)
};

/***/ }),

/***/ "5f7e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("bd86");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("3c4a7888", content, shadowRoot)
};

/***/ }),

/***/ "644d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("afd6");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("f269bf68", content, shadowRoot)
};

/***/ }),

/***/ "671b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PulseLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1259");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PulseLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PulseLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PulseLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PulseLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "6c00":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_91225d6c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("644d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_91225d6c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_91225d6c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_91225d6c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_91225d6c_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "6c71":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4ac0977b_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4996");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4ac0977b_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4ac0977b_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4ac0977b_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4ac0977b_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "72c5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_c92b1d4e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0459");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_c92b1d4e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_c92b1d4e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_c92b1d4e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_index_sass_vue_type_style_index_0_id_c92b1d4e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "86b1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_theme_black_sass_vue_type_style_index_2_id_71fb918e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("15cd");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_theme_black_sass_vue_type_style_index_2_id_71fb918e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_theme_black_sass_vue_type_style_index_2_id_71fb918e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_theme_black_sass_vue_type_style_index_2_id_71fb918e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_theme_black_sass_vue_type_style_index_2_id_71fb918e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "8a4a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("12d6");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("f23b420c", content, shadowRoot)
};

/***/ }),

/***/ "a362":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b61c");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("45622b66", content, shadowRoot)
};

/***/ }),

/***/ "afd6":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".membersList[data-v-91225d6c]{list-style:none;margin:0;padding:0}.membersList .roomMember[data-v-91225d6c]{padding:1em;padding-right:0;display:flex;align-items:center;cursor:pointer;justify-content:space-between;border-bottom:1px solid #dfdfdf}.membersList .roomMember.invite[data-v-91225d6c]{opacity:.6}.membersList .roomMember:hover .leftWrapper .nameRole .name[data-v-91225d6c]{color:#606369}.membersList .roomMember .leftWrapper[data-v-91225d6c]{display:flex;justify-content:flex-start;align-items:center;width:90%}.membersList .roomMember .leftWrapper .avatarNameWrapper[data-v-91225d6c]{display:flex;justify-content:flex-start;align-items:center;width:44px;height:44px}.membersList .roomMember .leftWrapper .avatarNameWrapper .avatar[data-v-91225d6c]{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;background:#dfdfdf;line-height:44px;text-align:center;font-size:.8em;color:#213850;position:relative}.membersList .roomMember .leftWrapper .avatarNameWrapper .avatar[data-v-91225d6c] .bgimage{border-radius:50%}.membersList .roomMember .leftWrapper .avatarNameWrapper .avatar img[data-v-91225d6c]{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:50%}.membersList .roomMember .leftWrapper .nameRole[data-v-91225d6c]{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-left:15px}.membersList .roomMember .leftWrapper .nameRole .memberRole[data-v-91225d6c]{font-size:.7em;color:#919191}.membersList .roomMember .rightWrapper[data-v-91225d6c] .icon{width:100%;text-align:center}.membersList .roomMember .rightWrapper .adminActionsList .fa-caret-up[data-v-91225d6c]{font-size:2em;left:0;color:#dfdfdf;z-index:99;top:10px}.invitedAvatar[data-v-91225d6c]:after{content:\"\";position:absolute;left:0;right:0;top:0;bottom:0;background:rgba(2,6,26,.8);border-radius:50%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b172":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("289d");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("16b7120b", content, shadowRoot)
};

/***/ }),

/***/ "b2b7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_swiper_bundle_css_vue_type_style_index_4_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5588");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_swiper_bundle_css_vue_type_style_index_4_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_swiper_bundle_css_vue_type_style_index_4_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_swiper_bundle_css_vue_type_style_index_4_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_swiper_bundle_css_vue_type_style_index_4_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "b61c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".topheader[data-v-553f6714]{top:0;z-index:999}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "bd86":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".typingBlock{position:relative}.typingBlock .typingBlockWrapper{position:absolute;left:50%;transform:translateX(-50%);top:-5px;display:flex;align-items:center}.typingBlock .typingBlockWrapper>div{padding:0 .5em}.typingBlock .typingBlockWrapper span{font-size:.7em;color:#707070;opacity:.8}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "cbaa":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#matrix-root[theme=black] .unseen[data-v-71fb918e]{background:rgba(6,130,34,.8)}#matrix-root[theme=black] .userpic[data-v-71fb918e]{background:#000c21;color:#b0bfc6}#matrix-root[theme=black] .userpic i[data-v-71fb918e]{color:#18334d}#matrix-root[theme=black] .icon[data-v-71fb918e]{background:transparent;color:#92979d}#matrix-root[theme=black] .icon.active[data-v-71fb918e]{color:#0084ff}#matrix-root[theme=black] .unseen[data-v-71fb918e]{background:rgba(18,72,138,.9);color:#fff}#matrix-root[theme=black] .aboutRoom .roomInfoWrapper[data-v-71fb918e]{background:rgba(0,12,33,.5)}#matrix-root[theme=black] .aboutRoom .roomInfoWrapper .namewrapper .active[data-v-71fb918e],#matrix-root[theme=black] .aboutRoom .roomInfoWrapper .roomInfo .name label[data-v-71fb918e],#matrix-root[theme=black] .aboutRoom .roomInfoWrapper .userpicWrapper[data-v-71fb918e]{border-bottom:1px solid #000c21}#matrix-root[theme=black] .aboutRoom .roomInfoWrapper .roomInfo .name label input[data-v-71fb918e]{border:0}#matrix-root[theme=black] .aboutRoom .roomAccordionsList[data-v-71fb918e]{border-top:1px solid #000c21}#matrix-root[theme=black] .aboutRoom .roomAccordionsList .accordion .aHeader .head[data-v-71fb918e]{border-bottom:1px solid #000c21;transition:.3s}#matrix-root[theme=black] .aboutRoom .roomAccordionsList .accordion .aHeader .head .leftBlock i[data-v-71fb918e]{color:#12488a}#matrix-root[theme=black] .aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember[data-v-71fb918e]{border-bottom:1px solid #000c21}#matrix-root[theme=black] .aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .leftWrapper .avatarNameWrapper .avatar[data-v-71fb918e]{background:#000c21;color:#b0bfc6}#matrix-root[theme=black] .aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .leftWrapper .nameRole .memberRole[data-v-71fb918e]{color:#919191}#matrix-root[theme=black] .aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper .adminActionsList .fa-caret-up[data-v-71fb918e]{color:#000c21}#matrix-root[theme=black] .aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper .adminActionsList ul[data-v-71fb918e]{background:#000}#matrix-root[theme=black] .aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper .adminActionsList ul li[data-v-71fb918e]{border-bottom:1px solid #000c21}#matrix-root[theme=black] .aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper .adminActionsList ul li[data-v-71fb918e]:last-child{border:0}#matrix-root[theme=black] .aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper .adminActionsList ul li i[data-v-71fb918e]{color:#12488a}#matrix-root[theme=black] .aboutRoom .roomAccordionsList .accordion .body .roomAboutWrapper .aboutRoomFileWrapper .aboutRoomFile[data-v-71fb918e]{border-bottom:1px solid #000c21}#matrix-root[theme=black] .aboutRoom .roomAccordionsList .accordion .body .roomAboutWrapper .aboutRoomFileWrapper .aboutRoomFile[data-v-71fb918e]:last-child{border:none}#matrix-root[theme=black] .roomActionsList[data-v-71fb918e]{background:#00060c}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ceec":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d241");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("077266bc", content, shadowRoot)
};

/***/ }),

/***/ "cf6f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "d241":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chatIconWrapper[data-v-71fb918e]{width:120px;margin:0 auto}.biggest[data-v-71fb918e]{width:140px;margin:0 auto}.unseen[data-v-71fb918e]{width:100%;height:100%;left:0;top:0;background:rgba(6,130,58,.8);line-height:44px}.userpic[data-v-71fb918e]{margin:0 auto;display:flex;align-items:center;justify-content:center;width:80px;height:80px;background:#dfdfdf;line-height:44px;text-align:center;font-size:.8em;color:#213850;position:relative}.userpic[data-v-71fb918e],.userpic[data-v-71fb918e] .bgimage{border-radius:50%}.userpic i[data-v-71fb918e]{font-size:1 .5em;color:#041f68}.icon[data-v-71fb918e]{position:absolute;right:70%;top:70%;font-size:1em;width:20px;height:20px;line-height:20px;background:transparent;border-radius:20px;color:#606369;opacity:.8;z-index:3}.icon.active[data-v-71fb918e]{color:#004680}.unseen[data-v-71fb918e]{position:absolute;width:22px;height:22px;right:-10%;bottom:-10%;background:rgba(10,104,173,.9);line-height:22px;text-align:center;font-weight:500;border-radius:50%;z-index:2;font-size:.6em;color:#fff}.aboutRoom[data-v-71fb918e]{padding-bottom:100px}.aboutRoom .roomInfoWrapper[data-v-71fb918e]{background:hsla(0,0%,87.5%,.5);padding:.5em 0}.aboutRoom .roomInfoWrapper .roomNameLine[data-v-71fb918e]{text-overflow:ellipsis;overflow:hidden;width:180px;height:1.2em;white-space:nowrap;text-align:center;margin:0 auto;display:block}.aboutRoom .roomInfoWrapper .namewrapper[data-v-71fb918e]{position:relative;text-align:center;padding:1em 0}.aboutRoom .roomInfoWrapper .namewrapper input[data-v-71fb918e]{text-align:center;font-weight:700}.aboutRoom .roomInfoWrapper .namewrapper .active[data-v-71fb918e]{border-bottom:1px solid #dfdfdf}.aboutRoom .roomInfoWrapper .namewrapper .iconwrapper[data-v-71fb918e]{position:absolute;right:1em;top:50%;bottom:0;transform:translateY(-50%)}.aboutRoom .roomInfoWrapper .userpicWrapper[data-v-71fb918e]{border-bottom:1px solid #dfdfdf;padding:1em}.aboutRoom .roomInfoWrapper .roomInfo[data-v-71fb918e]{position:relative}.aboutRoom .roomInfoWrapper .roomInfo .name label[data-v-71fb918e]{display:flex;justify-content:space-between;align-items:center;width:100%;height:60px;border-bottom:1px solid #dfdfdf}.aboutRoom .roomInfoWrapper .roomInfo .name label input[data-v-71fb918e]{padding:.1em;display:block;border:0;height:90%;width:90%;font-size:.6em;font-weight:700;text-align:center}.aboutRoom .roomInfoWrapper .roomInfo .name span[data-v-71fb918e]{font-weight:700}.aboutRoom .roomAccordionsList[data-v-71fb918e]{margin-top:.5em;border-top:1px solid #dfdfdf}.aboutRoom .roomAccordionsList .accordion .membersCount[data-v-71fb918e]{font-weight:700}.aboutRoom .roomAccordionsList .accordion .aHeader .head[data-v-71fb918e]{cursor:pointer;display:flex;justify-content:space-between;align-items:center;padding:1em;border-bottom:1px solid #dfdfdf;transition:.3s}.aboutRoom .roomAccordionsList .accordion .aHeader .head .leftBlock[data-v-71fb918e]{flex-grow:1;position:relative}.aboutRoom .roomAccordionsList .accordion .aHeader .head .leftBlock i[data-v-71fb918e]{width:30px;color:#0a68ad}.aboutRoom .roomAccordionsList .accordion .body .membersList[data-v-71fb918e]{list-style:none;margin:0;padding:0}.aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember[data-v-71fb918e]{padding:1em;cursor:pointer;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #dfdfdf}.aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .leftWrapper[data-v-71fb918e]{display:flex;justify-content:flex-start;align-items:center;width:90%}.aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .leftWrapper .avatarNameWrapper[data-v-71fb918e]{display:flex;justify-content:flex-start;align-items:center}.aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .leftWrapper .avatarNameWrapper .avatar[data-v-71fb918e]{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;background:#dfdfdf;line-height:44px;text-align:center;font-size:.8em;color:#213850;position:relative}.aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .leftWrapper .avatarNameWrapper .avatar[data-v-71fb918e] .bgimage{border-radius:50%}.aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .leftWrapper .avatarNameWrapper .avatar img[data-v-71fb918e]{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:50%}.aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .leftWrapper .nameRole[data-v-71fb918e]{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-left:15px}.aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .leftWrapper .nameRole .memberRole[data-v-71fb918e]{font-size:.7em;color:#919191}.aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper[data-v-71fb918e]{position:relative}.aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper .adminActionsList .fa-caret-up[data-v-71fb918e]{font-size:2em;left:0;color:#dfdfdf;z-index:99;top:10px}.aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper .adminActionsList ul[data-v-71fb918e]{z-index:99;width:100px;position:absolute;right:-3px;top:24px;background:#fff;box-shadow:0 0 10px rgba(0,0,0,.1);border-radius:1em 0 1em 1em;list-style:none;margin:0;padding:0}.aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper .adminActionsList ul li[data-v-71fb918e]{position:relative;padding:.5em .8em;border-bottom:1px solid #dfdfdf}.aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper .adminActionsList ul li[data-v-71fb918e]:last-child{border:0}.aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper .adminActionsList ul li i[data-v-71fb918e]{left:10px;top:8px;color:#0a68ad}.aboutRoom .roomAccordionsList .accordion .body .membersList .roomMember .rightWrapper .adminActionsList ul li span[data-v-71fb918e]{margin-left:28px}.aboutRoom .roomAccordionsList .accordion .body .roomAboutWrapper[data-v-71fb918e]{display:flex;flex-wrap:wrap;justify-content:space-between;padding:1em 1em;align-items:center}.aboutRoom .roomAccordionsList .accordion .body .roomAboutWrapper .roomAboutImage[data-v-71fb918e]{margin:.4em 0}.aboutRoom .roomAccordionsList .accordion .body .roomAboutWrapper .roomAboutImage img[data-v-71fb918e]{display:block;width:100px;height:100px;-o-object-fit:cover;object-fit:cover;border-radius:1em}.aboutRoom .roomAccordionsList .accordion .body .roomAboutWrapper .aboutRoomFileWrapper .aboutRoomFile[data-v-71fb918e]{display:flex;justify-content:flex-start;align-items:flex-start;border-bottom:1px solid #dfdfdf;margin-bottom:.5em;padding:.5em 1em}.aboutRoom .roomAccordionsList .accordion .body .roomAboutWrapper .aboutRoomFileWrapper .aboutRoomFile[data-v-71fb918e]:last-child{border:none}.aboutRoom .roomAccordionsList .accordion .body .roomAboutWrapper .aboutRoomFileWrapper .aboutRoomFile a[data-v-71fb918e]{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin:.2em 0}.aboutRoom .roomAccordionsList .accordion .body .roomAboutWrapper .aboutRoomFileWrapper .aboutRoomFile i[data-v-71fb918e]{font-size:2em;margin-top:.2em;margin-right:.5em}.roomActionsList[data-v-71fb918e]{padding:1em 0;background:#fff;text-align:center}.roomActionsList .button[data-v-71fb918e]{min-width:0;margin-right:.5em}.roomActionsList .button[data-v-71fb918e]:last-child{margin-right:0}.roomActionsList .actionsItem[data-v-71fb918e]{padding:.5em;border-radius:1em;width:80px;box-shadow:0 0 10px rgba(0,0,0,.1)}[data-v-71fb918e] #modal .modal-wrapper{right:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "d8da":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("05d4");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("7cc71fb8", content, shadowRoot)
};

/***/ }),

/***/ "e46b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8acf856c_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8a4a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8acf856c_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8acf856c_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8acf856c_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8acf856c_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "e847":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("cf6f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("39792afa", content, shadowRoot)
};

/***/ })

}]);
//# sourceMappingURL=matrix-element.1.js.map