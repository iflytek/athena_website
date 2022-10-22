"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[9613],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>N});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function L(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function E(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?L(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},L=Object.keys(n);for(r=0;r<L.length;r++)t=L[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(n);for(r=0;r<L.length;r++)t=L[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var T=r.createContext({}),_=function(n){var e=r.useContext(T),t=e;return n&&(t="function"==typeof n?n(e):E(E({},e),n)),t},u=function(n){var e=_(n.components);return r.createElement(T.Provider,{value:e},n.children)},o={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,L=n.originalType,T=n.parentName,u=a(n,["components","mdxType","originalType","parentName"]),c=_(t),N=i,s=c["".concat(T,".").concat(N)]||c[N]||o[N]||L;return t?r.createElement(s,E(E({ref:e},u),{},{components:t})):r.createElement(s,E({ref:e},u))}));function N(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var L=t.length,E=new Array(L);E[0]=c;var a={};for(var T in e)hasOwnProperty.call(e,T)&&(a[T]=e[T]);a.originalType=n,a.mdxType="string"==typeof n?n:i,E[1]=a;for(var _=2;_<L;_++)E[_]=t[_];return r.createElement.apply(null,E)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1254:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>T,contentTitle:()=>E,default:()=>o,frontMatter:()=>L,metadata:()=>a,toc:()=>_});var r=t(7462),i=(t(7294),t(3905));const L={sidebar_position:2,sidebar_label:"Deployment Documentation"},E="Deployment Documentation",a={unversionedId:"\u914d\u7f6e\u4e2d\u5fc3/install",id:"\u914d\u7f6e\u4e2d\u5fc3/install",title:"Deployment Documentation",description:"Polaris Deployment documentation (to be modified)",source:"@site/docs/\u914d\u7f6e\u4e2d\u5fc3/install.md",sourceDirName:"\u914d\u7f6e\u4e2d\u5fc3",slug:"/\u914d\u7f6e\u4e2d\u5fc3/install",permalink:"/athena_website/en/docs/next/\u914d\u7f6e\u4e2d\u5fc3/install",draft:!1,editUrl:"https://github.com/iflytek/athena_website/tree/master/docs/\u914d\u7f6e\u4e2d\u5fc3/install.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Deployment Documentation"},sidebar:"docSidebar",previous:{title:"Introduce",permalink:"/athena_website/en/docs/next/\u914d\u7f6e\u4e2d\u5fc3/polaris"},next:{title:"Release Plan",permalink:"/athena_website/en/docs/next/category/release-plan"}},T={},_=[{value:"Polaris Deployment documentation (to be modified)",id:"polaris-deployment-documentation-to-be-modified",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Basic environment",id:"basic-environment",level:3},{value:"ZK cluster",id:"zk-cluster",level:3},{value:"Cynosure",id:"cynosure",level:3},{value:"Mysql script",id:"mysql-script",level:3},{value:"Install On K8s",id:"install-on-k8s",level:3}],u={toc:_};function o(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deployment-documentation"},"Deployment Documentation"),(0,i.kt)("h2",{id:"polaris-deployment-documentation-to-be-modified"},"Polaris Deployment documentation (to be modified)"),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Deployment Configuration Center & Service Discovery Polaris suite, including Cynosure, Companion, and zk clusters, using a containerized solution."),(0,i.kt)("h3",{id:"basic-environment"},"Basic environment"),(0,i.kt)("p",null,"docker version 1.12.x+, please install it by yourself."),(0,i.kt)("h3",{id:"zk-cluster"},"ZK cluster"),(0,i.kt)("p",null,"The zk installation documentation will not be repeated here."),(0,i.kt)("h3",{id:"cynosure"},"Cynosure"),(0,i.kt)("p",null,"Note: The parameters to start the company represent the company's ip address-h10.1.86.211, port-p 6868, zk cluster address-z 10.1.86.211:2181,10.1.86.70:2181,10.1.86.212:2181, cynosure address- w ",(0,i.kt)("a",{parentName:"p",href:"https://10.1.87.69:8095"},"https://10.1.87.69:8095"),"**"),(0,i.kt)("p",null,"After the startup is complete, you can enter the following url to verify whether it started normally. If it starts normally, there will be a return result. ",(0,i.kt)("br",null),"\nhttp://ip:port/finder/query_zk_info?id=en project=AIaaS&group=aitest&service=iatExecutor&version=2.0.0",(0,i.kt)("br",null),"\n(ip\\port is replaced according to the actual situation)"),(0,i.kt)("h3",{id:"mysql-script"},"Mysql script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"\nSET NAMES utf8mb4;\nSET FOREIGN_KEY_CHECKS = 0;\n\n-- ----------------------------\n-- Table structure for tb_cluster\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_cluster`;\nCREATE TABLE `tb_cluster` (\n  `id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u96c6\u7fa4\u552f\u4e00\u6807\u8bc6',\n  `name` varchar(100) COLLATE utf8_bin NOT NULL COMMENT '\u96c6\u7fa4\u540d\u79f0',\n  `push_url` varchar(500) COLLATE utf8_bin NOT NULL COMMENT '\u96c6\u7fa4\u63a8\u9001\u5730\u5740',\n  `create_time` datetime DEFAULT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `update_time` datetime DEFAULT NULL COMMENT '\u66f4\u65b0\u65f6\u95f4',\n  `user_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7528\u6237id',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uq_name` (`name`),\n  KEY `idx_user_id` (`user_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_dic\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_dic`;\nCREATE TABLE `tb_dic` (\n  `type` varchar(1) NOT NULL,\n  `type_name` varchar(20) NOT NULL,\n  PRIMARY KEY (`type`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\n-- ----------------------------\n-- Table structure for tb_gray_group\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_gray_group`;\nCREATE TABLE `tb_gray_group` (\n  `id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7248\u672cid',\n  `version_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7248\u672cid',\n  `user_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7528\u6237id',\n  `name` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '\u7070\u5ea6\u7ec4\u540d\u79f0',\n  `content` text COLLATE utf8_bin COMMENT '\u63a8\u9001\u5b9e\u4f8b\u5185\u5bb9',\n  `description` varchar(500) COLLATE utf8_bin DEFAULT NULL COMMENT '\u7248\u672c\u63cf\u8ff0',\n  `create_time` datetime DEFAULT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `update_time` datetime DEFAULT NULL COMMENT '\u66f4\u65b0\u65f6\u95f4',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uq_name_version_id` (`version_id`,`name`) USING BTREE,\n  KEY `idx_service_id` (`version_id`),\n  KEY `idx_user_id` (`user_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_lastest_search\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_lastest_search`;\nCREATE TABLE `tb_lastest_search` (\n  `id` varchar(150) COLLATE utf8_bin NOT NULL DEFAULT '',\n  `user_id` varchar(50) COLLATE utf8_bin DEFAULT NULL,\n  `url` varchar(200) COLLATE utf8_bin DEFAULT NULL,\n  `pre_condition` varchar(500) COLLATE utf8_bin DEFAULT NULL,\n  `create_time` datetime DEFAULT NULL,\n  `update_time` datetime DEFAULT NULL,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uq_user_id_url` (`user_id`,`url`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_loadbalance\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_loadbalance`;\nCREATE TABLE `tb_loadbalance` (\n  `name` varchar(50) COLLATE utf8_bin NOT NULL,\n  `abbr` varchar(100) COLLATE utf8_bin NOT NULL,\n  PRIMARY KEY (`name`,`abbr`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_project\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_project`;\nCREATE TABLE `tb_project` (\n  `id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u9879\u76eeid',\n  `name` varchar(100) COLLATE utf8_bin NOT NULL COMMENT '\u9879\u76ee\u540d\u79f0',\n  `description` varchar(500) COLLATE utf8_bin DEFAULT NULL COMMENT '\u9879\u76ee\u63cf\u8ff0',\n  `user_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7528\u6237id',\n  `create_time` datetime DEFAULT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `update_time` datetime DEFAULT NULL COMMENT '\u66f4\u65b0\u65f6\u95f4',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uq_name` (`name`),\n  KEY `idx_user_id` (`user_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_project_member\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_project_member`;\nCREATE TABLE `tb_project_member` (\n  `id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u552f\u4e00\u6807\u8bc6',\n  `user_id` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '\u7528\u6237id',\n  `project_id` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '\u9879\u76eeid',\n  `create_time` datetime DEFAULT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `creator` tinyint(4) DEFAULT NULL,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uq_user_id_project_id` (`user_id`,`project_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_role\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_role`;\nCREATE TABLE `tb_role` (\n  `role_name` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u89d2\u8272\u540d\u79f0',\n  `role_type` tinyint(4) NOT NULL COMMENT '\u89d2\u8272\u7c7b\u578b',\n  PRIMARY KEY (`role_name`,`role_type`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_service\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_service`;\nCREATE TABLE `tb_service` (\n  `id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u670d\u52a1id',\n  `group_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u670d\u52a1\u7ec4id',\n  `name` varchar(100) COLLATE utf8_bin NOT NULL COMMENT '\u670d\u52a1\u540d\u79f0',\n  `description` varchar(500) COLLATE utf8_bin DEFAULT NULL COMMENT '\u670d\u52a1\u63cf\u8ff0',\n  `user_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7528\u6237id',\n  `create_time` datetime DEFAULT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `update_time` datetime DEFAULT NULL COMMENT '\u66f4\u65b0\u65f6\u95f4',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uq_group_id_name` (`group_id`,`name`),\n  KEY `idx_user_id` (`user_id`),\n  KEY `idx_group_id` (`group_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_service_api_version\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_service_api_version`;\nCREATE TABLE `tb_service_api_version` (\n  `id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7248\u672cid',\n  `service_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u670d\u52a1id',\n  `api_version` varchar(20) COLLATE utf8_bin NOT NULL COMMENT '\u7248\u672c\u53f7',\n  `user_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7528\u6237id',\n  `description` varchar(500) COLLATE utf8_bin DEFAULT NULL COMMENT '\u7248\u672c\u63cf\u8ff0',\n  `create_time` datetime DEFAULT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `update_time` datetime DEFAULT NULL COMMENT '\u66f4\u65b0\u65f6\u95f4',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uq_service_id_version` (`api_version`,`service_id`),\n  KEY `idx_service_id` (`service_id`),\n  KEY `idx_user_id` (`user_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_service_config\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_service_config`;\nCREATE TABLE `tb_service_config` (\n  `id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u914d\u7f6eid',\n  `user_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7528\u6237id',\n  `version_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7248\u672cid',\n  `name` varchar(100) COLLATE utf8_bin NOT NULL COMMENT '\u914d\u7f6e\u540d\u79f0',\n  `path` varchar(500) COLLATE utf8_bin NOT NULL COMMENT '\u914d\u7f6e\u8def\u5f84',\n  `content` longblob COMMENT '\u914d\u7f6e\u5185\u5bb9',\n  `md5` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '\u914d\u7f6e\u5185\u5bb9md5\u503c',\n  `description` varchar(500) COLLATE utf8_bin DEFAULT NULL COMMENT '\u914d\u7f6e\u63cf\u8ff0',\n  `create_time` datetime DEFAULT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `update_time` datetime DEFAULT NULL COMMENT '\u66f4\u65b0\u65f6\u95f4',\n  `gray_group_id` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT '0',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uq_version_id_group_id_name` (`version_id`,`gray_group_id`,`name`) USING BTREE,\n  KEY `idx_user_id` (`user_id`),\n  KEY `idx_version_id` (`version_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_service_config_history\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_service_config_history`;\nCREATE TABLE `tb_service_config_history` (\n  `id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u914d\u7f6eid',\n  `user_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7528\u6237id',\n  `config_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u914d\u7f6eid',\n  `content` longblob COMMENT '\u914d\u7f6e\u5185\u5bb9',\n  `md5` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '\u914d\u7f6e\u5185\u5bb9md5\u503c',\n  `description` varchar(500) COLLATE utf8_bin DEFAULT NULL COMMENT '\u914d\u7f6e\u63cf\u8ff0',\n  `push_version` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u63a8\u9001\u7248\u672c\u53f7',\n  `create_time` datetime DEFAULT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\n  PRIMARY KEY (`id`),\n  KEY `idx_user_id` (`user_id`),\n  KEY `idx_config_id` (`config_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_service_config_push_feedback\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_service_config_push_feedback`;\nCREATE TABLE `tb_service_config_push_feedback` (\n  `id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u63a8\u9001\u53cd\u9988id',\n  `push_id` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '\u63a8\u9001id',\n  `project` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '\u9879\u76ee\u540d\u79f0',\n  `service_group` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '\u670d\u52a1\u7ec4\u540d\u79f0',\n  `service` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '\u670d\u52a1\u540d\u79f0',\n  `version` varchar(20) COLLATE utf8_bin DEFAULT NULL COMMENT '\u670d\u52a1\u7248\u672c\u53f7',\n  `config` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '\u914d\u7f6e\u540d\u79f0',\n  `addr` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '\u5730\u5740',\n  `update_status` tinyint(4) DEFAULT NULL COMMENT '\u66f4\u65b0\u72b6\u6001',\n  `load_status` tinyint(4) DEFAULT NULL COMMENT '\u52a0\u8f7d\u72b6\u6001',\n  `update_time` datetime DEFAULT NULL COMMENT '\u66f4\u65b0\u65f6\u95f4',\n  `load_time` datetime DEFAULT NULL COMMENT '\u52a0\u8f7d\u65f6\u95f4',\n  `create_time` datetime DEFAULT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `gray_group_id` varchar(50) COLLATE utf8_bin DEFAULT '0',\n  `api_version` varchar(20) COLLATE utf8_bin DEFAULT NULL,\n  PRIMARY KEY (`id`),\n  KEY `idx_push_id` (`push_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_service_config_push_history\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_service_config_push_history`;\nCREATE TABLE `tb_service_config_push_history` (\n  `id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u63a8\u9001id',\n  `user_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7528\u6237id',\n  `project` varchar(100) COLLATE utf8_bin NOT NULL COMMENT '\u9879\u76ee\u540d\u79f0',\n  `service_group` varchar(100) COLLATE utf8_bin NOT NULL COMMENT '\u670d\u52a1\u7ec4\u540d\u79f0',\n  `service` varchar(100) COLLATE utf8_bin NOT NULL COMMENT '\u670d\u52a1\u540d\u79f0',\n  `version` varchar(20) COLLATE utf8_bin NOT NULL COMMENT '\u670d\u52a1\u7248\u672c\u53f7',\n  `cluster_text` text COLLATE utf8_bin NOT NULL COMMENT '\u96c6\u7fa4',\n  `service_config_text` text COLLATE utf8_bin NOT NULL COMMENT '\u670d\u52a1\u914d\u7f6e',\n  `push_time` datetime DEFAULT NULL COMMENT '\u63a8\u9001\u65f6\u95f4',\n  `gray_group_id` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT '0',\n  PRIMARY KEY (`id`),\n  KEY `idx_user_id` (`user_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_service_discovery_push_feedback\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_service_discovery_push_feedback`;\nCREATE TABLE `tb_service_discovery_push_feedback` (\n  `id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u63a8\u9001\u53cd\u9988id',\n  `push_id` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '\u63a8\u9001id',\n  `project` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '\u9879\u76ee\u540d\u79f0',\n  `service_group` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '\u670d\u52a1\u7ec4\u540d\u79f0',\n  `consumer_service` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '\u6d88\u8d39\u7aef\u670d\u52a1\u540d\u79f0',\n  `consumer_version` varchar(20) COLLATE utf8_bin DEFAULT NULL COMMENT '\u6d88\u8d39\u7aef\u7248\u672c',\n  `provider_service` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '\u63d0\u4f9b\u7aef\u670d\u52a1\u540d\u79f0',\n  `provider_version` varchar(20) COLLATE utf8_bin DEFAULT NULL COMMENT '\u63d0\u4f9b\u7aef\u7248\u672c',\n  `addr` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '\u5730\u5740',\n  `update_status` tinyint(4) DEFAULT NULL COMMENT '\u66f4\u65b0\u72b6\u6001',\n  `load_status` tinyint(4) DEFAULT NULL COMMENT '\u52a0\u8f7d\u72b6\u6001',\n  `update_time` datetime DEFAULT NULL COMMENT '\u66f4\u65b0\u65f6\u95f4',\n  `load_time` datetime DEFAULT NULL COMMENT '\u52a0\u8f7d\u65f6\u95f4',\n  `create_time` datetime DEFAULT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `type` varchar(1) COLLATE utf8_bin DEFAULT NULL,\n  `api_version` varchar(20) COLLATE utf8_bin DEFAULT NULL,\n  PRIMARY KEY (`id`),\n  KEY `idx_push_id` (`push_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_service_discovery_push_history\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_service_discovery_push_history`;\nCREATE TABLE `tb_service_discovery_push_history` (\n  `id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u670d\u52a1\u53d1\u73b0\u63a8\u9001id',\n  `user_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7528\u6237id',\n  `project` varchar(100) COLLATE utf8_bin NOT NULL COMMENT '\u9879\u76ee\u540d\u79f0',\n  `service_group` varchar(100) COLLATE utf8_bin NOT NULL COMMENT '\u670d\u52a1\u7ec4\u540d\u79f0',\n  `service` varchar(100) COLLATE utf8_bin NOT NULL COMMENT '\u670d\u52a1\u540d\u79f0',\n  `cluster_text` text COLLATE utf8_bin NOT NULL COMMENT '\u96c6\u7fa4',\n  `push_time` datetime DEFAULT NULL COMMENT '\u63a8\u9001\u65f6\u95f4',\n  `version` varchar(100) COLLATE utf8_bin NOT NULL DEFAULT '',\n  PRIMARY KEY (`id`),\n  KEY `idx_user_id` (`user_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_service_group\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_service_group`;\nCREATE TABLE `tb_service_group` (\n  `id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u552f\u4e00\u6807\u8bc6',\n  `project_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u9879\u76eeid',\n  `name` varchar(100) COLLATE utf8_bin NOT NULL COMMENT '\u670d\u52a1\u7ec4\u540d\u79f0',\n  `description` varchar(500) COLLATE utf8_bin DEFAULT NULL COMMENT '\u670d\u52a1\u7ec4\u63cf\u8ff0',\n  `user_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7528\u6237id',\n  `create_time` datetime DEFAULT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `update_time` datetime DEFAULT NULL COMMENT '\u66f4\u65b0\u65f6\u95f4',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uq_project_id_name` (`project_id`,`name`),\n  KEY `idx_user_id` (`user_id`),\n  KEY `idx_project_id` (`project_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_service_version\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_service_version`;\nCREATE TABLE `tb_service_version` (\n  `id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7248\u672cid',\n  `service_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u670d\u52a1id',\n  `version` varchar(20) COLLATE utf8_bin NOT NULL COMMENT '\u7248\u672c\u53f7',\n  `user_id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7528\u6237id',\n  `description` varchar(500) COLLATE utf8_bin DEFAULT NULL COMMENT '\u7248\u672c\u63cf\u8ff0',\n  `create_time` datetime DEFAULT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `update_time` datetime DEFAULT NULL COMMENT '\u66f4\u65b0\u65f6\u95f4',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uq_service_id_version` (`version`,`service_id`),\n  KEY `idx_service_id` (`service_id`),\n  KEY `idx_user_id` (`user_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for tb_user\n-- ----------------------------\nDROP TABLE IF EXISTS `tb_user`;\nCREATE TABLE `tb_user` (\n  `id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u552f\u4e00\u6807\u8bc6',\n  `account` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u8d26\u53f7',\n  `password` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u5bc6\u7801',\n  `user_name` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u7528\u6237\u59d3\u540d',\n  `phone` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u8054\u7cfb\u65b9\u5f0f',\n  `email` varchar(100) COLLATE utf8_bin NOT NULL COMMENT '\u90ae\u7bb1',\n  `create_time` datetime DEFAULT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `update_time` datetime DEFAULT NULL COMMENT '\u66f4\u65b0\u65f6\u95f4',\n  `role_type` tinyint(4) NOT NULL DEFAULT '2' COMMENT '\u89d2\u8272\u7c7b\u578b 1.\u7ba1\u7406\u5458 2.\u666e\u901a\u7528\u6237',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uq_account` (`account`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\n-- ----------------------------\n-- Table structure for test\n-- ----------------------------\nDROP TABLE IF EXISTS `test`;\nCREATE TABLE `test` (\n  `id` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '\u914d\u7f6eid',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n\nSET FOREIGN_KEY_CHECKS = 1;\n\n\n/*Data for the table `tb_loadbalance` */\n\ninsert  into `tb_loadbalance`(`name`,`abbr`) values \n('\u4e00\u81f4\u6027Hash','ConsistentHash'),\n('\u6700\u5c11\u6d3b\u8dc3\u8c03\u7528\u6570','LeastActive'),\n('\u8f6e\u5faa','RoundRobin'),\n('\u968f\u673a','Random');\n\n/*Data for the table `tb_role` */\n\ninsert  into `tb_role`(`role_name`,`role_type`) values \n('admin',1),\n('user',2);\n\n/*Data for the table `tb_user` */\n\ninsert  into `tb_user`(`id`,`account`,`password`,`user_name`,`phone`,`email`,`create_time`,`update_time`,`role_type`) values \n('3688919024172793856','admin','b301eba23dc7ab9df6b7315de2ac222a','admin','13739263609','xx@iflytek.com','2021-11-10 10:12:07','2021-12-05 05:20:27',1);\n\ninsert  into `tb_dic` values\n ('0', '\u670d\u52a1\u914d\u7f6e')\uff0c\n ('1', '\u8def\u7531\u914d\u7f6e')\uff0c\n ('2', '\u5b9e\u4f8b\u914d\u7f6e');\n\n")),(0,i.kt)("h3",{id:"install-on-k8s"},"Install On K8s"),(0,i.kt)("p",null,"todo"))}o.isMDXComponent=!0}}]);