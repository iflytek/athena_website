"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[9926],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9563:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:2},c="MMOCR business image construction",a={unversionedId:"\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b/mmocr\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u793a\u4f8b",id:"\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b/mmocr\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u793a\u4f8b",title:"MMOCR business image construction",description:"By combining the mmocr service with the aiges inference service framework, the rapid implementation of service inference is realized.",source:"@site/docs/\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b/mmocr\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u793a\u4f8b.md",sourceDirName:"\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b",slug:"/\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b/mmocr\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u793a\u4f8b",permalink:"/athena_website/en/docs/\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b/mmocr\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u793a\u4f8b",draft:!1,editUrl:"https://github.com/iflytek/athena_website/tree/master/docs/\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b/mmocr\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u793a\u4f8b.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Wrapper Image Build Process",permalink:"/athena_website/en/docs/\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b/\u52a0\u8f7d\u5668\u955c\u50cf\u6784\u5efa"}},s={},p=[{value:"Build a business mirroring process",id:"build-a-business-mirroring-process",level:2},{value:"1. Envd install",id:"1-envd-install",level:3},{value:"2.Clone the aiges project",id:"2clone-the-aiges-project",level:3},{value:"3.Enter the project mmocr and execute the command to complete the construction of the project image",id:"3enter-the-project-mmocr-and-execute-the-command-to-complete-the-construction-of-the-project-image",level:3},{value:"4. Enter the container and perform service inference",id:"4-enter-the-container-and-perform-service-inference",level:3}],l={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mmocr-business-image-construction"},"MMOCR business image construction"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"By combining the mmocr service with the aiges inference service framework, the rapid implementation of service inference is realized.")),(0,o.kt)("h2",{id:"build-a-business-mirroring-process"},"Build a business mirroring process"),(0,o.kt)("h3",{id:"1-envd-install"},"1. Envd install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --pre --upgrade envd\nenvd bootstrap\n")),(0,o.kt)("h3",{id:"2clone-the-aiges-project"},"2.Clone the aiges project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/iflytek/aiges.git\n")),(0,o.kt)("h3",{id:"3enter-the-project-mmocr-and-execute-the-command-to-complete-the-construction-of-the-project-image"},"3.Enter the project mmocr and execute the command to complete the construction of the project image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd aiges/demo/mmocr/\nenvd up -t mmocr:test        # Build the image and enter the created container\n")),(0,o.kt)("h3",{id:"4-enter-the-container-and-perform-service-inference"},"4. Enter the container and perform service inference"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd /home/aiges/wpapper/\npython wrapper_v2.py\n")))}m.isMDXComponent=!0}}]);