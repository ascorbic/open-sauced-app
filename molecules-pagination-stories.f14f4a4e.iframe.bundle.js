"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[5681],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}})},"./components/molecules/Pagination/pagination.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_icons_ri__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-icons/ri/index.esm.js"),components_molecules_PaginationGotoPage_pagination_goto_page__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/molecules/PaginationGotoPage/pagination-goto-page.tsx"),lib_utils_humanizeNumber__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/utils/humanizeNumber.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Pagination=function Pagination(_ref){var pages=_ref.pages,totalPage=_ref.totalPage,page=_ref.page,_ref$divisor=_ref.divisor,divisor=void 0===_ref$divisor||_ref$divisor,_ref$goToPage=_ref.goToPage,goToPage=void 0!==_ref$goToPage&&_ref$goToPage,_ref$pageSize=_ref.pageSize,pageSize=void 0===_ref$pageSize?10:_ref$pageSize,_ref$hasPreviousPage=_ref.hasPreviousPage,hasPreviousPage=void 0!==_ref$hasPreviousPage&&_ref$hasPreviousPage,_ref$hasNextPage=_ref.hasNextPage,hasNextPage=void 0===_ref$hasNextPage||_ref$hasNextPage,onPageChange=_ref.onPageChange,_ref$showTotalPages=_ref.showTotalPages,showTotalPages=void 0===_ref$showTotalPages||_ref$showTotalPages,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(page),selected=_useState[0],setSelected=_useState[1],handleSelected=function handleSelected(pageNumber){onPageChange(pageNumber)},middlePages=Array.from({length:Math.min(pages.length,pageSize)},(function(_,index){return selected<=Math.floor(pageSize/2)?index+1:selected>=pages.length-Math.floor(pageSize/2)?pages.length-pageSize+index+1:selected-Math.floor(pageSize/2)+index})).filter((function(page){return page>=1&&page<=pages.length}));return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"w-max flex gap-x-4 items-center"},__jsx("div",{className:"flex items-center gap-x-4"},__jsx("button",{className:"text-light-slate-9 disabled:text-light-slate-7",disabled:!hasPreviousPage,onClick:function onClick(){hasPreviousPage&&(!function handlePrev(){onPageChange(page-1)}(),setSelected(1===selected?1:selected-1))}},__jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.jW7,{className:"text-2xl md:text-lg"})),middlePages.map((function(page){return __jsx("button",{key:page,onClick:function onClick(){setSelected(page),handleSelected(page)},className:"".concat(selected===page&&"border !text-light-slate-12 shadow-paginate border-light-orange-10 bg-light-orange-2 shadow-search"," cursor-pointer text-light-slate-11 transition text-sm rounded-lg w-8 h-8 hover:bg-light-orange-2 hover:text-light-orange-10")},page)})),__jsx("button",{className:"text-light-slate-9 disabled:text-light-slate-7",disabled:!hasNextPage,onClick:function onClick(){hasNextPage&&(!function handleNext(){onPageChange(page+1)}(),setSelected(selected===pages[pages.length]?pages[pages.length]:selected+1))}},__jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.jfD,{className:"text-2xl md:text-lg"}))),showTotalPages&&__jsx("div",{className:"".concat(divisor&&"md:border-r-2 border-r-light-slate-6"," text-sm text-light-slate-9    py-1 md:pr-4")},"Total ",totalPage>999?(0,lib_utils_humanizeNumber__WEBPACK_IMPORTED_MODULE_3__.Z)(totalPage,null):totalPage,__jsx("span",{className:"md:invisible lg:visible"}," pages ")),goToPage&&__jsx("div",{className:"hidden md:block"},__jsx(components_molecules_PaginationGotoPage_pagination_goto_page__WEBPACK_IMPORTED_MODULE_1__.Z,{totalPage:totalPage,page:page,setPage:handleSelected,name:""}))))};Pagination.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{divisor:{defaultValue:{value:"true",computed:!1},required:!1,tsType:{name:"boolean"},description:""},goToPage:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},pageSize:{defaultValue:{value:"10",computed:!1},required:!1,tsType:{name:"number"},description:""},hasPreviousPage:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},hasNextPage:{defaultValue:{value:"true",computed:!1},required:!1,tsType:{name:"boolean"},description:""},showTotalPages:{defaultValue:{value:"true",computed:!1},required:!1,tsType:{name:"boolean"},description:""},pages:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},totalPage:{required:!0,tsType:{name:"number"},description:""},page:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{name:"page",type:{name:"number"}}],return:{name:"void"}}},description:""}}},__webpack_exports__.Z=Pagination;try{pagination.displayName="pagination",pagination.__docgenInfo={description:"",displayName:"pagination",props:{pages:{defaultValue:null,description:"",name:"pages",required:!0,type:{name:"number[]"}},totalPage:{defaultValue:null,description:"",name:"totalPage",required:!0,type:{name:"number"}},page:{defaultValue:null,description:"",name:"page",required:!0,type:{name:"number"}},pageSize:{defaultValue:{value:"10"},description:"",name:"pageSize",required:!1,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},divisor:{defaultValue:{value:"true"},description:"",name:"divisor",required:!1,type:{name:"boolean"}},goToPage:{defaultValue:{value:"false"},description:"",name:"goToPage",required:!1,type:{name:"boolean"}},hasNextPage:{defaultValue:{value:"true"},description:"",name:"hasNextPage",required:!1,type:{name:"boolean"}},hasPreviousPage:{defaultValue:{value:"false"},description:"",name:"hasPreviousPage",required:!1,type:{name:"boolean"}},showTotalPages:{defaultValue:{value:"true"},description:"",name:"showTotalPages",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/Pagination/pagination.tsx#pagination"]={docgenInfo:pagination.__docgenInfo,name:"pagination",path:"components/molecules/Pagination/pagination.tsx#pagination"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/PaginationGotoPage/pagination-goto-page.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,PaginationGotoPage=function PaginationGotoPage(_ref){var page=_ref.page,name=_ref.name,setPage=_ref.setPage,totalPage=_ref.totalPage,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(page),pageNumber=_useState[0],setPageNumber=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),value=_useState2[0],setValue=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setPageNumber(page)}),[page]),__jsx("form",{onSubmit:function onSubmit(e){return function handleGotoPage(e){e.preventDefault(),pageNumber!==page&&(Number(pageNumber)>totalPage||(setPage(pageNumber),setValue("")))}(e)},className:"flex   gap-x-3"},__jsx("input",{type:"text",name:name,id:name,value:value,placeholder:"".concat(pageNumber),onChange:function onChange(e){setPageNumber(e.target.value),setValue(e.target.value)},className:"min-w-4 w-10 text-center text-sm text-light-slate-10 focus:outline-none border rounded-lg py-1 px-2"}),__jsx("button",{className:"text-light-orange-10 text-sm px-2 py-1.5 rounded-lg hover:bg-orange-100 bg-light-orange-3",type:"submit"},"Go to page"))};PaginationGotoPage.displayName="PaginationGotoPage",PaginationGotoPage.__docgenInfo={description:"",methods:[],displayName:"PaginationGotoPage",props:{page:{required:!0,tsType:{name:"number"},description:""},name:{required:!0,tsType:{name:"string"},description:""},setPage:{required:!0,tsType:{name:"Function"},description:""},totalPage:{required:!0,tsType:{name:"number"},description:""}}},__webpack_exports__.Z=PaginationGotoPage;try{paginationgotopage.displayName="paginationgotopage",paginationgotopage.__docgenInfo={description:"",displayName:"paginationgotopage",props:{page:{defaultValue:null,description:"",name:"page",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},setPage:{defaultValue:null,description:"",name:"setPage",required:!0,type:{name:"Function"}},totalPage:{defaultValue:null,description:"",name:"totalPage",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/PaginationGotoPage/pagination-goto-page.tsx#paginationgotopage"]={docgenInfo:paginationgotopage.__docgenInfo,name:"paginationgotopage",path:"components/molecules/PaginationGotoPage/pagination-goto-page.tsx#paginationgotopage"})}catch(__react_docgen_typescript_loader_error){}},"./lib/utils/humanizeNumber.ts":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z=function humanizeNumber(num,type){var number="number"!=typeof num?parseFloat(num):num,abs=Math.abs(number),sign=Math.sign(number),commaConverted="".concat(abs>999?(sign*abs/1e3).toFixed(3).replace(".",","):sign*abs),abbreviated=abs>999?"".concat((sign*abs/1e3).toFixed(1),"k"):"".concat(sign*abs);return"comma"===type?commaConverted:abbreviated}},"./stories/molecules/pagination.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},NoDivisor:function(){return NoDivisor}});var _Default$parameters,_Default$parameters2,_NoDivisor$parameters,_NoDivisor$parameters2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),components_molecules_Pagination_pagination__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/molecules/Pagination/pagination.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_exports__.default={title:"Design System/Molecules/Pagination"};var PaginationTemplate=function PaginationTemplate(args){return __jsx(components_molecules_Pagination_pagination__WEBPACK_IMPORTED_MODULE_2__.Z,args)};PaginationTemplate.displayName="PaginationTemplate";var Default=PaginationTemplate.bind({}),NoDivisor=PaginationTemplate.bind({});Default.args={pages:[1,2,3,4,5,6,7,8,9,10],totalPage:2003,page:5},NoDivisor.args={pages:[1,2,3,4,5,6,7,8,9,10],totalPage:2003,page:5,divisor:!1},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Pagination {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),NoDivisor.parameters=_objectSpread(_objectSpread({},NoDivisor.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NoDivisor$parameters=NoDivisor.parameters)||void 0===_NoDivisor$parameters?void 0:_NoDivisor$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Pagination {...args} />"},null===(_NoDivisor$parameters2=NoDivisor.parameters)||void 0===_NoDivisor$parameters2||null===(_NoDivisor$parameters2=_NoDivisor$parameters2.docs)||void 0===_NoDivisor$parameters2?void 0:_NoDivisor$parameters2.source)})})},"./node_modules/react-icons/lib/esm/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{w_:function(){return GenIcon},Pd:function(){return IconContext}});var react=__webpack_require__("./node_modules/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className:className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}}}]);