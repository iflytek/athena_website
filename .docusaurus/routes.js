import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/athena_website/__docusaurus/debug',
    component: ComponentCreator('/athena_website/__docusaurus/debug', '884'),
    exact: true
  },
  {
    path: '/athena_website/__docusaurus/debug/config',
    component: ComponentCreator('/athena_website/__docusaurus/debug/config', 'bcb'),
    exact: true
  },
  {
    path: '/athena_website/__docusaurus/debug/content',
    component: ComponentCreator('/athena_website/__docusaurus/debug/content', '66e'),
    exact: true
  },
  {
    path: '/athena_website/__docusaurus/debug/globalData',
    component: ComponentCreator('/athena_website/__docusaurus/debug/globalData', '4d9'),
    exact: true
  },
  {
    path: '/athena_website/__docusaurus/debug/metadata',
    component: ComponentCreator('/athena_website/__docusaurus/debug/metadata', 'cd9'),
    exact: true
  },
  {
    path: '/athena_website/__docusaurus/debug/registry',
    component: ComponentCreator('/athena_website/__docusaurus/debug/registry', '49a'),
    exact: true
  },
  {
    path: '/athena_website/__docusaurus/debug/routes',
    component: ComponentCreator('/athena_website/__docusaurus/debug/routes', '78d'),
    exact: true
  },
  {
    path: '/athena_website/blog',
    component: ComponentCreator('/athena_website/blog', 'c51'),
    exact: true
  },
  {
    path: '/athena_website/blog/archive',
    component: ComponentCreator('/athena_website/blog/archive', '148'),
    exact: true
  },
  {
    path: '/athena_website/blog/aws-sealos-3',
    component: ComponentCreator('/athena_website/blog/aws-sealos-3', 'fc0'),
    exact: true
  },
  {
    path: '/athena_website/blog/first-blog-post',
    component: ComponentCreator('/athena_website/blog/first-blog-post', 'a12'),
    exact: true
  },
  {
    path: '/athena_website/blog/mdx-blog-post',
    component: ComponentCreator('/athena_website/blog/mdx-blog-post', '8ef'),
    exact: true
  },
  {
    path: '/athena_website/blog/tags',
    component: ComponentCreator('/athena_website/blog/tags', '0d6'),
    exact: true
  },
  {
    path: '/athena_website/blog/tags/aws',
    component: ComponentCreator('/athena_website/blog/tags/aws', '592'),
    exact: true
  },
  {
    path: '/athena_website/blog/tags/docusaurus',
    component: ComponentCreator('/athena_website/blog/tags/docusaurus', 'fa7'),
    exact: true
  },
  {
    path: '/athena_website/blog/tags/facebook',
    component: ComponentCreator('/athena_website/blog/tags/facebook', '4a1'),
    exact: true
  },
  {
    path: '/athena_website/blog/tags/hello',
    component: ComponentCreator('/athena_website/blog/tags/hello', '594'),
    exact: true
  },
  {
    path: '/athena_website/blog/tags/hola',
    component: ComponentCreator('/athena_website/blog/tags/hola', '2f7'),
    exact: true
  },
  {
    path: '/athena_website/blog/tags/python',
    component: ComponentCreator('/athena_website/blog/tags/python', '20e'),
    exact: true
  },
  {
    path: '/athena_website/blog/tags/sealos',
    component: ComponentCreator('/athena_website/blog/tags/sealos', '22a'),
    exact: true
  },
  {
    path: '/athena_website/blog/tags/yolov-7',
    component: ComponentCreator('/athena_website/blog/tags/yolov-7', 'eae'),
    exact: true
  },
  {
    path: '/athena_website/blog/welcome',
    component: ComponentCreator('/athena_website/blog/welcome', '6dd'),
    exact: true
  },
  {
    path: '/athena_website/blog/yolov7',
    component: ComponentCreator('/athena_website/blog/yolov7', '55a'),
    exact: true
  },
  {
    path: '/athena_website/markdown-page',
    component: ComponentCreator('/athena_website/markdown-page', 'b06'),
    exact: true
  },
  {
    path: '/athena_website/docs',
    component: ComponentCreator('/athena_website/docs', 'ff6'),
    routes: [
      {
        path: '/athena_website/docs/加载器/概念',
        component: ComponentCreator('/athena_website/docs/加载器/概念', '480'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena_website/docs/加载器/C、C++插件',
        component: ComponentCreator('/athena_website/docs/加载器/C、C++插件', 'b58'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena_website/docs/加载器/Python插件',
        component: ComponentCreator('/athena_website/docs/加载器/Python插件', 'fe2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena_website/docs/加载器/Python插件调试工具',
        component: ComponentCreator('/athena_website/docs/加载器/Python插件调试工具', 'fe2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena_website/docs/介绍',
        component: ComponentCreator('/athena_website/docs/介绍', '387'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena_website/docs/配置中心/install',
        component: ComponentCreator('/athena_website/docs/配置中心/install', 'ddf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena_website/docs/配置中心/polaris',
        component: ComponentCreator('/athena_website/docs/配置中心/polaris', 'b6c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena_website/docs/category/加载器',
        component: ComponentCreator('/athena_website/docs/category/加载器', '601'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/athena_website/docs/category/配置中心',
        component: ComponentCreator('/athena_website/docs/category/配置中心', '350'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/athena_website/',
    component: ComponentCreator('/athena_website/', 'a7e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
