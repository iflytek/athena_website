# Mnist demo
# 准备环境
python 版本请选用 3.9+（[也可以下载我们的docker镜像](https://github.com/iflytek/aiges/releases "也可以下载我们的docker镜像"))
# 1. 首先，在docker中配置容器环境（无需gpu），后续demo的运行也在容器中。
    docker run -itd --name mnist2 -p 1889:1888 iflyopensource/aiges-gpu:10.1-1.17-3.9.13-ubuntu1804-v3.3.7 bash
# 2. 在docker容器中安装最新版本的SDK，命令如下
    pip install aiges --force -i https://pypi.tuna.tsinghua.edu.cn/simple

# 3. 利用wegt下载加载器
- version_latest = $(curl -s "https://api.github.com/repos/iflytek/aiges/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')
- 获取最新版本的下载链接url
-  wegt https://github.com/iflytek/aiges/releases/download/$version_latest/aiges_$version_latest_linux_amd64.tar.gz
-  如果wegt下载超时，可以改用axel https://github.com/iflytek/aiges/releases/download/$version_latest/aiges_$version_latest_linux_amd64.tar.gz
    

# 4. 初始化 python wrapper 项目
## 4.1. 通过aiges创建一个名为mnist的项目
    python3 -m aiges create -n mnist
## 4.2. 初始的mnist项目结构
    root@5cf3c34d7962:/home/aiges# tree mnist/
    mnist/
    ├── Dockerfile
    ├── README.md
    ├── requirements.txt
    └── wrapper
        ├── test_data
        │   └── test.png
        └── wrapper.py

## 4.3. 解压加载器
    tar zxvf aiges_3.3.7_linux_amd64.tar.gz -C mnist

# 5. 编写推理逻辑wrapper，以mnist项目为例

## 下载 mnist demo:
```javascript
./AIservice -mnist
默认会下载 https://github.com/iflytek/aiges_demo.git 项目,并解压到当前目录
替换mnist下的wrapper目录，命令如下:
	- rm -r mnist/wrapper
	- cp aiges_demo/mnist/wrapper mnist/
将aiges_demo里的requirements.txt转移到wrapper并安装依赖，命令如下:
	- cp -ra aiges_demo/mnist/requirements.txt mnist/
	- pip install -r requirements.txt
./AIservice -init # 初始化配置文件 aiges.toml (若存在，则不会替换)
export AIGES_PLUGIN_MODE=python # 指定使用 Python 插件模式
export PYTHONPATH=/home/aiges/mnist/wrapper # 指定 Python 解释器在导入模块时搜索的路径
./AIservice -m 0 -c aiges.toml -s svcName #运行引擎 
```

## 标准输出如下：
```asp
/home/aiges# ./AIservice -m 0 -c aiges.toml -s svcName
2023/06/28 14:54:21 widgetpy.go:28: Starting Using Python : 
config.toml version:  
2023/06/28 14:54:21 utils.NewLocalLog success. -> LOGLEVEL:debug, FILENAME:./log/aiges.log, MAXSIZE:3, MAXBACKUPS:3, MAXAGE:3
2023/06/28 14:54:21 host2ip->ip:0.0.0.0,port:5090
2023/06/28 14:54:21 finderSwitch:0,finderSwitchErr:<nil>
2023/06/28 14:54:21 about to deal with hermes.
2023/06/28 14:54:22 NewSessionManager success.
2023/06/28 14:54:22 NewSidGenerator success.
2023/06/28 14:54:22 fn:AbleTrace,able:false
2023/06/28 14:54:22 about to deal finder.
2023/06/28 14:54:22 about to deal metrics.
2023/06/28 14:54:22 metrics is disable
2023/06/28 14:54:22 about to deal rateLimiter.
2023/06/28 14:54:22 about to deal vCpuManager.
2023/06/28 14:54:22 about to deal bvtVerifier.
2023/06/28 14:54:22 namespace not set, use default
2023/06/28 14:54:22 bvt is disable
header pass list: [sid]
2023-06-28T14:54:22.154+0800 [WARN]  python-plugin: plugin configured with a nil SecureConfig
2023-06-28T14:54:22.154+0800 [DEBUG] python-plugin: starting plugin: path=/bin/bash args=[bash, -c, "/usr/bin/env python -m aiges.serve"]
2023-06-28T14:54:22.154+0800 [DEBUG] python-plugin: plugin started: path=/bin/bash pid=135
2023-06-28T14:54:22.154+0800 [DEBUG] python-plugin: waiting for RPC address: path=/bin/bash
2023-06-28T14:54:22.336+0800 [DEBUG] python-plugin.bash: 2023-06-28 14:54:22,335 - wrapper:serve:231 - INFO:  starting workers: 8
2023-06-28T14:54:22.345+0800 [DEBUG] python-plugin: using plugin: version=1
2023-06-28T14:54:22.348+0800 [DEBUG] python-plugin.stdio: received EOF, stopping recv loop: err="rpc error: code = Unimplemented desc = Method not found!"
2023-06-28T14:54:22.350+0800 [DEBUG] python-plugin.bash: 2023-06-28 14:54:22,350 - wrapper:wrapperInit:118 - INFO:  Importing module from wrapper.py: wrapper
2023-06-28T14:54:22.733+0800 [DEBUG] python-plugin.bash: 2023-06-28 14:54:22,733 - root:_check_path:159 - WARNING:  <class 'FileNotFoundError'>
2023-06-28T14:54:22.734+0800 [DEBUG] python-plugin.bash: 2023-06-28 14:54:22,734 - root:test_value:257 - WARNING:  test_data/test.png not exist.. check 
2023-06-28T14:54:22.734+0800 [DEBUG] python-plugin.bash: 2023-06-28 14:54:22,734 - root:_check_path:159 - WARNING:  <class 'FileNotFoundError'>
2023-06-28T14:54:22.734+0800 [DEBUG] python-plugin.bash: 2023-06-28 14:54:22,734 - root:test_value:257 - WARNING:  test_data/test.png not exist.. check 
2023-06-28T14:54:22.735+0800 [DEBUG] python-plugin.bash: 2023-06-28 14:54:22,735 - wrapper:wrapperInit:123 - INFO:  User Wrapper newed Success.. starting call user init functions...
2023-06-28T14:54:22.735+0800 [DEBUG] python-plugin.bash: 2023-06-28 14:54:22,735 - root:wrapperInit:95 - INFO:  {'resource./msp/resource/sms/wfst.bin': 'WFST', 'http_listen': '0.0.0.0:1888', 'log.level': 'debug', 'resource./msp/resource/sms/acmod_16KPowerFlt_sms_RNN.bin': 'HMM_16K', 'common.lic': '10'}
2023-06-28T14:54:22.735+0800 [DEBUG] python-plugin.bash: 2023-06-28 14:54:22,735 - root:wrapperInit:96 - INFO:  Initializing ...
2023-06-28T14:54:22.738+0800 [DEBUG] python-plugin.bash: 2023-06-28 14:54:22,737 - wrapper:wrapperSchema:152 - INFO:  Entering warpperSchema ...
2023-06-28T14:54:22.738+0800 [DEBUG] python-plugin.bash: 2023-06-28 14:54:22,738 - root:test_value:257 - WARNING:  test_data/test.png not exist.. check 
2023-06-28T14:54:22.738+0800 [DEBUG] python-plugin.bash: 2023-06-28 14:54:22,738 - root:test_value:257 - WARNING:  test_data/test.png not exist.. check 
2023-06-28T14:54:22.750+0800 [DEBUG] python-plugin.bash: 2023-06-28 14:54:22,750 - root:schema_v2:527 - INFO:  Generating V2 Schema....
aiService.Init: init success!
2023/06/28 14:54:22 about to x.run
2023/06/28 14:54:22 about init interceptor
2023/06/28 14:54:22 success init interceptor
2023/06/28 14:54:22 about to call grpc.NewServer(opts...),maxRecv:4194304,maxSend:4194304
2023/06/28 14:54:22 about to call utils.RegisterXsfCallServer(x.grpcserver, srv)
2023/06/28 14:54:22 about to call reflection.Register(x.grpcserver)
2023/06/28 14:54:22 about to exec userCallback
2023/06/28 14:54:22 deal with UserHighPriority
2023/06/28 14:54:22 deal with UserNormalPriority
2023/06/28 14:54:22 deal with UserLowPriority
2023/06/28 14:54:22 about to call x.grpcserver.Serve
2023/06/28 14:54:22 about to check if the grpc service([::]:5090) is started
[GIN-debug] [WARNING] Creating an Engine instance with the Logger and Recovery middleware already attached.

[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.
 - using env:	export GIN_MODE=release
 - using code:	gin.SetMode(gin.ReleaseMode)

[GIN-debug] POST   /backup.0/private/mmocr   --> github.com/xfyun/aiges/httproto.(*Server).HandlerHttp-fm (3 handlers)
[GIN-debug] GET    /openapi.json             --> github.com/xfyun/aiges/httproto/controller.GetOpenAPIJSON (3 handlers)
[GIN-debug] GET    /swagger/*any             --> github.com/swaggo/gin-swagger.CustomWrapHandler.func1 (3 handlers)
[GIN-debug] GET    /ping                     --> github.com/xfyun/aiges/httproto/stream.Ping (3 handlers)
[GIN-debug] GET    /                         --> github.com/xfyun/aiges/httproto.(*Server).startHttpServer.func1 (3 handlers)
[GIN-debug] POST   /                         --> github.com/xfyun/aiges/httproto.(*Server).startHttpServer.func1 (3 handlers)
[GIN-debug] PUT    /                         --> github.com/xfyun/aiges/httproto.(*Server).startHttpServer.func1 (3 handlers)
[GIN-debug] PATCH  /                         --> github.com/xfyun/aiges/httproto.(*Server).startHttpServer.func1 (3 handlers)
[GIN-debug] HEAD   /                         --> github.com/xfyun/aiges/httproto.(*Server).startHttpServer.func1 (3 handlers)
[GIN-debug] OPTIONS /                         --> github.com/xfyun/aiges/httproto.(*Server).startHttpServer.func1 (3 handlers)
[GIN-debug] DELETE /                         --> github.com/xfyun/aiges/httproto.(*Server).startHttpServer.func1 (3 handlers)
[GIN-debug] CONNECT /                         --> github.com/xfyun/aiges/httproto.(*Server).startHttpServer.func1 (3 handlers)
[GIN-debug] TRACE  /                         --> github.com/xfyun/aiges/httproto.(*Server).startHttpServer.func1 (3 handlers)
[http listen at]:  0.0.0.0:1888
2023/06/28 14:54:22 grpc server([::]:5090) started successfully
2023/06/28 14:54:22 bvtVerifierInst is disable,ignore...
2023/06/28 14:54:22 about to call finderadapter.Register([::]:5090)
2023/06/28 14:54:22 about to exec fcDelayInst
2023/06/28 14:54:22 about to call fc delay task
2023/06/28 14:54:22 blocking for grpcserver.Serve
```
# 6. swagger调试mnist
- 默认集成了 swagger2.0 for openapi3.0.
- 启动后访问 ：http://<yourip>:1889
- 如下图所示：
![Image text](https://github.com/Jonyzqw/aiges_demo/blob/main/mnist/figure/swagger.png)
- 这里需要修改key为image，对应的value为Base64 编码后的图片格式
![Image text](https://github.com/Jonyzqw/aiges_demo/blob/main/mnist/figure/response.png)

- 看到识别结果返回
- 至此，单独的aiges加载器完成基本运行
- 由于alpha 是裁剪后，并刚刚合并了 http接口部分，很多功能还不完善，但是基本可以托管能力

#### 目前已知问题:

- python进程退出未做处理，需要跟随父进程自动退出

- 部分运行异常暂时没时间处理
