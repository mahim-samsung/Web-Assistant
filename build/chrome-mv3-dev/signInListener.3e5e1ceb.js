(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fxHOv":[function(require,module,exports) {
var p = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var y = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var M = new Set(p), _ = (e)=>M.has(e), z = p.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var X = _("--dry-run"), d = ()=>_("--verbose") || y().VERBOSE === "true", G = d();
var u = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var v = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), x = (...e)=>u("\uD83D\uDD35 INFO", ...e), m = (...e)=>u("\uD83D\uDFE0 WARN", ...e), D = 0, c = (...e)=>d() && u(`\u{1F7E1} ${D++}`, ...e);
var s = {
    "isContentScript": true,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "script-runtime"
    ],
    "host": "localhost",
    "port": 60492,
    "entryFilePath": "/Users/mahbubislammahim/Desktop/Development/Webpilot/src/contents/signInListener.ts",
    "bundleId": "aabab80f3e5e1ceb",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 60491
};
module.bundle.HMR_BUNDLE_ID = s.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: s.verbose
    }
};
var S = module.bundle.Module;
function H(e) {
    S.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = H;
module.bundle.hotData = {};
var l = globalThis.browser || globalThis.chrome || null;
function b() {
    return !s.host || s.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : s.host;
}
function C() {
    return s.port || location.port;
}
var E = "__plasmo_runtime_script_";
function L(e, t) {
    let { modules: o  } = e;
    return o ? !!o[t] : !1;
}
function I(e = C()) {
    let t = b();
    return `${s.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function O(e) {
    typeof e.message == "string" && v("[plasmo/parcel-runtime]: " + e.message);
}
function P(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(I());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let i of r.diagnostics.ansi){
            let w = i.codeframe || i.stack;
            m("[plasmo/parcel-runtime]: " + i.message + `
` + w + `

` + i.hints.join(`
`));
        }
    }), t.addEventListener("error", O), t.addEventListener("open", ()=>{
        x(`[plasmo/parcel-runtime]: Connected to HMR server for ${s.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        m(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${s.entryFilePath}`);
    }), t;
}
var n = "__plasmo-loading__";
function g() {
    return document.getElementById(n);
}
function f() {
    return !g();
}
function B() {
    let e = document.createElement("div");
    return e.id = n, e.innerHTML = `
  <style>
    #${n} {
      background: #f3f3f3;
      color: #333;
      border: 1px solid #333;
      box-shadow: #333 4.7px 4.7px;
    }

    #${n}:hover {
      background: #e3e3e3;
      color: #444;
    }

    @keyframes plasmo-loading-animate-svg-fill {
      0% {
        fill: transparent;
      }
    
      100% {
        fill: #333;
      }
    }

    #${n} .svg-elem-1 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
    }

    #${n} .svg-elem-2 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
    }
    
    #${n} .svg-elem-3 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
    }

    #${n} .hidden {
      display: none;
    }

  </style>
  
  <svg height="32" width="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>
  <span class="hidden">Context Invalidated, Press to Reload</span>
  `, e.style.pointerEvents = "none", e.style.position = "fixed", e.style.bottom = "14.7px", e.style.right = "14.7px", e.style.fontFamily = "sans-serif", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.padding = "14.7px", e.style.gap = "14.7px", e.style.borderRadius = "4.7px", e.style.zIndex = "2147483647", e.style.opacity = "0", e.style.transition = "all 0.47s ease-in-out", e;
}
function $(e) {
    return new Promise((t)=>{
        document.documentElement ? (f() && (document.documentElement.appendChild(e), t()), t()) : globalThis.addEventListener("DOMContentLoaded", ()=>{
            f() && document.documentElement.appendChild(e), t();
        });
    });
}
var k = ()=>{
    let e;
    if (f()) {
        let t = B();
        e = $(t);
    }
    return {
        show: async ({ reloadButton: t = !1  } = {})=>{
            await e;
            let o = g();
            o.style.opacity = "1", t && (o.onclick = (r)=>{
                r.stopPropagation(), globalThis.location.reload();
            }, o.querySelector("span").classList.remove("hidden"), o.style.cursor = "pointer", o.style.pointerEvents = "all");
        },
        hide: async ()=>{
            await e;
            let t = g();
            t.style.opacity = "0";
        }
    };
};
var F = `${E}${module.id}__`, a, T = !1, A = k();
async function h() {
    c("Script Runtime - reloading"), T ? globalThis.location?.reload?.() : A.show({
        reloadButton: !0
    });
}
function R() {
    a?.disconnect(), a = l?.runtime.connect({
        name: F
    }), a.onDisconnect.addListener(()=>{
        h();
    }), a.onMessage.addListener((e)=>{
        e.__plasmo_cs_reload__ && h(), e.__plasmo_cs_active_tab__ && (T = !0);
    });
}
function N() {
    if (l?.runtime) try {
        R(), setInterval(R, 24e3);
    } catch  {
        return;
    }
}
N();
P(async (e)=>{
    c("Script runtime - on updated assets"), e.filter((o)=>o.envHash === s.envHash).some((o)=>L(module.bundle, o.id)) && (A.show(), l?.runtime ? a.postMessage({
        __plasmo_cs_changed__: !0
    }) : setTimeout(()=>{
        h();
    }, 4700));
});

},{}],"kBFfa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var _messaging = require("@plasmohq/messaging");
const config = {
    matches: [
        "https://account.webpilot.ai/*",
        "http://localhost/*",
        "https://openai.com/*"
    ]
};
const handleMessage = (event)=>{
    if (event.source === window && event.data && event.data.credential) // Send the message to the background script
    (0, _messaging.sendToBackground)({
        name: "signInSuccess",
        body: {
            credential: event.data.credential
        }
    });
};
window.addEventListener("message", handleMessage);

},{"@plasmohq/messaging":"k3omK","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"k3omK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "relay", ()=>S);
parcelHelpers.export(exports, "relayMessage", ()=>u);
parcelHelpers.export(exports, "sendToActiveContentScript", ()=>h);
parcelHelpers.export(exports, "sendToBackground", ()=>x);
parcelHelpers.export(exports, "sendToBackgroundViaRelay", ()=>w);
parcelHelpers.export(exports, "sendToContentScript", ()=>M);
parcelHelpers.export(exports, "sendViaRelay", ()=>O);
var _nanoid = require("nanoid");
var l = globalThis.browser?.runtime || globalThis.chrome?.runtime, d = globalThis.browser?.tabs || globalThis.chrome?.tabs, m = ()=>{
    if (!l) throw new Error("Extension runtime is not available");
    return l;
}, i = ()=>{
    if (!d) throw new Error("Extension tabs API is not available");
    return d;
}, c = async ()=>{
    let e = i(), [a] = await e.query({
        active: !0,
        currentWindow: !0
    });
    return a;
}, g = (e, a)=>!a.__internal && e.source === globalThis.window && e.data.name === a.name && (a.relayId === void 0 || e.data.relayId === a.relayId);
var y = (e, a, n = globalThis.window)=>{
    let r = async (s)=>{
        if (g(s, e) && !s.data.relayed) {
            let o = {
                name: e.name,
                relayId: e.relayId,
                body: s.data.body
            }, t = await a?.(o);
            n.postMessage({
                name: e.name,
                relayId: e.relayId,
                instanceId: s.data.instanceId,
                body: t,
                relayed: !0
            }, {
                targetOrigin: e.targetOrigin || "/"
            });
        }
    };
    return n.addEventListener("message", r), ()=>n.removeEventListener("message", r);
}, p = (e, a = globalThis.window)=>new Promise((n, r)=>{
        let s = (0, _nanoid.nanoid)(), o = new AbortController;
        a.addEventListener("message", (t)=>{
            g(t, e) && t.data.relayed && t.data.instanceId === s && (n(t.data.body), o.abort());
        }, {
            signal: o.signal
        }), a.postMessage({
            ...e,
            instanceId: s
        }, {
            targetOrigin: e.targetOrigin || "/"
        });
    });
var x = async (e)=>m().sendMessage(e), M = async (e)=>{
    let a = typeof e.tabId == "number" ? e.tabId : (await c()).id;
    return i().sendMessage(a, e);
}, h = M, u = (e)=>y(e, x), S = u, w = p, O = w;

},{"nanoid":"E2pqo","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"E2pqo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "urlAlphabet", ()=>(0, _indexJs.urlAlphabet));
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "customRandom", ()=>customRandom);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet);
parcelHelpers.export(exports, "nanoid", ()=>nanoid);
var _indexJs = require("./url-alphabet/index.js");
let random = (bytes)=>crypto.getRandomValues(new Uint8Array(bytes));
let customRandom = (alphabet, defaultSize, getRandom)=>{
    let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
    let step = -~(1.6 * mask * defaultSize / alphabet.length);
    return (size = defaultSize)=>{
        let id = "";
        while(true){
            let bytes = getRandom(step);
            let j = step;
            while(j--){
                id += alphabet[bytes[j] & mask] || "";
                if (id.length === size) return id;
            }
        }
    };
};
let customAlphabet = (alphabet, size = 21)=>customRandom(alphabet, size, random);
let nanoid = (size = 21)=>crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte)=>{
        byte &= 63;
        if (byte < 36) id += byte.toString(36);
        else if (byte < 62) id += (byte - 26).toString(36).toUpperCase();
        else if (byte > 62) id += "-";
        else id += "_";
        return id;
    }, "");

},{"./url-alphabet/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"boKlo":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["fxHOv","kBFfa"], "kBFfa", "parcelRequire3cd7")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUs7WUFDL0IsWUFBWTtZQUNaLEtBQUs7Z0JBQ0gsT0FBTyxNQUFNLENBQUMsSUFBSTtZQUNwQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFQSxRQUFRLFNBQVMsU0FBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUc7SUFDNUMsT0FBTyxlQUFlLE1BQU0sVUFBVTtRQUNwQyxZQUFZO1FBQ1osS0FBSztJQUNQO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTJhYzI3YjViZTljZWEwZTMuanMiLCJzcmMvY29udGVudHMvc2lnbkluTGlzdGVuZXIudHMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL21lc3NhZ2luZy9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHA9dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuYXJndjpbXTt2YXIgeT0oKT0+dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuZW52Ont9O3ZhciBNPW5ldyBTZXQocCksXz1lPT5NLmhhcyhlKSx6PXAuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgWD1fKFwiLS1kcnktcnVuXCIpLGQ9KCk9Pl8oXCItLXZlcmJvc2VcIil8fHkoKS5WRVJCT1NFPT09XCJ0cnVlXCIsRz1kKCk7dmFyIHU9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHY9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx4PSguLi5lKT0+dShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLG09KC4uLmUpPT51KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksRD0wLGM9KC4uLmUpPT5kKCkmJnUoYFxcdXsxRjdFMX0gJHtEKyt9YCwuLi5lKTt2YXIgcz17XCJpc0NvbnRlbnRTY3JpcHRcIjp0cnVlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInNjcmlwdC1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6NjA0OTIsXCJlbnRyeUZpbGVQYXRoXCI6XCIvVXNlcnMvbWFoYnViaXNsYW1tYWhpbS9EZXNrdG9wL0RldmVsb3BtZW50L1dlYnBpbG90L3NyYy9jb250ZW50cy9zaWduSW5MaXN0ZW5lci50c1wiLFwiYnVuZGxlSWRcIjpcImFhYmFiODBmM2U1ZTFjZWJcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjo2MDQ5MX07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPXMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpzLnZlcmJvc2V9fTt2YXIgUz1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBIKGUpe1MuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9SDttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGw9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBiKCl7cmV0dXJuIXMuaG9zdHx8cy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6cy5ob3N0fWZ1bmN0aW9uIEMoKXtyZXR1cm4gcy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBFPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7ZnVuY3Rpb24gTChlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIEkoZT1DKCkpe2xldCB0PWIoKTtyZXR1cm5gJHtzLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBPKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJnYoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBQKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChJKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IGkgb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgdz1pLmNvZGVmcmFtZXx8aS5zdGFjazttKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2kubWVzc2FnZStgXG5gK3crYFxuXG5gK2kuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixPKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9Pnt4KGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7cy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e20oYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtzLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBuPVwiX19wbGFzbW8tbG9hZGluZ19fXCI7ZnVuY3Rpb24gZygpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuKX1mdW5jdGlvbiBmKCl7cmV0dXJuIWcoKX1mdW5jdGlvbiBCKCl7bGV0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5pZD1uLGUuaW5uZXJIVE1MPWBcbiAgPHN0eWxlPlxuICAgICMke259IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgICBib3gtc2hhZG93OiAjMzMzIDQuN3B4IDQuN3B4O1xuICAgIH1cblxuICAgICMke259OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgICBjb2xvcjogIzQ0NDtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwge1xuICAgICAgMCUge1xuICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICBcbiAgICAgIDEwMCUge1xuICAgICAgICBmaWxsOiAjMzMzO1xuICAgICAgfVxuICAgIH1cblxuICAgICMke259IC5zdmctZWxlbS0xIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAwLjhzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7bn0gLnN2Zy1lbGVtLTIge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG4gICAgXG4gICAgIyR7bn0gLnN2Zy1lbGVtLTMge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDFzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7bn0gLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICA8L3N0eWxlPlxuICBcbiAgPHN2ZyBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI2NCAzNTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTEzOS4yMjEgMjgyLjI0M0MxNTQuMjUyIDI4Mi4yNDMgMTY2LjkwMyAyOTQuODQ5IDE2MS4zMzggMzA4LjgxMkMxNTkuNDg5IDMxMy40NTQgMTU3LjE1IDMxNy45MTMgMTU0LjM0NyAzMjIuMTA5QzE0Ni40NjQgMzMzLjkwOSAxMzUuMjYgMzQzLjEwNyAxMjIuMTUxIDM0OC41MzhDMTA5LjA0MyAzNTMuOTY5IDk0LjYxODIgMzU1LjM5IDgwLjcwMjIgMzUyLjYyMUM2Ni43ODYxIDM0OS44NTIgNTQuMDAzNCAzNDMuMDE4IDQzLjk3MDUgMzMyLjk4M0MzMy45Mzc1IDMyMi45NDcgMjcuMTA1IDMxMC4xNjIgMjQuMzM2OSAyOTYuMjQyQzIxLjU2ODkgMjgyLjMyMyAyMi45ODk1IDI2Ny44OTUgMjguNDE5MyAyNTQuNzgzQzMzLjg0OTEgMjQxLjY3MSA0My4wNDQxIDIzMC40NjQgNTQuODQxNiAyMjIuNTc5QzU5LjAzNTMgMjE5Ljc3NyA2My40OTA4IDIxNy40MzggNjguMTI5NSAyMTUuNTg4QzgyLjA5MTUgMjEwLjAyMSA5NC42OTc4IDIyMi42NzEgOTQuNjk3OCAyMzcuNzAzTDk0LjY5NzggMjU1LjAyN0M5NC42OTc4IDI3MC4wNTggMTA2Ljg4MyAyODIuMjQzIDEyMS45MTQgMjgyLjI0M0gxMzkuMjIxWlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0xXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTE5Mi4yNjEgMTQyLjAyOEMxOTIuMjYxIDEyNi45OTYgMjA0Ljg2NyAxMTQuMzQ2IDIxOC44MjkgMTE5LjkxM0MyMjMuNDY4IDEyMS43NjMgMjI3LjkyMyAxMjQuMTAyIDIzMi4xMTcgMTI2LjkwNEMyNDMuOTE1IDEzNC43ODkgMjUzLjExIDE0NS45OTYgMjU4LjUzOSAxNTkuMTA4QzI2My45NjkgMTcyLjIyIDI2NS4zOSAxODYuNjQ4IDI2Mi42MjIgMjAwLjU2N0MyNTkuODU0IDIxNC40ODcgMjUzLjAyMSAyMjcuMjcyIDI0Mi45ODggMjM3LjMwOEMyMzIuOTU1IDI0Ny4zNDMgMjIwLjE3MyAyNTQuMTc3IDIwNi4yNTYgMjU2Ljk0NkMxOTIuMzQgMjU5LjcxNSAxNzcuOTE2IDI1OC4yOTQgMTY0LjgwNyAyNTIuODYzQzE1MS42OTkgMjQ3LjQzMiAxNDAuNDk1IDIzOC4yMzQgMTMyLjYxMiAyMjYuNDM0QzEyOS44MDggMjIyLjIzOCAxMjcuNDcgMjE3Ljc3OSAxMjUuNjIgMjEzLjEzN0MxMjAuMDU2IDE5OS4xNzQgMTMyLjcwNyAxODYuNTY4IDE0Ny43MzggMTg2LjU2OEwxNjUuMDQ0IDE4Ni41NjhDMTgwLjA3NiAxODYuNTY4IDE5Mi4yNjEgMTc0LjM4MyAxOTIuMjYxIDE1OS4zNTJMMTkyLjI2MSAxNDIuMDI4WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0yXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTk1LjY1MjIgMTY0LjEzNUM5NS42NTIyIDE3OS4xNjcgODMuMjI3OSAxOTEuNzI1IDY4LjgwMTMgMTg3LjUwNUM1OS41MTQ1IDE4NC43ODggNTAuNjQzMiAxODAuNjYzIDQyLjUxMDYgMTc1LjIyN0MyNi43ODA2IDE2NC43MTQgMTQuNTIwNiAxNDkuNzcyIDcuMjgwODkgMTMyLjI4OUMwLjA0MTE4MyAxMTQuODA3IC0xLjg1MzA1IDk1LjU2OTcgMS44Mzc3MiA3Ny4wMTA0QzUuNTI4NDkgNTguNDUxMSAxNC42Mzg1IDQxLjQwMzMgMjguMDE1NyAyOC4wMjI4QzQxLjM5MyAxNC42NDIzIDU4LjQzNjYgNS41MzAwNiA3Ni45OTE0IDEuODM4MzlDOTUuNTQ2MSAtMS44NTMyOSAxMTQuNzc5IDAuMDQxNDE2MiAxMzIuMjU3IDcuMjgyOUMxNDkuNzM1IDE0LjUyNDQgMTY0LjY3NCAyNi43ODc0IDE3NS4xODQgNDIuNTIxMkMxODAuNjIgNTAuNjU3NiAxODQuNzQ0IDU5LjUzMzIgMTg3LjQ2IDY4LjgyNDVDMTkxLjY3OCA4My4yNTE5IDE3OS4xMTkgOTUuNjc1OSAxNjQuMDg4IDk1LjY3NTlMMTIyLjg2OSA5NS42NzU5QzEwNy44MzcgOTUuNjc1OSA5NS42NTIyIDEwNy44NjEgOTUuNjUyMiAxMjIuODkyTDk1LjY1MjIgMTY0LjEzNVpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tM1wiPjwvcGF0aD5cbiAgPC9zdmc+XG4gIDxzcGFuIGNsYXNzPVwiaGlkZGVuXCI+Q29udGV4dCBJbnZhbGlkYXRlZCwgUHJlc3MgdG8gUmVsb2FkPC9zcGFuPlxuICBgLGUuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIixlLnN0eWxlLnBvc2l0aW9uPVwiZml4ZWRcIixlLnN0eWxlLmJvdHRvbT1cIjE0LjdweFwiLGUuc3R5bGUucmlnaHQ9XCIxNC43cHhcIixlLnN0eWxlLmZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCIsZS5zdHlsZS5kaXNwbGF5PVwiZmxleFwiLGUuc3R5bGUuanVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIixlLnN0eWxlLmFsaWduSXRlbXM9XCJjZW50ZXJcIixlLnN0eWxlLnBhZGRpbmc9XCIxNC43cHhcIixlLnN0eWxlLmdhcD1cIjE0LjdweFwiLGUuc3R5bGUuYm9yZGVyUmFkaXVzPVwiNC43cHhcIixlLnN0eWxlLnpJbmRleD1cIjIxNDc0ODM2NDdcIixlLnN0eWxlLm9wYWNpdHk9XCIwXCIsZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDAuNDdzIGVhc2UtaW4tb3V0XCIsZX1mdW5jdGlvbiAkKGUpe3JldHVybiBuZXcgUHJvbWlzZSh0PT57ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50PyhmKCkmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpKSx0KCkpOmdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKT0+e2YoKSYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpLHQoKX0pfSl9dmFyIGs9KCk9PntsZXQgZTtpZihmKCkpe2xldCB0PUIoKTtlPSQodCl9cmV0dXJue3Nob3c6YXN5bmMoe3JlbG9hZEJ1dHRvbjp0PSExfT17fSk9Pnthd2FpdCBlO2xldCBvPWcoKTtvLnN0eWxlLm9wYWNpdHk9XCIxXCIsdCYmKG8ub25jbGljaz1yPT57ci5zdG9wUHJvcGFnYXRpb24oKSxnbG9iYWxUaGlzLmxvY2F0aW9uLnJlbG9hZCgpfSxvLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIiksby5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCIsby5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCIpfSxoaWRlOmFzeW5jKCk9Pnthd2FpdCBlO2xldCB0PWcoKTt0LnN0eWxlLm9wYWNpdHk9XCIwXCJ9fX07dmFyIEY9YCR7RX0ke21vZHVsZS5pZH1fX2AsYSxUPSExLEE9aygpO2FzeW5jIGZ1bmN0aW9uIGgoKXtjKFwiU2NyaXB0IFJ1bnRpbWUgLSByZWxvYWRpbmdcIiksVD9nbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpOkEuc2hvdyh7cmVsb2FkQnV0dG9uOiEwfSl9ZnVuY3Rpb24gUigpe2E/LmRpc2Nvbm5lY3QoKSxhPWw/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpGfSksYS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntoKCl9KSxhLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihlPT57ZS5fX3BsYXNtb19jc19yZWxvYWRfXyYmaCgpLGUuX19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fJiYoVD0hMCl9KX1mdW5jdGlvbiBOKCl7aWYobD8ucnVudGltZSl0cnl7UigpLHNldEludGVydmFsKFIsMjRlMyl9Y2F0Y2h7cmV0dXJufX1OKCk7UChhc3luYyBlPT57YyhcIlNjcmlwdCBydW50aW1lIC0gb24gdXBkYXRlZCBhc3NldHNcIiksZS5maWx0ZXIobz0+by5lbnZIYXNoPT09cy5lbnZIYXNoKS5zb21lKG89PkwobW9kdWxlLmJ1bmRsZSxvLmlkKSkmJihBLnNob3coKSxsPy5ydW50aW1lP2EucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2NoYW5nZWRfXzohMH0pOnNldFRpbWVvdXQoKCk9PntoKCl9LDQ3MDApKX0pO1xuIiwiaW1wb3J0IHtzZW5kVG9CYWNrZ3JvdW5kfSBmcm9tICdAcGxhc21vaHEvbWVzc2FnaW5nJ1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVzOiBbJ2h0dHBzOi8vYWNjb3VudC53ZWJwaWxvdC5haS8qJywgJ2h0dHA6Ly9sb2NhbGhvc3QvKicsICdodHRwczovL29wZW5haS5jb20vKiddLFxufVxuXG5jb25zdCBoYW5kbGVNZXNzYWdlID0gZXZlbnQgPT4ge1xuICBpZiAoZXZlbnQuc291cmNlID09PSB3aW5kb3cgJiYgZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLmNyZWRlbnRpYWwpIHtcbiAgICAvLyBTZW5kIHRoZSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdFxuICAgIHNlbmRUb0JhY2tncm91bmQoe1xuICAgICAgbmFtZTogJ3NpZ25JblN1Y2Nlc3MnLFxuICAgICAgYm9keToge1xuICAgICAgICBjcmVkZW50aWFsOiBldmVudC5kYXRhLmNyZWRlbnRpYWwsXG4gICAgICB9LFxuICAgIH0pXG4gICAgLy8gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe2NyZWRlbnRpYWw6IGV2ZW50LmRhdGEuY3JlZGVudGlhbH0pXG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuIiwiaW1wb3J0e25hbm9pZCBhcyBifWZyb21cIm5hbm9pZFwiO3ZhciBsPWdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWUsZD1nbG9iYWxUaGlzLmJyb3dzZXI/LnRhYnN8fGdsb2JhbFRoaXMuY2hyb21lPy50YWJzLG09KCk9PntpZighbCl0aHJvdyBuZXcgRXJyb3IoXCJFeHRlbnNpb24gcnVudGltZSBpcyBub3QgYXZhaWxhYmxlXCIpO3JldHVybiBsfSxpPSgpPT57aWYoIWQpdGhyb3cgbmV3IEVycm9yKFwiRXh0ZW5zaW9uIHRhYnMgQVBJIGlzIG5vdCBhdmFpbGFibGVcIik7cmV0dXJuIGR9LGM9YXN5bmMoKT0+e2xldCBlPWkoKSxbYV09YXdhaXQgZS5xdWVyeSh7YWN0aXZlOiEwLGN1cnJlbnRXaW5kb3c6ITB9KTtyZXR1cm4gYX0sZz0oZSxhKT0+IWEuX19pbnRlcm5hbCYmZS5zb3VyY2U9PT1nbG9iYWxUaGlzLndpbmRvdyYmZS5kYXRhLm5hbWU9PT1hLm5hbWUmJihhLnJlbGF5SWQ9PT12b2lkIDB8fGUuZGF0YS5yZWxheUlkPT09YS5yZWxheUlkKTt2YXIgeT0oZSxhLG49Z2xvYmFsVGhpcy53aW5kb3cpPT57bGV0IHI9YXN5bmMgcz0+e2lmKGcocyxlKSYmIXMuZGF0YS5yZWxheWVkKXtsZXQgbz17bmFtZTplLm5hbWUscmVsYXlJZDplLnJlbGF5SWQsYm9keTpzLmRhdGEuYm9keX0sdD1hd2FpdCBhPy4obyk7bi5wb3N0TWVzc2FnZSh7bmFtZTplLm5hbWUscmVsYXlJZDplLnJlbGF5SWQsaW5zdGFuY2VJZDpzLmRhdGEuaW5zdGFuY2VJZCxib2R5OnQscmVsYXllZDohMH0se3RhcmdldE9yaWdpbjplLnRhcmdldE9yaWdpbnx8XCIvXCJ9KX19O3JldHVybiBuLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsciksKCk9Pm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixyKX0scD0oZSxhPWdsb2JhbFRoaXMud2luZG93KT0+bmV3IFByb21pc2UoKG4scik9PntsZXQgcz1iKCksbz1uZXcgQWJvcnRDb250cm9sbGVyO2EuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix0PT57Zyh0LGUpJiZ0LmRhdGEucmVsYXllZCYmdC5kYXRhLmluc3RhbmNlSWQ9PT1zJiYobih0LmRhdGEuYm9keSksby5hYm9ydCgpKX0se3NpZ25hbDpvLnNpZ25hbH0pLGEucG9zdE1lc3NhZ2Uoey4uLmUsaW5zdGFuY2VJZDpzfSx7dGFyZ2V0T3JpZ2luOmUudGFyZ2V0T3JpZ2lufHxcIi9cIn0pfSk7dmFyIHg9YXN5bmMgZT0+bSgpLnNlbmRNZXNzYWdlKGUpLE09YXN5bmMgZT0+e2xldCBhPXR5cGVvZiBlLnRhYklkPT1cIm51bWJlclwiP2UudGFiSWQ6KGF3YWl0IGMoKSkuaWQ7cmV0dXJuIGkoKS5zZW5kTWVzc2FnZShhLGUpfSxoPU0sdT1lPT55KGUseCksUz11LHc9cCxPPXc7ZXhwb3J0e1MgYXMgcmVsYXksdSBhcyByZWxheU1lc3NhZ2UsaCBhcyBzZW5kVG9BY3RpdmVDb250ZW50U2NyaXB0LHggYXMgc2VuZFRvQmFja2dyb3VuZCx3IGFzIHNlbmRUb0JhY2tncm91bmRWaWFSZWxheSxNIGFzIHNlbmRUb0NvbnRlbnRTY3JpcHQsTyBhcyBzZW5kVmlhUmVsYXl9O1xuIiwiZXhwb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmV4cG9ydCBsZXQgcmFuZG9tID0gYnl0ZXMgPT4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShieXRlcykpXG5leHBvcnQgbGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUsIGdldFJhbmRvbSkgPT4ge1xuICBsZXQgbWFzayA9ICgyIDw8IChNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSkgLSAxXG4gIGxldCBzdGVwID0gLX4oKDEuNiAqIG1hc2sgKiBkZWZhdWx0U2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICBsZXQgaiA9IHN0ZXBcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbal0gJiBtYXNrXSB8fCAnJ1xuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSBzaXplKSByZXR1cm4gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBsZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUgPSAyMSkgPT5cbiAgY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5leHBvcnQgbGV0IG5hbm9pZCA9IChzaXplID0gMjEpID0+XG4gIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpLnJlZHVjZSgoaWQsIGJ5dGUpID0+IHtcbiAgICBieXRlICY9IDYzXG4gICAgaWYgKGJ5dGUgPCAzNikge1xuICAgICAgaWQgKz0gYnl0ZS50b1N0cmluZygzNilcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPCA2Mikge1xuICAgICAgaWQgKz0gKGJ5dGUgLSAyNikudG9TdHJpbmcoMzYpLnRvVXBwZXJDYXNlKClcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPiA2Mikge1xuICAgICAgaWQgKz0gJy0nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlkICs9ICdfJ1xuICAgIH1cbiAgICByZXR1cm4gaWRcbiAgfSwgJycpXG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbkluTGlzdGVuZXIuM2U1ZTFjZWIuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);