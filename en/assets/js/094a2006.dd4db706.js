"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[8858],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),y=a,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1,sidebar_label:"1\u3001Install Aiges SDK"},o="Aiges SDK",p={unversionedId:"\u52a0\u8f7d\u5668/\u521b\u5efawrapper/Python\u5b89\u88c5sdk",id:"version-2.2.0/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/Python\u5b89\u88c5sdk",title:"Aiges SDK",description:"background",source:"@site/versioned_docs/version-2.2.0/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/Python\u5b89\u88c5sdk.md",sourceDirName:"\u52a0\u8f7d\u5668/\u521b\u5efawrapper",slug:"/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/Python\u5b89\u88c5sdk",permalink:"/athena_website/en/docs/2.2.0/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/Python\u5b89\u88c5sdk",draft:!1,editUrl:"https://github.com/iflytek/athena_website/tree/master/versioned_docs/version-2.2.0/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/Python\u5b89\u88c5sdk.md",tags:[],version:"2.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"1\u3001Install Aiges SDK"},sidebar:"docSidebar",previous:{title:"Create Wrapper",permalink:"/athena_website/en/docs/2.2.0/category/create-wrapper"},next:{title:"2\u3001Create Project",permalink:"/athena_website/en/docs/2.2.0/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/\u521b\u5efa\u9879\u76ee"}},l={},s=[{value:"background",id:"background",level:2},{value:"Install aiges",id:"install-aiges",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aiges-sdk"},"Aiges SDK"),(0,a.kt)("h2",{id:"background"},"background"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The online environment of wrapper.py is called by the c program through pybind11, and the colleagues who wrote wrapper.py are not familiar with this mechanism, or it is difficult to debug the operation of wrapper.py locally.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A python library is needed to help users quickly locate whether there is a problem with wrapper.py in the early stage, find problems in advance, and improve development efficiency.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"It is necessary to clarify the user's input and output through the development of wrapper.py, which greatly simplifies the python inference development process."))),(0,a.kt)("h2",{id:"install-aiges"},"Install aiges"),(0,a.kt)("p",null,"Install and update the ",(0,a.kt)("inlineCode",{parentName:"p"},"aiges")," library using the ",(0,a.kt)("inlineCode",{parentName:"p"},"pip")," command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"````python\n# install aiges\npip install aiges -i https://pypi.python.org/simple\n# update aiges\npip install --upgrade aiges -i https://pypi.python.org/simple\n")))}d.isMDXComponent=!0}}]);