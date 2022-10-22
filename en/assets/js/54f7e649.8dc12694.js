"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[2537],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),m=s(a),c=r,g=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9118:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:4,sidebar_label:"Standard Protocol"},i="Standard Protocol",d={unversionedId:"\u6807\u51c6\u534f\u8bae",id:"version-2.2.0/\u6807\u51c6\u534f\u8bae",title:"Standard Protocol",description:"ASE API protocol",source:"@site/versioned_docs/version-2.2.0/\u6807\u51c6\u534f\u8bae.md",sourceDirName:".",slug:"/\u6807\u51c6\u534f\u8bae",permalink:"/athena_website/en/docs/2.2.0/\u6807\u51c6\u534f\u8bae",draft:!1,editUrl:"https://github.com/iflytek/athena_website/tree/master/versioned_docs/version-2.2.0/\u6807\u51c6\u534f\u8bae.md",tags:[],version:"2.2.0",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Standard Protocol"},sidebar:"docSidebar",previous:{title:"\u4ece\u57fa\u7840\u955c\u50cf\u6784\u5efa\u4e1a\u52a1\u955c\u50cf",permalink:"/athena_website/en/docs/2.2.0/\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b/\u4ece\u57fa\u7840\u955c\u50cf\u6784\u5efa"}},o={},s=[{value:"ASE API protocol",id:"ase-api-protocol",level:2},{value:"1. Overall description",id:"1-overall-description",level:3},{value:"2 Application Developer protocol",id:"2-application-developer-protocol",level:3},{value:"2.1 Metadata",id:"21-metadata",level:4},{value:"2.1.1 text description",id:"211-text-description",level:5},{value:"2.1.2 audio description",id:"212-audio-description",level:5},{value:"2.1.3 to be improved",id:"213-to-be-improved",level:5},{value:"2.2  Request Protocol Description",id:"22--request-protocol-description",level:4},{value:"2.2.1 Example of single capability and single data",id:"221-example-of-single-capability-and-single-data",level:5},{value:"2.2.2  Example of single capability and multiple data",id:"222--example-of-single-capability-and-multiple-data",level:5},{value:"2.2.3 Description when multiple data ranges feature",id:"223-description-when-multiple-data-ranges-feature",level:5},{value:"2.2.4 Example of multiple capability and multiple data",id:"224-example-of-multiple-capability-and-multiple-data",level:5},{value:"2.2.5  In streaming scenarios, subsequent packet descriptions",id:"225--in-streaming-scenarios-subsequent-packet-descriptions",level:5},{value:"2.3 Back to protocol description",id:"23-back-to-protocol-description",level:4},{value:"2.3.1 single output description",id:"231-single-output-description",level:5},{value:"2.3.2 Multiple output description",id:"232-multiple-output-description",level:5},{value:"2.4 Constraints on System Parameters",id:"24-constraints-on-system-parameters",level:4},{value:"2.4.1 header field",id:"241-header-field",level:5},{value:"3.1 routing information",id:"31-routing-information",level:3},{value:"3.1 Metadata adjustment",id:"31-metadata-adjustment",level:4}],p={toc:s};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"standard-protocol"},"Standard Protocol"),(0,r.kt)("h2",{id:"ase-api-protocol"},"ASE API protocol"),(0,r.kt)("h3",{id:"1-overall-description"},"1. Overall description"),(0,r.kt)("p",null,"This protocol is oriented to AthenaServing, and it constrains and defines user development and internal business protocols."),(0,r.kt)("h3",{id:"2-application-developer-protocol"},"2 Application Developer protocol"),(0,r.kt)("p",null,"The protocol is described in json."),(0,r.kt)("h4",{id:"21-metadata"},"2.1 Metadata"),(0,r.kt)("p",null,"Since AI service requests are generally used for data calculation and processing, some basic data needs to be carried in the interaction protocol. This protocol abstracts and binds data. In order to improve adaptability, this protocol enumerates and defines metadata. The basic description of the corresponding data type is defined in the metadata structure, and the description of the K-V single-layer structure is also allowed to be added. When the user defines data, after selecting the data type, the system will actively provide structure fields."),(0,r.kt)("h5",{id:"211-text-description"},"2.1.1 text description"),(0,r.kt)("p",null,"Structure example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "encoding":"utf8", \n    "status":0,\n    "seq": 1\uff0c\n    "compress":"gzip",\n    "custom1":"zz",\n    "text":"hello word"\n} \n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encoding"),(0,r.kt)("td",{parentName:"tr",align:null},"Text encoding"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Value range can be enumerated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Data status"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The value range is 0 (start), 1 (continue), 2 (end), 3 (one transmission)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"text data"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"text data, base64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seq"),(0,r.kt)("td",{parentName:"tr",align:null},"Data serial number"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the block number of the data, optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"custom1"),(0,r.kt)("td",{parentName:"tr",align:null},"User-defined parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"string or int"),(0,r.kt)("td",{parentName:"tr",align:null},"User-defined, first-level parameter")))),(0,r.kt)("h5",{id:"212-audio-description"},"2.1.2 audio description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "status":0\uff0c\n    "sample_rate":16000,\n    "channels":1,\n    "bit_depth":16,\n    "encoding":"opus",\n    "seq": 1,\n    "custom1":"zz",\n    "audio":"xxxxxxxxxxxxxxxxxxxxxxxxxx" # \u97f3\u9891\u6570\u636e\n} \n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encoding"),(0,r.kt)("td",{parentName:"tr",align:null},"Audio encoding"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Value range can be enumerated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Data status"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The value range is 0 (start), 1 (continue), 2 (end), 3 (one transmission)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audio"),(0,r.kt)("td",{parentName:"tr",align:null},"audio data"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"is text data, base64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sample_rate"),(0,r.kt)("td",{parentName:"tr",align:null},"sample rate"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"audio sample rate, enumerable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channels"),(0,r.kt)("td",{parentName:"tr",align:null},"number of channels"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"number of channels, enumerable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bit_depth"),(0,r.kt)("td",{parentName:"tr",align:null},"bit depth"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"unit bit, enumerable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seq"),(0,r.kt)("td",{parentName:"tr",align:null},"Data serial number"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the block number of the data, optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"custom1"),(0,r.kt)("td",{parentName:"tr",align:null},"User-defined parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"string or int"),(0,r.kt)("td",{parentName:"tr",align:null},"User-defined, first-level parameter")))),(0,r.kt)("h5",{id:"213-to-be-improved"},"2.1.3 to be improved"),(0,r.kt)("p",null,"1 image",(0,r.kt)("br",{parentName:"p"}),"\n","2 Audio",(0,r.kt)("br",{parentName:"p"}),"\n","3 Other binary data, etc.  "),(0,r.kt)("h4",{id:"22--request-protocol-description"},"2.2  Request Protocol Description"),(0,r.kt)("p",null,"It is divided into three parts: platform parameters, capability parameters, and transmission data. The request protocol template is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n     "header":{},\n     "parameter":{\n         "service_iat":{\n              "accept_1":{\n            }\n         }\n     }, \n     "payload":{\n        "service_iat":{\n        }\n     }\n}\n')),(0,r.kt)("p",null,"Field Description:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header"),(0,r.kt)("td",{parentName:"tr",align:null},"Platform parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters used to control platform features, such as appid, etc. This structure has only one level and cannot be modified by developers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"Ability parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to control the AI engine feature switch. This segment will be transparently transmitted directly to the engine, multi-level structure, structure is determined, unenumerated structure is a first-level structure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payload"),(0,r.kt)("td",{parentName:"tr",align:null},"input data"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"data used to carry the request, multi-level structure, structure determination")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accept_1"),(0,r.kt)("td",{parentName:"tr",align:null},"Input data"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"User-defined parameters used to describe the encoding\\data format of the returned result, this structure is defined by the attributes defined in the metadata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service_iat"),(0,r.kt)("td",{parentName:"tr",align:null},"Input data"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"User-defined, can be the same as accept_1 by default. Used to carry the requested data, multi-level structure, structure determination")))),(0,r.kt)("h5",{id:"221-example-of-single-capability-and-single-data"},"2.2.1 Example of single capability and single data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "header":{\n    "appid":"1234",\n    "uid":"d233"\n    },\n    "parameter":{\n        "service_iat":{\n           "language": "zh_cn",\n           "domain":"iat",\n           "accent": "mandarin"\n           }\n    }, \n    "payload":{\n        "service_iat":{\n        "status":0,\n        "format":"audio/L16;rate=16000",\n        "encoding":"raw",\n        "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n        }\n     }\n } \n')),(0,r.kt)("h5",{id:"222--example-of-single-capability-and-multiple-data"},"2.2.2  Example of single capability and multiple data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    {\n    "header":{\n        "appid":"1234",\n        "uid":"1234"\n    },\n\n    "parameter":{\n      "service_iat":{\n           "language": "zh_cn",\n           "domain":"iat",\n           "accent": "mandarin"\n           }\n    },\n\n    "payload":{\n        "data_1":{\n            "status":0,\n            "format":"audio/L16;rate=16000",\n            "encoding":"raw",\n              "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n         },\n         "data_2":{\n            "status":0,\n            "format":"audio/L16;rate=16000",\n            "encoding":"raw",\n               "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n     }\n}\n} \n')),(0,r.kt)("p",null,"Structure description:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The payload is a multi-level structure."),(0,r.kt)("li",{parentName:"ol"},"In the case of multiple data, the payload is described by different data IDs as keys, such as data_1, data_2 in the example."),(0,r.kt)("li",{parentName:"ol"},"The data ID is user-defined.")),(0,r.kt)("h5",{id:"223-description-when-multiple-data-ranges-feature"},"2.2.3 Description when multiple data ranges feature"),(0,r.kt)("p",null,"For the return of multiple data streams, the description of multiple data characteristics needs to be specified in the input parameter (parameter section)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"parameter":{\n      "service_iat":{\n           "language": "zh_cn",\n           "domain":"iat",\n           "accent": "mandarin",\n           "accept_1":{\n            "format":"audio/L16;rate=16000",\n            "encoding":"raw"\n            },\n           "accept_2":{\n            "format":"audio/L16;rate=16000",\n            "encoding":"raw"\n           }\n       \uff5d\n\n    } \n')),(0,r.kt)("p",null,"Structure description:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"At this time, the parameter is a multi-level structure"),(0,r.kt)("li",{parentName:"ol"},"In the case of multiple data, parameter uses different IDs as keys to describe different results, such as accept_1, accept_2 in the example"),(0,r.kt)("li",{parentName:"ol"},"Accept ID is user-defined")),(0,r.kt)("h5",{id:"224-example-of-multiple-capability-and-multiple-data"},"2.2.4 Example of multiple capability and multiple data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    {\n        "header":{\n            "appid":"1234",\n            "uid":"1234"\n        },\n        "parameter":{\n            "service_1":{\n\n                   "language": "zh_cn",\n                   "domain":"iat",\n                   "accent": "mandarin"\n            },\n            "service_2":{\n\n                   "language": "zh_cn",\n                   "domain":"iat",\n                   "accent": "mandarin"\n            }\n        },\n\n        "payload":{\n            "service_1_data_1":{\n                "status":0,\n                "format":"audio/L16;rate=16000",\n                "encoding":"raw",\n                 "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n                  },\n\n             "service_2_data_1":{\n                "status":0,\n                "format":"audio/L16;rate=16000",\n                "encoding":"raw",\n                 "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n              },\n             "service_2_data_2":{\n                "status":0,\n                "format":"audio/L16;rate=16000",\n                "encoding":"raw",\n                "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n                 }\n        }\n    } \n')),(0,r.kt)("p",null,"Structure description:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"At this time, the parameter is a multi-level structure, and the payload is a multi-level structure at this time."),(0,r.kt)("li",{parentName:"ol"},"In the case of multiple data, the parameter uses different capability IDs as keys to describe the feature descriptions of different capabilities, service_1, service_2."),(0,r.kt)("li",{parentName:"ol"},"Ability ID is user-defined."),(0,r.kt)("li",{parentName:"ol"},"In the case of multiple data, the payload is described by different data IDs as keys, such as service_1_data_1, service_2_data_1, service_2_data_2 in the example."),(0,r.kt)("li",{parentName:"ol"},"In this scenario, the data ID is generated by the interface of the orchestration platform.")),(0,r.kt)("h5",{id:"225--in-streaming-scenarios-subsequent-packet-descriptions"},"2.2.5  In streaming scenarios, subsequent packet descriptions"),(0,r.kt)("p",null,"The header and parameter are optional and are generally not carried. Take multiple data as an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' {\n    "header":{\n         "sid":"iat000704fa@dx16ade44e4d87a1c802", # optional\n        },\n    \n    "payload":{\n        "data_1":{\n            "status":1,\n            "format":"audio/L16;rate=16000",\n            "encoding":"raw",\n                    "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n         },\n\n        "data_2":{\n            "status":1,\n            "format":"audio/L16;rate=16000",\n            "encoding":"raw",\n                    "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n         }\n } \n')),(0,r.kt)("p",null,"Field Description:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sid"),(0,r.kt)("td",{parentName:"tr",align:null},"The platform returns the session handle"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the session handle carried in the message, optional")))),(0,r.kt)("h4",{id:"23-back-to-protocol-description"},"2.3 Back to protocol description"),(0,r.kt)("p",null,"The return protocol defines the computational state of the session, as well as the data segment."),(0,r.kt)("h5",{id:"231-single-output-description"},"2.3.1 single output description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "header":{\n     "code": 0, \n     "message": "success", \n     "sid": "iat000704fa@dx16ade44e4d87a1c802"\n\n},\n# This structure is a metadata structure (data) that describes the return result.\n "payload": {\n     \u201cresult_1\u201d\uff1a{\n        "status":0, # Data status\n        "format":"audio/L16;rate=16000",\n        "encoding":"raw",\n           "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n        }\n   }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"error code"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"enumerable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"error description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"error message description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sid"),(0,r.kt)("td",{parentName:"tr",align:null},"The platform returns the session handle"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the session handle carried in the message, optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payload"),(0,r.kt)("td",{parentName:"tr",align:null},"input data"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"used to carry the returned data, see ","[2.1 Definition of Metadata]",'("2.1 Definition of Metadata")')))),(0,r.kt)("h5",{id:"232-multiple-output-description"},"2.3.2 Multiple output description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "header":{\n        "code": 0,\n         "message": "success",\n         "sid": "iat000704fa@dx16ade44e4d87a1c802",\n         "status":0     \n        },\n \n"payload":{\n     "result_1":{\n        "status":0,\n        "format":"audio/L16;rate=16000",\n        "encoding":"raw",\n        "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n         },\n\n     "result_2":{\n        "status":0,\n        "format":"audio/L16;rate=16000",\n        "encoding":"raw",\n        "audio":"exSI6ICJlbiIsCgkgICAgInBvc2l0aW9uIjogImZhbHNlIgoJf..."\n         }\n}\n} \n')),(0,r.kt)("p",null,"Field Description:\nSame as ","[2.3.1 Description of single output]",'("2.3.1 single output description")\nStructure description:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"At this time, the payload is a multi-level structure."),(0,r.kt)("li",{parentName:"ol"},"In the case of multiple data, the payload uses different result IDs as keys to describe different result feature descriptions, such as: result_1, result_2. ."),(0,r.kt)("li",{parentName:"ol"},"The result ID is user-defined.")),(0,r.kt)("h4",{id:"24-constraints-on-system-parameters"},"2.4 Constraints on System Parameters"),(0,r.kt)("h5",{id:"241-header-field"},"2.4.1 header field"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"app_id"),(0,r.kt)("td",{parentName:"tr",align:null},"App id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ath_id"),(0,r.kt)("td",{parentName:"tr",align:null},"3rd party user ID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")))),(0,r.kt)("h3",{id:"31-routing-information"},"3.1 routing information"),(0,r.kt)("p",null,"Added session state (SessState) to describe streaming or not"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"message GlobalRoute {\n    string session_id = 1; //session id\n    string trace_id = 2; //trace id\n    string up_router_id = 3; //Uplink data routing ID\n    string guider_id = 4; //Dispatch center ID\n    string down_router_id = 5; //Downlink data routing ID\n    string appid = 6; //App ID\n    string uid = 7; //User ID\n    string did = 8; //device ID\n    string client_ip = 9; //client ip\n\n    SessState session_state = 10; //Add: session state, streaming, non-streaming, STATE is enumeration\n\n} \n")),(0,r.kt)("h4",{id:"31-metadata-adjustment"},"3.1 Metadata adjustment"),(0,r.kt)("p",null,"Remove the original format and encoding fields, put the description into the desc_args field, and adjust the original byte type to string type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"message GeneralData {\n    string data_id = 1; //data number\n    uint32 frame_id = 2; //Data serial number\n\n    // distinguish data types\n    enum DataType {\n    TEXT = 0; // text\n    AUDIO = 1; // audio\n    IMAGE = 2; // image\n    VIDEO = 3; // video\n    }\n\n    DataType data_type = 3; //Data type\n\n    //distinguish data state\n    enum DataStatus {\n    BEGIN = 0; //begin\n    CONTINUE = 1; //Follow the stream\n    END = 2; //end\n    ONCE = 3; //End of one call\n    }\n\n    DataStatus status = 4; //Data status\n\n    map<string, string> desc_args = 5; //Data description parameters\n\n    bytes data = 8; //data content\n}\n")))}u.isMDXComponent=!0}}]);