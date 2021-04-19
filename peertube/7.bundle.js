/*! For license information please see 7.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{149:function(t,e,r){"use strict";(function(t){var n=r(236),i=r(237),o=r(190);function u(){return a.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(t,e){if(u()<e)throw new RangeError("Invalid typed array length");return a.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=a.prototype:(null===t&&(t=new a(e)),t.length=e),t}function a(t,e,r){if(!(a.TYPED_ARRAY_SUPPORT||this instanceof a))return new a(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return c(this,t)}return f(this,t,e,r)}function f(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),a.TYPED_ARRAY_SUPPORT?(t=e).__proto__=a.prototype:t=h(t,e),t}(t,e,r,n):"string"==typeof e?function(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!a.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|d(e,r),i=(t=s(t,n)).write(e,r);return i!==n&&(t=t.slice(0,i)),t}(t,e,r):function(t,e){if(a.isBuffer(e)){var r=0|p(e.length);return 0===(t=s(t,r)).length||e.copy(t,0,0,r),t}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(n=e.length)!=n?s(t,0):h(t,e);if("Buffer"===e.type&&o(e.data))return h(t,e.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function l(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function c(t,e){if(l(e),t=s(t,e<0?0:0|p(e)),!a.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function h(t,e){var r=e.length<0?0:0|p(e.length);t=s(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function p(t){if(t>=u())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u().toString(16)+" bytes");return 0|t}function d(t,e){if(a.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return N(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return q(t).length;default:if(n)return N(t).length;e=(""+e).toLowerCase(),n=!0}}function y(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return U(this,e,r);case"utf8":case"utf-8":return I(this,e,r);case"ascii":return P(this,e,r);case"latin1":case"binary":return x(this,e,r);case"base64":return R(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function g(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function v(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=a.from(e,n)),a.isBuffer(e))return 0===e.length?-1:m(t,e,r,n,i);if("number"==typeof e)return e&=255,a.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):m(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function m(t,e,r,n,i){var o,u=1,s=t.length,a=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;u=2,s/=2,a/=2,r/=2}function f(t,e){return 1===u?t[e]:t.readUInt16BE(e*u)}if(i){var l=-1;for(o=r;o<s;o++)if(f(t,o)===f(e,-1===l?0:o-l)){if(-1===l&&(l=o),o-l+1===a)return l*u}else-1!==l&&(o-=o-l),l=-1}else for(r+a>s&&(r=s-a),o=r;o>=0;o--){for(var c=!0,h=0;h<a;h++)if(f(t,o+h)!==f(e,h)){c=!1;break}if(c)return o}return-1}function w(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=e.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var u=0;u<n;++u){var s=parseInt(e.substr(2*u,2),16);if(isNaN(s))return u;t[r+u]=s}return u}function b(t,e,r,n){return F(N(e,t.length-r),t,r,n)}function E(t,e,r,n){return F(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function _(t,e,r,n){return E(t,e,r,n)}function A(t,e,r,n){return F(q(e),t,r,n)}function T(t,e,r,n){return F(function(t,e){for(var r,n,i=[],o=0;o<t.length&&!((e-=2)<0);++o)n=(r=t.charCodeAt(o))>>8,i.push(r%256),i.push(n);return i}(e,t.length-r),t,r,n)}function R(t,e,r){return n.fromByteArray(0===e&&r===t.length?t:t.slice(e,r))}function I(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var o,u,s,a,f=t[i],l=null,c=f>239?4:f>223?3:f>191?2:1;if(i+c<=r)switch(c){case 1:f<128&&(l=f);break;case 2:128==(192&(o=t[i+1]))&&(a=(31&f)<<6|63&o)>127&&(l=a);break;case 3:u=t[i+2],128==(192&(o=t[i+1]))&&128==(192&u)&&(a=(15&f)<<12|(63&o)<<6|63&u)>2047&&(a<55296||a>57343)&&(l=a);break;case 4:u=t[i+2],s=t[i+3],128==(192&(o=t[i+1]))&&128==(192&u)&&128==(192&s)&&(a=(15&f)<<18|(63&o)<<12|(63&u)<<6|63&s)>65535&&a<1114112&&(l=a)}null===l?(l=65533,c=1):l>65535&&(n.push((l-=65536)>>>10&1023|55296),l=56320|1023&l),n.push(l),i+=c}return function(t){var e=t.length;if(e<=S)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=S));return r}(n)}e.Buffer=a,e.SlowBuffer=function(t){return+t!=t&&(t=0),a.alloc(+t)},e.INSPECT_MAX_BYTES=50,a.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=u(),a.poolSize=8192,a._augment=function(t){return t.__proto__=a.prototype,t},a.from=function(t,e,r){return f(null,t,e,r)},a.TYPED_ARRAY_SUPPORT&&(a.prototype.__proto__=Uint8Array.prototype,a.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&a[Symbol.species]===a&&Object.defineProperty(a,Symbol.species,{value:null,configurable:!0})),a.alloc=function(t,e,r){return function(t,e,r,n){return l(e),e<=0?s(t,e):void 0!==r?"string"==typeof n?s(t,e).fill(r,n):s(t,e).fill(r):s(t,e)}(null,t,e,r)},a.allocUnsafe=function(t){return c(null,t)},a.allocUnsafeSlow=function(t){return c(null,t)},a.isBuffer=function(t){return!(null==t||!t._isBuffer)},a.compare=function(t,e){if(!a.isBuffer(t)||!a.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},a.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return a.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=a.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var u=t[r];if(!a.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(n,i),i+=u.length}return n},a.byteLength=d,a.prototype._isBuffer=!0,a.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)g(this,e,e+1);return this},a.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)g(this,e,e+3),g(this,e+1,e+2);return this},a.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)g(this,e,e+7),g(this,e+1,e+6),g(this,e+2,e+5),g(this,e+3,e+4);return this},a.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?I(this,0,t):y.apply(this,arguments)},a.prototype.equals=function(t){if(!a.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===a.compare(this,t)},a.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},a.prototype.compare=function(t,e,r,n,i){if(!a.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),u=(r>>>=0)-(e>>>=0),s=Math.min(o,u),f=this.slice(n,i),l=t.slice(e,r),c=0;c<s;++c)if(f[c]!==l[c]){o=f[c],u=l[c];break}return o<u?-1:u<o?1:0},a.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},a.prototype.indexOf=function(t,e,r){return v(this,t,e,r,!0)},a.prototype.lastIndexOf=function(t,e,r){return v(this,t,e,r,!1)},a.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return w(this,t,e,r);case"utf8":case"utf-8":return b(this,t,e,r);case"ascii":return E(this,t,e,r);case"latin1":case"binary":return _(this,t,e,r);case"base64":return A(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var S=4096;function P(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function x(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function U(t,e,r){var n,i=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>i)&&(r=i);for(var o="",u=e;u<r;++u)o+=(n=t[u])<16?"0"+n.toString(16):n.toString(16);return o}function B(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function k(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function C(t,e,r,n,i,o){if(!a.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function M(t,e,r,n){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);i<o;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function O(t,e,r,n){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);i<o;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function L(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function Y(t,e,r,n,o){return o||L(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function j(t,e,r,n,o){return o||L(t,0,r,8),i.write(t,e,r,n,52,8),r+8}a.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),a.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=a.prototype;else{var i=e-t;r=new a(i,void 0);for(var o=0;o<i;++o)r[o]=this[o+t]}return r},a.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||k(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},a.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||k(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},a.prototype.readUInt8=function(t,e){return e||k(t,1,this.length),this[t]},a.prototype.readUInt16LE=function(t,e){return e||k(t,2,this.length),this[t]|this[t+1]<<8},a.prototype.readUInt16BE=function(t,e){return e||k(t,2,this.length),this[t]<<8|this[t+1]},a.prototype.readUInt32LE=function(t,e){return e||k(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},a.prototype.readUInt32BE=function(t,e){return e||k(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},a.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||k(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},a.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||k(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},a.prototype.readInt8=function(t,e){return e||k(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},a.prototype.readInt16LE=function(t,e){e||k(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt16BE=function(t,e){e||k(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt32LE=function(t,e){return e||k(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},a.prototype.readInt32BE=function(t,e){return e||k(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},a.prototype.readFloatLE=function(t,e){return e||k(t,4,this.length),i.read(this,t,!0,23,4)},a.prototype.readFloatBE=function(t,e){return e||k(t,4,this.length),i.read(this,t,!1,23,4)},a.prototype.readDoubleLE=function(t,e){return e||k(t,8,this.length),i.read(this,t,!0,52,8)},a.prototype.readDoubleBE=function(t,e){return e||k(t,8,this.length),i.read(this,t,!1,52,8)},a.prototype.writeUIntLE=function(t,e,r,n){t=+t,e|=0,r|=0,n||C(this,t,e,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},a.prototype.writeUIntBE=function(t,e,r,n){t=+t,e|=0,r|=0,n||C(this,t,e,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},a.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||C(this,t,e,1,255,0),a.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},a.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||C(this,t,e,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):M(this,t,e,!0),e+2},a.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||C(this,t,e,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):M(this,t,e,!1),e+2},a.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||C(this,t,e,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):O(this,t,e,!0),e+4},a.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||C(this,t,e,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):O(this,t,e,!1),e+4},a.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);C(this,t,e,r,i-1,-i)}var o=0,u=1,s=0;for(this[e]=255&t;++o<r&&(u*=256);)t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/u>>0)-s&255;return e+r},a.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);C(this,t,e,r,i-1,-i)}var o=r-1,u=1,s=0;for(this[e+o]=255&t;--o>=0&&(u*=256);)t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/u>>0)-s&255;return e+r},a.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||C(this,t,e,1,127,-128),a.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},a.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||C(this,t,e,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):M(this,t,e,!0),e+2},a.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||C(this,t,e,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):M(this,t,e,!1),e+2},a.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||C(this,t,e,4,2147483647,-2147483648),a.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):O(this,t,e,!0),e+4},a.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||C(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),a.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):O(this,t,e,!1),e+4},a.prototype.writeFloatLE=function(t,e,r){return Y(this,t,e,!0,r)},a.prototype.writeFloatBE=function(t,e,r){return Y(this,t,e,!1,r)},a.prototype.writeDoubleLE=function(t,e,r){return j(this,t,e,!0,r)},a.prototype.writeDoubleBE=function(t,e,r){return j(this,t,e,!1,r)},a.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,o=n-r;if(this===t&&r<e&&e<n)for(i=o-1;i>=0;--i)t[i+e]=this[i+r];else if(o<1e3||!a.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+o),e);return o},a.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var u=a.isBuffer(t)?t:N(new a(t,n).toString()),s=u.length;for(o=0;o<r-e;++o)this[o+e]=u[o%s]}return this};var D=/[^+\/0-9A-Za-z-_]/g;function N(t,e){var r;e=e||1/0;for(var n=t.length,i=null,o=[],u=0;u<n;++u){if((r=t.charCodeAt(u))>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(u+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function q(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(D,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function F(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}}).call(this,r(17))},151:function(t,e){var r,n,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(t){r=o}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(t){n=u}}();var a,f=[],l=!1,c=-1;function h(){l&&a&&(l=!1,a.length?f=a.concat(f):c=-1,f.length&&p())}function p(){if(!l){var t=s(h);l=!0;for(var e=f.length;e;){for(a=f,f=[];++c<e;)a&&a[c].run();c=-1,e=f.length}a=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];f.push(new d(t,e)),1!==f.length||l||s(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=y,i.addListener=y,i.once=y,i.off=y,i.removeListener=y,i.removeAllListeners=y,i.emit=y,i.prependListener=y,i.prependOnceListener=y,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},157:function(t,e,r){(function(t){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function n(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}e.resolve=function(){for(var e="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var u=o>=0?arguments[o]:t.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(e=u+"/"+e,i="/"===u.charAt(0))}return(i?"/":"")+(e=r(n(e.split("/"),(function(t){return!!t})),!i).join("/"))||"."},e.normalize=function(t){var o=e.isAbsolute(t),u="/"===i(t,-1);return(t=r(n(t.split("/"),(function(t){return!!t})),!o).join("/"))||o||(t="."),t&&u&&(t+="/"),(o?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(n(t,(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var i=n(t.split("/")),o=n(r.split("/")),u=Math.min(i.length,o.length),s=u,a=0;a<u;a++)if(i[a]!==o[a]){s=a;break}var f=[];for(a=s;a<i.length;a++)f.push("..");return(f=f.concat(o.slice(s))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),r=47===e,n=-1,i=!0,o=t.length-1;o>=1;--o)if(47===(e=t.charCodeAt(o))){if(!i){n=o;break}}else i=!1;return-1===n?r?"/":".":r&&1===n?"/":t.slice(0,n)},e.basename=function(t,e){var r=function(t){"string"!=typeof t&&(t+="");var e,r=0,n=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){r=e+1;break}}else-1===n&&(i=!1,n=e+1);return-1===n?"":t.slice(r,n)}(t);return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){"string"!=typeof t&&(t+="");for(var e=-1,r=0,n=-1,i=!0,o=0,u=t.length-1;u>=0;--u){var s=t.charCodeAt(u);if(47!==s)-1===n&&(i=!1,n=u+1),46===s?-1===e?e=u:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){r=u+1;break}}return-1===e||-1===n||0===o||1===o&&e===n-1&&e===r+1?"":t.slice(e,n)};var i="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r(151))},190:function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},231:function(t,e,r){var n,i,o;o=function(t){"use strict";"undefined"!=typeof window&&(window.videojs_hotkeys={version:"0.2.27"}),(t.registerPlugin||t.plugin)("hotkeys",(function(e){var r=this,n=r.el(),i=document,o=(e=(t.mergeOptions||t.util.mergeOptions)({volumeStep:.1,seekStep:5,enableMute:!0,enableVolumeScroll:!0,enableHoverScroll:!1,enableFullscreen:!0,enableNumbers:!0,enableJogStyle:!1,alwaysCaptureHotkeys:!1,captureDocumentHotkeys:!1,documentHotkeysFocusElementFilter:function(){return!1},enableModifiersForNumbers:!0,enableInactiveFocus:!0,skipInitialFocus:!1,playPauseKey:function(t){return 32===t.which||179===t.which},rewindKey:function(t){return 37===t.which||177===t.which},forwardKey:function(t){return 39===t.which||176===t.which},volumeUpKey:function(t){return 38===t.which},volumeDownKey:function(t){return 40===t.which},muteKey:function(t){return 77===t.which},fullscreenKey:function(t){return 70===t.which},customKeys:{}},e||{})).volumeStep,u=e.seekStep,s=e.enableMute,a=e.enableVolumeScroll,f=e.enableHoverScroll,l=e.enableFullscreen,c=e.enableNumbers,h=e.enableJogStyle,p=e.alwaysCaptureHotkeys,d=e.captureDocumentHotkeys,y=e.documentHotkeysFocusElementFilter,g=e.enableModifiersForNumbers,v=e.enableInactiveFocus,m=e.skipInitialFocus,w=t.VERSION;n.hasAttribute("tabIndex")||n.setAttribute("tabIndex","-1"),n.style.outline="none",!p&&r.autoplay()||m||r.one("play",(function(){n.focus()})),v&&r.on("userinactive",(function(){var t=function(){clearTimeout(e)},e=setTimeout((function(){r.off("useractive",t);var e=i.activeElement,o=n.querySelector(".vjs-control-bar");e&&e.parentElement==o&&n.focus()}),10);r.one("useractive",t)})),r.on("play",(function(){var t=n.querySelector(".iframeblocker");t&&""===t.style.display&&(t.style.display="block",t.style.bottom="39px")}));var b=function(t){var u,a,f=t.which,v=t.preventDefault.bind(t),m=r.duration();if(r.controls()){var w=i.activeElement;if(p||d&&y(w)||w==n||w==n.querySelector(".vjs-tech")||w==n.querySelector(".vjs-control-bar")||w==n.querySelector(".iframeblocker"))switch(T(t,r)){case 1:v(),(p||d)&&t.stopPropagation(),r.paused()?I(r.play()):r.pause();break;case 2:u=!r.paused(),v(),u&&r.pause(),(a=r.currentTime()-R(t))<=0&&(a=0),r.currentTime(a),u&&I(r.play());break;case 3:u=!r.paused(),v(),u&&r.pause(),(a=r.currentTime()+R(t))>=m&&(a=u?m-.001:m),r.currentTime(a),u&&I(r.play());break;case 5:v(),h?(a=r.currentTime()-1,r.currentTime()<=1&&(a=0),r.currentTime(a)):r.volume(r.volume()-o);break;case 4:v(),h?((a=r.currentTime()+1)>=m&&(a=m),r.currentTime(a)):r.volume(r.volume()+o);break;case 6:s&&r.muted(!r.muted());break;case 7:l&&(r.isFullscreen()?r.exitFullscreen():r.requestFullscreen());break;default:if((f>47&&f<59||f>95&&f<106)&&(g||!(t.metaKey||t.ctrlKey||t.altKey))&&c){var b=48;f>95&&(b=96);var E=f-b;v(),r.currentTime(r.duration()*E*.1)}for(var _ in e.customKeys){var A=e.customKeys[_];A&&A.key&&A.handler&&A.key(t)&&(v(),A.handler(r,e,t))}}}},E=!1,_=n.querySelector(".vjs-volume-menu-button")||n.querySelector(".vjs-volume-panel");null!=_&&(_.onmouseover=function(){E=!0},_.onmouseout=function(){E=!1});var A=function(t){if(f)var e=0;else e=i.activeElement;if(r.controls()&&(p||e==n||e==n.querySelector(".vjs-tech")||e==n.querySelector(".iframeblocker")||e==n.querySelector(".vjs-control-bar")||E)&&a){t=window.event||t;var u=Math.max(-1,Math.min(1,t.wheelDelta||-t.detail));t.preventDefault(),1==u?r.volume(r.volume()+o):-1==u&&r.volume(r.volume()-o)}},T=function(t,r){return e.playPauseKey(t,r)?1:e.rewindKey(t,r)?2:e.forwardKey(t,r)?3:e.volumeUpKey(t,r)?4:e.volumeDownKey(t,r)?5:e.muteKey(t,r)?6:e.fullscreenKey(t,r)?7:void 0};function R(t){return"function"==typeof u?u(t):u}function I(t){null!=t&&"function"==typeof t.then&&t.then(null,(function(t){}))}return r.on("keydown",b),r.on("dblclick",(function(t){if(null!=w&&w<="7.1.0"&&r.controls()){var e=t.relatedTarget||t.toElement||i.activeElement;e!=n&&e!=n.querySelector(".vjs-tech")&&e!=n.querySelector(".iframeblocker")||l&&(r.isFullscreen()?r.exitFullscreen():r.requestFullscreen())}})),r.on("mousewheel",A),r.on("DOMMouseScroll",A),d&&document.addEventListener("keydown",(function(t){b(t)})),this}))},"undefined"!=typeof window&&window.videojs?o(window.videojs):(n=[r(8)],void 0===(i=function(t){return o(t.default||t)}.apply(e,n))||(t.exports=i))},232:function(t,e,r){"use strict";var n=r(70),i=r.n(n),o=r(8),u=r.n(o);function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var a=1,f=function(){return a++},l=u.a.dom||u.a,c=u.a.registerPlugin||u.a.plugin,h=u.a.getComponent("Component"),p=function(t){function e(e,r){var n;n=t.call(this,e,r)||this;var i=e.$(".vjs-tech");return i.setAttribute("aria-labelledby",n.title.id),i.setAttribute("aria-describedby",n.description.id),n}s(e,t);var r=e.prototype;return r.createEl=function(){var e=l.createEl("div",{className:"vjs-dock-title",title:this.options_.title,innerHTML:this.options_.title},{id:"vjs-dock-title-"+f()}),r=l.createEl("div",{className:"vjs-dock-description",title:this.options_.description,innerHTML:this.options_.description},{id:"vjs-dock-description-"+f()}),n=t.prototype.createEl.call(this,"div",{className:"vjs-dock-text"});return this.title=e,this.description=r,n.appendChild(e),n.appendChild(r),n},r.update=function(t,e){this.title.innerHTML="",this.description.innerHTML="",this.title.appendChild(i.a.createTextNode(t)),this.description.appendChild(i.a.createTextNode(e))},e}(h),d=function(t){function e(){return t.apply(this,arguments)||this}return s(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-dock-shelf"})},e}(h);u.a.registerComponent("Title",p),u.a.registerComponent("Shelf",d);var y=function(t){var e=t||{},r={title:{title:e.title||"",description:e.description||""}},n=this.title,i=this.shelf;this.addClass("vjs-dock");var o=this.children().indexOf(this.getChild("bigPlayButton")),u=o>0?o-1:null;i||(i=this.shelf=this.addChild("shelf",r,u)),n?n.update(r.title.title,r.title.description):n=this.title=this.addChild("title",r.title,u),this.one(n,"dispose",(function(){this.title=null})),this.one(i,"dispose",(function(){this.shelf=null}))};y.VERSION="2.1.4",c("dock",y)},233:function(t,e,r){"use strict";var n=r(8),i=r.n(n),o=r(70),u=r.n(o),s=r(19),a=r.n(s);function f(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var l=function(t){function e(){return t.apply(this,arguments)||this}return f(e,t),e.prototype.handleClick=function(e){var r=this;t.prototype.handleClick.call(this),this.options_.listener(),a.a.setTimeout((function(){r.player().contextmenuUI.menu.dispose()}),1)},e}(i.a.getComponent("MenuItem")),c=i.a.getComponent("Menu"),h=i.a.dom||i.a,p=function(t){function e(e,r){var n;return(n=t.call(this,e,r)||this).dispose=i.a.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n),n.dispose),r.content.forEach((function(t){var r=function(){};"function"==typeof t.listener?r=t.listener:"string"==typeof t.href&&(r=function(){return a.a.open(t.href)}),n.addItem(new l(e,{label:t.label,listener:i.a.bind(e,r)}))})),n}return f(e,t),e.prototype.createEl=function(){var e=t.prototype.createEl.call(this);return h.addClass(e,"vjs-contextmenu-ui-menu"),e.style.left=this.options_.position.left+"px",e.style.top=this.options_.position.top+"px",e},e}(c),d="5.4.1";function y(t){return t.hasOwnProperty("contextmenuUI")&&t.contextmenuUI.hasOwnProperty("menu")&&t.contextmenuUI.menu.el()}function g(t){var e=t.tagName.toLowerCase();return"input"===e||"textarea"===e}function v(t){var e,r,n,o,s,f,l,c,h,d,g,v=this;if(y(this))this.contextmenuUI.menu.dispose();else if(!this.contextmenuUI.options_.excludeElements(t.target)){var m=(o=t,s={},f=function(t){var e;if(t.getBoundingClientRect&&t.parentNode&&(e=t.getBoundingClientRect()),!e)return{left:0,top:0};var r=u.a.documentElement,n=u.a.body,i=e.top+(a.a.pageYOffset||n.scrollTop)-(r.clientTop||n.clientTop||0);return{left:Math.round(e.left+(a.a.pageXOffset||n.scrollLeft)-(r.clientLeft||n.clientLeft||0)),top:Math.round(i)}}(n=this.el()),l=n.offsetWidth,c=n.offsetHeight,h=f.left,d=o.pageY,g=o.pageX,o.changedTouches&&(g=o.changedTouches[0].pageX,d=o.changedTouches[0].pageY),s.y=Math.max(0,Math.min(1,(f.top-d+c)/c)),s.x=Math.max(0,Math.min(1,(g-h)/l)),e=s,r=this.el().getBoundingClientRect(),{left:Math.round(r.width*e.x),top:Math.round(r.height-r.height*e.y)}),w=i.a.browser.IS_FIREFOX?u.a.documentElement:u.a;t.preventDefault();var b,E=this.contextmenuUI.menu=new p(this,{content:(b=this.contextmenuUI.content,b&&"[object Function]"==={}.toString.call(b)&&this.contextmenuUI.content()||this.contextmenuUI.content),position:m});this.contextmenuUI.closeMenu=function(){i.a.log.warn("player.contextmenuUI.closeMenu() is deprecated, please use player.contextmenuUI.menu.dispose() instead!"),E.dispose()},E.on("dispose",(function(){i.a.off(w,["click","tap"],E.dispose),v.removeChild(E),delete v.contextmenuUI.menu})),this.addChild(E);var _=E.el_.getBoundingClientRect(),A=u.a.body.getBoundingClientRect();(this.contextmenuUI.keepInside||_.right>A.width||_.bottom>A.height)&&(E.el_.style.left=Math.floor(Math.min(m.left,this.player_.currentWidth()-E.currentWidth()))+"px",E.el_.style.top=Math.floor(Math.min(m.top,this.player_.currentHeight()-E.currentHeight()))+"px"),i.a.on(w,["click","tap"],E.dispose)}}function m(t){var e=this;if(t=i.a.mergeOptions({keepInside:!0,excludeElements:g},t),!Array.isArray(t.content)&&!Array.isArray(t.content()))throw new Error('"content" required');y(this)&&(this.contextmenuUI.menu.dispose(),this.off("contextmenu",this.contextmenuUI.onContextMenu),delete this.contextmenuUI);var r=this.contextmenuUI=function(){m.apply(this,arguments)};r.onContextMenu=i.a.bind(this,v),r.content=t.content,r.keepInside=t.keepInside,r.options_=t,r.VERSION=d,this.on("contextmenu",r.onContextMenu),this.ready((function(){return e.addClass("vjs-contextmenu-ui")}))}i.a.registerPlugin("contextmenuUI",m),m.VERSION=d},234:function(t,e,r){"use strict";var n=r(8),i=r.n(n),o=r(70),u=r.n(o);function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var a=function t(e){var r=this;if(i.a.browser.IS_IE8)for(var n in r=u.a.createElement("custom"),t.prototype)"constructor"!==n&&(r[n]=t.prototype[n]);return r.id=e.id,r.label=r.id,r.width=e.width,r.height=e.height,r.bitrate=e.bandwidth,r.enabled_=e.enabled,Object.defineProperty(r,"enabled",{get:function(){return r.enabled_()},set:function(t){r.enabled_(t)}}),r},f=function(t){var e,r;function n(){var e,r=s(s(e=t.call(this)||this));if(i.a.browser.IS_IE8)for(var o in r=u.a.createElement("custom"),n.prototype)"constructor"!==o&&(r[o]=n.prototype[o]);return r.levels_=[],r.selectedIndex_=-1,Object.defineProperty(r,"selectedIndex",{get:function(){return r.selectedIndex_}}),Object.defineProperty(r,"length",{get:function(){return r.levels_.length}}),r||s(e)}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var o=n.prototype;return o.addQualityLevel=function(t){var e=this.getQualityLevelById(t.id);if(e)return e;var r=this.levels_.length;return e=new a(t),""+r in this||Object.defineProperty(this,r,{get:function(){return this.levels_[r]}}),this.levels_.push(e),this.trigger({qualityLevel:e,type:"addqualitylevel"}),e},o.removeQualityLevel=function(t){for(var e=null,r=0,n=this.length;r<n;r++)if(this[r]===t){e=this.levels_.splice(r,1)[0],this.selectedIndex_===r?this.selectedIndex_=-1:this.selectedIndex_>r&&this.selectedIndex_--;break}return e&&this.trigger({qualityLevel:t,type:"removequalitylevel"}),e},o.getQualityLevelById=function(t){for(var e=0,r=this.length;e<r;e++){var n=this[e];if(n.id===t)return n}return null},o.dispose=function(){this.selectedIndex_=-1,this.levels_.length=0},n}(i.a.EventTarget);for(var l in f.prototype.allowedEvents_={change:"change",addqualitylevel:"addqualitylevel",removequalitylevel:"removequalitylevel"},f.prototype.allowedEvents_)f.prototype["on"+l]=null;var c="2.1.0",h=function(t){return e=this,i.a.mergeOptions({},t),r=e.qualityLevels,n=new f,e.on("dispose",(function t(){n.dispose(),e.qualityLevels=r,e.off("dispose",t)})),e.qualityLevels=function(){return n},e.qualityLevels.VERSION=c,n;var e,r,n};(i.a.registerPlugin||i.a.plugin)("qualityLevels",h),h.VERSION=c},236:function(t,e,r){"use strict";e.byteLength=function(t){var e=f(t),r=e[1];return 3*(e[0]+r)/4-r},e.toByteArray=function(t){var e,r,n=f(t),u=n[0],s=n[1],a=new o(function(t,e,r){return 3*(e+r)/4-r}(0,u,s)),l=0,c=s>0?u-4:u;for(r=0;r<c;r+=4)e=i[t.charCodeAt(r)]<<18|i[t.charCodeAt(r+1)]<<12|i[t.charCodeAt(r+2)]<<6|i[t.charCodeAt(r+3)],a[l++]=e>>16&255,a[l++]=e>>8&255,a[l++]=255&e;return 2===s&&(e=i[t.charCodeAt(r)]<<2|i[t.charCodeAt(r+1)]>>4,a[l++]=255&e),1===s&&(e=i[t.charCodeAt(r)]<<10|i[t.charCodeAt(r+1)]<<4|i[t.charCodeAt(r+2)]>>2,a[l++]=e>>8&255,a[l++]=255&e),a},e.fromByteArray=function(t){for(var e,r=t.length,i=r%3,o=[],u=16383,s=0,a=r-i;s<a;s+=u)o.push(l(t,s,s+u>a?a:s+u));return 1===i?o.push(n[(e=t[r-1])>>2]+n[e<<4&63]+"=="):2===i&&o.push(n[(e=(t[r-2]<<8)+t[r-1])>>10]+n[e>>4&63]+n[e<<2&63]+"="),o.join("")};for(var n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,a=u.length;s<a;++s)n[s]=u[s],i[u.charCodeAt(s)]=s;function f(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function l(t,e,r){for(var i,o=[],u=e;u<r;u+=3)o.push(n[(i=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]))>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return o.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},237:function(t,e){e.read=function(t,e,r,n,i){var o,u,s=8*i-n-1,a=(1<<s)-1,f=a>>1,l=-7,c=r?i-1:0,h=r?-1:1,p=t[e+c];for(c+=h,o=p&(1<<-l)-1,p>>=-l,l+=s;l>0;o=256*o+t[e+c],c+=h,l-=8);for(u=o&(1<<-l)-1,o>>=-l,l+=n;l>0;u=256*u+t[e+c],c+=h,l-=8);if(0===o)o=1-f;else{if(o===a)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),o-=f}return(p?-1:1)*u*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var u,s,a,f=8*o-i-1,l=(1<<f)-1,c=l>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,u=l):(u=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-u))<1&&(u--,a*=2),(e+=u+c>=1?h/a:h*Math.pow(2,1-c))*a>=2&&(u++,a/=2),u+c>=l?(s=0,u=l):u+c>=1?(s=(e*a-1)*Math.pow(2,i),u+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,i),u=0));i>=8;t[r+p]=255&s,p+=d,s/=256,i-=8);for(u=u<<i|s,f+=i;f>0;t[r+p]=255&u,p+=d,u/=256,f-=8);t[r+p-d]|=128*y}}}]);