var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),a=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return c.Date.now()};function m(e,t,n){var o,r,i,u,f,c,a=0,m=!1,y=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,a=t,u=e.apply(i,n)}function T(e){return a=e,f=setTimeout(h,t),m?g(e):u}function j(e){var n=e-c;return void 0===c||n>=t||n<0||y&&e-a>=i}function h(){var e=d();if(j(e))return O(e);f=setTimeout(h,function(e){var n=t-(e-c);return y?s(n,i-(e-a)):n}(e))}function O(e){return f=void 0,b&&o?g(e):(o=r=void 0,u)}function S(){var e=d(),n=j(e);if(o=arguments,r=this,c=e,n){if(void 0===f)return T(c);if(y)return f=setTimeout(h,t),g(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=p(t)||0,v(n)&&(m=!!n.leading,i=(y="maxWait"in n)?l(p(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=r=f=void 0},S.flush=function(){return void 0===f?u:O(d())},S}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==a.call(e)}(e))return NaN;if(v(e)){var u="function"==typeof e.valueOf?e.valueOf():e;e=v(u)?u+"":u}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||r.test(e)?i(e.slice(2),f?2:8):n.test(e)?NaN:+e}const y=document.querySelector(".feedback-form");document.querySelector("input"),document.querySelector("textarea"),document.querySelector("button");y.addEventListener("input",(function(e){const{elements:{email:t,message:n}}=e.currentTarget;console.log(t.value),console.log(n.value),localStorage.setItem("feedback-form-state",JSON.stringify(e.currentTarget.email,e.currentTarget.message))}));
//# sourceMappingURL=03-feedback.0afa873e.js.map