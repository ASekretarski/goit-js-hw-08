!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(O,t),d?y(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function O(){var e=p();if(h(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?y(e):(r=i=void 0,u)}function T(){var e=p(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=u.test(e);return o||f.test(e)?l(e.slice(2),o?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form"),h=document.querySelector('input[name="email"]'),O=document.querySelector('textarea[name="message"]');var w=n((function(){var e={email:h.value,message:O.value},t=JSON.stringify(e);localStorage.setItem("feedback-form-state",t)}),500);!function(){try{j.addEventListener("input",w),function(){if(null!==localStorage.getItem("feedback-form-state")){var e=JSON.parse(localStorage.getItem("feedback-form-state"));h.value=e.email,O.value=e.message}}()}catch(e){alert("Local storage data incorrect, please provide your details again.")}}(),j.addEventListener("submit",(function(e){e.preventDefault();var t={email:h.value,message:O.value};console.log(t),localStorage.removeItem("feedback-form-state"),h.value="",O.value=""}))}();
//# sourceMappingURL=03-feedback.4500a6c8.js.map