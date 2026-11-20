# 主题曲与歌词

歌曲均由项目负责人提供并说明使用 Suno 生成，保留原始文件。原有四首 WAV 之外，新增五个歌曲版本，每版同时保留 WAV 与 M4A。标题相同的两个文件是不同版本，不做内容去重。

| 文件 | 时长 | 音频规格 |
|---|---|---|
| [LapLab 和你一起出发.wav](../public/music/LapLab%20和你一起出发.wav) | 2:53 | 48000 Hz / 2 声道 |
| [LapLab.wav](../public/music/LapLab.wav) | 2:29 | 48000 Hz / 2 声道 |
| [Serious Training, Easy Company-Psychedelic Downtempo-V2.wav](../public/music/Serious%20Training,%20Easy%20Company-Psychedelic%20Downtempo-V2.wav) | 3:48 | 48000 Hz / 2 声道 |
| [Serious Training, Easy Company-Psychedelic Downtempo-V1.wav](../public/music/Serious%20Training,%20Easy%20Company-Psychedelic%20Downtempo-V1.wav) | 3:36 | 48000 Hz / 2 声道 |

当前视频配乐使用第一首不带 `(1)` 的英文同名歌曲，截取开头 18 秒。其余版本保留供跑团比较选择。

## 歌词

- [中文创作原稿《一起刷圈》](lyrics/一起刷圈-中文歌词.txt)
- [英文创作原稿《One More Lap》](lyrics/One-More-Lap-英文歌词.txt)

歌词不是四首成品的逐字转写，生成工具可能改变段落、重复或发音；制作歌词字幕时应先按选定音轨听写与对齐。

## 风格提示词

[迷幻电子慢跑版](prompts/迷幻电子-慢跑-英文提示词.txt)少于 1000 字符，建议 82 BPM、清晰八分音符、温暖低频和漂浮合成器。这个 BPM 是生成目标，不是对上述成品的测定。Lyrics 与 Style 分栏填写。

## 使用范围

歌曲、歌词和提示词按项目媒体说明保留权利，不纳入代码非商业许可证。详见 [媒体说明](../MEDIA-LICENSE.md)。

## 按场景选曲（Agent 必读）

机器可读档案：[catalog.json](catalog.json)。用户指定曲目优先；未指定时先匹配视频场景、情绪和歌词，再选择片段，不默认复用旧样片。

### This Is Your Day · 已获用户认可
- 原曲：[This Is Your Day.m4a](../public/music/This%20Is%20Your%20Day.m4a)，音轨 3:59.88；容器含字幕，时长约 4:00.72。
- 风格：Progressive House／振奋型渐进浩室／欧洲音乐节风格；用户确认使用 D 提示词。
- **BPM：生成目标 130；成品未实测。** 不能宣称已按 130 BPM 精确卡点，音乐速度也不等于跑步步频。
- 首选场景：马拉松动员、冲 PB、比赛日、跑友助威、冲线高光、赛后庆祝。次选：长距离训练成果回顾。
- 情绪：坚定、希望、支持、庆祝；歌词核心为「Run, refine, repeat」。间歇速度课需要更强冲击时优先另选匹配曲目。
- 剪辑建议：准备与出发搭配较平缓段，冲线和成绩揭晓搭配副歌；具体截取点需试听，不编造高潮时间码。有人声，避免与密集旁白争抢。
- [完整歌词](lyrics/This-Is-Your-Day-英文歌词.txt)来自文件内嵌元数据，并非人工听写；字幕需核对成品。
- [已确认生成风格](prompts/This-Is-Your-Day-Progressive-House.txt)保留原提示词，其中约 3 分钟为生成要求，实际成品约 4 分钟。
- M4A 内为 Opus／48 kHz／立体声；如播放器不兼容，另转 AAC 或 WAV，不覆盖原曲。

### 推荐输出规则
给出推荐曲名、匹配场景的理由、BPM 信息来源（目标或实测），交付记录文件与实际截取起止时间、音量和淡入淡出。未分析的歌曲不猜测风格或 BPM；先试听再补档。

## 新增歌曲场景速查（2026-11-20）

以下时长来自音轨元数据；BPM 全部为此前推荐的生成目标，**不是实测**。不同文件名的版本分别保留，不能按同名歌曲去重。WAV/M4A 按用户文件名和一致时长配对为同一版本，不代表逐采样相同。

| 歌曲版本 | 音轨时长 | 目标 BPM | 首选场景 | 风格 |
|---|---:|---:|---|---|
| Easy Miles, Easy Smiles — melodic electronica | 3:54.16 | 112 | 日常 LSD、轻松跑、城市探索 | Melodic Electronica |
| Easy Miles, Easy Smiles — Warm Melodic Electronica | 3:39.44 | 112 | LSD、恢复跑、跑友相处 | Warm Melodic Electronica |
| Make Fast Feel Easy — Dancefloor | 2:57.92 | 174 | 间歇课、速度课、操场快闪 | Dancefloor Drum & Bass |
| Make Fast Feel Easy — Explosive electronic alternative rock | 2:47.88 | 156 | 间歇训练、热血集锦、团队助威 | Electronic Alternative Rock |
| This Is Your Day | 3:59.88 | 130 | 马拉松、冲 PB、冲线、赛后庆祝 | Progressive House |

所有文件位于 `public/music/`，逐文件路径、时长、编码、校验值及每版歌词／提示词路径见 [catalog.json](catalog.json)。原文件均保留；WAV 为 48 kHz 双声道 PCM，M4A 为 48 kHz 双声道 Opus。剪辑默认优先 WAV，M4A 适合体积较小的分发，但须确认播放器兼容性。

### Agent 如何推荐
1. 用户指定歌曲时直接遵从。否则先确定日常长距离／速度训练／比赛故事，再查档案，不只按曲名匹配。
2. LSD 优先 Easy Miles 两版：温暖、陪伴、轻松，画面可以保留交流和风景。两个版本未经听辨排序，不宣称某个一定更慢或更柔和。
3. 间歇训练优先 Make Fast：电子鼓点与快速动作可先试 Dancefloor，摇滚与集体喊唱方向可先试 alternative rock；这些是基于推荐风格的剪辑建议，需试听验证成品片段。
4. 马拉松和冲线优先用户认可的 This Is Your Day，以积累、助威和庆祝为主线。
5. 推荐时给出曲名＋版本＋匹配理由，目标 BPM 明确标为目标。具体高潮、节拍、歌词时间码需试听分析，不能编造。
6. 原曲与歌词归媒体许可，不能因代码公开而推断可自由商用。是否已发布以仓库分支及 PR 状态为准。

## 原有四首歌曲的选曲档案

| 曲目 | 实际音轨时长 | 场景建议 | 风格／BPM |
|---|---:|---|---|
| LapLab | 2:29.92 | 跑团品牌介绍、日常活动回顾 | 待核实／未知 |
| LapLab 和你一起出发 | 2:53.04 | 跑团招募、集体出发、跑友相处 | 待核实／未知 |
| Serious Training, Easy Company | 3:36.00 | 轻松慢跑、LSD、夜跑；现有样片已使用 | 迷幻电子慢跑／目标 82 |
| Serious Training, Easy Company (1) | 3:48.56 | 轻松慢跑、LSD、跑团日常 | 迷幻电子慢跑／目标 82 |

以上场景为主题层面的暂定推荐，未声称已完成听辨。每首已在 catalog.json 独立记录原文件、精确时长、编码、校验值、已知使用情况及未确认项。两首同名英文歌曲是不同成品，不合并。

原文件不含风格、BPM 或完整歌词标签。用户已确认两首 Serious Training, Easy Company 使用迷幻电子慢跑风格，关联历史 82 BPM 提示词；82 为提示词目标，非实测。LapLab 和 LapLab 和你一起出发 的风格与 BPM 仍待确认。Agent 应先试听；未知字段保持 null 或空列表，不猜测。旧创作歌词只能作为参考，制作字幕前需按音轨核对。

## 历史曲目最终确认（2026-11-20）

LapLab 与 LapLab 和你一起出发 均为用户确认的 Electric Session（melodic electro-pop / indie dance），分别关联 One More Lap 英文稿、以“张江的灯，刚刚亮起”开头的中文稿。提示词提供 82／90 BPM 两种选择，具体成品目标未指定，实测值未知。两首英文同名歌使用迷幻电子慢跑风格，文件添加 Psychedelic Downtempo-V1/V2 后缀，只改文件名，原始音频不变；catalog.json 保留旧文件名。以上确认优先于前面早期“待核实”记录。
