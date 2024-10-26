---
title: 【项目经历】南宁CIM基础平台
date: 2024-10-26
lastMod: 2024-10-26T22:20:16.758Z
summary: 从0到1完成南宁CIM基础平台的完整开发
category: 项目经历
tags: [CesiumGS, 云渲染]
sticky: 1
---

## 项目模块概述

**项目模块包括:**

1. 地图服务注册
2. 倾斜服务注册
3. 城市一张图 ( WebGL版本和云渲染版本都有可以切换, 看用户对渲染结果美术的要求 )
4. 场景组装 ( WebGL版本和云渲染版本都有可以切换, 看用户对渲染结果美术的要求 )
5. IOT智慧管理
6. 二次开发

**主要做Cesium和游戏引擎云渲染相关的web3d开发工作以及网页的UI还原**

## 项目获奖证书

![南宁CIM平台获奖证书](/images/nncim-zhengshu.jpg)

## 通用检索查询

使用arcgis server发出来的地图服务的query接口实现类似arcgis的要素属性查询

<video controls width="600">
  <source src="/videos/nncim-tongyongjiansuo.mp4" type="video/mp4">
  您的浏览器不支持视频播放。
</video>

## 全市倾斜加载

对倾斜进行轻量化处理以及加载策略参数优化，实现5TB的全市倾斜加载

<video controls width="600">
  <source src="/videos/nncim-qingxiejiazai.mp4" type="video/mp4">
  您的浏览器不支持视频播放。
</video>

## 全景融合

可实现类似google earth的全景融合类似的道路准确视角飞入, 实现倾斜街景慢慢过渡到全景图的效果

<video controls width="600">
  <source src="/videos/nncim-quanjing.mp4" type="video/mp4">
  您的浏览器不支持视频播放。
</video>

## BIM属性查询

<video controls width="600">
  <source src="/videos/nncim-bimchaxun.mp4" type="video/mp4">
  您的浏览器不支持视频播放。
</video>

## 图层动态图例树

根据地图服务的不同层级动态展示当前层级的图例

<video controls width="600">
  <source src="/videos/nncim-maptuli.mp4" type="video/mp4">
  您的浏览器不支持视频播放。
</video>

## 倾斜实现属性查询

BIM更新成本太高，所以使用倾斜+二维地图服务叠加的方式实现倾斜的属性查询

<video controls width="600">
  <source src="/videos/nncim-ersanweironghe.mp4" type="video/mp4">
  您的浏览器不支持视频播放。
</video>

## 多层服务叠加查询

我们在对地图服务进行查询的时候通常会碰到多层服务叠在一起的情况，这个功能解决了叠在一起点不到下面地图服务的情况，更方便的对地图进行属性查询

<video controls width="600">
  <source src="/videos/nncim-duocengfuwuchaxun.mp4" type="video/mp4">
  您的浏览器不支持视频播放。
</video>

## 地图服务便捷操作

<video controls width="600">
  <source src="/videos/nncim-quickcontorl.mp4" type="video/mp4">
  您的浏览器不支持视频播放。
</video>
