"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[1417],{"./components/organisms/SuggestedRepoList/suggested-repo-list.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SuggestedRepositoriesListStory:()=>SuggestedRepositoriesListStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>suggested_repo_list_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),title=__webpack_require__("./components/atoms/Typography/title.tsx"),suggested_repo=__webpack_require__("./components/molecules/SuggestedRepo/suggested-repo.tsx"),skeleton_wrapper=__webpack_require__("./components/atoms/SkeletonLoader/skeleton-wrapper.tsx"),client_only=__webpack_require__("./components/atoms/ClientOnly/client-only.tsx"),__jsx=react.createElement;const SuggestedRepositoriesList=_ref=>{let{reposData,onAddRepo,loadingData,isLoading}=_ref;return __jsx("div",null,__jsx(title.Z,{className:"!text-light-slate-11 !text-sm",level:4},"Suggested Repositories:"),__jsx("div",{className:"flex flex-col gap-3 mt-6"},__jsx(client_only.Z,null,__jsx(react.Fragment,null,isLoading?__jsx(skeleton_wrapper.Z,{count:3,classNames:"w-3/4",height:60,radius:10}):reposData.map(((item,index)=>__jsx(suggested_repo.Z,{key:index,data:item,loadingData,onAddRepo})))))))};SuggestedRepositoriesList.displayName="SuggestedRepositoriesList";const suggested_repo_list=SuggestedRepositoriesList;try{suggestedrepolist.displayName="suggestedrepolist",suggestedrepolist.__docgenInfo={description:"",displayName:"suggestedrepolist",props:{reposData:{defaultValue:null,description:"",name:"reposData",required:!0,type:{name:"RepoCardProfileProps[]"}},onAddRepo:{defaultValue:null,description:"",name:"onAddRepo",required:!1,type:{name:"((repo: string) => void)"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingData:{defaultValue:null,description:"",name:"loadingData",required:!1,type:{name:"{ repoName: string; isLoading: boolean; isAddedFromCart: boolean; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/organisms/SuggestedRepoList/suggested-repo-list.tsx#suggestedrepolist"]={docgenInfo:suggestedrepolist.__docgenInfo,name:"suggestedrepolist",path:"components/organisms/SuggestedRepoList/suggested-repo-list.tsx#suggestedrepolist"})}catch(__react_docgen_typescript_loader_error){}var _SuggestedRepositorie,_SuggestedRepositorie2,suggested_repo_list_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const suggested_repo_list_stories={title:"Design System/Organisms/SuggestedRepositoriesList"},data={avatar:"",prCount:23,repoName:"hot",issueCount:113,orgName:"open-sauced"},SuggestedRepositoriesListStory=()=>suggested_repo_list_stories_jsx(suggested_repo_list,{reposData:[data,data,data]});SuggestedRepositoriesListStory.displayName="SuggestedRepositoriesListStory",SuggestedRepositoriesListStory.parameters=_objectSpread(_objectSpread({},SuggestedRepositoriesListStory.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SuggestedRepositorie=SuggestedRepositoriesListStory.parameters)||void 0===_SuggestedRepositorie?void 0:_SuggestedRepositorie.docs),{},{source:_objectSpread({originalSource:"() => <SuggestedRepositoriesList reposData={[data, data, data]} />"},null===(_SuggestedRepositorie2=SuggestedRepositoriesListStory.parameters)||void 0===_SuggestedRepositorie2||null===(_SuggestedRepositorie2=_SuggestedRepositorie2.docs)||void 0===_SuggestedRepositorie2?void 0:_SuggestedRepositorie2.source)})});const __namedExportsOrder=["SuggestedRepositoriesListStory"]},"./components/atoms/ClientOnly/client-only.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>client_only});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var __jsx=react.createElement;function ClientOnly(_ref){let{children}=_ref;return function useHasMounted(){const{0:hasMounted,1:setHasMounted}=(0,react.useState)(!1);return(0,react.useEffect)((()=>{setHasMounted(!0)}),[]),hasMounted}()?__jsx(react.Fragment,null,children):null}const client_only=ClientOnly;try{ClientOnly.displayName="ClientOnly",ClientOnly.__docgenInfo={description:"",displayName:"ClientOnly",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ClientOnly/client-only.tsx#ClientOnly"]={docgenInfo:ClientOnly.__docgenInfo,name:"ClientOnly",path:"components/atoms/ClientOnly/client-only.tsx#ClientOnly"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/SkeletonLoader/skeleton-wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-loading-skeleton/dist/index.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{classNames,count=1,width,height,radius}=_ref;const skeletonArray=Array(count).fill(!0);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,skeletonArray.map(((_,index)=>height?__jsx("div",{className:classNames},__jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__.Z,{height,width,borderRadius:radius,count:1})):__jsx("div",{className:"react-loading-skeleton"}))))};try{skeletonwrapper.displayName="skeletonwrapper",skeletonwrapper.__docgenInfo={description:"",displayName:"skeletonwrapper",props:{classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}},count:{defaultValue:{value:"1"},description:"",name:"count",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/SkeletonLoader/skeleton-wrapper.tsx#skeletonwrapper"]={docgenInfo:skeletonwrapper.__docgenInfo,name:"skeletonwrapper",path:"components/atoms/SkeletonLoader/skeleton-wrapper.tsx#skeletonwrapper"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Typography/title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_wrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/Typography/wrapper.tsx");const _excluded=["children","level","weight","className"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Title=_ref=>{let{children,level=1,weight="medium",className}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);const TitleTag="h".concat(level);return __jsx(_wrapper__WEBPACK_IMPORTED_MODULE_1__.Z,null,__jsx(TitleTag,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(className,"font-".concat(weight))},props),children))};Title.displayName="Title";const __WEBPACK_DEFAULT_EXPORT__=Title;try{title.displayName="title",title.__docgenInfo={description:"",displayName:"title",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"}]}},weight:{defaultValue:{value:"medium"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"thin"'},{value:'"extralight"'},{value:'"normal"'},{value:'"medium"'},{value:'"semibold"'},{value:'"bold"'},{value:'"extrabold"'},{value:'"black"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/title.tsx#title"]={docgenInfo:title.__docgenInfo,name:"title",path:"components/atoms/Typography/title.tsx#title"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Typography/wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["children","className","size"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const TypographyWrapper=_ref=>{let{children,className,size="sm"}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("span",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("prose","prose-".concat(size),className)},props),children)};TypographyWrapper.displayName="TypographyWrapper";const __WEBPACK_DEFAULT_EXPORT__=TypographyWrapper;try{wrapper.displayName="wrapper",wrapper.__docgenInfo={description:"",displayName:"wrapper",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/wrapper.tsx#wrapper"]={docgenInfo:wrapper.__docgenInfo,name:"wrapper",path:"components/atoms/Typography/wrapper.tsx#wrapper"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react-loading-skeleton/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Skeleton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const SkeletonThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),defaultEnableAnimation=!0;function styleOptionsToCssProperties({baseColor,highlightColor,width,height,borderRadius,circle,direction,duration,enableAnimation=defaultEnableAnimation}){const style={};return"rtl"===direction&&(style["--animation-direction"]="reverse"),"number"==typeof duration&&(style["--animation-duration"]=`${duration}s`),enableAnimation||(style["--pseudo-element-display"]="none"),"string"!=typeof width&&"number"!=typeof width||(style.width=width),"string"!=typeof height&&"number"!=typeof height||(style.height=height),"string"!=typeof borderRadius&&"number"!=typeof borderRadius||(style.borderRadius=borderRadius),circle&&(style.borderRadius="50%"),void 0!==baseColor&&(style["--base-color"]=baseColor),void 0!==highlightColor&&(style["--highlight-color"]=highlightColor),style}function Skeleton({count=1,wrapper:Wrapper,className:customClassName,containerClassName,containerTestId,circle=!1,style:styleProp,...originalPropsStyleOptions}){var _a,_b,_c;const contextStyleOptions=react__WEBPACK_IMPORTED_MODULE_0__.useContext(SkeletonThemeContext),propsStyleOptions={...originalPropsStyleOptions};for(const[key,value]of Object.entries(originalPropsStyleOptions))void 0===value&&delete propsStyleOptions[key];const styleOptions={...contextStyleOptions,...propsStyleOptions,circle},style={...styleProp,...styleOptionsToCssProperties(styleOptions)};let className="react-loading-skeleton";customClassName&&(className+=` ${customClassName}`);const inline=null!==(_a=styleOptions.inline)&&void 0!==_a&&_a,elements=[],countCeil=Math.ceil(count);for(let i=0;i<countCeil;i++){let thisStyle=style;if(countCeil>count&&i===countCeil-1){const width=null!==(_b=thisStyle.width)&&void 0!==_b?_b:"100%",fractionalPart=count%1,fractionalWidth="number"==typeof width?width*fractionalPart:`calc(${width} * ${fractionalPart})`;thisStyle={...thisStyle,width:fractionalWidth}}const skeletonSpan=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className,style:thisStyle,key:i},"‌");inline?elements.push(skeletonSpan):elements.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:i},skeletonSpan,react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null)))}return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:containerClassName,"data-testid":containerTestId,"aria-live":"polite","aria-busy":null!==(_c=styleOptions.enableAnimation)&&void 0!==_c?_c:defaultEnableAnimation},Wrapper?elements.map(((el,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,{key:i},el))):elements)}}}]);