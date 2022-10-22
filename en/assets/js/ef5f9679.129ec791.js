"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[9663],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,h=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,p(p({ref:t},c),{},{components:n})):a.createElement(h,p({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var l=2;l<i;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3,sidebar_label:"Python Plugin"},p="Python Plugin",s={unversionedId:"\u52a0\u8f7d\u5668/Python\u63d2\u4ef6",id:"version-2.1.0/\u52a0\u8f7d\u5668/Python\u63d2\u4ef6",title:"Python Plugin",description:"wrapper.py Architecture",source:"@site/versioned_docs/version-2.1.0/\u52a0\u8f7d\u5668/Python\u63d2\u4ef6.md",sourceDirName:"\u52a0\u8f7d\u5668",slug:"/\u52a0\u8f7d\u5668/Python\u63d2\u4ef6",permalink:"/athena_website/en/docs/2.1.0/\u52a0\u8f7d\u5668/Python\u63d2\u4ef6",draft:!1,editUrl:"https://github.com/iflytek/athena_website/tree/master/versioned_docs/version-2.1.0/\u52a0\u8f7d\u5668/Python\u63d2\u4ef6.md",tags:[],version:"2.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Python Plugin"},sidebar:"docSidebar",previous:{title:"C|C++ Plugin",permalink:"/athena_website/en/docs/2.1.0/\u52a0\u8f7d\u5668/C\u3001C++\u63d2\u4ef6"},next:{title:"Python Debugging",permalink:"/athena_website/en/docs/2.1.0/\u52a0\u8f7d\u5668/Python\u63d2\u4ef6\u8c03\u8bd5\u5de5\u5177"}},o={},l=[{value:"\u2b50wrapper.py Architecture",id:"wrapperpy-architecture",level:2},{value:"Background",id:"background",level:2},{value:"The optimization goal of the integration method of the new version of wrapper.py",id:"the-optimization-goal-of-the-integration-method-of-the-new-version-of-wrapperpy",level:2},{value:"wrapper.py new design",id:"wrapperpy-new-design",level:2},{value:"Why?",id:"why",level:3},{value:"WrapperBase Class",id:"wrapperbase-class",level:3},{value:"Quick start with your first wrapper.py",id:"quick-start-with-your-first-wrapperpy",level:3},{value:"Preparing the project",id:"preparing-the-project",level:4},{value:"complete local debugging",id:"complete-local-debugging",level:4},{value:"\u2757 advance notice",id:"-advance-notice",level:5},{value:"Inheriting the <code>WrapperBase</code> class to complete the construction of the <code>Wrapper</code> class",id:"inheriting-the-wrapperbase-class-to-complete-the-construction-of-the-wrapper-class",level:5},{value:"Local debugging simulates incoming data: heavy_check_mark:",id:"local-debugging-simulates-incoming-data-heavy_check_mark",level:4},{value:"Appendix",id:"appendix",level:3}],c={toc:l};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-plugin"},"Python Plugin"),(0,r.kt)("h2",{id:"wrapperpy-architecture"},"\u2b50wrapper.py Architecture"),(0,r.kt)("p",null,"Python Language Wrapper:\n",(0,r.kt)("img",{alt:"img",src:n(657).Z,width:"776",height:"571"})),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The previous wrapper.py was implemented by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges_c_python_wrapper"},"C project")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges_c_python_wrapper/blob/master/include/aiges/wrapper.h"},"wrapper interface"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"aiges_c_python_wrapper")," is compiled into ",(0,r.kt)("inlineCode",{parentName:"p"},"libwrapper.so")," and loaded uniformly by aiges.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Previously, if python users needed to implement an inference plugin, they only needed to refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges/blob/master/demo/mmocr/wrapper.py"},"wrapper.py")," to implement the corresponding interface, namely Python inference can be achieved.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When the user implements ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py"),", they cannot directly debug and run, and they do not know how ",(0,r.kt)("inlineCode",{parentName:"p"},"aiges")," calls ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py")," and what type of parameters are passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py"),". Versions of the AI inference plugin integrate in a less pythonic way."))),(0,r.kt)("h2",{id:"the-optimization-goal-of-the-integration-method-of-the-new-version-of-wrapperpy"},"The optimization goal of the integration method of the new version of wrapper.py"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Users can define the data fields entered by AI capabilities and control the list of fields.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Users can define the field list of AI capability output as needed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Platform tools can automatically export user schema through ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py")," and configure it to webgate, shielding the schema concept for users.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The platform tool can provide users to run ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py")," directly, and pass the corresponding parameters according to the way of actually loading ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py")," on the platform, which is convenient for users to quickly debug in any environment and find some basic problems.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Simplify user input as much as possible, and obtain the information required by the platform under limited user input."))),(0,r.kt)("h2",{id:"wrapperpy-new-design"},"wrapper.py new design"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provide python sdk: The python sdk will be released to pypi, which is convenient for users to install and update at any time.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#Why"},"Why?")," The new wrapper requires users to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Wrapper")," class, and put the functions at the beginning of the original functional wrapper into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Wrapper")," (class method | object method? Todo). The ",(0,r.kt)("inlineCode",{parentName:"p"},"Wrapper")," class implemented by the user must ",(0,r.kt)("strong",{parentName:"p"},"inherit")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperBase")," class, and the functions ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperInit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperFini"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperOnceExec")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperError")," are declared as class methods ",(0,r.kt)("inlineCode",{parentName:"p"},"@classmethod")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperBase")," class , if not implemented, ",(0,r.kt)("inlineCode",{parentName:"p"},"NotImplementedError")," will be thrown.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In addition to implementing the original ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperInit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperExec")," and other implementations in the Wrapper class, users need to define additional input and output capabilities. The final generated HTTP interface is generated based on this information."))),(0,r.kt)("h3",{id:"why"},"Why?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We hope that users only need to define key implementations, and do not need to care about the details of how ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py")," is called behind. The logic behind this is actually complicated, and we don't want users to have too much in ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py")," Define some settings that are pre-required by the platform. We want to implement and define these default behaviors in the base class of the SDK. For example, the actual calling sequence of ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperInit")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperExec")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperFin"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The advantage of defining the behavior in the base class is that after the user inherits the base class and implements the necessary methods, he can run it directly and get the result after debugging.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As for why you want users to implement the Wrapper class by inheriting the ",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperBase")," class, it's because you can do some more Pythonic magic in the base class behavior to simplify user input."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges_c_python_wrapper/blob/master/wrapper.py"},"New version Python loader plugin")))),(0,r.kt)("h3",{id:"wrapperbase-class"},"WrapperBase Class"),(0,r.kt)("p",null,"The biggest change in the new version of the Python loader plugin is the introduction of the ",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperBase")," class, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Wrapper")," class implemented by the user must ",(0,r.kt)("strong",{parentName:"p"},"inherit")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperBase")," class, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperInit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperFini"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperOnceExec")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperError")," Such functions are declared as class methods ",(0,r.kt)("inlineCode",{parentName:"p"},"@classmethod")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperBase")," class. If they are not implemented, a ",(0,r.kt)("inlineCode",{parentName:"p"},"NotImplementedError")," error will be thrown."),(0,r.kt)("h3",{id:"quick-start-with-your-first-wrapperpy"},"Quick start with your first wrapper.py"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The following describes the implementation process of a Python loader plugin that calls the third-party API to help you understand the whole process. ")),(0,r.kt)("h4",{id:"preparing-the-project"},"Preparing the project"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#appendix"},"Install or update")," aiges sdk library (this sdk is used to assist local debugging of ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapper.py"),")")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use aiges to quickly generate your python project"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'python -m aiges create -n "project"\n')),(0,r.kt)("p",{parentName:"li"},' This command generates a "project" folder and contains the semifinished wrapper.py.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add dependencies in the project, ","[perfect wrapper.py and pass local debugging]","(#Complete local debugging).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build wrapper.py as a docker image and publish it to the athenaserving framework.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Access your AI HTTP API... Enjoy..."))),(0,r.kt)("h4",{id:"complete-local-debugging"},"complete local debugging"),(0,r.kt)("h5",{id:"-advance-notice"},"\u2757 advance notice"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Wrapper")," class, you must ",(0,r.kt)("strong",{parentName:"p"},"inherit")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"WrapperBase")," class.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For parameters used in operation, you can choose to declare variables as class variables, and instance variables are also optional. To simulate AIservice passing parameters, declare a class member in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Wrapper")," class.\nconfig is used for initialization, after going online ",(0,r.kt)("strong",{parentName:"p"},"select the comment"),", in this example as follows"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class Wrapper(WrapperBase):\n   requrl, http_method, http_uri = None, None, None\n   # music\n   access_key_music, access_secret_music = None, None\n   # humming\n   access_key_humming, access_secret_humming = None, None\n\n   config = {}\n   config = {\n   "requrl" : ...,\n   "http_method" : ...,\n   "http_uri" : ...,\n   "access_key_music" : ...,\n   "access_secret_music" : ...,\n   "access_key_humming" : ...,\n   "access_secret_humming" : ...\n   }\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The return type of the ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperOnceExec")," function is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," object, not the ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," type that usually represents the execution status error code, which means ",(0,r.kt)("strong",{parentName:"p"},"whether the result is normal or not"),", you need to instantiate the ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," object and Return the result."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"res = Response()\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When no exception occurs, the ",(0,r.kt)("inlineCode",{parentName:"li"},"Response")," object is a list of one or more ",(0,r.kt)("inlineCode",{parentName:"li"},"ResponseData")," objects, where the ",(0,r.kt)("inlineCode",{parentName:"li"},"ResponseData")," class has ",(0,r.kt)("inlineCode",{parentName:"li"},"key"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"len"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," five member variables",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'l = ResponseData()\nl.key = "output_text"\nl.status = 3\nl.len = len(r.text.encode())\nl.data = r.text\nl.type = 0\nres.list = [l]\n# multi data: res.list = [l1, l2, l3]\nreturn res\n'))),(0,r.kt)("li",{parentName:"ul"},"When an exception occurs, directly call the ",(0,r.kt)("inlineCode",{parentName:"li"},"response_err")," method of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Response")," object to return the error code",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"return res.response_err(ERROR_CODE)\n")))))),(0,r.kt)("h5",{id:"inheriting-the-wrapperbase-class-to-complete-the-construction-of-the-wrapper-class"},"Inheriting the ",(0,r.kt)("inlineCode",{parentName:"h5"},"WrapperBase")," class to complete the construction of the ",(0,r.kt)("inlineCode",{parentName:"h5"},"Wrapper")," class"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wrapperInit")," is used to initialize the variables used in the execution of the loader, and the parameters are read from the dictionary variable ",(0,r.kt)("inlineCode",{parentName:"p"},"config")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def wrapperInit(cls, config: {}) -> int:\n   print(\"Initializing ..\")\n   config = config\n\n   Wrapper.requrl, Wrapper.http_method, Wrapper.http_uri = config['requrl'], config['http_method'], config['http_uri']\n   Wrapper.access_key_music, Wrapper.access_secret_music = config['access_key_music'], config['access_secret_music']\n   Wrapper.access_key_humming, Wrapper.access_secret_humming = config['access_key_humming'], config['access_secret_humming']\n\n   print('----------Finish Init--------------')\n   \n   return 0\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wrapperError")," will return the meaning of the error code, in this case as follows"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def wrapperError(cls, ret: int) -> str:\n   if ret == 1001:\n      return "No result for identification"\n   elif ret == 2000:\n      return "Recording failed, maybe a device permission problem"\n   elif ret == 2001:\n      return "Initialization error or initialization timeout"\n   elif ret == 2002:\n      return "handle metadata error"\n   elif ret == 2004:\n      return "Failed to generate fingerprint (possibly silent)"\n   elif ret == 2005:\n      return "timeout"\n   elif ret == 3000:\n      return "Server Error"\n   elif ret == 3001:\n      return "Access Key does not exist or is wrong"\n   elif ret == 3002:\n      return "HTTP content is illegal"\n   elif ret == 3003:\n      return "The number of requests exceeds the limit (need to upgrade the account)"\n   elif ret == 3006:\n      return "Illegal parameter"\n   elif ret == 3014:\n      return "Illegal signature"\n   elif ret == 3015:\n      return "QPS exceeds the limit (need to upgrade account)"\n   else:\n      return f"User Defined Error: {ret}"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"wrapperFini")," is used to deal with the recovery of heap pointers of some loader plugins. For the Python language, it is usually not necessary to implement:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def wrapperFini() -> int:\n   logging.info('Wrapper finished.')\n   return 0\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The execution of ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperOnceExec")," consists of ",(0,r.kt)("u",null,"authentication"),", ",(0,r.kt)("u",null,"send HTTP request")," and ",(0,r.kt)("u",null,"receive response data")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def wrapperOnceExec(self, params: {}, reqData: DataListCls) -> Response:\n   ......\n   # Authentication\n   data_mode = params['mode']\n  \n   access_key = Wrapper.access_key_music if data_mode == 'music' else Wrapper.access_key_humming\n   access_secret = Wrapper.access_secret_music if data_mode == 'music' else Wrapper.access_secret_humming\n \n   src = reqData.list[0].data# binary files\n   sample_bytes = reqData.list[0].len\n   signature_version, data_type = '1', 'audio'\n      \n   timestamp = time.time()\n   res = Response()\n  \n   string_to_sign = Wrapper.http_method + '\\n' \\\n               + Wrapper.http_uri + '\\n' \\\n               + access_key + '\\n' \\\n               + data_type + '\\n' \\\n               + signature_version + '\\n' \\\n               + str(timestamp)\n   sign = base64.b64encode(hmac.new(access_secret.encode('ascii'), string_to_sign.encode('ascii'),digestmod=hashlib.sha1).digest()).decode('ascii')\n  \n   if sign is None:\n         return res.response_err(5014)\n\n   # send http request\n   files = {'sample': src}\n   data = {\n         'access_key': access_key,\n         'sample_bytes': sample_bytes,\n         'timestamp': str(timestamp),\n         'signature': sign,\n         'data_type': data_type,\n         'signature_version': signature_version\n   }\n\n   try:\n      r = requests.post(Wrapper.requrl, files=files, data=data, timeout=5)\n   except requests.exceptions.ConnectTimeout:\n      return res.response_err(4408)\n   if r is None:\n      return res.response_err(4003)\n\n   if r.status_code != 200:\n      return res.response_err(4000 + r.status_code)\n\n   # accept response data\n   pattern = re.compile('\"code\":\\d+')\n   error_code = re.findall(pattern, r.text)\n   error_code = error_code[0].split(':')[-1]\n  \n   if int(error_code):\n      return self.response_err(int(error_code))\n   else:\n      r.encoding = 'utf-8'\n      l = ResponseData()\n  \n      l.key = \"output_text\"\n      l.type = 0\n      l.status = 3\n      l.data = r.text\n      l.len = len(r.text.encode())\n      res.list = [l]\n  return res \n")))),(0,r.kt)("h4",{id:"local-debugging-simulates-incoming-data-heavy_check_mark"},"Local debugging simulates incoming data: heavy_check_mark:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"additionally declare ",(0,r.kt)("strong",{parentName:"p"},"user request")," and ",(0,r.kt)("strong",{parentName:"p"},"user response")," two classes"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class UserRequest(object):\n   '''\n   Define the request class:\n   params:  params The attribute at the beginning of params represents the function parameter part in the   final HTTP protocol, which corresponds to the parameter field in xtest.toml.params Field supports StringParamField. NumberParamField, BooleanParamField, IntegerParamField, each field supports enumeration. The params attribute is mostly used for the control field in the protocol, but the request body field does not belong to the params category\n\n   input:    The input field is mostly used with the request data segment, that is, the body part. Currently, ImageBodyField, StringBodyField and AudioBodyField are supported.\n   '''\n   params1 = StringParamField(key=\"mode\", enums=[\"music\", \"humming\"], value='humming')\n\n   input1 = AudioBodyField(key=\"data\", path=\"/home/wrapper/test.wav\")\n   \nclass UserResponse(object):\n   '''\n   Define the response class:\n   accepts:  accepts represents which fields are included in the response, and the data type\n\n   input:   The input field is mostly used with the request data segment, that is, the body part. Currently, ImageBodyField, StringBodyField, and AudioBodyField are supported.\n   '''\n   accept1 = StringBodyField(key=\"ouput_text\")\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Instantiate user request and user response objects"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Wrapper(WrapperBase):\n   # Instantiate user request class and user response class\n   requestCls = UserRequest()\n   responseCls = UserResponse()\n   ......\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Declare the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function, instantiate the ",(0,r.kt)("inlineCode",{parentName:"p"},"Wrapper")," object and run the program"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"if __name__ == '__main__':\n   m = Wrapper()\n   m.schema()\n   m.run()\n")))),(0,r.kt)("h3",{id:"appendix"},"Appendix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install and update"),(0,r.kt)("p",{parentName:"li"},"Install and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"aiges")," library using the ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# install aiges\npip install aiges -i https://pypi.python.org/simple\n# update aiges\npip install --upgrade aiges -i https://pypi.python.org/simple\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"During the execution process, errors need to be caught ",(0,r.kt)("strong",{parentName:"p"},"as early as possible"),", and error codes should be distinguished from third-party platforms. Even the default HTTP error codes should be identified, which is convenient for locating errors.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Python loader plugin that calls the third-party API ","[for complete implementation, please refer to]"," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges/tree/master/demo/music_api_v2"},"https://github.com/xfyun/aiges/tree/master/demo/music_api_v2"),")"))))}m.isMDXComponent=!0},657:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/python-535813f7572c5b2cf0895fd36dfe0dcd.png"}}]);