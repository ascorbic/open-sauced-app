"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[185],{"./components/Workspaces/TrackedReposTable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EmpytState:()=>EmpytState,Loading:()=>Loading,WithRepos:()=>WithRepos,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TrackedReposTable_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),bi=__webpack_require__("./node_modules/react-icons/bi/index.mjs"),fa6=__webpack_require__("./node_modules/react-icons/fa6/index.mjs"),fa=__webpack_require__("./node_modules/react-icons/fa/index.mjs"),Button_button=__webpack_require__("./components/atoms/Button/button.tsx"),Table=__webpack_require__("./components/shared/Table.tsx"),avatar_hover_card=__webpack_require__("./components/atoms/Avatar/avatar-hover-card.tsx"),client_only=__webpack_require__("./components/atoms/ClientOnly/client-only.tsx"),skeleton_wrapper=__webpack_require__("./components/atoms/SkeletonLoader/skeleton-wrapper.tsx"),__jsx=react.createElement;const EmptyState=_ref=>{let{onAddRepos}=_ref;return __jsx("div",{className:"grid place-content-center gap-5 my-8"},__jsx(bi.mJ5,{className:"border rounded-lg p-2 w-11 h-11 mx-auto fill-slate-600 shadow-xs"}),__jsx("div",{className:"grid w-max max-w-sm mx-auto"},__jsx("span",{className:"text-center font-medium mb-2"},"Add repositories to track"),__jsx("p",{className:"text-sm text-slate-600 text-center"},"Search and select the repositories you want to track and get insights on your entire GitHub ecosystem")),__jsx(Button_button.Z,{variant:"primary",className:"w-max mx-auto",onClick:onAddRepos},__jsx(fa6.wEH,{className:"mr-2 text-lg"}),"Add repositories"))};EmptyState.displayName="EmptyState";const LoadingState=()=>__jsx(react.Fragment,null,Array.from({length:5},((_,index)=>__jsx(Table.SC,{key:index},__jsx(Table.pj,{colSpan:2},__jsx(skeleton_wrapper.Z,{key:index,height:22})))))),TrackedReposTable=_ref2=>{let{repositories,onAddRepos,onRemoveTrackedRepo,isLoading=!1}=_ref2;return __jsx("div",{className:"-z-10 grid gap-4"},__jsx("div",{className:"flex justify-between"},__jsx("div",null,__jsx("h2",{className:"flex gap-1 font-medium mb-2 text-md"},"Repositories Tracked"),__jsx("p",{className:"text-sm text-slate-600"},"Select the organizations or repositories you want to track")),__jsx(Button_button.Z,{variant:"primary",className:"w-max h-max",onClick:onAddRepos},__jsx(fa6.wEH,{className:"mr-2 text-lg"}),"Add repositories")),__jsx("div",{className:"border border-light-slate-7 rounded h-full"},__jsx(Table.iA,{className:"not-sr-only"},__jsx(Table.xD,null,__jsx(Table.SC,{className:" bg-light-slate-3"},__jsx(Table.ss,null,"Name"),__jsx(Table.ss,{className:"w-2"},__jsx("span",{className:"sr-only"},"Delete"))))),__jsx(client_only.Z,null,repositories.size>0||isLoading?__jsx("div",{className:"overflow-y-scroll h-60"},__jsx(Table.iA,null,__jsx(Table.xD,{className:"sr-only"},__jsx(Table.SC,{className:" bg-light-slate-3"},__jsx(Table.ss,null,"Name"),__jsx(Table.ss,{className:"w-4"},__jsx("span",{className:"sr-only"},"Delete")))),__jsx(Table.RM,null,isLoading?__jsx(LoadingState,null):__jsx(react.Fragment,null,[...repositories].map((_ref3=>{let[repo]=_ref3;const[owner]=repo.split("/");return __jsx(Table.SC,{key:repo},__jsx(Table.pj,{className:"flex gap-2 items-center w-full"},__jsx(avatar_hover_card.q,{contributor:owner,size:"xsmall"}),__jsx("span",null,repo)),__jsx(Table.pj,{className:"text-right"},__jsx("button",{onClick:onRemoveTrackedRepo,"data-repo":repo},__jsx(fa.AMf,{title:"delete",className:"text-light-slate-10"}))))})))))):__jsx(EmptyState,{onAddRepos}))))};TrackedReposTable.displayName="TrackedReposTable";try{EmptyState.displayName="EmptyState",EmptyState.__docgenInfo={description:"",displayName:"EmptyState",props:{onAddRepos:{defaultValue:null,description:"",name:"onAddRepos",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Workspaces/TrackedReposTable.tsx#EmptyState"]={docgenInfo:EmptyState.__docgenInfo,name:"EmptyState",path:"components/Workspaces/TrackedReposTable.tsx#EmptyState"})}catch(__react_docgen_typescript_loader_error){}try{TrackedReposTable.displayName="TrackedReposTable",TrackedReposTable.__docgenInfo={description:"",displayName:"TrackedReposTable",props:{repositories:{defaultValue:null,description:"",name:"repositories",required:!0,type:{name:"Map<string, boolean>"}},onAddRepos:{defaultValue:null,description:"",name:"onAddRepos",required:!0,type:{name:"() => void"}},onRemoveTrackedRepo:{defaultValue:null,description:"",name:"onRemoveTrackedRepo",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Workspaces/TrackedReposTable.tsx#TrackedReposTable"]={docgenInfo:TrackedReposTable.__docgenInfo,name:"TrackedReposTable",path:"components/Workspaces/TrackedReposTable.tsx#TrackedReposTable"})}catch(__react_docgen_typescript_loader_error){}var _WithRepos$parameters,_WithRepos$parameters2,_EmpytState$parameter,_EmpytState$parameter2,_Loading$parameters,_Loading$parameters2,console=__webpack_require__("./node_modules/console-browserify/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const TrackedReposTable_stories={title:"Components/Workspaces/TrackedReposTable",component:TrackedReposTable,args:{repositories:new Map,onAddRepos:()=>{console.log("add repos")},onRemoveTrackedRepo:()=>{console.log("add repos")}}},WithRepos={args:{repositories:new Map(Array(100).fill("").map(((_,i)=>["open-sauced/awesome-pizza-project-".concat(i),!0])))}},EmpytState={},Loading={args:{isLoading:!0}};WithRepos.parameters=_objectSpread(_objectSpread({},WithRepos.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithRepos$parameters=WithRepos.parameters)||void 0===_WithRepos$parameters?void 0:_WithRepos$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    repositories: new Map(Array(100).fill("").map((_, i) => [`open-sauced/awesome-pizza-project-${i}`, true]))\n  }\n}'},null===(_WithRepos$parameters2=WithRepos.parameters)||void 0===_WithRepos$parameters2||null===(_WithRepos$parameters2=_WithRepos$parameters2.docs)||void 0===_WithRepos$parameters2?void 0:_WithRepos$parameters2.source)})}),EmpytState.parameters=_objectSpread(_objectSpread({},EmpytState.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_EmpytState$parameter=EmpytState.parameters)||void 0===_EmpytState$parameter?void 0:_EmpytState$parameter.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_EmpytState$parameter2=EmpytState.parameters)||void 0===_EmpytState$parameter2||null===(_EmpytState$parameter2=_EmpytState$parameter2.docs)||void 0===_EmpytState$parameter2?void 0:_EmpytState$parameter2.source)})}),Loading.parameters=_objectSpread(_objectSpread({},Loading.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Loading$parameters=Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    isLoading: true\n  }\n}"},null===(_Loading$parameters2=Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2=_Loading$parameters2.docs)||void 0===_Loading$parameters2?void 0:_Loading$parameters2.source)})});const __namedExportsOrder=["WithRepos","EmpytState","Loading"]},"./components/atoms/Avatar/avatar-hover-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>Avatar,Z:()=>avatar_hover_card});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_module=__webpack_require__("./node_modules/@radix-ui/react-hover-card/dist/index.module.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_router=__webpack_require__("./node_modules/next/router.js"),useFetchUser=__webpack_require__("./lib/hooks/useFetchUser.ts"),useContributorPullRequestsChart=__webpack_require__("./lib/hooks/useContributorPullRequestsChart.ts"),github=__webpack_require__("./lib/utils/github.ts"),contributor_hover_card=__webpack_require__("./components/molecules/ContributorHoverCard/contributor-hover-card.tsx"),__jsx=react.createElement;const hover_card_wrapper=_ref=>{let{username,repositories}=_ref;const topic=(0,next_router.useRouter)().query.pageId,{data:contributor}=(0,useFetchUser.j)(username),{repoList}=(0,useContributorPullRequestsChart.u)(username,"*",repositories,"30",!0),profile={githubAvatar:(0,github.cc)(username,40),githubName:username,totalPR:repoList.length},{is_maintainer,first_opened_pr_at}=null!=contributor?contributor:{};return __jsx(react.Fragment,null,__jsx(contributor_hover_card.Z,{dateOfFirstPr:first_opened_pr_at,totalPR:profile.totalPR,githubAvatar:profile.githubAvatar,githubName:profile.githubName,repoList,topic,repositories,isMaintainer:!!is_maintainer}))};try{hovercardwrapper.displayName="hovercardwrapper",hovercardwrapper.__docgenInfo={description:"",displayName:"hovercardwrapper",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"]={docgenInfo:hovercardwrapper.__docgenInfo,name:"hovercardwrapper",path:"components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"})}catch(__react_docgen_typescript_loader_error){}var avatar_hover_card_jsx=react.createElement;const Avatar=_ref=>{let{contributor,size="large"}=_ref,width=500,height=500;switch(size){case"xsmall":width=24,height=24;break;case"small":width=45,height=45;break;case"medium":width=35,height=35}return avatar_hover_card_jsx(next_image.Z,{alt:contributor,className:"border rounded-full",height:width,src:(0,github.cc)(contributor,40),width:height})};Avatar.displayName="Avatar";const AvatarHoverCard=_ref2=>{let{contributor,repositories,size="large"}=_ref2;return avatar_hover_card_jsx(index_module.fC,null,avatar_hover_card_jsx(link_default(),{href:"/user/".concat(contributor),as:"/user/".concat(contributor)},avatar_hover_card_jsx(index_module.xz,null,avatar_hover_card_jsx(Avatar,{contributor,size}))),avatar_hover_card_jsx(index_module.h_,null,avatar_hover_card_jsx(index_module.VY,{sideOffset:5},avatar_hover_card_jsx(hover_card_wrapper,{username:contributor,repositories}))))};AvatarHoverCard.displayName="AvatarHoverCard";const avatar_hover_card=AvatarHoverCard;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"components/atoms/Avatar/avatar-hover-card.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}try{avatarhovercard.displayName="avatarhovercard",avatarhovercard.__docgenInfo={description:"",displayName:"avatarhovercard",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'}]}},repositories:{defaultValue:null,description:"",name:"repositories",required:!0,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"]={docgenInfo:avatarhovercard.__docgenInfo,name:"avatarhovercard",path:"components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children","loading","disabled","variant","showLoadingText","onClick","href"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,loading,disabled,variant,showLoadingText=!0,onClick,href}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const styles={primary:"bg-light-orange-9 text-light-orange-2 border-light-orange-9 hover:bg-light-orange-10 ".concat(disabled?"bg-light-orange-7 hover:bg-light-orange-7 pointer-events-none":""),default:"bg-white border-light-slate-8 text-light-slate-11 hover:bg-light-slate-2 ".concat(disabled?"bg-light-slate-4 text-light-slate-9 pointer-events-none":""),dark:"bg-dark-slate-6 border-dark-slate-8 text-light-orange-2 hover:bg-dark-slate-8 ".concat(disabled?"bg-dark-slate-4 text-dark-slate-9 pointer-events-none":""),outline:"bg-orange-50 border-orange-500 text-orange-600 hover:bg-orange-100 ".concat(disabled?"bg-light-orange-3 pointer-events-none text-light-orange-7 border-light-orange-5":""),link:"text-orange-600 hover:bg-orange-100 border-none ".concat(disabled?"text-orange-400 pointer-events-none":""),destructive:"border-dark-red-8 bg-dark-red-8 text-white hover:border-dark-red-7 hover:bg-dark-red-7",text:""},rootClass=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(styles[variant],disabled&&"cursor-not-allowed",disabled&&"destructive"!==variant&&"bg-light-orange-7 hover:bg-light-orange-7","items-center inline-flex text-sm font-semibold tracking-tight border py-2 px-4 rounded-md focus-visible:border-orange-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-200 whitespace-nowrap",className),content=loading?__jsx("div",null,__jsx("svg",{"aria-hidden":"true",role:"status",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("inline w-4 h-4 text-white animate-spin",showLoadingText?"mr-2":""),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})),showLoadingText&&__jsx("span",{className:"text-white"},"Loading...")):children;return href?__jsx("a",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,href,ref},props),content):__jsx("button",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,ref,onClick:disabled?void 0:onClick},props),content)}));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"link"'},{value:'"text"'},{value:'"default"'},{value:'"primary"'},{value:'"outline"'},{value:'"destructive"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},showLoadingText:{defaultValue:{value:"true"},description:"",name:"showLoadingText",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/atoms/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/ClientOnly/client-only.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>client_only});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var __jsx=react.createElement;function ClientOnly(_ref){let{children}=_ref;return function useHasMounted(){const{0:hasMounted,1:setHasMounted}=(0,react.useState)(!1);return(0,react.useEffect)((()=>{setHasMounted(!0)}),[]),hasMounted}()?__jsx(react.Fragment,null,children):null}const client_only=ClientOnly;try{ClientOnly.displayName="ClientOnly",ClientOnly.__docgenInfo={description:"",displayName:"ClientOnly",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ClientOnly/client-only.tsx#ClientOnly"]={docgenInfo:ClientOnly.__docgenInfo,name:"ClientOnly",path:"components/atoms/ClientOnly/client-only.tsx#ClientOnly"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/ContributorHoverCard/contributor-hover-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./lib/utils/date-utils.ts"),components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Badge/badge.tsx"),_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/molecules/CardProfile/card-profile.tsx"),_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/molecules/CardRepoList/card-repo-list.tsx"),_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/molecules/PullRequestTable/pull-request-table.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const ContributorHoverCard=_ref=>{let{repoList,githubName,totalPR,dateOfFirstPr,githubAvatar,repositories,isMaintainer}=_ref;const topic=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.pageId,calculatedDateFromToday=dateOfFirstPr?(0,lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__.wu)(new Date(parseInt(dateOfFirstPr).toString())):"-";return __jsx("div",{className:"w-[364px] bg-white gap-4 p-3 rounded-lg shadow-superlative flex flex-col"},__jsx("div",{className:"flex items-center justify-between"},__jsx(_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__.Z,{dateOfFirstPR:calculatedDateFromToday,githubAvatar,githubName,totalPRs:totalPR,isRoundedAvatar:!0}),isMaintainer&&__jsx(components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"maintainer"})),__jsx("div",null,__jsx(_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__.Z,{isHoverCard:!0,repositories,limit:5,contributor:githubName,topic})),__jsx("div",null,__jsx(_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__.Z,{repoList,limit:3})))};ContributorHoverCard.displayName="ContributorHoverCard";const __WEBPACK_DEFAULT_EXPORT__=ContributorHoverCard;try{contributorhovercard.displayName="contributorhovercard",contributorhovercard.__docgenInfo={description:"",displayName:"contributorhovercard",props:{repoList:{defaultValue:null,description:"",name:"repoList",required:!0,type:{name:"RepoList[]"}},githubAvatar:{defaultValue:null,description:"",name:"githubAvatar",required:!0,type:{name:"string"}},githubName:{defaultValue:null,description:"",name:"githubName",required:!0,type:{name:"string"}},totalPR:{defaultValue:null,description:"",name:"totalPR",required:!0,type:{name:"number"}},dateOfFirstPr:{defaultValue:null,description:"",name:"dateOfFirstPr",required:!0,type:{name:"string | undefined"}},topic:{defaultValue:null,description:"",name:"topic",required:!1,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}},isMaintainer:{defaultValue:null,description:"",name:"isMaintainer",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"]={docgenInfo:contributorhovercard.__docgenInfo,name:"contributorhovercard",path:"components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/shared/Table.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{RM:()=>TableBody,SC:()=>TableRow,iA:()=>Table,pj:()=>TableCell,ss:()=>TableHead,xD:()=>TableHeader});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const _excluded=["className"],_excluded2=["className"],_excluded3=["className"],_excluded4=["className"],_excluded5=["className"],_excluded6=["className"],_excluded7=["className"],_excluded8=["className"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Table=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("div",{className:"relative w-full overflow-auto"},__jsx("table",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("w-full caption-bottom text-sm",className)},props)))}));Table.displayName="Table";const TableHeader=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref2,ref)=>{let{className}=_ref2,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref2,_excluded2);return __jsx("thead",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("[&_tr]:border-b",className)},props))}));TableHeader.displayName="TableHeader";const TableBody=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref3,ref)=>{let{className}=_ref3,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref3,_excluded3);return __jsx("tbody",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("[&_tr:last-child]:border-0",className)},props))}));TableBody.displayName="TableBody";react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref4,ref)=>{let{className}=_ref4,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref4,_excluded4);return __jsx("tfoot",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",className)},props))})).displayName="TableFooter";const TableRow=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref5,ref)=>{let{className}=_ref5,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref5,_excluded5);return __jsx("tr",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",className)},props))}));TableRow.displayName="TableRow";const TableHead=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref6,ref)=>{let{className}=_ref6,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref6,_excluded6);return __jsx("th",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",className)},props))}));TableHead.displayName="TableHead";const TableCell=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref7,ref)=>{let{className}=_ref7,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref7,_excluded7);return __jsx("td",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("p-4 align-middle [&:has([role=checkbox])]:pr-0",className)},props))}));TableCell.displayName="TableCell";react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref8,ref)=>{let{className}=_ref8,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref8,_excluded8);return __jsx("caption",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("mt-4 text-sm text-muted-foreground",className)},props))})).displayName="TableCaption";try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"components/shared/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}}}]);