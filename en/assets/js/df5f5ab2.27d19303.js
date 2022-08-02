"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[4544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>d});var a=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},y=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,l=e.originalType,i=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),h=s(n),d=p,c=h["".concat(i,".").concat(d)]||h[d]||u[d]||l;return n?a.createElement(c,r(r({ref:t},y),{},{components:n})):a.createElement(c,r({ref:t},y))}));function d(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var l=n.length,r=new Array(l);r[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:p,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),p=(n(7294),n(3905));const l={slug:"Pybind11\u52a0\u901fAI\u6781\u901f\u843d\u5730",title:"Pybind11\u52a0\u901fAI\u6781\u901f\u843d\u5730",authors:["ybyang7"],tags:["pybind11","ai","python","athenaserving"]},r="\u80cc\u666f",o={permalink:"/athena_website/en/blog/Pybind11\u52a0\u901fAI\u6781\u901f\u843d\u5730",editUrl:"https://github.com/xfyun/athena_website/tree/master/blog/2022-08-01-pybind11.md",source:"@site/blog/2022-08-01-pybind11.md",title:"Pybind11\u52a0\u901fAI\u6781\u901f\u843d\u5730",description:"\u8fd8\u5728\u60f3\u5982\u4f55\u5077\u61d2\uff0c\u76f4\u63a5\u590d\u7528\u7814\u7a76\u5458\u7684Python\u4ee3\u7801\u8fdb\u884c\u5728\u7ebf\u63a8\u7406\uff1f",date:"2022-08-01T00:00:00.000Z",formattedDate:"August 1, 2022",tags:[{label:"pybind11",permalink:"/athena_website/en/blog/tags/pybind-11"},{label:"ai",permalink:"/athena_website/en/blog/tags/ai"},{label:"python",permalink:"/athena_website/en/blog/tags/python"},{label:"athenaserving",permalink:"/athena_website/en/blog/tags/athenaserving"}],readingTime:14.54,hasTruncateMarker:!1,authors:[{name:"ybyang7",title:"Opensource AI Engineer",url:"https://github.com/berlinsaint",imageURL:"https://avatars.githubusercontent.com/u/10629930?v=4",key:"ybyang7"}],frontMatter:{slug:"Pybind11\u52a0\u901fAI\u6781\u901f\u843d\u5730",title:"Pybind11\u52a0\u901fAI\u6781\u901f\u843d\u5730",authors:["ybyang7"],tags:["pybind11","ai","python","athenaserving"]},prevItem:{title:"\u96c6\u6210\u4e09\u65b9API\u5b9e\u73b0Python\u52a0\u8f7d\u5668\u63d2\u4ef6",permalink:"/athena_website/en/blog/music/api"},nextItem:{title:"\u5feb\u901f\u90e8\u7f72AthenaServing\u6846\u67b6 (Sealos 4.x)",permalink:"/athena_website/en/blog/sealos4-athenaserving"}},i={authorsImageUrls:[void 0]},s=[{value:"\u4f60\u5728\u627e\u7684\u8fd9\u91cc\u90fd\u6709",id:"\u4f60\u5728\u627e\u7684\u8fd9\u91cc\u90fd\u6709",level:2},{value:"Go/C\u3001C++\u67b6\u6784",id:"gocc\u67b6\u6784",level:2},{value:"\u652f\u6301wrapper.py Go/C/Python \u67b6\u6784",id:"\u652f\u6301wrapperpy-gocpython-\u67b6\u6784",level:2},{value:"C\u8c03\u7528Python",id:"c\u8c03\u7528python",level:2},{value:"Python\u539f\u751f\u65b9\u6848",id:"python\u539f\u751f\u65b9\u6848",level:3},{value:"Cython\u65b9\u6848",id:"cython\u65b9\u6848",level:3},{value:"SWIG",id:"swig",level:3},{value:"PYBIND11",id:"pybind11",level:3},{value:"C++\u4e0epython\u5171\u821e\uff0cc++ python\u4e92\u8c03\u7528",id:"c\u4e0epython\u5171\u821ec-python\u4e92\u8c03\u7528",level:2},{value:"aiges sdk",id:"aiges-sdk",level:3},{value:"\u5173\u4e8epython\u63d2\u4ef6\u6027\u80fd",id:"\u5173\u4e8epython\u63d2\u4ef6\u6027\u80fd",level:3},{value:"\u5173\u4e8epybind11 \u63d0\u4f9b\u76840\u62f7\u8d1d\u673a\u5236",id:"\u5173\u4e8epybind11-\u63d0\u4f9b\u76840\u62f7\u8d1d\u673a\u5236",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"\u7279\u522b\u9e23\u8c22",id:"\u7279\u522b\u9e23\u8c22",level:3}],y={toc:s};function u(e){let{components:t,...l}=e;return(0,p.kt)("wrapper",(0,a.Z)({},y,l,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u8fd8\u5728\u60f3\u5982\u4f55\u5077\u61d2\uff0c\u76f4\u63a5\u590d\u7528\u7814\u7a76\u5458\u7684Python\u4ee3\u7801\u8fdb\u884c\u5728\u7ebf\u63a8\u7406\uff1f"),(0,p.kt)("p",null,"\u8fd8\u5728\u5bfb\u627e\u6a21\u578b\u63a8\u7406RPC->HTTP\u65b9\u6848\uff1f"),(0,p.kt)("p",null,"\u8fd8\u5728\u627e C/C++ \u8c03\u7528 Python, Python\u8c03\u7528 C/C++\u6280\u672f\u65b9\u6848\uff1f"),(0,p.kt)("p",null,"\u8fd8\u5728\u627e\u5982\u4f55\u63d0\u901fPython\u65b9\u6848\uff1f"),(0,p.kt)("p",null,"...."),(0,p.kt)("h2",{id:"\u4f60\u5728\u627e\u7684\u8fd9\u91cc\u90fd\u6709"},"\u4f60\u5728\u627e\u7684\u8fd9\u91cc\u90fd\u6709"),(0,p.kt)("p",null,"\u5f53\u524d\u7b97\u6cd5\u5f00\u53d1\u4e3b\u6d41\u8bed\u8a00\u90fd\u662fPython\u8bed\u8a00\uff0c \u800c\u60f3\u8981\u843d\u5730\u6210\u4e3a\u751f\u4ea7\u7ea7\u522b\u670d\u52a1\u5e94\u7528\uff0c\u5f80\u5f80\u9700\u8981\u7528C/C++\u7b49\u9ad8\u9636\u8bed\u8a00\u8fdb\u884c\u590d\u73b0\u5e76\u5c01\u88c5\u6210\u9ad8\u6027\u80fd\u63a5\u53e3\u3002"),(0,p.kt)("p",null,"\u4f46\u662f\u5e76\u975e\u6240\u6709\u7684\u573a\u666f\u90fd\u662f\u9700\u8981\u9ad8\u6027\u80fd\uff0c\u4efb\u4f55\u670d\u52a1\u63a5\u53e3\u7684\u9ad8\u6027\u80fd\u7684\u4f18\u5316\u90fd\u662f\u5faa\u5e8f\u6e10\u8fdb\u7684\uff0c\u76ee\u524d\u5f88\u591a\u5382\u5546\u90fd\u4f1a\u9009\u62e9\u7528Python\u8fdb\u884c\u5b9e\u9645\u63a8\u7406\uff0c \u8baf\u98de\u5f53\u524d\u62e5\u6709"),(0,p.kt)("p",null,"\u4e00\u5957Golang\u52a0\u8f7dC\u63d2\u4ef6\u65b9\u6848\uff0c\u6765\u652f\u6301\u5f53\u524d\u8baf\u98de\u4e3b\u8981\u7684\u4e00\u4e9bAI\u7ebf\u4e0a\u751f\u4ea7\u7ea7\u522b\u670d\u52a1\u5e94\u7528\u3002"),(0,p.kt)("p",null,"\u4e3a\u4e86\u8ba9\u7528\u6237\u66f4\u5feb\u901f\u7684\u63a5\u5165Python\u5b9e\u73b0\u7684\u80fd\u529b\uff0c \u5728\u5f53\u524d\u8baf\u98deAIGES\u67b6\u6784\u57fa\u7840\u4e0a\uff0c\u5229\u7528Pybind11\u517c\u5bb9\u4e86\u652f\u6301Python AI\u80fd\u529b\u670d\u52a1\u5316\u3002"),(0,p.kt)("h2",{id:"gocc\u67b6\u6784"},"Go/C\u3001C++\u67b6\u6784"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"img",src:n(260).Z,width:"776",height:"571"})),(0,p.kt)("h2",{id:"\u652f\u6301wrapperpy-gocpython-\u67b6\u6784"},"\u652f\u6301wrapper.py Go/C/Python \u67b6\u6784"),(0,p.kt)("p",null,"Python Language Wrapper:\n",(0,p.kt)("img",{alt:"img",src:n(1317).Z,width:"776",height:"571"})),(0,p.kt)("p",null,"\u8baf\u98de\u5f00\u6e90\u51fa\u54c1\u7684 AthenaServing\u662f\u4e00\u4e2a\u5c06 Python AI\u80fd\u529b(\u4e5f\u53ef\u4ee5\u652f\u6301C/C++)\u53d1\u5e03\u6210\u4e3aHTTP\u670d\u52a1\u7684 AI\u5de5\u7a0b\u6846\u67b6\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges"},"Github")),(0,p.kt)("h2",{id:"c\u8c03\u7528python"},"C\u8c03\u7528Python"),(0,p.kt)("p",null,"\u7531\u4e0a\u8ff0\u67b6\u6784\u53ef\u77e5\uff0c \u6211\u4eec\u9700\u8981\u4f7f\u7528C++\u8c03\u7528Python\u80fd\u529b(Golang\u65e0\u6cd5\u76f4\u63a5\u8c03\u7528Python,\u6211\u4eec\u6280\u672f\u6808\u662fGolang)\u3002"),(0,p.kt)("h3",{id:"python\u539f\u751f\u65b9\u6848"},"Python\u539f\u751f\u65b9\u6848"),(0,p.kt)("p",null,"\u4f20\u7edf\u7684C\u8c03\u7528Python\uff0c\u5927\u591a\u6570\u4eba\u90fd\u4f1a\u4f7f\u7528\u539f\u751f\u7684Cpython\u5f62\u5f0f\u53bb\u8c03\u7528Python\uff0c\u6211\u4eec\u5728",(0,p.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges_c_python_wrapper/blob/release-v1.0.0/pyCall_common.cpp"},"\u7b2c\u4e00\u4e2a\u7248\u672c"),"\u65f6\u4e5f\u662f\u5982\u6b64,\u5176\u590d\u6742\u5ea6\u4e0d\u8a00\u800c\u55bb\uff0c\u8bbe\u8ba1\u5230Python\u7684\u751f\u547d\u5468\u671f\u7ba1\u7406\uff0c\u5185\u5b58\u7ba1\u7406\uff0cGIL\uff0c\u5f15\u7528\u8ba1\u6570\uff0c\u5bf9\u8c61\u8f6c\u6362\u7b49\u7b49..."),(0,p.kt)("p",null,"Python \u5b98\u65b9\u63d0\u4f9b\u4e86 Python/C API\uff0c\u53ef\u4ee5\u5b9e\u73b0\u300c\u7528 C \u8bed\u8a00\u7f16\u5199 Python \u5e93\u300d\uff0c\u5148\u4e0a\u4e00\u6bb5\u4ee3\u7801\u611f\u53d7\u4e00\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-c++"},'static PyObject *\nspam_system(PyObject *self, PyObject *args)\n{\n    const char *command;\n    int sts;\n\n    if (!PyArg_ParseTuple(args, "s", &command))\n        return NULL;\n    sts = system(command);\n    return PyLong_FromLong(sts);\n}\n')),(0,p.kt)("p",null,"\u4e0a\u8ff0\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u5bf9python system\u547d\u4ee4\u8fdb\u884c\u8c03\u7528\uff0c\u5374\u8981\u8fdb\u884c\u591a\u6b21\u624b\u52a8\u7c7b\u578b\u8f6c\u6362\uff0c\u5341\u5206\u75db\u82e6\u3002\u3002"),(0,p.kt)("h3",{id:"cython\u65b9\u6848"},"Cython\u65b9\u6848"),(0,p.kt)("p",null,"Cython \u4e3b\u8981\u6253\u901a\u7684\u662f Python \u548c C\uff0c\u65b9\u4fbf\u4e3a Python \u7f16\u5199 C \u6269\u5c55\u3002Cython \u7684\u7f16\u8bd1\u5668\u652f\u6301\u8f6c\u5316 Python \u4ee3\u7801\u4e3a C \u4ee3\u7801\uff0c\u8fd9\u4e9b C \u4ee3\u7801\u53ef\u4ee5\u8c03\u7528 Python/C \u7684 API\u3002\u4ece\u672c\u8d28\u4e0a\u6765\u8bf4\uff0cCython \u5c31\u662f\u5305\u542b C \u6570\u636e\u7c7b\u578b\u7684 Python\u3002\u76ee\u524d Python \u7684 numpy\uff0c\u4ee5\u53ca\u817e\u8baf\u7684 tRPC-Python \u6846\u67b6\u6709\u6240\u5e94\u7528\u3002"),(0,p.kt)("p",null,"\u7f3a\u70b9\uff1a\n\u9700\u8981\u624b\u52a8\u690d\u5165 Cython \u81ea\u5e26\u8bed\u6cd5\uff08cdef \u7b49\uff09\uff0c\u79fb\u690d\u548c\u590d\u7528\u6210\u672c\u9ad8\n\u9700\u8981\u589e\u52a0\u5176\u4ed6\u6587\u4ef6\uff0c\u5982 setup.py\u3001*.pyx \u6765\u8ba9\u4f60\u7684 Python \u4ee3\u7801\u6700\u540e\u80fd\u591f\u8f6c\u6210\u6027\u80fd\u8f83\u9ad8\u7684 C \u4ee3\u7801\n\u5bf9\u4e8e C++\u7684\u652f\u6301\u7a0b\u5ea6\u5b58\u7591"),(0,p.kt)("h3",{id:"swig"},"SWIG"),(0,p.kt)("p",null,"SWIG \u4e3b\u8981\u89e3\u51b3\u5176\u4ed6\u9ad8\u7ea7\u8bed\u8a00\u4e0e C \u548c C++\u8bed\u8a00\u4ea4\u4e92\u7684\u95ee\u9898\uff0c\u652f\u6301\u5341\u51e0\u79cd\u7f16\u7a0b\u8bed\u8a00\uff0c\u5305\u62ec\u5e38\u89c1\u7684 java\u3001C#\u3001javascript\u3001Python \u7b49\u3002\u4f7f\u7528\u65f6\u9700\u8981\u7528*.i \u6587\u4ef6\u5b9a\u4e49\u63a5\u53e3\uff0c\u7136\u540e\u7528\u5de5\u5177\u751f\u6210\u8de8\u8bed\u8a00\u4ea4\u4e92\u4ee3\u7801\u3002\u4f46\u7531\u4e8e\u652f\u6301\u7684\u8bed\u8a00\u4f17\u591a\uff0c\u56e0\u6b64\u5728 Python \u7aef\u6027\u80fd\u8868\u73b0\u4e0d\u662f\u592a\u597d\u3002"),(0,p.kt)("p",null,"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0cTensorFlow \u65e9\u671f\u4e5f\u662f\u4f7f\u7528 SWIG \u6765\u5c01\u88c5 Python \u63a5\u53e3\uff0c\u6b63\u5f0f\u7531\u4e8e SIWG \u5b58\u5728\u6027\u80fd\u4e0d\u591f\u597d\u3001\u6784\u5efa\u590d\u6742\u3001\u7ed1\u5b9a\u4ee3\u7801\u6666\u6da9\u96be\u8bfb\u7b49\u95ee\u9898\uff0cTensorFlow \u5df2\u4e8e 2019 \u5e74\u5c06 SIWG \u5207\u6362\u4e3a ",(0,p.kt)("a",{parentName:"p",href:"#PYBIND11"},"pybind11"),"\u3002"),(0,p.kt)("h3",{id:"pybind11"},"PYBIND11"),(0,p.kt)("p",null,"\u5728pybind11 \u4e4b\u524d\u5176\u5b9e\u6709\u4e00\u4e2aboost.python\u5e93\u4e5f\u662f\u7ecf\u5178\uff0c\u4f46\u662f\u5b83\u6bd4\u8f83\u91cd\u5ea6\u4f9d\u8d56 boost\u5468\u8fb9\u4f9d\u8d56\u5e93\uff0c\u6bd4\u8f83\u5e9e\u5927\uff0c\u7ecf\u5e38\u8ba9\u4eba\u671b\u800c\u5374\u6b65."),(0,p.kt)("p",null,"pybind11 \u53ef\u4ee5\u7406\u89e3\u4e3aboost.python\u7684\u7cbe\u7b80\u7248\uff0c\u901a\u8fc7\u63d0\u4f9b\u5934\u6587\u4ef6\uff0c\u5b8f\u5b9a\u4e49\u548c\u5143\u7f16\u7a0b\u6765\u7b80\u5316 Python \u7684 API \u8c03\u7528\u3002\u5bf9 C++\u652f\u6301\u975e\u5e38\u597d\uff0c\u57fa\u4e8e C++11 \u5e94\u7528\u4e86\u5404\u79cd\u65b0\u7279\u6027\uff0c\u4e5f\u8bb8 pybind11 \u7684\u540e\u7f00 11 \u5c31\u662f\u51fa\u4e8e\u8fd9\u4e2a\u539f\u56e0\u3002"),(0,p.kt)("p",null,"\u7279\u70b9\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u8f7b\u91cf\u4e14\u529f\u80fd\u5355\u4e00\uff0c\u805a\u7126\u4e8e\u63d0\u4f9b C++ & Python binding\uff0c\u4ea4\u4e92\u4ee3\u7801\u7b80\u6d01"),(0,p.kt)("li",{parentName:"ul"},"\u5bf9\u5e38\u89c1\u7684 C++\u6570\u636e\u7c7b\u578b\u5982 STL\u3001Python \u5e93\u5982 numpy \u7b49\u517c\u5bb9\u5f88\u597d\uff0c\u65e0\u4eba\u5de5\u8f6c\u6362\u6210\u672c"),(0,p.kt)("li",{parentName:"ul"},"only header \u65b9\u5f0f\uff0c\u65e0\u9700\u989d\u5916\u4ee3\u7801\u751f\u6210\uff0c\u7f16\u8bd1\u671f\u5373\u53ef\u5b8c\u6210\u7ed1\u5b9a\u5173\u7cfb\u5efa\u7acb\uff0c\u51cf\u5c0f binary \u5927\u5c0f"),(0,p.kt)("li",{parentName:"ul"},"\u652f\u6301 C++\u65b0\u7279\u6027\uff0c\u5bf9 C++\u7684\u91cd\u8f7d\u3001\u7ee7\u627f\uff0cdebug \u65b9\u5f0f\u4fbf\u6377\u6613\u7528"),(0,p.kt)("li",{parentName:"ul"},"\u5b8c\u5584\u7684\u5b98\u65b9",(0,p.kt)("a",{parentName:"li",href:"https://pybind11.readthedocs.io/"},"\u6587\u6863"),"\u652f\u6301\uff0c\u5e94\u7528\u4e8e\u591a\u4e2a\u77e5\u540d\u5f00\u6e90\u9879\u76ee")),(0,p.kt)("h2",{id:"c\u4e0epython\u5171\u821ec-python\u4e92\u8c03\u7528"},"C++\u4e0epython\u5171\u821e\uff0cc++ python\u4e92\u8c03\u7528"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"AIGes\u4e2dC++\u7ed3\u5408Pybind11\u8c03\u7528Python ")),(0,p.kt)("p",null,"\u5982",(0,p.kt)("a",{parentName:"p",href:"#%E6%94%AF%E6%8C%81wrapperpy-gocpython-%E6%9E%B6%E6%9E%84"},"\u4e0a\u8ff0"),"\u6240\u793a,\u6211\u4eec\u4e3a\u7528\u6237\u8bbe\u8ba1\u4e86class Wrapper\u7c7b\uff0c\u7528\u6237\u9700\u8981\u5b9e\u73b0Wrapper\u7c7b\u4e2d\u7684\u5fc5\u8981\u65b9\u6cd5\uff0c\u7136\u540e\u7531C++\u8bfb\u53d6\u8be5\u7c7b\u5e76\u52a0\u8f7d\u5bf9\u5e94\u65b9\u6cd5\uff0c\u5f53\u7528\u6237\u8bf7\u6c42\u5230\u8fbe\u65f6\uff0c\u6267\u884c\u5bf9\u5e94python\u65b9\u6cd5\uff0c\u5e76\u8fd4\u56de\u5f97\u5230\u76f8\u5e94\u6570\u636e\u5b8c\u6210\u4e00\u6b21\u63a8\u7406\u8bf7\u6c42\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"C\u4e2d\u4f20\u5165\u6570\u636e\u5230 wrapperOnceExec,python\u5982\u4f55\u63a5\u53d7\uff1f")),(0,p.kt)("p",null,"\u6211\u4eec\u91cd\u70b9\u770b\u4e0b ",(0,p.kt)("inlineCode",{parentName:"p"},"Wrapper")," \u7c7b\u7684\u5173\u952e\u63a8\u7406\u65b9\u6cd5 ",(0,p.kt)("inlineCode",{parentName:"p"},"wrapperOnceExec")," \u65b9\u6cd5, \u8be5\u65b9\n\u6cd5\u51fd\u6570\u5b9a\u4e49\u4e3a:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"\ndef wrapperOnceExec(self, params: {}, reqData: DataListCls) -> Response:\n    pass\n")),(0,p.kt)("p",null,"\u5176\u4e2d ",(0,p.kt)("inlineCode",{parentName:"p"},"params")," \u4e3a\u8be5\u8bf7\u6c42\u4e2d\u7684params\u8bf7\u6c42\u53c2\u6570\u6620\u5c04\uff0c\u662f\u4e00\u4e2a\u5b57\u5178\uff0c\u4e3b\u8981\u7528\u4e8e\u4f20\u9012\u7528\u6237\u4e00\u4e9b\u8bf7\u6c42\u63a7\u5236\u5b57\u6bb5\u3002"),(0,p.kt)("p",null," ",(0,p.kt)("inlineCode",{parentName:"p"},"reqData")," \u4e3a\u8be5\u6b21\u8bf7\u6c42\u7684\u4e00\u4e9b\u6570\u636e\u6bb5\uff0c\u6bd4\u5982\u4e0a\u4f20\u4e00\u4e2a\u4e8c\u8fdb\u5236\u56fe\u50cf\uff0c\u97f3\u9891\uff0c\u6587\u672c\u7b49(\u6b64\u7c7b\u53c2\u6570\u4e0d\u9002\u5408\u653e\u5165params\u4e2d)\uff0creqData\u6211\u4eec\u8981\u6c42\u5b83\u5fc5\u987b\u662f1\u4e2a",(0,p.kt)("inlineCode",{parentName:"p"},"DataListCls"),"\u7c7b. \u8fd9\u4e2a\u7c7b\u6709\u4e9b\u7279\u6b8a\uff0c\u56e0\u4e3a\u6211\u4eec\u7684\u6570\u636e\u662f\u6765\u6e90\u4e8e C++,\u5373\u4eceC++\u4e2d\u4f20\u5165\u6570\u636e\u5230Python\uff0c\u56e0\u6b64\u8fd9\u4e2a\u8bf7\u6c42\u5fc5\u987b\u5728 c++\u4fa7\u6784\u9020\uff0c\u90a3\u4e48\u6b64\u5904\u5c31\u6d89\u53ca\u5230 C++\u6570\u636e\u548cPython\u6570\u636e\u7684\u8f6c\u6362\u95ee\u9898\u3002"),(0,p.kt)("p",null," Pybind11\u63d0\u4f9b\u4e86\u5728C\u4e2d\u5b9a\u4e49\u5185\u5d4c(embed)python\u6a21\u5757\u65b9\u5f0f: \u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5728C\u4e2d\u7ed9python\u5f88\u5bb9\u6613\u5b9a\u4e49\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\uff0c\u6bd4\u5982\u6b64\u5904:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-c++"},"class DataListNode {\npublic:\n    std::string key;\n    py::bytes data;\n    unsigned int len;\n    int type;\n\n    py::bytes get_data();\n};\n\nclass DataListCls {\npublic:\n    std::vector <DataListNode> list;\n\n    DataListNode *get(std::string key);\n};\n\nDataListNode *DataListCls::get(std::string key) {\n    for (int idx = 0; idx < list.size(); idx++) {\n        DataListNode *node = &list[idx];\n        if (strcmp(node->key.c_str(), key.c_str()) == 0) {\n            return node;\n        }\n    }\n    return nullptr;\n}\n")),(0,p.kt)("p",null,"\u5728c++\u4e2d\u5b9a\u4e49\u4e86\u4e24\u4e2a\u7c7b\u7ed3\u6784\uff0c \u4e00\u4e2a\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"DataListCls")," \u53e6\u4e00\u4e2a\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"DataListNode"),", \u540e\u8005\u662f\u524d\u8005\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"list")," \u53d8\u91cf\u6210\u5458\u3002\n\u6211\u4eec\u7684\u8bf7\u6c42\u6570\u636e\u53ef\u4ee5\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"DataListCls")," \u8868\u793a\uff0c\u90a3\u4e48\u8be5\u7c7b\u6570\u636e\u4f20\u9012\u5230python\u51fd\u6570\u5982\u4f55\u88ab\u6267\u884c\uff1f"),(0,p.kt)("p",null,"\u6839\u636epybind11\u624b\u518c\uff0c \u6211\u4eec\u9700\u8981\u4e3a\u4e0a\u8ff02\u4e2a\u7c7b\u7f16\u5199binding\u4ee3\u7801\uff0c\u5982\u4e0b:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-c++"},'PYBIND11_EMBEDDED_MODULE(aiges_embed, module\n) {\n    py::class_<DataListNode> dataListNode(module, "DataListNode");\n    dataListNode.\n\n                    def(py::init<>())\n\n            .def_readwrite("key", &DataListNode::key, py::return_value_policy::automatic_reference)\n            .def_readwrite("data", &DataListNode::data, py::return_value_policy::automatic_reference)\n            .def_readwrite("len", &DataListNode::len, py::return_value_policy::automatic_reference)\n            .def_readwrite("type", &DataListNode::type, py::return_value_policy::automatic_reference)\n            .def("get_data", &DataListNode::get_data, py::return_value_policy::reference);\n\n    py::class_<DataListCls> dataListCls(module, "DataListCls");\n    dataListCls.\n\n                    def(py::init<>())\n\n            .def_readwrite("list", &DataListCls::list, py::return_value_policy::automatic_reference)\n            .def("get", &DataListCls::get, py::return_value_policy::reference);\n}\n')),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"PYBIND11_EMBEDDED_MODULE"),"(aiges_embed, module) \u5b8f\u7528\u4e8e\u5b9a\u4e49\u4e00\u4e2a python\u7684 aiges_embed\u6a21\u5757\uff0c\u5176\u5185\u5bb9\u4e3a\u4e24\u4e2a\u7c7b\u7684\u5404\u4e2a\u6210\u5458\u505a\u4e86\u4e00\u4e2a\u4e0epython\u5bf9\u5e94\u7c7b\u7684\u7ed1\u5b9a\u52a8\u4f5c\uff1a"),(0,p.kt)("p",null,"\u5176\u4e2d\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"def_readwrite"),"\u7ed1\u5b9a\u53ef\u8bfb\u5199\u5c5e\u6027\uff0c\u4f7f\u5176\u4e0e\u5bf9\u5e94C\u7c7b\u4e2d\u6210\u5458\u53d8\u91cf\u3002"),(0,p.kt)("p",null,"\u5176\u4e2d\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"def"),"\u7ed1\u5b9a\u7c7b\u65b9\u6cd5\uff0c\u4f7f\u5176\u4e0e\u5bf9\u5e94C\u7c7b\u4e2d\u65b9\u6cd5(\u6709\u70b9\u7c7b\u4f3c\u4e8e\u7528c\u5b9e\u73b0\u4e00\u5957\u65b9\u6cd5\u4f9b\u7528\u6237\u5728python\u4e2d\u8c03\u7528)\uff0c\u4e0a\u8ff0 wrapperOnceExec\u65b9\u6cd5\u5728c++\u4fa7\u8c03\u7528\u540e\uff0c \u6267\u884c\u5230 python\u4ee3\u7801\u65f6\uff0c \u5982\u679c\u6267\u884c reqData.get\u65b9\u6cd5\uff0c\u5373\u4f1a\u8c03\u7528c++\u5b9e\u73b0\u7684get\u65b9\u6cd5\u3002"),(0,p.kt)("p",null,"\u56e0\u4e3aC++\u548cpython\u6709\u4e0d\u540c\u7684\u5185\u5b58\u7ba1\u7406\u673a\u5236\uff0c \u5728\u4e3a\u8fd4\u56de\u975e\u666e\u901a\u7c7b\u578b\u7684\u51fd\u6570\u521b\u5efa\u7ed1\u5b9a\u65f6\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u95ee\u9898\u3002\u4ec5\u901a\u8fc7\u67e5\u770b\u7c7b\u578b\u4fe1\u606f\uff0c Python\u4fa7\u4e0d\u77e5\u9053\u662f\u5426\u5e94\u8be5\u8d1f\u8d23\u8fd4\u56de\u503c\u5e76\u6700\u7ec8\u91ca\u653e\u5176\u8d44\u6e90\uff0c\u6216\u8005\u662f\u5426\u5e94\u8be5\u5728 C++ \u7aef\u5904\u7406\u5185\u5b58\u7684\u91ca\u653e\u3002\u4e3a\u6b64\uff0cpybind11 \u63d0\u4f9b\u4e86\u51e0\u4e2a\u8fd4\u56de\u503c\u7b56\u7565 \u6ce8\u89e3\uff0c\u53ef\u4ee5\u4f20\u9012\u7ed9module",(0,p.kt)("em",{parentName:"p"},"::def()and class"),"::def()\u51fd\u6570\u3002\u9ed8\u8ba4\u7b56\u7565\u662f\n",(0,p.kt)("inlineCode",{parentName:"p"},"return_value_policy::automatic"),"\u3002"),(0,p.kt)("p",null,"\u8fd9\u5757\u5728\u7ed1\u5b9afunction\u65f6\u9700\u8981\u7279\u522b\u6ce8\u610f\uff0c \u4e0d\u5408\u9002\u7684\u8fd4\u56de\u503c\u7b56\u7565\u53ef\u80fd\u4f1a\u5f15\u53d1\u672a\u77e5\u9519\u8bef\uff0c\u56e0\u6b64\u6b64\u90e8\u5206\u975e\u5e38\u6781\u5176\u91cd\u8981\u3002"),(0,p.kt)("p",null,"\u5173\u4e8e\u8fd4\u56de\u503c\u7b56\u7565\uff0c\u8bf7\u53c2\u8003",(0,p.kt)("a",{parentName:"p",href:"https://pybind11.readthedocs.io/en/stable/advanced/functions.html"},"\u6587\u6863")),(0,p.kt)("p",null,"\u6709\u4e86\u4ee5\u4e0a\u7684binding\u4e4b\u540e\uff0c \u5728\u5bf9\u5e94\u7684python\u89e3\u91ca\u5668\u751f\u547d\u5468\u671f\u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528  ",(0,p.kt)("inlineCode",{parentName:"p"},"import aiges_embed")," \u5bfc\u5165\u8be5c\u4fa7\u5b9a\u4e49\u7684Module\u4ee5\u53ca\u5176\u4e2d\u7684class\u7c7b\u3002"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges_c_python_wrapper/blob/master/wrapper.py"},"wrapper.py"),"\u5411\u60a8\u5c55\u793a\u4e86\u5bfc\u5165 python\u4fa7\u7684\u5b9e\u73b0\u3002"),(0,p.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a"),(0,p.kt)("p",null,"aiges_embed \u5e93\u662f\u7528\u5b8f",(0,p.kt)("inlineCode",{parentName:"p"},"PYBIND11_EMBEDDED_MODULE"),"\u5728c\u4fa7\u8fdb\u7a0b\u4e2d\u52a8\u6001\u5b9a\u4e49\uff0c\u56e0\u6b64aiges_embed\u5e93\u65e0\u6cd5\u5728\u672c\u5730\u7684python lib\u76ee\u5f55\u4e2d\u627e\u5230\uff0c\u8fd9\u7ed9\u6211\u4eec\u672c\u5730\u8c03\u8bd5\u5e26\u6765\u4e00\u5b9a\u7684\u56f0\u96be\uff0c\u5373\u7528\u6237\u4e0d\u6e05\u695aaige_embed\u4e2d\u7684DataListNode, DataListCls\u662f\u5982\u4f55\u5b9e\u73b0\uff0c\u4ee5\u53ca\u5b9a\u4e49\u7684\u3002"),(0,p.kt)("p",null,"\u56e0\u6b64\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"aiges"),"\u8fd9\u8fb9\u505a\u6cd5\u662f\u521b\u5efa\u4e00\u4e2apython\u7684 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges_python"},"sdk"),"\uff0c\u4f9b\u7528\u6237\u5728\u4f7f\u7528Pure Python(\u6ca1\u6709c\u7a0b\u5e8f\u8fd0\u884c\u73af\u5883\uff0c\u53ea\u6709python)\u73af\u5883\u8c03\u8bd5",(0,p.kt)("inlineCode",{parentName:"p"},"wrapper.py"),"\u903b\u8f91.\n\u6211\u4eec\u5728 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges_python/blob/master/aiges/dto.py#L51"},"sdk.dto"),"\u5b9e\u73b0c\u4fa7\u5b9a\u4e49\u7684\u76f8\u540c\u7c7b\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u770b\u5230 wrapper.py\u7684\u524d\u4e24\u884c:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"try:\n    from aiges_embed import ResponseData, Response, DataListNode, DataListCls  # c++\nexcept:\n    from aiges.dto import Response, ResponseData, DataListNode, DataListCls\n\n")),(0,p.kt)("p",null,"\u7b2c\u4e00\u884c\u5bfc\u5165\u6267\u884c\u6210\u529f\u7684\u6761\u4ef6\u662f,\u7531c\u8fdb\u7a0b\u52a0\u8f7d\u8fd0\u884c\u6b64wrapper.py"),(0,p.kt)("p",null,"\u7b2c\u4e8c\u884c\u5bfc\u5165\u6267\u884c\u6210\u529f\u7684\u6761\u4ef6\u662f,\u672c\u5730python\u73af\u5883\u6a21\u62df\u8fd0\u884c wrapper.py\u65f6\uff0c\u6b64\u65f6\u4f9d\u8d56\u672c\u5730python\u5e93\u662f\u5426 \u5b89\u88c5\u8fc7aiges\u4f9d\u8d56"),(0,p.kt)("p",null,"\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"pip install aiges")," \u5373\u53ef\u5b8c\u6210\u5b89\u88c5\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("em",{parentName:"strong"},"\u6ce8\u610f"))," "),(0,p.kt)("p",null,"\u80af\u5b9a\u6709\u540c\u5b66\u6bd4\u8f83\u7591\u60d1\u8fd9\u4e2a\u8bbe\u8ba1\u3002 \u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u6ca1\u6709\u53d1\u73b0pybind11\u539f\u751f\u6709\u4f55\u66f4\u4f18\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5982\u6709\u6211\u4e0d\u77e5\u9053\u7684\uff0c\u8fd8\u8bf7\u5404\u4f4d\u89c2\u4f17\u544a\u77e5\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Python\u6267\u884c\u5b8c wrapperOnceExec,C++\u5982\u4f55\u63a5\u53d7python\u8fd4\u56de\uff1f")),(0,p.kt)("p",null,"\u4e0a\u8ff0\u63cf\u8ff0\u4e86C++\u4f20\u5165\u6570\u636e\u5230Python\uff0c\u7528\u7684\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"DataListCls"),"\u7c7b\u7684\u7ed1\u5b9a\uff0c \u8fd4\u56de\u5176\u5b9e\u4e5f\u7c7b\u4f3c\uff0c\u4e5f\u662f\u5b9e\u73b0\u7c7b\u4f3c\u7ed1\u5b9a ",(0,p.kt)("inlineCode",{parentName:"p"},"Response"),"\n\u53c2\u89c1:"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges_c_python_wrapper/blob/master/pyWrapper.h#L40"},"pywraper.h")),(0,p.kt)("h3",{id:"aiges-sdk"},"aiges sdk"),(0,p.kt)("p",null,"\u4e0a\u8ff0\u63d0\u5230\u7684\u5728python\u7684 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges_python/blob/master/aiges/sdk.py#L714"},"aiges sdk"),"\u4e2d\uff0c \u6211\u4eec\u7528python\u5b9e\u73b0\u4e86\u5bf9C\u7a0b\u5e8f\u7684\u4e00\u4e2a\u4eff\u771f\uff0c\u5e76\u4e14\uff0c\u5728sdk\u4e2d\u68c0\u67e5\u7528\u6237\u5bf9 wrapper.py\u7684\u7f16\u5199\u662f\u5426\u6709\u7eb0\u6f0f\u6216\u8005\u9519\u8bef\uff0c\u63d0\u524d\u66b4\u9732wrapper.py\u53ef\u80fd\u7684\u7f16\u5199\u95ee\u9898\u3002"),(0,p.kt)("p",null,"wrapper.py\u7684\u7f16\u5199\u8bf7\u79fb\u6b65: ",(0,p.kt)("a",{parentName:"p",href:"https://xfyun.github.io/athena_website/docs/%E5%8A%A0%E8%BD%BD%E5%99%A8/Python%E6%8F%92%E4%BB%B6"},"\u5b9e\u73b0\u7b2c\u4e00\u4e2awrapper.py")),(0,p.kt)("h3",{id:"\u5173\u4e8epython\u63d2\u4ef6\u6027\u80fd"},"\u5173\u4e8epython\u63d2\u4ef6\u6027\u80fd"),(0,p.kt)("p",null,"\u4e00\u53e5\u8bdd\uff0c\u5f53\u524d\u72b6\u6001\u672a\u6b63\u5f0f\u6d4b\u8bd5python\u6027\u80fd\uff0c\u5f15\u7528\u524d\u540c\u4e8b\u4e00\u53e5\u8bdd(\u4f60\u90fd\u5f00\u59cb\u7528py\u4e86\u8fd8\u8003\u8651\u6027\u80fd\uff1f\uff1f\uff1f)\u7b49\u4e0b\uff0c\u8fd9\u5e76\u4e0d\u4e25\u8c28\uff0c\u6211\u9053\u6b49\u3002python\u4e5f\u662f\u53ef\u4ee5\u5b9e\u73b0\u6bd4\u8f83\u9ad8\u7684\u6027\u80fd\u7684\uff0c \u4e14\u542c\u6211\u4e00\u6bb5\u4e0d\u8d1f\u8d23\u4efb\u7684\u5634\u9041\u5206\u6790\uff1a"),(0,p.kt)("p",null,"1: \u5f53\u524d\u4e3b\u6d41\u7684python\u63a8\u7406\u5b9e\u73b0\uff0c\u6700\u7ec8\u8ba1\u7b97\u90e8\u5206\u8fd8\u662f\u843d\u5728\u4e86python\u4e2d\u7684\u4e00\u4e9b\u4e09\u65b9\u79d1\u5b66\u5e93\u4e2d\uff0c\u5982numpy\uff0ctensorflow\u7b49 c\u5b9e\u73b0\u7684\u7c7b\u5e93\u4e2d\u3002 \u56e0\u6b64\uff0c\u6bd4\u8f83\u8d1f\u8d23\u4efb\u7684\u4e00\u6bb5\u89e3\u91ca\u662f\uff0c\u5982\u679c\u4f60\u7684\u63a8\u7406\u63d2\u4ef6\u4e2d\u7eafpython\u7684\u903b\u8f91\u8d8a\u5c11\uff0c\u90a3\u4e48\u7406\u8bba\u4e0a\u6027\u80fd\u4e0d\u4f1a\u4e0b\u964d\u592a\u591a\u3002\u4e00\u65e6\u6709\u4e00\u4e9b\u590d\u6742\u903b\u8f91\u5728python\u4e2d\u7528\u7eafpy\u5b9e\u73b0\uff0c\u90a3\u4e48\u8be5\u5904\u4e00\u5b9a\u662f\u4e00\u4e2a\u6027\u80fd\u4e0b\u964d\u70b9\u3002"),(0,p.kt)("p",null,"2: \u5982\u679cai\u80fd\u529b\u8981\u6c42\u8f93\u5165\u4e00\u4e9b\u5927\u7684\u4e8c\u8fdb\u5236\uff0c\u6bd4\u5982\u56fe\u7247\uff0c\u97f3\u89c6\u9891\uff0c\u4eceC\u7684\u5185\u5b58\u5230 Python\u7684 bytes\u5185\u5b58\u9700\u8981\u6709\u4e00\u6b21\u62f7\u8d1d\uff0c\u53ef\u80fd\u662f\u4e00\u4e2a\u6027\u80fd\u4e0b\u964d\u70b9"),(0,p.kt)("p",null,"3: \u591a\u8bf4\u65e0\u76ca\uff0c\u5177\u4f53\u60c5\u51b5\u5177\u4f53\u5206\u6790"),(0,p.kt)("h3",{id:"\u5173\u4e8epybind11-\u63d0\u4f9b\u76840\u62f7\u8d1d\u673a\u5236"},"\u5173\u4e8epybind11 \u63d0\u4f9b\u76840\u62f7\u8d1d\u673a\u5236"),(0,p.kt)("p",null,"Python\u63d0\u4f9b\u4e86\u4e00\u5957 ",(0,p.kt)("a",{parentName:"p",href:"https://docs.python.org/3/c-api/buffer.html"},"Buffer Protocol"),"\uff0c\u57fa\u4e8e\u5b83\u53ef\u4ee5\u5b9e\u73b0\u5185\u5b580\u62f7\u8d1d\uff0c\u5728\u4e0d\u540c\u7684C\u63d2\u4ef6\u4e2d\u8fdb\u884c\u8f6c\u79fb\u5904\u7406\u3002"),(0,p.kt)("p",null,"\u7b80\u800c\u8a00\u4e4b\u5462\u5b83\u662f\u4e2a\u4ec0\u4e48\u73a9\u610f\u5462\uff1f \u6bd4\u5982\u6709\u4e00\u4e2a\u5927\u6bb5\u7684\u6570\u636e\u5feb(\u97f3\u89c6\u9891)\uff0c\u6bd4\u5982\u5c06\u5b83\u653e\u5728\u4e00\u4e2a array\u6570\u7ec4\u4e2d\uff0c\u95f2\u7740\u6211\u4eec\u9700\u8981\u7528 numpy\u53bb\u52a0\u8f7d\u5b83\uff0c\u5982\u679c\u8fd9\u4e2aarray\u6570\u7ec4\u662f\u539f\u751f\u7684python list\uff0c\u90a3\u4e48\u8fd9\u4e00\u8fc7\u7a0b\u5fc5\u7136\u662f\u6709\u62f7\u8d1d\u8fc7\u7a0b\u7684\u3002\u4f46\u662f\u5982\u679c\u8bbe\u8ba1\u4e86\u5728c\u4e2d\u5229\u7528buffer protocol\u8bbe\u8ba1\u51fa\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\uff0c\u8fd9\u4e2a\u6570\u636e\u7ed3\u6784\u4f20\u9012\u5230 numpy\u5904\u7406\u65f6\uff0c\u6570\u636e\u5757\u53ef\u4ee5\u76f4\u63a5\u6307\u9488\u8f6c\u79fb\uff0c\u65e0\u9700\u505a\u6570\u636e\u62f7\u8d1d\uff0c\u5373\u53ef\u5728numpy\u4e2d\u5904\u7406\u8be5\u6570\u636e\u5185\u5b58\u5927\u5757\uff0c \u8fd9\u5728\u8ba1\u7b97\u63a8\u7406\u573a\u666f\u5341\u5206\u6709\u7528\u3002"),(0,p.kt)("p",null,"\u5177\u4f530\u62f7\u8d1d\u4ee5\u53ca buffer protocol \u7684demo\u53c2\u8003:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://jakevdp.github.io/blog/2014/05/05/introduction-to-the-python-buffer-protocol/#:~:text=The%20Python%20buffer%20protocol%2C%20also,manipulate%20large%20arrays%20of%20data."},"\u7b80\u6613\u7684 buffer protocol demo"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://pybind11.readthedocs.io/en/stable/advanced/pycpp/numpy.html?highlight=numpy#"},"pybind11: buffer protocol")))),(0,p.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,p.kt)("p",null,"\u5229\u7528Python pybind11 \u6211\u4eec\u53ef\u4ee5\u7528\u975e\u5e38\u7b80\u6d01\u7684\u4ee3\u7801\u5b9e\u73b0 C\u548cpython\u7684\u4e92\u8c03\u7528\uff0c\u8fd9\u7ed9\u6211\u4eecAI\u5de5\u7a0b\u5316\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u53ef\u80fd\u6027\u3002"),(0,p.kt)("h3",{id:"\u7279\u522b\u9e23\u8c22"},"\u7279\u522b\u9e23\u8c22"),(0,p.kt)("p",null,"\u672c\u6587\u90e8\u5206\u53c2\u8003(chao): "),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/444805518"},"https://zhuanlan.zhihu.com/p/444805518"))))}u.isMDXComponent=!0},260:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/c++-e23975cb5828840b362d0761a717cf91.png"},1317:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/python-535813f7572c5b2cf0895fd36dfe0dcd.png"}}]);