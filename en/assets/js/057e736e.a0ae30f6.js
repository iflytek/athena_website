"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[6143],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,c(c({ref:t},l),{},{components:r})):n.createElement(y,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1008:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2,sidebar_label:"2\u3001Create Project"},c="Create Project",i={unversionedId:"\u52a0\u8f7d\u5668/\u521b\u5efawrapper/\u521b\u5efa\u9879\u76ee",id:"version-latest/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/\u521b\u5efa\u9879\u76ee",title:"Create Project",description:"Use aiges to quickly create python wrapper projects",source:"@site/versioned_docs/version-latest/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/\u521b\u5efa\u9879\u76ee.md",sourceDirName:"\u52a0\u8f7d\u5668/\u521b\u5efawrapper",slug:"/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/\u521b\u5efa\u9879\u76ee",permalink:"/athena_website/en/docs/current/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/\u521b\u5efa\u9879\u76ee",draft:!1,editUrl:"https://github.com/iflytek/athena_website/tree/master/versioned_docs/version-latest/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/\u521b\u5efa\u9879\u76ee.md",tags:[],version:"latest",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"2\u3001Create Project"},sidebar:"docSidebar",previous:{title:"1\u3001Install Aiges SDK",permalink:"/athena_website/en/docs/current/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/Python\u5b89\u88c5sdk"},next:{title:"3\u3001Implementing Inference Logic",permalink:"/athena_website/en/docs/current/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/\u5b9e\u73b0\u63a8\u7406"}},p={},s=[{value:"Use aiges to quickly create python wrapper projects",id:"use-aiges-to-quickly-create-python-wrapper-projects",level:2},{value:"Project Structure",id:"project-structure",level:3}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-project"},"Create Project"),(0,a.kt)("h2",{id:"use-aiges-to-quickly-create-python-wrapper-projects"},"Use aiges to quickly create python wrapper projects"),(0,a.kt)("p",null,"Create a project called mnist via aiges."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"root@wyq:/home/wyq# python3 -m aiges create -n mnist\n")),(0,a.kt)("h3",{id:"project-structure"},"Project Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"root@wyq:/home/wyq# tree mnist/\nmnist/\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 requirements.txt\n\u2514\u2500\u2500 wrapper\n    \u251c\u2500\u2500 test_data\n    \u2502\xa0\xa0 \u2514\u2500\u2500 test.png\n    \u2514\u2500\u2500 wrapper.py\n")))}u.isMDXComponent=!0}}]);