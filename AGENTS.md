# Agent 延展规范

开始工作前阅读 README、docs/BRAND.md；新主题任务再读 docs/CREATIVE-WORKFLOW.md，并按任务选择 .agents/skills/ 下的 KV、线下物料、社媒或短视频技能，按需读取场景规范与 docs/ASSETS.md。后续用户明确要求高于本文件；所有规范说明使用中文。

## 已确定的范围
只使用电光训练方案，不增加其他配色提案。核心主旨是「严肃训练，轻松相处」：Lap 代表训练积累，Lab 代表实验探索。尊重不同节奏与目标。
最新视频合成为 LapLab-Xiaohongshu-Flash，18 秒、1080×1920、30 fps，面向小红书。

## 设计规则与适用范围
第 2、4、6 条针对视频；第 3 条白字绿字针对深底照片叠字。信息密集的静态物料和社媒可用浅底深字，具体见 BRAND、SOCIAL 与场景技能。新主题可变文案、照片、构图，不默认改变品牌配色。

1. 双 L 闪电与原始堆叠 LAP/LAB 同步出现、移动和缩放，不能重绘、拆开或用字体替代。
2. 大 Logo 单独落版；口号单独叠于照片。不得在同一画面塞入 Logo、口号、账号介绍和大量说明。
3. 中文主句 #F3F4ED，英文小字 #D7FF3F，炭黑 #171A1D 为底色，次要灰 #A8B0AD。英文小字用 Barlow Condensed Regular，正常大小写。
4. 照片叠字透明底、水平居中。位置按每张照片调整，避让所有人脸。严禁机械复用坐标。
5. 用真实跑团照片，不生成替代人物。必要时完整容纳照片并用柔化背景补边，不能裁掉关键人物。
6. 普通照片 0.4–0.8 秒；双语叠字至少 1.4 秒。快闪指快速切镜头，不是白屏频闪。
7. 总体 KV 和视频是中英搭配；中文社媒图文是纯中文版，英文社媒另出。信息多时沿用浅底大字。
8. 横幅、衣服背面、主页背景等额外身份文案要体现「LapLab 跑团」。Logo-only 视频卡除外。

## 社媒工程
优先使用 social/ 中的内容 JSON 和 src/social/SocialCard.tsx，操作见 docs/SOCIAL-EDITING.md；不必调用生图服务。运行 npm run typecheck 并用 npm run social:render 实际导出验证。原社媒 PNG 保留为参考，重建模板预览单独存放。

## 修改工程
- 品牌变量在 src/brand.ts；当前时间轴、音乐和叠字在 src/PortraitFilm.tsx。
- 每个可单独编辑的镜头保留独立 JSX 节点；时间使用 useVideoConfig().fps 转换。
- 动画由 useCurrentFrame 和 interpolate 驱动，不用实时计时器、CSS animation/transition。
- 视频背景音乐优先使用 public/music/ 内提供的歌曲，先读 music/README.md 和 music/catalog.json，按场景推荐并区分目标 BPM 与实测 BPM；清单见 music/README.md；用户明确指定曲目时遵从用户选择，未指定时从仓库歌曲选取适合片段。
- 修改音乐位置使用 musicStartSeconds；不要擅自改变音高、倍速或以其他歌曲替换用户原曲。
- 使用 @remotion/media 和 @remotion/fonts；保留依赖锁文件。
- 不覆盖原始歌曲、照片和标识；派生物放 out/，验收后再更新 videos/。

## 交付检查
视频修改运行 npm run assets:check、npm run typecheck，渲染新版本并抽查开头、结尾、所有双语叠字场景和新增照片。静态物料按对应技能检查实际导出物；仅改文档不必渲染视频。
视频检查脸部避让、字号、字体加载、英文换行、透明底、颜色、画布比例、帧数、音轨、淡入淡出。完整解码一次，防止损坏文件。
每次改变约定同步修改中文规范。离线包必须包含本项目所有物料、照片、所有原始音乐（包括 WAV、M4A）、歌词、样片与源码，但排除 node_modules、.git、缓存与凭据。

## 发布与许可
代码与技术说明按 PolyForm Noncommercial 1.0.0 提供，不能改成 MIT 或声称可自由商用。媒体、Logo、歌词、视觉设计与成片另见 MEDIA-LICENSE.md。依赖和 OFL 字体遵循各自许可。
发布身份为 joannahe，提交使用 GitHub 隐私邮箱，不公开个人邮箱。不要引入其他账号的作者信息或提交历史。未经新的明确要求，不新增远程发布或推送操作。

社媒工程优先使用 public/logo/ 的绿色闪电组合标；Logo 清单见 docs/LOGOS.md。字号与原稿构图复刻基准见 docs/SOCIAL.md。私人测试与活动文案不得随公开项目或完整公共离线包发布。
新版帽背式标识及片尾已确认：LAP/LAB＋跑团＋Running Club 不含闪电，片尾允许下方同时出现中英文口号。它是上方通用标识/口号规则的特定例外；使用 src/BrandBumpers.tsx，详见 docs/VIDEO.md。
