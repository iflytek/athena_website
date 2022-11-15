"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[3366],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var n=t(7294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(t),y=p,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||a;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function y(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6032:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(7462),p=(t(7294),t(3905));const a={sidebar_position:1,sidebar_label:"\u4e00\u3001\u5b89\u88c5aiges sdk"},i="aiges sdk \u5de5\u5177\u5e93",o={unversionedId:"\u52a0\u8f7d\u5668/Grpc_wrapper/Python\u5b89\u88c5sdk",id:"\u52a0\u8f7d\u5668/Grpc_wrapper/Python\u5b89\u88c5sdk",title:"aiges sdk \u5de5\u5177\u5e93",description:"\u80cc\u666f",source:"@site/docs/\u52a0\u8f7d\u5668/Grpc_wrapper/Python\u5b89\u88c5sdk.md",sourceDirName:"\u52a0\u8f7d\u5668/Grpc_wrapper",slug:"/\u52a0\u8f7d\u5668/Grpc_wrapper/Python\u5b89\u88c5sdk",permalink:"/athena_website/en/docs/current/\u52a0\u8f7d\u5668/Grpc_wrapper/Python\u5b89\u88c5sdk",draft:!1,editUrl:"https://github.com/iflytek/athena_website/tree/master/docs/\u52a0\u8f7d\u5668/Grpc_wrapper/Python\u5b89\u88c5sdk.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u4e00\u3001\u5b89\u88c5aiges sdk"},sidebar:"docSidebar",previous:{title:"GRPC-Python Wrapper",permalink:"/athena_website/en/docs/current/category/grpc-python-wrapper"},next:{title:"\u4e8c\u3001\u521b\u5efa\u9879\u76ee",permalink:"/athena_website/en/docs/current/\u52a0\u8f7d\u5668/Grpc_wrapper/\u521b\u5efa\u9879\u76ee"}},s={},l=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u4f7f\u7528pypi pip\u5b89\u88c5",id:"\u4f7f\u7528pypi-pip\u5b89\u88c5",level:2}],c={toc:l};function u(e){let{components:r,...t}=e;return(0,p.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"aiges-sdk-\u5de5\u5177\u5e93"},"aiges sdk \u5de5\u5177\u5e93"),(0,p.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"wrapper.py \u5728\u7ebf\u4e0a\u73af\u5883\u662f\u7531 c\u7a0b\u5e8f\u8c03\u7528\u901a\u8fc7pybind11\u8c03\u7528\u8d77\u6765\uff0c\u800c\u5199wrapper.py\u7684\u540c\u4e8b\u5e76\u4e0d\u719f\u6089\u8be5\u673a\u5236\uff0c\u6216\u8005\u8bf4\u96be\u4ee5\u5728\u672c\u5730\u8c03\u8bd5 wrapper.py\u7684\u8fd0\u884c")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u9700\u8981\u4e00\u4e2apython\u5e93\u6765\u5e2e\u52a9\u7528\u6237\u524d\u671f\u5feb\u901f\u5b9a\u4f4d wrapper.py\u7f16\u5199\u7684\u662f\u5426\u6709\u95ee\u9898\uff0c\u63d0\u524d\u53d1\u73b0\u95ee\u9898\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u9700\u8981\u901a\u8fc7wrapper.py\u7684\u5f00\u53d1\uff0c\u660e\u786e\u7528\u6237\u7684\u8f93\u5165\u3001\u8f93\u51fa\uff0c\u6781\u7b80\u5316python\u63a8\u7406\u5f00\u53d1"))),(0,p.kt)("h2",{id:"\u4f7f\u7528pypi-pip\u5b89\u88c5"},"\u4f7f\u7528pypi pip\u5b89\u88c5"),(0,p.kt)("p",null,"\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"pip"),"\u6307\u4ee4\u5b8c\u6210",(0,p.kt)("inlineCode",{parentName:"p"},"aiges"),"\u5e93\u7684\u5b89\u88c5\u548c\u66f4\u65b0"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"# \u5b89\u88c5aiges\npip install aiges -i https://pypi.python.org/simple\n# \u66f4\u65b0aiges\npip install --upgrade aiges -i https://pypi.python.org/simple\n")))}u.isMDXComponent=!0}}]);