"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[9266],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5138:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const r={sidebar_position:1},l="Wrapper Image Build Process",o={unversionedId:"\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b/\u52a0\u8f7d\u5668\u955c\u50cf\u6784\u5efa",id:"\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b/\u52a0\u8f7d\u5668\u955c\u50cf\u6784\u5efa",title:"Wrapper Image Build Process",description:"The process of building a business image",source:"@site/docs/\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b/\u52a0\u8f7d\u5668\u955c\u50cf\u6784\u5efa.md",sourceDirName:"\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b",slug:"/\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b/\u52a0\u8f7d\u5668\u955c\u50cf\u6784\u5efa",permalink:"/athena_website/en/docs/\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b/\u52a0\u8f7d\u5668\u955c\u50cf\u6784\u5efa",draft:!1,editUrl:"https://github.com/iflytek/athena_website/tree/master/docs/\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b/\u52a0\u8f7d\u5668\u955c\u50cf\u6784\u5efa.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Release Plan",permalink:"/athena_website/en/docs/\u7248\u672c\u8ba1\u5212/version"},next:{title:"MMOCR Business Image Construction",permalink:"/athena_website/en/docs/\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u6d41\u7a0b/mmocr\u4e1a\u52a1\u955c\u50cf\u6784\u5efa\u793a\u4f8b"}},s={},c=[{value:"The process of building a business image",id:"the-process-of-building-a-business-image",level:2},{value:"1. Build requirements",id:"1-build-requirements",level:3},{value:"2. Envd install",id:"2-envd-install",level:3},{value:"3. Export the conda environment list of the current inference service",id:"3-export-the-conda-environment-list-of-the-current-inference-service",level:3},{value:"4.Write build.envd file",id:"4write-buildenvd-file",level:3},{value:"Select the base image to load and the python version of conda",id:"select-the-base-image-to-load-and-the-python-version-of-conda",level:4},{value:"Install the conda env environment list under the specified path",id:"install-the-conda-env-environment-list-under-the-specified-path",level:4},{value:"Install system dependencies (write the dependencies to be installed into the name list, separated by commas)",id:"install-system-dependencies-write-the-dependencies-to-be-installed-into-the-name-list-separated-by-commas",level:4},{value:"Copy the service code to the business image",id:"copy-the-service-code-to-the-business-image",level:4},{value:"Offline installation (requires file copy and then install)",id:"offline-installation-requires-file-copy-and-then-install",level:4},{value:"Set the installation source",id:"set-the-installation-source",level:4},{value:"Example (there are optional other installation interfaces)",id:"example-there-are-optional-other-installation-interfaces",level:4},{value:"5. Image building via envd",id:"5-image-building-via-envd",level:3}],d={toc:c};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wrapper-image-build-process"},"Wrapper Image Build Process"),(0,i.kt)("h2",{id:"the-process-of-building-a-business-image"},"The process of building a business image"),(0,i.kt)("h3",{id:"1-build-requirements"},"1. Build requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docker (20.10.0 or above)"),(0,i.kt)("li",{parentName:"ul"},"Service based on conda environment (one conda environment corresponds to one inference service)")),(0,i.kt)("h3",{id:"2-envd-install"},"2. Envd install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip install --pre --upgrade envd\nenvd bootstrap\n")),(0,i.kt)("h3",{id:"3-export-the-conda-environment-list-of-the-current-inference-service"},"3. Export the conda environment list of the current inference service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"conda env export > env.yaml\n")),(0,i.kt)("h3",{id:"4write-buildenvd-file"},"4.Write build.envd file"),(0,i.kt)("h4",{id:"select-the-base-image-to-load-and-the-python-version-of-conda"},"Select the base image to load and the python version of conda"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'base(language="python3.8", os="ubuntu20.4")'),(0,i.kt)("li",{parentName:"ul"},"Optional base mirror",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"aiges_cpu"),(0,i.kt)("li",{parentName:"ul"},"aiges_gpu")))),(0,i.kt)("h4",{id:"install-the-conda-env-environment-list-under-the-specified-path"},"Install the conda env environment list under the specified path"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'install.conda_packages(env_file="env.yaml")')),(0,i.kt)("h4",{id:"install-system-dependencies-write-the-dependencies-to-be-installed-into-the-name-list-separated-by-commas"},"Install system dependencies (write the dependencies to be installed into the name list, separated by commas)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"install.system_packages(name = ",'["..."]',")")),(0,i.kt)("h4",{id:"copy-the-service-code-to-the-business-image"},"Copy the service code to the business image"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'io.copy(src="./detectron2", dest="/")')),(0,i.kt)("h4",{id:"offline-installation-requires-file-copy-and-then-install"},"Offline installation (requires file copy and then install)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'io.copy(src="./detectron2", dest="/")'),(0,i.kt)("li",{parentName:"ul"},"run(commands=",'["pip install -e /detectron2",]',")")),(0,i.kt)("h4",{id:"set-the-installation-source"},"Set the installation source"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"config.pip_index()"),(0,i.kt)("li",{parentName:"ul"},"config.conda_channel()")),(0,i.kt)("h4",{id:"example-there-are-optional-other-installation-interfaces"},"Example (there are optional other installation interfaces)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'def build():\n    mirror_config() \n    base(language="python3.8", os="ubuntu20.4")    # Load the base image and set the python version built into conda\n    install.python_packages(name = [\n        "torch==1.10",\n        "openmim"\n    ])\n    install.conda_packages(channel= ["pytorch"], env_file = "env.yaml")   # Install conda yaml environment in the specified path\n    install.python_packages(requirements="build.txt")   # Install requirements.txt in the specified path\n    install.system_packages(name = [                    # System dependent installation\n        "libgl1-mesa-glx"\n    ])\n    run(commands=[\n        "mim install mmcv-full",                        # Install through the third-party tool mim\n    ])\n\n    io.copy(src="./detectron2", dest="/")               # Copy of local files to mirror\n    run(commands=[                                      # Dependency package installation offline\n        "pip install -e /detectron2",\n    ])\ndef mirror_config():                                    # Configure download source\n    config.pip_index(url = "https://pypi.tuna.tsinghua.edu.cn/simple")\n    config.conda_channel(channel="""\n    channels:\n    - defaults\n    show_channel_urls: true\n    default_channels:\n    - https://repo.anaconda.com/pkgs/main\n    - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/\n    - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/\n    - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/\n    - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/menpo/\n    - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/bioconda/\n    - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/\n    - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/\n    custom_channels:\n    conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n    msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n    bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n    menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n    pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n    pytorch-lts: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n    simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n    """)\n')),(0,i.kt)("h3",{id:"5-image-building-via-envd"},"5. Image building via envd"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"envd build -t ImageName:TAG -f build.envd         \n")),(0,i.kt)("p",null,"example\uff1aenvd build -t yolo:v1.0.0 -f build.envd"))}u.isMDXComponent=!0}}]);