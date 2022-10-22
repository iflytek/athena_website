"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[15],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>x});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=r.createContext({}),l=function(e){var t=r.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(o),x=n,m=u["".concat(a,".").concat(x)]||u[x]||p[x]||s;return o?r.createElement(m,i(i({ref:t},d),{},{components:o})):r.createElement(m,i({ref:t},d))}));function x(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,i=new Array(s);i[0]=u;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<s;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9059:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=o(7462),n=(o(7294),o(3905));const s={sidebar_position:2,sidebar_label:"Install Service With Helm Chart"},i="Install Service With Helm Chart",c={unversionedId:"\u5feb\u901f\u5f00\u59cb/\u4ecehelm\u5b89\u88c5",id:"\u5feb\u901f\u5f00\u59cb/\u4ecehelm\u5b89\u88c5",title:"Install Service With Helm Chart",description:"Precondition",source:"@site/docs/\u5feb\u901f\u5f00\u59cb/\u4ecehelm\u5b89\u88c5.md",sourceDirName:"\u5feb\u901f\u5f00\u59cb",slug:"/\u5feb\u901f\u5f00\u59cb/\u4ecehelm\u5b89\u88c5",permalink:"/athena_website/en/docs/next/\u5feb\u901f\u5f00\u59cb/\u4ecehelm\u5b89\u88c5",draft:!1,editUrl:"https://github.com/iflytek/athena_website/tree/master/docs/\u5feb\u901f\u5f00\u59cb/\u4ecehelm\u5b89\u88c5.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Install Service With Helm Chart"},sidebar:"docSidebar",previous:{title:"Concept",permalink:"/athena_website/en/docs/next/\u5feb\u901f\u5f00\u59cb/\u6982\u5ff5"},next:{title:"Install Service With Sealos",permalink:"/athena_website/en/docs/next/\u5feb\u901f\u5f00\u59cb/\u4ecesealos\u5b89\u88c5"}},a={},l=[{value:"Precondition",id:"precondition",level:2},{value:"Install",id:"install",level:2},{value:"Configure Demo.py",id:"configure-demopy",level:2},{value:"Testing Demo.py",id:"testing-demopy",level:2},{value:"Detected image",id:"detected-image",level:2},{value:"Result display",id:"result-display",level:2}],d={toc:l};function p(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"install-service-with-helm-chart"},"Install Service With Helm Chart"),(0,n.kt)("h2",{id:"precondition"},"Precondition"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deploy k8s cluster"),(0,n.kt)("li",{parentName:"ul"},"Install helm")),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd chart\nhelm install athena . \n\n## Wait for the AthenaServing service components to start successfully\nhelm  install mmocr .\n")),(0,n.kt)("h2",{id:"configure-demopy"},"Configure Demo.py"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'image = open("demo_text_det.jpg","rb")     # image to be detected\nimg = base64.b64encode(image.read())\n\n\nurl = "http://172.16.59.17:30889/mmocr"    # url can be hostIP:nodePort or svcIP:svcPort\nurl = "http://172.16.59.17:30889/v1/private/mmocr"\nmethod = "POST"\nheaders = {"Content-Type":"application/json"}\ndata = {\n    "header": {\n        "app_id": "123456",\n        "uid": "39769795890",\n        "did": "SR082321940000200",\n        "imei": "8664020318693660",\n        "imsi": "4600264952729100",\n        "mac": "6c:92:bf:65:c6:14",\n        "net_type": "wifi",\n        "net_isp": "CMCC",\n        "status": 3,\n        "request_id": None\n    },\n    "parameter": {\n        "mmocr": {\n            "category": "ai_category",\n            "application_mode": "common_gpu",\n            "gpu_id": "first",\n            "gpu_type": "T4G16",\n            "boxes": {\n                "encoding": "utf8",\n                "compress": "raw",\n                "format": "json"\n            }\n        }\n    },\n    "payload": {\n        "data": {\n            "encoding": "jpg",\n            "image": img.decode("utf-8"),\n            "status": 3\n        }\n    }\n}\n\n')),(0,n.kt)("h2",{id:"testing-demopy"},"Testing Demo.py"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"python demo.py\n")),(0,n.kt)("h2",{id:"detected-image"},"Detected image"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:o(4430).Z,width:"460",height:"276"})),(0,n.kt)("h2",{id:"result-display"},"Result display"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"##################################\nMMocr Result: box located at [190, 37, 253, 31, 254, 46, 191, 52], box score is 0.9566415548324585.  Detected text is nboroughofs , text  score is 1.0...\nMMocr Result: box located at [253, 47, 257, 36, 287, 47, 282, 58], box score is 0.9649642705917358.  Detected text is fsouthw , text  score is 1.0...\nMMocr Result: box located at [157, 59, 188, 41, 194, 52, 163, 70], box score is 0.9521175622940063.  Detected text is londond , text  score is 0.9897959183673469...\nMMocr Result: box located at [280, 58, 286, 50, 306, 67, 300, 74], box score is 0.9397556781768799.  Detected text is thwark , text  score is 1.0...\nMMocr Result: box located at [252, 78, 295, 78, 295, 98, 252, 98], box score is 0.9694718718528748.  Detected text is hill , text  score is 1.0...\nMMocr Result: box located at [165, 78, 247, 78, 247, 99, 165, 99], box score is 0.9548642039299011.  Detected text is octavia , text  score is 1.0...\nMMocr Result: box located at [164, 105, 215, 103, 216, 121, 165, 123], box score is 0.9806956052780151.  Detected text is social , text  score is 1.0...\nMMocr Result: box located at [219, 104, 294, 104, 294, 122, 219, 122], box score is 0.9688025116920471.  Detected text is reformer , text  score is 1.0...\nMMocr Result: box located at [150, 124, 226, 124, 226, 141, 150, 141], box score is 0.9752051830291748.  Detected text is established , text  score is 1.0...\nMMocr Result: box located at [229, 124, 255, 124, 255, 140, 229, 140], box score is 0.94972825050354.  Detected text is this , text  score is 1.0...\nMMocr Result: box located at [259, 125, 305, 123, 306, 139, 260, 142], box score is 0.9752089977264404.  Detected text is garden , text  score is 1.1666666666666667...\nMMocr Result: box located at [166, 142, 193, 141, 194, 156, 167, 157], box score is 0.9731062650680542.  Detected text is hall , text  score is 1.0...\nMMocr Result: box located at [198, 142, 223, 142, 223, 156, 198, 156], box score is 0.9548938870429993.  Detected text is and , text  score is 1.0...\nMMocr Result: box located at [228, 144, 286, 144, 286, 159, 228, 159], box score is 0.977089524269104.  Detected text is cottages , text  score is 1.25...\nMMocr Result: box located at [180, 158, 205, 158, 205, 172, 180, 172], box score is 0.9400062561035156.  Detected text is and , text  score is 1.0...\nMMocr Result: box located at [210, 160, 279, 158, 279, 172, 210, 174], box score is 0.9543584585189819.  Detected text is pioneered , text  score is 1.0...\nMMocr Result: box located at [226, 176, 277, 176, 277, 188, 226, 188], box score is 0.9748533964157104.  Detected text is cadets , text  score is 1.0...\nMMocr Result: box located at [183, 177, 223, 177, 223, 189, 183, 189], box score is 0.9633153676986694.  Detected text is army , text  score is 1.0...\nMMocr Result: box located at [201, 190, 235, 190, 235, 204, 201, 204], box score is 0.9714152216911316.  Detected text is 1887 , text  score is 1.25...\nMMocr Result: box located at [175, 213, 180, 201, 211, 212, 206, 225], box score is 0.9704344868659973.  Detected text is vted , text  score is 0.9191176470588236...\nMMocr Result: box located at [241, 213, 278, 200, 283, 213, 246, 227], box score is 0.9607459902763367.  Detected text is epeople , text  score is 1.0...\nMMocr Result: box located at [208, 224, 210, 212, 223, 214, 220, 227], box score is 0.9337806701660156.  Detected text is by , text  score is 1.0...\nMMocr Result: box located at [223, 214, 240, 214, 240, 226, 223, 226], box score is 0.969144344329834.  Detected text is the , text  score is 1.0...\n")))}p.isMDXComponent=!0},4430:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/demo_text_det-8e25728b3a2a4461334019ef4efce3b7.jpg"}}]);