"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[3233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:0,sidebar_label:"Overview"},i="AthenaServing Framework (ASF)",l={unversionedId:"\u6982\u89c8",id:"version-latest/\u6982\u89c8",title:"AthenaServing Framework (ASF)",description:"Vision",source:"@site/versioned_docs/version-latest/\u6982\u89c8.md",sourceDirName:".",slug:"/\u6982\u89c8",permalink:"/athena_website/docs/current/\u6982\u89c8",draft:!1,editUrl:"https://github.com/iflytek/athena_website/tree/master/versioned_docs/version-latest/\u6982\u89c8.md",tags:[],version:"latest",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Overview"},sidebar:"docSidebar",next:{title:"Quick Start",permalink:"/athena_website/docs/current/category/quick-start"}},p={},s=[{value:"Vision",id:"vision",level:2},{value:"What is ASF?",id:"what-is-asf",level:2},{value:"What is AIGES ?",id:"what-is-aiges-",level:2},{value:"Scenario-oriented",id:"scenario-oriented",level:2},{value:"Solve the problem",id:"solve-the-problem",level:2},{value:"Overall Architecture (v2)",id:"overall-architecture-v2",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Features",id:"features",level:3},{value:"Framework code repository",id:"framework-code-repository",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"athenaserving-framework-asf"},"AthenaServing Framework (ASF)"),(0,r.kt)("h2",{id:"vision"},"Vision"),(0,r.kt)("p",null,"In the whole field, AI capabilities can be rapidly implemented in production applications, and AI models and services can be reached at your fingertips; let ASF become the de facto standard of AI inference service framework."),(0,r.kt)("h2",{id:"what-is-asf"},"What is ASF?"),(0,r.kt)("p",null,"It is a service-free, fully managed A.I. engine service framework designed for A.I. algorithm engineers. Algorithm engineers can quickly realize A.I. engine cloud service by integrating the Language Wrapper provided in ASF, without paying attention to the development and operation and maintenance of the underlying infrastructure and service, and can deploy the engine efficiently, safely, autonomously and controllably. Upgrade, scale, monitor and operate."),(0,r.kt)("p",null,"Relying on iFLYTEK's many years of experience in the production of voice technology as a service, a set of K8S-based service-oriented frameworks focusing on AI engineering and general AI capabilities. It is planned to expand a set of capabilities for managing AI services to k8s based on the service discovery mechanism and CRD mechanism of k8s."),(0,r.kt)("p",null,"The main features are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Model post-processing"),(0,r.kt)("li",{parentName:"ul"},"Model inference service"),(0,r.kt)("li",{parentName:"ul"},"Model service containerization"),(0,r.kt)("li",{parentName:"ul"},"Model service governance (service discovery, scaling)"),(0,r.kt)("li",{parentName:"ul"},"Model service dynamic load balancing"),(0,r.kt)("li",{parentName:"ul"},"Model service one-click deployment of private cloud"),(0,r.kt)("li",{parentName:"ul"},"Model service one-click deployment of public cloud ASE"),(0,r.kt)("li",{parentName:"ul"},"Model service protocol standardization")),(0,r.kt)("h2",{id:"what-is-aiges-"},"What is AIGES ?"),(0,r.kt)("p",null,"AIGES is one of the core components of ASF, implemented by golang. It provides a unified standard Wrapper interface for user-mode inference code, currently supports Python/C++, and theoretically supports any language plugin (not yet supported)"),(0,r.kt)("h2",{id:"scenario-oriented"},"Scenario-oriented"),(0,r.kt)("p",null,"The implementation of AI service capabilities by SMEs lacks unified management and implementation plans. Every time a user adds a new AI capability, he needs to go through steps such as encapsulating an engine. Because the encapsulation engine does not have a unified standard and the business logic is complex, it is not easy for users to maintain and refactor."),(0,r.kt)("h2",{id:"solve-the-problem"},"Solve the problem"),(0,r.kt)("p",null,"1: The landing process of the research side model is too long and it is not easy to iterate\n2: There is no unified standard for AI engine side packaging"),(0,r.kt)("h2",{id:"overall-architecture-v2"},"Overall Architecture (v2)"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/xfyun/proposals/main/athenaloader/athena.png",alt:"img"})),(0,r.kt)("h2",{id:"workflow"},"Workflow"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/xfyun/proposals/blob/main/athenaloader/usage.png?raw=true",alt:"img"})),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("p",null,"\u2611"," Support model inference into RPC service (Serving framework will be converted into HTTP service)"),(0,r.kt)("p",null,"\u2611"," Support c++/c code infer"),(0,r.kt)("p",null,"\u2611"," Support python code infer"),(0,r.kt)("p",null,"\u2611"," Support configuration center, service discovery"),(0,r.kt)("p",null,"\u2611"," Support three-party API forwarding"),(0,r.kt)("h2",{id:"framework-code-repository"},"Framework code repository"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Modules"),(0,r.kt)("th",{parentName:"tr",align:null},"Repository"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2611"," loader"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/xfyun/aiges"},"loader")),(0,r.kt)("td",{parentName:"tr",align:null},"Open source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2611"," lb_client"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/xfyun/lb_client"},"Load Balancer")," Load aggregation component"),(0,r.kt)("td",{parentName:"tr",align:null},"Open source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2611"," WebGate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/xfyun/webgate"},"WebGate")," Web gateway component"),(0,r.kt)("td",{parentName:"tr",align:null},"Open source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2611"," Atom"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/xfyun/atoms"},"Atom")," Protocol conversion component"),(0,r.kt)("td",{parentName:"tr",align:null},"Open source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2611"," Polaris"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/xfyun/polaris"},"Polaris")," Configuration Center and Service Discovery"),(0,r.kt)("td",{parentName:"tr",align:null},"Open Source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2611"," Helm"),(0,r.kt)("td",{parentName:"tr",align:null},"[athena_deploy]",(0,r.kt)("a",{parentName:"td",href:"https://github.com/xfyun/athena_deploy"},"https://github.com/xfyun/athena_deploy")),(0,r.kt)("td",{parentName:"tr",align:null},"Open source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2610"," Docker Compose"),(0,r.kt)("td",{parentName:"tr",align:null},"Serving on Docker with docker-compose one-click deployment"),(0,r.kt)("td",{parentName:"tr",align:null},"To be supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2610"," Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/xfyun/iflytek.github.io"},"website")),(0,r.kt)("td",{parentName:"tr",align:null},"In Progress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2611"," Protocol"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/xfyun/ase_protocol"},"AI Capability Protocol Specification")),(0,r.kt)("td",{parentName:"tr",align:null},"Open source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2610"," AseCTl command line tool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#Asectl"},"Asectl")," command line tool"),(0,r.kt)("td",{parentName:"tr",align:null},"To be open source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2610"," Python Debugging Toolkit"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/xfyun/aiges_python"},"AigesKit"),"python toolkit"),(0,r.kt)("td",{parentName:"tr",align:null},"In progress")))))}d.isMDXComponent=!0}}]);