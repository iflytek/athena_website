"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[3320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:3,sidebar_label:"\u4e09\u3001\u5b9e\u73b0\u63a8\u7406\u903b\u8f91"},o="Implement inference logic",s={unversionedId:"\u52a0\u8f7d\u5668/\u521b\u5efawrapper/\u5b9e\u73b0\u63a8\u7406",id:"\u52a0\u8f7d\u5668/\u521b\u5efawrapper/\u5b9e\u73b0\u63a8\u7406",title:"Implement inference logic",description:"After the project is created, users only need to complete the following tasks to complete the adaptation and deployment of the inference service on athenaServing.",source:"@site/docs/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/\u5b9e\u73b0\u63a8\u7406.md",sourceDirName:"\u52a0\u8f7d\u5668/\u521b\u5efawrapper",slug:"/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/\u5b9e\u73b0\u63a8\u7406",permalink:"/athena_website/en/docs/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/\u5b9e\u73b0\u63a8\u7406",draft:!1,editUrl:"https://github.com/iflytek/athena_website/tree/master/docs/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/\u5b9e\u73b0\u63a8\u7406.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u4e09\u3001\u5b9e\u73b0\u63a8\u7406\u903b\u8f91"},sidebar:"tutorialSidebar",previous:{title:"\u4e8c\u3001\u521b\u5efa\u9879\u76ee",permalink:"/athena_website/en/docs/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/\u521b\u5efa\u9879\u76ee"},next:{title:"\u56db\u3001\u4e1a\u52a1\u955c\u50cf\u6784\u5efa",permalink:"/athena_website/en/docs/\u52a0\u8f7d\u5668/\u521b\u5efawrapper/\u4e1a\u52a1\u955c\u50cf\u6784\u5efa"}},p={},l=[{value:"Example: MNIST handwritten digit recognition via Pytorch",id:"example-mnist-handwritten-digit-recognition-via-pytorch",level:2},{value:"1. Clone the example model service repository",id:"1-clone-the-example-model-service-repository",level:3},{value:"2. View the inference logic of the service (inference.py)",id:"2-view-the-inference-logic-of-the-service-inferencepy",level:3},{value:"3. Install service dependencies (requirements.txt)",id:"3-install-service-dependencies-requirementstxt",level:3},{value:"4. Adapt to the mnist project structure by aiges",id:"4-adapt-to-the-mnist-project-structure-by-aiges",level:3},{value:"5. Write wrapper.py",id:"5-write-wrapperpy",level:3},{value:"6. Test wrapper.py",id:"6-test-wrapperpy",level:3},{value:"full code for mnist",id:"full-code-for-mnist",level:3}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"implement-inference-logic"},"Implement inference logic"),(0,i.kt)("p",null,"After the project is created, users only need to complete the following tasks to complete the adaptation and deployment of the inference service on athenaServing."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fill in the input and output of the model service"),(0,i.kt)("li",{parentName:"ul"},"Write the inference process of the service model (currently only non-streaming is supported)")),(0,i.kt)("p",null,"Note: ",(0,i.kt)("inlineCode",{parentName:"p"},"The key that needs to be modified in the wrapper.py needs to be the same as the key value of the creation ability"),"."),(0,i.kt)("h2",{id:"example-mnist-handwritten-digit-recognition-via-pytorch"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/sea-wyq/pytorch-MNIST.git"},"Example: MNIST handwritten digit recognition via Pytorch")),(0,i.kt)("h3",{id:"1-clone-the-example-model-service-repository"},"1. Clone the example model service repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/sea-wyq/pytorch-MNIST.git\n\nroot@34c3e20d9572:/home# tree pytorch-MNIST/\npytorch-MNIST/\n|-- 0.png              # Picture of handwritten digits used for test reasoning\n|-- README.md\n|-- Model.py           # Service model structure\n|-- inference.py       # Model inference logic\n|-- requirements.txt   # Service dependencies\n`-- train.py           # model training logic\n")),(0,i.kt)("p",null,"Executing ",(0,i.kt)("inlineCode",{parentName:"p"},"python3 pytorch-MNIST/train.py")," will get the model file ",(0,i.kt)("inlineCode",{parentName:"p"},"mnist.pkl")," and the mnist dataset ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"root@34c3e20d9572:/home# tree pytorch-MNIST/\npytorch-MNIST/\n|-- 0.png\n|-- Model.py\n|-- README.md\n|-- data\n|   `-- MNIST\n|       `-- raw\n|           |-- t10k-images-idx3-ubyte\n|           |-- t10k-images-idx3-ubyte.gz\n|           |-- t10k-labels-idx1-ubyte\n|           |-- t10k-labels-idx1-ubyte.gz\n|           |-- train-images-idx3-ubyte\n|           |-- train-images-idx3-ubyte.gz\n|           |-- train-labels-idx1-ubyte\n|           `-- train-labels-idx1-ubyte.gz\n|-- inference.py\n|-- mnist.pkl\n|-- requirements.txt\n`-- train.py\n")),(0,i.kt)("h3",{id:"2-view-the-inference-logic-of-the-service-inferencepy"},"2. View the inference logic of the service (inference.py)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import cv2\nimport torch\nimport torchvision.transforms as transforms\n\nfrom Model import MNIST\n\n\ndef images2tensor(image):\n    img = cv2.imread(image)\n    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n    transf = transforms.ToTensor()\n    img_tensor = torch.unsqueeze(transf(img), dim=0)\n    return img_tensor\n\n\nif __name__ == "__main__":\n    device = torch.device(\'cpu\')\n    model = MNIST().to(device)\n    model.load_state_dict(torch.load(\'mnist.pkl\'))     # Load the service model\n    input_data = images2tensor("0.png")                # load test data\n    res = model(input_data)                         \n    print("\u624b\u5199\u6570\u5b57\u56fe\u7247\u68c0\u6d4b\u7684\u7ed3\u679c\u4e3a\uff1a", res.argmax())    # print inference results\n')),(0,i.kt)("h3",{id:"3-install-service-dependencies-requirementstxt"},"3. Install service dependencies (requirements.txt)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd pytorch-MNIST\npip3 install -r requirements.txt\n")),(0,i.kt)("h3",{id:"4-adapt-to-the-mnist-project-structure-by-aiges"},"4. Adapt to the mnist project structure by aiges"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Move 0.png to mnist/wrapper/test_data directory"),(0,i.kt)("li",{parentName:"ul"},"Put the mnist.pkl and Model.py files in the mnist/wrapper directory"),(0,i.kt)("li",{parentName:"ul"},"Add requirements.txt in pytorch-MNIST directory to mnist/requirements.txt"),(0,i.kt)("li",{parentName:"ul"},"Write Dockerfile (introduced in the next chapter)"),(0,i.kt)("li",{parentName:"ul"},"Write the inference logic of wrapper.py in the wrapper directory")),(0,i.kt)("p",null,"The final mnist directory structure is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"root@34c3e20d9572:/home# tree mnist/\nmnist/\n|-- Dockerfile\n|-- README.md\n|-- requirements.txt\n`-- wrapper\n    |-- mnist.pkl\n    |-- Model.py\n    |-- test_data\n    |   `-- 0.png\n    `-- wrapper.py\n")),(0,i.kt)("h3",{id:"5-write-wrapperpy"},"5. Write wrapper.py"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/env python\n# coding:utf-8\n"""\n@license: Apache License2\n@file: wrapper.py\n@time: 2022-08-19 02:05:07.467170\n@project: mnist\n@project: ./\n"""\n\nimport sys\nimport hashlib\ntry:\n    from aiges_embed import ResponseData, Response, DataListNode, DataListCls  # c++\nexcept:\n    from aiges.dto import Response, ResponseData, DataListNode, DataListCls,Once, DataText\n\nfrom aiges.sdk import WrapperBase, \\\n    StringParamField, \\\n    ImageBodyField, \\\n    StringBodyField\nfrom aiges.utils.log import log\n\n\n# Import dependencies in inference.py\nimport cv2\nimport torch\nimport torchvision.transforms as transforms\nfrom Model import MNIST\nimport numpy as np\n\n\n# Define the hyperparameters and input parameters of the model\nclass UserRequest(object):\n\n    input1 = ImageBodyField(key="img", path="test_data/0.png")\n\n# Define the output parameters of the model\nclass UserResponse(object):\n    accept1 = StringBodyField(key="number")\n\n# Define service inference logic\nclass Wrapper(WrapperBase):\n    serviceId = "mnist"\n    version = "v1"\n    requestCls = UserRequest()\n    responseCls = UserResponse()\n    model = None\n\n    # load model file\n    def wrapperInit(cls, config: {}) -> int:\n        log.info("Initializing ...")\n        device = torch.device(\'cpu\')\n        cls.model = MNIST().to(device)\n        cls.model.load_state_dict(torch.load(\'mnist.pkl\'))\n        return 0\n\n    # write inference logic\n    def wrapperOnceExec(cls, params: {}, reqData: DataListCls) -> Response:\n\n        # Read the test image and perform model inference\n        log.info("got reqdata , %s" % reqData.list)\n        imagebytes = reqData.get("img").data    # read binary data\n        image  = [cv2.imdecode(np.frombuffer(imagebytes, np.uint8), cv2.COLOR_BGR2GRAY)]\n        image_tensor = torch.unsqueeze(torch.Tensor(image), dim=0)\n        result = cls.model(image_tensor).argmax()\n        print(result)\n\n        # Use Response to encapsulate inference results\n        res = Response()\n        resd = ResponseData()\n        resd.key = "img"\n        resd.type = DataText\n        resd.status = Once\n        resd.data = result\n        resd.len = 1\n        res.list = [resd]\n\n    def wrapperFini(cls) -> int:\n        return 0\n\n\n    def wrapperError(cls, ret: int) -> str:\n        if ret == 100:\n            return "user error defined here"\n        return ""\n\n    \'\'\'\n        This function is reserved for testing and cannot be deleted\n    \'\'\'\n\n    def wrapperTestFunc(cls, data: [], respData: []):\n        pass\n\nif __name__ == \'__main__\':\n    m = Wrapper()\n    m.run()\n')),(0,i.kt)("h3",{id:"6-test-wrapperpy"},"6. Test wrapper.py"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"root@34c3e20d9572:/home/mnist/wrapper# python3 wrapper.py \nFound proto: WrapperBase\nFound proto: Wrapper\n2022-08-19 03:32:06,707 - root - INFO - Initializing ...\n2022-08-19 03:32:06,885 - root - INFO - got reqdata , [<aiges.dto.DataListNode object at 0x7f6bfc7beda0>]\n/home/mnist/wrapper/wrapper.py:64: UserWarning: Creating a tensor from a list of numpy.ndarrays is extremely slow. Please consider converting the list to a single numpy.ndarray with numpy.array() before converting to a tensor. (Triggered internally at  ../torch/csrc/utils/tensor_new.cpp:204.)\n  image_tensor = torch.unsqueeze(torch.Tensor(image), dim=0)\n[W NNPACK.cpp:51] Could not initialize NNPACK! Reason: Unsupported hardware.\ntensor(0)\n['img']\n")),(0,i.kt)("h3",{id:"full-code-for-mnist"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/iflytek/aiges_demo/tree/main/mnist"},"full code for mnist")))}d.isMDXComponent=!0}}]);