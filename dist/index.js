function __cf_cjs(esm) {
  const cjs = 'default' in esm ? esm.default : {};
	for (const [k, v] of Object.entries(esm)) {
		if (k !== 'default') {
			Object.defineProperty(cjs, k, {
				enumerable: true,
				value: v,
			});
		}
	}
	return cjs;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/_virtual_unenv_global_polyfill-clear$immediate.js
var init_virtual_unenv_global_polyfill_clear_immediate = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/_virtual_unenv_global_polyfill-clear$immediate.js"() {
    init_cloudflare();
    globalThis.clearImmediate = clearImmediateFallback;
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/_internal/utils.mjs
function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h2 of headers[key]) {
        rawHeaders2.push(key, h2);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn2 of functions) {
      fn2(...args);
    }
  };
}
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
function notImplemented(name) {
  const fn2 = /* @__PURE__ */ __name(() => {
    throw createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn2, { __unenv__: true });
}
function notImplementedAsync(name) {
  const fn2 = notImplemented(name);
  fn2.__promisify__ = () => notImplemented(name + ".__promisify__");
  fn2.native = fn2;
  return fn2;
}
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/_internal/utils.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    __name(rawHeaders, "rawHeaders");
    __name(mergeFns, "mergeFns");
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedAsync, "notImplementedAsync");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/mock/noop.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/timers/internal/immediate.mjs
var Immediate;
var init_immediate = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/timers/internal/immediate.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    Immediate = class {
      _onImmediate;
      _timeout;
      constructor(callback, args) {
        this._onImmediate = callback;
        if ("setTimeout" in globalThis) {
          this._timeout = setTimeout(callback, 0, ...args);
        } else {
          callback(...args);
        }
      }
      ref() {
        this._timeout?.ref();
        return this;
      }
      unref() {
        this._timeout?.unref();
        return this;
      }
      hasRef() {
        return this._timeout?.hasRef() ?? false;
      }
      [Symbol.dispose]() {
        if ("clearTimeout" in globalThis) {
          clearTimeout(this._timeout);
        }
      }
    };
    __name(Immediate, "Immediate");
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/timers/internal/set-immediate.mjs
function setImmediateFallbackPromises(value) {
  return new Promise((res) => {
    res(value);
  });
}
function setImmediateFallback(callback, ...args) {
  return new Immediate(callback, args);
}
function clearImmediateFallback(immediate) {
  immediate?.[Symbol.dispose]();
}
var init_set_immediate = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/timers/internal/set-immediate.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_immediate();
    __name(setImmediateFallbackPromises, "setImmediateFallbackPromises");
    __name(setImmediateFallback, "setImmediateFallback");
    setImmediateFallback.__promisify__ = setImmediateFallbackPromises;
    __name(clearImmediateFallback, "clearImmediateFallback");
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/timers/$cloudflare.mjs
var init_cloudflare = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/timers/$cloudflare.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_set_immediate();
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/_virtual_unenv_global_polyfill-set$immediate.js
var init_virtual_unenv_global_polyfill_set_immediate = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/_virtual_unenv_global_polyfill-set$immediate.js"() {
    init_cloudflare();
    globalThis.setImmediate = setImmediateFallback;
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/mock/proxy.mjs
function createMock(name, overrides = {}) {
  fn.prototype.name = name;
  const props = {};
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop === "__unenv__") {
        return true;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name}]`);
    },
    // @ts-ignore (ES6-only - removed in ES7)
    // https://github.com/tc39/ecma262/issues/161
    enumerate() {
      return [];
    }
  });
}
var fn, proxy_default;
var init_proxy = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/mock/proxy.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    fn = /* @__PURE__ */ __name(function() {
    }, "fn");
    __name(createMock, "createMock");
    proxy_default = createMock("mock");
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/console/index.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, assert, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console;
var init_console = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/console/index.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_proxy();
    init_noop();
    init_utils();
    init_proxy();
    init_noop();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? notImplemented("console.createTask");
    assert = notImplemented("console.assert");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? proxy_default.__createMock__("console.Console");
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/console/$cloudflare.mjs
var workerdConsole, assert2, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, cloudflare_default;
var init_cloudflare2 = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/console/$cloudflare.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert: assert2,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler: noop_default,
      _stdout,
      _stdoutErrorHandler: noop_default,
      _times: proxy_default
    });
    cloudflare_default = workerdConsole;
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/_virtual_unenv_global_polyfill-console.js
var init_virtual_unenv_global_polyfill_console = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/_virtual_unenv_global_polyfill-console.js"() {
    init_cloudflare2();
    globalThis.console = cloudflare_default;
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/web/performance/_entry.mjs
var _supportedEntryTypes, _PerformanceEntry, PerformanceEntry, _PerformanceMark, PerformanceMark, _PerformanceMeasure, PerformanceMeasure, _PerformanceResourceTiming, PerformanceResourceTiming;
var init_entry = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/web/performance/_entry.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    _supportedEntryTypes = [
      "event",
      // PerformanceEntry
      "mark",
      // PerformanceMark
      "measure",
      // PerformanceMeasure
      "resource"
      // PerformanceResourceTiming
    ];
    _PerformanceEntry = class {
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || performance.now();
        this.detail = options?.detail;
      }
      get duration() {
        return performance.now() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    __name(_PerformanceEntry, "_PerformanceEntry");
    PerformanceEntry = globalThis.PerformanceEntry || _PerformanceEntry;
    _PerformanceMark = class extends _PerformanceEntry {
      entryType = "mark";
    };
    __name(_PerformanceMark, "_PerformanceMark");
    PerformanceMark = globalThis.PerformanceMark || _PerformanceMark;
    _PerformanceMeasure = class extends _PerformanceEntry {
      entryType = "measure";
    };
    __name(_PerformanceMeasure, "_PerformanceMeasure");
    PerformanceMeasure = globalThis.PerformanceMeasure || _PerformanceMeasure;
    _PerformanceResourceTiming = class extends _PerformanceEntry {
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
    };
    __name(_PerformanceResourceTiming, "_PerformanceResourceTiming");
    PerformanceResourceTiming = globalThis.PerformanceResourceTiming || _PerformanceResourceTiming;
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/web/performance/_performance.mjs
var _timeOrigin, _Performance, Performance, performance2;
var init_performance = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/web/performance/_performance.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_utils();
    init_proxy();
    init_entry();
    _timeOrigin = Date.now();
    _Performance = class {
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = proxy_default.__createMock__("PerformanceNavigation");
      timing = proxy_default.__createMock__("PerformanceTiming");
      onresourcetimingbufferfull = null;
      now() {
        if (globalThis?.performance?.now && this.timeOrigin === _timeOrigin) {
          return globalThis.performance.now();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter(
          (e) => e.entryType !== "resource" || e.entryType !== "navigation"
        );
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type2) {
        return this._entries.filter(
          (e) => e.name === name && (!type2 || e.entryType === type2)
        );
      }
      getEntriesByType(type2) {
        return this._entries.filter(
          (e) => e.entryType === type2
        );
      }
      mark(name, options) {
        const entry = new _PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || performance2.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || performance2.now();
        }
        const entry = new _PerformanceMeasure(measureName, {
          startTime: start,
          detail: { start, end }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      toJSON() {
        return this;
      }
      addEventListener(type2, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type2, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
    };
    __name(_Performance, "_Performance");
    Performance = globalThis.Performance || _Performance;
    performance2 = globalThis.performance || new Performance();
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/web/performance/_observer.mjs
var _PerformanceObserver, PerformanceObserver, _PerformanceObserverEntryList, PerformanceObserverEntryList;
var init_observer = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/web/performance/_observer.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_utils();
    init_entry();
    _PerformanceObserver = class {
      __unenv__ = true;
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
    };
    __name(_PerformanceObserver, "_PerformanceObserver");
    __publicField(_PerformanceObserver, "supportedEntryTypes", _supportedEntryTypes);
    PerformanceObserver = globalThis.PerformanceObserver || _PerformanceObserver;
    _PerformanceObserverEntryList = class {
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type2) {
        return [];
      }
    };
    __name(_PerformanceObserverEntryList, "_PerformanceObserverEntryList");
    PerformanceObserverEntryList = globalThis.PerformanceObserverEntryList || _PerformanceObserverEntryList;
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/web/performance/index.mjs
var init_performance2 = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/web/performance/index.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_performance();
    init_observer();
    init_entry();
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/polyfill/global-this.mjs
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  return {};
}
var global_this_default;
var init_global_this = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/polyfill/global-this.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    __name(getGlobal, "getGlobal");
    global_this_default = getGlobal();
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/polyfill/performance.mjs
var performance_default;
var init_performance3 = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/polyfill/performance.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_performance2();
    init_global_this();
    global_this_default.performance = global_this_default.performance || performance2;
    global_this_default.Performance = global_this_default.Performance || Performance;
    global_this_default.PerformanceEntry = global_this_default.PerformanceEntry || PerformanceEntry;
    global_this_default.PerformanceMark = global_this_default.PerformanceMark || PerformanceMark;
    global_this_default.PerformanceMeasure = global_this_default.PerformanceMeasure || PerformanceMeasure;
    global_this_default.PerformanceObserver = global_this_default.PerformanceObserver || PerformanceObserver;
    global_this_default.PerformanceObserverEntryList = global_this_default.PerformanceObserverEntryList || PerformanceObserverEntryList;
    global_this_default.PerformanceResourceTiming = global_this_default.PerformanceResourceTiming || PerformanceResourceTiming;
    performance_default = global_this_default.performance;
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/_virtual_unenv_global_polyfill-performance.js
var init_virtual_unenv_global_polyfill_performance = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/_virtual_unenv_global_polyfill-performance.js"() {
    init_performance3();
    globalThis.performance = performance_default;
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/mock/empty.mjs
var empty_default;
var init_empty = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/mock/empty.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    empty_default = Object.freeze(
      Object.create(null, {
        __unenv__: { get: () => true }
      })
    );
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/process/internal/env.mjs
var _envShim, _processEnv, _getEnv, env;
var init_env = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/process/internal/env.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    _envShim = /* @__PURE__ */ Object.create(null);
    _processEnv = globalThis.process?.env;
    _getEnv = /* @__PURE__ */ __name((useShim) => _processEnv || globalThis.__env__ || (useShim ? _envShim : globalThis), "_getEnv");
    env = new Proxy(_envShim, {
      get(_, prop) {
        const env22 = _getEnv();
        return env22[prop] ?? _envShim[prop];
      },
      has(_, prop) {
        const env22 = _getEnv();
        return prop in env22 || prop in _envShim;
      },
      set(_, prop, value) {
        const env22 = _getEnv(true);
        env22[prop] = value;
        return true;
      },
      deleteProperty(_, prop) {
        const env22 = _getEnv(true);
        delete env22[prop];
        return true;
      },
      ownKeys() {
        const env22 = _getEnv();
        return Object.keys(env22);
      }
    });
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/process/internal/time.mjs
function _createNextTickWithTimeout() {
  let queue = [];
  let draining = false;
  let currentQueue;
  let queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length > 0) {
      queue = [...currentQueue, ...queue];
    } else {
      queueIndex = -1;
    }
    if (queue.length > 0) {
      drainQueue();
    }
  }
  __name(cleanUpNextTick, "cleanUpNextTick");
  function drainQueue() {
    if (draining) {
      return;
    }
    const timeout = setTimeout(cleanUpNextTick);
    draining = true;
    let len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex]();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = void 0;
    draining = false;
    clearTimeout(timeout);
  }
  __name(drainQueue, "drainQueue");
  const nextTick22 = /* @__PURE__ */ __name((cb, ...args) => {
    queue.push(cb.bind(void 0, ...args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue);
    }
  }, "nextTick2");
  return nextTick22;
}
var hrtime, nextTick;
var init_time = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/process/internal/time.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    hrtime = Object.assign(
      /* @__PURE__ */ __name(function hrtime2(startTime) {
        const now = Date.now();
        const seconds = Math.trunc(now / 1e3);
        const nanos = now % 1e3 * 1e6;
        if (startTime) {
          let diffSeconds = seconds - startTime[0];
          let diffNanos = nanos - startTime[0];
          if (diffNanos < 0) {
            diffSeconds = diffSeconds - 1;
            diffNanos = 1e9 + diffNanos;
          }
          return [diffSeconds, diffNanos];
        }
        return [seconds, nanos];
      }, "hrtime2"),
      {
        bigint: /* @__PURE__ */ __name(function bigint() {
          return BigInt(Date.now() * 1e6);
        }, "bigint")
      }
    );
    nextTick = globalThis.queueMicrotask ? (cb, ...args) => {
      globalThis.queueMicrotask(cb.bind(void 0, ...args));
    } : _createNextTickWithTimeout();
    __name(_createNextTickWithTimeout, "_createNextTickWithTimeout");
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/process/internal/process.mjs
function noop() {
  return process2;
}
var title, argv, version, versions, on, addListener, once, off, removeListener, removeAllListeners, emit, prependListener, prependOnceListener, listeners, listenerCount, binding, _cwd, cwd, chdir, umask, getegid, geteuid, getgid, getuid, getgroups, getBuiltinModule, abort, allowedNodeEnvironmentFlags, arch, argv0, config, connected, constrainedMemory, availableMemory, cpuUsage, debugPort, dlopen, disconnect, emitWarning, eventNames, execArgv, execPath, exit, features, getActiveResourcesInfo, getMaxListeners, kill, memoryUsage, pid, platform, ppid, rawListeners, release, report, resourceUsage, setegid, seteuid, setgid, setgroups, setuid, setMaxListeners, setSourceMapsEnabled, stdout, stderr, stdin, traceDeprecation, uptime, exitCode, setUncaughtExceptionCaptureCallback, hasUncaughtExceptionCaptureCallback, sourceMapsEnabled, loadEnvFile, mainModule, permission, channel, throwDeprecation, assert3, openStdin, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _linkedBinding, domain, initgroups, moduleLoadList, reallyExit, _exiting, _events, _eventsCount, _maxListeners, process2;
var init_process = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/process/internal/process.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_proxy();
    init_empty();
    init_utils();
    init_env();
    init_time();
    init_time();
    title = "unenv";
    argv = [];
    version = "";
    versions = {
      ares: "",
      http_parser: "",
      icu: "",
      modules: "",
      node: "",
      openssl: "",
      uv: "",
      v8: "",
      zlib: ""
    };
    __name(noop, "noop");
    on = noop;
    addListener = noop;
    once = noop;
    off = noop;
    removeListener = noop;
    removeAllListeners = noop;
    emit = /* @__PURE__ */ __name(function emit2(event) {
      if (event === "message" || event === "multipleResolves") {
        return process2;
      }
      return false;
    }, "emit2");
    prependListener = noop;
    prependOnceListener = noop;
    listeners = /* @__PURE__ */ __name(function(name) {
      return [];
    }, "listeners");
    listenerCount = /* @__PURE__ */ __name(() => 0, "listenerCount");
    binding = /* @__PURE__ */ __name(function(name) {
      throw new Error("[unenv] process.binding is not supported");
    }, "binding");
    _cwd = "/";
    cwd = /* @__PURE__ */ __name(function cwd2() {
      return _cwd;
    }, "cwd2");
    chdir = /* @__PURE__ */ __name(function chdir2(dir3) {
      _cwd = dir3;
    }, "chdir2");
    umask = /* @__PURE__ */ __name(function umask2() {
      return 0;
    }, "umask2");
    getegid = /* @__PURE__ */ __name(function getegid2() {
      return 1e3;
    }, "getegid2");
    geteuid = /* @__PURE__ */ __name(function geteuid2() {
      return 1e3;
    }, "geteuid2");
    getgid = /* @__PURE__ */ __name(function getgid2() {
      return 1e3;
    }, "getgid2");
    getuid = /* @__PURE__ */ __name(function getuid2() {
      return 1e3;
    }, "getuid2");
    getgroups = /* @__PURE__ */ __name(function getgroups2() {
      return [];
    }, "getgroups2");
    getBuiltinModule = /* @__PURE__ */ __name((_name) => void 0, "getBuiltinModule");
    abort = notImplemented("process.abort");
    allowedNodeEnvironmentFlags = /* @__PURE__ */ new Set();
    arch = "";
    argv0 = "";
    config = empty_default;
    connected = false;
    constrainedMemory = /* @__PURE__ */ __name(() => 0, "constrainedMemory");
    availableMemory = /* @__PURE__ */ __name(() => 0, "availableMemory");
    cpuUsage = notImplemented("process.cpuUsage");
    debugPort = 0;
    dlopen = notImplemented("process.dlopen");
    disconnect = noop;
    emitWarning = noop;
    eventNames = notImplemented("process.eventNames");
    execArgv = [];
    execPath = "";
    exit = notImplemented("process.exit");
    features = /* @__PURE__ */ Object.create({
      inspector: void 0,
      debug: void 0,
      uv: void 0,
      ipv6: void 0,
      tls_alpn: void 0,
      tls_sni: void 0,
      tls_ocsp: void 0,
      tls: void 0,
      cached_builtins: void 0
    });
    getActiveResourcesInfo = /* @__PURE__ */ __name(() => [], "getActiveResourcesInfo");
    getMaxListeners = notImplemented(
      "process.getMaxListeners"
    );
    kill = notImplemented("process.kill");
    memoryUsage = Object.assign(
      () => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }),
      { rss: () => 0 }
    );
    pid = 1e3;
    platform = "";
    ppid = 1e3;
    rawListeners = notImplemented(
      "process.rawListeners"
    );
    release = /* @__PURE__ */ Object.create({
      name: "",
      lts: "",
      sourceUrl: void 0,
      headersUrl: void 0
    });
    report = /* @__PURE__ */ Object.create({
      compact: void 0,
      directory: void 0,
      filename: void 0,
      getReport: notImplemented("process.report.getReport"),
      reportOnFatalError: void 0,
      reportOnSignal: void 0,
      reportOnUncaughtException: void 0,
      signal: void 0,
      writeReport: notImplemented("process.report.writeReport")
    });
    resourceUsage = notImplemented(
      "process.resourceUsage"
    );
    setegid = notImplemented("process.setegid");
    seteuid = notImplemented("process.seteuid");
    setgid = notImplemented("process.setgid");
    setgroups = notImplemented("process.setgroups");
    setuid = notImplemented("process.setuid");
    setMaxListeners = notImplemented(
      "process.setMaxListeners"
    );
    setSourceMapsEnabled = notImplemented("process.setSourceMapsEnabled");
    stdout = proxy_default.__createMock__("process.stdout");
    stderr = proxy_default.__createMock__("process.stderr");
    stdin = proxy_default.__createMock__("process.stdin");
    traceDeprecation = false;
    uptime = /* @__PURE__ */ __name(() => 0, "uptime");
    exitCode = 0;
    setUncaughtExceptionCaptureCallback = notImplemented("process.setUncaughtExceptionCaptureCallback");
    hasUncaughtExceptionCaptureCallback = /* @__PURE__ */ __name(() => false, "hasUncaughtExceptionCaptureCallback");
    sourceMapsEnabled = false;
    loadEnvFile = notImplemented(
      "process.loadEnvFile"
    );
    mainModule = void 0;
    permission = {
      has: () => false
    };
    channel = {
      ref() {
      },
      unref() {
      }
    };
    throwDeprecation = false;
    assert3 = notImplemented("process.assert");
    openStdin = notImplemented("process.openStdin");
    _debugEnd = notImplemented("process._debugEnd");
    _debugProcess = notImplemented("process._debugProcess");
    _fatalException = notImplemented("process._fatalException");
    _getActiveHandles = notImplemented("process._getActiveHandles");
    _getActiveRequests = notImplemented("process._getActiveRequests");
    _kill = notImplemented("process._kill");
    _preload_modules = [];
    _rawDebug = notImplemented("process._rawDebug");
    _startProfilerIdleNotifier = notImplemented(
      "process._startProfilerIdleNotifier"
    );
    _stopProfilerIdleNotifier = notImplemented(
      "process.__stopProfilerIdleNotifier"
    );
    _tickCallback = notImplemented("process._tickCallback");
    _linkedBinding = notImplemented("process._linkedBinding");
    domain = proxy_default.__createMock__("process.domain");
    initgroups = notImplemented("process.initgroups");
    moduleLoadList = [];
    reallyExit = noop;
    _exiting = false;
    _events = [];
    _eventsCount = 0;
    _maxListeners = 0;
    process2 = {
      // @ts-expect-error
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      exitCode,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      throwDeprecation,
      mainModule,
      permission,
      channel,
      arch,
      argv,
      argv0,
      assert: assert3,
      binding,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      features,
      getBuiltinModule,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      openStdin,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions
    };
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/process/$cloudflare.mjs
var unpatchedGlobalThisProcess, getBuiltinModule2, workerdProcess, env2, exit2, nextTick2, platform2, _process, cloudflare_default2;
var init_cloudflare3 = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/process/$cloudflare.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_process();
    unpatchedGlobalThisProcess = globalThis["process"];
    getBuiltinModule2 = unpatchedGlobalThisProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule2("node:process");
    ({ env: env2, exit: exit2, nextTick: nextTick2, platform: platform2 } = workerdProcess);
    _process = {
      /**
       * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
       */
      // @ts-expect-error (not typed)
      _debugEnd,
      _debugProcess,
      _events,
      _eventsCount,
      _exiting,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _linkedBinding,
      _maxListeners,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      assert: assert3,
      availableMemory,
      binding,
      chdir,
      config,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      domain,
      emit,
      emitWarning,
      eventNames,
      execArgv,
      execPath,
      exit: exit2,
      exitCode,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      hrtime,
      initgroups,
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      memoryUsage,
      moduleLoadList,
      off,
      on,
      once,
      openStdin,
      pid,
      platform: platform2,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      setUncaughtExceptionCaptureCallback,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      umask,
      uptime,
      version,
      versions,
      /**
       * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
       */
      env: env2,
      getBuiltinModule: getBuiltinModule2,
      nextTick: nextTick2
    };
    cloudflare_default2 = _process;
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/_virtual_unenv_global_polyfill-process.js
var init_virtual_unenv_global_polyfill_process = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/_virtual_unenv_global_polyfill-process.js"() {
    init_cloudflare3();
    globalThis.process = cloudflare_default2;
  }
});

// node_modules/@whatwg-node/fetch/dist/global-ponyfill.js
var require_global_ponyfill = __commonJS({
  "node_modules/@whatwg-node/fetch/dist/global-ponyfill.js"(exports, module) {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    module.exports.fetch = globalThis.fetch;
    module.exports.Headers = globalThis.Headers;
    module.exports.Request = globalThis.Request;
    module.exports.Response = globalThis.Response;
    module.exports.FormData = globalThis.FormData;
    module.exports.ReadableStream = globalThis.ReadableStream;
    module.exports.WritableStream = globalThis.WritableStream;
    module.exports.TransformStream = globalThis.TransformStream;
    module.exports.CompressionStream = globalThis.CompressionStream;
    module.exports.DecompressionStream = globalThis.DecompressionStream;
    module.exports.Blob = globalThis.Blob;
    module.exports.File = globalThis.File;
    module.exports.crypto = globalThis.crypto;
    module.exports.btoa = globalThis.btoa;
    module.exports.TextEncoder = globalThis.TextEncoder;
    module.exports.TextDecoder = globalThis.TextDecoder;
    module.exports.URLPattern = globalThis.URLPattern;
    module.exports.URL = globalThis.URL;
    module.exports.URLSearchParams = globalThis.URLSearchParams;
    module.exports.createFetch = () => globalThis;
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/fs/internal/classes.mjs
var classes_exports = {};
__export(classes_exports, {
  Dir: () => Dir,
  Dirent: () => Dirent,
  FileReadStream: () => FileReadStream,
  FileWriteStream: () => FileWriteStream,
  ReadStream: () => ReadStream,
  Stats: () => Stats,
  StatsFs: () => StatsFs,
  WriteStream: () => WriteStream
});
var Dir, Dirent, Stats, ReadStream, WriteStream, FileReadStream, FileWriteStream, StatsFs;
var init_classes = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/fs/internal/classes.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_proxy();
    Dir = proxy_default.__createMock__("fs.Dir");
    Dirent = proxy_default.__createMock__("fs.Dirent");
    Stats = proxy_default.__createMock__("fs.Stats");
    ReadStream = proxy_default.__createMock__("fs.ReadStream");
    WriteStream = proxy_default.__createMock__("fs.WriteStream");
    FileReadStream = proxy_default.__createMock__("fs.FileReadStream");
    FileWriteStream = proxy_default.__createMock__("fs.FileWriteStream");
    StatsFs = proxy_default.__createMock__("fs.StatsFs");
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/fs/internal/constants.mjs
var constants_exports = {};
__export(constants_exports, {
  F_OK: () => F_OK,
  R_OK: () => R_OK,
  W_OK: () => W_OK,
  X_OK: () => X_OK,
  constants: () => constants
});
var F_OK, R_OK, W_OK, X_OK, constants;
var init_constants = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/fs/internal/constants.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    F_OK = 0;
    R_OK = 4;
    W_OK = 2;
    X_OK = 1;
    constants = /* @__PURE__ */ Object.create({
      UV_FS_SYMLINK_DIR: 1,
      UV_FS_SYMLINK_JUNCTION: 2,
      O_RDONLY: 0,
      O_WRONLY: 1,
      O_RDWR: 2,
      UV_DIRENT_UNKNOWN: 0,
      UV_DIRENT_FILE: 1,
      UV_DIRENT_DIR: 2,
      UV_DIRENT_LINK: 3,
      UV_DIRENT_FIFO: 4,
      UV_DIRENT_SOCKET: 5,
      UV_DIRENT_CHAR: 6,
      UV_DIRENT_BLOCK: 7,
      S_IFMT: 61440,
      S_IFREG: 32768,
      S_IFDIR: 16384,
      S_IFCHR: 8192,
      S_IFBLK: 24576,
      S_IFIFO: 4096,
      S_IFLNK: 40960,
      S_IFSOCK: 49152,
      O_CREAT: 64,
      O_EXCL: 128,
      UV_FS_O_FILEMAP: 0,
      O_NOCTTY: 256,
      O_TRUNC: 512,
      O_APPEND: 1024,
      O_DIRECTORY: 65536,
      O_NOATIME: 262144,
      O_NOFOLLOW: 131072,
      O_SYNC: 1052672,
      O_DSYNC: 4096,
      O_DIRECT: 16384,
      O_NONBLOCK: 2048,
      S_IRWXU: 448,
      S_IRUSR: 256,
      S_IWUSR: 128,
      S_IXUSR: 64,
      S_IRWXG: 56,
      S_IRGRP: 32,
      S_IWGRP: 16,
      S_IXGRP: 8,
      S_IRWXO: 7,
      S_IROTH: 4,
      S_IWOTH: 2,
      S_IXOTH: 1,
      F_OK: 0,
      R_OK: 4,
      W_OK: 2,
      X_OK: 1,
      UV_FS_COPYFILE_EXCL: 1,
      COPYFILE_EXCL: 1,
      UV_FS_COPYFILE_FICLONE: 2,
      COPYFILE_FICLONE: 2,
      UV_FS_COPYFILE_FICLONE_FORCE: 4,
      COPYFILE_FICLONE_FORCE: 4
    });
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/fs/internal/promises.mjs
var promises_exports = {};
__export(promises_exports, {
  access: () => access,
  appendFile: () => appendFile,
  chmod: () => chmod,
  chown: () => chown,
  constants: () => constants,
  copyFile: () => copyFile,
  cp: () => cp,
  default: () => promises_default,
  glob: () => glob,
  lchmod: () => lchmod,
  lchown: () => lchown,
  link: () => link,
  lstat: () => lstat,
  lutimes: () => lutimes,
  mkdir: () => mkdir,
  mkdtemp: () => mkdtemp,
  open: () => open,
  opendir: () => opendir,
  readFile: () => readFile,
  readdir: () => readdir,
  readlink: () => readlink,
  realpath: () => realpath,
  rename: () => rename,
  rm: () => rm,
  rmdir: () => rmdir,
  stat: () => stat,
  statfs: () => statfs,
  symlink: () => symlink,
  truncate: () => truncate,
  unlink: () => unlink,
  utimes: () => utimes,
  watch: () => watch,
  writeFile: () => writeFile
});
var access, copyFile, cp, open, opendir, rename, truncate, rm, rmdir, mkdir, readdir, readlink, symlink, lstat, stat, link, unlink, chmod, lchmod, lchown, chown, utimes, lutimes, realpath, mkdtemp, writeFile, appendFile, readFile, watch, statfs, glob, promises_default;
var init_promises = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/fs/internal/promises.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_utils();
    init_constants();
    access = notImplemented("fs.access");
    copyFile = notImplemented("fs.copyFile");
    cp = notImplemented("fs.cp");
    open = notImplemented("fs.open");
    opendir = notImplemented("fs.opendir");
    rename = notImplemented("fs.rename");
    truncate = notImplemented("fs.truncate");
    rm = notImplemented("fs.rm");
    rmdir = notImplemented("fs.rmdir");
    mkdir = notImplemented(
      "fs.mkdir"
    );
    readdir = notImplemented(
      "fs.readdir"
    );
    readlink = notImplemented(
      "fs.readlink"
    );
    symlink = notImplemented("fs.symlink");
    lstat = notImplemented(
      "fs.lstat"
    );
    stat = notImplemented(
      "fs.stat"
    );
    link = notImplemented("fs.link");
    unlink = notImplemented("fs.unlink");
    chmod = notImplemented("fs.chmod");
    lchmod = notImplemented("fs.lchmod");
    lchown = notImplemented("fs.lchown");
    chown = notImplemented("fs.chown");
    utimes = notImplemented("fs.utimes");
    lutimes = notImplemented("fs.lutimes");
    realpath = notImplemented(
      "fs.realpath"
    );
    mkdtemp = notImplemented(
      "fs.mkdtemp"
    );
    writeFile = notImplemented("fs.writeFile");
    appendFile = notImplemented("fs.appendFile");
    readFile = notImplemented(
      "fs.readFile"
    );
    watch = notImplemented(
      "fs.watch"
    );
    statfs = notImplemented(
      "fs.statfs"
    );
    glob = notImplemented("fs.glob");
    promises_default = {};
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/fs/internal/fs.mjs
var fs_exports = {};
__export(fs_exports, {
  _toUnixTimestamp: () => _toUnixTimestamp,
  access: () => access2,
  accessSync: () => accessSync,
  appendFile: () => appendFile2,
  appendFileSync: () => appendFileSync,
  chmod: () => chmod2,
  chmodSync: () => chmodSync,
  chown: () => chown2,
  chownSync: () => chownSync,
  close: () => close,
  closeSync: () => closeSync,
  copyFile: () => copyFile2,
  copyFileSync: () => copyFileSync,
  cp: () => cp2,
  cpSync: () => cpSync,
  createReadStream: () => createReadStream,
  createWriteStream: () => createWriteStream,
  exists: () => exists,
  existsSync: () => existsSync,
  fchmod: () => fchmod,
  fchmodSync: () => fchmodSync,
  fchown: () => fchown,
  fchownSync: () => fchownSync,
  fdatasync: () => fdatasync,
  fdatasyncSync: () => fdatasyncSync,
  fstat: () => fstat,
  fstatSync: () => fstatSync,
  fsync: () => fsync,
  fsyncSync: () => fsyncSync,
  ftruncate: () => ftruncate,
  ftruncateSync: () => ftruncateSync,
  futimes: () => futimes,
  futimesSync: () => futimesSync,
  glob: () => glob2,
  globSync: () => globSync,
  lchmod: () => lchmod2,
  lchmodSync: () => lchmodSync,
  lchown: () => lchown2,
  lchownSync: () => lchownSync,
  link: () => link2,
  linkSync: () => linkSync,
  lstat: () => lstat2,
  lstatSync: () => lstatSync,
  lutimes: () => lutimes2,
  lutimesSync: () => lutimesSync,
  mkdir: () => mkdir2,
  mkdirSync: () => mkdirSync,
  mkdtemp: () => mkdtemp2,
  mkdtempSync: () => mkdtempSync,
  open: () => open2,
  openAsBlob: () => openAsBlob,
  openSync: () => openSync,
  opendir: () => opendir2,
  opendirSync: () => opendirSync,
  read: () => read,
  readFile: () => readFile2,
  readFileSync: () => readFileSync,
  readSync: () => readSync,
  readdir: () => readdir2,
  readdirSync: () => readdirSync,
  readlink: () => readlink2,
  readlinkSync: () => readlinkSync,
  readv: () => readv,
  readvSync: () => readvSync,
  realpath: () => realpath2,
  realpathSync: () => realpathSync,
  rename: () => rename2,
  renameSync: () => renameSync,
  rm: () => rm2,
  rmSync: () => rmSync,
  rmdir: () => rmdir2,
  rmdirSync: () => rmdirSync,
  stat: () => stat2,
  statSync: () => statSync,
  statfs: () => statfs2,
  statfsSync: () => statfsSync,
  symlink: () => symlink2,
  symlinkSync: () => symlinkSync,
  truncate: () => truncate2,
  truncateSync: () => truncateSync,
  unlink: () => unlink2,
  unlinkSync: () => unlinkSync,
  unwatchFile: () => unwatchFile,
  utimes: () => utimes2,
  utimesSync: () => utimesSync,
  watch: () => watch2,
  watchFile: () => watchFile,
  write: () => write,
  writeFile: () => writeFile2,
  writeFileSync: () => writeFileSync,
  writeSync: () => writeSync,
  writev: () => writev,
  writevSync: () => writevSync
});
function callbackify(fn2) {
  const fnc = /* @__PURE__ */ __name(function(...args) {
    const cb = args.pop();
    fn2().catch((error3) => cb(error3)).then((val) => cb(void 0, val));
  }, "fnc");
  fnc.__promisify__ = fn2;
  fnc.native = fnc;
  return fnc;
}
var access2, appendFile2, chown2, chmod2, copyFile2, cp2, lchown2, lchmod2, link2, lstat2, lutimes2, mkdir2, mkdtemp2, realpath2, open2, opendir2, readdir2, readFile2, readlink2, rename2, rm2, rmdir2, stat2, symlink2, truncate2, unlink2, utimes2, writeFile2, statfs2, close, createReadStream, createWriteStream, exists, fchown, fchmod, fdatasync, fstat, fsync, ftruncate, futimes, lstatSync, read, readv, realpathSync, statSync, unwatchFile, watch2, watchFile, write, writev, _toUnixTimestamp, openAsBlob, glob2, appendFileSync, accessSync, chownSync, chmodSync, closeSync, copyFileSync, cpSync, existsSync, fchownSync, fchmodSync, fdatasyncSync, fstatSync, fsyncSync, ftruncateSync, futimesSync, lchownSync, lchmodSync, linkSync, lutimesSync, mkdirSync, mkdtempSync, openSync, opendirSync, readdirSync, readSync, readvSync, readFileSync, readlinkSync, renameSync, rmSync, rmdirSync, symlinkSync, truncateSync, unlinkSync, utimesSync, writeFileSync, writeSync, writevSync, statfsSync, globSync;
var init_fs = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/fs/internal/fs.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_utils();
    init_promises();
    __name(callbackify, "callbackify");
    access2 = callbackify(access);
    appendFile2 = callbackify(appendFile);
    chown2 = callbackify(chown);
    chmod2 = callbackify(chmod);
    copyFile2 = callbackify(copyFile);
    cp2 = callbackify(cp);
    lchown2 = callbackify(lchown);
    lchmod2 = callbackify(lchmod);
    link2 = callbackify(link);
    lstat2 = callbackify(lstat);
    lutimes2 = callbackify(lutimes);
    mkdir2 = callbackify(mkdir);
    mkdtemp2 = callbackify(mkdtemp);
    realpath2 = callbackify(realpath);
    open2 = callbackify(open);
    opendir2 = callbackify(opendir);
    readdir2 = callbackify(readdir);
    readFile2 = callbackify(readFile);
    readlink2 = callbackify(readlink);
    rename2 = callbackify(rename);
    rm2 = callbackify(rm);
    rmdir2 = callbackify(rmdir);
    stat2 = callbackify(stat);
    symlink2 = callbackify(symlink);
    truncate2 = callbackify(truncate);
    unlink2 = callbackify(unlink);
    utimes2 = callbackify(utimes);
    writeFile2 = callbackify(writeFile);
    statfs2 = callbackify(statfs);
    close = notImplementedAsync("fs.close");
    createReadStream = notImplementedAsync(
      "fs.createReadStream"
    );
    createWriteStream = notImplementedAsync("fs.createWriteStream");
    exists = notImplementedAsync("fs.exists");
    fchown = notImplementedAsync("fs.fchown");
    fchmod = notImplementedAsync("fs.fchmod");
    fdatasync = notImplementedAsync("fs.fdatasync");
    fstat = notImplementedAsync("fs.fstat");
    fsync = notImplementedAsync("fs.fsync");
    ftruncate = notImplementedAsync("fs.ftruncate");
    futimes = notImplementedAsync("fs.futimes");
    lstatSync = notImplementedAsync("fs.lstatSync");
    read = notImplementedAsync("fs.read");
    readv = notImplementedAsync("fs.readv");
    realpathSync = notImplementedAsync("fs.realpathSync");
    statSync = notImplementedAsync("fs.statSync");
    unwatchFile = notImplementedAsync("fs.unwatchFile");
    watch2 = notImplementedAsync("fs.watch");
    watchFile = notImplementedAsync("fs.watchFile");
    write = notImplementedAsync("fs.write");
    writev = notImplementedAsync("fs.writev");
    _toUnixTimestamp = notImplementedAsync("fs._toUnixTimestamp");
    openAsBlob = notImplementedAsync("fs.openAsBlob");
    glob2 = notImplementedAsync("fs.glob");
    appendFileSync = notImplemented("fs.appendFileSync");
    accessSync = notImplemented("fs.accessSync");
    chownSync = notImplemented("fs.chownSync");
    chmodSync = notImplemented("fs.chmodSync");
    closeSync = notImplemented("fs.closeSync");
    copyFileSync = notImplemented("fs.copyFileSync");
    cpSync = notImplemented("fs.cpSync");
    existsSync = /* @__PURE__ */ __name(() => false, "existsSync");
    fchownSync = notImplemented("fs.fchownSync");
    fchmodSync = notImplemented("fs.fchmodSync");
    fdatasyncSync = notImplemented("fs.fdatasyncSync");
    fstatSync = notImplemented(
      "fs.fstatSync"
    );
    fsyncSync = notImplemented("fs.fsyncSync");
    ftruncateSync = notImplemented("fs.ftruncateSync");
    futimesSync = notImplemented("fs.futimesSync");
    lchownSync = notImplemented("fs.lchownSync");
    lchmodSync = notImplemented("fs.lchmodSync");
    linkSync = notImplemented("fs.linkSync");
    lutimesSync = notImplemented("fs.lutimesSync");
    mkdirSync = notImplemented("fs.mkdirSync");
    mkdtempSync = notImplemented(
      "fs.mkdtempSync"
    );
    openSync = notImplemented("fs.openSync");
    opendirSync = notImplemented("fs.opendirSync");
    readdirSync = notImplemented(
      "fs.readdirSync"
    );
    readSync = notImplemented("fs.readSync");
    readvSync = notImplemented("fs.readvSync");
    readFileSync = notImplemented(
      "fs.readFileSync"
    );
    readlinkSync = notImplemented(
      "fs.readlinkSync"
    );
    renameSync = notImplemented("fs.renameSync");
    rmSync = notImplemented("fs.rmSync");
    rmdirSync = notImplemented("fs.rmdirSync");
    symlinkSync = notImplemented("fs.symlinkSync");
    truncateSync = notImplemented("fs.truncateSync");
    unlinkSync = notImplemented("fs.unlinkSync");
    utimesSync = notImplemented("fs.utimesSync");
    writeFileSync = notImplemented("fs.writeFileSync");
    writeSync = notImplemented("fs.writeSync");
    writevSync = notImplemented("fs.writevSync");
    statfsSync = notImplemented(
      "fs.statfsSync"
    );
    globSync = notImplemented("fs.globSync");
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/fs/index.mjs
var promises, fs_default;
var init_fs2 = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/fs/index.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_classes();
    init_constants();
    init_fs();
    init_promises();
    init_classes();
    init_constants();
    init_fs();
    promises = promises_exports;
    fs_default = {
      ...classes_exports,
      ...constants_exports,
      ...fs_exports,
      promises
    };
  }
});

// node-built-in-modules:fs
var require_fs = __commonJS({
  "node-built-in-modules:fs"(exports, module) {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_fs2();
    module.exports = fs_default;
  }
});

// node-built-in-modules:path
import libDefault from "path";
var require_path = __commonJS({
  "node-built-in-modules:path"(exports, module) {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    module.exports = libDefault;
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/constants/iternal/os.mjs
var UV_UDP_REUSEADDR, RTLD_LAZY, RTLD_NOW, RTLD_GLOBAL, RTLD_LOCAL, RTLD_DEEPBIND, E2BIG, EACCES, EADDRINUSE, EADDRNOTAVAIL, EAFNOSUPPORT, EAGAIN, EALREADY, EBADF, EBADMSG, EBUSY, ECANCELED, ECHILD, ECONNABORTED, ECONNREFUSED, ECONNRESET, EDEADLK, EDESTADDRREQ, EDOM, EDQUOT, EEXIST, EFAULT, EFBIG, EHOSTUNREACH, EIDRM, EILSEQ, EINPROGRESS, EINTR, EINVAL, EIO, EISCONN, EISDIR, ELOOP, EMFILE, EMLINK, EMSGSIZE, EMULTIHOP, ENAMETOOLONG, ENETDOWN, ENETRESET, ENETUNREACH, ENFILE, ENOBUFS, ENODATA, ENODEV, ENOENT, ENOEXEC, ENOLCK, ENOLINK, ENOMEM, ENOMSG, ENOPROTOOPT, ENOSPC, ENOSR, ENOSTR, ENOSYS, ENOTCONN, ENOTDIR, ENOTEMPTY, ENOTSOCK, ENOTSUP, ENOTTY, ENXIO, EOPNOTSUPP, EOVERFLOW, EPERM, EPIPE, EPROTO, EPROTONOSUPPORT, EPROTOTYPE, ERANGE, EROFS, ESPIPE, ESRCH, ESTALE, ETIME, ETIMEDOUT, ETXTBSY, EWOULDBLOCK, EXDEV, WSAEINTR, WSAEBADF, WSAEACCES, WSAEFAULT, WSAEINVAL, WSAEMFILE, WSAEWOULDBLOCK, WSAEINPROGRESS, WSAEALREADY, WSAENOTSOCK, WSAEDESTADDRREQ, WSAEMSGSIZE, WSAEPROTOTYPE, WSAENOPROTOOPT, WSAEPROTONOSUPPORT, WSAESOCKTNOSUPPORT, WSAEOPNOTSUPP, WSAEPFNOSUPPORT, WSAEAFNOSUPPORT, WSAEADDRINUSE, WSAEADDRNOTAVAIL, WSAENETDOWN, WSAENETUNREACH, WSAENETRESET, WSAECONNABORTED, WSAECONNRESET, WSAENOBUFS, WSAEISCONN, WSAENOTCONN, WSAESHUTDOWN, WSAETOOMANYREFS, WSAETIMEDOUT, WSAECONNREFUSED, WSAELOOP, WSAENAMETOOLONG, WSAEHOSTDOWN, WSAEHOSTUNREACH, WSAENOTEMPTY, WSAEPROCLIM, WSAEUSERS, WSAEDQUOT, WSAESTALE, WSAEREMOTE, WSASYSNOTREADY, WSAVERNOTSUPPORTED, WSANOTINITIALISED, WSAEDISCON, WSAENOMORE, WSAECANCELLED, WSAEINVALIDPROCTABLE, WSAEINVALIDPROVIDER, WSAEPROVIDERFAILEDINIT, WSASYSCALLFAILURE, WSASERVICE_NOT_FOUND, WSATYPE_NOT_FOUND, WSA_E_NO_MORE, WSA_E_CANCELLED, WSAEREFUSED, SIGHUP, SIGINT, SIGQUIT, SIGILL, SIGTRAP, SIGABRT, SIGIOT, SIGBUS, SIGFPE, SIGKILL, SIGUSR1, SIGSEGV, SIGUSR2, SIGPIPE, SIGALRM, SIGTERM, SIGCHLD, SIGCONT, SIGSTOP, SIGTSTP, SIGTTIN, SIGTTOU, SIGURG, SIGXCPU, SIGXFSZ, SIGVTALRM, SIGPROF, SIGWINCH, SIGIO, SIGINFO, SIGSYS, SIGPOLL, SIGPWR, SIGBREAK, SIGSTKFLT, SIGUNUSED, SIGLOST, PRIORITY_LOW, PRIORITY_BELOW_NORMAL, PRIORITY_NORMAL, PRIORITY_ABOVE_NORMAL, PRIORITY_HIGH, PRIORITY_HIGHEST, os_default;
var init_os = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/constants/iternal/os.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    UV_UDP_REUSEADDR = 4;
    RTLD_LAZY = 1;
    RTLD_NOW = 2;
    RTLD_GLOBAL = 8;
    RTLD_LOCAL = 4;
    RTLD_DEEPBIND = 16;
    E2BIG = 7;
    EACCES = 13;
    EADDRINUSE = 48;
    EADDRNOTAVAIL = 49;
    EAFNOSUPPORT = 47;
    EAGAIN = 35;
    EALREADY = 37;
    EBADF = 9;
    EBADMSG = 94;
    EBUSY = 16;
    ECANCELED = 89;
    ECHILD = 10;
    ECONNABORTED = 53;
    ECONNREFUSED = 61;
    ECONNRESET = 54;
    EDEADLK = 11;
    EDESTADDRREQ = 39;
    EDOM = 33;
    EDQUOT = 69;
    EEXIST = 17;
    EFAULT = 14;
    EFBIG = 27;
    EHOSTUNREACH = 65;
    EIDRM = 90;
    EILSEQ = 92;
    EINPROGRESS = 36;
    EINTR = 4;
    EINVAL = 22;
    EIO = 5;
    EISCONN = 56;
    EISDIR = 21;
    ELOOP = 62;
    EMFILE = 24;
    EMLINK = 31;
    EMSGSIZE = 40;
    EMULTIHOP = 95;
    ENAMETOOLONG = 63;
    ENETDOWN = 50;
    ENETRESET = 52;
    ENETUNREACH = 51;
    ENFILE = 23;
    ENOBUFS = 55;
    ENODATA = 96;
    ENODEV = 19;
    ENOENT = 2;
    ENOEXEC = 8;
    ENOLCK = 77;
    ENOLINK = 97;
    ENOMEM = 12;
    ENOMSG = 91;
    ENOPROTOOPT = 42;
    ENOSPC = 28;
    ENOSR = 98;
    ENOSTR = 99;
    ENOSYS = 78;
    ENOTCONN = 57;
    ENOTDIR = 20;
    ENOTEMPTY = 66;
    ENOTSOCK = 38;
    ENOTSUP = 45;
    ENOTTY = 25;
    ENXIO = 6;
    EOPNOTSUPP = 102;
    EOVERFLOW = 84;
    EPERM = 1;
    EPIPE = 32;
    EPROTO = 100;
    EPROTONOSUPPORT = 43;
    EPROTOTYPE = 41;
    ERANGE = 34;
    EROFS = 30;
    ESPIPE = 29;
    ESRCH = 3;
    ESTALE = 70;
    ETIME = 101;
    ETIMEDOUT = 60;
    ETXTBSY = 26;
    EWOULDBLOCK = 35;
    EXDEV = 18;
    WSAEINTR = 10004;
    WSAEBADF = 10009;
    WSAEACCES = 10013;
    WSAEFAULT = 10014;
    WSAEINVAL = 10022;
    WSAEMFILE = 10024;
    WSAEWOULDBLOCK = 10035;
    WSAEINPROGRESS = 10036;
    WSAEALREADY = 10037;
    WSAENOTSOCK = 10038;
    WSAEDESTADDRREQ = 10039;
    WSAEMSGSIZE = 10040;
    WSAEPROTOTYPE = 10041;
    WSAENOPROTOOPT = 10042;
    WSAEPROTONOSUPPORT = 10043;
    WSAESOCKTNOSUPPORT = 10044;
    WSAEOPNOTSUPP = 10045;
    WSAEPFNOSUPPORT = 10046;
    WSAEAFNOSUPPORT = 10047;
    WSAEADDRINUSE = 10048;
    WSAEADDRNOTAVAIL = 10049;
    WSAENETDOWN = 10050;
    WSAENETUNREACH = 10051;
    WSAENETRESET = 10052;
    WSAECONNABORTED = 10053;
    WSAECONNRESET = 10054;
    WSAENOBUFS = 10055;
    WSAEISCONN = 10056;
    WSAENOTCONN = 10057;
    WSAESHUTDOWN = 10058;
    WSAETOOMANYREFS = 10059;
    WSAETIMEDOUT = 10060;
    WSAECONNREFUSED = 10061;
    WSAELOOP = 10062;
    WSAENAMETOOLONG = 10063;
    WSAEHOSTDOWN = 10064;
    WSAEHOSTUNREACH = 10065;
    WSAENOTEMPTY = 10066;
    WSAEPROCLIM = 10067;
    WSAEUSERS = 10068;
    WSAEDQUOT = 10069;
    WSAESTALE = 10070;
    WSAEREMOTE = 10071;
    WSASYSNOTREADY = 10091;
    WSAVERNOTSUPPORTED = 10092;
    WSANOTINITIALISED = 10093;
    WSAEDISCON = 10101;
    WSAENOMORE = 10102;
    WSAECANCELLED = 10103;
    WSAEINVALIDPROCTABLE = 10104;
    WSAEINVALIDPROVIDER = 10105;
    WSAEPROVIDERFAILEDINIT = 10106;
    WSASYSCALLFAILURE = 10107;
    WSASERVICE_NOT_FOUND = 10108;
    WSATYPE_NOT_FOUND = 100109;
    WSA_E_NO_MORE = 10110;
    WSA_E_CANCELLED = 10111;
    WSAEREFUSED = 10112;
    SIGHUP = 1;
    SIGINT = 2;
    SIGQUIT = 3;
    SIGILL = 4;
    SIGTRAP = 5;
    SIGABRT = 6;
    SIGIOT = 6;
    SIGBUS = 10;
    SIGFPE = 8;
    SIGKILL = 9;
    SIGUSR1 = 30;
    SIGSEGV = 11;
    SIGUSR2 = 31;
    SIGPIPE = 13;
    SIGALRM = 14;
    SIGTERM = 15;
    SIGCHLD = 20;
    SIGCONT = 19;
    SIGSTOP = 17;
    SIGTSTP = 18;
    SIGTTIN = 21;
    SIGTTOU = 22;
    SIGURG = 16;
    SIGXCPU = 24;
    SIGXFSZ = 25;
    SIGVTALRM = 26;
    SIGPROF = 27;
    SIGWINCH = 28;
    SIGIO = 23;
    SIGINFO = 29;
    SIGSYS = 12;
    SIGPOLL = 34;
    SIGPWR = 29;
    SIGBREAK = 21;
    SIGSTKFLT = 16;
    SIGUNUSED = 31;
    SIGLOST = 29;
    PRIORITY_LOW = 19;
    PRIORITY_BELOW_NORMAL = 10;
    PRIORITY_NORMAL = 0;
    PRIORITY_ABOVE_NORMAL = -7;
    PRIORITY_HIGH = -14;
    PRIORITY_HIGHEST = -20;
    os_default = {
      UV_UDP_REUSEADDR,
      dlopen: {
        RTLD_LAZY,
        RTLD_NOW,
        RTLD_GLOBAL,
        RTLD_LOCAL,
        RTLD_DEEPBIND
      },
      errno: {
        E2BIG,
        EACCES,
        EADDRINUSE,
        EADDRNOTAVAIL,
        EAFNOSUPPORT,
        EAGAIN,
        EALREADY,
        EBADF,
        EBADMSG,
        EBUSY,
        ECANCELED,
        ECHILD,
        ECONNABORTED,
        ECONNREFUSED,
        ECONNRESET,
        EDEADLK,
        EDESTADDRREQ,
        EDOM,
        EDQUOT,
        EEXIST,
        EFAULT,
        EFBIG,
        EHOSTUNREACH,
        EIDRM,
        EILSEQ,
        EINPROGRESS,
        EINTR,
        EINVAL,
        EIO,
        EISCONN,
        EISDIR,
        ELOOP,
        EMFILE,
        EMLINK,
        EMSGSIZE,
        EMULTIHOP,
        ENAMETOOLONG,
        ENETDOWN,
        ENETRESET,
        ENETUNREACH,
        ENFILE,
        ENOBUFS,
        ENODATA,
        ENODEV,
        ENOENT,
        ENOEXEC,
        ENOLCK,
        ENOLINK,
        ENOMEM,
        ENOMSG,
        ENOPROTOOPT,
        ENOSPC,
        ENOSR,
        ENOSTR,
        ENOSYS,
        ENOTCONN,
        ENOTDIR,
        ENOTEMPTY,
        ENOTSOCK,
        ENOTSUP,
        ENOTTY,
        ENXIO,
        EOPNOTSUPP,
        EOVERFLOW,
        EPERM,
        EPIPE,
        EPROTO,
        EPROTONOSUPPORT,
        EPROTOTYPE,
        ERANGE,
        EROFS,
        ESPIPE,
        ESRCH,
        ESTALE,
        ETIME,
        ETIMEDOUT,
        ETXTBSY,
        EWOULDBLOCK,
        EXDEV,
        WSAEINTR,
        WSAEBADF,
        WSAEACCES,
        WSAEFAULT,
        WSAEINVAL,
        WSAEMFILE,
        WSAEWOULDBLOCK,
        WSAEINPROGRESS,
        WSAEALREADY,
        WSAENOTSOCK,
        WSAEDESTADDRREQ,
        WSAEMSGSIZE,
        WSAEPROTOTYPE,
        WSAENOPROTOOPT,
        WSAEPROTONOSUPPORT,
        WSAESOCKTNOSUPPORT,
        WSAEOPNOTSUPP,
        WSAEPFNOSUPPORT,
        WSAEAFNOSUPPORT,
        WSAEADDRINUSE,
        WSAEADDRNOTAVAIL,
        WSAENETDOWN,
        WSAENETUNREACH,
        WSAENETRESET,
        WSAECONNABORTED,
        WSAECONNRESET,
        WSAENOBUFS,
        WSAEISCONN,
        WSAENOTCONN,
        WSAESHUTDOWN,
        WSAETOOMANYREFS,
        WSAETIMEDOUT,
        WSAECONNREFUSED,
        WSAELOOP,
        WSAENAMETOOLONG,
        WSAEHOSTDOWN,
        WSAEHOSTUNREACH,
        WSAENOTEMPTY,
        WSAEPROCLIM,
        WSAEUSERS,
        WSAEDQUOT,
        WSAESTALE,
        WSAEREMOTE,
        WSASYSNOTREADY,
        WSAVERNOTSUPPORTED,
        WSANOTINITIALISED,
        WSAEDISCON,
        WSAENOMORE,
        WSAECANCELLED,
        WSAEINVALIDPROCTABLE,
        WSAEINVALIDPROVIDER,
        WSAEPROVIDERFAILEDINIT,
        WSASYSCALLFAILURE,
        WSASERVICE_NOT_FOUND,
        WSATYPE_NOT_FOUND,
        WSA_E_NO_MORE,
        WSA_E_CANCELLED,
        WSAEREFUSED
      },
      signals: {
        SIGHUP,
        SIGINT,
        SIGQUIT,
        SIGILL,
        SIGTRAP,
        SIGABRT,
        SIGIOT,
        SIGBUS,
        SIGFPE,
        SIGKILL,
        SIGUSR1,
        SIGSEGV,
        SIGUSR2,
        SIGPIPE,
        SIGALRM,
        SIGTERM,
        SIGCHLD,
        SIGCONT,
        SIGSTOP,
        SIGTSTP,
        SIGTTIN,
        SIGTTOU,
        SIGURG,
        SIGXCPU,
        SIGXFSZ,
        SIGVTALRM,
        SIGPROF,
        SIGWINCH,
        SIGIO,
        SIGINFO,
        SIGSYS,
        SIGBREAK,
        SIGLOST,
        SIGPWR,
        SIGPOLL,
        SIGSTKFLT,
        SIGUNUSED
      },
      priority: {
        PRIORITY_LOW,
        PRIORITY_BELOW_NORMAL,
        PRIORITY_NORMAL,
        PRIORITY_ABOVE_NORMAL,
        PRIORITY_HIGH,
        PRIORITY_HIGHEST
      }
    };
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/os/internal/constants.mjs
var constants2;
var init_constants2 = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/os/internal/constants.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_os();
    constants2 = {
      ...os_default
    };
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/os/index.mjs
var NUM_CPUS, availableParallelism, arch2, machine, endianness, cpus, getPriority, setPriority, homedir, tmpdir, devNull, freemem, totalmem, loadavg, uptime2, hostname, networkInterfaces, platform3, type, release2, version2, userInfo, EOL, os_default2;
var init_os2 = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/os/index.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_utils();
    init_constants2();
    NUM_CPUS = 8;
    availableParallelism = /* @__PURE__ */ __name(() => NUM_CPUS, "availableParallelism");
    arch2 = /* @__PURE__ */ __name(() => "", "arch");
    machine = /* @__PURE__ */ __name(() => "", "machine");
    endianness = /* @__PURE__ */ __name(() => "LE", "endianness");
    cpus = /* @__PURE__ */ __name(() => {
      const info3 = {
        model: "",
        speed: 0,
        times: {
          user: 0,
          nice: 0,
          sys: 0,
          idle: 0,
          irq: 0
        }
      };
      return Array.from({ length: NUM_CPUS }, () => info3);
    }, "cpus");
    getPriority = /* @__PURE__ */ __name(() => 0, "getPriority");
    setPriority = notImplemented("os.setPriority");
    homedir = /* @__PURE__ */ __name(() => "/", "homedir");
    tmpdir = /* @__PURE__ */ __name(() => "/tmp", "tmpdir");
    devNull = "/dev/null";
    freemem = /* @__PURE__ */ __name(() => 0, "freemem");
    totalmem = /* @__PURE__ */ __name(() => 0, "totalmem");
    loadavg = /* @__PURE__ */ __name(() => [0, 0, 0], "loadavg");
    uptime2 = /* @__PURE__ */ __name(() => 0, "uptime");
    hostname = /* @__PURE__ */ __name(() => "", "hostname");
    networkInterfaces = /* @__PURE__ */ __name(() => {
      return {
        lo0: [
          {
            address: "127.0.0.1",
            netmask: "255.0.0.0",
            family: "IPv4",
            mac: "00:00:00:00:00:00",
            internal: true,
            cidr: "127.0.0.1/8"
          },
          {
            address: "::1",
            netmask: "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
            family: "IPv6",
            mac: "00:00:00:00:00:00",
            internal: true,
            cidr: "::1/128",
            scopeid: 0
          },
          {
            address: "fe80::1",
            netmask: "ffff:ffff:ffff:ffff::",
            family: "IPv6",
            mac: "00:00:00:00:00:00",
            internal: true,
            cidr: "fe80::1/64",
            scopeid: 1
          }
        ]
      };
    }, "networkInterfaces");
    platform3 = /* @__PURE__ */ __name(() => "linux", "platform");
    type = /* @__PURE__ */ __name(() => "Linux", "type");
    release2 = /* @__PURE__ */ __name(() => "", "release");
    version2 = /* @__PURE__ */ __name(() => "", "version");
    userInfo = /* @__PURE__ */ __name((opts) => {
      const encode = /* @__PURE__ */ __name((str) => {
        if (opts?.encoding) {
          const buff = Buffer.from(str);
          return opts.encoding === "buffer" ? buff : buff.toString(opts.encoding);
        }
        return str;
      }, "encode");
      return {
        gid: 1e3,
        uid: 1e3,
        homedir: encode("/"),
        shell: encode("/bin/sh"),
        username: encode("root")
      };
    }, "userInfo");
    EOL = "\n";
    os_default2 = {
      arch: arch2,
      availableParallelism,
      constants: constants2,
      cpus,
      EOL,
      endianness,
      devNull,
      freemem,
      getPriority,
      homedir,
      hostname,
      loadavg,
      machine,
      networkInterfaces,
      platform: platform3,
      release: release2,
      setPriority,
      tmpdir,
      totalmem,
      type,
      uptime: uptime2,
      userInfo,
      version: version2
    };
  }
});

// node-built-in-modules:os
var require_os = __commonJS({
  "node-built-in-modules:os"(exports, module) {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_os2();
    module.exports = os_default2;
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/crypto/internal/web.mjs
var web_exports = {};
__export(web_exports, {
  getRandomValues: () => getRandomValues,
  randomUUID: () => randomUUID,
  subtle: () => subtle
});
var subtle, randomUUID, getRandomValues;
var init_web = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/crypto/internal/web.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    subtle = globalThis.crypto?.subtle;
    randomUUID = /* @__PURE__ */ __name(() => {
      return globalThis.crypto?.randomUUID();
    }, "randomUUID");
    getRandomValues = /* @__PURE__ */ __name((array) => {
      return globalThis.crypto?.getRandomValues(array);
    }, "getRandomValues");
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/crypto/internal/node.mjs
var node_exports = {};
__export(node_exports, {
  Certificate: () => Certificate,
  Cipher: () => Cipher,
  Cipheriv: () => Cipheriv,
  Decipher: () => Decipher,
  Decipheriv: () => Decipheriv,
  DiffieHellman: () => DiffieHellman,
  DiffieHellmanGroup: () => DiffieHellmanGroup,
  ECDH: () => ECDH,
  Hash: () => Hash,
  Hmac: () => Hmac,
  KeyObject: () => KeyObject,
  Sign: () => Sign,
  Verify: () => Verify,
  X509Certificate: () => X509Certificate,
  checkPrime: () => checkPrime,
  checkPrimeSync: () => checkPrimeSync,
  constants: () => constants3,
  createCipher: () => createCipher,
  createCipheriv: () => createCipheriv,
  createDecipher: () => createDecipher,
  createDecipheriv: () => createDecipheriv,
  createDiffieHellman: () => createDiffieHellman,
  createDiffieHellmanGroup: () => createDiffieHellmanGroup,
  createECDH: () => createECDH,
  createHash: () => createHash,
  createHmac: () => createHmac,
  createPrivateKey: () => createPrivateKey,
  createPublicKey: () => createPublicKey,
  createSecretKey: () => createSecretKey,
  createSign: () => createSign,
  createVerify: () => createVerify,
  diffieHellman: () => diffieHellman,
  fips: () => fips,
  generateKey: () => generateKey,
  generateKeyPair: () => generateKeyPair,
  generateKeyPairSync: () => generateKeyPairSync,
  generateKeySync: () => generateKeySync,
  generatePrime: () => generatePrime,
  generatePrimeSync: () => generatePrimeSync,
  getCipherInfo: () => getCipherInfo,
  getCiphers: () => getCiphers,
  getCurves: () => getCurves,
  getDiffieHellman: () => getDiffieHellman,
  getFips: () => getFips,
  getHashes: () => getHashes,
  hash: () => hash,
  hkdf: () => hkdf,
  hkdfSync: () => hkdfSync,
  pbkdf2: () => pbkdf2,
  pbkdf2Sync: () => pbkdf2Sync,
  privateDecrypt: () => privateDecrypt,
  privateEncrypt: () => privateEncrypt,
  pseudoRandomBytes: () => pseudoRandomBytes,
  publicDecrypt: () => publicDecrypt,
  publicEncrypt: () => publicEncrypt,
  randomBytes: () => randomBytes,
  randomFill: () => randomFill,
  randomFillSync: () => randomFillSync,
  randomInt: () => randomInt,
  scrypt: () => scrypt,
  scryptSync: () => scryptSync,
  secureHeapUsed: () => secureHeapUsed,
  setEngine: () => setEngine,
  setFips: () => setFips,
  sign: () => sign,
  timingSafeEqual: () => timingSafeEqual,
  verify: () => verify,
  webcrypto: () => webcrypto
});
var MAX_RANDOM_VALUE_BYTES, webcrypto, randomBytes, fips, constants3, checkPrime, checkPrimeSync, createCipher, createDecipher, pseudoRandomBytes, createCipheriv, createDecipheriv, createDiffieHellman, createDiffieHellmanGroup, createECDH, createHash, createHmac, createPrivateKey, createPublicKey, createSecretKey, createSign, createVerify, diffieHellman, generatePrime, generatePrimeSync, getCiphers, getCipherInfo, getCurves, getDiffieHellman, getHashes, hkdf, hkdfSync, pbkdf2, pbkdf2Sync, generateKeyPair, generateKeyPairSync, generateKey, generateKeySync, privateDecrypt, privateEncrypt, publicDecrypt, publicEncrypt, randomFill, randomFillSync, randomInt, scrypt, scryptSync, sign, setEngine, timingSafeEqual, getFips, setFips, verify, secureHeapUsed, hash, Certificate, Cipher, Cipheriv, Decipher, Decipheriv, DiffieHellman, DiffieHellmanGroup, ECDH, Hash, Hmac, KeyObject, Sign, Verify, X509Certificate;
var init_node = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/crypto/internal/node.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_utils();
    init_web();
    MAX_RANDOM_VALUE_BYTES = 65536;
    webcrypto = new Proxy(
      globalThis.crypto,
      {
        get(_, key) {
          if (key === "CryptoKey") {
            return globalThis.CryptoKey;
          }
          if (typeof globalThis.crypto[key] === "function") {
            return globalThis.crypto[key].bind(globalThis.crypto);
          }
          return globalThis.crypto[key];
        }
      }
    );
    randomBytes = /* @__PURE__ */ __name((size, cb) => {
      const bytes = Buffer.alloc(size, 0, void 0);
      for (let generated = 0; generated < size; generated += MAX_RANDOM_VALUE_BYTES) {
        getRandomValues(
          Uint8Array.prototype.slice.call(
            bytes,
            generated,
            generated + MAX_RANDOM_VALUE_BYTES
          )
        );
      }
      if (typeof cb === "function") {
        cb(null, bytes);
        return void 0;
      }
      return bytes;
    }, "randomBytes");
    fips = false;
    constants3 = {};
    checkPrime = notImplemented("crypto.checkPrime");
    checkPrimeSync = notImplemented(
      "crypto.checkPrimeSync"
    );
    createCipher = notImplemented("crypto.createCipher");
    createDecipher = notImplemented("crypto.createDecipher");
    pseudoRandomBytes = notImplemented("crypto.pseudoRandomBytes");
    createCipheriv = notImplemented(
      "crypto.createCipheriv"
    );
    createDecipheriv = notImplemented("crypto.createDecipheriv");
    createDiffieHellman = notImplemented("crypto.createDiffieHellman");
    createDiffieHellmanGroup = notImplemented("crypto.createDiffieHellmanGroup");
    createECDH = notImplemented("crypto.createECDH");
    createHash = notImplemented("crypto.createHash");
    createHmac = notImplemented("crypto.createHmac");
    createPrivateKey = notImplemented("crypto.createPrivateKey");
    createPublicKey = notImplemented("crypto.createPublicKey");
    createSecretKey = notImplemented("crypto.createSecretKey");
    createSign = notImplemented("crypto.createSign");
    createVerify = notImplemented(
      "crypto.createVerify"
    );
    diffieHellman = notImplemented(
      "crypto.diffieHellman"
    );
    generatePrime = notImplemented(
      "crypto.generatePrime"
    );
    generatePrimeSync = notImplemented("crypto.generatePrimeSync");
    getCiphers = notImplemented("crypto.getCiphers");
    getCipherInfo = notImplemented(
      "crypto.getCipherInfo"
    );
    getCurves = notImplemented("crypto.getCurves");
    getDiffieHellman = notImplemented("crypto.getDiffieHellman");
    getHashes = notImplemented("crypto.getHashes");
    hkdf = notImplemented("crypto.hkdf");
    hkdfSync = notImplemented("crypto.hkdfSync");
    pbkdf2 = notImplemented("crypto.pbkdf2");
    pbkdf2Sync = notImplemented("crypto.pbkdf2Sync");
    generateKeyPair = notImplemented("crypto.generateKeyPair");
    generateKeyPairSync = notImplemented("crypto.generateKeyPairSync");
    generateKey = notImplemented("crypto.generateKey");
    generateKeySync = notImplemented("crypto.generateKeySync");
    privateDecrypt = notImplemented(
      "crypto.privateDecrypt"
    );
    privateEncrypt = notImplemented(
      "crypto.privateEncrypt"
    );
    publicDecrypt = notImplemented(
      "crypto.publicDecrypt"
    );
    publicEncrypt = notImplemented(
      "crypto.publicEncrypt"
    );
    randomFill = notImplemented("crypto.randomFill");
    randomFillSync = notImplemented(
      "crypto.randomFillSync"
    );
    randomInt = notImplemented("crypto.randomInt");
    scrypt = notImplemented("crypto.scrypt");
    scryptSync = notImplemented("crypto.scryptSync");
    sign = notImplemented("crypto.sign");
    setEngine = notImplemented("crypto.setEngine");
    timingSafeEqual = notImplemented("crypto.timingSafeEqual");
    getFips = notImplemented("crypto.getFips");
    setFips = notImplemented("crypto.setFips");
    verify = notImplemented("crypto.verify");
    secureHeapUsed = notImplemented(
      "crypto.secureHeapUsed"
    );
    hash = notImplemented("crypto.hash");
    Certificate = notImplementedClass(
      "crypto.Certificate"
    );
    Cipher = notImplementedClass(
      "crypto.Cipher"
    );
    Cipheriv = notImplementedClass(
      "crypto.Cipheriv"
      // @ts-expect-error not typed yet
    );
    Decipher = notImplementedClass(
      "crypto.Decipher"
    );
    Decipheriv = notImplementedClass(
      "crypto.Decipheriv"
      // @ts-expect-error not typed yet
    );
    DiffieHellman = notImplementedClass(
      "crypto.DiffieHellman"
    );
    DiffieHellmanGroup = notImplementedClass(
      "crypto.DiffieHellmanGroup"
    );
    ECDH = notImplementedClass(
      "crypto.ECDH"
    );
    Hash = notImplementedClass(
      "crypto.Hash"
    );
    Hmac = notImplementedClass(
      "crypto.Hmac"
    );
    KeyObject = notImplementedClass(
      "crypto.KeyObject"
    );
    Sign = notImplementedClass(
      "crypto.Sign"
    );
    Verify = notImplementedClass(
      "crypto.Verify"
    );
    X509Certificate = notImplementedClass(
      "crypto.X509Certificate"
    );
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/crypto/internal/constants.mjs
var constants4, constants_default;
var init_constants3 = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/crypto/internal/constants.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    constants4 = {
      ALPN_ENABLED: 1,
      // Node.js v18 only
      DH_CHECK_P_NOT_PRIME: 1,
      DH_CHECK_P_NOT_SAFE_PRIME: 2,
      DH_NOT_SUITABLE_GENERATOR: 8,
      DH_UNABLE_TO_CHECK_GENERATOR: 4,
      ENGINE_METHOD_ALL: 65535,
      ENGINE_METHOD_CIPHERS: 64,
      ENGINE_METHOD_DH: 4,
      ENGINE_METHOD_DIGESTS: 128,
      ENGINE_METHOD_DSA: 2,
      ENGINE_METHOD_EC: 2048,
      ENGINE_METHOD_NONE: 0,
      ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
      ENGINE_METHOD_PKEY_METHS: 512,
      ENGINE_METHOD_RAND: 8,
      ENGINE_METHOD_RSA: 1,
      OPENSSL_VERSION_NUMBER: 0,
      // explicitly set to 0 to avoid version misdetection
      POINT_CONVERSION_COMPRESSED: 2,
      POINT_CONVERSION_HYBRID: 6,
      POINT_CONVERSION_UNCOMPRESSED: 4,
      RSA_NO_PADDING: 3,
      RSA_PKCS1_OAEP_PADDING: 4,
      RSA_PKCS1_PADDING: 1,
      RSA_PKCS1_PSS_PADDING: 6,
      RSA_PSS_SALTLEN_AUTO: -2,
      RSA_PSS_SALTLEN_DIGEST: -1,
      RSA_PSS_SALTLEN_MAX_SIGN: -2,
      RSA_X931_PADDING: 5,
      SSL_OP_ALL: 2147485776,
      SSL_OP_ALLOW_NO_DHE_KEX: 1024,
      SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
      SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
      SSL_OP_CISCO_ANYCONNECT: 32768,
      SSL_OP_COOKIE_EXCHANGE: 8192,
      SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
      SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
      SSL_OP_EPHEMERAL_RSA: 0,
      // Node.js v18 only
      SSL_OP_LEGACY_SERVER_CONNECT: 4,
      SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0,
      // Node.js v18 only
      SSL_OP_MICROSOFT_SESS_ID_BUG: 0,
      // Node.js v18 only
      SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
      // Node.js v18 only
      SSL_OP_NETSCAPE_CA_DN_BUG: 0,
      // Node.js v18 only
      SSL_OP_NETSCAPE_CHALLENGE_BUG: 0,
      // Node.js v18 only
      SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0,
      // Node.js v18 only
      SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0,
      // Node.js v18 only
      SSL_OP_NO_COMPRESSION: 131072,
      SSL_OP_NO_ENCRYPT_THEN_MAC: 524288,
      SSL_OP_NO_QUERY_MTU: 4096,
      SSL_OP_NO_RENEGOTIATION: 1073741824,
      SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
      SSL_OP_NO_SSLv2: 0,
      SSL_OP_NO_SSLv3: 33554432,
      SSL_OP_NO_TICKET: 16384,
      SSL_OP_NO_TLSv1_1: 268435456,
      SSL_OP_NO_TLSv1_2: 134217728,
      SSL_OP_NO_TLSv1_3: 536870912,
      SSL_OP_NO_TLSv1: 67108864,
      SSL_OP_PKCS1_CHECK_1: 0,
      // Node.js v18 only
      SSL_OP_PKCS1_CHECK_2: 0,
      // Node.js v18 only
      SSL_OP_PRIORITIZE_CHACHA: 2097152,
      SSL_OP_SINGLE_DH_USE: 0,
      // Node.js v18 only
      SSL_OP_SINGLE_ECDH_USE: 0,
      // Node.js v18 only
      SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0,
      // Node.js v18 only
      SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
      // Node.js v18 only
      SSL_OP_TLS_BLOCK_PADDING_BUG: 0,
      // Node.js v18 only
      SSL_OP_TLS_D5_BUG: 0,
      // Node.js v18 only
      SSL_OP_TLS_ROLLBACK_BUG: 8388608,
      TLS1_1_VERSION: 0,
      // explicitly set to 0 to avoid version misdetection
      TLS1_2_VERSION: 0,
      // explicitly set to 0 to avoid version misdetection
      TLS1_3_VERSION: 0,
      // explicitly set to 0 to avoid version misdetection
      TLS1_VERSION: 0,
      // explicitly set to 0 to avoid version misdetection
      defaultCoreCipherList: "",
      // explicitly set to "" to avoid version misdetection
      get defaultCipherList() {
        return constants4.defaultCoreCipherList;
      },
      set defaultCipherList(_ignored) {
      }
    };
    constants_default = constants4;
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/crypto/index.mjs
var crypto_default;
var init_crypto = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/crypto/index.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_web();
    init_node();
    init_constants3();
    init_web();
    init_node();
    init_constants3();
    crypto_default = {
      ...web_exports,
      ...node_exports,
      // @ts-expect-error @types/node is out of date - this is a bug in typings
      constants: constants_default
    };
  }
});

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/crypto/$cloudflare.mjs
var workerdCrypto, Certificate2, DiffieHellman2, DiffieHellmanGroup2, Hash2, Hmac2, KeyObject2, X509Certificate2, checkPrime2, checkPrimeSync2, createDiffieHellman2, createDiffieHellmanGroup2, createHash2, createHmac2, createPrivateKey2, createPublicKey2, createSecretKey2, generateKey2, generateKeyPair2, generateKeyPairSync2, generateKeySync2, generatePrime2, generatePrimeSync2, getCiphers2, getCurves2, getDiffieHellman2, getFips2, getHashes2, hkdf2, hkdfSync2, pbkdf22, pbkdf2Sync2, randomBytes2, randomFill2, randomFillSync2, randomInt2, randomUUID2, scrypt2, scryptSync2, secureHeapUsed2, setEngine2, setFips2, subtle2, timingSafeEqual2, getRandomValues2, webcrypto2, fips2, cloudflare_default3;
var init_cloudflare4 = __esm({
  "D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/crypto/$cloudflare.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_crypto();
    init_crypto();
    workerdCrypto = process.getBuiltinModule("node:crypto");
    ({
      Certificate: Certificate2,
      DiffieHellman: DiffieHellman2,
      DiffieHellmanGroup: DiffieHellmanGroup2,
      Hash: Hash2,
      Hmac: Hmac2,
      KeyObject: KeyObject2,
      X509Certificate: X509Certificate2,
      checkPrime: checkPrime2,
      checkPrimeSync: checkPrimeSync2,
      createDiffieHellman: createDiffieHellman2,
      createDiffieHellmanGroup: createDiffieHellmanGroup2,
      createHash: createHash2,
      createHmac: createHmac2,
      createPrivateKey: createPrivateKey2,
      createPublicKey: createPublicKey2,
      createSecretKey: createSecretKey2,
      generateKey: generateKey2,
      generateKeyPair: generateKeyPair2,
      generateKeyPairSync: generateKeyPairSync2,
      generateKeySync: generateKeySync2,
      generatePrime: generatePrime2,
      generatePrimeSync: generatePrimeSync2,
      getCiphers: getCiphers2,
      getCurves: getCurves2,
      getDiffieHellman: getDiffieHellman2,
      getFips: getFips2,
      getHashes: getHashes2,
      hkdf: hkdf2,
      hkdfSync: hkdfSync2,
      pbkdf2: pbkdf22,
      pbkdf2Sync: pbkdf2Sync2,
      randomBytes: randomBytes2,
      randomFill: randomFill2,
      randomFillSync: randomFillSync2,
      randomInt: randomInt2,
      randomUUID: randomUUID2,
      scrypt: scrypt2,
      scryptSync: scryptSync2,
      secureHeapUsed: secureHeapUsed2,
      setEngine: setEngine2,
      setFips: setFips2,
      subtle: subtle2,
      timingSafeEqual: timingSafeEqual2
    } = workerdCrypto);
    getRandomValues2 = workerdCrypto.getRandomValues.bind(
      workerdCrypto.webcrypto
    );
    webcrypto2 = {
      CryptoKey: webcrypto.CryptoKey,
      getRandomValues: getRandomValues2,
      randomUUID: randomUUID2,
      subtle: subtle2
    };
    fips2 = workerdCrypto.fips;
    cloudflare_default3 = {
      /**
       * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
       */
      Certificate: Certificate2,
      Cipher,
      Cipheriv,
      Decipher,
      Decipheriv,
      ECDH,
      Sign,
      Verify,
      X509Certificate: X509Certificate2,
      // @ts-expect-error @types/node is out of date - this is a bug in typings
      constants: constants_default,
      createCipheriv,
      createDecipheriv,
      createECDH,
      createSign,
      createVerify,
      diffieHellman,
      getCipherInfo,
      hash,
      privateDecrypt,
      privateEncrypt,
      publicDecrypt,
      publicEncrypt,
      scrypt: scrypt2,
      scryptSync: scryptSync2,
      sign,
      verify,
      // default-only export from unenv
      createCipher,
      createDecipher,
      pseudoRandomBytes,
      /**
       * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
       */
      DiffieHellman: DiffieHellman2,
      DiffieHellmanGroup: DiffieHellmanGroup2,
      Hash: Hash2,
      Hmac: Hmac2,
      KeyObject: KeyObject2,
      checkPrime: checkPrime2,
      checkPrimeSync: checkPrimeSync2,
      createDiffieHellman: createDiffieHellman2,
      createDiffieHellmanGroup: createDiffieHellmanGroup2,
      createHash: createHash2,
      createHmac: createHmac2,
      createPrivateKey: createPrivateKey2,
      createPublicKey: createPublicKey2,
      createSecretKey: createSecretKey2,
      generateKey: generateKey2,
      generateKeyPair: generateKeyPair2,
      generateKeyPairSync: generateKeyPairSync2,
      generateKeySync: generateKeySync2,
      generatePrime: generatePrime2,
      generatePrimeSync: generatePrimeSync2,
      getCiphers: getCiphers2,
      getCurves: getCurves2,
      getDiffieHellman: getDiffieHellman2,
      getFips: getFips2,
      getHashes: getHashes2,
      getRandomValues: getRandomValues2,
      hkdf: hkdf2,
      hkdfSync: hkdfSync2,
      pbkdf2: pbkdf22,
      pbkdf2Sync: pbkdf2Sync2,
      randomBytes: randomBytes2,
      randomFill: randomFill2,
      randomFillSync: randomFillSync2,
      randomInt: randomInt2,
      randomUUID: randomUUID2,
      secureHeapUsed: secureHeapUsed2,
      setEngine: setEngine2,
      setFips: setFips2,
      subtle: subtle2,
      timingSafeEqual: timingSafeEqual2,
      // default-only export from workerd
      fips: fips2,
      // special-cased deep merged symbols
      webcrypto: webcrypto2
    };
  }
});

// node-built-in-modules:crypto
var require_crypto = __commonJS({
  "node-built-in-modules:crypto"(exports, module) {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_cloudflare4();
    module.exports = cloudflare_default3;
  }
});

// node_modules/dotenv/package.json
var require_package = __commonJS({
  "node_modules/dotenv/package.json"(exports, module) {
    module.exports = {
      name: "dotenv",
      version: "16.4.5",
      description: "Loads environment variables from .env file",
      main: "lib/main.js",
      types: "lib/main.d.ts",
      exports: {
        ".": {
          types: "./lib/main.d.ts",
          require: "./lib/main.js",
          default: "./lib/main.js"
        },
        "./config": "./config.js",
        "./config.js": "./config.js",
        "./lib/env-options": "./lib/env-options.js",
        "./lib/env-options.js": "./lib/env-options.js",
        "./lib/cli-options": "./lib/cli-options.js",
        "./lib/cli-options.js": "./lib/cli-options.js",
        "./package.json": "./package.json"
      },
      scripts: {
        "dts-check": "tsc --project tests/types/tsconfig.json",
        lint: "standard",
        "lint-readme": "standard-markdown",
        pretest: "npm run lint && npm run dts-check",
        test: "tap tests/*.js --100 -Rspec",
        "test:coverage": "tap --coverage-report=lcov",
        prerelease: "npm test",
        release: "standard-version"
      },
      repository: {
        type: "git",
        url: "git://github.com/motdotla/dotenv.git"
      },
      funding: "https://dotenvx.com",
      keywords: [
        "dotenv",
        "env",
        ".env",
        "environment",
        "variables",
        "config",
        "settings"
      ],
      readmeFilename: "README.md",
      license: "BSD-2-Clause",
      devDependencies: {
        "@definitelytyped/dtslint": "^0.0.133",
        "@types/node": "^18.11.3",
        decache: "^4.6.1",
        sinon: "^14.0.1",
        standard: "^17.0.0",
        "standard-markdown": "^7.1.0",
        "standard-version": "^9.5.0",
        tap: "^16.3.0",
        tar: "^6.1.11",
        typescript: "^4.8.4"
      },
      engines: {
        node: ">=12"
      },
      browser: {
        fs: false
      }
    };
  }
});

// node_modules/dotenv/lib/main.js
var require_main = __commonJS({
  "node_modules/dotenv/lib/main.js"(exports, module) {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    var fs = require_fs();
    var path = require_path();
    var os = require_os();
    var crypto = require_crypto();
    var packageJson = require_package();
    var version3 = packageJson.version;
    var LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function parse(src) {
      const obj = {};
      let lines = src.toString();
      lines = lines.replace(/\r\n?/mg, "\n");
      let match;
      while ((match = LINE.exec(lines)) != null) {
        const key = match[1];
        let value = match[2] || "";
        value = value.trim();
        const maybeQuote = value[0];
        value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
        if (maybeQuote === '"') {
          value = value.replace(/\\n/g, "\n");
          value = value.replace(/\\r/g, "\r");
        }
        obj[key] = value;
      }
      return obj;
    }
    __name(parse, "parse");
    function _parseVault(options) {
      const vaultPath = _vaultPath(options);
      const result = DotenvModule.configDotenv({ path: vaultPath });
      if (!result.parsed) {
        const err2 = new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`);
        err2.code = "MISSING_DATA";
        throw err2;
      }
      const keys = _dotenvKey(options).split(",");
      const length = keys.length;
      let decrypted;
      for (let i = 0; i < length; i++) {
        try {
          const key = keys[i].trim();
          const attrs = _instructions(result, key);
          decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key);
          break;
        } catch (error3) {
          if (i + 1 >= length) {
            throw error3;
          }
        }
      }
      return DotenvModule.parse(decrypted);
    }
    __name(_parseVault, "_parseVault");
    function _log(message) {
      console.log(`[dotenv@${version3}][INFO] ${message}`);
    }
    __name(_log, "_log");
    function _warn(message) {
      console.log(`[dotenv@${version3}][WARN] ${message}`);
    }
    __name(_warn, "_warn");
    function _debug(message) {
      console.log(`[dotenv@${version3}][DEBUG] ${message}`);
    }
    __name(_debug, "_debug");
    function _dotenvKey(options) {
      if (options && options.DOTENV_KEY && options.DOTENV_KEY.length > 0) {
        return options.DOTENV_KEY;
      }
      if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
        return process.env.DOTENV_KEY;
      }
      return "";
    }
    __name(_dotenvKey, "_dotenvKey");
    function _instructions(result, dotenvKey) {
      let uri;
      try {
        uri = new URL(dotenvKey);
      } catch (error3) {
        if (error3.code === "ERR_INVALID_URL") {
          const err2 = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
          err2.code = "INVALID_DOTENV_KEY";
          throw err2;
        }
        throw error3;
      }
      const key = uri.password;
      if (!key) {
        const err2 = new Error("INVALID_DOTENV_KEY: Missing key part");
        err2.code = "INVALID_DOTENV_KEY";
        throw err2;
      }
      const environment = uri.searchParams.get("environment");
      if (!environment) {
        const err2 = new Error("INVALID_DOTENV_KEY: Missing environment part");
        err2.code = "INVALID_DOTENV_KEY";
        throw err2;
      }
      const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`;
      const ciphertext = result.parsed[environmentKey];
      if (!ciphertext) {
        const err2 = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`);
        err2.code = "NOT_FOUND_DOTENV_ENVIRONMENT";
        throw err2;
      }
      return { ciphertext, key };
    }
    __name(_instructions, "_instructions");
    function _vaultPath(options) {
      let possibleVaultPath = null;
      if (options && options.path && options.path.length > 0) {
        if (Array.isArray(options.path)) {
          for (const filepath of options.path) {
            if (fs.existsSync(filepath)) {
              possibleVaultPath = filepath.endsWith(".vault") ? filepath : `${filepath}.vault`;
            }
          }
        } else {
          possibleVaultPath = options.path.endsWith(".vault") ? options.path : `${options.path}.vault`;
        }
      } else {
        possibleVaultPath = path.resolve(process.cwd(), ".env.vault");
      }
      if (fs.existsSync(possibleVaultPath)) {
        return possibleVaultPath;
      }
      return null;
    }
    __name(_vaultPath, "_vaultPath");
    function _resolveHome(envPath) {
      return envPath[0] === "~" ? path.join(os.homedir(), envPath.slice(1)) : envPath;
    }
    __name(_resolveHome, "_resolveHome");
    function _configVault(options) {
      _log("Loading env from encrypted .env.vault");
      const parsed = DotenvModule._parseVault(options);
      let processEnv = process.env;
      if (options && options.processEnv != null) {
        processEnv = options.processEnv;
      }
      DotenvModule.populate(processEnv, parsed, options);
      return { parsed };
    }
    __name(_configVault, "_configVault");
    function configDotenv(options) {
      const dotenvPath = path.resolve(process.cwd(), ".env");
      let encoding = "utf8";
      const debug3 = Boolean(options && options.debug);
      if (options && options.encoding) {
        encoding = options.encoding;
      } else {
        if (debug3) {
          _debug("No encoding is specified. UTF-8 is used by default");
        }
      }
      let optionPaths = [dotenvPath];
      if (options && options.path) {
        if (!Array.isArray(options.path)) {
          optionPaths = [_resolveHome(options.path)];
        } else {
          optionPaths = [];
          for (const filepath of options.path) {
            optionPaths.push(_resolveHome(filepath));
          }
        }
      }
      let lastError;
      const parsedAll = {};
      for (const path2 of optionPaths) {
        try {
          const parsed = DotenvModule.parse(fs.readFileSync(path2, { encoding }));
          DotenvModule.populate(parsedAll, parsed, options);
        } catch (e) {
          if (debug3) {
            _debug(`Failed to load ${path2} ${e.message}`);
          }
          lastError = e;
        }
      }
      let processEnv = process.env;
      if (options && options.processEnv != null) {
        processEnv = options.processEnv;
      }
      DotenvModule.populate(processEnv, parsedAll, options);
      if (lastError) {
        return { parsed: parsedAll, error: lastError };
      } else {
        return { parsed: parsedAll };
      }
    }
    __name(configDotenv, "configDotenv");
    function config3(options) {
      if (_dotenvKey(options).length === 0) {
        return DotenvModule.configDotenv(options);
      }
      const vaultPath = _vaultPath(options);
      if (!vaultPath) {
        _warn(`You set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}. Did you forget to build it?`);
        return DotenvModule.configDotenv(options);
      }
      return DotenvModule._configVault(options);
    }
    __name(config3, "config");
    function decrypt(encrypted, keyStr) {
      const key = Buffer.from(keyStr.slice(-64), "hex");
      let ciphertext = Buffer.from(encrypted, "base64");
      const nonce = ciphertext.subarray(0, 12);
      const authTag = ciphertext.subarray(-16);
      ciphertext = ciphertext.subarray(12, -16);
      try {
        const aesgcm = crypto.createDecipheriv("aes-256-gcm", key, nonce);
        aesgcm.setAuthTag(authTag);
        return `${aesgcm.update(ciphertext)}${aesgcm.final()}`;
      } catch (error3) {
        const isRange = error3 instanceof RangeError;
        const invalidKeyLength = error3.message === "Invalid key length";
        const decryptionFailed = error3.message === "Unsupported state or unable to authenticate data";
        if (isRange || invalidKeyLength) {
          const err2 = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
          err2.code = "INVALID_DOTENV_KEY";
          throw err2;
        } else if (decryptionFailed) {
          const err2 = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
          err2.code = "DECRYPTION_FAILED";
          throw err2;
        } else {
          throw error3;
        }
      }
    }
    __name(decrypt, "decrypt");
    function populate(processEnv, parsed, options = {}) {
      const debug3 = Boolean(options && options.debug);
      const override = Boolean(options && options.override);
      if (typeof parsed !== "object") {
        const err2 = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
        err2.code = "OBJECT_REQUIRED";
        throw err2;
      }
      for (const key of Object.keys(parsed)) {
        if (Object.prototype.hasOwnProperty.call(processEnv, key)) {
          if (override === true) {
            processEnv[key] = parsed[key];
          }
          if (debug3) {
            if (override === true) {
              _debug(`"${key}" is already defined and WAS overwritten`);
            } else {
              _debug(`"${key}" is already defined and was NOT overwritten`);
            }
          }
        } else {
          processEnv[key] = parsed[key];
        }
      }
    }
    __name(populate, "populate");
    var DotenvModule = {
      configDotenv,
      _configVault,
      _parseVault,
      config: config3,
      decrypt,
      parse,
      populate
    };
    module.exports.configDotenv = DotenvModule.configDotenv;
    module.exports._configVault = DotenvModule._configVault;
    module.exports._parseVault = DotenvModule._parseVault;
    module.exports.config = DotenvModule.config;
    module.exports.decrypt = DotenvModule.decrypt;
    module.exports.parse = DotenvModule.parse;
    module.exports.populate = DotenvModule.populate;
    module.exports = DotenvModule;
  }
});

// api/index.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// node_modules/@whatwg-node/server/esm/createServerAdapter.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var DefaultFetchAPI = __toESM(require_global_ponyfill(), 1);

// node_modules/@whatwg-node/server/esm/utils.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var import_fetch = __toESM(require_global_ponyfill(), 1);
function isAsyncIterable(body) {
  return body != null && typeof body === "object" && typeof body[Symbol.asyncIterator] === "function";
}
__name(isAsyncIterable, "isAsyncIterable");
function getPort(nodeRequest) {
  if (nodeRequest.socket?.localPort) {
    return nodeRequest.socket?.localPort;
  }
  const hostInHeader = nodeRequest.headers?.[":authority"] || nodeRequest.headers?.host;
  const portInHeader = hostInHeader?.split(":")?.[1];
  if (portInHeader) {
    return portInHeader;
  }
  return 80;
}
__name(getPort, "getPort");
function getHostnameWithPort(nodeRequest) {
  if (nodeRequest.headers?.[":authority"]) {
    return nodeRequest.headers?.[":authority"];
  }
  if (nodeRequest.headers?.host) {
    return nodeRequest.headers?.host;
  }
  const port = getPort(nodeRequest);
  if (nodeRequest.hostname) {
    return nodeRequest.hostname + ":" + port;
  }
  const localIp = nodeRequest.socket?.localAddress;
  if (localIp && !localIp?.includes("::") && !localIp?.includes("ffff")) {
    return `${localIp}:${port}`;
  }
  return "localhost";
}
__name(getHostnameWithPort, "getHostnameWithPort");
function buildFullUrl(nodeRequest) {
  const hostnameWithPort = getHostnameWithPort(nodeRequest);
  const protocol = nodeRequest.protocol || (nodeRequest.socket?.encrypted ? "https" : "http");
  const endpoint = nodeRequest.originalUrl || nodeRequest.url || "/graphql";
  return `${protocol}://${hostnameWithPort}${endpoint}`;
}
__name(buildFullUrl, "buildFullUrl");
function isRequestBody(body) {
  const stringTag = body[Symbol.toStringTag];
  if (typeof body === "string" || stringTag === "Uint8Array" || stringTag === "Blob" || stringTag === "FormData" || stringTag === "URLSearchParams" || isAsyncIterable(body)) {
    return true;
  }
  return false;
}
__name(isRequestBody, "isRequestBody");
var ServerAdapterRequestAbortSignal = class extends EventTarget {
  aborted = false;
  _onabort = null;
  reason;
  throwIfAborted() {
    if (this.aborted) {
      throw this.reason;
    }
  }
  sendAbort() {
    this.reason = new DOMException("This operation was aborted", "AbortError");
    this.aborted = true;
    this.dispatchEvent(new Event("abort"));
  }
  get onabort() {
    return this._onabort;
  }
  set onabort(value) {
    this._onabort = value;
    if (value) {
      this.addEventListener("abort", value);
    } else {
      this.removeEventListener("abort", value);
    }
  }
  any(signals) {
    return AbortSignal.any([...signals]);
  }
};
__name(ServerAdapterRequestAbortSignal, "ServerAdapterRequestAbortSignal");
var bunNodeCompatModeWarned = false;
var nodeRequestResponseMap = /* @__PURE__ */ new WeakMap();
function normalizeNodeRequest(nodeRequest, RequestCtor) {
  const rawRequest = nodeRequest.raw || nodeRequest.req || nodeRequest;
  let fullUrl = buildFullUrl(rawRequest);
  if (nodeRequest.query) {
    const url = new import_fetch.URL(fullUrl);
    for (const key in nodeRequest.query) {
      url.searchParams.set(key, nodeRequest.query[key]);
    }
    fullUrl = url.toString();
  }
  let signal;
  const nodeResponse = nodeRequestResponseMap.get(nodeRequest);
  nodeRequestResponseMap.delete(nodeRequest);
  let normalizedHeaders = nodeRequest.headers;
  if (nodeRequest.headers?.[":method"]) {
    normalizedHeaders = {};
    for (const key in nodeRequest.headers) {
      if (!key.startsWith(":")) {
        normalizedHeaders[key] = nodeRequest.headers[key];
      }
    }
  }
  if (nodeResponse?.once) {
    let sendAbortSignal;
    if (RequestCtor !== globalThis.Request) {
      signal = new ServerAdapterRequestAbortSignal();
      sendAbortSignal = /* @__PURE__ */ __name(() => signal.sendAbort(), "sendAbortSignal");
    } else {
      const controller = new AbortController();
      signal = controller.signal;
      sendAbortSignal = /* @__PURE__ */ __name(() => controller.abort(), "sendAbortSignal");
    }
    const closeEventListener = /* @__PURE__ */ __name(() => {
      if (signal && !signal.aborted) {
        rawRequest.aborted = true;
        sendAbortSignal();
      }
    }, "closeEventListener");
    nodeResponse.once("error", closeEventListener);
    nodeResponse.once("close", closeEventListener);
    nodeResponse.once("finish", () => {
      nodeResponse.removeListener("close", closeEventListener);
    });
  }
  if (nodeRequest.method === "GET" || nodeRequest.method === "HEAD") {
    return new RequestCtor(fullUrl, {
      method: nodeRequest.method,
      headers: normalizedHeaders,
      signal
    });
  }
  const maybeParsedBody = nodeRequest.body;
  if (maybeParsedBody != null && Object.keys(maybeParsedBody).length > 0) {
    if (isRequestBody(maybeParsedBody)) {
      return new RequestCtor(fullUrl, {
        method: nodeRequest.method,
        headers: normalizedHeaders,
        body: maybeParsedBody,
        signal
      });
    }
    const request2 = new RequestCtor(fullUrl, {
      method: nodeRequest.method,
      headers: normalizedHeaders,
      signal
    });
    if (!request2.headers.get("content-type")?.includes("json")) {
      request2.headers.set("content-type", "application/json; charset=utf-8");
    }
    return new Proxy(request2, {
      get: (target, prop, receiver) => {
        switch (prop) {
          case "json":
            return async () => maybeParsedBody;
          case "text":
            return async () => JSON.stringify(maybeParsedBody);
          default:
            return Reflect.get(target, prop, receiver);
        }
      }
    });
  }
  if (globalThis.process?.versions?.bun && isReadable(rawRequest)) {
    if (!bunNodeCompatModeWarned) {
      bunNodeCompatModeWarned = true;
      console.warn(`You use Bun Node compatibility mode, which is not recommended!
It will affect your performance. Please check our Bun integration recipe, and avoid using 'http' for your server implementation.`);
    }
    return new RequestCtor(fullUrl, {
      method: nodeRequest.method,
      headers: normalizedHeaders,
      duplex: "half",
      body: new ReadableStream({
        start(controller) {
          rawRequest.on("data", (chunk) => {
            controller.enqueue(chunk);
          });
          rawRequest.on("error", (e) => {
            controller.error(e);
          });
          rawRequest.on("end", () => {
            controller.close();
          });
        },
        cancel(e) {
          rawRequest.destroy(e);
        }
      }),
      signal
    });
  }
  return new RequestCtor(fullUrl, {
    method: nodeRequest.method,
    headers: normalizedHeaders,
    body: rawRequest,
    duplex: "half",
    signal
  });
}
__name(normalizeNodeRequest, "normalizeNodeRequest");
function isReadable(stream) {
  return stream.read != null;
}
__name(isReadable, "isReadable");
function isNodeRequest(request2) {
  return isReadable(request2);
}
__name(isNodeRequest, "isNodeRequest");
function isServerResponse(stream) {
  return stream != null && stream.setHeader != null && stream.end != null && stream.once != null && stream.write != null;
}
__name(isServerResponse, "isServerResponse");
function isFetchEvent(event) {
  return event != null && event.request != null && event.respondWith != null;
}
__name(isFetchEvent, "isFetchEvent");
function configureSocket(rawRequest) {
  rawRequest?.socket?.setTimeout?.(0);
  rawRequest?.socket?.setNoDelay?.(true);
  rawRequest?.socket?.setKeepAlive?.(true);
}
__name(configureSocket, "configureSocket");
function endResponse(serverResponse) {
  serverResponse.end(null, null, null);
}
__name(endResponse, "endResponse");
async function sendAsyncIterable(serverResponse, asyncIterable) {
  let closed = false;
  const closeEventListener = /* @__PURE__ */ __name(() => {
    closed = true;
  }, "closeEventListener");
  serverResponse.once("error", closeEventListener);
  serverResponse.once("close", closeEventListener);
  serverResponse.once("finish", () => {
    serverResponse.removeListener("close", closeEventListener);
  });
  for await (const chunk of asyncIterable) {
    if (closed) {
      break;
    }
    if (!serverResponse.write(chunk)) {
      if (closed) {
        break;
      }
      await new Promise((resolve) => serverResponse.once("drain", resolve));
    }
  }
  endResponse(serverResponse);
}
__name(sendAsyncIterable, "sendAsyncIterable");
function sendNodeResponse(fetchResponse, serverResponse, nodeRequest) {
  if (serverResponse.closed || serverResponse.destroyed || serverResponse.writableEnded) {
    return;
  }
  if (!fetchResponse) {
    serverResponse.statusCode = 404;
    serverResponse.end();
    return;
  }
  serverResponse.statusCode = fetchResponse.status;
  serverResponse.statusMessage = fetchResponse.statusText;
  let setCookiesSet = false;
  fetchResponse.headers.forEach((value, key) => {
    if (key === "set-cookie") {
      if (setCookiesSet) {
        return;
      }
      setCookiesSet = true;
      const setCookies = fetchResponse.headers.getSetCookie?.();
      if (setCookies) {
        serverResponse.setHeader("set-cookie", setCookies);
        return;
      }
    }
    serverResponse.setHeader(key, value);
  });
  const bufOfRes = fetchResponse._buffer;
  if (bufOfRes) {
    serverResponse.write(bufOfRes);
    endResponse(serverResponse);
    return;
  }
  const fetchBody = fetchResponse.body;
  if (fetchBody == null) {
    endResponse(serverResponse);
    return;
  }
  if (fetchBody[Symbol.toStringTag] === "Uint8Array") {
    serverResponse.write(fetchBody);
    endResponse(serverResponse);
    return;
  }
  configureSocket(nodeRequest);
  if (isReadable(fetchBody)) {
    serverResponse.once("close", () => {
      fetchBody.destroy();
    });
    fetchBody.pipe(serverResponse);
    return;
  }
  if (isAsyncIterable(fetchBody)) {
    return sendAsyncIterable(serverResponse, fetchBody);
  }
}
__name(sendNodeResponse, "sendNodeResponse");
function isRequestInit(val) {
  return val != null && typeof val === "object" && ("body" in val || "cache" in val || "credentials" in val || "headers" in val || "integrity" in val || "keepalive" in val || "method" in val || "mode" in val || "redirect" in val || "referrer" in val || "referrerPolicy" in val || "signal" in val || "window" in val);
}
__name(isRequestInit, "isRequestInit");
function completeAssign(...args) {
  const [target, ...sources] = args.filter((arg) => arg != null && typeof arg === "object");
  sources.forEach((source) => {
    const descriptors = Object.getOwnPropertyNames(source).reduce((descriptors2, key) => {
      const descriptor = Object.getOwnPropertyDescriptor(source, key);
      if (descriptor) {
        descriptors2[key] = Object.getOwnPropertyDescriptor(source, key);
      }
      return descriptors2;
    }, {});
    Object.getOwnPropertySymbols(source).forEach((sym) => {
      const descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor?.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}
__name(completeAssign, "completeAssign");
function isPromise(val) {
  return val?.then != null;
}
__name(isPromise, "isPromise");
function iterateAsyncVoid(iterable, callback) {
  const iterator = iterable[Symbol.iterator]();
  let stopEarlyFlag = false;
  function stopEarlyFn() {
    stopEarlyFlag = true;
  }
  __name(stopEarlyFn, "stopEarlyFn");
  function iterate() {
    const { done: endOfIterator, value } = iterator.next();
    if (endOfIterator) {
      return;
    }
    const result$ = callback(value, stopEarlyFn);
    if (isPromise(result$)) {
      return result$.then(() => {
        if (stopEarlyFlag) {
          return;
        }
        return iterate();
      });
    }
    if (stopEarlyFlag) {
      return;
    }
    return iterate();
  }
  __name(iterate, "iterate");
  return iterate();
}
__name(iterateAsyncVoid, "iterateAsyncVoid");
function handleErrorFromRequestHandler(error3, ResponseCtor) {
  return new ResponseCtor(error3.stack || error3.message || error3.toString(), {
    status: error3.status || 500
  });
}
__name(handleErrorFromRequestHandler, "handleErrorFromRequestHandler");
function isolateObject(originalCtx, waitUntilPromises) {
  if (originalCtx == null) {
    if (waitUntilPromises == null) {
      return {};
    }
    originalCtx = {};
  }
  const extraProps = {};
  const deletedProps = /* @__PURE__ */ new Set();
  return new Proxy(originalCtx, {
    get(originalCtx2, prop) {
      if (waitUntilPromises != null && prop === "waitUntil") {
        return /* @__PURE__ */ __name(function waitUntil(promise) {
          waitUntilPromises.push(promise.catch((err2) => console.error(err2)));
        }, "waitUntil");
      }
      const extraPropVal = extraProps[prop];
      if (extraPropVal != null) {
        if (typeof extraPropVal === "function") {
          return extraPropVal.bind(extraProps);
        }
        return extraPropVal;
      }
      if (deletedProps.has(prop)) {
        return void 0;
      }
      return originalCtx2[prop];
    },
    set(_originalCtx, prop, value) {
      extraProps[prop] = value;
      return true;
    },
    has(originalCtx2, prop) {
      if (waitUntilPromises != null && prop === "waitUntil") {
        return true;
      }
      if (deletedProps.has(prop)) {
        return false;
      }
      if (prop in extraProps) {
        return true;
      }
      return prop in originalCtx2;
    },
    defineProperty(_originalCtx, prop, descriptor) {
      return Reflect.defineProperty(extraProps, prop, descriptor);
    },
    deleteProperty(_originalCtx, prop) {
      if (prop in extraProps) {
        return Reflect.deleteProperty(extraProps, prop);
      }
      deletedProps.add(prop);
      return true;
    },
    ownKeys(originalCtx2) {
      const extraKeys = Reflect.ownKeys(extraProps);
      const originalKeys = Reflect.ownKeys(originalCtx2);
      const deletedKeys = Array.from(deletedProps);
      const allKeys = new Set(extraKeys.concat(originalKeys.filter((keys) => !deletedKeys.includes(keys))));
      if (waitUntilPromises != null) {
        allKeys.add("waitUntil");
      }
      return Array.from(allKeys);
    },
    getOwnPropertyDescriptor(originalCtx2, prop) {
      if (prop in extraProps) {
        return Reflect.getOwnPropertyDescriptor(extraProps, prop);
      }
      if (deletedProps.has(prop)) {
        return void 0;
      }
      return Reflect.getOwnPropertyDescriptor(originalCtx2, prop);
    }
  });
}
__name(isolateObject, "isolateObject");
function createDeferredPromise() {
  let resolveFn;
  let rejectFn;
  const promise = new Promise(/* @__PURE__ */ __name(function deferredPromiseExecutor(resolve, reject) {
    resolveFn = resolve;
    rejectFn = reject;
  }, "deferredPromiseExecutor"));
  return {
    promise,
    get resolve() {
      return resolveFn;
    },
    get reject() {
      return rejectFn;
    }
  };
}
__name(createDeferredPromise, "createDeferredPromise");
function handleAbortSignalAndPromiseResponse(response$, abortSignal) {
  if (isPromise(response$) && abortSignal) {
    const deferred$ = createDeferredPromise();
    abortSignal.addEventListener("abort", /* @__PURE__ */ __name(function abortSignalFetchErrorHandler() {
      deferred$.reject(abortSignal.reason);
    }, "abortSignalFetchErrorHandler"));
    response$.then(/* @__PURE__ */ __name(function fetchSuccessHandler(res) {
      deferred$.resolve(res);
    }, "fetchSuccessHandler")).catch(/* @__PURE__ */ __name(function fetchErrorHandler(err2) {
      deferred$.reject(err2);
    }, "fetchErrorHandler"));
    return deferred$.promise;
  }
  return response$;
}
__name(handleAbortSignalAndPromiseResponse, "handleAbortSignalAndPromiseResponse");

// node_modules/@whatwg-node/server/esm/uwebsockets.js
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
function isUWSResponse(res) {
  return !!res.onData;
}
__name(isUWSResponse, "isUWSResponse");
function getRequestFromUWSRequest({ req, res, fetchAPI, signal }) {
  let body;
  const method = req.getMethod();
  if (method !== "get" && method !== "head") {
    let controller;
    body = new fetchAPI.ReadableStream({
      start(c2) {
        controller = c2;
      }
    });
    const readable = body.readable;
    if (readable) {
      signal.addEventListener("abort", () => {
        readable.push(null);
      });
      res.onData(function(ab, isLast) {
        const chunk = Buffer.from(ab, 0, ab.byteLength);
        readable.push(Buffer.from(chunk));
        if (isLast) {
          readable.push(null);
        }
      });
    } else {
      let closed = false;
      signal.addEventListener("abort", () => {
        if (!closed) {
          closed = true;
          controller.close();
        }
      });
      res.onData(function(ab, isLast) {
        const chunk = Buffer.from(ab, 0, ab.byteLength);
        controller.enqueue(Buffer.from(chunk));
        if (isLast) {
          closed = true;
          controller.close();
        }
      });
    }
  }
  const headers = new fetchAPI.Headers();
  req.forEach((key, value) => {
    headers.append(key, value);
  });
  let url = `http://localhost${req.getUrl()}`;
  const query = req.getQuery();
  if (query) {
    url += `?${query}`;
  }
  return new fetchAPI.Request(url, {
    method,
    headers,
    body,
    signal,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - not in the TS types yet
    duplex: "half"
  });
}
__name(getRequestFromUWSRequest, "getRequestFromUWSRequest");
async function forwardResponseBodyToUWSResponse(uwsResponse, fetchResponse, signal) {
  for await (const chunk of fetchResponse.body) {
    if (signal.aborted) {
      return;
    }
    uwsResponse.cork(() => {
      uwsResponse.write(chunk);
    });
  }
  uwsResponse.cork(() => {
    uwsResponse.end();
  });
}
__name(forwardResponseBodyToUWSResponse, "forwardResponseBodyToUWSResponse");
function sendResponseToUwsOpts(uwsResponse, fetchResponse, signal) {
  if (!fetchResponse) {
    uwsResponse.writeStatus("404 Not Found");
    uwsResponse.end();
    return;
  }
  const bufferOfRes = fetchResponse._buffer;
  if (signal.aborted) {
    return;
  }
  uwsResponse.cork(() => {
    uwsResponse.writeStatus(`${fetchResponse.status} ${fetchResponse.statusText}`);
    for (const [key, value] of fetchResponse.headers) {
      if (key !== "content-length") {
        if (key === "set-cookie") {
          const setCookies = fetchResponse.headers.getSetCookie?.();
          if (setCookies) {
            for (const setCookie of setCookies) {
              uwsResponse.writeHeader(key, setCookie);
            }
            continue;
          }
        }
        uwsResponse.writeHeader(key, value);
      }
    }
    if (bufferOfRes) {
      uwsResponse.end(bufferOfRes);
    }
  });
  if (bufferOfRes) {
    return;
  }
  if (!fetchResponse.body) {
    uwsResponse.end();
    return;
  }
  return forwardResponseBodyToUWSResponse(uwsResponse, fetchResponse, signal);
}
__name(sendResponseToUwsOpts, "sendResponseToUwsOpts");

// node_modules/@whatwg-node/server/esm/createServerAdapter.js
async function handleWaitUntils(waitUntilPromises) {
  await Promise.allSettled(waitUntilPromises);
}
__name(handleWaitUntils, "handleWaitUntils");
function isRequestAccessible(serverContext) {
  try {
    return !!serverContext?.request;
  } catch {
    return false;
  }
}
__name(isRequestAccessible, "isRequestAccessible");
var EMPTY_OBJECT = {};
function createServerAdapter(serverAdapterBaseObject, options) {
  const fetchAPI = {
    ...DefaultFetchAPI,
    ...options?.fetchAPI
  };
  const givenHandleRequest = typeof serverAdapterBaseObject === "function" ? serverAdapterBaseObject : serverAdapterBaseObject.handle;
  const onRequestHooks = [];
  const onResponseHooks = [];
  if (options?.plugins != null) {
    for (const plugin of options.plugins) {
      if (plugin.onRequest) {
        onRequestHooks.push(plugin.onRequest);
      }
      if (plugin.onResponse) {
        onResponseHooks.push(plugin.onResponse);
      }
    }
  }
  const handleRequest = onRequestHooks.length > 0 || onResponseHooks.length > 0 ? /* @__PURE__ */ __name(function handleRequest2(request2, serverContext) {
    let requestHandler = givenHandleRequest;
    let response;
    if (onRequestHooks.length === 0) {
      return handleEarlyResponse();
    }
    let url = new Proxy(EMPTY_OBJECT, {
      get(_target, prop, _receiver) {
        url = new fetchAPI.URL(request2.url, "http://localhost");
        return Reflect.get(url, prop, url);
      }
    });
    const onRequestHooksIteration$ = iterateAsyncVoid(onRequestHooks, (onRequestHook, stopEarly) => onRequestHook({
      request: request2,
      setRequest(newRequest) {
        request2 = newRequest;
      },
      serverContext,
      fetchAPI,
      url,
      requestHandler,
      setRequestHandler(newRequestHandler) {
        requestHandler = newRequestHandler;
      },
      endResponse(newResponse) {
        response = newResponse;
        if (newResponse) {
          stopEarly();
        }
      }
    }));
    function handleResponse(response2) {
      if (onResponseHooks.length === 0) {
        return response2;
      }
      const onResponseHookPayload = {
        request: request2,
        response: response2,
        serverContext,
        setResponse(newResponse) {
          response2 = newResponse;
        },
        fetchAPI
      };
      const onResponseHooksIteration$ = iterateAsyncVoid(onResponseHooks, (onResponseHook) => onResponseHook(onResponseHookPayload));
      if (isPromise(onResponseHooksIteration$)) {
        return onResponseHooksIteration$.then(() => response2);
      }
      return response2;
    }
    __name(handleResponse, "handleResponse");
    function handleEarlyResponse() {
      if (!response) {
        const response$ = requestHandler(request2, serverContext);
        if (isPromise(response$)) {
          return response$.then(handleResponse);
        }
        return handleResponse(response$);
      }
      return handleResponse(response);
    }
    __name(handleEarlyResponse, "handleEarlyResponse");
    if (isPromise(onRequestHooksIteration$)) {
      return onRequestHooksIteration$.then(handleEarlyResponse);
    }
    return handleEarlyResponse();
  }, "handleRequest") : givenHandleRequest;
  function handleNodeRequest(nodeRequest, ...ctx) {
    const serverContext = ctx.length > 1 ? completeAssign(...ctx) : ctx[0] || {};
    const request2 = normalizeNodeRequest(nodeRequest, fetchAPI.Request);
    return handleRequest(request2, serverContext);
  }
  __name(handleNodeRequest, "handleNodeRequest");
  function handleNodeRequestAndResponse(nodeRequest, nodeResponseOrContainer, ...ctx) {
    const nodeResponse = nodeResponseOrContainer.raw || nodeResponseOrContainer;
    nodeRequestResponseMap.set(nodeRequest, nodeResponse);
    return handleNodeRequest(nodeRequest, ...ctx);
  }
  __name(handleNodeRequestAndResponse, "handleNodeRequestAndResponse");
  function requestListener(nodeRequest, nodeResponse, ...ctx) {
    const waitUntilPromises = [];
    const defaultServerContext = {
      req: nodeRequest,
      res: nodeResponse,
      waitUntil(cb) {
        waitUntilPromises.push(cb.catch((err2) => console.error(err2)));
      }
    };
    let response$;
    try {
      response$ = handleNodeRequestAndResponse(nodeRequest, nodeResponse, defaultServerContext, ...ctx);
    } catch (err2) {
      response$ = handleErrorFromRequestHandler(err2, fetchAPI.Response);
    }
    if (isPromise(response$)) {
      return response$.catch((e) => handleErrorFromRequestHandler(e, fetchAPI.Response)).then((response) => sendNodeResponse(response, nodeResponse, nodeRequest)).catch((err2) => {
        console.error(`Unexpected error while handling request: ${err2.message || err2}`);
      });
    }
    try {
      return sendNodeResponse(response$, nodeResponse, nodeRequest);
    } catch (err2) {
      console.error(`Unexpected error while handling request: ${err2.message || err2}`);
    }
  }
  __name(requestListener, "requestListener");
  function handleUWS(res, req, ...ctx) {
    const waitUntilPromises = [];
    const defaultServerContext = {
      res,
      req,
      waitUntil(cb) {
        waitUntilPromises.push(cb.catch((err2) => console.error(err2)));
      }
    };
    const filteredCtxParts = ctx.filter((partCtx) => partCtx != null);
    const serverContext = filteredCtxParts.length > 0 ? completeAssign(defaultServerContext, ...ctx) : defaultServerContext;
    const signal = new ServerAdapterRequestAbortSignal();
    const originalResEnd = res.end.bind(res);
    let resEnded = false;
    res.end = function(data) {
      resEnded = true;
      return originalResEnd(data);
    };
    const originalOnAborted = res.onAborted.bind(res);
    originalOnAborted(function() {
      signal.sendAbort();
    });
    res.onAborted = function(cb) {
      signal.addEventListener("abort", cb);
    };
    const request2 = getRequestFromUWSRequest({
      req,
      res,
      fetchAPI,
      signal
    });
    let response$;
    try {
      response$ = handleRequest(request2, serverContext);
    } catch (err2) {
      response$ = handleErrorFromRequestHandler(err2, fetchAPI.Response);
    }
    if (isPromise(response$)) {
      return response$.catch((e) => handleErrorFromRequestHandler(e, fetchAPI.Response)).then((response) => {
        if (!signal.aborted && !resEnded) {
          return sendResponseToUwsOpts(res, response, signal);
        }
      }).catch((err2) => {
        console.error(`Unexpected error while handling request: 
${err2.stack || err2.message || err2}`);
      });
    }
    try {
      if (!signal.aborted && !resEnded) {
        return sendResponseToUwsOpts(res, response$, signal);
      }
    } catch (err2) {
      console.error(`Unexpected error while handling request: 
${err2.stack || err2.message || err2}`);
    }
  }
  __name(handleUWS, "handleUWS");
  function handleEvent(event, ...ctx) {
    if (!event.respondWith || !event.request) {
      throw new TypeError(`Expected FetchEvent, got ${event}`);
    }
    const filteredCtxParts = ctx.filter((partCtx) => partCtx != null);
    const serverContext = filteredCtxParts.length > 0 ? completeAssign({}, event, ...filteredCtxParts) : isolateObject(event);
    const response$ = handleRequest(event.request, serverContext);
    event.respondWith(response$);
  }
  __name(handleEvent, "handleEvent");
  function handleRequestWithWaitUntil(request2, ...ctx) {
    const filteredCtxParts = ctx.filter((partCtx) => partCtx != null);
    let waitUntilPromises;
    const serverContext = filteredCtxParts.length > 1 ? completeAssign({}, ...filteredCtxParts) : isolateObject(filteredCtxParts[0], filteredCtxParts[0] == null || filteredCtxParts[0].waitUntil == null ? waitUntilPromises = [] : void 0);
    const response$ = handleRequest(request2, serverContext);
    if (waitUntilPromises?.length) {
      return handleWaitUntils(waitUntilPromises).then(() => response$);
    }
    return response$;
  }
  __name(handleRequestWithWaitUntil, "handleRequestWithWaitUntil");
  const fetchFn = /* @__PURE__ */ __name((input, ...maybeCtx) => {
    if (typeof input === "string" || "href" in input) {
      const [initOrCtx, ...restOfCtx] = maybeCtx;
      if (isRequestInit(initOrCtx)) {
        const request3 = new fetchAPI.Request(input, initOrCtx);
        const res$2 = handleRequestWithWaitUntil(request3, ...restOfCtx);
        return handleAbortSignalAndPromiseResponse(res$2, initOrCtx?.signal);
      }
      const request2 = new fetchAPI.Request(input);
      return handleRequestWithWaitUntil(request2, ...maybeCtx);
    }
    const res$ = handleRequestWithWaitUntil(input, ...maybeCtx);
    return handleAbortSignalAndPromiseResponse(res$, input._signal);
  }, "fetchFn");
  const genericRequestHandler = /* @__PURE__ */ __name((input, ...maybeCtx) => {
    const [initOrCtxOrRes, ...restOfCtx] = maybeCtx;
    if (isNodeRequest(input)) {
      if (!isServerResponse(initOrCtxOrRes)) {
        throw new TypeError(`Expected ServerResponse, got ${initOrCtxOrRes}`);
      }
      return requestListener(input, initOrCtxOrRes, ...restOfCtx);
    }
    if (isUWSResponse(input)) {
      return handleUWS(input, initOrCtxOrRes, ...restOfCtx);
    }
    if (isServerResponse(initOrCtxOrRes)) {
      throw new TypeError("Got Node response without Node request");
    }
    if (isRequestAccessible(input)) {
      if (isFetchEvent(input)) {
        return handleEvent(input, ...maybeCtx);
      }
      return handleRequestWithWaitUntil(input.request, input, ...maybeCtx);
    }
    return fetchFn(input, ...maybeCtx);
  }, "genericRequestHandler");
  const adapterObj = {
    handleRequest: handleRequestWithWaitUntil,
    fetch: fetchFn,
    handleNodeRequest,
    handleNodeRequestAndResponse,
    requestListener,
    handleEvent,
    handleUWS,
    handle: genericRequestHandler
  };
  const serverAdapter = new Proxy(genericRequestHandler, {
    // It should have all the attributes of the handler function and the server instance
    has: (_, prop) => {
      return prop in adapterObj || prop in genericRequestHandler || serverAdapterBaseObject && prop in serverAdapterBaseObject;
    },
    get: (_, prop) => {
      const adapterProp = adapterObj[prop];
      if (adapterProp) {
        if (adapterProp.bind) {
          return adapterProp.bind(adapterObj);
        }
        return adapterProp;
      }
      const handleProp = genericRequestHandler[prop];
      if (handleProp) {
        if (handleProp.bind) {
          return handleProp.bind(genericRequestHandler);
        }
        return handleProp;
      }
      if (serverAdapterBaseObject) {
        const serverAdapterBaseObjectProp = serverAdapterBaseObject[prop];
        if (serverAdapterBaseObjectProp) {
          if (serverAdapterBaseObjectProp.bind) {
            return function(...args) {
              const returnedVal = serverAdapterBaseObject[prop](...args);
              if (returnedVal === serverAdapterBaseObject) {
                return serverAdapter;
              }
              return returnedVal;
            };
          }
          return serverAdapterBaseObjectProp;
        }
      }
    },
    apply(_, __, args) {
      return genericRequestHandler(...args);
    }
  });
  return serverAdapter;
}
__name(createServerAdapter, "createServerAdapter");

// node_modules/itty-router/index.mjs
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var t = /* @__PURE__ */ __name(({ base: e = "", routes: t2 = [], ...r2 } = {}) => ({ __proto__: new Proxy({}, { get: (r3, o2, a2, s2) => (r4, ...c2) => t2.push([o2.toUpperCase?.(), RegExp(`^${(s2 = (e + r4).replace(/\/+(\/|$)/g, "$1")).replace(/(\/?\.?):(\w+)\+/g, "($1(?<$2>*))").replace(/(\/?\.?):(\w+)/g, "($1(?<$2>[^$1/]+?))").replace(/\./g, "\\.").replace(/(\/?)\*/g, "($1.*)?")}/*$`), c2, s2]) && a2 }), routes: t2, ...r2, async fetch(e2, ...o2) {
  let a2, s2, c2 = new URL(e2.url), n2 = e2.query = { __proto__: null };
  for (let [e3, t3] of c2.searchParams)
    n2[e3] = n2[e3] ? [].concat(n2[e3], t3) : t3;
  e:
    try {
      for (let t3 of r2.before || [])
        if (null != (a2 = await t3(e2.proxy ?? e2, ...o2)))
          break e;
      t:
        for (let [r3, n3, l, i] of t2)
          if ((r3 == e2.method || "ALL" == r3) && (s2 = c2.pathname.match(n3))) {
            e2.params = s2.groups || {}, e2.route = i;
            for (let t3 of l)
              if (null != (a2 = await t3(e2.proxy ?? e2, ...o2)))
                break t;
          }
    } catch (t3) {
      if (!r2.catch)
        throw t3;
      a2 = await r2.catch(t3, e2.proxy ?? e2, ...o2);
    }
  try {
    for (let t3 of r2.finally || [])
      a2 = await t3(a2, e2.proxy ?? e2, ...o2) ?? a2;
  } catch (t3) {
    if (!r2.catch)
      throw t3;
    a2 = await r2.catch(t3, e2.proxy ?? e2, ...o2);
  }
  return a2;
} }), "t");
var r = /* @__PURE__ */ __name((e = "text/plain; charset=utf-8", t2) => (r2, o2 = {}) => {
  if (void 0 === r2 || r2 instanceof Response)
    return r2;
  const a2 = new Response(t2?.(r2) ?? r2, o2.url ? void 0 : o2);
  return a2.headers.set("content-type", e), a2;
}, "r");
var o = r("application/json; charset=utf-8", JSON.stringify);
var a = /* @__PURE__ */ __name((e) => ({ 400: "Bad Request", 401: "Unauthorized", 403: "Forbidden", 404: "Not Found", 500: "Internal Server Error" })[e] || "Unknown Error", "a");
var s = /* @__PURE__ */ __name((e = 500, t2) => {
  if (e instanceof Error) {
    const { message: r2, ...o2 } = e;
    e = e.status || 500, t2 = { error: r2 || a(e), ...o2 };
  }
  return t2 = { status: e, ..."object" == typeof t2 ? t2 : { error: t2 || a(e) } }, o(t2, { status: e });
}, "s");
var c = /* @__PURE__ */ __name((e) => {
  e.proxy = new Proxy(e.proxy ?? e, { get: (t2, r2) => t2[r2]?.bind?.(e) ?? t2[r2] ?? t2?.params?.[r2] });
}, "c");
var n = /* @__PURE__ */ __name(({ format: e = o, missing: r2 = /* @__PURE__ */ __name(() => s(404), "r"), finally: a2 = [], before: n2 = [], ...l } = {}) => t({ before: [c, ...n2], catch: s, finally: [(e2, ...t2) => e2 ?? r2(...t2), e, ...a2], ...l }), "n");
var p = r("text/plain; charset=utf-8", String);
var f = r("text/html");
var u = r("image/jpeg");
var h = r("image/png");
var g = r("image/webp");
var y = /* @__PURE__ */ __name((e = {}) => {
  const { origin: t2 = "*", credentials: r2 = false, allowMethods: o2 = "*", allowHeaders: a2, exposeHeaders: s2, maxAge: c2 } = e, n2 = /* @__PURE__ */ __name((e2) => {
    const o3 = e2?.headers.get("origin");
    return true === t2 ? o3 : t2 instanceof RegExp ? t2.test(o3) ? o3 : void 0 : Array.isArray(t2) ? t2.includes(o3) ? o3 : void 0 : t2 instanceof Function ? t2(o3) : "*" == t2 && r2 ? o3 : t2;
  }, "n"), l = /* @__PURE__ */ __name((e2, t3) => {
    for (const [r3, o3] of Object.entries(t3))
      o3 && e2.headers.append(r3, o3);
    return e2;
  }, "l");
  return { corsify: (e2, t3) => e2?.headers?.get("access-control-allow-origin") || 101 == e2.status ? e2 : l(e2.clone(), { "access-control-allow-origin": n2(t3), "access-control-allow-credentials": r2 }), preflight: (e2) => {
    if ("OPTIONS" == e2.method) {
      const t3 = new Response(null, { status: 204 });
      return l(t3, { "access-control-allow-origin": n2(e2), "access-control-allow-methods": o2?.join?.(",") ?? o2, "access-control-expose-headers": s2?.join?.(",") ?? s2, "access-control-allow-headers": a2?.join?.(",") ?? a2 ?? e2.headers.get("access-control-request-headers"), "access-control-max-age": c2, "access-control-allow-credentials": r2 });
    }
  } };
}, "y");

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/http/index.mjs
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
init_utils();
init_proxy();

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/http/internal/consts.mjs
var consts_exports = {};
__export(consts_exports, {
  METHODS: () => METHODS,
  STATUS_CODES: () => STATUS_CODES,
  maxHeaderSize: () => maxHeaderSize
});
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var METHODS = [
  "ACL",
  "BIND",
  "CHECKOUT",
  "CONNECT",
  "COPY",
  "DELETE",
  "GET",
  "HEAD",
  "LINK",
  "LOCK",
  "M-SEARCH",
  "MERGE",
  "MKACTIVITY",
  "MKCALENDAR",
  "MKCOL",
  "MOVE",
  "NOTIFY",
  "OPTIONS",
  "PATCH",
  "POST",
  "PRI",
  "PROPFIND",
  "PROPPATCH",
  "PURGE",
  "PUT",
  "REBIND",
  "REPORT",
  "SEARCH",
  "SOURCE",
  "SUBSCRIBE",
  "TRACE",
  "UNBIND",
  "UNLINK",
  "UNLOCK",
  "UNSUBSCRIBE"
];
var STATUS_CODES = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a Teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Too Early",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  509: "Bandwidth Limit Exceeded",
  510: "Not Extended",
  511: "Network Authentication Required"
};
var maxHeaderSize = 16384;

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/http/internal/request.mjs
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/net/index.mjs
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
init_utils();

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/net/internal/socket.mjs
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/stream/internal/duplex.mjs
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
init_utils();

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/stream/internal/readable.mjs
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
init_utils();

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/events/index.mjs
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/events/internal/events.mjs
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/async_hooks/$cloudflare.mjs
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var workerdAsyncHooks = process.getBuiltinModule("node:async_hooks");
var { AsyncLocalStorage, AsyncResource } = workerdAsyncHooks;

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/events/internal/events.mjs
var defaultMaxListeners = 10;
var AsyncIteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(async function* () {
  }).prototype
);
var inspect = /* @__PURE__ */ __name((value, _opts) => value, "inspect");
var ERR_INVALID_THIS = Error;
var ERR_UNHANDLED_ERROR = Error;
var ERR_INVALID_ARG_TYPE = Error;
var AbortError = Error;
var genericNodeError = Error;
var kRejection = Symbol.for("nodejs.rejection");
var kCapture = Symbol.for("kCapture");
var kErrorMonitor = Symbol.for("events.errorMonitor");
var kShapeMode = Symbol.for("shapeMode");
var kMaxEventTargetListeners = Symbol.for("events.maxEventTargetListeners");
var kEnhanceStackBeforeInspector = Symbol.for("kEnhanceStackBeforeInspector");
var kWatermarkData = Symbol.for("nodejs.watermarkData");
var kEventEmitter = Symbol.for("kEventEmitter");
var kAsyncResource = Symbol.for("kAsyncResource");
var kFirstEventParam = Symbol.for("kFirstEventParam");
var kResistStopPropagation = Symbol.for("kResistStopPropagation");
var kMaxEventTargetListenersWarned = Symbol.for(
  "events.maxEventTargetListenersWarned"
);
var __EventEmitter = class {
  // Internal state
  _events = void 0;
  _eventsCount = 0;
  _maxListeners = defaultMaxListeners;
  [kCapture] = false;
  [kShapeMode] = false;
  // backwards compatibilit
  static get on() {
    return on2;
  }
  static get once() {
    return once2;
  }
  static get getEventListeners() {
    return getEventListeners;
  }
  static get getMaxListeners() {
    return getMaxListeners2;
  }
  static get addAbortListener() {
    return addAbortListener;
  }
  static get EventEmitterAsyncResource() {
    return EventEmitterAsyncResource;
  }
  static get EventEmitter() {
    return __EventEmitter;
  }
  static setMaxListeners(n2 = defaultMaxListeners, ...eventTargets) {
    if (eventTargets.length === 0) {
      defaultMaxListeners = n2;
    } else {
      for (const target of eventTargets) {
        if (isEventTarget(target)) {
          target[kMaxEventTargetListeners] = n2;
          target[kMaxEventTargetListenersWarned] = false;
        } else if (typeof target.setMaxListeners === "function") {
          target.setMaxListeners(n2);
        } else {
          throw new ERR_INVALID_ARG_TYPE(
            "eventTargets",
            ["EventEmitter", "EventTarget"],
            // @ts-expect-error
            target
          );
        }
      }
    }
  }
  static listenerCount(emitter, type2) {
    if (typeof emitter.listenerCount === "function") {
      return emitter.listenerCount(type2);
    }
    __EventEmitter.prototype.listenerCount.call(emitter, type2);
  }
  static init() {
    throw new Error("EventEmitter.init() is not implemented.");
  }
  static get captureRejections() {
    return this[kCapture];
  }
  static set captureRejections(value) {
    this[kCapture] = value;
  }
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    defaultMaxListeners = arg;
  }
  // Constructor
  constructor(opts) {
    if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
      this._events = { __proto__: null };
      this._eventsCount = 0;
      this[kShapeMode] = false;
    } else {
      this[kShapeMode] = true;
    }
    this._maxListeners = this._maxListeners || void 0;
    if (opts?.captureRejections) {
      this[kCapture] = Boolean(opts.captureRejections);
    } else {
      this[kCapture] = __EventEmitter.prototype[kCapture];
    }
  }
  /**
   * Increases the max listeners of the event emitter.
   * @param {number} n
   * @returns {EventEmitter}
   */
  setMaxListeners(n2) {
    this._maxListeners = n2;
    return this;
  }
  /**
   * Returns the current max listener value for the event emitter.
   * @returns {number}
   */
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  /**
   * Synchronously calls each of the listeners registered
   * for the event.
   * @param {...any} [args]
   * @returns {boolean}
   */
  emit(type2, ...args) {
    let doError = type2 === "error";
    const events = this._events;
    if (events !== void 0) {
      if (doError && events[kErrorMonitor] !== void 0)
        this.emit(kErrorMonitor, ...args);
      doError = doError && events.error === void 0;
    } else if (!doError)
      return false;
    if (doError) {
      let er;
      if (args.length > 0)
        er = args[0];
      if (er instanceof Error) {
        try {
          const capture = {};
          Error.captureStackTrace?.(capture, __EventEmitter.prototype.emit);
          Object.defineProperty(er, kEnhanceStackBeforeInspector, {
            // @ts-expect-error
            __proto__: null,
            value: Function.prototype.bind(
              enhanceStackTrace,
              this,
              er,
              capture
            ),
            configurable: true
          });
        } catch {
        }
        throw er;
      }
      let stringifiedEr;
      try {
        stringifiedEr = inspect(er);
      } catch {
        stringifiedEr = er;
      }
      const err2 = new ERR_UNHANDLED_ERROR(stringifiedEr);
      err2.context = er;
      throw err2;
    }
    const handler = events[type2];
    if (handler === void 0)
      return false;
    if (typeof handler === "function") {
      const result = handler.apply(this, args);
      if (result !== void 0 && result !== null) {
        addCatch(this, result, type2, args);
      }
    } else {
      const len = handler.length;
      const listeners2 = arrayClone(handler);
      for (let i = 0; i < len; ++i) {
        const result = listeners2[i].apply(this, args);
        if (result !== void 0 && result !== null) {
          addCatch(this, result, type2, args);
        }
      }
    }
    return true;
  }
  /**
   * Adds a listener to the event emitter.
   * @returns {EventEmitter}
   */
  addListener(type2, listener) {
    _addListener(this, type2, listener, false);
    return this;
  }
  on(type2, listener) {
    return this.addListener(type2, listener);
  }
  /**
   * Adds the `listener` function to the beginning of
   * the listeners array.
   */
  prependListener(type2, listener) {
    _addListener(this, type2, listener, true);
    return this;
  }
  /**
   * Adds a one-time `listener` function to the event emitter.
   */
  once(type2, listener) {
    checkListener(listener);
    this.on(type2, _onceWrap(this, type2, listener));
    return this;
  }
  /**
   * Adds a one-time `listener` function to the beginning of
   * the listeners array.
   */
  prependOnceListener(type2, listener) {
    checkListener(listener);
    this.prependListener(type2, _onceWrap(this, type2, listener));
    return this;
  }
  /**
   * Removes the specified `listener` from the listeners array.
   * @param {string | symbol} type
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  removeListener(type2, listener) {
    checkListener(listener);
    const events = this._events;
    if (events === void 0)
      return this;
    const list = events[type2];
    if (list === void 0)
      return this;
    if (list === listener || list.listener === listener) {
      this._eventsCount -= 1;
      if (this[kShapeMode]) {
        events[type2] = void 0;
      } else if (this._eventsCount === 0) {
        this._events = { __proto__: null };
      } else {
        delete events[type2];
        if (events.removeListener)
          this.emit("removeListener", type2, list.listener || listener);
      }
    } else if (typeof list !== "function") {
      let position = -1;
      for (let i = list.length - 1; i >= 0; i--) {
        if (list[i] === listener || list[i].listener === listener) {
          position = i;
          break;
        }
      }
      if (position < 0)
        return this;
      if (position === 0)
        list.shift();
      else {
        spliceOne(list, position);
      }
      if (list.length === 1)
        events[type2] = list[0];
      if (events.removeListener !== void 0)
        this.emit("removeListener", type2, listener);
    }
    return this;
  }
  off(type2, listener) {
    return this.removeListener(type2, listener);
  }
  /**
   * Removes all listeners from the event emitter. (Only
   * removes listeners for a specific event name if specified
   * as `type`).
   */
  removeAllListeners(type2) {
    const events = this._events;
    if (events === void 0)
      return this;
    if (events.removeListener === void 0) {
      if (arguments.length === 0) {
        this._events = { __proto__: null };
        this._eventsCount = 0;
      } else if (events[type2] !== void 0) {
        if (--this._eventsCount === 0)
          this._events = { __proto__: null };
        else
          delete events[type2];
      }
      this[kShapeMode] = false;
      return this;
    }
    if (arguments.length === 0) {
      for (const key of Reflect.ownKeys(events)) {
        if (key === "removeListener")
          continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners("removeListener");
      this._events = { __proto__: null };
      this._eventsCount = 0;
      this[kShapeMode] = false;
      return this;
    }
    const listeners2 = events[type2];
    if (typeof listeners2 === "function") {
      this.removeListener(type2, listeners2);
    } else if (listeners2 !== void 0) {
      for (let i = listeners2.length - 1; i >= 0; i--) {
        this.removeListener(type2, listeners2[i]);
      }
    }
    return this;
  }
  /**
   * Returns a copy of the array of listeners for the event name
   * specified as `type`.
   * @param {string | symbol} type
   * @returns {Function[]}
   */
  listeners(type2) {
    return _listeners(this, type2, true);
  }
  /**
   * Returns a copy of the array of listeners and wrappers for
   * the event name specified as `type`.
   * @returns {Function[]}
   */
  rawListeners(type2) {
    return _listeners(this, type2, false);
  }
  /**
   * Returns an array listing the events for which
   * the emitter has registered listeners.
   * @returns {any[]}
   */
  eventNames() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  }
  /**
   * Returns the number of listeners listening to event name
   */
  listenerCount(eventName, listener) {
    const events = this._events;
    if (events !== void 0) {
      const evlistener = events[eventName];
      if (typeof evlistener === "function") {
        if (listener != null) {
          return listener === evlistener || listener === evlistener.listener ? 1 : 0;
        }
        return 1;
      } else if (evlistener !== void 0) {
        if (listener != null) {
          let matching = 0;
          for (let i = 0, l = evlistener.length; i < l; i++) {
            if (evlistener[i] === listener || evlistener[i].listener === listener) {
              matching++;
            }
          }
          return matching;
        }
        return evlistener.length;
      }
    }
    return 0;
  }
};
var _EventEmitter = __EventEmitter;
__name(_EventEmitter, "_EventEmitter");
// Symbols
__publicField(_EventEmitter, "captureRejectionSymbol", kRejection);
__publicField(_EventEmitter, "errorMonitor", kErrorMonitor);
__publicField(_EventEmitter, "kMaxEventTargetListeners", kMaxEventTargetListeners);
__publicField(_EventEmitter, "kMaxEventTargetListenersWarned", kMaxEventTargetListenersWarned);
// Static utils
__publicField(_EventEmitter, "usingDomains", false);
var EventEmitterAsyncResource = class extends _EventEmitter {
  /**
   * @param {{
   *   name?: string,
   *   triggerAsyncId?: number,
   *   requireManualDestroy?: boolean,
   * }} [options]
   */
  constructor(options) {
    let name;
    if (typeof options === "string") {
      name = options;
      options = void 0;
    } else {
      name = options?.name || new.target.name;
    }
    super(options);
    this[kAsyncResource] = new EventEmitterReferencingAsyncResource(
      this,
      name,
      options
    );
  }
  /**
   * @param {symbol,string} event
   * @param  {...any} args
   * @returns {boolean}
   */
  emit(event, ...args) {
    if (this[kAsyncResource] === void 0)
      throw new ERR_INVALID_THIS("EventEmitterAsyncResource");
    const { asyncResource } = this;
    Array.prototype.unshift(args, super.emit, this, event);
    return Reflect.apply(
      asyncResource.runInAsyncScope,
      asyncResource,
      args
    );
  }
  /**
   * @returns {void}
   */
  emitDestroy() {
    if (this[kAsyncResource] === void 0)
      throw new ERR_INVALID_THIS("EventEmitterAsyncResource");
    this.asyncResource.emitDestroy();
  }
  /**
   * @type {number}
   */
  get asyncId() {
    if (this[kAsyncResource] === void 0)
      throw new ERR_INVALID_THIS("EventEmitterAsyncResource");
    return this.asyncResource.asyncId();
  }
  /**
   * @type {number}
   */
  get triggerAsyncId() {
    if (this[kAsyncResource] === void 0)
      throw new ERR_INVALID_THIS("EventEmitterAsyncResource");
    return this.asyncResource.triggerAsyncId();
  }
  /**
   * @type {EventEmitterReferencingAsyncResource}
   */
  get asyncResource() {
    if (this[kAsyncResource] === void 0)
      throw new ERR_INVALID_THIS("EventEmitterAsyncResource");
    return this[kAsyncResource];
  }
};
__name(EventEmitterAsyncResource, "EventEmitterAsyncResource");
var EventEmitterReferencingAsyncResource = class extends AsyncResource {
  /**
   * @param {EventEmitter} ee
   * @param {string} [type]
   * @param {{
   *   triggerAsyncId?: number,
   *   requireManualDestroy?: boolean,
   * }} [options]
   */
  constructor(ee, type2, options) {
    super(type2, options);
    this[kEventEmitter] = ee;
  }
  /**
   * @type {EventEmitter}
   */
  get eventEmitter() {
    if (this[kEventEmitter] === void 0)
      throw new ERR_INVALID_THIS("EventEmitterReferencingAsyncResource");
    return this[kEventEmitter];
  }
};
__name(EventEmitterReferencingAsyncResource, "EventEmitterReferencingAsyncResource");
var on2 = /* @__PURE__ */ __name(function on22(emitter, event, options = {}) {
  const signal = options.signal;
  if (signal?.aborted) {
    throw new AbortError(void 0, { cause: signal?.reason });
  }
  const highWatermark = options.highWaterMark ?? options.highWatermark ?? Number.MAX_SAFE_INTEGER;
  const lowWatermark = options.lowWaterMark ?? options.lowWatermark ?? 1;
  const unconsumedEvents = new FixedQueue();
  const unconsumedPromises = new FixedQueue();
  let paused = false;
  let error3 = null;
  let finished2 = false;
  let size = 0;
  const iterator = Object.setPrototypeOf(
    {
      next() {
        if (size) {
          const value = unconsumedEvents.shift();
          size--;
          if (paused && size < lowWatermark) {
            emitter.resume?.();
            paused = false;
          }
          return Promise.resolve(createIterResult(value, false));
        }
        if (error3) {
          const p2 = Promise.reject(error3);
          error3 = null;
          return p2;
        }
        if (finished2)
          return closeHandler();
        return new Promise(function(resolve, reject) {
          unconsumedPromises.push({ resolve, reject });
        });
      },
      return() {
        return closeHandler();
      },
      throw(err2) {
        if (!err2 || !(err2 instanceof Error)) {
          throw new ERR_INVALID_ARG_TYPE(
            "EventEmitter.AsyncIterator",
            "Error",
            // @ts-expect-error
            err2
          );
        }
        errorHandler(err2);
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      [kWatermarkData]: {
        /**
         * The current queue size
         */
        get size() {
          return size;
        },
        /**
         * The low watermark. The emitter is resumed every time size is lower than it
         */
        get low() {
          return lowWatermark;
        },
        /**
         * The high watermark. The emitter is paused every time size is higher than it
         */
        get high() {
          return highWatermark;
        },
        /**
         * It checks whether the emitter is paused by the watermark controller or not
         */
        get isPaused() {
          return paused;
        }
      }
    },
    AsyncIteratorPrototype
  );
  const { addEventListener: addEventListener2, removeAll } = listenersController();
  addEventListener2(
    emitter,
    event,
    options[kFirstEventParam] ? eventHandler : function(...args) {
      return eventHandler(args);
    }
  );
  if (event !== "error" && typeof emitter.on === "function") {
    addEventListener2(emitter, "error", errorHandler);
  }
  const closeEvents = options?.close;
  if (closeEvents?.length) {
    for (const closeEvent of closeEvents) {
      addEventListener2(emitter, closeEvent, closeHandler);
    }
  }
  const abortListenerDisposable = signal ? addAbortListener(signal, abortListener) : null;
  return iterator;
  function abortListener() {
    errorHandler(new AbortError(void 0, { cause: signal?.reason }));
  }
  __name(abortListener, "abortListener");
  function eventHandler(value) {
    if (unconsumedPromises.isEmpty()) {
      size++;
      if (!paused && size > highWatermark) {
        paused = true;
        emitter.pause?.();
      }
      unconsumedEvents.push(value);
    } else
      unconsumedPromises.shift().resolve(createIterResult(value, false));
  }
  __name(eventHandler, "eventHandler");
  function errorHandler(err2) {
    if (unconsumedPromises.isEmpty())
      error3 = err2;
    else
      unconsumedPromises.shift().reject(err2);
    closeHandler();
  }
  __name(errorHandler, "errorHandler");
  function closeHandler() {
    abortListenerDisposable?.[Symbol.dispose]();
    removeAll();
    finished2 = true;
    const doneResult = createIterResult(void 0, true);
    while (!unconsumedPromises.isEmpty()) {
      unconsumedPromises.shift().resolve(doneResult);
    }
    return Promise.resolve(doneResult);
  }
  __name(closeHandler, "closeHandler");
}, "on2");
var once2 = /* @__PURE__ */ __name(async function once22(emitter, name, options = {}) {
  const signal = options?.signal;
  if (signal?.aborted) {
    throw new AbortError(void 0, { cause: signal?.reason });
  }
  return new Promise((resolve, reject) => {
    const errorListener = /* @__PURE__ */ __name((err2) => {
      if (typeof emitter.removeListener === "function") {
        emitter.removeListener(name, resolver);
      }
      if (signal != null) {
        eventTargetAgnosticRemoveListener(signal, "abort", abortListener);
      }
      reject(err2);
    }, "errorListener");
    const resolver = /* @__PURE__ */ __name((...args) => {
      if (typeof emitter.removeListener === "function") {
        emitter.removeListener("error", errorListener);
      }
      if (signal != null) {
        eventTargetAgnosticRemoveListener(signal, "abort", abortListener);
      }
      resolve(args);
    }, "resolver");
    const opts = {
      __proto__: null,
      once: true,
      [kResistStopPropagation]: true
    };
    eventTargetAgnosticAddListener(emitter, name, resolver, opts);
    if (name !== "error" && typeof emitter.once === "function") {
      emitter.once("error", errorListener);
    }
    function abortListener() {
      eventTargetAgnosticRemoveListener(emitter, name, resolver);
      eventTargetAgnosticRemoveListener(emitter, "error", errorListener);
      reject(new AbortError(void 0, { cause: signal?.reason }));
    }
    __name(abortListener, "abortListener");
    if (signal != null) {
      eventTargetAgnosticAddListener(signal, "abort", abortListener, {
        __proto__: null,
        once: true,
        [kResistStopPropagation]: true
      });
    }
  });
}, "once2");
var addAbortListener = /* @__PURE__ */ __name(function addAbortListener2(signal, listener) {
  if (signal === void 0) {
    throw new ERR_INVALID_ARG_TYPE("signal", "AbortSignal", signal);
  }
  let removeEventListener;
  if (signal.aborted) {
    queueMicrotask(() => listener());
  } else {
    signal.addEventListener("abort", listener, {
      // @ts-expect-error
      __proto__: null,
      once: true,
      [kResistStopPropagation]: true
    });
    removeEventListener = /* @__PURE__ */ __name(() => {
      signal.removeEventListener("abort", listener);
    }, "removeEventListener");
  }
  return {
    __proto__: null,
    [Symbol.dispose]() {
      removeEventListener?.();
    }
  };
}, "addAbortListener2");
var getEventListeners = /* @__PURE__ */ __name(function getEventListeners2(emitterOrTarget, type2) {
  if (typeof emitterOrTarget.listeners === "function") {
    return emitterOrTarget.listeners(type2);
  }
  if (isEventTarget(emitterOrTarget)) {
    const root = emitterOrTarget[kEvents].get(type2);
    const listeners2 = [];
    let handler = root?.next;
    while (handler?.listener !== void 0) {
      const listener = handler.listener?.deref ? handler.listener.deref() : handler.listener;
      listeners2.push(listener);
      handler = handler.next;
    }
    return listeners2;
  }
  throw new ERR_INVALID_ARG_TYPE(
    "emitter",
    ["EventEmitter", "EventTarget"],
    // @ts-expect-error
    emitterOrTarget
  );
}, "getEventListeners2");
var getMaxListeners2 = /* @__PURE__ */ __name(function getMaxListeners22(emitterOrTarget) {
  if (typeof emitterOrTarget?.getMaxListeners === "function") {
    return _getMaxListeners(emitterOrTarget);
  } else if (emitterOrTarget?.[kMaxEventTargetListeners]) {
    return emitterOrTarget[kMaxEventTargetListeners];
  }
  throw new ERR_INVALID_ARG_TYPE(
    "emitter",
    ["EventEmitter", "EventTarget"],
    // @ts-expect-error
    emitterOrTarget
  );
}, "getMaxListeners2");
var kSize = 2048;
var kMask = kSize - 1;
var FixedCircularBuffer = class {
  bottom;
  top;
  list;
  next;
  constructor() {
    this.bottom = 0;
    this.top = 0;
    this.list = new Array(kSize);
    this.next = null;
  }
  isEmpty() {
    return this.top === this.bottom;
  }
  isFull() {
    return (this.top + 1 & kMask) === this.bottom;
  }
  push(data) {
    this.list[this.top] = data;
    this.top = this.top + 1 & kMask;
  }
  shift() {
    const nextItem = this.list[this.bottom];
    if (nextItem === void 0)
      return null;
    this.list[this.bottom] = void 0;
    this.bottom = this.bottom + 1 & kMask;
    return nextItem;
  }
};
__name(FixedCircularBuffer, "FixedCircularBuffer");
var FixedQueue = class {
  head;
  tail;
  constructor() {
    this.head = this.tail = new FixedCircularBuffer();
  }
  isEmpty() {
    return this.head.isEmpty();
  }
  push(data) {
    if (this.head.isFull()) {
      this.head = this.head.next = new FixedCircularBuffer();
    }
    this.head.push(data);
  }
  shift() {
    const tail = this.tail;
    const next = tail.shift();
    if (tail.isEmpty() && tail.next !== null) {
      this.tail = tail.next;
      tail.next = null;
    }
    return next;
  }
};
__name(FixedQueue, "FixedQueue");
function isEventTarget(emitter) {
  return typeof emitter?.addEventListener === "function";
}
__name(isEventTarget, "isEventTarget");
function checkListener(listener) {
}
__name(checkListener, "checkListener");
function addCatch(that, promise, type2, args) {
  if (!that[kCapture]) {
    return;
  }
  try {
    const then = promise.then;
    if (typeof then === "function") {
      then.call(promise, void 0, function(err2) {
        process.nextTick(emitUnhandledRejectionOrErr, that, err2, type2, args);
      });
    }
  } catch (error_) {
    that.emit("error", error_);
  }
}
__name(addCatch, "addCatch");
function emitUnhandledRejectionOrErr(ee, err2, type2, args) {
  if (typeof ee[kRejection] === "function") {
    ee[kRejection](err2, type2, ...args);
  } else {
    const prev = ee[kCapture];
    try {
      ee[kCapture] = false;
      ee.emit("error", err2);
    } finally {
      ee[kCapture] = prev;
    }
  }
}
__name(emitUnhandledRejectionOrErr, "emitUnhandledRejectionOrErr");
function _getMaxListeners(that) {
  if (that._maxListeners === void 0)
    return defaultMaxListeners;
  return that._maxListeners;
}
__name(_getMaxListeners, "_getMaxListeners");
function enhanceStackTrace(err2, own) {
  let ctorInfo = "";
  try {
    const { name } = this.constructor;
    if (name !== "EventEmitter")
      ctorInfo = ` on ${name} instance`;
  } catch {
  }
  const sep = `
Emitted 'error' event${ctorInfo} at:
`;
  const ownStack = (own.stack || "").split("\n").slice(1);
  return err2.stack + sep + ownStack.join("\n");
}
__name(enhanceStackTrace, "enhanceStackTrace");
function _addListener(target, type2, listener, prepend) {
  let m;
  let events;
  let existing;
  checkListener(listener);
  events = target._events;
  if (events === void 0) {
    events = target._events = { __proto__: null };
    target._eventsCount = 0;
  } else {
    if (events.newListener !== void 0) {
      target.emit("newListener", type2, listener.listener ?? listener);
      events = target._events;
    }
    existing = events[type2];
  }
  if (existing === void 0) {
    events[type2] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === "function") {
      existing = events[type2] = prepend ? [listener, existing] : [existing, listener];
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      const w = new genericNodeError(
        `Possible EventEmitter memory leak detected. ${existing.length} ${String(type2)} listeners added to ${inspect(target, { depth: -1 })}. MaxListeners is ${m}. Use emitter.setMaxListeners() to increase limit`,
        {
          // @ts-expect-error
          name: "MaxListenersExceededWarning",
          emitter: target,
          type: type2,
          count: existing.length
        }
      );
      process.emitWarning(w);
    }
  }
  return target;
}
__name(_addListener, "_addListener");
function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}
__name(onceWrapper, "onceWrapper");
function _onceWrap(target, type2, listener) {
  const state = { fired: false, wrapFn: void 0, target, type: type2, listener };
  const wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}
__name(_onceWrap, "_onceWrap");
function _listeners(target, type2, unwrap) {
  const events = target._events;
  if (events === void 0)
    return [];
  const evlistener = events[type2];
  if (evlistener === void 0)
    return [];
  if (typeof evlistener === "function")
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener);
}
__name(_listeners, "_listeners");
function arrayClone(arr) {
  switch (arr.length) {
    case 2:
      return [arr[0], arr[1]];
    case 3:
      return [arr[0], arr[1], arr[2]];
    case 4:
      return [arr[0], arr[1], arr[2], arr[3]];
    case 5:
      return [arr[0], arr[1], arr[2], arr[3], arr[4]];
    case 6:
      return [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]];
  }
  return Array.prototype.slice(arr);
}
__name(arrayClone, "arrayClone");
function unwrapListeners(arr) {
  const ret = arrayClone(arr);
  for (let i = 0; i < ret.length; ++i) {
    const orig = ret[i].listener;
    if (typeof orig === "function")
      ret[i] = orig;
  }
  return ret;
}
__name(unwrapListeners, "unwrapListeners");
function createIterResult(value, done) {
  return { value, done };
}
__name(createIterResult, "createIterResult");
function eventTargetAgnosticRemoveListener(emitter, name, listener, flags) {
  if (typeof emitter.removeListener === "function") {
    emitter.removeListener(name, listener);
  } else if (typeof emitter.removeEventListener === "function") {
    emitter.removeEventListener(
      name,
      listener,
      flags
    );
  } else {
    throw new ERR_INVALID_ARG_TYPE("emitter", "EventEmitter", emitter);
  }
}
__name(eventTargetAgnosticRemoveListener, "eventTargetAgnosticRemoveListener");
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === "function") {
    if (flags?.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === "function") {
    emitter.addEventListener(name, listener, flags);
  } else {
    throw new ERR_INVALID_ARG_TYPE("emitter", "EventEmitter", emitter);
  }
}
__name(eventTargetAgnosticAddListener, "eventTargetAgnosticAddListener");
function listenersController() {
  const listeners2 = [];
  return {
    addEventListener(emitter, event, handler, flags) {
      eventTargetAgnosticAddListener(emitter, event, handler, flags);
      Array.prototype.push(listeners2, [emitter, event, handler, flags]);
    },
    removeAll() {
      while (listeners2.length > 0) {
        Reflect.apply(
          eventTargetAgnosticRemoveListener,
          void 0,
          listeners2.pop()
        );
      }
    }
  };
}
__name(listenersController, "listenersController");
function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}
__name(spliceOne, "spliceOne");

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/events/index.mjs
var usingDomains = _EventEmitter.usingDomains;
var captureRejectionSymbol = _EventEmitter.captureRejectionSymbol;
var errorMonitor = _EventEmitter.errorMonitor;
var defaultMaxListeners2 = _EventEmitter.defaultMaxListeners;
var setMaxListeners2 = _EventEmitter.setMaxListeners;
var listenerCount2 = _EventEmitter.listenerCount;
var init = _EventEmitter.init;

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/stream/internal/readable.mjs
var _Readable = class extends _EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error3) {
    this.destroyed = true;
    this._destroy(error3);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  // eslint-disable-next-line require-yield
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn2, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn2, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn2, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn2, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn2, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn2, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn2, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn2, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn2, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
};
__name(_Readable, "_Readable");
var Readable = globalThis.Readable || _Readable;

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/stream/internal/writable.mjs
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
var _Writable = class extends _EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a2 = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a2, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
};
__name(_Writable, "_Writable");
var Writable2 = globalThis.Writable || _Writable;

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/stream/internal/duplex.mjs
var __Duplex = /* @__PURE__ */ __name(class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable2()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
}, "__Duplex");
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable2.prototype);
  return __Duplex;
}
__name(getDuplex, "getDuplex");
var _Duplex = /* @__PURE__ */ getDuplex();
var Duplex = globalThis.Duplex || _Duplex;

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/net/internal/socket.mjs
var Socket = class extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  autoSelectFamilyAttemptedAddresses = [];
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  destroySoon() {
    this.destroy();
  }
  resetAndDestroy() {
    const err2 = new Error("ERR_SOCKET_CLOSED");
    err2.code = "ERR_SOCKET_CLOSED";
    this.destroy(err2);
    return this;
  }
};
__name(Socket, "Socket");

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/net/index.mjs
var createServer = notImplemented(
  "net.createServer"
);
var BlockList = notImplementedClass(
  "net.BlockList"
);
var connect = notImplemented("net.connect");
var createConnection = notImplemented(
  "net.createConnection"
);
var getDefaultAutoSelectFamily = notImplemented(
  "net.getDefaultAutoSelectFamily"
);
var setDefaultAutoSelectFamily = notImplemented(
  "net.setDefaultAutoSelectFamily"
);
var getDefaultAutoSelectFamilyAttemptTimeout = notImplemented(
  "net.getDefaultAutoSelectFamilyAttemptTimeout"
);
var setDefaultAutoSelectFamilyAttemptTimeout = notImplemented(
  "net.setDefaultAutoSelectFamilyAttemptTimeout"
);
var _createServerHandle = notImplemented("net._createServerHandle");
var _normalizeArgs = notImplemented("net._normalizeArgs");
var _setSimultaneousAccepts = notImplemented(
  "net._setSimultaneousAccepts"
);

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/http/internal/request.mjs
init_utils();
var IncomingMessage = class extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
};
__name(IncomingMessage, "IncomingMessage");
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}
__name(_distinct, "_distinct");

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/http/internal/response.mjs
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/stream/index.mjs
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
init_proxy();
init_utils();
var Stream = proxy_default.__createMock__("Stream");
var PassThrough = proxy_default.__createMock__("PassThrough");
var pipeline = notImplemented(
  "stream.pipeline"
);
var finished = notImplemented(
  "stream.finished"
);
var addAbortSignal = notImplemented(
  "stream.addAbortSignal"
);
var isDisturbed = notImplemented("stream.isDisturbed");
var isReadable2 = notImplemented("stream.isReadable");
var compose = notImplemented("stream.compose");
var isErrored = notImplemented("stream.isErrored");
var destroy = notImplemented("stream.destroy");
var _isUint8Array = notImplemented("stream._isUint8Array");
var _uint8ArrayToBuffer = notImplemented("stream._uint8ArrayToBuffer");

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/http/internal/response.mjs
var ServerResponse = class extends Writable2 {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) {
      } else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
};
__name(ServerResponse, "ServerResponse");

// D:/Applications/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/http/index.mjs
var createServer2 = notImplemented("http.createServer");
var request = notImplemented("http.request");
var get = notImplemented("http.get");
var Server = proxy_default.__createMock__("http.Server");
var OutgoingMessage = proxy_default.__createMock__(
  "http.OutgoingMessage"
);
var ClientRequest = proxy_default.__createMock__("http.ClientRequest");
var Agent = proxy_default.__createMock__("http.Agent");
var globalAgent = new Agent();
var validateHeaderName = notImplemented("http.validateHeaderName");
var validateHeaderValue = notImplemented("http.validateHeaderValue");
var setMaxIdleHTTPParsers = notImplemented("http.setMaxIdleHTTPParsers");
var _connectionListener = notImplemented("http._connectionListener");
var WebSocket = globalThis.WebSocket || notImplementedClass("WebSocket");
var CloseEvent = globalThis.CloseEvent || notImplementedClass("CloseEvent");
var MessageEvent = globalThis.MessageEvent || notImplementedClass("MessageEvent");
var http_default = {
  ...consts_exports,
  IncomingMessage,
  ServerResponse,
  WebSocket,
  CloseEvent,
  MessageEvent,
  createServer: createServer2,
  request,
  get,
  Server,
  OutgoingMessage,
  ClientRequest,
  Agent,
  globalAgent,
  validateHeaderName,
  validateHeaderValue,
  setMaxIdleHTTPParsers,
  _connectionListener
};

// api/index.js
var import_dotenv = __toESM(require_main(), 1);
import_dotenv.default.config();
var Config = class {
  constructor() {
    this.PORT = process.env.PORT || 8787;
    this.API_PREFIX = process.env.API_PREFIX || "/";
    this.API_KEY = process.env.API_KEY || "";
    this.MAX_RETRY_COUNT = process.env.MAX_RETRY_COUNT || 3;
    this.RETRY_DELAY = process.env.RETRY_DELAY || 5e3;
    this.FAKE_HEADERS = process.env.FAKE_HEADERS || {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br, zstd",
      "Accept-Language": "zh-CN,zh;q=0.9",
      Origin: "https://duckduckgo.com/",
      Cookie: "dcm=3",
      Dnt: "1",
      Priority: "u=1, i",
      Referer: "https://duckduckgo.com/",
      "Sec-Ch-Ua": '"Chromium";v="130", "Microsoft Edge";v="130", "Not?A_Brand";v="99"',
      "Sec-Ch-Ua-Mobile": "?0",
      "Sec-Ch-Ua-Platform": '"Windows"',
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0"
    };
  }
};
__name(Config, "Config");
var config2 = new Config();
var { preflight, corsify } = y({
  origin: "*",
  allowMethods: "*",
  exposeHeaders: "*"
});
var withBenchmarking = /* @__PURE__ */ __name((request2) => {
  request2.start = Date.now();
}, "withBenchmarking");
var withAuth = /* @__PURE__ */ __name((request2) => {
  if (config2.API_KEY) {
    const authHeader = request2.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return s(401, "Unauthorized: Missing or invalid Authorization header");
    }
    const token = authHeader.substring(7);
    if (token !== config2.API_KEY) {
      return s(403, "Forbidden: Invalid API key");
    }
  }
}, "withAuth");
var logger = /* @__PURE__ */ __name((res, req) => {
  console.log(req.method, res.status, req.url, Date.now() - req.start, "ms");
}, "logger");
var router = n({
  before: [withBenchmarking, preflight, withAuth],
  missing: () => s(404, "404 Not Found. Please check whether the calling URL is correct."),
  finally: [corsify, logger]
});
router.get("/", () => o({ message: "API \u670D\u52A1\u8FD0\u884C\u4E2D~" }));
router.get("/ping", () => o({ message: "pong" }));
router.get(
  config2.API_PREFIX + "/v1/models",
  () => o({
    object: "list",
    data: [
      { id: "gpt-4o-mini", object: "model", owned_by: "ddg" },
      { id: "claude-3-haiku", object: "model", owned_by: "ddg" },
      { id: "llama-3.1-70b", object: "model", owned_by: "ddg" },
      { id: "mixtral-8x7b", object: "model", owned_by: "ddg" }
    ]
  })
);
router.post(config2.API_PREFIX + "/v1/chat/completions", (req) => handleCompletion(req));
async function handleCompletion(request2) {
  try {
    const { model: inputModel, messages, stream: returnStream } = await request2.json();
    const model = convertModel(inputModel);
    const content = messagesPrepare(messages);
    return createCompletion(model, content, returnStream);
  } catch (err2) {
    return s(500, err2.message);
  }
}
__name(handleCompletion, "handleCompletion");
async function createCompletion(model, content, returnStream, retryCount = 0) {
  const token = await requestToken();
  try {
    const response = await fetch(`https://duckduckgo.com/duckchat/v1/chat`, {
      method: "POST",
      headers: {
        ...config2.FAKE_HEADERS,
        Accept: "text/event-stream",
        "Content-Type": "application/json",
        "x-vqd-4": token
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "user",
            content
          }
        ]
      })
    });
    if (!response.ok) {
      throw new Error(`Create Completion error! status: ${response.status}`);
    }
    return handlerStream(model, response.body, returnStream);
  } catch (err2) {
    console.log(err2);
    if (retryCount < config2.MAX_RETRY_COUNT) {
      console.log("Retrying... count", ++retryCount);
      await new Promise((resolve) => setTimeout(resolve, config2.RETRY_DELAY));
      return await createCompletion(model, content, returnStream, retryCount);
    }
    throw err2;
  }
}
__name(createCompletion, "createCompletion");
async function handlerStream(model, rb, returnStream) {
  let bwzChunk = "";
  let previousText = "";
  const handChunkData = /* @__PURE__ */ __name((chunk) => {
    chunk = chunk.trim();
    if (bwzChunk != "") {
      chunk = bwzChunk + chunk;
      bwzChunk = "";
    }
    if (chunk.includes("[DONE]")) {
      return chunk;
    }
    if (chunk.slice(-2) !== '"}') {
      bwzChunk = chunk;
    }
    return chunk;
  }, "handChunkData");
  const reader = rb.getReader();
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          return controller.close();
        }
        const chunkStr = handChunkData(decoder.decode(value));
        if (bwzChunk !== "") {
          continue;
        }
        chunkStr.split("\n").forEach((line) => {
          if (line.length < 6) {
            return;
          }
          line = line.slice(6);
          if (line !== "[DONE]") {
            const originReq = JSON.parse(line);
            if (originReq.action !== "success") {
              return controller.error(new Error("Error: originReq stream chunk is not success"));
            }
            if (originReq.message) {
              previousText += originReq.message;
              if (returnStream) {
                controller.enqueue(
                  encoder.encode(`data: ${JSON.stringify(newChatCompletionChunkWithModel(originReq.message, originReq.model))}

`)
                );
              }
            }
          } else {
            if (returnStream) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify(newStopChunkWithModel("stop", model))}

`));
            } else {
              controller.enqueue(encoder.encode(JSON.stringify(newChatCompletionWithModel(previousText, model))));
            }
            return controller.close();
          }
        });
        continue;
      }
    }
  });
  return new Response(stream, {
    headers: {
      "Content-Type": returnStream ? "text/event-stream" : "application/json"
    }
  });
}
__name(handlerStream, "handlerStream");
function messagesPrepare(messages) {
  let content = "";
  for (const message of messages) {
    let role = message.role === "system" ? "user" : message.role;
    if (["user", "assistant"].includes(role)) {
      const contentStr = Array.isArray(message.content) ? message.content.filter((item) => item.text).map((item) => item.text).join("") || "" : message.content;
      content += `${role}:${contentStr};\r
`;
    }
  }
  return content;
}
__name(messagesPrepare, "messagesPrepare");
async function requestToken() {
  try {
    const response = await fetch(`https://duckduckgo.com/duckchat/v1/status`, {
      method: "GET",
      headers: {
        ...config2.FAKE_HEADERS,
        "x-vqd-accept": "1"
      }
    });
    const token = response.headers.get("x-vqd-4");
    return token;
  } catch (error3) {
    console.log("Request token error: ", err);
  }
}
__name(requestToken, "requestToken");
function convertModel(inputModel) {
  let model;
  switch (inputModel.toLowerCase()) {
    case "claude-3-haiku":
      model = "claude-3-haiku-20240307";
      break;
    case "llama-3.1-70b":
      model = "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo";
      break;
    case "mixtral-8x7b":
      model = "mistralai/Mixtral-8x7B-Instruct-v0.1";
      break;
  }
  return model || "gpt-4o-mini";
}
__name(convertModel, "convertModel");
function newChatCompletionChunkWithModel(text, model) {
  return {
    id: "chatcmpl-QXlha2FBbmROaXhpZUFyZUF3ZXNvbWUK",
    object: "chat.completion.chunk",
    created: 0,
    model,
    choices: [
      {
        index: 0,
        delta: {
          content: text
        },
        finish_reason: null
      }
    ]
  };
}
__name(newChatCompletionChunkWithModel, "newChatCompletionChunkWithModel");
function newStopChunkWithModel(reason, model) {
  return {
    id: "chatcmpl-QXlha2FBbmROaXhpZUFyZUF3ZXNvbWUK",
    object: "chat.completion.chunk",
    created: 0,
    model,
    choices: [
      {
        index: 0,
        finish_reason: reason
      }
    ]
  };
}
__name(newStopChunkWithModel, "newStopChunkWithModel");
function newChatCompletionWithModel(text, model) {
  return {
    id: "chatcmpl-QXlha2FBbmROaXhpZUFyZUF3ZXNvbWUK",
    object: "chat.completion",
    created: 0,
    model,
    usage: {
      prompt_tokens: 0,
      completion_tokens: 0,
      total_tokens: 0
    },
    choices: [
      {
        message: {
          content: text,
          role: "assistant"
        },
        index: 0
      }
    ]
  };
}
__name(newChatCompletionWithModel, "newChatCompletionWithModel");
(async () => {
  if (typeof addEventListener === "function")
    return;
  const ittyServer = createServerAdapter(router.fetch);
  console.log(`Listening on http://localhost:${config2.PORT}`);
  const httpServer = createServer2(ittyServer);
  httpServer.listen(config2.PORT);
})();
var api_default = router;
export {
  api_default as default
};
//# sourceMappingURL=index.js.map
