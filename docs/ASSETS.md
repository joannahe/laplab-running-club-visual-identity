# 素材来源与目录

本仓库和完整离线包均保留实际素材，不需要从其他项目寻找缺失文件。

| 位置 | 内容 | 来源与用途 |
|---|---|---|
| public/mark.png、word.png | 两张黑底原始标识组件 | 用户提供，保持原始几何与比例 |
| public/*.jpg | 11 张跑团照片 | 用户提供，Remotion 直接引用 |
| public/fonts/ | Barlow 字体与 OFL | Google Fonts 字体及随附授权 |
| public/music/ | 四首原始 WAV | 用户提供并说明由 Suno 生成 |
| materials/applications/ | 横幅、背心、帽子、纹身贴、贴纸、主页背景及预览 | 电光训练概念设计成果 |
| materials/social/zh/ | 7 张中文版社媒图 | 沿用 V2 大字、信息页浅底 |
| materials/social/en/ | 7 张英文版社媒图 | 单独英文版本，正常大小写正文 |
| visual/ | 18 页完整视觉方案 PDF | 第 4 页为中性灰配色展示底 |
| videos/ | 配乐快闪及无声片头片尾 | 当前完成的成片 |
| music/lyrics/ | 中英文创作歌词原稿 | 非四首音频的逐字听写稿 |
| music/prompts/ | 音乐生成提示词 | 延展参考，不代表实际音频的测定节拍 |

四首歌曲与时长见 music/README.md。未对每首 Suno 输出做逐字转写，不把创作原稿误标为精确同步字幕。需要歌词字幕时，应按最终选定音轨重新听写和对齐。

文件大小与 SHA-256 完整性记录见 assets.manifest.json。照片与音乐的存在检查使用 npm run assets:check。代码许可与素材许可分开，详见 LICENSE、NOTICE、MEDIA-LICENSE.md。

组合 Logo 的 4 款透明 PNG 与 4 款 SVG 位于 `public/logo/`；含原始组件共 10 个文件，详见 [LOGOS.md](LOGOS.md)。社媒工程重建版 14 张预览在 `materials/social/editable-preview/`，原成品保留。