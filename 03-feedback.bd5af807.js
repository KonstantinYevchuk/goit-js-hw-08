var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=a||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var o,r,i,f,a,u,c=0,l=!1,p=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function h(e){return c=e,a=setTimeout(O,t),l?y(e):f}function j(e){var n=e-u;return void 0===u||n>=t||n<0||p&&e-c>=i}function O(){var e=m();if(j(e))return S(e);a=setTimeout(O,function(e){var n=t-(e-u);return p?d(n,i-(e-c)):n}(e))}function S(e){return a=void 0,g&&o?y(e):(o=r=void 0,f)}function T(){var e=m(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return h(u);if(p)return a=setTimeout(O,t),y(u)}return void 0===a&&(a=setTimeout(O,t)),f}return t=b(t)||0,v(n)&&(l=!!n.leading,i=(p="maxWait"in n)?s(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},T.flush=function(){return void 0===a?f:S(m())},T}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var a=r.test(e);return a||i.test(e)?f(e.slice(2),a?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const g=document.querySelector(".feedback-form"),y=(document.querySelector(".feedback-form input"),document.querySelector(".feedback-form textarea"),{});g.addEventListener("input",t((function(e){y[e.target.name]=e.target.value;const t=JSON.stringify(y);localStorage.setItem("feedback-form-state",t)}),500)),g.addEventListener("submit",(function(e){e.preventDefault(),console.log(y),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),function(){try{const e=localStorage.getItem("feedback-form-state");e&&(y=JSON.parse(e),Object.fromEntries(y).forEach((([e,t])=>{g.elements[e]=t.trim()})))}catch(e){console.log(e)}}();
//# sourceMappingURL=03-feedback.bd5af807.js.map