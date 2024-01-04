/*! For license information please see 7902.2dbac89b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[7902],{"./node_modules/swr/core/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>useSWR,kY:()=>useSWRConfig});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),shim=__webpack_require__("./node_modules/use-sync-external-store/shim/index.js");const SWRGlobalState=new WeakMap,EMPTY_CACHE={},INITIAL_CACHE={},noop=()=>{},UNDEFINED=noop(),OBJECT=Object,isUndefined=v=>v===UNDEFINED,isFunction=v=>"function"==typeof v,mergeObjects=(a,b)=>({...a,...b}),isWindowDefined="undefined"!=typeof window,isDocumentDefined="undefined"!=typeof document,createCacheHelper=(cache,key)=>{const state=SWRGlobalState.get(cache);return[()=>cache.get(key)||EMPTY_CACHE,info=>{if(!isUndefined(key)){const prev=cache.get(key);key in INITIAL_CACHE||(INITIAL_CACHE[key]=prev),state[5](key,mergeObjects(prev,info),prev||EMPTY_CACHE)}},state[6],()=>!isUndefined(key)&&key in INITIAL_CACHE?INITIAL_CACHE[key]:cache.get(key)||EMPTY_CACHE]},table=new WeakMap;let counter=0;const stableHash=arg=>{const type=typeof arg,constructor=arg&&arg.constructor,isDate=constructor==Date;let result,index;if(OBJECT(arg)!==arg||isDate||constructor==RegExp)result=isDate?arg.toJSON():"symbol"==type?arg.toString():"string"==type?JSON.stringify(arg):""+arg;else{if(result=table.get(arg),result)return result;if(result=++counter+"~",table.set(arg,result),constructor==Array){for(result="@",index=0;index<arg.length;index++)result+=stableHash(arg[index])+",";table.set(arg,result)}if(constructor==OBJECT){result="#";const keys=OBJECT.keys(arg).sort();for(;!isUndefined(index=keys.pop());)isUndefined(arg[index])||(result+=index+":"+stableHash(arg[index])+",");table.set(arg,result)}}return result};let online=!0;const[onWindowEvent,offWindowEvent]=isWindowDefined&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[noop,noop],preset={isOnline:()=>online,isVisible:()=>{const visibilityState=isDocumentDefined&&document.visibilityState;return isUndefined(visibilityState)||"hidden"!==visibilityState}},defaultConfigOptions={initFocus:callback=>(isDocumentDefined&&document.addEventListener("visibilitychange",callback),onWindowEvent("focus",callback),()=>{isDocumentDefined&&document.removeEventListener("visibilitychange",callback),offWindowEvent("focus",callback)}),initReconnect:callback=>{const onOnline=()=>{online=!0,callback()},onOffline=()=>{online=!1};return onWindowEvent("online",onOnline),onWindowEvent("offline",onOffline),()=>{offWindowEvent("online",onOnline),offWindowEvent("offline",onOffline)}}},IS_REACT_LEGACY=!react.useId,IS_SERVER=!isWindowDefined||"Deno"in window,rAF=f=>isWindowDefined&&void 0!==window.requestAnimationFrame?window.requestAnimationFrame(f):setTimeout(f,1),useIsomorphicLayoutEffect=IS_SERVER?react.useEffect:react.useLayoutEffect,navigatorConnection="undefined"!=typeof navigator&&navigator.connection,slowConnection=!IS_SERVER&&navigatorConnection&&(["slow-2g","2g"].includes(navigatorConnection.effectiveType)||navigatorConnection.saveData),dist_serialize=key=>{if(isFunction(key))try{key=key()}catch(err){key=""}const args=key;return[key="string"==typeof key?key:(Array.isArray(key)?key.length:key)?stableHash(key):"",args]};let __timestamp=0;const getTimestamp=()=>++__timestamp;var constants_FOCUS_EVENT=0,constants_RECONNECT_EVENT=1,constants_MUTATE_EVENT=2;async function internalMutate(...args){const[cache,_key,_data,_opts]=args,options=mergeObjects({populateCache:!0,throwOnError:!0},"boolean"==typeof _opts?{revalidate:_opts}:_opts||{});let populateCache=options.populateCache;const rollbackOnErrorOption=options.rollbackOnError;let optimisticData=options.optimisticData;const revalidate=!1!==options.revalidate,throwOnError=options.throwOnError;if(isFunction(_key)){const keyFilter=_key,matchedKeys=[],it=cache.keys();for(let keyIt=it.next();!keyIt.done;keyIt=it.next()){const key=keyIt.value;!key.startsWith("$inf$")&&keyFilter(cache.get(key)._k)&&matchedKeys.push(key)}return Promise.all(matchedKeys.map(mutateByKey))}return mutateByKey(_key);async function mutateByKey(_k){const[key]=dist_serialize(_k);if(!key)return;const[get,set]=createCacheHelper(cache,key),[EVENT_REVALIDATORS,MUTATION,FETCH]=SWRGlobalState.get(cache),revalidators=EVENT_REVALIDATORS[key],startRevalidate=()=>revalidate&&(delete FETCH[key],revalidators&&revalidators[0])?revalidators[0](2).then((()=>get().data)):get().data;if(args.length<3)return startRevalidate();let error,data=_data;const beforeMutationTs=getTimestamp();MUTATION[key]=[beforeMutationTs,0];const hasOptimisticData=!isUndefined(optimisticData),state=get(),displayedData=state.data,currentData=state._c,committedData=isUndefined(currentData)?displayedData:currentData;if(hasOptimisticData&&(optimisticData=isFunction(optimisticData)?optimisticData(committedData):optimisticData,set({data:optimisticData,_c:committedData})),isFunction(data))try{data=data(committedData)}catch(err){error=err}if(data&&isFunction(data.then)){if(data=await data.catch((err=>{error=err})),beforeMutationTs!==MUTATION[key][0]){if(error)throw error;return data}error&&hasOptimisticData&&(error=>"function"==typeof rollbackOnErrorOption?rollbackOnErrorOption(error):!1!==rollbackOnErrorOption)(error)&&(populateCache=!0,data=committedData,set({data,_c:UNDEFINED}))}populateCache&&(error||(isFunction(populateCache)&&(data=populateCache(data,committedData)),set({data,_c:UNDEFINED}))),MUTATION[key][1]=getTimestamp();const res=await startRevalidate();if(set({_c:UNDEFINED}),!error)return populateCache?res:data;if(throwOnError)throw error}}const revalidateAllKeys=(revalidators,type)=>{for(const key in revalidators)revalidators[key][0]&&revalidators[key][0](type)},initCache=(provider,options)=>{if(!SWRGlobalState.has(provider)){const opts=mergeObjects(defaultConfigOptions,options),EVENT_REVALIDATORS={},mutate=internalMutate.bind(UNDEFINED,provider);let unmount=noop;const subscriptions={},subscribe=(key,callback)=>{const subs=subscriptions[key]||[];return subscriptions[key]=subs,subs.push(callback),()=>subs.splice(subs.indexOf(callback),1)},setter=(key,value,prev)=>{provider.set(key,value);const subs=subscriptions[key];if(subs)for(let i=subs.length;i--;)subs[i](value,prev)},initProvider=()=>{if(!SWRGlobalState.has(provider)&&(SWRGlobalState.set(provider,[EVENT_REVALIDATORS,{},{},{},mutate,setter,subscribe]),!IS_SERVER)){const releaseFocus=opts.initFocus(setTimeout.bind(UNDEFINED,revalidateAllKeys.bind(UNDEFINED,EVENT_REVALIDATORS,0))),releaseReconnect=opts.initReconnect(setTimeout.bind(UNDEFINED,revalidateAllKeys.bind(UNDEFINED,EVENT_REVALIDATORS,1)));unmount=()=>{releaseFocus&&releaseFocus(),releaseReconnect&&releaseReconnect(),SWRGlobalState.delete(provider)}}};return initProvider(),[provider,mutate,initProvider,unmount]}return[provider,SWRGlobalState.get(provider)[4]]},[cache,mutate]=initCache(new Map),defaultConfig=mergeObjects({onLoadingSlow:noop,onSuccess:noop,onError:noop,onErrorRetry:(_,__,config,revalidate,opts)=>{const maxRetryCount=config.errorRetryCount,currentRetryCount=opts.retryCount,timeout=~~((Math.random()+.5)*(1<<(currentRetryCount<8?currentRetryCount:8)))*config.errorRetryInterval;!isUndefined(maxRetryCount)&&currentRetryCount>maxRetryCount||setTimeout(revalidate,timeout,opts)},onDiscarded:noop,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:slowConnection?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:slowConnection?5e3:3e3,compare:(currentData,newData)=>stableHash(currentData)==stableHash(newData),isPaused:()=>!1,cache,mutate,fallback:{}},preset),mergeConfigs=(a,b)=>{const v=mergeObjects(a,b);if(b){const{use:u1,fallback:f1}=a,{use:u2,fallback:f2}=b;u1&&u2&&(v.use=u1.concat(u2)),f1&&f2&&(v.fallback=mergeObjects(f1,f2))}return v},SWRConfigContext=(0,react.createContext)({}),enableDevtools=isWindowDefined&&window.__SWR_DEVTOOLS_USE__,use=enableDevtools?window.__SWR_DEVTOOLS_USE__:[],normalize=args=>isFunction(args[1])?[args[0],args[1],args[2]||{}]:[args[0],null,(null===args[1]?args[2]:args[1])||{}],useSWRConfig=()=>mergeObjects(defaultConfig,(0,react.useContext)(SWRConfigContext)),BUILT_IN_MIDDLEWARE=use.concat((useSWRNext=>(key_,fetcher_,config)=>useSWRNext(key_,fetcher_&&((...args)=>{const key=dist_serialize(key_)[0],[,,,PRELOAD]=SWRGlobalState.get(cache),req=PRELOAD[key];return req?(delete PRELOAD[key],req):fetcher_(...args)}),config)));enableDevtools&&(window.__SWR_DEVTOOLS_REACT__=react);const WITH_DEDUPE={dedupe:!0};OBJECT.defineProperty((props=>{const{value}=props,parentConfig=(0,react.useContext)(SWRConfigContext),isFunctionalConfig=isFunction(value),config=(0,react.useMemo)((()=>isFunctionalConfig?value(parentConfig):value),[isFunctionalConfig,parentConfig,value]),extendedConfig=(0,react.useMemo)((()=>isFunctionalConfig?config:mergeConfigs(parentConfig,config)),[isFunctionalConfig,parentConfig,config]),provider=config&&config.provider,[cacheContext]=(0,react.useState)((()=>provider?initCache(provider(extendedConfig.cache||cache),config):UNDEFINED));return cacheContext&&(extendedConfig.cache=cacheContext[0],extendedConfig.mutate=cacheContext[1]),useIsomorphicLayoutEffect((()=>{if(cacheContext)return cacheContext[2]&&cacheContext[2](),cacheContext[3]}),[]),(0,react.createElement)(SWRConfigContext.Provider,mergeObjects(props,{value:extendedConfig}))}),"defaultValue",{value:defaultConfig});var hook,useSWR=(hook=(_key,fetcher,config)=>{const{cache,compare,suspense,fallbackData,revalidateOnMount,revalidateIfStale,refreshInterval,refreshWhenHidden,refreshWhenOffline,keepPreviousData}=config,[EVENT_REVALIDATORS,MUTATION,FETCH]=SWRGlobalState.get(cache),[key,fnArg]=dist_serialize(_key),initialMountedRef=(0,react.useRef)(!1),unmountedRef=(0,react.useRef)(!1),keyRef=(0,react.useRef)(key),fetcherRef=(0,react.useRef)(fetcher),configRef=(0,react.useRef)(config),getConfig=()=>configRef.current,isActive=()=>getConfig().isVisible()&&getConfig().isOnline(),[getCache,setCache,subscribeCache,getInitialCache]=createCacheHelper(cache,key),stateDependencies=(0,react.useRef)({}).current,fallback=isUndefined(fallbackData)?config.fallback[key]:fallbackData,isEqual=(prev,current)=>{let equal=!0;for(const _ in stateDependencies){const t=_;"data"===t?compare(current[t],prev[t])||isUndefined(prev[t])&&compare(current[t],returnedData)||(equal=!1):current[t]!==prev[t]&&(equal=!1)}return equal},getSnapshot=(0,react.useMemo)((()=>{const shouldStartRequest=!!key&&!!fetcher&&(isUndefined(revalidateOnMount)?!getConfig().isPaused()&&!suspense&&(!!isUndefined(revalidateIfStale)||revalidateIfStale):revalidateOnMount),getSelectedCache=state=>{const snapshot=mergeObjects(state);return delete snapshot._k,shouldStartRequest?{isValidating:!0,isLoading:!0,...snapshot}:snapshot};let memorizedSnapshot=getSelectedCache(getCache());const memorizedInitialSnapshot=getSelectedCache(getInitialCache());return[()=>{const newSnapshot=getSelectedCache(getCache());return isEqual(newSnapshot,memorizedSnapshot)?memorizedSnapshot:memorizedSnapshot=newSnapshot},()=>memorizedInitialSnapshot]}),[cache,key]),cached=(0,shim.useSyncExternalStore)((0,react.useCallback)((callback=>subscribeCache(key,((current,prev)=>{isEqual(prev,current)||callback()}))),[cache,key]),getSnapshot[0],getSnapshot[1]),isInitialMount=!initialMountedRef.current,hasRevalidator=EVENT_REVALIDATORS[key]&&EVENT_REVALIDATORS[key].length>0,cachedData=cached.data,data=isUndefined(cachedData)?fallback:cachedData,error=cached.error,laggyDataRef=(0,react.useRef)(data),returnedData=keepPreviousData?isUndefined(cachedData)?laggyDataRef.current:cachedData:data,shouldDoInitialRevalidation=!(hasRevalidator&&!isUndefined(error))&&(isInitialMount&&!isUndefined(revalidateOnMount)?revalidateOnMount:!getConfig().isPaused()&&(suspense?!isUndefined(data)&&revalidateIfStale:isUndefined(data)||revalidateIfStale)),defaultValidatingState=!!(key&&fetcher&&isInitialMount&&shouldDoInitialRevalidation),isValidating=isUndefined(cached.isValidating)?defaultValidatingState:cached.isValidating,isLoading=isUndefined(cached.isLoading)?defaultValidatingState:cached.isLoading,revalidate=(0,react.useCallback)((async revalidateOpts=>{const currentFetcher=fetcherRef.current;if(!key||!currentFetcher||unmountedRef.current||getConfig().isPaused())return!1;let newData,startAt,loading=!0;const opts=revalidateOpts||{},shouldStartNewRequest=!FETCH[key]||!opts.dedupe,callbackSafeguard=()=>IS_REACT_LEGACY?!unmountedRef.current&&key===keyRef.current&&initialMountedRef.current:key===keyRef.current,finalState={isValidating:!1,isLoading:!1},finishRequestAndUpdateState=()=>{setCache(finalState)},cleanupState=()=>{const requestInfo=FETCH[key];requestInfo&&requestInfo[1]===startAt&&delete FETCH[key]},initialState={isValidating:!0};isUndefined(getCache().data)&&(initialState.isLoading=!0);try{if(shouldStartNewRequest&&(setCache(initialState),config.loadingTimeout&&isUndefined(getCache().data)&&setTimeout((()=>{loading&&callbackSafeguard()&&getConfig().onLoadingSlow(key,config)}),config.loadingTimeout),FETCH[key]=[currentFetcher(fnArg),getTimestamp()]),[newData,startAt]=FETCH[key],newData=await newData,shouldStartNewRequest&&setTimeout(cleanupState,config.dedupingInterval),!FETCH[key]||FETCH[key][1]!==startAt)return shouldStartNewRequest&&callbackSafeguard()&&getConfig().onDiscarded(key),!1;finalState.error=UNDEFINED;const mutationInfo=MUTATION[key];if(!isUndefined(mutationInfo)&&(startAt<=mutationInfo[0]||startAt<=mutationInfo[1]||0===mutationInfo[1]))return finishRequestAndUpdateState(),shouldStartNewRequest&&callbackSafeguard()&&getConfig().onDiscarded(key),!1;const cacheData=getCache().data;finalState.data=compare(cacheData,newData)?cacheData:newData,shouldStartNewRequest&&callbackSafeguard()&&getConfig().onSuccess(newData,key,config)}catch(err){cleanupState();const currentConfig=getConfig(),{shouldRetryOnError}=currentConfig;currentConfig.isPaused()||(finalState.error=err,shouldStartNewRequest&&callbackSafeguard()&&(currentConfig.onError(err,key,currentConfig),(!0===shouldRetryOnError||isFunction(shouldRetryOnError)&&shouldRetryOnError(err))&&isActive()&&currentConfig.onErrorRetry(err,key,currentConfig,revalidate,{retryCount:(opts.retryCount||0)+1,dedupe:!0})))}return loading=!1,finishRequestAndUpdateState(),!0}),[key,cache]),boundMutate=(0,react.useCallback)(((...args)=>internalMutate(cache,keyRef.current,...args)),[]);if(useIsomorphicLayoutEffect((()=>{fetcherRef.current=fetcher,configRef.current=config,isUndefined(cachedData)||(laggyDataRef.current=cachedData)})),useIsomorphicLayoutEffect((()=>{if(!key)return;const softRevalidate=revalidate.bind(UNDEFINED,WITH_DEDUPE);let nextFocusRevalidatedAt=0;const unsubEvents=((key,callbacks,callback)=>{const keyedRevalidators=callbacks[key]||(callbacks[key]=[]);return keyedRevalidators.push(callback),()=>{const index=keyedRevalidators.indexOf(callback);index>=0&&(keyedRevalidators[index]=keyedRevalidators[keyedRevalidators.length-1],keyedRevalidators.pop())}})(key,EVENT_REVALIDATORS,(type=>{if(type==constants_FOCUS_EVENT){const now=Date.now();getConfig().revalidateOnFocus&&now>nextFocusRevalidatedAt&&isActive()&&(nextFocusRevalidatedAt=now+getConfig().focusThrottleInterval,softRevalidate())}else if(type==constants_RECONNECT_EVENT)getConfig().revalidateOnReconnect&&isActive()&&softRevalidate();else if(type==constants_MUTATE_EVENT)return revalidate()}));return unmountedRef.current=!1,keyRef.current=key,initialMountedRef.current=!0,setCache({_k:fnArg}),shouldDoInitialRevalidation&&(isUndefined(data)||IS_SERVER?softRevalidate():rAF(softRevalidate)),()=>{unmountedRef.current=!0,unsubEvents()}}),[key]),useIsomorphicLayoutEffect((()=>{let timer;function next(){const interval=isFunction(refreshInterval)?refreshInterval(data):refreshInterval;interval&&-1!==timer&&(timer=setTimeout(execute,interval))}function execute(){getCache().error||!refreshWhenHidden&&!getConfig().isVisible()||!refreshWhenOffline&&!getConfig().isOnline()?next():revalidate(WITH_DEDUPE).then(next)}return next(),()=>{timer&&(clearTimeout(timer),timer=-1)}}),[refreshInterval,refreshWhenHidden,refreshWhenOffline,key]),(0,react.useDebugValue)(returnedData),suspense&&isUndefined(data)&&key){if(!IS_REACT_LEGACY&&IS_SERVER)throw new Error("Fallback data is required when using suspense in SSR.");throw fetcherRef.current=fetcher,configRef.current=config,unmountedRef.current=!1,isUndefined(error)?revalidate(WITH_DEDUPE):error}return{mutate:boundMutate,get data(){return stateDependencies.data=!0,returnedData},get error(){return stateDependencies.error=!0,error},get isValidating(){return stateDependencies.isValidating=!0,isValidating},get isLoading(){return stateDependencies.isLoading=!0,isLoading}}},function useSWRArgs(...args){const fallbackConfig=useSWRConfig(),[key,fn,_config]=normalize(args),config=mergeConfigs(fallbackConfig,_config);let next=hook;const{use}=config,middleware=(use||[]).concat(BUILT_IN_MIDDLEWARE);for(let i=middleware.length;i--;)next=middleware[i](next);return next(key,fn||config.fetcher||null,config)})},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var e=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"./node_modules/use-sync-external-store/shim/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")}}]);