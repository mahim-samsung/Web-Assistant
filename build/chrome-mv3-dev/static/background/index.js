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
})({"4SVHF":[function(require,module,exports) {
var g = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var _ = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var w = new Set(g), y = (e)=>w.has(e), j = g.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var G = y("--dry-run"), m = ()=>y("--verbose") || _().VERBOSE === "true", U = m();
var f = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var b = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>f("\uD83D\uDD35 INFO", ...e), h = (...e)=>f("\uD83D\uDFE0 WARN", ...e), B = 0, i = (...e)=>m() && f(`\u{1F7E1} ${B++}`, ...e);
var R = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 60492,
    "entryFilePath": "/Users/mahbubislammahim/Desktop/Development/Webpilot/.plasmo/static/background/index.ts",
    "bundleId": "c338908e704c91f1",
    "envHash": "d99a5ffa57acd638",
    "verbose": "false",
    "secure": false,
    "serverPort": 60491
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var M = module.bundle.Module;
function D(e) {
    M.call(this, e), this.hot = {
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
module.bundle.Module = D;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function u() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var x = "__plasmo_runtime_page_", P = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${u()}:${d()}/`;
async function S(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function k(e, t) {
    let { modules: o  } = e;
    return o ? !!o[t] : !1;
}
function E(e = d()) {
    let t = u();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function C(e) {
    typeof e.message == "string" && b("[plasmo/parcel-runtime]: " + e.message);
}
function T(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(E(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", C), t;
}
function L(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(E());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            h("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", C), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        h(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var A = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!A || !A.isParcelRequire) {
    R();
    let e = L(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>k(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await S(), p(!0);
    });
}
T(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(x), o = e.name.startsWith(P);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"8oeFb":[function(require,module,exports) {
var _messaging = require("./messaging");
var _index = require("../../../src/background/index");

},{"./messaging":"gGuoe","../../../src/background/index":"dDAmz"}],"gGuoe":[function(require,module,exports) {
// @ts-nocheck
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _openSetting = require("~background/messages/openSetting");
var _openSettingDefault = parcelHelpers.interopDefault(_openSetting);
var _popupCheck = require("~background/messages/popupCheck");
var _popupCheckDefault = parcelHelpers.interopDefault(_popupCheck);
var _signInSuccess = require("~background/messages/signInSuccess");
var _signInSuccessDefault = parcelHelpers.interopDefault(_signInSuccess);
globalThis.__plasmoInternalPortMap = new Map();
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    switch(request.name){
        case "openSetting":
            (0, _openSettingDefault.default)({
                sender,
                ...request
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "popupCheck":
            (0, _popupCheckDefault.default)({
                sender,
                ...request
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "signInSuccess":
            (0, _signInSuccessDefault.default)({
                sender,
                ...request
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        default:
            break;
    }
    return true;
});
chrome.runtime.onConnect.addListener(function(port) {
    globalThis.__plasmoInternalPortMap.set(port.name, port);
    port.onMessage.addListener(function(request) {
        port.name;
    });
});

},{"~background/messages/openSetting":"OnifF","~background/messages/popupCheck":"iKsLq","~background/messages/signInSuccess":"acpM8","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"OnifF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const handler = async ()=>{
    chrome.runtime.openOptionsPage();
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"iIXqM":[function(require,module,exports) {
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

},{}],"iKsLq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _messaging = require("@plasmohq/messaging");
var _config = require("@/config");
const handler = async (req, res)=>{
    const queryOptions = {
        active: true,
        currentWindow: true
    };
    const [tab] = await chrome.tabs.query(queryOptions);
    const url = tab?.url;
    let keepPopupOpen = true;
    if (url) keepPopupOpen = url.startsWith("chrome:") || url.startsWith("chrome-extension:");
    res.send(keepPopupOpen);
    if (!keepPopupOpen) (0, _messaging.sendToContentScript)({
        name: (0, _config.MESSAGING_EVENT).SHOW_POPUP
    });
};
exports.default = handler;

},{"@plasmohq/messaging":"cto8s","@/config":"jCZwv","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"cto8s":[function(require,module,exports) {
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

},{"nanoid":"4oYEq","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"4oYEq":[function(require,module,exports) {
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

},{"./url-alphabet/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"jCZwv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WEBPILOT_CONFIG_STORAGE_KEY", ()=>WEBPILOT_CONFIG_STORAGE_KEY);
parcelHelpers.export(exports, "OPENAI_BASE_URL", ()=>OPENAI_BASE_URL);
parcelHelpers.export(exports, "API_PATH", ()=>API_PATH);
parcelHelpers.export(exports, "defaultConfig", ()=>defaultConfig);
parcelHelpers.export(exports, "MESSAGING_EVENT", ()=>MESSAGING_EVENT);
parcelHelpers.export(exports, "SUPER_BUTTON_STATUS", ()=>SUPER_BUTTON_STATUS);
parcelHelpers.export(exports, "WEBPILOT_OPENAI", ()=>WEBPILOT_OPENAI);
parcelHelpers.export(exports, "LAST_PROMPT_STORAGE_KEY", ()=>LAST_PROMPT_STORAGE_KEY);
parcelHelpers.export(exports, "API_ORIGINS", ()=>API_ORIGINS);
parcelHelpers.export(exports, "SERVER_NAME", ()=>SERVER_NAME);
parcelHelpers.export(exports, "SERVER_TYPE", ()=>SERVER_TYPE);
parcelHelpers.export(exports, "OPTIONS_PAGE_TAB_NAME", ()=>OPTIONS_PAGE_TAB_NAME);
var _i18N = require("./utils/i18n");
const WEBPILOT_CONFIG_STORAGE_KEY = "WEBPILOT_CONFIG_STORAGE_KEY";
const OPENAI_BASE_URL = "https://api.openai.com";
const API_PATH = "/v1/chat/completions";
const defaultConfig = {
    /**
   * general: use webpilot
   * personal: use openai or third party
   * */ apiOrigin: "general",
    /** Open AI or selfhost api key */ authKey: "",
    /** Is auth succeeded */ isAuth: false,
    /** If user not set token at welcome page set false */ isFinishSetup: false,
    /** When select text (by mouse or keyboard) show popup */ autoPopup: false,
    /** Self host url */ selfHostUrl: "",
    /** Azure specify ApiVersion */ azureApiVersion: "",
    /** Azure specify deploymentID */ azureDeploymentID: "",
    /** Custom shortcut for show popup (akspage) */ customShortcut: [
        "Control",
        "`"
    ],
    /** Chose display mode
   * popUp
   * sideBar */ displayMode: "popUp",
    /** Show shortcut state, once trigger popup by shortcut set to false */ showShortcutTips: true,
    /** Last select preset prompt index. For auto select at popup. */ latestAskedQuestionPromptIndex: 0,
    latestTextSelectionPromptIndex: 0,
    /** Custom preset prompts */ AskedQuestionPrompts: [
        {
            title: (0, _i18N.$gettext)("Summarize"),
            command: (0, _i18N.$gettext)("Summarize in English, concise and clear")
        },
        {
            title: (0, _i18N.$gettext)("SEO"),
            command: (0, _i18N.$gettext)("Generate a list of 10 long-tail keywords for SEO, related to this page")
        },
        {
            title: (0, _i18N.$gettext)("Solve"),
            command: (0, _i18N.$gettext)("Find the questions/todo on the page, analyze them step by step, and provide a complete solution in the end. If a specified starting point is given, use it directly without changing.")
        }
    ],
    TextSelectionPrompts: [
        {
            title: (0, _i18N.$gettext)("Explain"),
            command: (0, _i18N.$gettext)("Explain it in English using words a middle schooler can understand")
        },
        {
            title: (0, _i18N.$gettext)("Refine"),
            command: (0, _i18N.$gettext)("Refine text, review and revise problems in spelling, grammar, punctuation, word usage, and sentence structure")
        },
        {
            title: (0, _i18N.$gettext)("Draw"),
            command: (0, _i18N.$gettext)(`Let's draw an image about this. You need to write in English without word wraps and headlines, without connection words. back to back separated with commas: [1], [2], [3], [4] {environment}, [5], [6] {style settings}
        Replace [1] with the subject "A image of ";
        Replace [2] with the sentence you mentioned;
        Replace [3] with a list of creative detailed descriptions about [element]; 
        Replace [4] with a list of detailed descriptions about the environment of the scene;
        Replace [5] with a list of detailed descriptions about the mood/feelings and atmosphere of the scene;
        Replace [6] with an appropriate director or artist. If he/she is a historical figure, include his/her country and dynasty.
        Simply write the without explanation, replace the content inside the brackets with details about the content/word inside the brackets and delete the brackets. Repeat that for every bracket in the prompt, complex prompt for an AI-based text to image program that converts a prompt about a topic into an image. The outcome depends on the prompt's coherence. The topic of the whole scene is always dependent on the subject that is replaced with [element], always start the prompt with "/imagine prompt:", don't use any line breaks, Proper grammar is unnecessary and details can be listed.
        Do not show things like "[1]""[element]" in your response.`)
        }
    ],
    /* Model type, for now use open ai template */ model: {
        model: "gpt-4o-mini",
        temperature: 1,
        top_p: 0.9,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: "<|endoftext|>"
    }
};
const MESSAGING_EVENT = {
    SHOW_POPUP: "MESSAGING_EVENT"
};
const SUPER_BUTTON_STATUS = {
    pending: "pending",
    generating: "generating",
    done: "done"
};
const WEBPILOT_OPENAI = {
    AUTH_KEY: "KEY_PLACEHOLDER",
    HOST_URL: "https://api.webpilotai.com/api/webpilot",
    MODEL: "gpt-4o-mini"
};
const LAST_PROMPT_STORAGE_KEY = {
    COMMON: "LAST_COMMON",
    SELECTED: "LAST_SELECTED"
};
const API_ORIGINS = {
    /** Webpilot Server */ GENERAL: "general",
    /** OpenAI server or proxy */ OPENAI: "openAI",
    /** Selfhost server */ OPENAI_PROXY: "OpenAIProxy",
    /** Azure server */ AZURE: "azure"
};
const SERVER_NAME = {
    OPENAI_OFFICIAL: "OPENAI_OFFICIAL",
    OPENAI_PROXY: "OPENAI_PROXY",
    AZURE_PROXY: "AZURE_PROXY"
};
const SERVER_TYPE = {
    [SERVER_NAME.OPENAI_OFFICIAL]: "OpenAI Official",
    [SERVER_NAME.OPENAI_PROXY]: "OpenAI Proxy",
    [SERVER_NAME.AZURE_PROXY]: "Azure Proxy"
};
const OPTIONS_PAGE_TAB_NAME = {
    ACCOUNT: "ACCOUNT",
    EXTENSION: "EXTENSION",
    ABOUT: "ABOUT"
};

},{"./utils/i18n":"aHAgQ","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"aHAgQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$gettext", ()=>$gettext);
parcelHelpers.export(exports, "i18nPlugin", ()=>i18nPlugin);
function $gettext(text) {
    let res = "";
    try {
        const key = text.replace(/[^A-Za-z0-9_]/g, "_");
        res = chrome.i18n.getMessage(key) || text;
    } catch (e) {
        res = text;
    }
    return res;
}
const i18nPlugin = {
    install (app) {
        /* eslint-disable no-param-reassign */ app.config.globalProperties.$gettext = $gettext;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"acpM8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _storage = require("@plasmohq/storage");
var _apiConfig = require("@/apiConfig");
const extensionURL = chrome.runtime.getURL("./tabs/index.html");
const getCurrentTabId = async ()=>{
    const queryOptions = {
        active: true,
        lastFocusedWindow: true,
        url: [
            "https://account.webpilot.ai/*",
            "http://localhost/*"
        ]
    };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    const [tab] = await chrome.tabs.query(queryOptions);
    return tab?.id;
};
const handler = async (req)=>{
    const storage = new (0, _storage.Storage)();
    const tabId = await getCurrentTabId();
    if (tabId) chrome.tabs.update({
        url: extensionURL
    });
    const { credential  } = req.body;
    storage.set((0, _apiConfig.GOOGLE_CREDENTIAL), credential);
};
exports.default = handler;

},{"@plasmohq/storage":"i0YkM","@/apiConfig":"kkmi7","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"i0YkM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseStorage", ()=>o);
parcelHelpers.export(exports, "Storage", ()=>g);
var _pify = require("pify");
var _pifyDefault = parcelHelpers.interopDefault(_pify);
var l = ()=>{
    try {
        let e = globalThis.navigator?.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (e[1] === "Chrome") return parseInt(e[2]) < 100 || globalThis.chrome.runtime?.getManifest()?.manifest_version === 2;
    } catch  {
        return !1;
    }
    return !1;
};
var o = class {
    #r;
    #t;
    get primaryClient() {
        return this.#t;
    }
    #e;
    get secondaryClient() {
        return this.#e;
    }
    #a;
    get area() {
        return this.#a;
    }
    get hasWebApi() {
        try {
            return typeof window < "u" && !!window.localStorage;
        } catch (e) {
            return console.error(e), !1;
        }
    }
    #s = new Map;
    #i;
    get copiedKeySet() {
        return this.#i;
    }
    isCopied = (e)=>this.hasWebApi && (this.allCopied || this.copiedKeySet.has(e));
    #n = !1;
    get allCopied() {
        return this.#n;
    }
    getExtStorageApi = ()=>globalThis.browser?.storage || globalThis.chrome?.storage;
    get hasExtensionApi() {
        try {
            return !!this.getExtStorageApi();
        } catch (e) {
            return console.error(e), !1;
        }
    }
    isWatchSupported = ()=>this.hasExtensionApi;
    keyNamespace = "";
    isValidKey = (e)=>e.startsWith(this.keyNamespace);
    getNamespacedKey = (e)=>`${this.keyNamespace}${e}`;
    getUnnamespacedKey = (e)=>e.slice(this.keyNamespace.length);
    serde = {
        serializer: JSON.stringify,
        deserializer: JSON.parse
    };
    constructor({ area: e = "sync" , allCopied: t = !1 , copiedKeyList: s = [] , serde: r = {}  } = {}){
        this.setCopiedKeySet(s), this.#a = e, this.#n = t, this.serde = {
            ...this.serde,
            ...r
        };
        try {
            this.hasWebApi && (t || s.length > 0) && (this.#e = window.localStorage);
        } catch  {}
        try {
            this.hasExtensionApi && (this.#r = this.getExtStorageApi(), l() ? this.#t = (0, _pifyDefault.default)(this.#r[this.area], {
                exclude: [
                    "getBytesInUse"
                ],
                errorFirst: !1
            }) : this.#t = this.#r[this.area]);
        } catch  {}
    }
    setCopiedKeySet(e) {
        this.#i = new Set(e);
    }
    rawGetAll = ()=>this.#t?.get();
    getAll = async ()=>{
        let e = await this.rawGetAll();
        return Object.entries(e).filter(([t])=>this.isValidKey(t)).reduce((t, [s, r])=>(t[this.getUnnamespacedKey(s)] = r, t), {});
    };
    copy = async (e)=>{
        let t = e === void 0;
        if (!t && !this.copiedKeySet.has(e) || !this.allCopied || !this.hasExtensionApi) return !1;
        let s = this.allCopied ? await this.rawGetAll() : await this.#t.get((t ? [
            ...this.copiedKeySet
        ] : [
            e
        ]).map(this.getNamespacedKey));
        if (!s) return !1;
        let r = !1;
        for(let a in s){
            let i = s[a], n = this.#e?.getItem(a);
            this.#e?.setItem(a, i), r ||= i !== n;
        }
        return r;
    };
    rawGet = async (e)=>(await this.rawGetMany([
            e
        ]))[e];
    rawGetMany = async (e)=>this.hasExtensionApi ? await this.#t.get(e) : e.filter(this.isCopied).reduce((t, s)=>(t[s] = this.#e?.getItem(s), t), {});
    rawSet = async (e, t)=>await this.rawSetMany({
            [e]: t
        });
    rawSetMany = async (e)=>(this.#e && Object.entries(e).filter(([t])=>this.isCopied(t)).forEach(([t, s])=>this.#e.setItem(t, s)), this.hasExtensionApi && await this.#t.set(e), null);
    clear = async (e = !1)=>{
        e && this.#e?.clear(), await this.#t.clear();
    };
    rawRemove = async (e)=>{
        await this.rawRemoveMany([
            e
        ]);
    };
    rawRemoveMany = async (e)=>{
        this.#e && e.filter(this.isCopied).forEach((t)=>this.#e.removeItem(t)), this.hasExtensionApi && await this.#t.remove(e);
    };
    removeAll = async ()=>{
        let e = await this.getAll(), t = Object.keys(e);
        await this.removeMany(t);
    };
    watch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#o(e), t;
    };
    #o = (e)=>{
        for(let t in e){
            let s = this.getNamespacedKey(t), r = this.#s.get(s)?.callbackSet || new Set;
            if (r.add(e[t]), r.size > 1) continue;
            let a = (i, n)=>{
                if (n !== this.area || !i[s]) return;
                let h = this.#s.get(s);
                if (!h) throw new Error(`Storage comms does not exist for nsKey: ${s}`);
                Promise.all([
                    this.parseValue(i[s].newValue),
                    this.parseValue(i[s].oldValue)
                ]).then(([y, d])=>{
                    for (let p of h.callbackSet)p({
                        newValue: y,
                        oldValue: d
                    }, n);
                });
            };
            this.#r.onChanged.addListener(a), this.#s.set(s, {
                callbackSet: r,
                listener: a
            });
        }
    };
    unwatch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#c(e), t;
    };
    #c(e) {
        for(let t in e){
            let s = this.getNamespacedKey(t), r = e[t], a = this.#s.get(s);
            a && (a.callbackSet.delete(r), a.callbackSet.size === 0 && (this.#s.delete(s), this.#r.onChanged.removeListener(a.listener)));
        }
    }
    unwatchAll = ()=>this.#h();
    #h() {
        this.#s.forEach(({ listener: e  })=>this.#r.onChanged.removeListener(e)), this.#s.clear();
    }
    async getItem(e) {
        return this.get(e);
    }
    async getItems(e) {
        return await this.getMany(e);
    }
    async setItem(e, t) {
        await this.set(e, t);
    }
    async setItems(e) {
        await await this.setMany(e);
    }
    async removeItem(e) {
        return this.remove(e);
    }
    async removeItems(e) {
        return await this.removeMany(e);
    }
}, g = class extends o {
    get = async (e)=>{
        let t = this.getNamespacedKey(e), s = await this.rawGet(t);
        return this.parseValue(s);
    };
    getMany = async (e)=>{
        let t = e.map(this.getNamespacedKey), s = await this.rawGetMany(t), r = await Promise.all(Object.values(s).map(this.parseValue));
        return Object.keys(s).reduce((a, i, n)=>(a[this.getUnnamespacedKey(i)] = r[n], a), {});
    };
    set = async (e, t)=>{
        let s = this.getNamespacedKey(e), r = this.serde.serializer(t);
        return this.rawSet(s, r);
    };
    setMany = async (e)=>{
        let t = Object.entries(e).reduce((s, [r, a])=>(s[this.getNamespacedKey(r)] = this.serde.serializer(a), s), {});
        return await this.rawSetMany(t);
    };
    remove = async (e)=>{
        let t = this.getNamespacedKey(e);
        return this.rawRemove(t);
    };
    removeMany = async (e)=>{
        let t = e.map(this.getNamespacedKey);
        return await this.rawRemoveMany(t);
    };
    setNamespace = (e)=>{
        this.keyNamespace = e;
    };
    parseValue = async (e)=>{
        try {
            if (e !== void 0) return this.serde.deserializer(e);
        } catch (t) {
            console.error(t);
        }
    };
};

},{"pify":"6Hkib","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"6Hkib":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>pify);
const processFunction = (function_, options, proxy, unwrapped)=>function(...arguments_) {
        const P = options.promiseModule;
        return new P((resolve, reject)=>{
            if (options.multiArgs) arguments_.push((...result)=>{
                if (options.errorFirst) {
                    if (result[0]) reject(result);
                    else {
                        result.shift();
                        resolve(result);
                    }
                } else resolve(result);
            });
            else if (options.errorFirst) arguments_.push((error, result)=>{
                if (error) reject(error);
                else resolve(result);
            });
            else arguments_.push(resolve);
            const self = this === proxy ? unwrapped : this;
            Reflect.apply(function_, self, arguments_);
        });
    };
const filterCache = new WeakMap();
function pify(input, options) {
    options = {
        exclude: [
            /.+(?:Sync|Stream)$/
        ],
        errorFirst: true,
        promiseModule: Promise,
        ...options
    };
    const objectType = typeof input;
    if (!(input !== null && (objectType === "object" || objectType === "function"))) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? "null" : objectType}\``);
    const filter = (target, key)=>{
        let cached = filterCache.get(target);
        if (!cached) {
            cached = {};
            filterCache.set(target, cached);
        }
        if (key in cached) return cached[key];
        const match = (pattern)=>typeof pattern === "string" || typeof key === "symbol" ? key === pattern : pattern.test(key);
        const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
        const writableOrConfigurableOwn = descriptor === undefined || descriptor.writable || descriptor.configurable;
        const included = options.include ? options.include.some((element)=>match(element)) : !options.exclude.some((element)=>match(element));
        const shouldFilter = included && writableOrConfigurableOwn;
        cached[key] = shouldFilter;
        return shouldFilter;
    };
    const cache = new WeakMap();
    const proxy = new Proxy(input, {
        apply (target, thisArg, args) {
            const cached = cache.get(target);
            if (cached) return Reflect.apply(cached, thisArg, args);
            const pified = options.excludeMain ? target : processFunction(target, options, proxy, target);
            cache.set(target, pified);
            return Reflect.apply(pified, thisArg, args);
        },
        get (target, key) {
            const property = target[key];
            // eslint-disable-next-line no-use-extend-native/no-use-extend-native
            if (!filter(target, key) || property === Function.prototype[key]) return property;
            const cached = cache.get(property);
            if (cached) return cached;
            if (typeof property === "function") {
                const pified = processFunction(property, options, proxy, target);
                cache.set(property, pified);
                return pified;
            }
            return property;
        }
    });
    return proxy;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"kkmi7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BASE_URL", ()=>BASE_URL);
parcelHelpers.export(exports, "GOOGLE_CREDENTIAL", ()=>GOOGLE_CREDENTIAL);
parcelHelpers.export(exports, "ENDPOINT", ()=>ENDPOINT);
const BASE_URL = "https://api.webpilotai.com/hyrule/v1";
const GOOGLE_CREDENTIAL = "GOOGLE_CREDENTIAL";
const ENDPOINT = {
    GET_USER: "/user",
    GET_API_USAGE: "/user/apikey/usage"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"dDAmz":[function(require,module,exports) {
var _messaging = require("@plasmohq/messaging");
var _storage = require("@plasmohq/storage");
var _config = require("@/config");
/** Open init page after install */ chrome.runtime.onInstalled.addListener((event)=>{
    // const signURL = 'http://localhost/'
    const signURL = "https://account.webpilot.ai/";
    if (event.reason === chrome.runtime.OnInstalledReason.INSTALL) chrome.tabs.create({
        url: signURL
    });
});
const storage = new (0, _storage.Storage)();
const swtichPopup = (url)=>{
    if (!url) return;
    if (url.startsWith("chrome:") || url.startsWith("chrome-extension:")) chrome.action.setPopup({
        popup: "popup.html"
    });
    else chrome.action.setPopup({
        popup: ""
    });
};
chrome.tabs.onActivated.addListener(({ tabId  })=>{
    chrome.tabs.get(tabId, (tab)=>{
        swtichPopup(tab?.url);
    });
});
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo)=>{
    swtichPopup(changeInfo.url);
    const reloadTabId = await storage.get("RELOAD_TAB_ID");
    if (reloadTabId && changeInfo.status === "complete") {
        openWidget();
        storage.remove("RELOAD_TAB_ID");
    }
});
// const openPopup = () => {
//   const {origin} = window.location
//   window.postMessage('OPEN_POPUP', origin)
// }
const openWidget = async ()=>{
    await (0, _messaging.sendToContentScript)({
        name: (0, _config.MESSAGING_EVENT).SHOW_POPUP
    });
};
const popupHandler = async (tab)=>{
    const config = await storage.get((0, _config.WEBPILOT_CONFIG_STORAGE_KEY));
    if (!config || !config.isFinishSetup || !config.isAuth) {
        // const [tab] = await chrome.tabs.query({
        //   active: true,
        //   currentWindow: true,
        // })
        const currentUrl = tab?.url;
        // can't get current open page url
        if (currentUrl === undefined) return;
        const signURL = "https://account.webpilot.ai/";
        const welcomeUrl = chrome?.runtime?.getURL("tabs/index.html");
        // aready in welcome page
        if (currentUrl === signURL || currentUrl === welcomeUrl) return;
        chrome.tabs.create({
            url: signURL
        });
    } else try {
        await openWidget();
    } catch (error) {
        await storage.set("RELOAD_TAB_ID", tab.id);
        chrome.tabs.reload(tab.id);
    }
// chrome.scripting.executeScript({
//   target: {tabId: tab.id},
//   func: openPopup,
// })
};
chrome.action.onClicked.addListener(popupHandler);

},{"@plasmohq/messaging":"cto8s","@plasmohq/storage":"i0YkM","@/config":"jCZwv"}]},["4SVHF","8oeFb"], "8oeFb", "parcelRequire3cd7")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksSUFBRSxPQUFPLFdBQVcsVUFBUSxNQUFJLFdBQVcsUUFBUSxPQUFLLEVBQUU7QUFBQyxJQUFJLElBQUUsSUFBSSxPQUFPLFdBQVcsVUFBUSxNQUFJLFdBQVcsUUFBUSxNQUFJLENBQUM7QUFBRSxJQUFJLElBQUUsSUFBSSxJQUFJLElBQUcsSUFBRSxDQUFBLElBQUcsRUFBRSxJQUFJLElBQUcsSUFBRSxFQUFFLE9BQU8sQ0FBQSxJQUFHLEVBQUUsV0FBVyxTQUFPLEVBQUUsU0FBUyxNQUFNLElBQUksQ0FBQSxJQUFHLEVBQUUsTUFBTSxNQUFNLE9BQU8sQ0FBQyxHQUFFLENBQUMsR0FBRSxFQUFFLEdBQUksQ0FBQSxDQUFDLENBQUMsRUFBRSxHQUFDLEdBQUUsQ0FBQSxHQUFHLENBQUM7QUFBRyxJQUFJLElBQUUsRUFBRSxjQUFhLElBQUUsSUFBSSxFQUFFLGdCQUFjLElBQUksWUFBVSxRQUFPLElBQUU7QUFBSSxJQUFJLElBQUUsQ0FBQyxJQUFFLEVBQUUsRUFBQyxHQUFHLElBQUksUUFBUSxJQUFJLEVBQUUsT0FBTyxJQUFHLFFBQU87QUFBRyxJQUFJLElBQUUsQ0FBQyxHQUFHLElBQUksUUFBUSxNQUFNLHFCQUFrQixPQUFPLElBQUcsUUFBTyxJQUFHLElBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSx3QkFBb0IsSUFBRyxJQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsd0JBQW9CLElBQUcsSUFBRSxHQUFFLElBQUUsQ0FBQyxHQUFHLElBQUksT0FBSyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFJO0FBQUcsSUFBSSxJQUFFO0lBQUssSUFBSSxJQUFFLFdBQVcsU0FBUyxXQUFTLFdBQVcsUUFBUSxTQUFRLElBQUUsSUFBSSxZQUFZLEVBQUUsaUJBQWdCO0lBQU0sRUFBRSxVQUFVLFlBQVksSUFBRztBQUFHO0FBQUUsSUFBSSxJQUFFO0lBQUMsbUJBQWtCO0lBQU0sZ0JBQWU7SUFBSyxXQUFVO0lBQU0sWUFBVztRQUFDO0tBQTZCO0lBQUMsUUFBTztJQUFZLFFBQU87SUFBTSxpQkFBZ0I7SUFBMEYsWUFBVztJQUFtQixXQUFVO0lBQW1CLFdBQVU7SUFBUSxVQUFTO0lBQU0sY0FBYTtBQUFLO0FBQUUsT0FBTyxPQUFPLGdCQUFjLEVBQUU7QUFBUyxXQUFXLFVBQVE7SUFBQyxNQUFLLEVBQUU7SUFBQyxLQUFJO1FBQUMsU0FBUSxFQUFFO0lBQU87QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE9BQU87QUFBTyxTQUFTLEVBQUUsQ0FBQztJQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsTUFBSTtRQUFDLE1BQUssT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUcsWUFBVztRQUFFO1FBQUUsU0FBUSxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEtBQUs7UUFBRTtJQUFDLEdBQUUsT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFLEdBQUMsS0FBSztBQUFDO0FBQUMsT0FBTyxPQUFPLFNBQU87QUFBRSxPQUFPLE9BQU8sVUFBUSxDQUFDO0FBQUUsSUFBSSxJQUFFLFdBQVcsV0FBUyxXQUFXLFVBQVE7QUFBSyxTQUFTO0lBQUksT0FBTSxDQUFDLEVBQUUsUUFBTSxFQUFFLFNBQU8sWUFBVSxTQUFTLFNBQVMsUUFBUSxZQUFVLElBQUUsU0FBUyxXQUFTLGNBQVksRUFBRTtBQUFJO0FBQUMsU0FBUztJQUFJLE9BQU8sRUFBRSxRQUFNLFNBQVM7QUFBSTtBQUFDLElBQUksSUFBRSwwQkFBeUIsSUFBRTtBQUEyQixJQUFJLElBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBTyxVQUFRLE9BQU8sR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQUMsZUFBZSxFQUFFLElBQUUsSUFBSTtJQUFFLE9BQU8sSUFBRztRQUFDLE1BQU0sTUFBTTtRQUFHO0lBQUssRUFBQyxPQUFLO1FBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQSxJQUFHLFdBQVcsR0FBRTtJQUFHO0FBQUM7QUFBQyxJQUFHLEVBQUUsUUFBUSxjQUFjLHFCQUFtQixHQUFFO0lBQUMsSUFBSSxJQUFFLEVBQUUsUUFBUSxPQUFPO0lBQThCLFdBQVcsaUJBQWlCLFNBQVEsU0FBUyxDQUFDO1FBQUUsSUFBSSxJQUFFLEVBQUUsUUFBUTtRQUFJLElBQUcsRUFBRSxXQUFXLElBQUc7WUFBQyxJQUFJLElBQUUsSUFBSSxJQUFJLG1CQUFtQixFQUFFLE1BQU0sRUFBRTtZQUFVLEVBQUUsYUFBVyxFQUFFLFFBQU0sRUFBRSxTQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxHQUFFLENBQUEsRUFBRSxhQUFhLElBQUksS0FBSSxLQUFLLE1BQU0sYUFBWSxFQUFFLFlBQVksTUFBTSxHQUFHLEtBQUssQ0FBQSxJQUFHLElBQUksU0FBUyxFQUFFLE1BQUs7b0JBQUMsU0FBUTt3QkFBQyxnQkFBZSxFQUFFLFFBQVEsSUFBSSxtQkFBaUI7b0JBQWlCO2dCQUFDLElBQUcsSUFBRyxFQUFFLFlBQVksSUFBSSxTQUFTLGNBQWE7Z0JBQUMsUUFBTztnQkFBSSxZQUFXO1lBQVM7UUFBRztJQUFDO0FBQUU7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFBRSxJQUFHLEVBQUMsU0FBUSxFQUFDLEVBQUMsR0FBQztJQUFFLE9BQU8sSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDO0FBQUM7QUFBQyxTQUFTLEVBQUUsSUFBRSxHQUFHO0lBQUUsSUFBSSxJQUFFO0lBQUksT0FBTSxDQUFDLEVBQUUsRUFBRSxVQUFRLFNBQVMsYUFBVyxZQUFVLENBQUMsOEJBQThCLEtBQUssS0FBRyxRQUFNLEtBQUssR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUE7QUFBQyxTQUFTLEVBQUUsQ0FBQztJQUFFLE9BQU8sRUFBRSxXQUFTLFlBQVUsRUFBRSw4QkFBNEIsRUFBRTtBQUFRO0FBQUMsU0FBUyxFQUFFLENBQUM7SUFBRSxJQUFHLE9BQU8sV0FBVyxZQUFVLEtBQUk7SUFBTyxJQUFJLElBQUUsSUFBSSxVQUFVLEVBQUUsT0FBTyxPQUFLO0lBQUksT0FBTyxFQUFFLGlCQUFpQixXQUFVLGVBQWUsQ0FBQztRQUFFLElBQUksSUFBRSxLQUFLLE1BQU0sRUFBRTtRQUFNLE1BQU0sRUFBRTtJQUFFLElBQUcsRUFBRSxpQkFBaUIsU0FBUSxJQUFHO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQztJQUFFLElBQUcsT0FBTyxXQUFXLFlBQVUsS0FBSTtJQUFPLElBQUksSUFBRSxJQUFJLFVBQVU7SUFBSyxPQUFPLEVBQUUsaUJBQWlCLFdBQVUsZUFBZSxDQUFDO1FBQUUsSUFBSSxJQUFFLEtBQUssTUFBTSxFQUFFO1FBQU0sSUFBRyxFQUFFLFNBQU8sWUFBVSxNQUFNLEVBQUUsRUFBRSxTQUFRLEVBQUUsU0FBTyxTQUFRLEtBQUksSUFBSSxLQUFLLEVBQUUsWUFBWSxLQUFLO1lBQUMsSUFBSSxJQUFFLEVBQUUsYUFBVyxFQUFFO1lBQU0sRUFBRSw4QkFBNEIsRUFBRSxVQUFRLENBQUM7QUFDcnRHLENBQUMsR0FBQyxJQUFFLENBQUM7O0FBRUwsQ0FBQyxHQUFDLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDaEIsQ0FBQztRQUFFO0lBQUMsSUFBRyxFQUFFLGlCQUFpQixTQUFRLElBQUcsRUFBRSxpQkFBaUIsUUFBTztRQUFLLEVBQUUsQ0FBQyxxREFBcUQsRUFBRSxFQUFFLGNBQWMsQ0FBQztJQUFDLElBQUcsRUFBRSxpQkFBaUIsU0FBUTtRQUFLLEVBQUUsQ0FBQyxvRUFBb0UsRUFBRSxFQUFFLGNBQWMsQ0FBQztJQUFDLElBQUc7QUFBQztBQUFDLElBQUksSUFBRSxPQUFPLE9BQU8sUUFBTyxJQUFFO0lBQUMsWUFBVyxDQUFDO0lBQUUsV0FBVSxDQUFDO0lBQUUsV0FBVSxDQUFDO0lBQUUsYUFBWSxDQUFDO0lBQUUsYUFBWSxJQUFJO0lBQUksV0FBVSxJQUFJO0FBQUc7QUFBRSxlQUFlLEVBQUUsSUFBRSxDQUFDLENBQUM7SUFBRSxJQUFHLEtBQUcsRUFBRSxjQUFZLEVBQUUsYUFBWTtRQUFDLEVBQUU7UUFBaUMsS0FBSSxJQUFJLEtBQUssRUFBRSxVQUFVLEVBQUUsWUFBWTtJQUFLO0lBQUMsSUFBRyxLQUFHLEVBQUUsY0FBYSxDQUFBLEVBQUUsYUFBVyxFQUFFLFNBQVEsR0FBRztRQUFDLEVBQUU7UUFBK0IsSUFBSSxJQUFFLE1BQU0sR0FBRyxLQUFLLE1BQU07WUFBQyxRQUFPLENBQUM7UUFBQztRQUFHLEtBQUksSUFBSSxLQUFLLEVBQUUsWUFBWTtZQUFDLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQSxJQUFHLEVBQUUsT0FBSyxFQUFFLE9BQU8sS0FBSztZQUFJLEVBQUUsWUFBWTtnQkFBQywwQkFBeUI7WUFBQztRQUFFO1FBQUMsRUFBRSxRQUFRO0lBQVE7QUFBQztBQUFDLElBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxpQkFBZ0I7SUFBQztJQUFJLElBQUksSUFBRSxFQUFFLE9BQU07UUFBSSxFQUFFLGlDQUFnQyxFQUFFLGNBQVksRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFlBQVUsRUFBRSxTQUFTLEtBQUssQ0FBQSxJQUFHLEVBQUUsT0FBTyxRQUFPLEVBQUU7UUFBSyxJQUFJLElBQUUsRUFBRSxLQUFLLENBQUEsSUFBRyxFQUFFLFNBQU87UUFBUSxJQUFHLEdBQUU7WUFBQyxJQUFJLElBQUUsSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFBLElBQUcsRUFBRSxNQUFLLElBQUUsT0FBTyxPQUFPLEVBQUUsY0FBYyxJQUFJLENBQUEsSUFBRyxPQUFPLE9BQU8sSUFBSTtZQUFPLEVBQUUsY0FBWSxFQUFFLE1BQU0sQ0FBQSxJQUFHLEVBQUUsSUFBSTtRQUFHO1FBQUM7SUFBRztJQUFHLEVBQUUsaUJBQWlCLFFBQU87UUFBSyxJQUFJLElBQUUsWUFBWSxJQUFJLEVBQUUsS0FBSyxTQUFRO1FBQU0sRUFBRSxpQkFBaUIsU0FBUSxJQUFJLGNBQWM7SUFBRyxJQUFHLEVBQUUsaUJBQWlCLFNBQVE7UUFBVSxNQUFNLEtBQUksRUFBRSxDQUFDO0lBQUU7QUFBRTtBQUFDLEVBQUUsT0FBTTtJQUFJLE9BQU8sRUFBRSx1Q0FBc0MsRUFBRTtRQUFNLEtBQUk7WUFBZSxFQUFFLGVBQWEsQ0FBQyxHQUFFO1lBQUk7UUFBTSxLQUFJO1lBQWMsRUFBRSxjQUFZLENBQUMsR0FBRTtZQUFJO0lBQU07QUFBQztBQUFHLEVBQUUsUUFBUSxVQUFVLFlBQVksU0FBUyxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUUsS0FBSyxXQUFXLElBQUcsSUFBRSxFQUFFLEtBQUssV0FBVztJQUFHLElBQUcsS0FBRyxHQUFFO1FBQUMsSUFBSSxJQUFFLElBQUUsRUFBRSxZQUFVLEVBQUU7UUFBWSxFQUFFLElBQUksSUFBRyxFQUFFLGFBQWEsWUFBWTtZQUFLLEVBQUUsT0FBTztRQUFFLElBQUcsRUFBRSxVQUFVLFlBQVksU0FBUyxDQUFDO1lBQUUsRUFBRSxvQ0FBbUMsSUFBRyxFQUFFLHlCQUF3QixDQUFBLEVBQUUsY0FBWSxDQUFDLENBQUEsR0FBRyxFQUFFLDJCQUEwQixDQUFBLEVBQUUsZ0JBQWMsQ0FBQyxDQUFBLEdBQUc7UUFBRztJQUFFO0FBQUM7QUFBRyxFQUFFLFFBQVEsVUFBVSxZQUFZLFNBQVMsQ0FBQztJQUFFLE9BQU8sRUFBRSwwQkFBeUIsQ0FBQSxFQUFFLDZDQUE0QyxHQUFFLEdBQUcsQ0FBQztBQUFDOzs7QUNKbDdEO0FBQ0E7OztBQ0RBLGNBQWM7O0FBR2Q7O0FBQ0E7O0FBQ0E7O0FBSkEsV0FBVywwQkFBMEIsSUFBSTtBQU16QyxPQUFPLFFBQVEsVUFBVSxZQUFZLENBQUMsU0FBUyxRQUFRO0lBQ3JELE9BQVEsUUFBUTtRQUNkLEtBQUs7WUFDUCxDQUFBLEdBQUEsMkJBQWtCLEVBQUU7Z0JBQ2xCO2dCQUNBLEdBQUcsT0FBTztZQUNaLEdBQUc7Z0JBQ0QsTUFBTSxDQUFDLElBQU0sYUFBYTtZQUM1QjtZQUNBO1FBQ0YsS0FBSztZQUNILENBQUEsR0FBQSwwQkFBaUIsRUFBRTtnQkFDakI7Z0JBQ0EsR0FBRyxPQUFPO1lBQ1osR0FBRztnQkFDRCxNQUFNLENBQUMsSUFBTSxhQUFhO1lBQzVCO1lBQ0E7UUFDRixLQUFLO1lBQ0gsQ0FBQSxHQUFBLDZCQUFvQixFQUFFO2dCQUNwQjtnQkFDQSxHQUFHLE9BQU87WUFDWixHQUFHO2dCQUNELE1BQU0sQ0FBQyxJQUFNLGFBQWE7WUFDNUI7WUFDQTtRQUNFO1lBQ0U7SUFDSjtJQUVBLE9BQU87QUFDVDtBQUVBLE9BQU8sUUFBUSxVQUFVLFlBQVksU0FBUyxJQUFJO0lBQ2hELFdBQVcsd0JBQXdCLElBQUksS0FBSyxNQUFNO0lBQ2xELEtBQUssVUFBVSxZQUFZLFNBQVMsT0FBTztRQUNqQyxLQUFLO0lBS2Y7QUFDRjs7Ozs7QUNqREEsTUFBTSxVQUFVO0lBQ2QsT0FBTyxRQUFRO0FBQ2pCO2tCQUVlOzs7QUNKZixRQUFRLGlCQUFpQixTQUFVLENBQUM7SUFDbEMsT0FBTyxLQUFLLEVBQUUsYUFBYSxJQUFJO1FBQUMsU0FBUztJQUFDO0FBQzVDO0FBRUEsUUFBUSxvQkFBb0IsU0FBVSxDQUFDO0lBQ3JDLE9BQU8sZUFBZSxHQUFHLGNBQWM7UUFBQyxPQUFPO0lBQUk7QUFDckQ7QUFFQSxRQUFRLFlBQVksU0FBVSxNQUFNLEVBQUUsSUFBSTtJQUN4QyxPQUFPLEtBQUssUUFBUSxRQUFRLFNBQVUsR0FBRztRQUN2QyxJQUFJLFFBQVEsYUFBYSxRQUFRLGdCQUFnQixLQUFLLGVBQWUsTUFDbkU7UUFHRixPQUFPLGVBQWUsTUFBTSxLQUFLO1lBQy9CLFlBQVk7WUFDWixLQUFLO2dCQUNILE9BQU8sTUFBTSxDQUFDLElBQUk7WUFDcEI7UUFDRjtJQUNGO0lBRUEsT0FBTztBQUNUO0FBRUEsUUFBUSxTQUFTLFNBQVUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHO0lBQzVDLE9BQU8sZUFBZSxNQUFNLFVBQVU7UUFDcEMsWUFBWTtRQUNaLEtBQUs7SUFDUDtBQUNGOzs7OztBQzlCQTtBQUVBO0FBRUEsTUFBTSxVQUFVLE9BQU8sS0FBSztJQUMxQixNQUFNLGVBQWU7UUFBQyxRQUFRO1FBQU0sZUFBZTtJQUFJO0lBQ3ZELE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxPQUFPLEtBQUssTUFBTTtJQUN0QyxNQUFNLE1BQU0sS0FBSztJQUVqQixJQUFJLGdCQUFnQjtJQUVwQixJQUFJLEtBQ0YsZ0JBQWdCLElBQUksV0FBVyxjQUFjLElBQUksV0FBVztJQUc5RCxJQUFJLEtBQUs7SUFFVCxJQUFJLENBQUMsZUFDSCxDQUFBLEdBQUEsOEJBQWtCLEVBQUU7UUFDbEIsTUFBTSxDQUFBLEdBQUEsdUJBQWMsRUFBRTtJQUN4QjtBQUVKO2tCQUVlOzs7OztBQ3hCb3dDLDJDQUFPO0FBQVAsa0RBQWtCO0FBQWxCLCtEQUFvQztBQUFwQyxzREFBbUU7QUFBbkUsOERBQXlGO0FBQXpGLHlEQUF1SDtBQUF2SCxrREFBZ0o7QUFBbjZDO0FBQWdDLElBQUksSUFBRSxXQUFXLFNBQVMsV0FBUyxXQUFXLFFBQVEsU0FBUSxJQUFFLFdBQVcsU0FBUyxRQUFNLFdBQVcsUUFBUSxNQUFLLElBQUU7SUFBSyxJQUFHLENBQUMsR0FBRSxNQUFNLElBQUksTUFBTTtJQUFzQyxPQUFPO0FBQUMsR0FBRSxJQUFFO0lBQUssSUFBRyxDQUFDLEdBQUUsTUFBTSxJQUFJLE1BQU07SUFBdUMsT0FBTztBQUFDLEdBQUUsSUFBRTtJQUFVLElBQUksSUFBRSxLQUFJLENBQUMsRUFBRSxHQUFDLE1BQU0sRUFBRSxNQUFNO1FBQUMsUUFBTyxDQUFDO1FBQUUsZUFBYyxDQUFDO0lBQUM7SUFBRyxPQUFPO0FBQUMsR0FBRSxJQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsRUFBRSxjQUFZLEVBQUUsV0FBUyxXQUFXLFVBQVEsRUFBRSxLQUFLLFNBQU8sRUFBRSxRQUFPLENBQUEsRUFBRSxZQUFVLEtBQUssS0FBRyxFQUFFLEtBQUssWUFBVSxFQUFFLE9BQU07QUFBRyxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBRSxXQUFXLE1BQU07SUFBSSxJQUFJLElBQUUsT0FBTTtRQUFJLElBQUcsRUFBRSxHQUFFLE1BQUksQ0FBQyxFQUFFLEtBQUssU0FBUTtZQUFDLElBQUksSUFBRTtnQkFBQyxNQUFLLEVBQUU7Z0JBQUssU0FBUSxFQUFFO2dCQUFRLE1BQUssRUFBRSxLQUFLO1lBQUksR0FBRSxJQUFFLE1BQU0sSUFBSTtZQUFHLEVBQUUsWUFBWTtnQkFBQyxNQUFLLEVBQUU7Z0JBQUssU0FBUSxFQUFFO2dCQUFRLFlBQVcsRUFBRSxLQUFLO2dCQUFXLE1BQUs7Z0JBQUUsU0FBUSxDQUFDO1lBQUMsR0FBRTtnQkFBQyxjQUFhLEVBQUUsZ0JBQWM7WUFBRztRQUFFO0lBQUM7SUFBRSxPQUFPLEVBQUUsaUJBQWlCLFdBQVUsSUFBRyxJQUFJLEVBQUUsb0JBQW9CLFdBQVU7QUFBRSxHQUFFLElBQUUsQ0FBQyxHQUFFLElBQUUsV0FBVyxNQUFNLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRTtRQUFLLElBQUksSUFBRSxDQUFBLEdBQUEsY0FBQSxLQUFJLElBQUUsSUFBSTtRQUFnQixFQUFFLGlCQUFpQixXQUFVLENBQUE7WUFBSSxFQUFFLEdBQUUsTUFBSSxFQUFFLEtBQUssV0FBUyxFQUFFLEtBQUssZUFBYSxLQUFJLENBQUEsRUFBRSxFQUFFLEtBQUssT0FBTSxFQUFFLE9BQU07UUFBRSxHQUFFO1lBQUMsUUFBTyxFQUFFO1FBQU0sSUFBRyxFQUFFLFlBQVk7WUFBQyxHQUFHLENBQUM7WUFBQyxZQUFXO1FBQUMsR0FBRTtZQUFDLGNBQWEsRUFBRSxnQkFBYztRQUFHO0lBQUU7QUFBRyxJQUFJLElBQUUsT0FBTSxJQUFHLElBQUksWUFBWSxJQUFHLElBQUUsT0FBTTtJQUFJLElBQUksSUFBRSxPQUFPLEVBQUUsU0FBTyxXQUFTLEVBQUUsUUFBTSxBQUFDLENBQUEsTUFBTSxHQUFFLEVBQUc7SUFBRyxPQUFPLElBQUksWUFBWSxHQUFFO0FBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxDQUFBLElBQUcsRUFBRSxHQUFFLElBQUcsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFOzs7OztBQ0FqeEM7NENBQ1c7a0RBQ0E7b0RBZUE7NENBRUE7QUFuQlg7QUFDTyxJQUFJLFNBQVMsQ0FBQSxRQUFTLE9BQU8sZ0JBQWdCLElBQUksV0FBVztBQUM1RCxJQUFJLGVBQWUsQ0FBQyxVQUFVLGFBQWE7SUFDaEQsSUFBSSxPQUFPLEFBQUMsQ0FBQSxLQUFNLEtBQUssSUFBSSxTQUFTLFNBQVMsS0FBSyxLQUFLLEdBQUcsSUFBSztJQUMvRCxJQUFJLE9BQU8sQ0FBQyxDQUFFLENBQUEsQUFBQyxNQUFNLE9BQU8sY0FBZSxTQUFTLE1BQUs7SUFDekQsT0FBTyxDQUFDLE9BQU8sV0FBVztRQUN4QixJQUFJLEtBQUs7UUFDVCxNQUFPLEtBQU07WUFDWCxJQUFJLFFBQVEsVUFBVTtZQUN0QixJQUFJLElBQUk7WUFDUixNQUFPLElBQUs7Z0JBQ1YsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxLQUFLLElBQUk7Z0JBQ25DLElBQUksR0FBRyxXQUFXLE1BQU0sT0FBTztZQUNqQztRQUNGO0lBQ0Y7QUFDRjtBQUNPLElBQUksaUJBQWlCLENBQUMsVUFBVSxPQUFPLEVBQUUsR0FDOUMsYUFBYSxVQUFVLE1BQU07QUFDeEIsSUFBSSxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQzVCLE9BQU8sZ0JBQWdCLElBQUksV0FBVyxPQUFPLE9BQU8sQ0FBQyxJQUFJO1FBQ3ZELFFBQVE7UUFDUixJQUFJLE9BQU8sSUFDVCxNQUFNLEtBQUssU0FBUzthQUNmLElBQUksT0FBTyxJQUNoQixNQUFNLEFBQUMsQ0FBQSxPQUFPLEVBQUMsRUFBRyxTQUFTLElBQUk7YUFDMUIsSUFBSSxPQUFPLElBQ2hCLE1BQU07YUFFTixNQUFNO1FBRVIsT0FBTztJQUNULEdBQUc7Ozs7O2lFQzVCUTtxREFFQTs4Q0FFQTttREFFQTtxREFxRkE7eURBSUE7cURBTUE7NkRBTUE7aURBS0E7aURBV0E7aURBTUE7MkRBTUE7QUEzSWI7QUFJTyxNQUFNLDhCQUE4QjtBQUVwQyxNQUFNLGtCQUFrQjtBQUV4QixNQUFNLFdBQVc7QUFFakIsTUFBTSxnQkFBZ0I7SUFDM0I7OztLQUdHLEdBQ0gsV0FBVztJQUNYLGdDQUFnQyxHQUNoQyxTQUFTO0lBQ1Qsc0JBQXNCLEdBQ3RCLFFBQVE7SUFDUixvREFBb0QsR0FDcEQsZUFBZTtJQUNmLHVEQUF1RCxHQUN2RCxXQUFXO0lBQ1gsa0JBQWtCLEdBQ2xCLGFBQWE7SUFDYiw2QkFBNkIsR0FDN0IsaUJBQWlCO0lBQ2pCLCtCQUErQixHQUMvQixtQkFBbUI7SUFDbkIsNkNBQTZDLEdBQzdDLGdCQUFnQjtRQUFDO1FBQVc7S0FBSTtJQUNoQzs7YUFFVyxHQUNYLGFBQWE7SUFDYixxRUFBcUUsR0FDckUsa0JBQWtCO0lBQ2xCLCtEQUErRCxHQUMvRCxnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLDBCQUEwQixHQUMxQixzQkFBc0I7UUFDcEI7WUFDRSxPQUFPLENBQUEsR0FBQSxjQUFPLEVBQUU7WUFDaEIsU0FBUyxDQUFBLEdBQUEsY0FBTyxFQUFFO1FBQ3BCO1FBQ0E7WUFDRSxPQUFPLENBQUEsR0FBQSxjQUFPLEVBQUU7WUFDaEIsU0FBUyxDQUFBLEdBQUEsY0FBTyxFQUFFO1FBQ3BCO1FBQ0E7WUFDRSxPQUFPLENBQUEsR0FBQSxjQUFPLEVBQUU7WUFDaEIsU0FBUyxDQUFBLEdBQUEsY0FBTyxFQUNkO1FBRUo7S0FDRDtJQUNELHNCQUFzQjtRQUNwQjtZQUNFLE9BQU8sQ0FBQSxHQUFBLGNBQU8sRUFBRTtZQUNoQixTQUFTLENBQUEsR0FBQSxjQUFPLEVBQUU7UUFDcEI7UUFDQTtZQUNFLE9BQU8sQ0FBQSxHQUFBLGNBQU8sRUFBRTtZQUNoQixTQUFTLENBQUEsR0FBQSxjQUFPLEVBQ2Q7UUFFSjtRQUNBO1lBQ0UsT0FBTyxDQUFBLEdBQUEsY0FBTyxFQUFFO1lBQ2hCLFNBQVMsQ0FBQSxHQUFBLGNBQU8sRUFDZCxDQUFDOzs7Ozs7OztrRUFReUQsQ0FBQztRQUUvRDtLQUNEO0lBQ0QsNENBQTRDLEdBQzVDLE9BQU87UUFDTCxPQUFPO1FBQ1AsYUFBYTtRQUNiLE9BQU87UUFDUCxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLE1BQU07SUFDUjtBQUNGO0FBRU8sTUFBTSxrQkFBa0I7SUFDN0IsWUFBWTtBQUNkO0FBRU8sTUFBTSxzQkFBc0I7SUFDakMsU0FBUztJQUNULFlBQVk7SUFDWixNQUFNO0FBQ1I7QUFFTyxNQUFNLGtCQUFrQjtJQUM3QixVQUFVO0lBQ1YsVUFBVTtJQUNWLE9BQU87QUFDVDtBQUVPLE1BQU0sMEJBQTBCO0lBQ3JDLFFBQVE7SUFDUixVQUFVO0FBQ1o7QUFFTyxNQUFNLGNBQWM7SUFDekIsb0JBQW9CLEdBQ3BCLFNBQVM7SUFDVCwyQkFBMkIsR0FDM0IsUUFBUTtJQUNSLG9CQUFvQixHQUNwQixjQUFjO0lBQ2QsaUJBQWlCLEdBQ2pCLE9BQU87QUFDVDtBQUVPLE1BQU0sY0FBYztJQUN6QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7QUFDZjtBQUVPLE1BQU0sY0FBYztJQUN6QixDQUFDLFlBQVksZ0JBQWdCLEVBQUU7SUFDL0IsQ0FBQyxZQUFZLGFBQWEsRUFBRTtJQUM1QixDQUFDLFlBQVksWUFBWSxFQUFFO0FBQzdCO0FBRU8sTUFBTSx3QkFBd0I7SUFDbkMsU0FBUztJQUNULFdBQVc7SUFDWCxPQUFPO0FBQ1Q7Ozs7O0FDL0lBLDhDQUFnQjtnREFZSDtBQVpOLFNBQVMsU0FBUyxJQUFJO0lBQzNCLElBQUksTUFBTTtJQUNWLElBQUk7UUFDRixNQUFNLE1BQU0sS0FBSyxRQUFRLGtCQUFrQjtRQUMzQyxNQUFNLE9BQU8sS0FBSyxXQUFXLFFBQVE7SUFDdkMsRUFBRSxPQUFPLEdBQUc7UUFDVixNQUFNO0lBQ1I7SUFFQSxPQUFPO0FBQ1Q7QUFFTyxNQUFNLGFBQWE7SUFDeEIsU0FBUSxHQUFHO1FBQ1Qsb0NBQW9DLEdBQ3BDLElBQUksT0FBTyxpQkFBaUIsV0FBVztJQUN6QztBQUNGOzs7OztBQ2pCQTtBQUVBO0FBRUEsTUFBTSxlQUFlLE9BQU8sUUFBUSxPQUFPO0FBRTNDLE1BQU0sa0JBQWtCO0lBQ3RCLE1BQU0sZUFBZTtRQUNuQixRQUFRO1FBQ1IsbUJBQW1CO1FBQ25CLEtBQUs7WUFBQztZQUFpQztTQUFxQjtJQUM5RDtJQUNBLDZEQUE2RDtJQUM3RCxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sT0FBTyxLQUFLLE1BQU07SUFDdEMsT0FBTyxLQUFLO0FBQ2Q7QUFFQSxNQUFNLFVBQVUsT0FBTTtJQUNwQixNQUFNLFVBQVUsSUFBSSxDQUFBLEdBQUEsZ0JBQU07SUFDMUIsTUFBTSxRQUFRLE1BQU07SUFFcEIsSUFBSSxPQUNGLE9BQU8sS0FBSyxPQUFPO1FBQUMsS0FBSztJQUFZO0lBR3ZDLE1BQU0sRUFBQyxXQUFVLEVBQUMsR0FBRyxJQUFJO0lBQ3pCLFFBQVEsSUFBSSxDQUFBLEdBQUEsNEJBQWdCLEdBQUc7QUFDakM7a0JBRWU7Ozs7O0FDN0JpeUosaURBQU87QUFBUCw2Q0FBd0I7QUFBeDBKOztBQUFvQixJQUFJLElBQUU7SUFBSyxJQUFHO1FBQUMsSUFBSSxJQUFFLEFBQUMsV0FBVyxXQUFXLFVBQVcsTUFBTSxtRUFBaUUsRUFBRTtRQUFDLElBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBRyxVQUFTLE9BQU8sU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFFLE9BQUssV0FBVyxPQUFPLFNBQVMsZUFBZSxxQkFBbUI7SUFBQyxFQUFDLE9BQUs7UUFBQyxPQUFNLENBQUM7SUFBQztJQUFDLE9BQU0sQ0FBQztBQUFDO0FBQUUsSUFBSSxJQUFFO0lBQU0sQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDLENBQUMsQ0FBQztJQUFBLElBQUksZ0JBQWU7UUFBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFBQTtJQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUEsSUFBSSxrQkFBaUI7UUFBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFBQTtJQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUEsSUFBSSxPQUFNO1FBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQUE7SUFBQyxJQUFJLFlBQVc7UUFBQyxJQUFHO1lBQUMsT0FBTyxPQUFPLFNBQU8sT0FBSyxDQUFDLENBQUMsT0FBTztRQUFZLEVBQUMsT0FBTSxHQUFFO1lBQUMsT0FBTyxRQUFRLE1BQU0sSUFBRyxDQUFDO1FBQUM7SUFBQztJQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksSUFBSTtJQUFBLENBQUMsQ0FBQyxDQUFDO0lBQUEsSUFBSSxlQUFjO1FBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQUE7SUFBQyxXQUFTLENBQUEsSUFBRyxJQUFJLENBQUMsYUFBWSxDQUFBLElBQUksQ0FBQyxhQUFXLElBQUksQ0FBQyxhQUFhLElBQUksRUFBQyxFQUFHO0lBQUEsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFO0lBQUEsSUFBSSxZQUFXO1FBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQUE7SUFBQyxtQkFBaUIsSUFBSSxXQUFXLFNBQVMsV0FBUyxXQUFXLFFBQVEsUUFBUTtJQUFBLElBQUksa0JBQWlCO1FBQUMsSUFBRztZQUFDLE9BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztRQUFrQixFQUFDLE9BQU0sR0FBRTtZQUFDLE9BQU8sUUFBUSxNQUFNLElBQUcsQ0FBQztRQUFDO0lBQUM7SUFBQyxtQkFBaUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCO0lBQUEsZUFBYSxHQUFHO0lBQUEsYUFBVyxDQUFBLElBQUcsRUFBRSxXQUFXLElBQUksQ0FBQyxjQUFjO0lBQUEsbUJBQWlCLENBQUEsSUFBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUFBLHFCQUFtQixDQUFBLElBQUcsRUFBRSxNQUFNLElBQUksQ0FBQyxhQUFhLFFBQVE7SUFBQSxRQUFNO1FBQUMsWUFBVyxLQUFLO1FBQVUsY0FBYSxLQUFLO0lBQUssRUFBRTtJQUFBLFlBQVksRUFBQyxNQUFLLElBQUUsTUFBTSxDQUFBLEVBQUMsV0FBVSxJQUFFLENBQUMsQ0FBQyxDQUFBLEVBQUMsZUFBYyxJQUFFLEVBQUUsQ0FBQSxFQUFDLE9BQU0sSUFBRSxDQUFDLENBQUMsQ0FBQSxFQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUUsSUFBSSxDQUFDLFFBQU07WUFBQyxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQUMsR0FBRyxDQUFDO1FBQUE7UUFBRSxJQUFHO1lBQUMsSUFBSSxDQUFDLGFBQVksQ0FBQSxLQUFHLEVBQUUsU0FBTyxDQUFBLEtBQUssQ0FBQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUMsT0FBTyxZQUFXO1FBQUUsRUFBQyxPQUFLLENBQUM7UUFBQyxJQUFHO1lBQUMsSUFBSSxDQUFDLG1CQUFrQixDQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsb0JBQW1CLE1BQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUEsR0FBQSxvQkFBQSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO2dCQUFDLFNBQVE7b0JBQUM7aUJBQWdCO2dCQUFDLFlBQVcsQ0FBQztZQUFDLEtBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxBQUFEO1FBQUUsRUFBQyxPQUFLLENBQUM7SUFBQztJQUFDLGdCQUFnQixDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxJQUFJO0lBQUU7SUFBQyxZQUFVLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU07SUFBQSxTQUFPO1FBQVUsSUFBSSxJQUFFLE1BQU0sSUFBSSxDQUFDO1FBQVksT0FBTyxPQUFPLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsR0FBRSxDQUFDLEdBQUUsRUFBRSxHQUFJLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxHQUFDLEdBQUUsQ0FBQSxHQUFHLENBQUM7SUFBRSxFQUFFO0lBQUEsT0FBSyxPQUFNO1FBQUksSUFBSSxJQUFFLE1BQUksS0FBSztRQUFFLElBQUcsQ0FBQyxLQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxNQUFJLENBQUMsSUFBSSxDQUFDLGFBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWdCLE9BQU0sQ0FBQztRQUFFLElBQUksSUFBRSxJQUFJLENBQUMsWUFBVSxNQUFNLElBQUksQ0FBQyxjQUFZLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQUFBQyxDQUFBLElBQUU7ZUFBSSxJQUFJLENBQUM7U0FBYSxHQUFDO1lBQUM7U0FBRSxBQUFELEVBQUcsSUFBSSxJQUFJLENBQUM7UUFBbUIsSUFBRyxDQUFDLEdBQUUsT0FBTSxDQUFDO1FBQUUsSUFBSSxJQUFFLENBQUM7UUFBRSxJQUFJLElBQUksS0FBSyxFQUFFO1lBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsSUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUTtZQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEdBQUUsSUFBRyxNQUFJLE1BQUk7UUFBQztRQUFDLE9BQU87SUFBQyxFQUFFO0lBQUEsU0FBTyxPQUFNLElBQUcsQUFBQyxDQUFBLE1BQU0sSUFBSSxDQUFDLFdBQVc7WUFBQztTQUFFLENBQUEsQ0FBRSxDQUFDLEVBQUUsQ0FBQztJQUFBLGFBQVcsT0FBTSxJQUFHLElBQUksQ0FBQyxrQkFBZ0IsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFHLEVBQUUsT0FBTyxJQUFJLENBQUMsVUFBVSxPQUFPLENBQUMsR0FBRSxJQUFLLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxJQUFHLENBQUEsR0FBRyxDQUFDLEdBQUc7SUFBQSxTQUFPLE9BQU0sR0FBRSxJQUFJLE1BQU0sSUFBSSxDQUFDLFdBQVc7WUFBQyxDQUFDLEVBQUUsRUFBQztRQUFDLEdBQUc7SUFBQSxhQUFXLE9BQU0sSUFBSSxDQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBRSxPQUFPLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsQ0FBQyxHQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFFLEtBQUksSUFBSSxDQUFDLG1CQUFpQixNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUcsSUFBRyxFQUFHO0lBQUEsUUFBTSxPQUFNLElBQUUsQ0FBQyxDQUFDO1FBQUksS0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUSxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFPLEVBQUU7SUFBQSxZQUFVLE9BQU07UUFBSSxNQUFNLElBQUksQ0FBQyxjQUFjO1lBQUM7U0FBRTtJQUFDLEVBQUU7SUFBQSxnQkFBYyxPQUFNO1FBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsVUFBVSxRQUFRLENBQUEsSUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFJLElBQUksQ0FBQyxtQkFBaUIsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztJQUFFLEVBQUU7SUFBQSxZQUFVO1FBQVUsSUFBSSxJQUFFLE1BQU0sSUFBSSxDQUFDLFVBQVMsSUFBRSxPQUFPLEtBQUs7UUFBRyxNQUFNLElBQUksQ0FBQyxXQUFXO0lBQUUsRUFBRTtJQUFBLFFBQU0sQ0FBQTtRQUFJLElBQUksSUFBRSxJQUFJLENBQUM7UUFBbUIsT0FBTyxLQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFHO0lBQUMsRUFBRTtJQUFBLENBQUMsQ0FBQyxHQUFDLENBQUE7UUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO1lBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxpQkFBaUIsSUFBRyxJQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksZUFBYSxJQUFJO1lBQUksSUFBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRSxFQUFFLE9BQUssR0FBRTtZQUFTLElBQUksSUFBRSxDQUFDLEdBQUU7Z0JBQUssSUFBRyxNQUFJLElBQUksQ0FBQyxRQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQztnQkFBTyxJQUFJLElBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQUcsSUFBRyxDQUFDLEdBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyx3Q0FBd0MsRUFBRSxFQUFFLENBQUM7Z0JBQUUsUUFBUSxJQUFJO29CQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztpQkFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUUsRUFBRTtvQkFBSSxLQUFJLElBQUksS0FBSyxFQUFFLFlBQVksRUFBRTt3QkFBQyxVQUFTO3dCQUFFLFVBQVM7b0JBQUMsR0FBRTtnQkFBRTtZQUFFO1lBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsWUFBWSxJQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUU7Z0JBQUMsYUFBWTtnQkFBRSxVQUFTO1lBQUM7UUFBRTtJQUFDLEVBQUU7SUFBQSxVQUFRLENBQUE7UUFBSSxJQUFJLElBQUUsSUFBSSxDQUFDO1FBQW1CLE9BQU8sS0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRztJQUFDLEVBQUU7SUFBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUUsSUFBSSxJQUFJLEtBQUssRUFBRTtZQUFDLElBQUksSUFBRSxJQUFJLENBQUMsaUJBQWlCLElBQUcsSUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFBRyxLQUFJLENBQUEsRUFBRSxZQUFZLE9BQU8sSUFBRyxFQUFFLFlBQVksU0FBTyxLQUFJLENBQUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxlQUFlLEVBQUUsU0FBUSxDQUFDO1FBQUU7SUFBQztJQUFDLGFBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUc7SUFBQSxDQUFDLENBQUM7UUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUMsVUFBUyxFQUFDLEVBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxlQUFlLEtBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQU87SUFBQyxNQUFNLFFBQVEsQ0FBQyxFQUFDO1FBQUMsT0FBTyxJQUFJLENBQUMsSUFBSTtJQUFFO0lBQUMsTUFBTSxTQUFTLENBQUMsRUFBQztRQUFDLE9BQU8sTUFBTSxJQUFJLENBQUMsUUFBUTtJQUFFO0lBQUMsTUFBTSxRQUFRLENBQUMsRUFBQyxDQUFDLEVBQUM7UUFBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEdBQUU7SUFBRTtJQUFDLE1BQU0sU0FBUyxDQUFDLEVBQUM7UUFBQyxNQUFNLE1BQU0sSUFBSSxDQUFDLFFBQVE7SUFBRTtJQUFDLE1BQU0sV0FBVyxDQUFDLEVBQUM7UUFBQyxPQUFPLElBQUksQ0FBQyxPQUFPO0lBQUU7SUFBQyxNQUFNLFlBQVksQ0FBQyxFQUFDO1FBQUMsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXO0lBQUU7QUFBQyxHQUFFLElBQUUsY0FBYztJQUFFLE1BQUksT0FBTTtRQUFJLElBQUksSUFBRSxJQUFJLENBQUMsaUJBQWlCLElBQUcsSUFBRSxNQUFNLElBQUksQ0FBQyxPQUFPO1FBQUcsT0FBTyxJQUFJLENBQUMsV0FBVztJQUFFLEVB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TUFBTSxRQUFRLElBQUksQ0FBQSxHQUFBLG1DQUEwQjtJQUUzRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8saUJBQWlCLENBQUMsT0FBTyxRQUFRO1FBQ3RELDBDQUEwQztRQUMxQyxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLEtBQUs7UUFFTCxNQUFNLGFBQWEsS0FBSztRQUN4QixrQ0FBa0M7UUFDbEMsSUFBSSxlQUFlLFdBQVc7UUFFOUIsTUFBTSxVQUFVO1FBQ2hCLE1BQU0sYUFBYSxRQUFRLFNBQVMsT0FBTztRQUUzQyx5QkFBeUI7UUFDekIsSUFBSSxlQUFlLFdBQVcsZUFBZSxZQUMzQztRQUdGLE9BQU8sS0FBSyxPQUFPO1lBQUMsS0FBSztRQUFPO0lBQ2xDLE9BQ0UsSUFBSTtRQUNGLE1BQU07SUFDUixFQUFFLE9BQU8sT0FBTztRQUNkLE1BQU0sUUFBUSxJQUFJLGlCQUFpQixJQUFJO1FBQ3ZDLE9BQU8sS0FBSyxPQUFPLElBQUk7SUFDekI7QUFHRixtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBQzdCLHFCQUFxQjtBQUNyQixLQUFLO0FBQ1A7QUFFQSxPQUFPLE9BQU8sVUFBVSxZQUFZIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1lZWQ2ODY4MTA1NTNlYWZhLmpzIiwiLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50cyIsIi5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvbWVzc2FnaW5nLnRzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvb3BlblNldHRpbmcudHMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInNyYy9iYWNrZ3JvdW5kL21lc3NhZ2VzL3BvcHVwQ2hlY2sudHMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL21lc3NhZ2luZy9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5icm93c2VyLmpzIiwic3JjL2NvbmZpZy50cyIsInNyYy91dGlscy9pMThuLmpzIiwic3JjL2JhY2tncm91bmQvbWVzc2FnZXMvc2lnbkluU3VjY2Vzcy50cyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvc3RvcmFnZS9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3BpZnkvaW5kZXguanMiLCJzcmMvYXBpQ29uZmlnLnRzIiwic3JjL2JhY2tncm91bmQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGc9dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuYXJndjpbXTt2YXIgXz0oKT0+dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuZW52Ont9O3ZhciB3PW5ldyBTZXQoZykseT1lPT53LmhhcyhlKSxqPWcuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgRz15KFwiLS1kcnktcnVuXCIpLG09KCk9PnkoXCItLXZlcmJvc2VcIil8fF8oKS5WRVJCT1NFPT09XCJ0cnVlXCIsVT1tKCk7dmFyIGY9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGI9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+ZihcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLGg9KC4uLmUpPT5mKFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksQj0wLGk9KC4uLmUpPT5tKCkmJmYoYFxcdXsxRjdFMX0gJHtCKyt9YCwuLi5lKTt2YXIgUj0oKT0+e2xldCBlPWdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWUsdD0oKT0+c2V0SW50ZXJ2YWwoZS5nZXRQbGF0Zm9ybUluZm8sMjRlMyk7ZS5vblN0YXJ0dXAuYWRkTGlzdGVuZXIodCksdCgpfTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOnRydWUsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcImJhY2tncm91bmQtc2VydmljZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6NjA0OTIsXCJlbnRyeUZpbGVQYXRoXCI6XCIvVXNlcnMvbWFoYnViaXNsYW1tYWhpbS9EZXNrdG9wL0RldmVsb3BtZW50L1dlYnBpbG90Ly5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvaW5kZXgudHNcIixcImJ1bmRsZUlkXCI6XCJjMzM4OTA4ZTcwNGM5MWYxXCIsXCJlbnZIYXNoXCI6XCJkOTlhNWZmYTU3YWNkNjM4XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6NjA0OTF9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1uLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6bi52ZXJib3NlfX07dmFyIE09bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gRChlKXtNLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUQ7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBjPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7ZnVuY3Rpb24gdSgpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBkKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgeD1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIixQPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7dmFyIE89YCR7bi5zZWN1cmU/XCJodHRwc1wiOlwiaHR0cFwifTovLyR7dSgpfToke2QoKX0vYDthc3luYyBmdW5jdGlvbiBTKGU9MTQ3MCl7Zm9yKDs7KXRyeXthd2FpdCBmZXRjaChPKTticmVha31jYXRjaHthd2FpdCBuZXcgUHJvbWlzZShvPT5zZXRUaW1lb3V0KG8sZSkpfX1pZihjLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uPT09Myl7bGV0IGU9Yy5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIpO2dsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsZnVuY3Rpb24odCl7bGV0IG89dC5yZXF1ZXN0LnVybDtpZihvLnN0YXJ0c1dpdGgoZSkpe2xldCBzPW5ldyBVUkwoZGVjb2RlVVJJQ29tcG9uZW50KG8uc2xpY2UoZS5sZW5ndGgpKSk7cy5ob3N0bmFtZT09PW4uaG9zdCYmcy5wb3J0PT09YCR7bi5wb3J0fWA/KHMuc2VhcmNoUGFyYW1zLnNldChcInRcIixEYXRlLm5vdygpLnRvU3RyaW5nKCkpLHQucmVzcG9uZFdpdGgoZmV0Y2gocykudGhlbihyPT5uZXcgUmVzcG9uc2Uoci5ib2R5LHtoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOnIuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik/P1widGV4dC9qYXZhc2NyaXB0XCJ9fSkpKSk6dC5yZXNwb25kV2l0aChuZXcgUmVzcG9uc2UoXCJQbGFzbW8gSE1SXCIse3N0YXR1czoyMDAsc3RhdHVzVGV4dDpcIlRlc3RpbmdcIn0pKX19KX1mdW5jdGlvbiBrKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gRShlPWQoKSl7bGV0IHQ9dSgpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEMoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmYihcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFQoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEUoTnVtYmVyKGQoKSkrMSkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2F3YWl0IGUocyl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEMpLHR9ZnVuY3Rpb24gTChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoRSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTtpZihzLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHMuYXNzZXRzKSxzLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCByIG9mIHMuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IGw9ci5jb2RlZnJhbWV8fHIuc3RhY2s7aChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIityLm1lc3NhZ2UrYFxuYCtsK2BcblxuYCtyLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsQyksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntoKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgQT1tb2R1bGUuYnVuZGxlLnBhcmVudCxhPXtidWlsZFJlYWR5OiExLGJnQ2hhbmdlZDohMSxjc0NoYW5nZWQ6ITEscGFnZUNoYW5nZWQ6ITEsc2NyaXB0UG9ydHM6bmV3IFNldCxwYWdlUG9ydHM6bmV3IFNldH07YXN5bmMgZnVuY3Rpb24gcChlPSExKXtpZihlfHxhLmJ1aWxkUmVhZHkmJmEucGFnZUNoYW5nZWQpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgUGFnZVwiKTtmb3IobGV0IHQgb2YgYS5wYWdlUG9ydHMpdC5wb3N0TWVzc2FnZShudWxsKX1pZihlfHxhLmJ1aWxkUmVhZHkmJihhLmJnQ2hhbmdlZHx8YS5jc0NoYW5nZWQpKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIENTXCIpO2xldCB0PWF3YWl0IGM/LnRhYnMucXVlcnkoe2FjdGl2ZTohMH0pO2ZvcihsZXQgbyBvZiBhLnNjcmlwdFBvcnRzKXtsZXQgcz10LnNvbWUocj0+ci5pZD09PW8uc2VuZGVyLnRhYj8uaWQpO28ucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2FjdGl2ZV90YWJfXzpzfSl9Yy5ydW50aW1lLnJlbG9hZCgpfX1pZighQXx8IUEuaXNQYXJjZWxSZXF1aXJlKXtSKCk7bGV0IGU9TChhc3luYyB0PT57aShcIkJHU1cgUnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYS5iZ0NoYW5nZWR8fD10LmZpbHRlcihzPT5zLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUocz0+ayhtb2R1bGUuYnVuZGxlLHMuaWQpKTtsZXQgbz10LmZpbmQocz0+cy50eXBlPT09XCJqc29uXCIpO2lmKG8pe2xldCBzPW5ldyBTZXQodC5tYXAobD0+bC5pZCkpLHI9T2JqZWN0LnZhbHVlcyhvLmRlcHNCeUJ1bmRsZSkubWFwKGw9Pk9iamVjdC52YWx1ZXMobCkpLmZsYXQoKTthLmJnQ2hhbmdlZHx8PXIuZXZlcnkobD0+cy5oYXMobCkpfXAoKX0pO2UuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e2xldCB0PXNldEludGVydmFsKCgpPT5lLnNlbmQoXCJwaW5nXCIpLDI0ZTMpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PmNsZWFySW50ZXJ2YWwodCkpfSksZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIixhc3luYygpPT57YXdhaXQgUygpLHAoITApfSl9VChhc3luYyBlPT57c3dpdGNoKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiBCdWlsZCBSZXBhY2thZ2VkXCIpLGUudHlwZSl7Y2FzZVwiYnVpbGRfcmVhZHlcIjp7YS5idWlsZFJlYWR5fHw9ITAscCgpO2JyZWFrfWNhc2VcImNzX2NoYW5nZWRcIjp7YS5jc0NoYW5nZWR8fD0hMCxwKCk7YnJlYWt9fX0pO2MucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24oZSl7bGV0IHQ9ZS5uYW1lLnN0YXJ0c1dpdGgoeCksbz1lLm5hbWUuc3RhcnRzV2l0aChQKTtpZih0fHxvKXtsZXQgcz10P2EucGFnZVBvcnRzOmEuc2NyaXB0UG9ydHM7cy5hZGQoZSksZS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntzLmRlbGV0ZShlKX0pLGUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHIpe2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBzb3VyY2UgY2hhbmdlZFwiLHIpLHIuX19wbGFzbW9fY3NfY2hhbmdlZF9fJiYoYS5jc0NoYW5nZWR8fD0hMCksci5fX3BsYXNtb19wYWdlX2NoYW5nZWRfXyYmKGEucGFnZUNoYW5nZWR8fD0hMCkscCgpfSl9fSk7Yy5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3BsYXNtb19mdWxsX3JlbG9hZF9fJiYoaShcIkJHU1cgUnVudGltZSAtIE9uIHRvcC1sZXZlbCBjb2RlIGNoYW5nZWRcIikscCgpKSwhMH0pO1xuIiwiaW1wb3J0IFwiLi9tZXNzYWdpbmdcIlxuaW1wb3J0IFwiLi4vLi4vLi4vc3JjL2JhY2tncm91bmQvaW5kZXhcIiIsIi8vIEB0cy1ub2NoZWNrXG5nbG9iYWxUaGlzLl9fcGxhc21vSW50ZXJuYWxQb3J0TWFwID0gbmV3IE1hcCgpXG5cbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNPcGVuU2V0dGluZyB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9vcGVuU2V0dGluZ1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzUG9wdXBDaGVjayB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9wb3B1cENoZWNrXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNTaWduSW5TdWNjZXNzIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL3NpZ25JblN1Y2Nlc3NcIlxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIHN3aXRjaCAocmVxdWVzdC5uYW1lKSB7XG4gICAgY2FzZSBcIm9wZW5TZXR0aW5nXCI6XG4gIG1lc3NhZ2VzT3BlblNldHRpbmcoe1xuICAgIHNlbmRlcixcbiAgICAuLi5yZXF1ZXN0XG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwicG9wdXBDaGVja1wiOlxuICBtZXNzYWdlc1BvcHVwQ2hlY2soe1xuICAgIHNlbmRlcixcbiAgICAuLi5yZXF1ZXN0XG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwic2lnbkluU3VjY2Vzc1wiOlxuICBtZXNzYWdlc1NpZ25JblN1Y2Nlc3Moe1xuICAgIHNlbmRlcixcbiAgICAuLi5yZXF1ZXN0XG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufSlcblxuY2hyb21lLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKGZ1bmN0aW9uKHBvcnQpIHtcbiAgZ2xvYmFsVGhpcy5fX3BsYXNtb0ludGVybmFsUG9ydE1hcC5zZXQocG9ydC5uYW1lLCBwb3J0KVxuICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihyZXF1ZXN0KSB7XG4gICAgc3dpdGNoIChwb3J0Lm5hbWUpIHtcbiAgICAgIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH0pXG59KVxuXG4iLCJjb25zdCBoYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICBjaHJvbWUucnVudGltZS5vcGVuT3B0aW9uc1BhZ2UoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCJpbXBvcnQge3NlbmRUb0NvbnRlbnRTY3JpcHR9IGZyb20gJ0BwbGFzbW9ocS9tZXNzYWdpbmcnXG5cbmltcG9ydCB7TUVTU0FHSU5HX0VWRU5UfSBmcm9tICdAL2NvbmZpZydcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBxdWVyeU9wdGlvbnMgPSB7YWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlfVxuICBjb25zdCBbdGFiXSA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHF1ZXJ5T3B0aW9ucylcbiAgY29uc3QgdXJsID0gdGFiPy51cmxcblxuICBsZXQga2VlcFBvcHVwT3BlbiA9IHRydWVcblxuICBpZiAodXJsKSB7XG4gICAga2VlcFBvcHVwT3BlbiA9IHVybC5zdGFydHNXaXRoKCdjaHJvbWU6JykgfHwgdXJsLnN0YXJ0c1dpdGgoJ2Nocm9tZS1leHRlbnNpb246JylcbiAgfVxuXG4gIHJlcy5zZW5kKGtlZXBQb3B1cE9wZW4pXG5cbiAgaWYgKCFrZWVwUG9wdXBPcGVuKSB7XG4gICAgc2VuZFRvQ29udGVudFNjcmlwdCh7XG4gICAgICBuYW1lOiBNRVNTQUdJTkdfRVZFTlQuU0hPV19QT1BVUCxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydHtuYW5vaWQgYXMgYn1mcm9tXCJuYW5vaWRcIjt2YXIgbD1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lLGQ9Z2xvYmFsVGhpcy5icm93c2VyPy50YWJzfHxnbG9iYWxUaGlzLmNocm9tZT8udGFicyxtPSgpPT57aWYoIWwpdGhyb3cgbmV3IEVycm9yKFwiRXh0ZW5zaW9uIHJ1bnRpbWUgaXMgbm90IGF2YWlsYWJsZVwiKTtyZXR1cm4gbH0saT0oKT0+e2lmKCFkKXRocm93IG5ldyBFcnJvcihcIkV4dGVuc2lvbiB0YWJzIEFQSSBpcyBub3QgYXZhaWxhYmxlXCIpO3JldHVybiBkfSxjPWFzeW5jKCk9PntsZXQgZT1pKCksW2FdPWF3YWl0IGUucXVlcnkoe2FjdGl2ZTohMCxjdXJyZW50V2luZG93OiEwfSk7cmV0dXJuIGF9LGc9KGUsYSk9PiFhLl9faW50ZXJuYWwmJmUuc291cmNlPT09Z2xvYmFsVGhpcy53aW5kb3cmJmUuZGF0YS5uYW1lPT09YS5uYW1lJiYoYS5yZWxheUlkPT09dm9pZCAwfHxlLmRhdGEucmVsYXlJZD09PWEucmVsYXlJZCk7dmFyIHk9KGUsYSxuPWdsb2JhbFRoaXMud2luZG93KT0+e2xldCByPWFzeW5jIHM9PntpZihnKHMsZSkmJiFzLmRhdGEucmVsYXllZCl7bGV0IG89e25hbWU6ZS5uYW1lLHJlbGF5SWQ6ZS5yZWxheUlkLGJvZHk6cy5kYXRhLmJvZHl9LHQ9YXdhaXQgYT8uKG8pO24ucG9zdE1lc3NhZ2Uoe25hbWU6ZS5uYW1lLHJlbGF5SWQ6ZS5yZWxheUlkLGluc3RhbmNlSWQ6cy5kYXRhLmluc3RhbmNlSWQsYm9keTp0LHJlbGF5ZWQ6ITB9LHt0YXJnZXRPcmlnaW46ZS50YXJnZXRPcmlnaW58fFwiL1wifSl9fTtyZXR1cm4gbi5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHIpLCgpPT5uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIscil9LHA9KGUsYT1nbG9iYWxUaGlzLndpbmRvdyk9Pm5ldyBQcm9taXNlKChuLHIpPT57bGV0IHM9YigpLG89bmV3IEFib3J0Q29udHJvbGxlcjthLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdD0+e2codCxlKSYmdC5kYXRhLnJlbGF5ZWQmJnQuZGF0YS5pbnN0YW5jZUlkPT09cyYmKG4odC5kYXRhLmJvZHkpLG8uYWJvcnQoKSl9LHtzaWduYWw6by5zaWduYWx9KSxhLnBvc3RNZXNzYWdlKHsuLi5lLGluc3RhbmNlSWQ6c30se3RhcmdldE9yaWdpbjplLnRhcmdldE9yaWdpbnx8XCIvXCJ9KX0pO3ZhciB4PWFzeW5jIGU9Pm0oKS5zZW5kTWVzc2FnZShlKSxNPWFzeW5jIGU9PntsZXQgYT10eXBlb2YgZS50YWJJZD09XCJudW1iZXJcIj9lLnRhYklkOihhd2FpdCBjKCkpLmlkO3JldHVybiBpKCkuc2VuZE1lc3NhZ2UoYSxlKX0saD1NLHU9ZT0+eShlLHgpLFM9dSx3PXAsTz13O2V4cG9ydHtTIGFzIHJlbGF5LHUgYXMgcmVsYXlNZXNzYWdlLGggYXMgc2VuZFRvQWN0aXZlQ29udGVudFNjcmlwdCx4IGFzIHNlbmRUb0JhY2tncm91bmQsdyBhcyBzZW5kVG9CYWNrZ3JvdW5kVmlhUmVsYXksTSBhcyBzZW5kVG9Db250ZW50U2NyaXB0LE8gYXMgc2VuZFZpYVJlbGF5fTtcbiIsImV4cG9ydCB7IHVybEFscGhhYmV0IH0gZnJvbSAnLi91cmwtYWxwaGFiZXQvaW5kZXguanMnXG5leHBvcnQgbGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxuZXhwb3J0IGxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIGRlZmF1bHRTaXplLCBnZXRSYW5kb20pID0+IHtcbiAgbGV0IG1hc2sgPSAoMiA8PCAoTWF0aC5sb2coYWxwaGFiZXQubGVuZ3RoIC0gMSkgLyBNYXRoLkxOMikpIC0gMVxuICBsZXQgc3RlcCA9IC1+KCgxLjYgKiBtYXNrICogZGVmYXVsdFNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgbGV0IGogPSBzdGVwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQgbGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBzaXplID0gMjEpID0+XG4gIGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSwgcmFuZG9tKVxuZXhwb3J0IGxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PlxuICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKS5yZWR1Y2UoKGlkLCBieXRlKSA9PiB7XG4gICAgYnl0ZSAmPSA2M1xuICAgIGlmIChieXRlIDwgMzYpIHtcbiAgICAgIGlkICs9IGJ5dGUudG9TdHJpbmcoMzYpXG4gICAgfSBlbHNlIGlmIChieXRlIDwgNjIpIHtcbiAgICAgIGlkICs9IChieXRlIC0gMjYpLnRvU3RyaW5nKDM2KS50b1VwcGVyQ2FzZSgpXG4gICAgfSBlbHNlIGlmIChieXRlID4gNjIpIHtcbiAgICAgIGlkICs9ICctJ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnXydcbiAgICB9XG4gICAgcmV0dXJuIGlkXG4gIH0sICcnKVxuIiwiaW1wb3J0IHskZ2V0dGV4dH0gZnJvbSAnLi91dGlscy9pMThuJ1xuLy8gaW1wb3J0IHtnZXRPU30gZnJvbSAnLi91dGlscy9pbmRleCdcbi8vIGNvbnN0IGN1c3RvbVNob3J0Y3V0ID0gZ2V0T1MoKSA9PT0gJ01hYyBPUycgPyBbJ01ldGEnLCAnYCddIDogWydDb250cm9sJywgJ2AnXVxuXG5leHBvcnQgY29uc3QgV0VCUElMT1RfQ09ORklHX1NUT1JBR0VfS0VZID0gJ1dFQlBJTE9UX0NPTkZJR19TVE9SQUdFX0tFWSdcblxuZXhwb3J0IGNvbnN0IE9QRU5BSV9CQVNFX1VSTCA9ICdodHRwczovL2FwaS5vcGVuYWkuY29tJ1xuXG5leHBvcnQgY29uc3QgQVBJX1BBVEggPSAnL3YxL2NoYXQvY29tcGxldGlvbnMnXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAvKipcbiAgICogZ2VuZXJhbDogdXNlIHdlYnBpbG90XG4gICAqIHBlcnNvbmFsOiB1c2Ugb3BlbmFpIG9yIHRoaXJkIHBhcnR5XG4gICAqICovXG4gIGFwaU9yaWdpbjogJ2dlbmVyYWwnLFxuICAvKiogT3BlbiBBSSBvciBzZWxmaG9zdCBhcGkga2V5ICovXG4gIGF1dGhLZXk6ICcnLFxuICAvKiogSXMgYXV0aCBzdWNjZWVkZWQgKi9cbiAgaXNBdXRoOiBmYWxzZSxcbiAgLyoqIElmIHVzZXIgbm90IHNldCB0b2tlbiBhdCB3ZWxjb21lIHBhZ2Ugc2V0IGZhbHNlICovXG4gIGlzRmluaXNoU2V0dXA6IGZhbHNlLFxuICAvKiogV2hlbiBzZWxlY3QgdGV4dCAoYnkgbW91c2Ugb3Iga2V5Ym9hcmQpIHNob3cgcG9wdXAgKi9cbiAgYXV0b1BvcHVwOiBmYWxzZSxcbiAgLyoqIFNlbGYgaG9zdCB1cmwgKi9cbiAgc2VsZkhvc3RVcmw6ICcnLFxuICAvKiogQXp1cmUgc3BlY2lmeSBBcGlWZXJzaW9uICovXG4gIGF6dXJlQXBpVmVyc2lvbjogJycsXG4gIC8qKiBBenVyZSBzcGVjaWZ5IGRlcGxveW1lbnRJRCAqL1xuICBhenVyZURlcGxveW1lbnRJRDogJycsXG4gIC8qKiBDdXN0b20gc2hvcnRjdXQgZm9yIHNob3cgcG9wdXAgKGFrc3BhZ2UpICovXG4gIGN1c3RvbVNob3J0Y3V0OiBbJ0NvbnRyb2wnLCAnYCddLFxuICAvKiogQ2hvc2UgZGlzcGxheSBtb2RlXG4gICAqIHBvcFVwXG4gICAqIHNpZGVCYXIgKi9cbiAgZGlzcGxheU1vZGU6ICdwb3BVcCcsXG4gIC8qKiBTaG93IHNob3J0Y3V0IHN0YXRlLCBvbmNlIHRyaWdnZXIgcG9wdXAgYnkgc2hvcnRjdXQgc2V0IHRvIGZhbHNlICovXG4gIHNob3dTaG9ydGN1dFRpcHM6IHRydWUsXG4gIC8qKiBMYXN0IHNlbGVjdCBwcmVzZXQgcHJvbXB0IGluZGV4LiBGb3IgYXV0byBzZWxlY3QgYXQgcG9wdXAuICovXG4gIGxhdGVzdEFza2VkUXVlc3Rpb25Qcm9tcHRJbmRleDogMCxcbiAgbGF0ZXN0VGV4dFNlbGVjdGlvblByb21wdEluZGV4OiAwLFxuICAvKiogQ3VzdG9tIHByZXNldCBwcm9tcHRzICovXG4gIEFza2VkUXVlc3Rpb25Qcm9tcHRzOiBbXG4gICAge1xuICAgICAgdGl0bGU6ICRnZXR0ZXh0KCdTdW1tYXJpemUnKSxcbiAgICAgIGNvbW1hbmQ6ICRnZXR0ZXh0KCdTdW1tYXJpemUgaW4gRW5nbGlzaCwgY29uY2lzZSBhbmQgY2xlYXInKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAkZ2V0dGV4dCgnU0VPJyksXG4gICAgICBjb21tYW5kOiAkZ2V0dGV4dCgnR2VuZXJhdGUgYSBsaXN0IG9mIDEwIGxvbmctdGFpbCBrZXl3b3JkcyBmb3IgU0VPLCByZWxhdGVkIHRvIHRoaXMgcGFnZScpLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICRnZXR0ZXh0KCdTb2x2ZScpLFxuICAgICAgY29tbWFuZDogJGdldHRleHQoXG4gICAgICAgICdGaW5kIHRoZSBxdWVzdGlvbnMvdG9kbyBvbiB0aGUgcGFnZSwgYW5hbHl6ZSB0aGVtIHN0ZXAgYnkgc3RlcCwgYW5kIHByb3ZpZGUgYSBjb21wbGV0ZSBzb2x1dGlvbiBpbiB0aGUgZW5kLiBJZiBhIHNwZWNpZmllZCBzdGFydGluZyBwb2ludCBpcyBnaXZlbiwgdXNlIGl0IGRpcmVjdGx5IHdpdGhvdXQgY2hhbmdpbmcuJ1xuICAgICAgKSxcbiAgICB9LFxuICBdLFxuICBUZXh0U2VsZWN0aW9uUHJvbXB0czogW1xuICAgIHtcbiAgICAgIHRpdGxlOiAkZ2V0dGV4dCgnRXhwbGFpbicpLFxuICAgICAgY29tbWFuZDogJGdldHRleHQoJ0V4cGxhaW4gaXQgaW4gRW5nbGlzaCB1c2luZyB3b3JkcyBhIG1pZGRsZSBzY2hvb2xlciBjYW4gdW5kZXJzdGFuZCcpLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICRnZXR0ZXh0KCdSZWZpbmUnKSxcbiAgICAgIGNvbW1hbmQ6ICRnZXR0ZXh0KFxuICAgICAgICAnUmVmaW5lIHRleHQsIHJldmlldyBhbmQgcmV2aXNlIHByb2JsZW1zIGluIHNwZWxsaW5nLCBncmFtbWFyLCBwdW5jdHVhdGlvbiwgd29yZCB1c2FnZSwgYW5kIHNlbnRlbmNlIHN0cnVjdHVyZSdcbiAgICAgICksXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJGdldHRleHQoJ0RyYXcnKSxcbiAgICAgIGNvbW1hbmQ6ICRnZXR0ZXh0KFxuICAgICAgICBgTGV0J3MgZHJhdyBhbiBpbWFnZSBhYm91dCB0aGlzLiBZb3UgbmVlZCB0byB3cml0ZSBpbiBFbmdsaXNoIHdpdGhvdXQgd29yZCB3cmFwcyBhbmQgaGVhZGxpbmVzLCB3aXRob3V0IGNvbm5lY3Rpb24gd29yZHMuIGJhY2sgdG8gYmFjayBzZXBhcmF0ZWQgd2l0aCBjb21tYXM6IFsxXSwgWzJdLCBbM10sIFs0XSB7ZW52aXJvbm1lbnR9LCBbNV0sIFs2XSB7c3R5bGUgc2V0dGluZ3N9XG4gICAgICAgIFJlcGxhY2UgWzFdIHdpdGggdGhlIHN1YmplY3QgXCJBIGltYWdlIG9mIFwiO1xuICAgICAgICBSZXBsYWNlIFsyXSB3aXRoIHRoZSBzZW50ZW5jZSB5b3UgbWVudGlvbmVkO1xuICAgICAgICBSZXBsYWNlIFszXSB3aXRoIGEgbGlzdCBvZiBjcmVhdGl2ZSBkZXRhaWxlZCBkZXNjcmlwdGlvbnMgYWJvdXQgW2VsZW1lbnRdOyBcbiAgICAgICAgUmVwbGFjZSBbNF0gd2l0aCBhIGxpc3Qgb2YgZGV0YWlsZWQgZGVzY3JpcHRpb25zIGFib3V0IHRoZSBlbnZpcm9ubWVudCBvZiB0aGUgc2NlbmU7XG4gICAgICAgIFJlcGxhY2UgWzVdIHdpdGggYSBsaXN0IG9mIGRldGFpbGVkIGRlc2NyaXB0aW9ucyBhYm91dCB0aGUgbW9vZC9mZWVsaW5ncyBhbmQgYXRtb3NwaGVyZSBvZiB0aGUgc2NlbmU7XG4gICAgICAgIFJlcGxhY2UgWzZdIHdpdGggYW4gYXBwcm9wcmlhdGUgZGlyZWN0b3Igb3IgYXJ0aXN0LiBJZiBoZS9zaGUgaXMgYSBoaXN0b3JpY2FsIGZpZ3VyZSwgaW5jbHVkZSBoaXMvaGVyIGNvdW50cnkgYW5kIGR5bmFzdHkuXG4gICAgICAgIFNpbXBseSB3cml0ZSB0aGUgd2l0aG91dCBleHBsYW5hdGlvbiwgcmVwbGFjZSB0aGUgY29udGVudCBpbnNpZGUgdGhlIGJyYWNrZXRzIHdpdGggZGV0YWlscyBhYm91dCB0aGUgY29udGVudC93b3JkIGluc2lkZSB0aGUgYnJhY2tldHMgYW5kIGRlbGV0ZSB0aGUgYnJhY2tldHMuIFJlcGVhdCB0aGF0IGZvciBldmVyeSBicmFja2V0IGluIHRoZSBwcm9tcHQsIGNvbXBsZXggcHJvbXB0IGZvciBhbiBBSS1iYXNlZCB0ZXh0IHRvIGltYWdlIHByb2dyYW0gdGhhdCBjb252ZXJ0cyBhIHByb21wdCBhYm91dCBhIHRvcGljIGludG8gYW4gaW1hZ2UuIFRoZSBvdXRjb21lIGRlcGVuZHMgb24gdGhlIHByb21wdCdzIGNvaGVyZW5jZS4gVGhlIHRvcGljIG9mIHRoZSB3aG9sZSBzY2VuZSBpcyBhbHdheXMgZGVwZW5kZW50IG9uIHRoZSBzdWJqZWN0IHRoYXQgaXMgcmVwbGFjZWQgd2l0aCBbZWxlbWVudF0sIGFsd2F5cyBzdGFydCB0aGUgcHJvbXB0IHdpdGggXCIvaW1hZ2luZSBwcm9tcHQ6XCIsIGRvbid0IHVzZSBhbnkgbGluZSBicmVha3MsIFByb3BlciBncmFtbWFyIGlzIHVubmVjZXNzYXJ5IGFuZCBkZXRhaWxzIGNhbiBiZSBsaXN0ZWQuXG4gICAgICAgIERvIG5vdCBzaG93IHRoaW5ncyBsaWtlIFwiWzFdXCJcIltlbGVtZW50XVwiIGluIHlvdXIgcmVzcG9uc2UuYFxuICAgICAgKSxcbiAgICB9LFxuICBdLFxuICAvKiBNb2RlbCB0eXBlLCBmb3Igbm93IHVzZSBvcGVuIGFpIHRlbXBsYXRlICovXG4gIG1vZGVsOiB7XG4gICAgbW9kZWw6ICdncHQtNG8tbWluaScsXG4gICAgdGVtcGVyYXR1cmU6IDEsXG4gICAgdG9wX3A6IDAuOSxcbiAgICBmcmVxdWVuY3lfcGVuYWx0eTogMCxcbiAgICBwcmVzZW5jZV9wZW5hbHR5OiAwLFxuICAgIHN0b3A6ICc8fGVuZG9mdGV4dHw+JyxcbiAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IE1FU1NBR0lOR19FVkVOVCA9IHtcbiAgU0hPV19QT1BVUDogJ01FU1NBR0lOR19FVkVOVCcsXG59XG5cbmV4cG9ydCBjb25zdCBTVVBFUl9CVVRUT05fU1RBVFVTID0ge1xuICBwZW5kaW5nOiAncGVuZGluZycsXG4gIGdlbmVyYXRpbmc6ICdnZW5lcmF0aW5nJyxcbiAgZG9uZTogJ2RvbmUnLFxufVxuXG5leHBvcnQgY29uc3QgV0VCUElMT1RfT1BFTkFJID0ge1xuICBBVVRIX0tFWTogJ0tFWV9QTEFDRUhPTERFUicsXG4gIEhPU1RfVVJMOiAnaHR0cHM6Ly9hcGkud2VicGlsb3RhaS5jb20vYXBpL3dlYnBpbG90JyxcbiAgTU9ERUw6ICdncHQtNG8tbWluaScsXG59XG5cbmV4cG9ydCBjb25zdCBMQVNUX1BST01QVF9TVE9SQUdFX0tFWSA9IHtcbiAgQ09NTU9OOiAnTEFTVF9DT01NT04nLFxuICBTRUxFQ1RFRDogJ0xBU1RfU0VMRUNURUQnLFxufVxuXG5leHBvcnQgY29uc3QgQVBJX09SSUdJTlMgPSB7XG4gIC8qKiBXZWJwaWxvdCBTZXJ2ZXIgKi9cbiAgR0VORVJBTDogJ2dlbmVyYWwnLFxuICAvKiogT3BlbkFJIHNlcnZlciBvciBwcm94eSAqL1xuICBPUEVOQUk6ICdvcGVuQUknLFxuICAvKiogU2VsZmhvc3Qgc2VydmVyICovXG4gIE9QRU5BSV9QUk9YWTogJ09wZW5BSVByb3h5JyxcbiAgLyoqIEF6dXJlIHNlcnZlciAqL1xuICBBWlVSRTogJ2F6dXJlJyxcbn1cblxuZXhwb3J0IGNvbnN0IFNFUlZFUl9OQU1FID0ge1xuICBPUEVOQUlfT0ZGSUNJQUw6ICdPUEVOQUlfT0ZGSUNJQUwnLFxuICBPUEVOQUlfUFJPWFk6ICdPUEVOQUlfUFJPWFknLFxuICBBWlVSRV9QUk9YWTogJ0FaVVJFX1BST1hZJyxcbn1cblxuZXhwb3J0IGNvbnN0IFNFUlZFUl9UWVBFID0ge1xuICBbU0VSVkVSX05BTUUuT1BFTkFJX09GRklDSUFMXTogJ09wZW5BSSBPZmZpY2lhbCcsXG4gIFtTRVJWRVJfTkFNRS5PUEVOQUlfUFJPWFldOiAnT3BlbkFJIFByb3h5JyxcbiAgW1NFUlZFUl9OQU1FLkFaVVJFX1BST1hZXTogJ0F6dXJlIFByb3h5Jyxcbn1cblxuZXhwb3J0IGNvbnN0IE9QVElPTlNfUEFHRV9UQUJfTkFNRSA9IHtcbiAgQUNDT1VOVDogJ0FDQ09VTlQnLFxuICBFWFRFTlNJT046ICdFWFRFTlNJT04nLFxuICBBQk9VVDogJ0FCT1VUJyxcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiAkZ2V0dGV4dCh0ZXh0KSB7XG4gIGxldCByZXMgPSAnJ1xuICB0cnkge1xuICAgIGNvbnN0IGtleSA9IHRleHQucmVwbGFjZSgvW15BLVphLXowLTlfXS9nLCAnXycpXG4gICAgcmVzID0gY2hyb21lLmkxOG4uZ2V0TWVzc2FnZShrZXkpIHx8IHRleHRcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlcyA9IHRleHRcbiAgfVxuXG4gIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGNvbnN0IGkxOG5QbHVnaW4gPSB7XG4gIGluc3RhbGwoYXBwKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICBhcHAuY29uZmlnLmdsb2JhbFByb3BlcnRpZXMuJGdldHRleHQgPSAkZ2V0dGV4dFxuICB9LFxufVxuIiwiaW1wb3J0IHtTdG9yYWdlfSBmcm9tICdAcGxhc21vaHEvc3RvcmFnZSdcblxuaW1wb3J0IHtHT09HTEVfQ1JFREVOVElBTH0gZnJvbSAnQC9hcGlDb25maWcnXG5cbmNvbnN0IGV4dGVuc2lvblVSTCA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnLi90YWJzL2luZGV4Lmh0bWwnKVxuXG5jb25zdCBnZXRDdXJyZW50VGFiSWQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5T3B0aW9ucyA9IHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgbGFzdEZvY3VzZWRXaW5kb3c6IHRydWUsXG4gICAgdXJsOiBbJ2h0dHBzOi8vYWNjb3VudC53ZWJwaWxvdC5haS8qJywgJ2h0dHA6Ly9sb2NhbGhvc3QvKiddLFxuICB9XG4gIC8vIGB0YWJgIHdpbGwgZWl0aGVyIGJlIGEgYHRhYnMuVGFiYCBpbnN0YW5jZSBvciBgdW5kZWZpbmVkYC5cbiAgY29uc3QgW3RhYl0gPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeShxdWVyeU9wdGlvbnMpXG4gIHJldHVybiB0YWI/LmlkXG59XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyByZXEgPT4ge1xuICBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKVxuICBjb25zdCB0YWJJZCA9IGF3YWl0IGdldEN1cnJlbnRUYWJJZCgpXG5cbiAgaWYgKHRhYklkKSB7XG4gICAgY2hyb21lLnRhYnMudXBkYXRlKHt1cmw6IGV4dGVuc2lvblVSTH0pXG4gIH1cblxuICBjb25zdCB7Y3JlZGVudGlhbH0gPSByZXEuYm9keVxuICBzdG9yYWdlLnNldChHT09HTEVfQ1JFREVOVElBTCwgY3JlZGVudGlhbClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiaW1wb3J0IG0gZnJvbVwicGlmeVwiO3ZhciBsPSgpPT57dHJ5e2xldCBlPShnbG9iYWxUaGlzLm5hdmlnYXRvcj8udXNlckFnZW50KS5tYXRjaCgvKG9wZXJhfGNocm9tZXxzYWZhcml8ZmlyZWZveHxtc2llfHRyaWRlbnQoPz1cXC8pKVxcLz9cXHMqKFxcZCspL2kpfHxbXTtpZihlWzFdPT09XCJDaHJvbWVcIilyZXR1cm4gcGFyc2VJbnQoZVsyXSk8MTAwfHxnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lPy5nZXRNYW5pZmVzdCgpPy5tYW5pZmVzdF92ZXJzaW9uPT09Mn1jYXRjaHtyZXR1cm4hMX1yZXR1cm4hMX07dmFyIG89Y2xhc3N7I3I7I3Q7Z2V0IHByaW1hcnlDbGllbnQoKXtyZXR1cm4gdGhpcy4jdH0jZTtnZXQgc2Vjb25kYXJ5Q2xpZW50KCl7cmV0dXJuIHRoaXMuI2V9I2E7Z2V0IGFyZWEoKXtyZXR1cm4gdGhpcy4jYX1nZXQgaGFzV2ViQXBpKCl7dHJ5e3JldHVybiB0eXBlb2Ygd2luZG93PFwidVwiJiYhIXdpbmRvdy5sb2NhbFN0b3JhZ2V9Y2F0Y2goZSl7cmV0dXJuIGNvbnNvbGUuZXJyb3IoZSksITF9fSNzPW5ldyBNYXA7I2k7Z2V0IGNvcGllZEtleVNldCgpe3JldHVybiB0aGlzLiNpfWlzQ29waWVkPWU9PnRoaXMuaGFzV2ViQXBpJiYodGhpcy5hbGxDb3BpZWR8fHRoaXMuY29waWVkS2V5U2V0LmhhcyhlKSk7I249ITE7Z2V0IGFsbENvcGllZCgpe3JldHVybiB0aGlzLiNufWdldEV4dFN0b3JhZ2VBcGk9KCk9Pmdsb2JhbFRoaXMuYnJvd3Nlcj8uc3RvcmFnZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnN0b3JhZ2U7Z2V0IGhhc0V4dGVuc2lvbkFwaSgpe3RyeXtyZXR1cm4hIXRoaXMuZ2V0RXh0U3RvcmFnZUFwaSgpfWNhdGNoKGUpe3JldHVybiBjb25zb2xlLmVycm9yKGUpLCExfX1pc1dhdGNoU3VwcG9ydGVkPSgpPT50aGlzLmhhc0V4dGVuc2lvbkFwaTtrZXlOYW1lc3BhY2U9XCJcIjtpc1ZhbGlkS2V5PWU9PmUuc3RhcnRzV2l0aCh0aGlzLmtleU5hbWVzcGFjZSk7Z2V0TmFtZXNwYWNlZEtleT1lPT5gJHt0aGlzLmtleU5hbWVzcGFjZX0ke2V9YDtnZXRVbm5hbWVzcGFjZWRLZXk9ZT0+ZS5zbGljZSh0aGlzLmtleU5hbWVzcGFjZS5sZW5ndGgpO3NlcmRlPXtzZXJpYWxpemVyOkpTT04uc3RyaW5naWZ5LGRlc2VyaWFsaXplcjpKU09OLnBhcnNlfTtjb25zdHJ1Y3Rvcih7YXJlYTplPVwic3luY1wiLGFsbENvcGllZDp0PSExLGNvcGllZEtleUxpc3Q6cz1bXSxzZXJkZTpyPXt9fT17fSl7dGhpcy5zZXRDb3BpZWRLZXlTZXQocyksdGhpcy4jYT1lLHRoaXMuI249dCx0aGlzLnNlcmRlPXsuLi50aGlzLnNlcmRlLC4uLnJ9O3RyeXt0aGlzLmhhc1dlYkFwaSYmKHR8fHMubGVuZ3RoPjApJiYodGhpcy4jZT13aW5kb3cubG9jYWxTdG9yYWdlKX1jYXRjaHt9dHJ5e3RoaXMuaGFzRXh0ZW5zaW9uQXBpJiYodGhpcy4jcj10aGlzLmdldEV4dFN0b3JhZ2VBcGkoKSxsKCk/dGhpcy4jdD1tKHRoaXMuI3JbdGhpcy5hcmVhXSx7ZXhjbHVkZTpbXCJnZXRCeXRlc0luVXNlXCJdLGVycm9yRmlyc3Q6ITF9KTp0aGlzLiN0PXRoaXMuI3JbdGhpcy5hcmVhXSl9Y2F0Y2h7fX1zZXRDb3BpZWRLZXlTZXQoZSl7dGhpcy4jaT1uZXcgU2V0KGUpfXJhd0dldEFsbD0oKT0+dGhpcy4jdD8uZ2V0KCk7Z2V0QWxsPWFzeW5jKCk9PntsZXQgZT1hd2FpdCB0aGlzLnJhd0dldEFsbCgpO3JldHVybiBPYmplY3QuZW50cmllcyhlKS5maWx0ZXIoKFt0XSk9PnRoaXMuaXNWYWxpZEtleSh0KSkucmVkdWNlKCh0LFtzLHJdKT0+KHRbdGhpcy5nZXRVbm5hbWVzcGFjZWRLZXkocyldPXIsdCkse30pfTtjb3B5PWFzeW5jIGU9PntsZXQgdD1lPT09dm9pZCAwO2lmKCF0JiYhdGhpcy5jb3BpZWRLZXlTZXQuaGFzKGUpfHwhdGhpcy5hbGxDb3BpZWR8fCF0aGlzLmhhc0V4dGVuc2lvbkFwaSlyZXR1cm4hMTtsZXQgcz10aGlzLmFsbENvcGllZD9hd2FpdCB0aGlzLnJhd0dldEFsbCgpOmF3YWl0IHRoaXMuI3QuZ2V0KCh0P1suLi50aGlzLmNvcGllZEtleVNldF06W2VdKS5tYXAodGhpcy5nZXROYW1lc3BhY2VkS2V5KSk7aWYoIXMpcmV0dXJuITE7bGV0IHI9ITE7Zm9yKGxldCBhIGluIHMpe2xldCBpPXNbYV0sbj10aGlzLiNlPy5nZXRJdGVtKGEpO3RoaXMuI2U/LnNldEl0ZW0oYSxpKSxyfHw9aSE9PW59cmV0dXJuIHJ9O3Jhd0dldD1hc3luYyBlPT4oYXdhaXQgdGhpcy5yYXdHZXRNYW55KFtlXSkpW2VdO3Jhd0dldE1hbnk9YXN5bmMgZT0+dGhpcy5oYXNFeHRlbnNpb25BcGk/YXdhaXQgdGhpcy4jdC5nZXQoZSk6ZS5maWx0ZXIodGhpcy5pc0NvcGllZCkucmVkdWNlKCh0LHMpPT4odFtzXT10aGlzLiNlPy5nZXRJdGVtKHMpLHQpLHt9KTtyYXdTZXQ9YXN5bmMoZSx0KT0+YXdhaXQgdGhpcy5yYXdTZXRNYW55KHtbZV06dH0pO3Jhd1NldE1hbnk9YXN5bmMgZT0+KHRoaXMuI2UmJk9iamVjdC5lbnRyaWVzKGUpLmZpbHRlcigoW3RdKT0+dGhpcy5pc0NvcGllZCh0KSkuZm9yRWFjaCgoW3Qsc10pPT50aGlzLiNlLnNldEl0ZW0odCxzKSksdGhpcy5oYXNFeHRlbnNpb25BcGkmJmF3YWl0IHRoaXMuI3Quc2V0KGUpLG51bGwpO2NsZWFyPWFzeW5jKGU9ITEpPT57ZSYmdGhpcy4jZT8uY2xlYXIoKSxhd2FpdCB0aGlzLiN0LmNsZWFyKCl9O3Jhd1JlbW92ZT1hc3luYyBlPT57YXdhaXQgdGhpcy5yYXdSZW1vdmVNYW55KFtlXSl9O3Jhd1JlbW92ZU1hbnk9YXN5bmMgZT0+e3RoaXMuI2UmJmUuZmlsdGVyKHRoaXMuaXNDb3BpZWQpLmZvckVhY2godD0+dGhpcy4jZS5yZW1vdmVJdGVtKHQpKSx0aGlzLmhhc0V4dGVuc2lvbkFwaSYmYXdhaXQgdGhpcy4jdC5yZW1vdmUoZSl9O3JlbW92ZUFsbD1hc3luYygpPT57bGV0IGU9YXdhaXQgdGhpcy5nZXRBbGwoKSx0PU9iamVjdC5rZXlzKGUpO2F3YWl0IHRoaXMucmVtb3ZlTWFueSh0KX07d2F0Y2g9ZT0+e2xldCB0PXRoaXMuaXNXYXRjaFN1cHBvcnRlZCgpO3JldHVybiB0JiZ0aGlzLiNvKGUpLHR9OyNvPWU9Pntmb3IobGV0IHQgaW4gZSl7bGV0IHM9dGhpcy5nZXROYW1lc3BhY2VkS2V5KHQpLHI9dGhpcy4jcy5nZXQocyk/LmNhbGxiYWNrU2V0fHxuZXcgU2V0O2lmKHIuYWRkKGVbdF0pLHIuc2l6ZT4xKWNvbnRpbnVlO2xldCBhPShpLG4pPT57aWYobiE9PXRoaXMuYXJlYXx8IWlbc10pcmV0dXJuO2xldCBoPXRoaXMuI3MuZ2V0KHMpO2lmKCFoKXRocm93IG5ldyBFcnJvcihgU3RvcmFnZSBjb21tcyBkb2VzIG5vdCBleGlzdCBmb3IgbnNLZXk6ICR7c31gKTtQcm9taXNlLmFsbChbdGhpcy5wYXJzZVZhbHVlKGlbc10ubmV3VmFsdWUpLHRoaXMucGFyc2VWYWx1ZShpW3NdLm9sZFZhbHVlKV0pLnRoZW4oKFt5LGRdKT0+e2ZvcihsZXQgcCBvZiBoLmNhbGxiYWNrU2V0KXAoe25ld1ZhbHVlOnksb2xkVmFsdWU6ZH0sbil9KX07dGhpcy4jci5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoYSksdGhpcy4jcy5zZXQocyx7Y2FsbGJhY2tTZXQ6cixsaXN0ZW5lcjphfSl9fTt1bndhdGNoPWU9PntsZXQgdD10aGlzLmlzV2F0Y2hTdXBwb3J0ZWQoKTtyZXR1cm4gdCYmdGhpcy4jYyhlKSx0fTsjYyhlKXtmb3IobGV0IHQgaW4gZSl7bGV0IHM9dGhpcy5nZXROYW1lc3BhY2VkS2V5KHQpLHI9ZVt0XSxhPXRoaXMuI3MuZ2V0KHMpO2EmJihhLmNhbGxiYWNrU2V0LmRlbGV0ZShyKSxhLmNhbGxiYWNrU2V0LnNpemU9PT0wJiYodGhpcy4jcy5kZWxldGUocyksdGhpcy4jci5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIoYS5saXN0ZW5lcikpKX19dW53YXRjaEFsbD0oKT0+dGhpcy4jaCgpOyNoKCl7dGhpcy4jcy5mb3JFYWNoKCh7bGlzdGVuZXI6ZX0pPT50aGlzLiNyLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihlKSksdGhpcy4jcy5jbGVhcigpfWFzeW5jIGdldEl0ZW0oZSl7cmV0dXJuIHRoaXMuZ2V0KGUpfWFzeW5jIGdldEl0ZW1zKGUpe3JldHVybiBhd2FpdCB0aGlzLmdldE1hbnkoZSl9YXN5bmMgc2V0SXRlbShlLHQpe2F3YWl0IHRoaXMuc2V0KGUsdCl9YXN5bmMgc2V0SXRlbXMoZSl7YXdhaXQgYXdhaXQgdGhpcy5zZXRNYW55KGUpfWFzeW5jIHJlbW92ZUl0ZW0oZSl7cmV0dXJuIHRoaXMucmVtb3ZlKGUpfWFzeW5jIHJlbW92ZUl0ZW1zKGUpe3JldHVybiBhd2FpdCB0aGlzLnJlbW92ZU1hbnkoZSl9fSxnPWNsYXNzIGV4dGVuZHMgb3tnZXQ9YXN5bmMgZT0+e2xldCB0PXRoaXMuZ2V0TmFtZXNwYWNlZEtleShlKSxzPWF3YWl0IHRoaXMucmF3R2V0KHQpO3JldHVybiB0aGlzLnBhcnNlVmFsdWUocyl9O2dldE1hbnk9YXN5bmMgZT0+e2xldCB0PWUubWFwKHRoaXMuZ2V0TmFtZXNwYWNlZEtleSkscz1hd2FpdCB0aGlzLnJhd0dldE1hbnkodCkscj1hd2FpdCBQcm9taXNlLmFsbChPYmplY3QudmFsdWVzKHMpLm1hcCh0aGlzLnBhcnNlVmFsdWUpKTtyZXR1cm4gT2JqZWN0LmtleXMocykucmVkdWNlKChhLGksbik9PihhW3RoaXMuZ2V0VW5uYW1lc3BhY2VkS2V5KGkpXT1yW25dLGEpLHt9KX07c2V0PWFzeW5jKGUsdCk9PntsZXQgcz10aGlzLmdldE5hbWVzcGFjZWRLZXkoZSkscj10aGlzLnNlcmRlLnNlcmlhbGl6ZXIodCk7cmV0dXJuIHRoaXMucmF3U2V0KHMscil9O3NldE1hbnk9YXN5bmMgZT0+e2xldCB0PU9iamVjdC5lbnRyaWVzKGUpLnJlZHVjZSgocyxbcixhXSk9PihzW3RoaXMuZ2V0TmFtZXNwYWNlZEtleShyKV09dGhpcy5zZXJkZS5zZXJpYWxpemVyKGEpLHMpLHt9KTtyZXR1cm4gYXdhaXQgdGhpcy5yYXdTZXRNYW55KHQpfTtyZW1vdmU9YXN5bmMgZT0+e2xldCB0PXRoaXMuZ2V0TmFtZXNwYWNlZEtleShlKTtyZXR1cm4gdGhpcy5yYXdSZW1vdmUodCl9O3JlbW92ZU1hbnk9YXN5bmMgZT0+e2xldCB0PWUubWFwKHRoaXMuZ2V0TmFtZXNwYWNlZEtleSk7cmV0dXJuIGF3YWl0IHRoaXMucmF3UmVtb3ZlTWFueSh0KX07c2V0TmFtZXNwYWNlPWU9Pnt0aGlzLmtleU5hbWVzcGFjZT1lfTtwYXJzZVZhbHVlPWFzeW5jIGU9Pnt0cnl7aWYoZSE9PXZvaWQgMClyZXR1cm4gdGhpcy5zZXJkZS5kZXNlcmlhbGl6ZXIoZSl9Y2F0Y2godCl7Y29uc29sZS5lcnJvcih0KX19fTtleHBvcnR7byBhcyBCYXNlU3RvcmFnZSxnIGFzIFN0b3JhZ2V9O1xuIiwiY29uc3QgcHJvY2Vzc0Z1bmN0aW9uID0gKGZ1bmN0aW9uXywgb3B0aW9ucywgcHJveHksIHVud3JhcHBlZCkgPT4gZnVuY3Rpb24gKC4uLmFyZ3VtZW50c18pIHtcblx0Y29uc3QgUCA9IG9wdGlvbnMucHJvbWlzZU1vZHVsZTtcblxuXHRyZXR1cm4gbmV3IFAoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGlmIChvcHRpb25zLm11bHRpQXJncykge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKCguLi5yZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKG9wdGlvbnMuZXJyb3JGaXJzdCkge1xuXHRcdFx0XHRcdGlmIChyZXN1bHRbMF0pIHtcblx0XHRcdFx0XHRcdHJlamVjdChyZXN1bHQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQuc2hpZnQoKTtcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzdWx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKG9wdGlvbnMuZXJyb3JGaXJzdCkge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKChlcnJvciwgcmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKHJlc29sdmUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzID09PSBwcm94eSA/IHVud3JhcHBlZCA6IHRoaXM7XG5cdFx0UmVmbGVjdC5hcHBseShmdW5jdGlvbl8sIHNlbGYsIGFyZ3VtZW50c18pO1xuXHR9KTtcbn07XG5cbmNvbnN0IGZpbHRlckNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGlmeShpbnB1dCwgb3B0aW9ucykge1xuXHRvcHRpb25zID0ge1xuXHRcdGV4Y2x1ZGU6IFsvLisoPzpTeW5jfFN0cmVhbSkkL10sXG5cdFx0ZXJyb3JGaXJzdDogdHJ1ZSxcblx0XHRwcm9taXNlTW9kdWxlOiBQcm9taXNlLFxuXHRcdC4uLm9wdGlvbnMsXG5cdH07XG5cblx0Y29uc3Qgb2JqZWN0VHlwZSA9IHR5cGVvZiBpbnB1dDtcblx0aWYgKCEoaW5wdXQgIT09IG51bGwgJiYgKG9iamVjdFR5cGUgPT09ICdvYmplY3QnIHx8IG9iamVjdFR5cGUgPT09ICdmdW5jdGlvbicpKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIFxcYGlucHV0XFxgIHRvIGJlIGEgXFxgRnVuY3Rpb25cXGAgb3IgXFxgT2JqZWN0XFxgLCBnb3QgXFxgJHtpbnB1dCA9PT0gbnVsbCA/ICdudWxsJyA6IG9iamVjdFR5cGV9XFxgYCk7XG5cdH1cblxuXHRjb25zdCBmaWx0ZXIgPSAodGFyZ2V0LCBrZXkpID0+IHtcblx0XHRsZXQgY2FjaGVkID0gZmlsdGVyQ2FjaGUuZ2V0KHRhcmdldCk7XG5cblx0XHRpZiAoIWNhY2hlZCkge1xuXHRcdFx0Y2FjaGVkID0ge307XG5cdFx0XHRmaWx0ZXJDYWNoZS5zZXQodGFyZ2V0LCBjYWNoZWQpO1xuXHRcdH1cblxuXHRcdGlmIChrZXkgaW4gY2FjaGVkKSB7XG5cdFx0XHRyZXR1cm4gY2FjaGVkW2tleV07XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuID0+ICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGtleSA9PT0gJ3N5bWJvbCcpID8ga2V5ID09PSBwYXR0ZXJuIDogcGF0dGVybi50ZXN0KGtleSk7XG5cdFx0Y29uc3QgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcblx0XHRjb25zdCB3cml0YWJsZU9yQ29uZmlndXJhYmxlT3duID0gKGRlc2NyaXB0b3IgPT09IHVuZGVmaW5lZCB8fCBkZXNjcmlwdG9yLndyaXRhYmxlIHx8IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlKTtcblx0XHRjb25zdCBpbmNsdWRlZCA9IG9wdGlvbnMuaW5jbHVkZSA/IG9wdGlvbnMuaW5jbHVkZS5zb21lKGVsZW1lbnQgPT4gbWF0Y2goZWxlbWVudCkpIDogIW9wdGlvbnMuZXhjbHVkZS5zb21lKGVsZW1lbnQgPT4gbWF0Y2goZWxlbWVudCkpO1xuXHRcdGNvbnN0IHNob3VsZEZpbHRlciA9IGluY2x1ZGVkICYmIHdyaXRhYmxlT3JDb25maWd1cmFibGVPd247XG5cdFx0Y2FjaGVkW2tleV0gPSBzaG91bGRGaWx0ZXI7XG5cdFx0cmV0dXJuIHNob3VsZEZpbHRlcjtcblx0fTtcblxuXHRjb25zdCBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cblx0Y29uc3QgcHJveHkgPSBuZXcgUHJveHkoaW5wdXQsIHtcblx0XHRhcHBseSh0YXJnZXQsIHRoaXNBcmcsIGFyZ3MpIHtcblx0XHRcdGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldCh0YXJnZXQpO1xuXG5cdFx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRcdHJldHVybiBSZWZsZWN0LmFwcGx5KGNhY2hlZCwgdGhpc0FyZywgYXJncyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBpZmllZCA9IG9wdGlvbnMuZXhjbHVkZU1haW4gPyB0YXJnZXQgOiBwcm9jZXNzRnVuY3Rpb24odGFyZ2V0LCBvcHRpb25zLCBwcm94eSwgdGFyZ2V0KTtcblx0XHRcdGNhY2hlLnNldCh0YXJnZXQsIHBpZmllZCk7XG5cdFx0XHRyZXR1cm4gUmVmbGVjdC5hcHBseShwaWZpZWQsIHRoaXNBcmcsIGFyZ3MpO1xuXHRcdH0sXG5cblx0XHRnZXQodGFyZ2V0LCBrZXkpIHtcblx0XHRcdGNvbnN0IHByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtZXh0ZW5kLW5hdGl2ZS9uby11c2UtZXh0ZW5kLW5hdGl2ZVxuXHRcdFx0aWYgKCFmaWx0ZXIodGFyZ2V0LCBrZXkpIHx8IHByb3BlcnR5ID09PSBGdW5jdGlvbi5wcm90b3R5cGVba2V5XSkge1xuXHRcdFx0XHRyZXR1cm4gcHJvcGVydHk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldChwcm9wZXJ0eSk7XG5cblx0XHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdFx0cmV0dXJuIGNhY2hlZDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25zdCBwaWZpZWQgPSBwcm9jZXNzRnVuY3Rpb24ocHJvcGVydHksIG9wdGlvbnMsIHByb3h5LCB0YXJnZXQpO1xuXHRcdFx0XHRjYWNoZS5zZXQocHJvcGVydHksIHBpZmllZCk7XG5cdFx0XHRcdHJldHVybiBwaWZpZWQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBwcm9wZXJ0eTtcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gcHJveHk7XG59XG4iLCJleHBvcnQgY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9hcGkud2VicGlsb3RhaS5jb20vaHlydWxlL3YxJ1xuXG5leHBvcnQgY29uc3QgR09PR0xFX0NSRURFTlRJQUwgPSAnR09PR0xFX0NSRURFTlRJQUwnXG5cbmV4cG9ydCBjb25zdCBFTkRQT0lOVCA9IHtcbiAgR0VUX1VTRVI6ICcvdXNlcicsXG4gIEdFVF9BUElfVVNBR0U6ICcvdXNlci9hcGlrZXkvdXNhZ2UnLFxufVxuIiwiaW1wb3J0IHtzZW5kVG9Db250ZW50U2NyaXB0fSBmcm9tICdAcGxhc21vaHEvbWVzc2FnaW5nJ1xuaW1wb3J0IHtTdG9yYWdlfSBmcm9tICdAcGxhc21vaHEvc3RvcmFnZSdcblxuaW1wb3J0IHtNRVNTQUdJTkdfRVZFTlQsIFdFQlBJTE9UX0NPTkZJR19TVE9SQUdFX0tFWX0gZnJvbSAnQC9jb25maWcnXG5cbi8qKiBPcGVuIGluaXQgcGFnZSBhZnRlciBpbnN0YWxsICovXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihldmVudCA9PiB7XG4gIC8vIGNvbnN0IHNpZ25VUkwgPSAnaHR0cDovL2xvY2FsaG9zdC8nXG4gIGNvbnN0IHNpZ25VUkwgPSAnaHR0cHM6Ly9hY2NvdW50LndlYnBpbG90LmFpLydcblxuICBpZiAoXG4gICAgZXZlbnQucmVhc29uID09PSBjaHJvbWUucnVudGltZS5Pbkluc3RhbGxlZFJlYXNvbi5JTlNUQUxMXG4gICAgLy8gZXZlbnQucmVhc29uID09PSBjaHJvbWUucnVudGltZS5Pbkluc3RhbGxlZFJlYXNvbi5VUERBVEVcbiAgKSB7XG4gICAgY2hyb21lLnRhYnMuY3JlYXRlKHt1cmw6IHNpZ25VUkx9KVxuICB9XG59KVxuXG5jb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKVxuY29uc3Qgc3d0aWNoUG9wdXAgPSB1cmwgPT4ge1xuICBpZiAoIXVybCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHVybC5zdGFydHNXaXRoKCdjaHJvbWU6JykgfHwgdXJsLnN0YXJ0c1dpdGgoJ2Nocm9tZS1leHRlbnNpb246JykpIHtcbiAgICBjaHJvbWUuYWN0aW9uLnNldFBvcHVwKHtwb3B1cDogJ3BvcHVwLmh0bWwnfSlcbiAgfSBlbHNlIHtcbiAgICBjaHJvbWUuYWN0aW9uLnNldFBvcHVwKHtwb3B1cDogJyd9KVxuICB9XG59XG5cbmNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKCh7dGFiSWR9KSA9PiB7XG4gIGNocm9tZS50YWJzLmdldCh0YWJJZCwgdGFiID0+IHtcbiAgICBzd3RpY2hQb3B1cCh0YWI/LnVybClcbiAgfSlcbn0pXG5jaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoYXN5bmMgKHRhYklkLCBjaGFuZ2VJbmZvKSA9PiB7XG4gIHN3dGljaFBvcHVwKGNoYW5nZUluZm8udXJsKVxuXG4gIGNvbnN0IHJlbG9hZFRhYklkID0gYXdhaXQgc3RvcmFnZS5nZXQoJ1JFTE9BRF9UQUJfSUQnKVxuICBpZiAocmVsb2FkVGFiSWQgJiYgY2hhbmdlSW5mby5zdGF0dXMgPT09ICdjb21wbGV0ZScpIHtcbiAgICBvcGVuV2lkZ2V0KClcbiAgICBzdG9yYWdlLnJlbW92ZSgnUkVMT0FEX1RBQl9JRCcpXG4gIH1cbn0pXG5cbi8vIGNvbnN0IG9wZW5Qb3B1cCA9ICgpID0+IHtcbi8vICAgY29uc3Qge29yaWdpbn0gPSB3aW5kb3cubG9jYXRpb25cbi8vICAgd2luZG93LnBvc3RNZXNzYWdlKCdPUEVOX1BPUFVQJywgb3JpZ2luKVxuLy8gfVxuXG5jb25zdCBvcGVuV2lkZ2V0ID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBzZW5kVG9Db250ZW50U2NyaXB0KHtcbiAgICBuYW1lOiBNRVNTQUdJTkdfRVZFTlQuU0hPV19QT1BVUCxcbiAgfSlcbn1cblxuY29uc3QgcG9wdXBIYW5kbGVyID0gYXN5bmMgdGFiID0+IHtcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgc3RvcmFnZS5nZXQoV0VCUElMT1RfQ09ORklHX1NUT1JBR0VfS0VZKVxuXG4gIGlmICghY29uZmlnIHx8ICFjb25maWcuaXNGaW5pc2hTZXR1cCB8fCAhY29uZmlnLmlzQXV0aCkge1xuICAgIC8vIGNvbnN0IFt0YWJdID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoe1xuICAgIC8vICAgYWN0aXZlOiB0cnVlLFxuICAgIC8vICAgY3VycmVudFdpbmRvdzogdHJ1ZSxcbiAgICAvLyB9KVxuXG4gICAgY29uc3QgY3VycmVudFVybCA9IHRhYj8udXJsXG4gICAgLy8gY2FuJ3QgZ2V0IGN1cnJlbnQgb3BlbiBwYWdlIHVybFxuICAgIGlmIChjdXJyZW50VXJsID09PSB1bmRlZmluZWQpIHJldHVyblxuXG4gICAgY29uc3Qgc2lnblVSTCA9ICdodHRwczovL2FjY291bnQud2VicGlsb3QuYWkvJ1xuICAgIGNvbnN0IHdlbGNvbWVVcmwgPSBjaHJvbWU/LnJ1bnRpbWU/LmdldFVSTCgndGFicy9pbmRleC5odG1sJylcblxuICAgIC8vIGFyZWFkeSBpbiB3ZWxjb21lIHBhZ2VcbiAgICBpZiAoY3VycmVudFVybCA9PT0gc2lnblVSTCB8fCBjdXJyZW50VXJsID09PSB3ZWxjb21lVXJsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjaHJvbWUudGFicy5jcmVhdGUoe3VybDogc2lnblVSTH0pXG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IG9wZW5XaWRnZXQoKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhd2FpdCBzdG9yYWdlLnNldCgnUkVMT0FEX1RBQl9JRCcsIHRhYi5pZClcbiAgICAgIGNocm9tZS50YWJzLnJlbG9hZCh0YWIuaWQpXG4gICAgfVxuICB9XG5cbiAgLy8gY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgLy8gICB0YXJnZXQ6IHt0YWJJZDogdGFiLmlkfSxcbiAgLy8gICBmdW5jOiBvcGVuUG9wdXAsXG4gIC8vIH0pXG59XG5cbmNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHBvcHVwSGFuZGxlcilcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJpbmRleC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);