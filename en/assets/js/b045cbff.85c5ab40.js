"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[6213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,sidebar_label:"Concept"},o="What is a Wrapper?, what is an Engine?",l={unversionedId:"\u5feb\u901f\u5f00\u59cb/\u6982\u5ff5",id:"\u5feb\u901f\u5f00\u59cb/\u6982\u5ff5",title:"What is a Wrapper?, what is an Engine?",description:"* Engine",source:"@site/docs/\u5feb\u901f\u5f00\u59cb/\u6982\u5ff5.md",sourceDirName:"\u5feb\u901f\u5f00\u59cb",slug:"/\u5feb\u901f\u5f00\u59cb/\u6982\u5ff5",permalink:"/athena_website/en/docs/\u5feb\u901f\u5f00\u59cb/\u6982\u5ff5",draft:!1,editUrl:"https://github.com/iflytek/athena_website/tree/master/docs/\u5feb\u901f\u5f00\u59cb/\u6982\u5ff5.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Concept"},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/athena_website/en/docs/category/quick-start"},next:{title:"Install Service With Helm Chart",permalink:"/athena_website/en/docs/\u5feb\u901f\u5f00\u59cb/\u4ecehelm\u5b89\u88c5"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-a-wrapper-what-is-an-engine"},"What is a Wrapper?, what is an Engine?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Engine")),(0,r.kt)("p",null,"Engine refers to a package that has been semi-engineered and provides an interface to execute AI algorithms based on the model."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AI capability")),(0,r.kt)("p",null,"AI capability refers to the AI engine that has been completed as a cloud service. The AI capability user can directly integrate and invoke the API and the generated interface document."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Engine Loader")),(0,r.kt)("p",null,"The loader is the core component in the engine hosting platform. By integrating the loader, the engine and various cloud native components are connected to realize the purpose of cloud service."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges"},"Loader code")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decoder (loader plugin)")),(0,r.kt)("p",null,"The decoder is a collection of loaders, deep learning algorithm computing modules, and middleware connecting the loader and computing modules. The middleware requires AI algorithm engine developers to develop and implement interfaces."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Interface Protocol")),(0,r.kt)("p",null,"The interface protocol is the definition of AI capability, which is a collection of the functional characteristics, input and output parameters, and error codes of the AI engine."),(0,r.kt)("p",null,"Summarize:"),(0,r.kt)("p",null,"The engine loader realizes service by loading different models or engine services with the loader plug-in. The engine or model loaded by the engine loader is the core of this AI inference service framework."),(0,r.kt)("p",null,"Combined with the peripheral governance methods of the unified AI inference service framework, such as load balancing, distribution strategy, data processing, etc., to achieve unified management of various AI capabilities as a service."),(0,r.kt)("h1",{id:"loader-language"},"Loader Language"),(0,r.kt)("p",null,"The main process of the core loader is a Loader implemented by Go, that is, the project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iflytek/aiges"},"aiges")),(0,r.kt)("h1",{id:"what-is-a-plugin"},"What is a plugin"),(0,r.kt)("p",null,"That is, the layer between the loader and the final engine or model is the plug-in layer."),(0,r.kt)("h1",{id:"plugin-writing-language"},"Plugin writing language"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"C/C++\n","[See]","(",(0,r.kt)("a",{parentName:"p",href:"https://iflytek.github.io/athena_website/docs/%E5%8A%A0%E8%BD%BD%E5%99%A8/C%E3%80%81C++%E6%8F%92"},"https://iflytek.github.io/athena_website/docs/%E5%8A%A0%E8%BD%BD%E5%99%A8/C%E3%80%81C++%E6%8F%92")," %E4%BB%B6)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Python (essentially implements a C/C++ so, which implements the interface required by the above C/C++, but at the same time exposes the python language programming interface to the user)"))),(0,r.kt)("p",null,"[See details]","(",(0,r.kt)("a",{parentName:"p",href:"https://iflytek.github.io/athena_website/docs/%E5%8A%A0%E8%BD%BD%E5%99%A8/Python%E6%8F%92%E4%BB%25"},"https://iflytek.github.io/athena_website/docs/%E5%8A%A0%E8%BD%BD%E5%99%A8/Python%E6%8F%92%E4%BB%")," B6)"))}u.isMDXComponent=!0}}]);