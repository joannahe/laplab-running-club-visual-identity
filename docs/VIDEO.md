# 视频延展指南

## 当前成片
`LapLab-Xiaohongshu-Flash`：18 s / 540 frames / 30 fps / 1080×1920 / 9:16。
用途：小红书竖屏。项目仅保留最终采用的竖版流程。

0–1.2 s：大组合标，单独出现。
1.2–16 s：真实照片快切，四处中英叠字。
16–18 s：大组合标落版，单独出现。

大部分照片停留 0.4–0.8 秒；双语叠字停留 1.4 秒。适度推近（1 → 1.04）和硬切制造节奏。快闪指镜头切换，禁止添加白屏闪烁效果。当前节奏未声称与歌曲逐拍精确同步。

## 照片叠字
参考已批准的视觉方案视频页：无底板，透明叠于照片上，整体水平居中，避让所有人物的脸。
以 1080×1920 为基准：中文 112 px、400 字重、#F3F4ED；英文 56 px、Barlow Condensed Regular、#D7FF3F；中英间隔 24 px；英文 sentence case。左右至少 48 px，但重要文字实际居中并远离侧边按钮区。参考安全区是设计建议，不是平台固定裁切保证，发布前仍看实际预览。

| 镜头 | 开始秒 | 中文 / English | top y | 位置理由 |
|---|---:|---|---:|---|
| 1065.jpg | 3.0 | 严肃训练。 / Serious training. | 470 | 上半部树木空白，所有人脸在下方 |
| 1070.jpg | 8.0 | 轻松相处。 / Easy company. | 1170 | 腰腿区域，不压左侧或中间人物脸部 |
| 1065.jpg | 13.2 | 各有节奏。 / Your rhythm. | 470 | 同一照片沿用同一安全位置 |
| 1029.jpg | 14.6 | 一起刷圈。 / Our laps. | 1120 | 横幅及下方地面区域，避开合照人脸 |

这些 y 值只适用于当前照片与 contain 排版。换照片、尺寸、裁切或字体时必须重新定位，不能机械复用。每个画面只有一条中英信息；不能同时叠 Logo、大口号、字幕解释和账号信息。

## 音乐

背景音乐优先使用仓库 `public/music/` 提供的原始歌曲，清单与时长见 [主题曲说明](../music/README.md)。用户明确指定曲目时遵从用户选择；未指定时按主题、节奏和视频长度从仓库歌曲中选取合适片段，无明确偏好可沿用当前样片配乐。不要默认另找外部音乐或重新生成音乐。交付时记录所用文件、截取起止时间及淡入淡出设置。

选曲先查 [场景音乐档案](../music/catalog.json) 与 [音乐说明](../music/README.md)。马拉松、冲 PB、冲线与赛后庆祝优先推荐用户认可的 This Is Your Day；130 BPM 仅为生成目标，逐拍剪辑前须分析成品。

### 当前样片的配乐设置
`public/music/Serious Training, Easy Company-Psychedelic Downtempo-V1.wav`：用户提供，曲名 Serious Training, Easy Company，用户说明由 Suno 生成。源文件 216 秒、48 kHz、立体声。保留原文件，不更改音高和速度。
本版连续采用源音频 0–18 秒，音量系数最高 0.85，0–0.3 秒淡入，16.8–18 秒淡出。该段是短片音乐摘录，不是完整主题曲或歌词字幕版本。
在 Studio 的 composition props 设置 `musicStartSeconds`，可更换音乐摘录；推荐范围 0–198 秒。修改后检查进入点、尾句截断、响度和收尾。示例：

```sh
npx remotion render LapLab-Xiaohongshu-Flash out/clip.mp4 --props='{"musicStartSeconds":30}'
```

独立 `Portrait-Opening`、`Portrait-Ending` 保持无声，方便拼接；配乐在完整片时间轴中统一处理，避免重复起音。

## 编辑入口
- `src/brand.ts`：电光训练颜色与字体 token。
- `src/fonts.ts`：本地英文字体加载。
- `src/PortraitFilm.tsx`：最新竖版时间轴、音乐、图片布局与双语叠字。
- `src/LogoScene.tsx`：原始组合标及同步入场动画。
- `src/Root.tsx`：合成注册、时长、画布大小与默认参数。


## 输出检查
`npm run assets:check` → `npm run typecheck` → `npm run render:portrait`。
逐处检查 Logo 完整性、中文字体、英文换行、色彩、透明底、眼鼻口无遮挡；检查开始/结束帧和四个文字镜头。音频应可解码、非静音，无数字削波。检查音视频时长一致、尾部淡出、手机尺寸可读。

## 新版独立片头片尾
- `videos/LapLab-绿色闪电-独立片头.mp4`：1.2 秒，绿色闪电与 LAP/LAB 同步出现。
- `videos/LapLab-跑团标识与口号-独立片尾.mp4`：3 秒，帽背式 LAP/LAB＋跑团＋Running Club，下方中英文口号，以电光绿短线分隔。此版为已确认的例外：不含闪电，允许标识与口号同屏，标识适当缩小。
两段均为 1080×1920、30fps、无声，便于在完整片统一配乐。原有视频保留。源码为 `src/BrandBumpers.tsx`，合成 ID 为 `Green-Opening`、`Club-Ending`，用 `npx remotion render <合成ID> out/<文件名>.mp4` 重建。

### 按训练场景选曲
日常 LSD／轻松跑优先 Easy Miles, Easy Smiles 两版；间歇／速度训练优先 Make Fast Feel Easy 的 Dancefloor 或电子摇滚版；马拉松／冲 PB／庆祝优先 This Is Your Day。详见 music/catalog.json 与 music/README.md。优先 WAV；112／174／156／130 均为生成目标，不是实测节拍。
