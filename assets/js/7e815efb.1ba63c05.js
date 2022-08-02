"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[6677],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=o(t),k=r,u=d["".concat(s,".").concat(k)]||d[k]||c[k]||p;return t?a.createElement(u,i(i({ref:n},m),{},{components:t})):a.createElement(u,i({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<p;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>o});var a=t(7462),r=(t(7294),t(3905));const p={sidebar_position:3,sidebar_label:"Python\u63d2\u4ef6"},i=void 0,l={unversionedId:"\u52a0\u8f7d\u5668/Python\u63d2\u4ef6",id:"\u52a0\u8f7d\u5668/Python\u63d2\u4ef6",title:"Python\u63d2\u4ef6",description:"wrapper.py \u67b6\u6784",source:"@site/docs/\u52a0\u8f7d\u5668/Python\u63d2\u4ef6.md",sourceDirName:"\u52a0\u8f7d\u5668",slug:"/\u52a0\u8f7d\u5668/Python\u63d2\u4ef6",permalink:"/athena_website/docs/\u52a0\u8f7d\u5668/Python\u63d2\u4ef6",draft:!1,editUrl:"https://github.com/xfyun/athena_website/tree/master/docs/\u52a0\u8f7d\u5668/Python\u63d2\u4ef6.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Python\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"C|C++\u63d2\u4ef6",permalink:"/athena_website/docs/\u52a0\u8f7d\u5668/C\u3001C++\u63d2\u4ef6"},next:{title:"Python\u8c03\u8bd5\u5de5\u5177",permalink:"/athena_website/docs/\u52a0\u8f7d\u5668/Python\u63d2\u4ef6\u8c03\u8bd5\u5de5\u5177"}},s={},o=[{value:"wrapper.py \u67b6\u6784",id:"wrapperpy-\u67b6\u6784",level:2},{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u65b0\u7248wrapper.py\u96c6\u6210\u65b9\u5f0f\u4f18\u5316\u76ee\u6807",id:"\u65b0\u7248wrapperpy\u96c6\u6210\u65b9\u5f0f\u4f18\u5316\u76ee\u6807",level:2},{value:"wrapper.py \u65b0\u8bbe\u8ba1",id:"wrapperpy-\u65b0\u8bbe\u8ba1",level:2},{value:"\u4e3a\u4ec0\u4e48",id:"\u4e3a\u4ec0\u4e48",level:3},{value:"WrapperBase\u7c7b",id:"wrapperbase\u7c7b",level:3},{value:"\u5feb\u901f\u5f00\u59cb\u4f60\u7684\u7b2c\u4e00\u4e2awrapper.py",id:"\u5feb\u901f\u5f00\u59cb\u4f60\u7684\u7b2c\u4e00\u4e2awrapperpy",level:3},{value:"\u51c6\u5907\u9879\u76ee",id:"\u51c6\u5907\u9879\u76ee",level:4},{value:"\u5b8c\u6210\u672c\u5730\u8c03\u8bd5",id:"\u5b8c\u6210\u672c\u5730\u8c03\u8bd5",level:4},{value:"\u2757 \u63d0\u524d\u6ce8\u610f",id:"-\u63d0\u524d\u6ce8\u610f",level:5},{value:"\u7ee7\u627f<code>WrapperBase</code>\u7c7b\u5b8c\u6210<code>Wrapper</code>\u7c7b\u7684\u6784\u5efa",id:"\u7ee7\u627fwrapperbase\u7c7b\u5b8c\u6210wrapper\u7c7b\u7684\u6784\u5efa",level:5},{value:"\u672c\u5730\u8c03\u8bd5\u6a21\u62df\u4f20\u5165\u6570\u636e\u2714\ufe0f",id:"\u672c\u5730\u8c03\u8bd5\u6a21\u62df\u4f20\u5165\u6570\u636e\ufe0f",level:4},{value:"Appendix",id:"appendix",level:3}],m={toc:o};function c(e){let{components:n,...p}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,p,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-v2-python\u52a0\u8f7d\u5668\u63d2\u4ef6\u6587\u6863"},"\u2b50 V2-Python\u52a0\u8f7d\u5668\u63d2\u4ef6\u6587\u6863"),(0,r.kt)("h2",{id:"wrapperpy-\u67b6\u6784"},"wrapper.py \u67b6\u6784"),(0,r.kt)("p",null,"Python Language Wrapper:\n",(0,r.kt)("img",{alt:"img",src:t(1890).Z,width:"776",height:"571"})),(0,r.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e4b\u524d\u7684wrapper.py \u7531",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges_c_python_wrapper"},"C\u9879\u76ee"),"\n\u5b9e\u73b0\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges_c_python_wrapper/blob/master/include/aiges/wrapper.h"},"wrapper\u63a5\u53e3"),"\u5b9e\u73b0\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"aiges_c_python_wrapper"),"\u7f16\u8bd1\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"libwrapper.so"),"\uff0c\u7531aiges\u7edf\u4e00\u52a0\u8f7d\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e4b\u524d\u5982\u679cpython\u7528\u6237\u9700\u8981\u5b9e\u73b0\u63a8\u7406\u63d2\u4ef6\uff0c \u53ea\u9700\u8981\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges/blob/master/demo/mmocr/wrapper.py"},"wrapper.py"),"\u5b9e\u73b0\u5bf9\u5e94\u63a5\u53e3\u540e\uff0c\u5373\u53ef\u5b9e\u73b0python\u63a8\u7406\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5f53\u7528\u6237\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py"),"\u540e\uff0c \u65e0\u6cd5\u76f4\u63a5\u8c03\u8bd5\u8fd0\u884c\uff0c\u4e14\u4e0d\u592a\u4e86\u89e3",(0,r.kt)("inlineCode",{parentName:"p"},"aiges"),"\u5982\u4f55\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py"),"\u4ee5\u53ca\u4f20\u9012\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py"),"\u5bf9\u5e94\u7684\u53c2\u6570\u662f\u4ec0\u4e48\u7c7b\u578b\u90fd\u975e\u5e38\u7591\u60d1\uff0c\u9020\u6210python\u7248\u672c\u7684AI\u63a8\u7406\u63d2\u4ef6\u96c6\u6210\u65b9\u5f0f\u5e76\u4e0d\u90a3\u4e48pythonic\u3002"))),(0,r.kt)("h2",{id:"\u65b0\u7248wrapperpy\u96c6\u6210\u65b9\u5f0f\u4f18\u5316\u76ee\u6807"},"\u65b0\u7248wrapper.py\u96c6\u6210\u65b9\u5f0f\u4f18\u5316\u76ee\u6807"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\u53ef\u4ee5\u5b9a\u4e49AI\u80fd\u529b\u8f93\u5165\u7684\u6570\u636e\u5b57\u6bb5\uff0c\u63a7\u5236\u5b57\u6bb5\u5217\u8868\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\u53ef\u4ee5\u6309\u9700\u5b9a\u4e49AI\u80fd\u529b\u8f93\u51fa\u7684\u5b57\u6bb5\u5217\u8868\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5e73\u53f0\u5de5\u5177\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py"),"\u81ea\u52a8\u5bfc\u51fa\u7528\u6237schema\u5e76\u914d\u7f6e\u5230webgate\uff0c\u5bf9\u7528\u6237\u5c4f\u853dschema\u6982\u5ff5\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5e73\u53f0\u5de5\u5177\u53ef\u4ee5\u63d0\u4f9b\u7528\u6237\u76f4\u63a5\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py"),"\uff0c\u5e76\u6309\u7167\u5e73\u53f0\u771f\u5b9e\u52a0\u8f7d",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py"),"\u65b9\u5f0f\u4f20\u9012\u5bf9\u5e94\u53c2\u6570\uff0c\u65b9\u4fbf\u7528\u6237\u5728\u4efb\u4f55\u73af\u5883\u5feb\u901fDebug\uff0c\u53d1\u73b0\u4e00\u4e9b\u57fa\u7840\u95ee\u9898\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c3d\u53ef\u80fd\u7b80\u5316\u7528\u6237\u8f93\u5165\uff0c\u5e76\u4e14\u5728\u6709\u9650\u7684\u7528\u6237\u8f93\u5165\u4e0b\uff0c\u83b7\u53d6\u5e73\u53f0\u9700\u8981\u7684\u4fe1\u606f\u3002"))),(0,r.kt)("h2",{id:"wrapperpy-\u65b0\u8bbe\u8ba1"},"wrapper.py \u65b0\u8bbe\u8ba1"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img_1.png",src:t(7323).Z,width:"1039",height:"736"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4f9b python sdk:  python sdk\u5c06\u53d1\u5e03\u5230 pypi\uff0c\u65b9\u4fbf\u7528\u6237\u968f\u65f6\u5b89\u88c5\u548c\u66f4\u65b0\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#%E4%B8%BA%E4%BB%80%E4%B9%88"},"\u4e3a\u4ec0\u4e48?")," \u65b0wrapper\u8981\u6c42\u7528\u6237 \u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Wrapper")," \u7c7b\uff0c\u5e76\u5c06\u539f\u6709 \u51fd\u6570\u5f0f wrapper\u5f00\u5934\u7684\u51fd\u6570\u653e\u5165\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Wrapper")," \uff08\u7c7b\u65b9\u6cd5|\u5bf9\u8c61\u65b9\u6cd5\uff1f\u5f85\u8ba8\u8bba todo)\u4e2d\u53bb\u3002\u7528\u6237\u5b9e\u73b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Wrapper"),"\u7c7b\u5fc5\u987b",(0,r.kt)("strong",{parentName:"p"},"\u7ee7\u627f"),(0,r.kt)("inlineCode",{parentName:"p"},"WrapperBase"),"\u7c7b\uff0c\u5e76\u4e14",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperInit"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperFini"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperOnceExec"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperError"),"\u7b49\u51fd\u6570\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperBase"),"\u7c7b\u88ab\u58f0\u660e\u4e3a\u7c7b\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"@classmethod"),"\uff0c\u672a\u5b9e\u73b0\u5219\u4f1a\u629b\u51fa",(0,r.kt)("inlineCode",{parentName:"p"},"NotImplementedError"),"\u9519\u8bef\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7528\u6237\u5728Wrapper\u7c7b\u4e2d\u9664\u4e86\u8981\u5b9e\u73b0\u539f\u6709\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperInit"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperExec"),"\u7b49\u5b9e\u73b0\u4e4b\u5916\uff0c\u9700\u8981\u989d\u5916\u5b9a\u4e49\u80fd\u529b\u7684\u8f93\u5165\u548c\u8f93\u51fa\uff0c\u6700\u7ec8\u751f\u6210\u7684HTTP\u63a5\u53e3\u57fa\u4e8e\u6b64\u4fe1\u606f\u751f\u6210\u3002"))),(0,r.kt)("h3",{id:"\u4e3a\u4ec0\u4e48"},"\u4e3a\u4ec0\u4e48"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6211\u4eec\u5e0c\u671b\u7528\u6237\u53ea\u9700\u8981\u5b9a\u4e49\u5173\u952e\u7684\u5b9e\u73b0\uff0c\u800c\u4e0d\u5fc5\u5173\u5fc3\u80cc\u540e",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py"),"\u5982\u4f55\u88ab\u8c03\u7528\u7684\u7ec6\u8282\uff0c\u8fd9\u5757\u80cc\u540e\u903b\u8f91\u5176\u5b9e\u662f\u590d\u6742\u7684\uff0c\u6211\u4eec\u4e0d\u5e0c\u671b\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py"),"\u4e2d\u8ba9\u7528\u6237\u8fc7\u591a\u7684\u5b9a\u4e49\u4e00\u4e9b\u5e73\u53f0\u9884\u5148\u8981\u6c42\u7684\u8bbe\u5b9a\uff0c\u6211\u4eec\u5e0c\u671b\u5728SDK\u7684\u57fa\u7c7b\u4e2d\u5b9e\u73b0\u5b9a\u4e49\u597d\u8fd9\u4e9b\u9ed8\u8ba4\u884c\u4e3a\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py"),"\u771f\u5b9e\u8c03\u7528\u987a\u5e8f \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperInit")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperExec")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperFin"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u57fa\u7c7b\u4e2d\u5b9a\u4e49\u884c\u4e3a\u7684\u597d\u5904\u662f\uff0c\u7528\u6237\u7ee7\u627f\u57fa\u7c7b\u5e76\u5b9e\u73b0\u5fc5\u8981\u65b9\u6cd5\u540e\uff0c\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\uff0c\u5e76\u4e14\u8c03\u8bd5\u62ff\u5230\u7ed3\u679c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u81f3\u4e8e\u4e3a\u4ec0\u4e48\u5e0c\u671b\u7528\u6237\u901a\u8fc7\u7ee7\u627f",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperBase"),"\u7c7b\u6765\u5b9e\u73b0 Wrapper\u7c7b\u4e2d\uff0c\u662f\u56e0\u4e3a\u53ef\u4ee5\u5728\u57fa\u7c7b\u884c\u4e3a\u4e2d\u505a\u4e00\u4e9b\u66f4Pythonic\u7684\u9b54\u6cd5\uff0c\u4ece\u800c\u7b80\u5316\u7528\u6237\u7684\u8f93\u5165\u3002"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges_c_python_wrapper/blob/master/wrapper.py"},"\u65b0\u7248\u672cPython\u52a0\u8f7d\u5668\u63d2\u4ef6")))),(0,r.kt)("h3",{id:"wrapperbase\u7c7b"},"WrapperBase\u7c7b"),(0,r.kt)("p",null,"\u65b0\u7248Python\u52a0\u8f7d\u5668\u63d2\u4ef6\u6700\u5927\u7684\u6539\u53d8\u662f\u5f15\u5165\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperBase"),"\u7c7b\uff0c\u7528\u6237\u5b9e\u73b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Wrapper"),"\u7c7b\u5fc5\u987b",(0,r.kt)("strong",{parentName:"p"},"\u7ee7\u627f"),(0,r.kt)("inlineCode",{parentName:"p"},"WrapperBase"),"\u7c7b\uff0c\u5e76\u4e14",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperInit"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperFini"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperOnceExec"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperError"),"\u7b49\u51fd\u6570\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperBase"),"\u7c7b\u88ab\u58f0\u660e\u4e3a\u7c7b\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"@classmethod"),"\uff0c\u672a\u5b9e\u73b0\u5219\u4f1a\u629b\u51fa",(0,r.kt)("inlineCode",{parentName:"p"},"NotImplementedError"),"\u9519\u8bef"),(0,r.kt)("h3",{id:"\u5feb\u901f\u5f00\u59cb\u4f60\u7684\u7b2c\u4e00\u4e2awrapperpy"},"\u5feb\u901f\u5f00\u59cb\u4f60\u7684\u7b2c\u4e00\u4e2awrapper.py"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0b\u9762\u4ecb\u7ecd\u4e00\u4e2a\u8c03\u7528\u4e09\u65b9API\u7684Python\u52a0\u8f7d\u5668\u63d2\u4ef6\u7684\u5b9e\u73b0\u8fc7\u7a0b\u6765\u5e2e\u52a9\u60a8\u7406\u89e3\u6574\u4e2a\u8fc7\u7a0b\u3002")),(0,r.kt)("h4",{id:"\u51c6\u5907\u9879\u76ee"},"\u51c6\u5907\u9879\u76ee"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#appendix"},"\u5b89\u88c5\u6216\u8005\u66f4\u65b0"),"aiges sdk\u5e93 (\u8be5sdk\u7528\u4e8e\u8f85\u52a9",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py"),"\u672c\u5730\u8c03\u8bd5)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 aiges \u5feb\u901f\u751f\u6210\u4f60\u7684python\u9879\u76ee"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'python -m aiges create -n  "project"\n')),(0,r.kt)("p",{parentName:"li"},'\u8be5\u547d\u4ee4\u751f\u6210\u4e00\u4e2a "project" \u6587\u4ef6\u5939\uff0c\u5e76\u5305\u542b wrapper.py \u7684\u534a\u6210\u54c1\u3002')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u9879\u76ee\u5185\u4f9d\u8d56\uff0c",(0,r.kt)("a",{parentName:"p",href:"#%E5%AE%8C%E6%88%90%E6%9C%AC%E5%9C%B0%E8%B0%83%E8%AF%95"},"\u5b8c\u5584wrapper.py\u5e76\u4e14\u672c\u5730\u8c03\u8bd5\u901a\u8fc7"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06wrapper.py \u6784\u5efa\u4e3adocker\u955c\u50cf\uff0c\u5e76\u53d1\u5e03\u5230 athena_serving\u6846\u67b6\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bbf\u95ee\u4f60\u7684AI HTTP API... Enjoy..."))),(0,r.kt)("h4",{id:"\u5b8c\u6210\u672c\u5730\u8c03\u8bd5"},"\u5b8c\u6210\u672c\u5730\u8c03\u8bd5"),(0,r.kt)("h5",{id:"-\u63d0\u524d\u6ce8\u610f"},"\u2757 \u63d0\u524d\u6ce8\u610f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"Wrapper"),"\u7c7b\u65f6\uff0c\u5fc5\u987b",(0,r.kt)("strong",{parentName:"p"},"\u7ee7\u627f"),(0,r.kt)("inlineCode",{parentName:"p"},"WrapperBase"),"\u7c7b\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd0\u884c\u4e2d\u7528\u5230\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u9009\u62e9\u5c06\u53d8\u91cf\u58f0\u660e\u4e3a\u7c7b\u53d8\u91cf\uff0c\u5b9e\u4f8b\u53d8\u91cf\u540c\u6837\u53ef\u9009\u3002\u4e3a\u4e86\u6a21\u62dfAIservice\u4f20\u9012\u53c2\u6570\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Wrapper"),"\u7c7b\u4e2d\u58f0\u660e\u4e00\u4e2a\u7c7b\u6210\u5458config\u7528\u4e8e\u521d\u59cb\u5316\uff0c\u4e0a\u7ebf\u540e",(0,r.kt)("strong",{parentName:"p"},"\u9009\u62e9\u6ce8\u91ca"),"\u5373\u53ef\uff0c\u5728\u672c\u4f8b\u4e2d\u5982\u4e0b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class Wrapper(WrapperBase):\n   requrl, http_method, http_uri = None, None, None\n   # music\n   access_key_music, access_secret_music = None, None\n   # humming\n   access_key_humming, access_secret_humming = None, None\n\n   config = {}\n   config = {\n   "requrl" : ...,\n   "http_method" : ...,\n   "http_uri" : ...,\n   "access_key_music" : ...,\n   "access_secret_music" : ...,\n   "access_key_humming" : ...,\n   "access_secret_humming" : ...\n   }\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wrapperOnceExec"),"\u51fd\u6570\u6267\u884c\u8fd4\u56de\u7684\u7c7b\u578b\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),"\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u901a\u5e38\u8868\u793a\u6267\u884c\u72b6\u6001\u9519\u8bef\u7801\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"int"),"\u7c7b\u578b\uff0c\u610f\u5473\u7740",(0,r.kt)("strong",{parentName:"p"},"\u65e0\u8bba\u7ed3\u679c\u6b63\u5e38\u4e0e\u5426"),"\uff0c\u5747\u9700\u5b9e\u4f8b\u5316",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),"\u5bf9\u8c61\u5e76\u8fd4\u56de\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"res = Response()\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u672a\u51fa\u73b0\u5f02\u5e38\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"Response"),"\u5bf9\u8c61\u662f\u662f\u7531\u4e00\u4e2a\u6216\u591a\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"ResponseData"),"\u5bf9\u8c61\u6784\u6210\u7684\u5217\u8868\uff0c\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"li"},"ResponseData"),"\u7c7b\u6709",(0,r.kt)("inlineCode",{parentName:"li"},"key"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"data"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"len"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"type"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"status"),"\u4e94\u4e2a\u6210\u5458\u53d8\u91cf",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'l = ResponseData()\nl.key = "output_text"\nl.status = 3\nl.len = len(r.text.encode())\nl.data = r.text\nl.type = 0\nres.list = [l]\n# multi data: res.list = [l1, l2, l3]\nreturn res\n'))),(0,r.kt)("li",{parentName:"ul"},"\u51fa\u73b0\u5f02\u5e38\u65f6\uff0c\u76f4\u63a5\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"Response"),"\u5bf9\u8c61\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"response_err"),"\u65b9\u6cd5\u8fd4\u56de\u9519\u8bef\u7801",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"return res.response_err(ERROR_CODE)\n")))))),(0,r.kt)("h5",{id:"\u7ee7\u627fwrapperbase\u7c7b\u5b8c\u6210wrapper\u7c7b\u7684\u6784\u5efa"},"\u7ee7\u627f",(0,r.kt)("inlineCode",{parentName:"h5"},"WrapperBase"),"\u7c7b\u5b8c\u6210",(0,r.kt)("inlineCode",{parentName:"h5"},"Wrapper"),"\u7c7b\u7684\u6784\u5efa"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wrapperInit"),"\u7528\u4e8e\u521d\u59cb\u5316\u52a0\u8f7d\u5668\u6267\u884c\u8fc7\u7a0b\u4e2d\u7528\u5230\u7684\u53d8\u91cf\uff0c\u53c2\u6570\u4ece\u5b57\u5178\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"config"),"\u4e2d\u8bfb\u5165"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def wrapperInit(cls, config: {}) -> int:\n   print(\"Initializing ..\")\n   config = config\n\n   Wrapper.requrl, Wrapper.http_method, Wrapper.http_uri = config['requrl'], config['http_method'], config['http_uri']\n   Wrapper.access_key_music, Wrapper.access_secret_music = config['access_key_music'], config['access_secret_music']\n   Wrapper.access_key_humming, Wrapper.access_secret_humming = config['access_key_humming'], config['access_secret_humming']\n\n   print('----------Finish Init--------------')\n   \n   return 0\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wrapperError"),"\u5c06\u4f1a\u8fd4\u56de\u9519\u8bef\u7801\u4ee3\u8868\u7684\u542b\u4e49\uff0c\u5728\u672c\u4f8b\u4e2d\u5982\u4e0b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def wrapperError(cls, ret: int) -> str:\n   if ret == 1001:\n      return "\u8bc6\u522b\u65e0\u7ed3\u679c"\n   elif ret == 2000:\n      return "\u5f55\u97f3\u5931\u8d25\uff0c\u53ef\u80fd\u662f\u8bbe\u5907\u6743\u9650\u95ee\u9898"\n   elif ret == 2001:\n      return "\u521d\u59cb\u5316\u9519\u8bef\u6216\u8005\u521d\u59cb\u5316\u8d85\u65f6"\n   elif ret == 2002:\n      return "\u5904\u7406metadata\u9519\u8bef"\n   elif ret == 2004:\n      return "\u65e0\u6cd5\u751f\u6210\u6307\u7eb9\uff08\u6709\u53ef\u80fd\u662f\u9759\u97f3\uff09"\n   elif ret == 2005:\n      return "\u8d85\u65f6"\n   elif ret == 3000:\n      return "\u670d\u52a1\u7aef\u9519\u8bef"\n   elif ret == 3001:\n      return "Access Key\u4e0d\u5b58\u5728\u6216\u9519\u8bef"\n   elif ret == 3002:\n      return "HTTP\u5185\u5bb9\u975e\u6cd5"\n   elif ret == 3003:\n      return "\u8bf7\u6c42\u6570\u8d85\u51fa\u9650\u5236\uff08\u9700\u8981\u5347\u7ea7\u8d26\u53f7\uff09"\n   elif ret == 3006:\n      return "\u53c2\u6570\u975e\u6cd5"\n   elif ret == 3014:\n      return "\u7b7e\u540d\u975e\u6cd5"\n   elif ret == 3015:\n      return "QPS\u8d85\u51fa\u9650\u5236\uff08\u9700\u8981\u5347\u7ea7\u8d26\u53f7\uff09"\n   else:\n      return f"User Defined Error: {ret}"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wrapperFini"),"\u7528\u4e8e\u5904\u7406\u4e00\u4e9b\u52a0\u8f7d\u5668\u63d2\u4ef6\u7684\u5806\u533a\u6307\u9488\u7684\u56de\u6536\u5de5\u4f5c\uff0c\u5bf9\u4e8ePython\u8bed\u8a00\uff0c\u901a\u5e38\u4e0d\u9700\u8981\u5b9e\u73b0\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def wrapperFini() -> int:\n   logging.info('Wrapper finished.')\n   return 0\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wrapperOnceExec"),"\u7684\u6267\u884c\u7531",(0,r.kt)("u",null,"\u9274\u6743"),"\u3001",(0,r.kt)("u",null,"\u53d1\u9001HTTP\u8bf7\u6c42"),"\u548c",(0,r.kt)("u",null,"\u63a5\u6536\u54cd\u5e94\u6570\u636e"),"\u6784\u6210"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def wrapperOnceExec(self, params: {}, reqData: DataListCls) -> Response:\n   ......\n   # \u9274\u6743\n   data_mode = params['mode']\n  \n   access_key = Wrapper.access_key_music if data_mode == 'music' else Wrapper.access_key_humming\n   access_secret = Wrapper.access_secret_music if data_mode == 'music' else Wrapper.access_secret_humming\n \n   src = reqData.list[0].data# binary files\n   sample_bytes = reqData.list[0].len\n   signature_version, data_type = '1', 'audio'\n      \n   timestamp = time.time()\n   res = Response()\n  \n   string_to_sign = Wrapper.http_method + '\\n' \\\n               + Wrapper.http_uri + '\\n' \\\n               + access_key + '\\n' \\\n               + data_type + '\\n' \\\n               + signature_version + '\\n' \\\n               + str(timestamp)\n   sign = base64.b64encode(hmac.new(access_secret.encode('ascii'), string_to_sign.encode('ascii'),digestmod=hashlib.sha1).digest()).decode('ascii')\n  \n   if sign is None:\n         return res.response_err(5014)\n\n   # \u53d1\u9001http\u8bf7\u6c42\n   files = {'sample': src}\n   data = {\n         'access_key': access_key,\n         'sample_bytes': sample_bytes,\n         'timestamp': str(timestamp),\n         'signature': sign,\n         'data_type': data_type,\n         'signature_version': signature_version\n   }\n\n   try:\n      r = requests.post(Wrapper.requrl, files=files, data=data, timeout=5)\n   except requests.exceptions.ConnectTimeout:\n      return res.response_err(4408)\n   if r is None:\n      return res.response_err(4003)\n\n   if r.status_code != 200:\n      return res.response_err(4000 + r.status_code)\n\n   # \u63a5\u53d7\u54cd\u5e94\u6570\u636e\n   pattern = re.compile('\"code\":\\d+')\n   error_code = re.findall(pattern, r.text)\n   error_code = error_code[0].split(':')[-1]\n  \n   if int(error_code):\n      return self.response_err(int(error_code))\n   else:\n      r.encoding = 'utf-8'\n      l = ResponseData()\n  \n      l.key = \"output_text\"\n      l.type = 0\n      l.status = 3\n      l.data = r.text\n      l.len = len(r.text.encode())\n      res.list = [l]\n  return res \n")))),(0,r.kt)("h4",{id:"\u672c\u5730\u8c03\u8bd5\u6a21\u62df\u4f20\u5165\u6570\u636e\ufe0f"},"\u672c\u5730\u8c03\u8bd5\u6a21\u62df\u4f20\u5165\u6570\u636e\u2714\ufe0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u989d\u5916\u58f0\u660e",(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237\u8bf7\u6c42"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237\u54cd\u5e94"),"\u4e24\u4e2a\u7c7b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class UserRequest(object):\n   '''\n   \u5b9a\u4e49\u8bf7\u6c42\u7c7b:\n   params:  params \u5f00\u5934\u7684\u5c5e\u6027\u4ee3\u8868\u6700\u7ec8HTTP\u534f\u8bae\u4e2d\u7684\u529f\u80fd\u53c2\u6570parameters\u90e8\u5206\uff0c \u5bf9\u5e94\u7684\u662fxtest.toml\u4e2d\u7684parameter\u5b57\u6bb5\n            params Field\u652f\u6301 StringParamField\uff0c\n            NumberParamField\uff0cBooleanParamField,IntegerParamField\uff0c\u6bcf\u4e2a\u5b57\u6bb5\u5747\u652f\u6301\u679a\u4e3e\n            params \u5c5e\u6027\u591a\u7528\u4e8e\u534f\u8bae\u4e2d\u7684\u63a7\u5236\u5b57\u6bb5\uff0c\u8bf7\u6c42body\u5b57\u6bb5\u4e0d\u5c5e\u4e8eparams\u8303\u7574\n\n   input:    input\u5b57\u6bb5\u591a\u7528\u4e0e\u8bf7\u6c42\u6570\u636e\u6bb5\uff0c\u5373body\u90e8\u5206\uff0c\u5f53\u524d\u652f\u6301 ImageBodyField\u3001 StringBodyField\u548cAudioBodyField\n   '''\n   params1 = StringParamField(key=\"mode\", enums=[\"music\", \"humming\"], value='humming')\n\n   input1 = AudioBodyField(key=\"data\", path=\"/home/wrapper/test.wav\")\n   \nclass UserResponse(object):\n   '''\n   \u5b9a\u4e49\u54cd\u5e94\u7c7b:\n   accepts:  accepts\u4ee3\u8868\u54cd\u5e94\u4e2d\u5305\u542b\u54ea\u4e9b\u5b57\u6bb5, \u4ee5\u53ca\u6570\u636e\u7c7b\u578b\n\n   input:    input\u5b57\u6bb5\u591a\u7528\u4e0e\u8bf7\u6c42\u6570\u636e\u6bb5\uff0c\u5373body\u90e8\u5206\uff0c\u5f53\u524d\u652f\u6301 ImageBodyField, StringBodyField, \u548cAudioBodyField\n   '''\n   accept1 = StringBodyField(key=\"ouput_text\")\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9e\u4f8b\u5316\u7528\u6237\u8bf7\u6c42\u548c\u7528\u6237\u54cd\u5e94\u5bf9\u8c61"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Wrapper(WrapperBase):\n   # \u5b9e\u4f8b\u5316\u7528\u6237\u8bf7\u6c42\u7c7b\u548c\u7528\u6237\u54cd\u5e94\u7c7b\n   requestCls = UserRequest()\n   responseCls = UserResponse()\n   ......\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u58f0\u660e",(0,r.kt)("inlineCode",{parentName:"p"},"main"),"\u51fd\u6570\uff0c\u5b9e\u4f8b\u5316",(0,r.kt)("inlineCode",{parentName:"p"},"Wrapper"),"\u5bf9\u8c61\uff0c\u8fd0\u884c\u7a0b\u5e8f"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"if __name__ == '__main__':\n   m = Wrapper()\n   m.schema()\n   m.run()\n")))),(0,r.kt)("h3",{id:"appendix"},"Appendix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b89\u88c5\u548c\u66f4\u65b0"),(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),"\u6307\u4ee4\u5b8c\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"aiges"),"\u5e93\u7684\u5b89\u88c5\u548c\u66f4\u65b0"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# \u5b89\u88c5aiges\npip install aiges -i https://pypi.python.org/simple\n# \u66f4\u65b0aiges\npip install --upgrade aiges -i https://pypi.python.org/simple\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u9519\u8bef\u9700\u8981",(0,r.kt)("strong",{parentName:"p"},"\u5c3d\u53ef\u80fd\u65e9"),"\u6355\u83b7\uff0c\u9519\u8bef\u7801\u4e5f\u8981\u548c\u7b2c\u4e09\u65b9\u5e73\u53f0\u533a\u522b\u5f00\u6765\uff0c\u5373\u4f7f\u662f\u9ed8\u8ba4\u7684HTTP\u9519\u8bef\u7801\u4e5f\u8981\u6709\u8fa8\u522b\u4e5f\u597d\uff0c\u65b9\u4fbf\u5b9a\u4f4d\u9519\u8bef\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8c03\u7528\u4e09\u65b9API\u7684Python\u52a0\u8f7d\u5668\u63d2\u4ef6",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges/tree/master/demo/music_api_v2"},"\u5b8c\u6574\u5b9e\u73b0\u53ef\u4ee5\u53c2\u8003")))))}c.isMDXComponent=!0},7323:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/img_1-b4d0288a41528a3bfd8ec557853129f0.png"},1890:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/python-535813f7572c5b2cf0895fd36dfe0dcd.png"}}]);