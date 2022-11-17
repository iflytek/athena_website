"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[2717],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=o(t),d=r,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||i;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8525:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1,sidebar_label:"\u4e00\u3001Mnist\u5b8c\u6574\u793a\u4f8b"},l=void 0,p={unversionedId:"\u52a0\u8f7d\u5668/examples/mnist",id:"\u52a0\u8f7d\u5668/examples/mnist",title:"mnist",description:"\u51c6\u5907\u73af\u5883",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/\u52a0\u8f7d\u5668/examples/mnist.md",sourceDirName:"\u52a0\u8f7d\u5668/examples",slug:"/\u52a0\u8f7d\u5668/examples/mnist",permalink:"/athena_website/docs/current/\u52a0\u8f7d\u5668/examples/mnist",draft:!1,editUrl:"https://github.com/iflytek/athena_website/tree/master/docs/\u52a0\u8f7d\u5668/examples/mnist.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u4e00\u3001Mnist\u5b8c\u6574\u793a\u4f8b"},sidebar:"docSidebar",previous:{title:"full examples",permalink:"/athena_website/docs/current/category/full-examples"},next:{title:"Configuration Center",permalink:"/athena_website/docs/current/category/configuration-center"}},s={},o=[{value:"\u51c6\u5907\u73af\u5883",id:"\u51c6\u5907\u73af\u5883",level:2},{value:"0. \u88c5sdk",id:"0-\u88c5sdk",level:3},{value:"1. \u4e0b\u8f7d\u52a0\u8f7d\u5668",id:"1-\u4e0b\u8f7d\u52a0\u8f7d\u5668",level:3},{value:"\u521d\u59cb\u5316 python wrapper \u9879\u76ee",id:"\u521d\u59cb\u5316-python-wrapper-\u9879\u76ee",level:2},{value:"2. \u521d\u59cb\u9879\u76ee\u7ed3\u6784",id:"2-\u521d\u59cb\u9879\u76ee\u7ed3\u6784",level:3},{value:"3. \u89e3\u538b\u52a0\u8f7d\u5668",id:"3-\u89e3\u538b\u52a0\u8f7d\u5668",level:3},{value:"4. \u914d\u7f6ePythonGrpc\u6a21\u5f0f \u521d\u59cb\u5316aiges \u914d\u7f6e",id:"4-\u914d\u7f6epythongrpc\u6a21\u5f0f-\u521d\u59cb\u5316aiges-\u914d\u7f6e",level:3},{value:"5. \u7f16\u5199\u63a8\u7406\u903b\u8f91wrapper\uff0c\u4ee5mnist\u9879\u76ee\u4e3a\u4f8b",id:"5-\u7f16\u5199\u63a8\u7406\u903b\u8f91wrapper\u4ee5mnist\u9879\u76ee\u4e3a\u4f8b",level:4},{value:"5. Postman\u8c03\u8bd5",id:"5-postman\u8c03\u8bd5",level:3},{value:"6. swagger\u8c03\u8bd5mnist",id:"6-swagger\u8c03\u8bd5mnist",level:3}],u={toc:o};function g(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u51c6\u5907\u73af\u5883"},"\u51c6\u5907\u73af\u5883"),(0,r.kt)("p",null,"python \u7248\u672c\u8bf7\u9009\u7528 3.9+ ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iflytek/aiges/releases/tag/v3.0-alpha11"},"\u4e5f\u53ef\u4ee5\u4e0b\u8f7d\u6211\u4eec\u7684docker\u955c\u50cf")),(0,r.kt)("p",null,"\u5982\u4e0b\u6d41\u7a0b\u53ef\u5728\u5bb9\u5668\u73af\u5883\u4e2d\u8fdb\u884c (\u65e0\u9700gpu):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -itd --name mnist2 -p 1889:1888 public.ecr.aws/iflytek-open/aiges-gpu:10.1-1.17-3.9.13-ubuntu1804-v3.0-alpha11 bash\n")),(0,r.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u81ea\u5df1\u51c6\u5907\u73af\u5883\uff0c \u76f4\u63a5\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5728\u60a8\u81ea\u5df1\u7684\u4efb\u4f55\u73af\u5883\u4e0a\u8fd0\u884caiges."),(0,r.kt)("h3",{id:"0-\u88c5sdk"},"0. \u88c5sdk"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"}," pip3 install aiges==0.5.0  -i https://pypi.python.org/simple")),(0,r.kt)("h3",{id:"1-\u4e0b\u8f7d\u52a0\u8f7d\u5668"},"1. \u4e0b\u8f7d\u52a0\u8f7d\u5668"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"wget https://github.com/iflytek/aiges/releases/download/v3.0-alpha11/aiges_3.0-alpha11_linux_amd64.tar.gz"))),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316-python-wrapper-\u9879\u76ee"},"\u521d\u59cb\u5316 python wrapper \u9879\u76ee"),(0,r.kt)("p",null,"\u901a\u8fc7aiges\u521b\u5efa\u4e00\u4e2a\u540d\u4e3amnist\u7684\u9879\u76ee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m aiges create -n mnist\n")),(0,r.kt)("h3",{id:"2-\u521d\u59cb\u9879\u76ee\u7ed3\u6784"},"2. \u521d\u59cb\u9879\u76ee\u7ed3\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"root# tree mnist/\nmnist/\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 requirements.txt\n\u2514\u2500\u2500 wrapper\n    \u251c\u2500\u2500 test_data\n    \u2502\xa0\xa0 \u2514\u2500\u2500 test.png\n    \u2514\u2500\u2500 wrapper.py\n")),(0,r.kt)("h3",{id:"3-\u89e3\u538b\u52a0\u8f7d\u5668"},"3. \u89e3\u538b\u52a0\u8f7d\u5668"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tar zxvf aiges_3.0-alpha11_linux_amd64.tar.gz -C mnist ")),(0,r.kt)("p",null,"\u9996\u6b21\u6267\u884c: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"root@505a3a0e670c:/home/aiges# ./AIservice\n\u52a0\u8f7d\u5668\u8fd0\u884c\u65b9\u6cd5:\n- \u672c\u5730\u6a21\u5f0f\u8fd0\u884c\n1: ./AIservice -init  , \u521d\u59cb\u5316\u914d\u7f6e\u6587\u4ef6 aiges.toml (\u82e5\u5b58\u5728\uff0c\u5219\u4e0d\u4f1a\u66ff\u6362)\n2: ./AIservice -m=0 , \u4ec5\u7528\u4e8e\u672c\u5730\u6a21\u5f0f\u8fd0\u884c\n3: ./AIservice -mnist , \u4e0b\u8f7dmnistdemo\n- \u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f (\u5f00\u6e90\u8ba1\u5212\u5220\u9664)\n- \u66f4\u591a\u53c2\u6570\u9009\u9879: \u8bf7\u6267\u884c ./AIservice -h\n")),(0,r.kt)("p",null,"\u6b64\u65f6\u9879\u76ee\u7ed3\u6784\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  mnist git:(master) \u2717 tree -L 3 .\n.\n\u251c\u2500\u2500 AIservice\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 include\n\u2502\xa0\xa0 \u251c\u2500\u2500 type.h\n\u2502\xa0\xa0 \u2514\u2500\u2500 wrapper.h\n\u251c\u2500\u2500 library\n\u2502\xa0\xa0 \u251c\u2500\u2500 libahsc.so\n\u2502\xa0\xa0 \u251c\u2500\u2500 libIce.so.34\n\u2502\xa0\xa0 \u2514\u2500\u2500 libIceUtil.so.34\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 requirements.txt\n\u2514\u2500\u2500 wrapper\n    \u251c\u2500\u2500 test_data\n    \u2502\xa0\xa0 \u2514\u2500\u2500 test.png\n    \u2514\u2500\u2500 wrapper.py\n\n4 directories, 11 files\n")),(0,r.kt)("h3",{id:"4-\u914d\u7f6epythongrpc\u6a21\u5f0f-\u521d\u59cb\u5316aiges-\u914d\u7f6e"},"4. \u914d\u7f6ePythonGrpc\u6a21\u5f0f \u521d\u59cb\u5316aiges \u914d\u7f6e"),(0,r.kt)("p",null,"\u987a\u5e8f\u6267\u884c\u5982\u4e0b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"}," export AIGES_PLUGIN_MODE=python"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"./AIservice -init"),"  \u3010\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u751f\u6210\u4e00\u4e2a aiges.toml\u3011")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"./AIservice -m 0 -c aiges.toml  -s svcName ")," "))),(0,r.kt)("p",null,"\u542f\u52a8\u5f15\u64ce\uff0c\u6b64\u65f6\u7ed3\u679c\u5982\u4e0b:\u3010\u6ce8\u610fsvcName\u5fc5\u987b\u548caiges \u7684section\u5bf9\u5e94,\u5f53\u524d\u9ed8\u8ba4\u5c31\u662f svcName\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"root@012d31456c50:/home/aiges/mnist# ./AIservice -m 0 -c aiges.toml  -s svcName\n2022/11/15 18:22:01 widgetpy.go:26: Starting Using Python :\nconfig.toml version:\n2022/11/15 18:22:01 utils.NewLocalLog success. -> LOGLEVEL:debug, FILENAME:./log/aiges.log, MAXSIZE:3, MAXBACKUPS:3, MAXAGE:3\n2022/11/15 18:22:01 host2ip->ip:0.0.0.0,port:5090\n2022/11/15 18:22:01 finderSwitch:0,finderSwitchErr:<nil>\n2022/11/15 18:22:01 about to deal with hermes.\n2022/11/15 18:22:02 NewSessionManager success.\n2022/11/15 18:22:02 NewSidGenerator success.\n2022/11/15 18:22:02 fn:AbleTrace,able:false\n2022/11/15 18:22:02 about to deal finder.\n2022/11/15 18:22:02 about to deal metrics.\n2022/11/15 18:22:02 metrics is disable\n2022/11/15 18:22:02 about to deal rateLimiter.\n2022/11/15 18:22:02 about to deal vCpuManager.\n2022/11/15 18:22:02 about to deal bvtVerifier.\n2022/11/15 18:22:02 namespace not set, use default\n2022/11/15 18:22:02 bvt is disable\nheader pass list: []\n2022-11-15T18:22:02.476+0800 [WARN]  python-plugin: plugin configured with a nil SecureConfig\n2022-11-15T18:22:02.477+0800 [DEBUG] python-plugin: starting plugin: path=/bin/sh args=[sh, -c, \"/usr/bin/env python -m aiges.serve\"]\n2022-11-15T18:22:02.478+0800 [DEBUG] python-plugin: plugin started: path=/bin/sh pid=126\n2022-11-15T18:22:02.478+0800 [DEBUG] python-plugin: waiting for RPC address: path=/bin/sh\n2022-11-15T18:22:02.653+0800 [DEBUG] python-plugin: using plugin: version=1\n2022-11-15T18:22:02.655+0800 [DEBUG] python-plugin.stdio: received EOF, stopping recv loop: err=\"rpc error: code = Unimplemented desc = Method not found!\"\n2022-11-15T18:22:02.656+0800 [DEBUG] python-plugin.sh:  root:wrapperInit:107 - INFO:  Importing module from wrapper.py: wrapper\n2022-11-15T18:22:02.657+0800 [DEBUG] python-plugin.sh:  root:wrapperInit:119 - ERROR:  module 'wrapper' has no attribute 'Wrapper'\n2022/11/15 18:22:02 grpc.go:20: Call WrapperInit Failed...ret: 30001\n")),(0,r.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u7684 wrapper\u8fd8\u672a\u51c6\u5907\u597d"),(0,r.kt)("h4",{id:"5-\u7f16\u5199\u63a8\u7406\u903b\u8f91wrapper\u4ee5mnist\u9879\u76ee\u4e3a\u4f8b"},"5. \u7f16\u5199\u63a8\u7406\u903b\u8f91wrapper\uff0c\u4ee5mnist\u9879\u76ee\u4e3a\u4f8b"),(0,r.kt)("p",null,"\u4e0b\u8f7d mnist demo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"}," ./AIservice -mnist"))),(0,r.kt)("p",null,"\u9ed8\u8ba4\u4f1a\u4e0b\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"}," https://github.com/iflytek/aiges_demo.git")," \u9879\u76ee,\u5e76\u89e3\u538b\u5230\u5f53\u524d\u76ee\u5f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"aiges_demo")),(0,r.kt)("p",null,"\u5982\u679c\u6b64\u547d\u4ee4\u957f\u65f6\u95f4\u6ca1\u6709\u53cd\u5e94\uff0c\u53ef\u80fd\u662f\u56e0\u4e3aGFW\u95ee\u9898\uff0c \u53ef\u624b\u52a8\u4e0b\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/iflytek/aiges_demo/archive/refs/tags/v1.0.0.zip")),(0,r.kt)("p",null,"unzip \u89e3\u538b\u5230\u5f53 aiges_demo\u76ee\u5f55\u4e2d\u5373\u53ef\u3010\u6ce8\u610f\u624b\u52a8\u89e3\u538b\u53ef\u80fd\u5d4c\u5957\u4e86\u4e00\u5c42 aiges_demo_1.0.0\u76ee\u5f55\u3011\u3002"),(0,r.kt)("p",null,"\u5220\u9664 \u5f53\u524dmnist\u4e0b\u9ed8\u8ba4\u751f\u6210\u7684wrapper\u76ee\u5f55\uff0c\u66ff\u6362\u4e0a\u8ff0\u7684demo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"}," rm -r wrapper")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cp -ra aiges_demo/mnist/wrapper/  ./")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"}," cp -ra aiges_demo/mnist/requirements.txt mnist/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"}," pip install -r requirements.txt")),(0,r.kt)("li",{parentName:"ul"},"`",(0,r.kt)("inlineCode",{parentName:"li"}," export AIGES_PLUGIN_MODE=python")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"}," export PYTHONPATH=/home/aiges/mnist/wrapper")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"}," \u518d\u6b21\u8fd0\u884c\u5f15\u64ce  ./AIservice -m 0 -c aiges.toml  -s svcName"))),(0,r.kt)("p",null,"\u6807\u51c6\u8f93\u51fa\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'2022/11/15 21:26:29 widgetpy.go:26: Starting Using Python :\nconfig.toml version:\n2022/11/15 21:26:29 utils.NewLocalLog success. -> LOGLEVEL:debug, FILENAME:./log/aiges.log, MAXSIZE:3, MAXBACKUPS:3, MAXAGE:3\n2022/11/15 21:26:29 host2ip->ip:0.0.0.0,port:5090\n2022/11/15 21:26:29 finderSwitch:0,finderSwitchErr:<nil>\n2022/11/15 21:26:29 about to deal with hermes.\n2022/11/15 21:26:30 NewSessionManager success.\n2022/11/15 21:26:30 NewSidGenerator success.\n2022/11/15 21:26:30 fn:AbleTrace,able:false\n2022/11/15 21:26:30 about to deal finder.\n2022/11/15 21:26:30 about to deal metrics.\n2022/11/15 21:26:30 metrics is disable\n2022/11/15 21:26:30 about to deal rateLimiter.\n2022/11/15 21:26:30 about to deal vCpuManager.\n2022/11/15 21:26:30 about to deal bvtVerifier.\n2022/11/15 21:26:30 namespace not set, use default\n2022/11/15 21:26:30 bvt is disable\nheader pass list: []\n[GIN-debug] [WARNING] Creating an Engine instance with the Logger and Recovery middleware already attached.\n\n[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.\n - using env:   export GIN_MODE=release\n - using code:  gin.SetMode(gin.ReleaseMode)\n\n[GIN-debug] GET    /v1/svcName               --\x3e github.com/xfyun/aiges/httproto.(*Server).ginHandler.func1 (3 handlers)\n[GIN-debug] POST   /v1/svcName               --\x3e github.com/xfyun/aiges/httproto.(*Server).ginHandler.func1 (3 handlers)\n[GIN-debug] PUT    /v1/svcName               --\x3e github.com/xfyun/aiges/httproto.(*Server).ginHandler.func1 (3 handlers)\n[GIN-debug] PATCH  /v1/svcName               --\x3e github.com/xfyun/aiges/httproto.(*Server).ginHandler.func1 (3 handlers)\n[GIN-debug] HEAD   /v1/svcName               --\x3e github.com/xfyun/aiges/httproto.(*Server).ginHandler.func1 (3 handlers)\n2022-11-15T21:26:30.116+0800 [WARN]  python-plugin: plugin configured with a nil SecureConfig\n2022-11-15T21:26:30.116+0800 [DEBUG] python-plugin: starting plugin: path=/bin/sh args=[sh, -c, "/usr/bin/env python -m aiges.serve"]\n[GIN-debug] OPTIONS /v1/svcName               --\x3e github.com/xfyun/aiges/httproto.(*Server).ginHandler.func1 (3 handlers)\n[GIN-debug] DELETE /v1/svcName               --\x3e github.com/xfyun/aiges/httproto.(*Server).ginHandler.func1 (3 handlers)\n[GIN-debug] CONNECT /v1/svcName               --\x3e github.com/xfyun/aiges/httproto.(*Server).ginHandler.func1 (3 handlers)\n[GIN-debug] TRACE  /v1/svcName               --\x3e github.com/xfyun/aiges/httproto.(*Server).ginHandler.func1 (3 handlers)\n[GIN-debug] GET    /test.json                --\x3e github.com/xfyun/aiges/httproto.getDemo (3 handlers)\n2022-11-15T21:26:30.116+0800 [DEBUG] python-plugin: plugin started: path=/bin/sh pid=1081\n2022-11-15T21:26:30.116+0800 [DEBUG] python-plugin: waiting for RPC address: path=/bin/sh\n[GIN-debug] GET    /swagger/*any             --\x3e github.com/swaggo/gin-swagger.CustomWrapHandler.func1 (3 handlers)\n2022-11-15T21:26:30.242+0800 [DEBUG] python-plugin: using plugin: version=1\n2022-11-15T21:26:30.244+0800 [DEBUG] python-plugin.stdio: received EOF, stopping recv loop: err="rpc error: code = Unimplemented desc = Method not found!"\n2022-11-15T21:26:30.245+0800 [DEBUG] python-plugin.sh:  root:wrapperInit:107 - INFO:  Importing module from wrapper.py: wrapper\n2022-11-15T21:26:31.642+0800 [DEBUG] python-plugin.sh:  root:_check_path:151 - WARNING:  <class \'FileNotFoundError\'>\n2022-11-15T21:26:31.643+0800 [DEBUG] python-plugin.sh:  root:wrapperInit:112 - INFO:  User Wrapper newed Success.. starting call user init functions...\n2022-11-15T21:26:31.643+0800 [DEBUG] python-plugin.sh:  root:wrapperInit:85 - INFO:  Initializing ...\n2022-11-15T21:26:31.666+0800 [DEBUG] python-plugin.sh:  root:wrapperSchema:141 - INFO:  Entering warpperSchema ...\n2022-11-15T21:26:31.672+0800 [DEBUG] python-plugin.sh:  root:test_value:233 - WARNING:  test_data/0.png not exist.. check\n2022-11-15T21:26:31.672+0800 [DEBUG] python-plugin.sh:  root:schema:434 - INFO:  Genrating Schema...\naiService.Init: init success!\n2022/11/15 21:26:31 about to x.run\n2022/11/15 21:26:31 about init interceptor\n2022/11/15 21:26:31 success init interceptor\n2022/11/15 21:26:31 about to call grpc.NewServer(opts...),maxRecv:4194304,maxSend:4194304\n2022/11/15 21:26:31 about to call utils.RegisterXsfCallServer(x.grpcserver, srv)\n2022/11/15 21:26:31 about to call reflection.Register(x.grpcserver)\n2022/11/15 21:26:31 about to exec userCallback\n2022/11/15 21:26:31 deal with UserHighPriority\n2022/11/15 21:26:31 deal with UserNormalPriority\n2022/11/15 21:26:31 deal with UserLowPriority\n2022/11/15 21:26:31 about to call x.grpcserver.Serve\n2022/11/15 21:26:31 about to check if the grpc service([::]:5090) is started\n2022/11/15 21:26:31 grpc server([::]:5090) started successfully\n2022/11/15 21:26:31 bvtVerifierInst is disable,ignore...\n2022/11/15 21:26:31 about to call finderadapter.Register([::]:5090)\n2022/11/15 21:26:31 about to exec fcDelayInst\n2022/11/15 21:26:31 about to call fc delay task\n2022/11/15 21:26:31 blocking for grpcserver.Serve\n')),(0,r.kt)("p",null,"\u9ed8\u8ba4\u76d1\u542c http\u7aef\u53e3\u662f: 1888,  \u53ef\u4eceaiges.toml\u6587\u4ef6\u4e2d\u770b\u5230"),(0,r.kt)("h3",{id:"5-postman\u8c03\u8bd5"},"5. Postman\u8c03\u8bd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"api\u5730\u5740: http://youIP:1888/v1/svcName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"post\u65b9\u5f0f\u8bf7\u6c42: body \u90e8\u5206"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},' {\n    "header":{\n        "appid":"123456",\n        "uid":"39769795890",\n        "did":"SR082321940000200",\n        "imei":"8664020318693660",\n        "imsi":"4600264952729100",\n        "mac":"6c:92:bf:65:c6:14",\n        "net_type":"wifi",\n        "net_isp":"CMCC",\n        "status":3,\n        "res_id":""\n    },\n    "parameter":{\n        "svcName":{\n            "result":{\n                "encoding":"utf8",\n                "compress":"raw",\n                "format":"plain",\n                "data_type": "text"\n            }\n        }\n    },\n    "payload":{\n        "img":{\n            "encoding":"jpg",\n            "status":3,\n            "image":"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"\n        }\n        \n    }\n}\n')),(0,r.kt)("p",null,"\u8fd4\u56de\u54cd\u5e94"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "header": {\n        "code": 0,\n        "sid": "0d9115af-0c6b-4526-a539-05b3c8aa9cfa",\n        "status": 3\n    },\n    "payload": {\n        "result": {\n            "compress": "raw",\n            "encoding": "utf8",\n            "format": "plain",\n            "seq": "0",\n            "status": "3",\n            "text":"{\\"result\\": 7, \\"msg\\": \\"\\\u8bc6\\\u522b\\\u7ed3\\\u679c\\\u4e3a\\\u6570\\\u5b57: 7\\"}"\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"6-swagger\u8c03\u8bd5mnist"},"6. swagger\u8c03\u8bd5mnist"),(0,r.kt)("p",null,"\u5f53\u524d\u9ed8\u8ba4\u96c6\u6210\u4e86 swagger2.0 for openapi3.0."),(0,r.kt)("p",null,"\u542f\u52a8\u540e\u8bbf\u95ee:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://<yourip>:1888")),(0,r.kt)("p",null,"\u5982\u4e0b\u56fe:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:t(9308).Z,width:"1496",height:"1031"})),(0,r.kt)("p",null,"Try it out ! \u53ef\u4ee5\u590d\u5236\u4e0a\u8ff0 postman\u90e8\u5206\u7684 body\u8fdb\u884c\u8bf7\u6c42\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img2",src:t(3850).Z,width:"1426",height:"951"})),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u8bc6\u522b\u7ed3\u679c\u8fd4\u56de"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u81f3\u6b64\uff0c\u5355\u72ec\u7684aiges\u52a0\u8f7d\u5668\u5b8c\u6210\u57fa\u672c\u8fd0\u884c")),(0,r.kt)("p",null,"\u7531\u4e8ealpha \u662f\u88c1\u526a\u540e\uff0c\u5e76\u521a\u521a\u5408\u5e76\u4e86 http\u63a5\u53e3\u90e8\u5206\uff0c\u5f88\u591a\u529f\u80fd\u8fd8\u4e0d\u5b8c\u5584\uff0c\u4f46\u662f\u57fa\u672c\u53ef\u4ee5\u6258\u7ba1\u80fd\u529b"),(0,r.kt)("p",null,"\u76ee\u524d\u5df2\u77e5\u95ee\u9898:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"python\u8fdb\u7a0b\u9000\u51fa\u672a\u505a\u5904\u7406\uff0c\u9700\u8981\u8ddf\u968f\u7236\u8fdb\u7a0b\u81ea\u52a8\u9000\u51fa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u90e8\u5206\u8fd0\u884c\u5f02\u5e38\u6682\u65f6\u6ca1\u65f6\u95f4\u5904\u7406"))))}g.isMDXComponent=!0},9308:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/swagger-92b62ce9c79cf4a206c05e9b1918a247.jpg"},3850:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/swagger2.jpg-2f495087773f73fe7ffcd7ed9a1f9eb2.png"}}]);