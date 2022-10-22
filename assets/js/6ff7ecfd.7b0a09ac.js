"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[7574],{3905:(t,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>g});var e=a(7294);function l(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function r(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function i(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function d(t,n){if(null==t)return{};var a,e,l=function(t,n){if(null==t)return{};var a,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||(l[a]=t[a]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=e.createContext({}),u=function(t){var n=e.useContext(p),a=n;return t&&(a="function"==typeof t?t(n):i(i({},n),t)),a},m=function(t){var n=u(t.components);return e.createElement(p.Provider,{value:n},t.children)},o={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},k=e.forwardRef((function(t,n){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=u(a),g=l,s=k["".concat(p,".").concat(g)]||k[g]||o[g]||r;return a?e.createElement(s,i(i({ref:n},m),{},{components:a})):e.createElement(s,i({ref:n},m))}));function g(t,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=k;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var u=2;u<r;u++)i[u]=a[u];return e.createElement.apply(null,i)}return e.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8452:(t,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var e=a(7462),l=(a(7294),a(3905));const r={sidebar_position:4},i=void 0,d={unversionedId:"\u6807\u51c6\u534f\u8bae",id:"\u6807\u51c6\u534f\u8bae",title:"\u6807\u51c6\u534f\u8bae",description:"ASE API\u534f\u8bae",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/\u6807\u51c6\u534f\u8bae.md",sourceDirName:".",slug:"/\u6807\u51c6\u534f\u8bae",permalink:"/athena_website/docs/next/\u6807\u51c6\u534f\u8bae",draft:!1,editUrl:"https://github.com/iflytek/athena_website/tree/master/docs/\u6807\u51c6\u534f\u8bae.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docSidebar",previous:{title:"\u4ece\u57fa\u7840\u955c\u50cf\u6784\u5efa\u4e1a\u52a1\u955c\u50cf",permalink:"/athena_website/docs/next/\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b/\u4ece\u57fa\u7840\u955c\u50cf\u6784\u5efa"}},p={},u=[{value:"ASE API\u534f\u8bae",id:"ase-api\u534f\u8bae",level:2},{value:"1. \u6574\u4f53\u4f53\u8bf4\u660e",id:"1-\u6574\u4f53\u4f53\u8bf4\u660e",level:3},{value:"2 \u9762\u5411\u5e94\u7528\u5f00\u53d1\u8005\u534f\u8bae",id:"2-\u9762\u5411\u5e94\u7528\u5f00\u53d1\u8005\u534f\u8bae",level:3},{value:"2.1 \u5143\u6570\u636e",id:"21-\u5143\u6570\u636e",level:4},{value:"2.1.1 \u6587\u672c\u63cf\u8ff0",id:"211-\u6587\u672c\u63cf\u8ff0",level:5},{value:"2.1.2 \u97f3\u9891\u63cf\u8ff0",id:"212-\u97f3\u9891\u63cf\u8ff0",level:5},{value:"2.1.2 \u5f85\u5b8c\u5584",id:"212-\u5f85\u5b8c\u5584",level:5},{value:"2.2  \u8bf7\u6c42\u534f\u8bae\u8bf4\u660e",id:"22--\u8bf7\u6c42\u534f\u8bae\u8bf4\u660e",level:4},{value:"2.2.1 \u5355\u80fd\u529b\u5355\u6570\u636e\u4e3e\u4f8b\u5982",id:"221-\u5355\u80fd\u529b\u5355\u6570\u636e\u4e3e\u4f8b\u5982",level:5},{value:"2.2.2  \u5355\u80fd\u529b\u5355\u591a\u6570\u636e\u4e3e\u4f8b",id:"222--\u5355\u80fd\u529b\u5355\u591a\u6570\u636e\u4e3e\u4f8b",level:5},{value:"2.2.3 \u591a\u6570\u636e\u8303\u56f4\u7279\u6027\u65f6\u7684\u63cf\u8ff0",id:"223-\u591a\u6570\u636e\u8303\u56f4\u7279\u6027\u65f6\u7684\u63cf\u8ff0",level:5},{value:"2.2.4 \u591a\u80fd\u529b\u591a\u6570\u636e\u63cf\u8ff0",id:"224-\u591a\u80fd\u529b\u591a\u6570\u636e\u63cf\u8ff0",level:5},{value:"2.2.5  \u6d41\u5f0f\u573a\u666f\u4e0b\uff0c\u540e\u7eed\u6570\u636e\u5305\u63cf\u8ff0",id:"225--\u6d41\u5f0f\u573a\u666f\u4e0b\u540e\u7eed\u6570\u636e\u5305\u63cf\u8ff0",level:5},{value:"2.3 \u8fd4\u56de\u534f\u8bae\u8bf4\u660e",id:"23-\u8fd4\u56de\u534f\u8bae\u8bf4\u660e",level:4},{value:"2.3.1 \u5355\u8f93\u51fa\u63cf\u8ff0",id:"231-\u5355\u8f93\u51fa\u63cf\u8ff0",level:5},{value:"2.3.2 \u591a\u8f93\u51fa\u63cf\u8ff0",id:"232-\u591a\u8f93\u51fa\u63cf\u8ff0",level:5},{value:"2.4 \u7cfb\u7edf\u53c2\u6570\u7684\u7ea6\u675f",id:"24-\u7cfb\u7edf\u53c2\u6570\u7684\u7ea6\u675f",level:4},{value:"2.4.1 header\u5b57\u6bb5",id:"241-header\u5b57\u6bb5",level:5},{value:"3.1 \u8def\u7531\u4fe1\u606f",id:"31-\u8def\u7531\u4fe1\u606f",level:3},{value:"3.1 \u5143\u6570\u636e\u8c03\u6574",id:"31-\u5143\u6570\u636e\u8c03\u6574",level:4}],m={toc:u};function o(t){let{components:n,...a}=t;return(0,l.kt)("wrapper",(0,e.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"ase-api\u534f\u8bae"},"ASE API\u534f\u8bae"),(0,l.kt)("h3",{id:"1-\u6574\u4f53\u4f53\u8bf4\u660e"},"1. \u6574\u4f53\u4f53\u8bf4\u660e"),(0,l.kt)("p",null,"\u672c\u534f\u8bae\u9762\u5411AthenaServing \u8fdb\u884c\u4e86\u9762\u5411\u5e94\u7528\u8005\u5f00\u53d1\u3001\u5185\u90e8\u4e1a\u52a1\u534f\u8bae\u8fdb\u884c\u4e86\u7ea6\u675f\u548c\u5b9a\u4e49"),(0,l.kt)("h3",{id:"2-\u9762\u5411\u5e94\u7528\u5f00\u53d1\u8005\u534f\u8bae"},"2 \u9762\u5411\u5e94\u7528\u5f00\u53d1\u8005\u534f\u8bae"),(0,l.kt)("p",null,"\u534f\u8bae\u91c7\u7528json\u8fdb\u884c\u63cf\u8ff0\uff0c"),(0,l.kt)("h4",{id:"21-\u5143\u6570\u636e"},"2.1 \u5143\u6570\u636e"),(0,l.kt)("p",null,"\u7531\u4e8eAI\u7684\u670d\u52a1\u8bf7\u6c42\u4e00\u822c\u662f\u7528\u4e8e\u6570\u636e\u8ba1\u7b97\u4e0e\u5904\u7406\uff0c\u5728\u4ea4\u4e92\u7684\u5f80\u6765\u534f\u8bae\u4e2d\uff0c\u9700\u8981\u643a\u5e26\u4e00\u4e9b\u57fa\u7840\u6570\u636e\u3002\u672c\u534f\u8bae\u5c06\u6570\u636e\u8fdb\u884c\u62bd\u8c61\u7ea6\u675f\u3002\u4e3a\u63d0\u9ad8\u9002\u914d\u6027\uff0c\u672c\u534f\u8bae\u5bf9\u5143\u6570\u636e\u8fdb\u884c\u4e86\u679a\u4e3e\u5b9a\u4e49\u3002\u5143\u6570\u636e\u7ed3\u6784\u4e2d\u5b9a\u4e49\u4e86\u5bf9\u5e94\u6570\u636e\u7c7b\u578b\u57fa\u672c\u7684\u63cf\u8ff0\u8fdb\u884c\u4e86\u5b9a\u4e49\uff0c\u4e5f\u5141\u8bb8\u589e\u52a0K-V\u5355\u5c42\u7ed3\u6784\u7684\u7684\u63cf\u8ff0\u3002\u7528\u6237\u5728\u5b9a\u4e49\u6570\u636e\u65f6\uff0c\u9009\u62e9\u6570\u636e\u7c7b\u578b\u540e\uff0c\u7cfb\u7edf\u4f1a\u4e3b\u52a8\u63d0\u4f9b\u7ed3\u6784\u5b57\u6bb5\u3002"),(0,l.kt)("h5",{id:"211-\u6587\u672c\u63cf\u8ff0"},"2.1.1 \u6587\u672c\u63cf\u8ff0"),(0,l.kt)("p",null,"\u7ed3\u6784\u4e3e\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "encoding":"utf8", \n    "status":0,\n    "seq": 1\uff0c\n    "compress":"gzip",\n    "custom1":"zz",\n    "text":"hello word"\n} \n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encoding"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6587\u672c\u7f16\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u503c\u8303\u56f4\u53ef\u679a\u4e3e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u503c\u8303\u56f4\u4e3a0\uff08\u5f00\u59cb\uff09\u30011\uff08\u7ee7\u7eed\uff09\u30012\uff08\u7ed3\u675f\uff09\u30013\uff08\u4e00\u6b21\u4f20\u5b8c\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6587\u672c\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3a\u6587\u672c\u6570\u636e\uff0cbase64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"seq"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e8f\u53f7"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6807\u660e\u6570\u636e\u4e3a\u7b2c\u51e0\u5757\uff0c\u53ef\u9009")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"custom1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u81ea\u5b9a\u4e49\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"string\u6216 int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u81ea\u5b9a\u4e49\uff0c\u4e00\u7ea7\u53c2\u6570")))),(0,l.kt)("h5",{id:"212-\u97f3\u9891\u63cf\u8ff0"},"2.1.2 \u97f3\u9891\u63cf\u8ff0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "status":0\uff0c\n    "sample_rate":16000,\n    "channels":1,\n    "bit_depth":16,\n    "encoding":"opus",\n    "seq": 1,\n    "custom1":"zz",\n    "audio":"xxxxxxxxxxxxxxxxxxxxxxxxxx" # \u97f3\u9891\u6570\u636e\n} \n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encoding"),(0,l.kt)("td",{parentName:"tr",align:null},"\u97f3\u9891\u7f16\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u503c\u8303\u56f4\u53ef\u679a\u4e3e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u503c\u8303\u56f4\u4e3a0\uff08\u5f00\u59cb\uff09\u30011\uff08\u7ee7\u7eed\uff09\u30012\uff08\u7ed3\u675f\uff09\u30013\uff08\u4e00\u6b21\u4f20\u5b8c\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"audio"),(0,l.kt)("td",{parentName:"tr",align:null},"\u97f3\u9891\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3a\u6587\u672c\u6570\u636e\uff0cbase64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sample_rate"),(0,l.kt)("td",{parentName:"tr",align:null},"\u91c7\u6837\u7387"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u97f3\u9891\u91c7\u6837\u7387\uff0c\u53ef\u679a\u4e3e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channels"),(0,l.kt)("td",{parentName:"tr",align:null},"\u58f0\u9053\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u58f0\u9053\u6570\uff0c\u53ef\u679a\u4e3e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bit_depth"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f4d\u6df1"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5355\u4f4dbit\uff0c\u53ef\u679a\u4e3e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"seq"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e8f\u53f7"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6807\u660e\u6570\u636e\u4e3a\u7b2c\u51e0\u5757\uff0c\u53ef\u9009")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"custom1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u81ea\u5b9a\u4e49\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"string\u6216 int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u81ea\u5b9a\u4e49\uff0c\u4e00\u7ea7\u53c2\u6570")))),(0,l.kt)("h5",{id:"212-\u5f85\u5b8c\u5584"},"2.1.2 \u5f85\u5b8c\u5584"),(0,l.kt)("p",null,"1 \u56fe\u50cf\n2 \u97f3\u9891\n3 \u5176\u4ed6\u4e8c\u8fdb\u5236\u6570\u636e\u7b49"),(0,l.kt)("h4",{id:"22--\u8bf7\u6c42\u534f\u8bae\u8bf4\u660e"},"2.2  \u8bf7\u6c42\u534f\u8bae\u8bf4\u660e"),(0,l.kt)("p",null,"\u5206\u4e3a\u4e09\u90e8\u5206\uff1a\u5e73\u53f0\u53c2\u6570\u3001\u80fd\u529b\u53c2\u6570\u3001\u4f20\u8f93\u6570\u636e\u3002\u8bf7\u6c42\u534f\u8bae\u4e3e\u6a21\u677f\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n     "header":{},\n     "parameter":{\n         "service_iat":{\n              "accept_1":{\n            }\n         }\n     }, \n     "payload":{\n        "service_iat":{\n        }\n     }\n}\n')),(0,l.kt)("p",null,"\u5b57\u6bb5\u8bf4\u660e\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u63a7\u5236\u5e73\u53f0\u7279\u6027\u7684\u53c2\u6570\uff0c\u5982appid\u7b49\uff0c\u6b64\u7ed3\u6784\u53ea\u6709\u4e00\u4e2a\u5c42\u7ea7\uff0c\u5f00\u53d1\u8005\u4e0d\u53ef\u4fee\u6539\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parameter"),(0,l.kt)("td",{parentName:"tr",align:null},"\u80fd\u529b\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u63a7\u5236AI\u5f15\u64ce\u7279\u6027\u5f00\u5173\u7684\u3002\u8be5\u6bb5\u5c06\u4f1a\u88ab\u76f4\u63a5\u900f\u4f20\u81f3\u5f15\u64ce,\u591a\u5c42\u7ea7\u7ed3\u6784,\u7ed3\u6784\u786e\u5b9a,\u672a\u679a\u4e3e\u7ed3\u6784\u4e3a\u4e00\u7ea7\u7ed3\u6784")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payload"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u643a\u5e26\u8bf7\u6c42\u7684\u6570\u636e\uff0c\u591a\u5c42\u7ea7\u7ed3\u6784,\u7ed3\u6784\u786e\u5b9a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accept_1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u81ea\u5b9a\u4e49,\u7528\u4e8e\u63cf\u8ff0\u8fd4\u56de\u7ed3\u679c\u7684\u7f16\u7801\\\u6570\u636e\u683c\u5f0f\u7684\u53c2\u6570,\u6b64\u7ed3\u6784\u7531\u5143\u6570\u636e\u4e2d\u5b9a\u4e49\u7684\u5c5e\u6027\u4e2d\u5b9a\u4e49\u7684")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service_iat"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u81ea\u5b9a\u4e49, \u53ef\u9ed8\u8ba4\u4e0eaccept_1\u4e00\u81f4\u3002 \u7528\u4e8e\u643a\u5e26\u8bf7\u6c42\u7684\u6570\u636e\uff0c\u591a\u5c42\u7ea7\u7ed3\u6784,\u7ed3\u6784\u786e\u5b9a")))),(0,l.kt)("h5",{id:"221-\u5355\u80fd\u529b\u5355\u6570\u636e\u4e3e\u4f8b\u5982"},"2.2.1 \u5355\u80fd\u529b\u5355\u6570\u636e\u4e3e\u4f8b\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "header":{\n    "appid":"1234",\n    "uid":"d233"\n    },\n    "parameter":{\n        "service_iat":{\n           "language": "zh_cn",\n           "domain":"iat",\n           "accent": "mandarin"\n           }\n    }, \n    "payload":{\n        "service_iat":{\n        "status":0,\n        "format":"audio/L16;rate=16000",\n        "encoding":"raw",\n        "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n        }\n     }\n } \n')),(0,l.kt)("h5",{id:"222--\u5355\u80fd\u529b\u5355\u591a\u6570\u636e\u4e3e\u4f8b"},"2.2.2  \u5355\u80fd\u529b\u5355\u591a\u6570\u636e\u4e3e\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'    {\n    "header":{\n        "appid":"1234",\n        "uid":"1234"\n    },\n\n    "parameter":{\n      "service_iat":{\n           "language": "zh_cn",\n           "domain":"iat",\n           "accent": "mandarin"\n           }\n    },\n\n    "payload":{\n        "data_1":{\n            "status":0,\n            "format":"audio/L16;rate=16000",\n            "encoding":"raw",\n              "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n         },\n         "data_2":{\n            "status":0,\n            "format":"audio/L16;rate=16000",\n            "encoding":"raw",\n               "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n     }\n}\n} \n')),(0,l.kt)("p",null,"\u7ed3\u6784\u8bf4\u660e\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6b64\u65f6payload\u4e3a\u591a\u7ea7\u7ed3\u6784"),(0,l.kt)("li",{parentName:"ol"},"\u591a\u6570\u636e\u60c5\u51b5\u60f3\uff0cpayload\u901a\u8fc7\u4e0d\u540c\u7684\u6570\u636eID\u4f5c\u4e3akey\u6765\u63cf\u8ff0\uff0c\u5982\u793a\u4f8b\u4e2d\u7684data_1\u3001data_2"),(0,l.kt)("li",{parentName:"ol"},"\u6570\u636eID\u4e3a\u7528\u6237\u81ea\u5b9a\u4e49")),(0,l.kt)("h5",{id:"223-\u591a\u6570\u636e\u8303\u56f4\u7279\u6027\u65f6\u7684\u63cf\u8ff0"},"2.2.3 \u591a\u6570\u636e\u8303\u56f4\u7279\u6027\u65f6\u7684\u63cf\u8ff0"),(0,l.kt)("p",null,"\u9488\u5bf9\u5b58\u5728\u591a\u4e2a\u6570\u636e\u6d41\u8fd4\u56de\u7684\uff0c\u9700\u8981\u5728\u8f93\u5165\u53c2\u6570\uff08parameter\u6bb5\uff09\u4e2d\u6307\u5b9a\u591a\u4e2a\u6570\u636e\u7279\u6027\u7684\u63cf\u8ff0\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"parameter":{\n      "service_iat":{\n           "language": "zh_cn",\n           "domain":"iat",\n           "accent": "mandarin",\n           "accept_1":{\n            "format":"audio/L16;rate=16000",\n            "encoding":"raw"\n            },\n           "accept_2":{\n            "format":"audio/L16;rate=16000",\n            "encoding":"raw"\n           }\n       \uff5d\n\n    } \n')),(0,l.kt)("p",null,"\u7ed3\u6784\u8bf4\u660e\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6b64\u65f6parameter\u4e3a\u591a\u7ea7\u7ed3\u6784"),(0,l.kt)("li",{parentName:"ol"},"\u591a\u6570\u636e\u60c5\u51b5\u4e0b\uff0cparameter\u901a\u8fc7\u4e0d\u540c\u7684ID\u4f5c\u4e3akey\u6765\u5bf9\u4e0d\u540c\u7684\u7ed3\u679c\u8fdb\u884c\u63cf\u8ff0\uff0c\u5982\u793a\u4f8b\u4e2d\u7684accept_1\u3001accept_2"),(0,l.kt)("li",{parentName:"ol"},"Accept ID\u4e3a\u7528\u6237\u81ea\u5b9a\u4e49")),(0,l.kt)("h5",{id:"224-\u591a\u80fd\u529b\u591a\u6570\u636e\u63cf\u8ff0"},"2.2.4 \u591a\u80fd\u529b\u591a\u6570\u636e\u63cf\u8ff0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'    {\n        "header":{\n            "appid":"1234",\n            "uid":"1234"\n        },\n        "parameter":{\n            "service_1":{\n\n                   "language": "zh_cn",\n                   "domain":"iat",\n                   "accent": "mandarin"\n            },\n            "service_2":{\n\n                   "language": "zh_cn",\n                   "domain":"iat",\n                   "accent": "mandarin"\n            }\n        },\n\n        "payload":{\n            "service_1_data_1":{\n                "status":0,\n                "format":"audio/L16;rate=16000",\n                "encoding":"raw",\n                 "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n                  },\n\n             "service_2_data_1":{\n                "status":0,\n                "format":"audio/L16;rate=16000",\n                "encoding":"raw",\n                 "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n              },\n             "service_2_data_2":{\n                "status":0,\n                "format":"audio/L16;rate=16000",\n                "encoding":"raw",\n                "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n                 }\n        }\n    } \n')),(0,l.kt)("p",null,"\u7ed3\u6784\u8bf4\u660e\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6b64\u65f6parameter\u4e3a\u591a\u7ea7\u7ed3\u6784\uff0c\u6b64\u65f6payload\u4e3a\u591a\u7ea7\u7ed3\u6784"),(0,l.kt)("li",{parentName:"ol"},"\u591a\u6570\u636e\u60c5\u51b5\u4e0b\uff0cparameter\u901a\u8fc7\u4e0d\u540c\u7684\u80fd\u529bID\u4f5c\u4e3akey\u6765\u5206\u522b\u63cf\u8ff0\u4e0d\u540c\u80fd\u529b\u7684\u7279\u6027\u63cf\u8ff0\uff0cservice_1\u3001service_2"),(0,l.kt)("li",{parentName:"ol"},"\u80fd\u529bID\u4e3a\u7528\u6237\u81ea\u5b9a\u4e49"),(0,l.kt)("li",{parentName:"ol"},"\u591a\u6570\u636e\u60c5\u51b5\u60f3\uff0cpayload\u901a\u8fc7\u4e0d\u540c\u7684\u6570\u636eID\u4f5c\u4e3akey\u6765\u63cf\u8ff0\uff0c\u5982\u793a\u4f8b\u4e2d\u7684service_1_data_1\u3001service_2_data_1\u3001service_2_data_2"),(0,l.kt)("li",{parentName:"ol"},"\u6b64\u573a\u666f\u4e0b\u6570\u636eID\u4e3a\u7f16\u6392\u5e73\u53f0\u7684\u501f\u53e3\u751f\u6210")),(0,l.kt)("h5",{id:"225--\u6d41\u5f0f\u573a\u666f\u4e0b\u540e\u7eed\u6570\u636e\u5305\u63cf\u8ff0"},"2.2.5  \u6d41\u5f0f\u573a\u666f\u4e0b\uff0c\u540e\u7eed\u6570\u636e\u5305\u63cf\u8ff0"),(0,l.kt)("p",null,"header\u3001parameter\u4e3a\u53ef\u9009\uff0c\u4e00\u822c\u60c5\u51b5\u4e0d\u643a\u5e26\u3002\u4ee5\u591a\u6570\u636e\u4e3a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},' {\n    "header":{\n         "sid":"iat000704fa@dx16ade44e4d87a1c802", #\u53ef\u9009  \n        },\n    \n    "payload":{\n        "data_1":{\n            "status":1,\n            "format":"audio/L16;rate=16000",\n            "encoding":"raw",\n                    "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n         },\n\n        "data_2":{\n            "status":1,\n            "format":"audio/L16;rate=16000",\n            "encoding":"raw",\n                    "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n         }\n } \n')),(0,l.kt)("p",null,"\u5b57\u6bb5\u8bf4\u660e\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sid"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u8fd4\u56de\u4f1a\u8bdd\u53e5\u67c4"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6d88\u606f\u4e2d\u643a\u5e26\u7684\u4f1a\u8bdd\u53e5\u67c4\uff0c\u53ef\u9009")))),(0,l.kt)("h4",{id:"23-\u8fd4\u56de\u534f\u8bae\u8bf4\u660e"},"2.3 \u8fd4\u56de\u534f\u8bae\u8bf4\u660e"),(0,l.kt)("p",null,"\u8fd4\u56de\u534f\u8bae\u5b9a\u4e49\u4e86\u4f1a\u8bdd\u7684\u8ba1\u7b97\u72b6\u6001\uff0c\u4ee5\u53ca\u6570\u636e\u6bb5"),(0,l.kt)("h5",{id:"231-\u5355\u8f93\u51fa\u63cf\u8ff0"},"2.3.1 \u5355\u8f93\u51fa\u63cf\u8ff0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "header":{\n     "code": 0, \n     "message": "success", \n     "sid": "iat000704fa@dx16ade44e4d87a1c802"\n\n},\n # \u6b64\u7ed3\u6784\u4e3a\u5143\u6570\u636e\u7ed3\u6784\uff08data\uff09\uff0c\u63cf\u8ff0\u8fd4\u56de\u7ed3\u679c\u3002\n "payload": {\n     \u201cresult_1\u201d\uff1a{\n        "status":0, #\u6570\u636e\u72b6\u6001\n        "format":"audio/L16;rate=16000",\n        "encoding":"raw",\n           "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n        }\n   }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9519\u8bef\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u679a\u4e3e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9519\u8bef\u63cf\u8ff0"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9519\u8bef\u4fe1\u606f\u63cf\u8ff0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sid"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u8fd4\u56de\u4f1a\u8bdd\u53e5\u67c4"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6d88\u606f\u4e2d\u643a\u5e26\u7684\u4f1a\u8bdd\u53e5\u67c4\uff0c\u53ef\u9009")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payload"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u643a\u5e26\u8fd4\u56de\u7684\u6570\u636e\uff0c\u5143\u6570\u636e\u7ed3\u6784\u89c1 ","[2.1 \u5143\u6570\u636e \u7684\u5b9a\u4e49]","(\u201d2.1 \u5143\u6570\u636e \u7684\u5b9a\u4e49\u201c)")))),(0,l.kt)("h5",{id:"232-\u591a\u8f93\u51fa\u63cf\u8ff0"},"2.3.2 \u591a\u8f93\u51fa\u63cf\u8ff0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "header":{\n        "code": 0,\n         "message": "success",\n         "sid": "iat000704fa@dx16ade44e4d87a1c802",\n         "status":0     \n        },\n \n"payload":{\n     "result_1":{\n        "status":0,\n        "format":"audio/L16;rate=16000",\n        "encoding":"raw",\n        "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n         },\n\n     "result_2":{\n        "status":0,\n        "format":"audio/L16;rate=16000",\n        "encoding":"raw",\n        "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n         }\n}\n} \n')),(0,l.kt)("p",null,"\u5b57\u6bb5\u8bf4\u660e\uff1a\n\u540c ","[2.3.1 \u5355\u8f93\u51fa\u63cf\u8ff0]",'("2.3.1 \u5355\u8f93\u51fa\u63cf\u8ff0")\n\u7ed3\u6784\u8bf4\u660e\uff1a'),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6b64\u65f6payload\u4e3a\u591a\u7ea7\u7ed3\u6784"),(0,l.kt)("li",{parentName:"ol"},"\u591a\u6570\u636e\u60c5\u51b5\u4e0b\uff0cpayload\u901a\u8fc7\u4e0d\u540c\u7684\u7ed3\u679cID\u4f5c\u4e3akey\u6765\u5206\u522b\u63cf\u8ff0\u4e0d\u540c\u7684\u7ed3\u679c\u7279\u6027\u63cf\u8ff0\uff0c\u5982\uff1aresult_1\u3001result_2"),(0,l.kt)("li",{parentName:"ol"},"\u7ed3\u679cID\u4e3a\u7528\u6237\u81ea\u5b9a\u4e49")),(0,l.kt)("h4",{id:"24-\u7cfb\u7edf\u53c2\u6570\u7684\u7ea6\u675f"},"2.4 \u7cfb\u7edf\u53c2\u6570\u7684\u7ea6\u675f"),(0,l.kt)("h5",{id:"241-header\u5b57\u6bb5"},"2.4.1 header\u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app_id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ath_id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e09\u65b9\u7528\u6237ID"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009")))),(0,l.kt)("h3",{id:"31-\u8def\u7531\u4fe1\u606f"},"3.1 \u8def\u7531\u4fe1\u606f"),(0,l.kt)("p",null,"\u65b0\u589esession\u72b6\u6001\uff08SessState\uff09\uff0c\u7528\u4e8e\u63cf\u8ff0\u6d41\u5f0f\u4e0e\u5426"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"message GlobalRoute {\n    string session_id = 1; //session id\n    string trace_id = 2; //trace id\n    string up_router_id = 3; //\u4e0a\u884c\u6570\u636e\u8def\u7531\u6807\u8bc6\n    string guider_id = 4; //\u8c03\u5ea6\u4e2d\u5fc3\u6807\u8bc6\n    string down_router_id = 5; //\u4e0b\u884c\u6570\u636e\u8def\u7531\u6807\u8bc6\n    string appid = 6; //\u5e94\u7528\u6807\u8bc6\n    string uid = 7; //\u7528\u6237\u6807\u8bc6\n    string did = 8; //\u8bbe\u5907\u6807\u8bc6\n    string client_ip = 9; //\u5ba2\u6237\u7aefip\n    \n    SessState  session_state = 10; //\u65b0\u589e\uff1a\u4f1a\u8bdd\u72b6\u6001\uff0c\u6d41\u5f0f\u3001\u975e\u6d41\u5f0f,STATE\u4e3a\u679a\u4e3e\n\n} \n")),(0,l.kt)("h4",{id:"31-\u5143\u6570\u636e\u8c03\u6574"},"3.1 \u5143\u6570\u636e\u8c03\u6574"),(0,l.kt)("p",null,"\u53bb\u9664\u539fformat\u3001encoding\u5b57\u6bb5\uff0c\u63cf\u8ff0\u5f52\u5165\uff1adesc_args\u5b57\u6bb5\uff0c\u4e14\u5c06\u539f\u6765\u7684byte\u7c7b\u578b\u8c03\u6574\u4e3astring\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"message GeneralData {\n    string data_id = 1; //\u6570\u636e\u7f16\u53f7\n    uint32 frame_id = 2; //\u6570\u636e\u5e8f\u53f7\n\n    //\u533a\u5206\u6570\u636e\u7c7b\u578b\n    enum DataType {\n    TEXT = 0; // \u6587\u672c\n    AUDIO = 1; // \u97f3\u9891\n    IMAGE = 2; // \u56fe\u50cf\n    VIDEO = 3; // \u89c6\u9891\n    }\n\n    DataType data_type = 3; //\u6570\u636e\u7c7b\u578b\n\n    //\u533a\u5206\u6570\u636e\u72b6\u6001\n   enum DataStatus {\n    BEGIN = 0; //\u5f00\u59cb\n    CONTINUE = 1; //\u8ddf\u6d41\n    END = 2; //\u7ed3\u675f\n    ONCE = 3; //\u4e00\u6b21\u8c03\u7528\u7ed3\u675f\n    }\n\n    DataStatus status = 4; //\u6570\u636e\u72b6\u6001\n\n    map<string, string> desc_args = 5; //\u6570\u636e\u63cf\u8ff0\u53c2\u6570\n\n    bytes data = 8; //\u6570\u636e\u5185\u5bb9\n}\n")))}o.isMDXComponent=!0}}]);