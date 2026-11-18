# 社媒图文与主页规范

## 成品位置
中文和英文各 7 张，均为 PNG，1080×1440，3:4。它们是已经验收的成品素材，随 GitHub 项目与完整离线包一起提供。

| 页序 | 用途 | 中文素材 | 英文素材 | 版面基调 |
|---|---|---|---|---|
| 1 | 品牌封面 | materials/social/zh/page-1.png | materials/social/en/page-1.png | 深底、大标识 |
| 2 | 社群介绍 | materials/social/zh/page-2.png | materials/social/en/page-2.png | 浅底、信息清楚 |
| 3 | 双 L 理念 | materials/social/zh/page-3.png | materials/social/en/page-3.png | 深底、标识与概念 |
| 4 | 周课表 | materials/social/zh/page-4.png | materials/social/en/page-4.png | 浅底、结构化信息 |
| 5 | 轻松跑 | materials/social/zh/page-5.png | materials/social/en/page-5.png | 深底、大字 |
| 6 | 速度课 | materials/social/zh/page-6.png | materials/social/en/page-6.png | 浅底、训练说明 |
| 7 | 周末长距离 | materials/social/zh/page-7.png | materials/social/en/page-7.png | 深底、路线与活动 |

主页背景和社媒主页预览位于 `materials/applications/主页背景.png`、`主页预览.png`。背景中保留「LapLab 跑团」与「严肃训练，轻松相处」；主页预览仅作设计展示，活动安排、统计数字等不得当成实时账号数据。

## 不能改变的语言区分
1. 中文社媒轮播保持纯中文，不在中文内容下面再加英文小字。
2. 英文社媒单独成套；正文正常大小写、正常字重，标题可以适当强调。
3. 整体 KV、视觉说明与视频的「中文主句＋英文小字」规则不套用到中文轮播图上。
4. 原有标识中的 LAP/LAB 英文字母不是需要删除的译文。

## 版式与配色
沿用 V2 被选定的大字号视觉效果，不为了塞入更多文字缩小到难读。先删减文案，再调整字号。信息较多时优先粉笔白浅底，深色文字；深底页使用高对比文字。
只使用电光训练色系：炭黑 #171A1D、粉笔白 #F3F4ED、电光绿 #D7FF3F、冷灰 #A8B0AD。避免把大面积电光绿当成每张图的底色。
英文标题建议 Barlow Condensed ExtraBold Italic，正文 Barlow Condensed Regular。中文沿用当前字体。保持 Logo 原稿，不重新打字模拟堆叠标。

## 如何延展一张新图
1. 选择最接近用途的现有页作为视觉参考，不机械套一张封面解决所有内容。
2. 先确认语言版本和文案层级，限制一个清晰主标题。
3. 课表、训练说明等信息密集内容参考第 2、4、6 张浅底页面。
4. 新增具体日期、集合点、配速或课程内容时，向实际活动信息核实；示例课表不自动代表当前安排。
5. 导出独立的 1080×1440 PNG；英文版单独排版，不能只是对中文版小字号覆盖翻译。
6. 用手机尺寸检查主标题、正文、边缘裁切和 Logo。必要时试发预览检查平台裁切。
7. 更新本表和素材清单，让其他 Agent 知道新增内容用途。

## 源文件说明
原有社媒资产是最终 PNG，现新增 `social/` JSON 内容和 `src/social/SocialCard.tsx` 可编辑排版。重建预览见 `materials/social/editable-preview/`，导出指南见 [SOCIAL-EDITING.md](SOCIAL-EDITING.md)。它们延续原风格，但不声称逐像素一致；不提供 PSD/Figma。新主题优先复制内容配置并复用版式，不依赖生图模型。

媒体和设计物料使用范围见 MEDIA-LICENSE.md。
