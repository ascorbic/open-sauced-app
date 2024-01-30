/*! For license information please see 1338.33fa2fbe.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[1338,4903],{"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectDestructuringEmpty})},"./node_modules/@radix-ui/react-focus-guards/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EW:()=>$3db38b7d1fb3fe6a$export$b7ece24a22aeda8c});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");let $3db38b7d1fb3fe6a$var$count=0;function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c(){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{var _edgeGuards$,_edgeGuards$2;const edgeGuards=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(_edgeGuards$=edgeGuards[0])&&void 0!==_edgeGuards$?_edgeGuards$:$3db38b7d1fb3fe6a$var$createFocusGuard()),document.body.insertAdjacentElement("beforeend",null!==(_edgeGuards$2=edgeGuards[1])&&void 0!==_edgeGuards$2?_edgeGuards$2:$3db38b7d1fb3fe6a$var$createFocusGuard()),$3db38b7d1fb3fe6a$var$count++,()=>{1===$3db38b7d1fb3fe6a$var$count&&document.querySelectorAll("[data-radix-focus-guard]").forEach((node=>node.remove())),$3db38b7d1fb3fe6a$var$count--}}),[])}function $3db38b7d1fb3fe6a$var$createFocusGuard(){const element=document.createElement("span");return element.setAttribute("data-radix-focus-guard",""),element.tabIndex=0,element.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",element}},"./node_modules/date-fns/esm/_lib/defaultLocale/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/date-fns/esm/locale/en-US/index.js").Z},"./node_modules/date-fns/esm/_lib/defaultOptions/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>getDefaultOptions});var defaultOptions={};function getDefaultOptions(){return defaultOptions}},"./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getTimezoneOffsetInMilliseconds(date){var utcDate=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds()));return utcDate.setUTCFullYear(date.getFullYear()),date.getTime()-utcDate.getTime()}__webpack_require__.d(__webpack_exports__,{Z:()=>getTimezoneOffsetInMilliseconds})},"./node_modules/date-fns/esm/_lib/requiredArgs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function requiredArgs(required,args){if(args.length<required)throw new TypeError(required+" argument"+(required>1?"s":"")+" required, but only "+args.length+" present")}__webpack_require__.d(__webpack_exports__,{Z:()=>requiredArgs})},"./node_modules/date-fns/esm/differenceInCalendarDays/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>differenceInCalendarDays});var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js"),_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/esm/startOfDay/index.js"),_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js"),MILLISECONDS_IN_DAY=864e5;function differenceInCalendarDays(dirtyDateLeft,dirtyDateRight){(0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.Z)(2,arguments);var startOfDayLeft=(0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.Z)(dirtyDateLeft),startOfDayRight=(0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.Z)(dirtyDateRight),timestampLeft=startOfDayLeft.getTime()-(0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.Z)(startOfDayLeft),timestampRight=startOfDayRight.getTime()-(0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.Z)(startOfDayRight);return Math.round((timestampLeft-timestampRight)/MILLISECONDS_IN_DAY)}},"./node_modules/date-fns/esm/locale/en-US/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>en_US});var formatDistanceLocale={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const _lib_formatDistance=function formatDistance(token,count,options){var result,tokenValue=formatDistanceLocale[token];return result="string"==typeof tokenValue?tokenValue:1===count?tokenValue.one:tokenValue.other.replace("{{count}}",count.toString()),null!=options&&options.addSuffix?options.comparison&&options.comparison>0?"in "+result:result+" ago":result};function buildFormatLongFn(args){return function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},width=options.width?String(options.width):args.defaultWidth;return args.formats[width]||args.formats[args.defaultWidth]}}var formatLong={date:buildFormatLongFn({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:buildFormatLongFn({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:buildFormatLongFn({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var formatRelativeLocale={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function buildLocalizeFn(args){return function(dirtyIndex,options){var valuesArray;if("formatting"===(null!=options&&options.context?String(options.context):"standalone")&&args.formattingValues){var defaultWidth=args.defaultFormattingWidth||args.defaultWidth,width=null!=options&&options.width?String(options.width):defaultWidth;valuesArray=args.formattingValues[width]||args.formattingValues[defaultWidth]}else{var _defaultWidth=args.defaultWidth,_width=null!=options&&options.width?String(options.width):args.defaultWidth;valuesArray=args.values[_width]||args.values[_defaultWidth]}return valuesArray[args.argumentCallback?args.argumentCallback(dirtyIndex):dirtyIndex]}}function buildMatchFn(args){return function(string){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},width=options.width,matchPattern=width&&args.matchPatterns[width]||args.matchPatterns[args.defaultMatchWidth],matchResult=string.match(matchPattern);if(!matchResult)return null;var value,matchedString=matchResult[0],parsePatterns=width&&args.parsePatterns[width]||args.parsePatterns[args.defaultParseWidth],key=Array.isArray(parsePatterns)?function findIndex(array,predicate){for(var key=0;key<array.length;key++)if(predicate(array[key]))return key;return}(parsePatterns,(function(pattern){return pattern.test(matchedString)})):function findKey(object,predicate){for(var key in object)if(object.hasOwnProperty(key)&&predicate(object[key]))return key;return}(parsePatterns,(function(pattern){return pattern.test(matchedString)}));return value=args.valueCallback?args.valueCallback(key):key,{value:value=options.valueCallback?options.valueCallback(value):value,rest:string.slice(matchedString.length)}}}const en_US={code:"en-US",formatDistance:_lib_formatDistance,formatLong,formatRelative:function formatRelative(token,_date,_baseDate,_options){return formatRelativeLocale[token]},localize:{ordinalNumber:function ordinalNumber(dirtyNumber,_options){var number=Number(dirtyNumber),rem100=number%100;if(rem100>20||rem100<10)switch(rem100%10){case 1:return number+"st";case 2:return number+"nd";case 3:return number+"rd"}return number+"th"},era:buildLocalizeFn({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:buildLocalizeFn({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function argumentCallback(quarter){return quarter-1}}),month:buildLocalizeFn({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:buildLocalizeFn({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:buildLocalizeFn({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:function buildMatchPatternFn(args){return function(string){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},matchResult=string.match(args.matchPattern);if(!matchResult)return null;var matchedString=matchResult[0],parseResult=string.match(args.parsePattern);if(!parseResult)return null;var value=args.valueCallback?args.valueCallback(parseResult[0]):parseResult[0];return{value:value=options.valueCallback?options.valueCallback(value):value,rest:string.slice(matchedString.length)}}}({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function valueCallback(value){return parseInt(value,10)}}),era:buildMatchFn({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:buildMatchFn({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function valueCallback(index){return index+1}}),month:buildMatchFn({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:buildMatchFn({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:buildMatchFn({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}}},"./node_modules/date-fns/esm/startOfDay/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>startOfDay});var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/esm/toDate/index.js"),_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");function startOfDay(dirtyDate){(0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.Z)(1,arguments);var date=(0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.Z)(dirtyDate);return date.setHours(0,0,0,0),date}},"./node_modules/date-fns/esm/toDate/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>toDate});var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function toDate(argument){(0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.Z)(1,arguments);var argStr=Object.prototype.toString.call(argument);return argument instanceof Date||"object"===_typeof(argument)&&"[object Date]"===argStr?new Date(argument.getTime()):"number"==typeof argument||"[object Number]"===argStr?new Date(argument):("string"!=typeof argument&&"[object String]"!==argStr||void 0===console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},"./node_modules/react-loading-skeleton/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Skeleton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const SkeletonThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),defaultEnableAnimation=!0;function styleOptionsToCssProperties({baseColor,highlightColor,width,height,borderRadius,circle,direction,duration,enableAnimation=defaultEnableAnimation}){const style={};return"rtl"===direction&&(style["--animation-direction"]="reverse"),"number"==typeof duration&&(style["--animation-duration"]=`${duration}s`),enableAnimation||(style["--pseudo-element-display"]="none"),"string"!=typeof width&&"number"!=typeof width||(style.width=width),"string"!=typeof height&&"number"!=typeof height||(style.height=height),"string"!=typeof borderRadius&&"number"!=typeof borderRadius||(style.borderRadius=borderRadius),circle&&(style.borderRadius="50%"),void 0!==baseColor&&(style["--base-color"]=baseColor),void 0!==highlightColor&&(style["--highlight-color"]=highlightColor),style}function Skeleton({count=1,wrapper:Wrapper,className:customClassName,containerClassName,containerTestId,circle=!1,style:styleProp,...originalPropsStyleOptions}){var _a,_b,_c;const contextStyleOptions=react__WEBPACK_IMPORTED_MODULE_0__.useContext(SkeletonThemeContext),propsStyleOptions={...originalPropsStyleOptions};for(const[key,value]of Object.entries(originalPropsStyleOptions))void 0===value&&delete propsStyleOptions[key];const styleOptions={...contextStyleOptions,...propsStyleOptions,circle},style={...styleProp,...styleOptionsToCssProperties(styleOptions)};let className="react-loading-skeleton";customClassName&&(className+=` ${customClassName}`);const inline=null!==(_a=styleOptions.inline)&&void 0!==_a&&_a,elements=[],countCeil=Math.ceil(count);for(let i=0;i<countCeil;i++){let thisStyle=style;if(countCeil>count&&i===countCeil-1){const width=null!==(_b=thisStyle.width)&&void 0!==_b?_b:"100%",fractionalPart=count%1,fractionalWidth="number"==typeof width?width*fractionalPart:`calc(${width} * ${fractionalPart})`;thisStyle={...thisStyle,width:fractionalWidth}}const skeletonSpan=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className,style:thisStyle,key:i},"‌");inline?elements.push(skeletonSpan):elements.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:i},skeletonSpan,react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null)))}return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:containerClassName,"data-testid":containerTestId,"aria-live":"polite","aria-busy":null!==(_c=styleOptions.enableAnimation)&&void 0!==_c?_c:defaultEnableAnimation},Wrapper?elements.map(((el,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,{key:i},el))):elements)}},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var e=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var h=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),n=__webpack_require__("./node_modules/use-sync-external-store/shim/index.js");var q="function"==typeof Object.is?Object.is:function p(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=v((function(){function a(a){if(!c){if(c=!0,d=a,a=l(a),void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}if(b=k,q(d,a))return b;var e=l(a);return void 0!==g&&g(b,e)?b:(d=a,k=e)}var d,k,c=!1,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]}),[b,e,l,g]);var d=r(a,c[0],c[1]);return u((function(){f.hasValue=!0,f.value=d}),[d]),w(d),d}},"./node_modules/use-sync-external-store/shim/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")},"./node_modules/use-sync-external-store/shim/with-selector.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js")},"./node_modules/zustand/esm/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ue:()=>create});var console=__webpack_require__("./node_modules/console-browserify/index.js");const createStoreImpl=createState=>{let state;const listeners=new Set,setState=(partial,replace)=>{const nextState="function"==typeof partial?partial(state):partial;if(!Object.is(nextState,state)){const previousState=state;state=(null!=replace?replace:"object"!=typeof nextState)?nextState:Object.assign({},state,nextState),listeners.forEach((listener=>listener(state,previousState)))}},getState=()=>state,api={setState,getState,subscribe:listener=>(listeners.add(listener),()=>listeners.delete(listener)),destroy:()=>{console.warn("[DEPRECATED] The destroy method will be unsupported in the future version. You should use unsubscribe function returned by subscribe. Everything will be garbage collected if store is garbage collected."),listeners.clear()}};return state=createState(setState,getState,api),api},createStore=createState=>createState?createStoreImpl(createState):createStoreImpl;var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),with_selector=__webpack_require__("./node_modules/use-sync-external-store/shim/with-selector.js"),esm_console=__webpack_require__("./node_modules/console-browserify/index.js");const{useSyncExternalStoreWithSelector}=with_selector;const createImpl=createState=>{"function"!=typeof createState&&esm_console.warn('[DEPRECATED] Passing a vanilla store will be unsupported in the future version. Please use `import { useStore } from "zustand"` to use the vanilla store in React.');const api="function"==typeof createState?createStore(createState):createState,useBoundStore=(selector,equalityFn)=>function useStore(api,selector=api.getState,equalityFn){const slice=useSyncExternalStoreWithSelector(api.subscribe,api.getState,api.getServerState||api.getState,selector,equalityFn);return(0,react.useDebugValue)(slice),slice}(api,selector,equalityFn);return Object.assign(useBoundStore,api),useBoundStore},create=createState=>createState?createImpl(createState):createImpl}}]);