# LapLab Running Club Visual Identity

**严肃训练，轻松相处。**

这是 LapLab 跑团已选定的「电光训练」视觉与内容项目：从完整视觉规范、实体物料和社媒图文，到 Remotion 视频工程、配乐样片、Suno 主题曲及歌词，集中放在一个独立仓库中，便于跑团使用、复盘和持续延展。


> 本项目源码公开，按 **PolyForm Noncommercial 1.0.0 限非商业用途使用**；不是允许自由商用的 MIT 项目。媒体与品牌素材另行保留权利，见下方许可说明。

![电光训练视觉方案](visual/方案封面.jpg)


Logo 文件清单与使用见 [LOGOS.md](docs/LOGOS.md)：2 张原始组件＋4 款透明组合标（PNG/SVG），加上帽背版 PNG/SVG，共 12 个文件。离线「开始阅读.html」提供预览与逐项下载。

独立小红书头像与主页背景见 [主页上传素材](materials/social/profile/README.md)，完整离线包的「开始阅读」可直接预览下载。

## 关于 LapLab 跑团

LapLab 是 2024 年 12 月成立于上海张江、由年轻跑者自发组织的独立跑步社群。成员来自周边高校，以及 AI、医药、半导体和互联网等行业。我们因为跑步相识，也在一次次训练和交流中成为伙伴。

**Lap** 是一圈圈训练、重复与积累；**Lab** 是实验、探索与创新。两个 L 交叠，构成品牌的闪电标识。

我们的主旨是 **「严肃训练，轻松相处」**：重视训练的方法与进步，同时尊重每个人的节奏和目标，不唯配速论。科学训练、城市探索和轻松社交，都是这个社群的一部分。

活动包含轻松跑、周三速度课和周末长距离。仓库中的课表用于展示设计，具体时间、地点、距离、分组与预约要求以当次跑团公告为准。

**各有节奏，一起刷圈。**

## 联系我们与加入跑团

**小红书号：5378951467**

在小红书搜索该账号，进入账号主页并加入小红书群，了解跑团每周课表。具体训练安排、集合地点、分组与预约要求以群内当周公告为准。

## 先看什么

1. [完整视觉设计方案 · 18 页 PDF](visual/LapLab-电光训练-完整视觉方案.pdf)：整体视觉和应用一览。
2. [最新双语配乐快闪 · 18 秒 MP4](videos/LapLab-电光训练-双语配乐快闪.mp4)：9:16 小红书竖版，已加入主题曲。
3. [主题曲及场景选曲入口](music/README.md)：保留原始 WAV／M4A，按场景选择歌曲版本。
4. [完整离线包](https://github.com/joannahe/laplab-running-club-visual-identity/releases/latest)：供直接发给跑团团长。解压后打开 `开始阅读.html`，无需安装软件即可浏览资料、试听和播放视频；浏览器不支持的文件可用本机播放器打开。
5. 想继续设计或交给 Agent：[AGENTS.md](AGENTS.md)、[品牌规范](docs/BRAND.md)、[社媒规范](docs/SOCIAL.md)、[视频延展指南](docs/VIDEO.md)。

## 项目里包含什么

| 目录 | 内容 |
|---|---|
| `visual/` | 电光训练完整视觉 PDF、封面预览 |
| `materials/applications/` | 横幅、背心、跑帽、纹身贴、贴纸、主页背景与主页预览，共 7 张 |
| `materials/social/zh/` | 7 张中文社媒图文 |
| `materials/social/en/` | 7 张独立英文社媒图文 |
| `videos/` | 双语配乐快闪、独立无声片头、独立无声片尾 |
| `public/` | 原始 Logo、11 张实际使用照片、字体及视频素材 |
| `public/music/` | 4 首由项目负责人提供的 Suno 原始 WAV |
| `music/lyrics/` | 中英文创作歌词原稿 |
| `music/prompts/` | 慢跑迷幻电子风格生成提示词，保留英文以便复制使用 |
| `src/` | 可编辑的视频时间轴、社媒静态版式、Logo 与品牌变量 |
| `social/` | 社媒中文、英文各七页的可编辑 JSON 内容 |
| `docs/` | 中文品牌、视频、素材及验收规范 |
| `scripts/` | 素材检查、完整离线打包脚本 |
| `.agents/skills/` | 主题 KV、线下物料、社媒图文、短视频四个 Agent 技能 |
| `templates/` | 可复制的活动设计简报 |

## 为什么这样设计

Lap 代表一圈圈训练与积累，Lab 代表实验、探索和创新。两个交叠的 L 形成原始闪电标识。

颜色只使用电光训练：炭黑 `#171A1D`、粉笔白 `#F3F4ED`、电光绿 `#D7FF3F`、冷灰 `#A8B0AD`。本项目不包含另外两套备选配色。

视频遵循「一次一条信息」：大 Logo 独立出现，口号透明叠在照片上，中文白色、英文小字电光绿，位置避开人脸。中文社媒版保持纯中文，英文社媒独立制作。规范说明使用中文，英文歌词、英文图文、生成提示词及第三方许可证保留原文。

## 不写代码也能用

- 查看 PDF 确认方向；物料为概念展示，正式制作时用原始标识套版并打样确认。
- 直接取 `materials/social/` 中需要的语言版本；不要把中英文版重新堆在同一张图上。
- 用 `videos/` 成片预览投放效果，或把独立片头片尾拼入自己的视频。
- 从 `public/music/` 试听歌曲，结合歌词和提示词继续实验。两套歌词是创作原稿，不是四首音频的逐字转写或同步字幕。

## 用 Agent 设计新的活动主题

项目提供四个场景技能，共用电光训练品牌规范：

| 场景 | 技能 |
|---|---|
| 新主题主视觉／跨场景方向 | [laplab-kv](.agents/skills/laplab-kv/SKILL.md) |
| 横幅、衣服背面、跑帽、贴纸 | [laplab-print](.agents/skills/laplab-print/SKILL.md) |
| 社媒封面、轮播、主页背景 | [laplab-social](.agents/skills/laplab-social/SKILL.md) |
| Remotion 短视频、片头片尾 | [laplab-video](.agents/skills/laplab-video/SKILL.md) |

让 Agent 打开完整仓库，读取相应技能并描述你的活动。例如：

> 读取 `.agents/skills/laplab-social/SKILL.md`，为「夜色里一起刷圈」做三张中文招募图。信息页用浅底大字，使用现有跑团照片；日期地点先标待确认，不出英文版。

支持技能调用的客户端也可使用 `$laplab-social` 等名称；未发现技能时直接指定上述文件路径即可。无需先安装到系统技能目录。

新主题改变文案、照片和构图，默认保留电光训练配色及组合 Logo。跨场景可先用 KV 技能形成 `theme.md` 再复用；单场景可直接开始。详见 [场景工作流与调用示例](docs/CREATIVE-WORKFLOW.md)、[简报模板](templates/creative-brief.md)。

技能是可复用的设计流程。社媒已有 JSON + React 可编辑模板，视频有可运行的 Remotion 工程；线下物料仍以概念 PNG 为参考。新结果默认放 `out/<主题>/`，不会自动覆盖已验收物料，也不会自动发布。

### 第一次使用：不用会 GitHub，也不用会写代码

Skill 可以理解成「给 Agent 的工作说明书」：告诉它参考哪些素材、遵守哪些设计规则、怎样交付和检查。它本身不是设计软件，也不会在下载后自动生成图片。

1. **下载完整项目。** 打开上方「完整离线包」链接，在发布页的 Assets（附件）里下载 `LapLab-Running-Club-Visual-Identity-Offline.zip`，然后解压。无需 Fork、提交代码或学习 Git 命令；不要只下载一个 SKILL.md，因为技能还需要项目内的照片、Logo 和规范。
2. **先看看已有内容。** 打开解压目录中的 `开始阅读.html`，查看设计方案、图片和短片，确定想做哪类内容。
3. **让 Agent 访问这个文件夹。** 使用能读写本地项目文件、查看图片的 Agent，在其「打开文件夹／项目／工作区」入口选择解压后的项目目录，也就是包含 `README.md`、`public`、`materials` 的那一层。不同工具入口名称可能不同；普通聊天窗口只收到仓库网址，并不意味着它已能访问全部素材或导出文件。
4. **复制下面一个例子并改成自己的需求。** 不知道 Skill 名称也没关系，可以先说：「请先读这个项目的 README 和 AGENTS.md，帮我选择合适的技能。我想做……」。如果 Agent 说找不到技能，让它按例子中的路径直接读取文件；`.agents` 是隐藏目录，文件管理器里看不到也不代表没有。
5. **看预览，再提出修改。** 让 Agent 告诉你预览和源文件保存在哪里。可以继续说「第二张字再大一些」「只改集合时间」「把英文版单独导出」。确认后再用于实际活动；制作完成不等于已自动发到社媒。

生成视频时可能需要 Agent 安装项目依赖和准备浏览器；仅查看已有图片或成片不需要。工具如果不能运行代码或导出文件，就只能协助整理文案和设计说明，不能把这样的结果当成完成的图或视频。

### 场景一：做一组周末轻松跑招募图

适合：运营同学已经有活动信息，需要封面、活动介绍和报名说明。

> 请读取 `.agents/skills/laplab-social/SKILL.md`，为 LapLab 跑团做三张中文招募图，主题是「周末一起轻松跑」。第一张是大字封面，第二张说明活动安排，用浅色底，第三张放参加方式。使用项目里的真实照片和电光训练配色，不加英文小字。日期、集合点和报名方式先写「待确认」，不要编造。先给我预览，同时保留本次新建的可编辑源文件，保存到 `out/weekend-run/social/`。

如果活动信息已经确定，把「待确认」替换成真实信息；没有提供报名链接时，不让 Agent 生成一个假二维码。

### 场景二：给外籍跑友做独立英文版

适合：已有一套中文活动图，希望内容一致但英文自然、排版舒适。

> 请读取 `.agents/skills/laplab-social/SKILL.md`，把刚才 `out/weekend-run/social/` 的中文活动内容做成独立英文版。保留同样的活动事实和电光训练视觉，英文正文正常大小写，不要全部大写加粗。英文按实际长度重新排版，不要覆盖在中文图片上。保存到 `out/weekend-run/social/en/`，保留中文版，并交付英文预览和可编辑源文件。

这个例子承接上一项任务；单独使用时，请把路径换成实际已有的活动目录。

### 场景三：做跑团横幅与衣服背面概念

适合：团长想先看设计效果，还没确定印厂和制作尺寸。

> 请读取 `.agents/skills/laplab-print/SKILL.md`，做一款训练集合横幅和一款衣服背面概念。要有「LapLab 跑团」和「严肃训练，轻松相处」，按整体视觉规范配英文小字，保留原始组合 Logo。现在只是概念阶段，不必确定真实尺寸；请提供平面设计、效果预览和可编辑源文件，保存到 `out/team-kit/print/`，并列出正式生产前还需要确认的参数。

拿到供应商的尺寸、材质和工艺要求后，再把它们发给 Agent 做生产版。概念效果图不等于可直接交给印厂的文件。

### 场景四：把一次夜跑照片做成短视频

适合：活动结束后已有照片，想做一支竖版回顾。

> 请读取 `.agents/skills/laplab-video/SKILL.md`，用我提供的夜跑照片制作一支 18 秒、9:16 的活动回顾。照片目录是【替换为我的照片文件夹路径】。沿用电光训练，节奏快一些，但文字要读得完。中文主句配英文小字，透明叠在照片上并避开人脸；Logo 和口号分开出现。音乐用项目里的《Serious Training, Easy Company》，先用开头片段。请实际渲染 MP4，并保留可编辑合成和时间轴说明，输出到 `out/night-recap/video/`。

把方括号内容换成真实路径，或通过 Agent 支持的方式提供照片；也可以明确让它使用仓库现有照片。渲染后观看整段，特别检查人脸、文字和音乐结尾。

### 场景五：同一活动需要一整套视觉

适合：周年跑、主题训练或招募活动，需要主视觉、横幅、社媒和短片保持一致。

> 请先读取 `.agents/skills/laplab-kv/SKILL.md`，为「一起刷圈」主题活动做一张中英主视觉。先把主句、照片选择、构图和字体层级整理到 `out/our-laps/theme.md`，保持电光训练品牌。先交付这一张 KV 和预览，我看过后再决定延展哪些物料。

看过主视觉后，可以继续说：

> 沿用 `out/our-laps/theme.md`，分别按线下物料和社媒技能做一张横幅概念、三张中文社媒图。不另起一套风格，中文社媒不加英文解释。请把各自预览和可编辑源文件放在这个主题目录下。

### 哪些文件现在可以编辑？

| 内容 | 当前提供什么 | 怎样修改 |
|---|---|---|
| 社媒图文 | 14 张原版 PNG、代码模板、14 张重建预览及规范 | 已有 `social/*.json` + `src/social/SocialCard.tsx` 工程，可编辑文案并导出；保留原 PNG 与重建预览供对照 |
| 线下物料 | 概念效果 PNG 与规范 | 未提供分层生产工程；新设计需另建版式，生产前核对供应商要求 |
| 短视频 | MP4 样片与 `src/` 中 Remotion 源码 | 可修改时间轴、照片和叠字，再渲染成片 |
| Skill | 工作流程与检查要求 | 指导 Agent 做设计，不等于 PSD、Figma 或现成的可编辑画布 |

社媒工程现在可以直接修改标题、正文、课表和照片。它是原风格的代码重建，不是原 PNG 的分层文件，也不是 PSD/Figma 工程。详见 [社媒工程操作指南](docs/SOCIAL-EDITING.md)。

```sh
npm run social:render -- --lang zh --page 4
```

可以对 Agent 说：「复制 social/zh.json，改成我提供的活动文案，用现有模板导出 PNG，保留 JSON 和版式源文件，不调用生图模型。」

## 运行和重新生成视频

需要 Node.js（20.19+、22.13+ 或 24+，以 package.json 为准）及 npm；Remotion 渲染使用 Chrome/Chromium。首次安装依赖和浏览器可能需要网络。完整包里的 PDF、图片、歌曲和成片可直接离线使用，源码复现需要先准备依赖。

```sh
npm ci
npm run assets:check
npm run typecheck
npm run dev
```

Studio 中选择 `LapLab-Xiaohongshu-Flash`。

```sh
npm run render:portrait
npm run render:opening
npm run render:ending
```

默认输出到 `out/`。也可以指定已安装的 Chrome 路径：

```sh
npx remotion render LapLab-Xiaohongshu-Flash out/portrait.mp4 --browser-executable=/path/to/chrome
```

当前样片采用《Serious Training, Easy Company》开头 18 秒，0.3 秒淡入、最后 1.2 秒淡出。更换摘录可设置 `musicStartSeconds`：

```sh
npx remotion render LapLab-Xiaohongshu-Flash out/portrait.mp4 --props='{"musicStartSeconds":30}'
```

`src/PortraitFilm.tsx` 可以调整每个镜头、照片与音乐文件；`src/brand.ts` 管理品牌颜色；`src/LogoScene.tsx` 管理原始组合标。换照片后必须重新检查中英文叠字与人脸位置。

## 可以怎样延展

- 把同一结构用于每周训练回顾、活动招募、长距离跑记录。
- 替换照片和日期内容，保留字号、组合标、语言层级与颜色体系。
- 修改时间轴以适配更长或更短的内容；双语镜头仍需给足阅读时间。
- 选取另一首随附主题曲的段落，并重新处理开头、结尾和响度。
- 通过 Agent 修改：先让它读 AGENTS.md，再读具体规范，最后渲染验收，不能只改源码不看成片。

## 打包完整离线版本

需要 Python 3（仅使用标准库）。

```sh
npm run package:offline
```

输出 `out/LapLab-Running-Club-Visual-Identity-完整离线包.zip`。包中包含本仓库的素材与源码，排除 Git 历史、node_modules、缓存、环境变量和重复输出。文件完整性见 `docs/assets.manifest.json`。

## 许可与商用

- 代码、脚本和配套技术说明：使用 [PolyForm Noncommercial 1.0.0](LICENSE)，允许许可证范围内的非商业使用、修改和分享。商用联系 GitHub 维护者 joannahe（https://github.com/joannahe） 另行取得授权；正式范围以原文为准。
- Logo、照片、歌曲、歌词、视觉方案、生成提示词、设计物料及成片：不纳入代码许可证，保留各自权利，见 [MEDIA-LICENSE.md](MEDIA-LICENSE.md)。
- Barlow 字体按随附 SIL OFL 1.1；其他依赖使用各自许可。

本仓库是源码公开的非商业项目。请保留 NOTICE 和 LICENSE，不把公开可下载理解为可任意商用品牌或媒体素材。

## 新版品牌片头片尾
[绿色闪电片头](videos/LapLab-绿色闪电-独立片头.mp4) · [跑团标识与口号片尾](videos/LapLab-跑团标识与口号-独立片尾.mp4) · [帽背版透明 Logo](public/logo/laplab-cap-running-club.png) · [SVG](public/logo/laplab-cap-running-club.svg)。两段无声，配乐在整片统一添加；可编辑源码见 `src/BrandBumpers.tsx`。

## 按场景选择视频音乐

音乐库包含日常 LSD、间歇速度训练、马拉松助威与庆祝的歌曲版本，保留 WAV 和 M4A。请先阅读 [音乐场景说明](music/README.md)；Agent 可读取 [结构化选曲档案](music/catalog.json)，按视频主题推荐歌曲。BPM 区分生成目标与实测，不能直接用目标值代替卡点分析。

## 维护者

维护者：[Jingke He / joannahe](https://github.com/joannahe)
