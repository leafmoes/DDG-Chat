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
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/_virtual_unenv_global_polyfill-clear$immediate.js
globalThis.clearImmediate = clearImmediateFallback;

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/_internal/utils.mjs
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError, "createNotImplementedError");
function notImplemented(name) {
  const fn2 = /* @__PURE__ */ __name(() => {
    throw createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn2, { __unenv__: true });
}
__name(notImplemented, "notImplemented");

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/mock/noop.mjs
var noop_default = Object.assign(() => {
}, { __unenv__: true });

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/timers/internal/immediate.mjs
var Immediate = class {
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

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/timers/internal/set-immediate.mjs
function setImmediateFallbackPromises(value) {
  return new Promise((res) => {
    res(value);
  });
}
__name(setImmediateFallbackPromises, "setImmediateFallbackPromises");
function setImmediateFallback(callback, ...args) {
  return new Immediate(callback, args);
}
__name(setImmediateFallback, "setImmediateFallback");
setImmediateFallback.__promisify__ = setImmediateFallbackPromises;
function clearImmediateFallback(immediate) {
  immediate?.[Symbol.dispose]();
}
__name(clearImmediateFallback, "clearImmediateFallback");

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/_virtual_unenv_global_polyfill-set$immediate.js
globalThis.setImmediate = setImmediateFallback;

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/console/index.mjs
import { Writable } from "node:stream";

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/mock/proxy.mjs
var fn = /* @__PURE__ */ __name(function() {
}, "fn");
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
__name(createMock, "createMock");
var proxy_default = createMock("mock");

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/console/index.mjs
var _console = globalThis.console;
var _ignoreErrors = true;
var _stderr = new Writable();
var _stdout = new Writable();
var log = _console?.log ?? noop_default;
var info = _console?.info ?? log;
var trace = _console?.trace ?? info;
var debug = _console?.debug ?? log;
var table = _console?.table ?? log;
var error = _console?.error ?? log;
var warn = _console?.warn ?? error;
var createTask = _console?.createTask ?? notImplemented("console.createTask");
var assert = notImplemented("console.assert");
var clear = _console?.clear ?? noop_default;
var count = _console?.count ?? noop_default;
var countReset = _console?.countReset ?? noop_default;
var dir = _console?.dir ?? noop_default;
var dirxml = _console?.dirxml ?? noop_default;
var group = _console?.group ?? noop_default;
var groupEnd = _console?.groupEnd ?? noop_default;
var groupCollapsed = _console?.groupCollapsed ?? noop_default;
var profile = _console?.profile ?? noop_default;
var profileEnd = _console?.profileEnd ?? noop_default;
var time = _console?.time ?? noop_default;
var timeEnd = _console?.timeEnd ?? noop_default;
var timeLog = _console?.timeLog ?? noop_default;
var timeStamp = _console?.timeStamp ?? noop_default;
var Console = _console?.Console ?? proxy_default.__createMock__("console.Console");

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/console/$cloudflare.mjs
var workerdConsole = globalThis["console"];
var {
  assert: assert2,
  clear: clear2,
  // @ts-expect-error undocumented public API
  context,
  count: count2,
  countReset: countReset2,
  // @ts-expect-error undocumented public API
  createTask: createTask2,
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
} = workerdConsole;
Object.assign(workerdConsole, {
  Console,
  _ignoreErrors,
  _stderr,
  _stderrErrorHandler: noop_default,
  _stdout,
  _stdoutErrorHandler: noop_default,
  _times: proxy_default
});
var cloudflare_default = workerdConsole;

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/_virtual_unenv_global_polyfill-console.js
globalThis.console = cloudflare_default;

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/web/performance/_entry.mjs
var _supportedEntryTypes = [
  "event",
  // PerformanceEntry
  "mark",
  // PerformanceMark
  "measure",
  // PerformanceMeasure
  "resource"
  // PerformanceResourceTiming
];
var _PerformanceEntry = class {
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
var PerformanceEntry = globalThis.PerformanceEntry || _PerformanceEntry;
var _PerformanceMark = class extends _PerformanceEntry {
  entryType = "mark";
};
__name(_PerformanceMark, "_PerformanceMark");
var PerformanceMark = globalThis.PerformanceMark || _PerformanceMark;
var _PerformanceMeasure = class extends _PerformanceEntry {
  entryType = "measure";
};
__name(_PerformanceMeasure, "_PerformanceMeasure");
var PerformanceMeasure = globalThis.PerformanceMeasure || _PerformanceMeasure;
var _PerformanceResourceTiming = class extends _PerformanceEntry {
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
var PerformanceResourceTiming = globalThis.PerformanceResourceTiming || _PerformanceResourceTiming;

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/web/performance/_performance.mjs
var _timeOrigin = Date.now();
var _Performance = class {
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
  getEntriesByName(name, type) {
    return this._entries.filter(
      (e) => e.name === name && (!type || e.entryType === type)
    );
  }
  getEntriesByType(type) {
    return this._entries.filter(
      (e) => e.entryType === type
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
  addEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw createNotImplementedError("Performance.dispatchEvent");
  }
};
__name(_Performance, "_Performance");
var Performance = globalThis.Performance || _Performance;
var performance2 = globalThis.performance || new Performance();

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/web/performance/_observer.mjs
var _PerformanceObserver = class {
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
var PerformanceObserver = globalThis.PerformanceObserver || _PerformanceObserver;
var _PerformanceObserverEntryList = class {
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
__name(_PerformanceObserverEntryList, "_PerformanceObserverEntryList");
var PerformanceObserverEntryList = globalThis.PerformanceObserverEntryList || _PerformanceObserverEntryList;

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/polyfill/global-this.mjs
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
__name(getGlobal, "getGlobal");
var global_this_default = getGlobal();

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/polyfill/performance.mjs
global_this_default.performance = global_this_default.performance || performance2;
global_this_default.Performance = global_this_default.Performance || Performance;
global_this_default.PerformanceEntry = global_this_default.PerformanceEntry || PerformanceEntry;
global_this_default.PerformanceMark = global_this_default.PerformanceMark || PerformanceMark;
global_this_default.PerformanceMeasure = global_this_default.PerformanceMeasure || PerformanceMeasure;
global_this_default.PerformanceObserver = global_this_default.PerformanceObserver || PerformanceObserver;
global_this_default.PerformanceObserverEntryList = global_this_default.PerformanceObserverEntryList || PerformanceObserverEntryList;
global_this_default.PerformanceResourceTiming = global_this_default.PerformanceResourceTiming || PerformanceResourceTiming;
var performance_default = global_this_default.performance;

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/_virtual_unenv_global_polyfill-performance.js
globalThis.performance = performance_default;

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/mock/empty.mjs
var empty_default = Object.freeze(
  Object.create(null, {
    __unenv__: { get: () => true }
  })
);

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/process/internal/env.mjs
var _envShim = /* @__PURE__ */ Object.create(null);
var _processEnv = globalThis.process?.env;
var _getEnv = /* @__PURE__ */ __name((useShim) => _processEnv || globalThis.__env__ || (useShim ? _envShim : globalThis), "_getEnv");
var env = new Proxy(_envShim, {
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

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/process/internal/time.mjs
var hrtime = Object.assign(
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
var nextTick = globalThis.queueMicrotask ? (cb, ...args) => {
  globalThis.queueMicrotask(cb.bind(void 0, ...args));
} : _createNextTickWithTimeout();
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
__name(_createNextTickWithTimeout, "_createNextTickWithTimeout");

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/process/internal/process.mjs
var title = "unenv";
var argv = [];
var version = "";
var versions = {
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
function noop() {
  return process2;
}
__name(noop, "noop");
var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = /* @__PURE__ */ __name(function emit2(event) {
  if (event === "message" || event === "multipleResolves") {
    return process2;
  }
  return false;
}, "emit2");
var prependListener = noop;
var prependOnceListener = noop;
var listeners = /* @__PURE__ */ __name(function(name) {
  return [];
}, "listeners");
var listenerCount = /* @__PURE__ */ __name(() => 0, "listenerCount");
var binding = /* @__PURE__ */ __name(function(name) {
  throw new Error("[unenv] process.binding is not supported");
}, "binding");
var _cwd = "/";
var cwd = /* @__PURE__ */ __name(function cwd2() {
  return _cwd;
}, "cwd2");
var chdir = /* @__PURE__ */ __name(function chdir2(dir3) {
  _cwd = dir3;
}, "chdir2");
var umask = /* @__PURE__ */ __name(function umask2() {
  return 0;
}, "umask2");
var getegid = /* @__PURE__ */ __name(function getegid2() {
  return 1e3;
}, "getegid2");
var geteuid = /* @__PURE__ */ __name(function geteuid2() {
  return 1e3;
}, "geteuid2");
var getgid = /* @__PURE__ */ __name(function getgid2() {
  return 1e3;
}, "getgid2");
var getuid = /* @__PURE__ */ __name(function getuid2() {
  return 1e3;
}, "getuid2");
var getgroups = /* @__PURE__ */ __name(function getgroups2() {
  return [];
}, "getgroups2");
var getBuiltinModule = /* @__PURE__ */ __name((_name) => void 0, "getBuiltinModule");
var abort = notImplemented("process.abort");
var allowedNodeEnvironmentFlags = /* @__PURE__ */ new Set();
var arch = "";
var argv0 = "";
var config = empty_default;
var connected = false;
var constrainedMemory = /* @__PURE__ */ __name(() => 0, "constrainedMemory");
var availableMemory = /* @__PURE__ */ __name(() => 0, "availableMemory");
var cpuUsage = notImplemented("process.cpuUsage");
var debugPort = 0;
var dlopen = notImplemented("process.dlopen");
var disconnect = noop;
var emitWarning = noop;
var eventNames = notImplemented("process.eventNames");
var execArgv = [];
var execPath = "";
var exit = notImplemented("process.exit");
var features = /* @__PURE__ */ Object.create({
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
var getActiveResourcesInfo = /* @__PURE__ */ __name(() => [], "getActiveResourcesInfo");
var getMaxListeners = notImplemented(
  "process.getMaxListeners"
);
var kill = notImplemented("process.kill");
var memoryUsage = Object.assign(
  () => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }),
  { rss: () => 0 }
);
var pid = 1e3;
var platform = "";
var ppid = 1e3;
var rawListeners = notImplemented(
  "process.rawListeners"
);
var release = /* @__PURE__ */ Object.create({
  name: "",
  lts: "",
  sourceUrl: void 0,
  headersUrl: void 0
});
var report = /* @__PURE__ */ Object.create({
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
var resourceUsage = notImplemented(
  "process.resourceUsage"
);
var setegid = notImplemented("process.setegid");
var seteuid = notImplemented("process.seteuid");
var setgid = notImplemented("process.setgid");
var setgroups = notImplemented("process.setgroups");
var setuid = notImplemented("process.setuid");
var setMaxListeners = notImplemented(
  "process.setMaxListeners"
);
var setSourceMapsEnabled = notImplemented("process.setSourceMapsEnabled");
var stdout = proxy_default.__createMock__("process.stdout");
var stderr = proxy_default.__createMock__("process.stderr");
var stdin = proxy_default.__createMock__("process.stdin");
var traceDeprecation = false;
var uptime = /* @__PURE__ */ __name(() => 0, "uptime");
var exitCode = 0;
var setUncaughtExceptionCaptureCallback = notImplemented("process.setUncaughtExceptionCaptureCallback");
var hasUncaughtExceptionCaptureCallback = /* @__PURE__ */ __name(() => false, "hasUncaughtExceptionCaptureCallback");
var sourceMapsEnabled = false;
var loadEnvFile = notImplemented(
  "process.loadEnvFile"
);
var mainModule = void 0;
var permission = {
  has: () => false
};
var channel = {
  ref() {
  },
  unref() {
  }
};
var throwDeprecation = false;
var assert3 = notImplemented("process.assert");
var openStdin = notImplemented("process.openStdin");
var _debugEnd = notImplemented("process._debugEnd");
var _debugProcess = notImplemented("process._debugProcess");
var _fatalException = notImplemented("process._fatalException");
var _getActiveHandles = notImplemented("process._getActiveHandles");
var _getActiveRequests = notImplemented("process._getActiveRequests");
var _kill = notImplemented("process._kill");
var _preload_modules = [];
var _rawDebug = notImplemented("process._rawDebug");
var _startProfilerIdleNotifier = notImplemented(
  "process._startProfilerIdleNotifier"
);
var _stopProfilerIdleNotifier = notImplemented(
  "process.__stopProfilerIdleNotifier"
);
var _tickCallback = notImplemented("process._tickCallback");
var _linkedBinding = notImplemented("process._linkedBinding");
var domain = proxy_default.__createMock__("process.domain");
var initgroups = notImplemented("process.initgroups");
var moduleLoadList = [];
var reallyExit = noop;
var _exiting = false;
var _events = [];
var _eventsCount = 0;
var _maxListeners = 0;
var process2 = {
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

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/node_modules/unenv/runtime/node/process/$cloudflare.mjs
var unpatchedGlobalThisProcess = globalThis["process"];
var getBuiltinModule2 = unpatchedGlobalThisProcess.getBuiltinModule;
var workerdProcess = getBuiltinModule2("node:process");
var { env: env2, nextTick: nextTick2 } = workerdProcess;
var _process = {
  /**
   * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
   */
  // @ts-expect-error (not typed)
  _debugEnd,
  _debugProcess,
  // TODO: implemented yet in unenv
  //_events,
  _eventsCount,
  // TODO: implemented yet in unenv
  //_exiting,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  // TODO: implemented yet in unenv
  //_linkedBinding,
  // TODO: implemented yet in unenv
  //_maxListeners,
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
  // TODO: implemented yet in unenv
  //domain,
  emit,
  emitWarning,
  eventNames,
  execArgv,
  execPath,
  exit,
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
  // TODO: implemented yet in unenv
  //initgroups,
  kill,
  listenerCount,
  listeners,
  loadEnvFile,
  memoryUsage,
  // TODO: implemented yet in unenv
  //moduleLoadList,
  off,
  on,
  once,
  // TODO: implemented yet in unenv
  //openStdin,
  pid,
  platform,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  // TODO: implemented yet in unenv
  //reallyExit,
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
var cloudflare_default2 = _process;

// D:/Scoop/persist/nodejs-lts/bin/node_modules/wrangler/_virtual_unenv_global_polyfill-process.js
globalThis.process = cloudflare_default2;

// node_modules/itty-router/index.mjs
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

// src/index.js
var { preflight, corsify } = y({
  origin: "*",
  allowMethods: "*",
  exposeHeaders: "*"
});
var withBenchmarking = /* @__PURE__ */ __name((request) => {
  request.start = Date.now();
}, "withBenchmarking");
var logger = /* @__PURE__ */ __name((res, req) => {
  console.log(res.status, req.url, Date.now() - req.start, "ms");
}, "logger");
var router = n({
  before: [withBenchmarking, preflight],
  missing: () => s(404, "404 not found."),
  finally: [corsify, logger]
});
router.get("/", () => o({ message: "API \u670D\u52A1\u8FD0\u884C\u4E2D~" }));
router.get("/ping", () => o({ message: "pong" }));
router.get(
  "/v1/models",
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
router.post("/v1/chat/completions", (req) => handleCompletion(req));
var MAX_RETRY_COUNT = 3;
var RETRY_DELAY = 5e3;
var FAKE_HEADERS = {
  "Accept": "*/*",
  "Accept-Encoding": "gzip, deflate, br, zstd",
  "Accept-Language": "zh-CN,zh;q=0.9",
  "Origin": "https://duckduckgo.com/",
  "Cookie": "l=wt-wt; ah=wt-wt; dcm=6",
  "Dnt": "1",
  "Priority": "u=1, i",
  "Referer": "https://duckduckgo.com/",
  "Sec-Ch-Ua": '"Microsoft Edge";v="129", "Not(A:Brand";v="8", "Chromium";v="129"',
  "Sec-Ch-Ua-Mobile": "?0",
  "Sec-Ch-Ua-Platform": '"Windows"',
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
};
async function handleCompletion(request) {
  try {
    const reqBody = await request.json();
    const { model: inputModel, messages, stream: returnStream } = reqBody;
    const model = convertModel(inputModel);
    const content = messagesPrepare(messages);
    return await createCompletion(model, content, returnStream);
  } catch (err) {
    s(500, err.message);
  }
}
__name(handleCompletion, "handleCompletion");
async function createCompletion(model, content, returnStream, retryCount = 0) {
  const token = await requestToken();
  try {
    const response = await fetch(`https://duckduckgo.com/duckchat/v1/chat`, {
      method: "POST",
      headers: {
        ...FAKE_HEADERS,
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
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return handlerStream(model, response.body, returnStream);
  } catch (err) {
    if (retryCount < MAX_RETRY_COUNT) {
      console.log(err);
      console.log("Retrying... count", ++retryCount);
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      return await createCompletion(model, content, returnStream, retryCount);
    }
    throw err;
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
  const response = await fetch(`https://duckduckgo.com/duckchat/v1/status`, {
    method: "GET",
    headers: {
      ...FAKE_HEADERS,
      "x-vqd-accept": "1"
    }
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const token = response.headers.get("x-vqd-4");
  return token;
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
  if (typeof Deno !== "undefined") {
    console.log(`Listening on http://localhost:${Deno.env.get("PORT") || 8787}`);
    return Deno.serve({ port: Deno.env.get("PORT") || 8787 }, router.fetch);
  }
  if (typeof EdgeRuntime !== "undefined") {
    return;
  }
  if (typeof addEventListener === "function") {
    return;
  }
  const { serve } = await eval("import('@hono/node-server')");
  console.log(`Listening on http://localhost:${process.env.PORT || 8787}`);
  serve({
    fetch: router.fetch,
    port: process.env.PORT || 8787
  });
})();
var config2 = {
  runtime: "edge",
  regions: ["hkg1"]
};
var GET = router.fetch;
var POST = router.fetch;
var PUT = router.fetch;
var PATCH = router.fetch;
var DELETE = router.fetch;
var HEAD = router.fetch;
var OPTIONS = router.fetch;
function onRequest(context2) {
  return exports.fetch(context2.request);
}
__name(onRequest, "onRequest");
var src_default = {
  fetch(req, env3, ctx) {
    return router.fetch(req, env3, ctx);
  }
};
export {
  DELETE,
  GET,
  HEAD,
  OPTIONS,
  PATCH,
  POST,
  PUT,
  config2 as config,
  src_default as default,
  onRequest
};
//# sourceMappingURL=index.js.map
