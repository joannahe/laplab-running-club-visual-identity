# 不同活动主题的设计流程

## 共用品牌，按场景选择技能
「主题」指夜跑、周年、训练课或招募等内容与构图变化。默认保留电光训练配色、原始组合标和品牌主旨；无需每次重新设计品牌。用户明确要求的变化优先，但只修改本次指定范围。

| 用户需求 | 技能入口 | 场景资料 |
|---|---|---|
| 建立一个新主题 KV 或跨场景视觉方向 | `.agents/skills/laplab-kv/SKILL.md` | BRAND、ASSETS、视觉 PDF |
| 横幅、衣服、帽子、贴纸等 | `.agents/skills/laplab-print/SKILL.md` | BRAND、ASSETS、应用效果图 |
| 封面、轮播、主页背景 | `.agents/skills/laplab-social/SKILL.md` | SOCIAL、ASSETS、社媒 PNG |
| 活动短片、照片快闪、片头片尾 | `.agents/skills/laplab-video/SKILL.md` | VIDEO、ASSETS、Remotion 源码 |

单场景任务直接使用对应技能，不必先跑完整 KV 流程；跨场景任务先确定一份主题规则，再按需求复用。技能不要求额外插件或多 Agent。Agent 需要能读写仓库并查看图像；视频另外依赖本项目 Node/Remotion 与浏览器环境。

## 输入与输出
用 `templates/creative-brief.md` 记录必要信息。优先从用户当前指令、已给素材和现有简报提取；只询问真正影响输出的缺失信息。概念稿可带明确标注的占位内容继续设计，发布级活动信息和生产参数不可虚构。

每个主题的派生结果放 `out/<主题>/`，按实际交付建立 `kv/`、`print/`、`social/zh/`、`social/en/` 或 `video/`，不创建空目录凑结构。共用 `brief.md`，跨场景时增加 `theme.md`；说明交付文件、实际规格和未确认项。源文件可以是 SVG、HTML/CSS、设计软件文件或 Remotion 组件，依工具和用途选择。

社媒已有 JSON + React 静态模板与批量导出，见 SOCIAL-EDITING.md；新主题优先修改配置和版式。线下物料 PNG 仍为成品参考，未提供 PSD/Figma 分层工程。视频已有可运行工程。

## 规则适用范围
- 基础身份、配色、字体见 BRAND；不能用字体替代原始 Logo。
- 中文社媒不加英文解释；英文社媒单独制作。整体 KV 和视频用中文配英文小字。
- 信息多的静态页面可用粉笔白底、炭黑字；视频白字／绿字规则不能强加到所有浅底物料。
- 片长、镜头节奏、透明居中叠字、帧驱动动画等只约束视频及相应照片叠字画面，不要求课表或生产稿套用同一布局。
- 真实照片不生成替代人物。未知活动信息不沿用旧示例作事实。不得虚构二维码或报名链接。
- 只交付用户所需范围；制作设计不意味着允许发布、发送或覆盖既有验收物料。

## 验收与收录
每次实际打开导出物检查视觉效果，源码编译通过不等于排版合格。各技能列出场景检查；不要为了静态设计运行无关的视频渲染。

`out/` 被 Git 和完整离线打包排除。用户确认需作为项目示例收录时，将交付与可编辑源文件移入对应 `materials/`、`visual/`、`videos/` 或 `src/`，补充用途说明；新增或修改素材须同步 `docs/assets.manifest.json`（路径、大小、SHA256）并运行 `npm run assets:check`。不要覆盖原始照片、音乐或 Logo。不自动提交私人活动信息、个人邮箱或机器绝对路径。

## 使用方式
技能与本仓库的 docs、素材和源码共同工作，不是可脱离仓库独立使用的通用设计技能。支持仓库技能发现的 Agent 可读取 `.agents/skills/`；具体客户端是否自动加载以其实际行为为准。

不支持自动发现的 Agent：让它打开仓库后，直接读取对应 `SKILL.md` 并按其中流程工作。无需把技能复制到系统目录；如需单独安装，必须保持完整仓库可访问并明确根目录位置。

例如：

- 「读取 .agents/skills/laplab-kv/SKILL.md。以『夜色里一起刷圈』为主题做一张中英 KV，保持电光训练，用仓库真实照片。」
- 「读取 .agents/skills/laplab-print/SKILL.md。沿用 out/night-run/theme.md，做横幅与衣服背面概念稿，不需要定生产尺寸。」
- 「读取 .agents/skills/laplab-social/SKILL.md。做三张中文招募图，信息页用浅底大字。时间地点先标待确认，不出英文版。」
- 「读取 .agents/skills/laplab-video/SKILL.md。用现有照片和主题曲做 18 秒竖版活动预告，中文配英文，保留透明照片叠字，输出到 out/night-run/video/。」

许可沿用 LICENSE 与 MEDIA-LICENSE.md。技能不会授予媒体、品牌或音乐的额外使用权。
