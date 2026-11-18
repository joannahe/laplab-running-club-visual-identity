# 社媒可编辑工程

## 提供什么

新增 React / Remotion 静态排版工程，不调用生图模型或外部设计 API。文字、色块、线条、照片和组合标是独立组件，内容来自 JSON。支持中文和英文各 7 页、1080×1440 PNG；共用现有 Node 依赖，无需再安装 Python 或设计软件。

这是依据已选风格重建的模板，不声称逐像素复原原有 PNG。原有 `materials/social/zh`、`en` 保留；重建预览位于 `materials/social/editable-preview/`。日期地点来自原方案示例，输出明确标注以当次通知为准，正式使用前请替换。抽象跑道线不是实际路线图。

| 文件 | 修改内容 |
|---|---|
| `social/zh.json`、`social/en.json` | 标题、正文、课表、页脚、照片与深浅底 |
| `src/social/SocialCard.tsx` | 七类版式、字号、间距、图形、Logo 组合布局 |
| `src/brand.ts` | 共用电光训练颜色与字体 |
| `src/Root.tsx` | Studio 中的 14 个 Social 合成 |
| `scripts/render-social.mjs` | 批量导出与输入检查 |

## 最短使用路径

在项目目录准备依赖：

```sh
npm ci
npm run dev
```

Studio 里选择 `Social-zh-page-1` 等合成，修改 JSON 后查看效果。文字没有烘焙进背景，不需要先抹掉旧字。可编辑不代表提供 Figma/PSD 文件；这里的工程文件是 JSON + TSX。

```sh
# 导出两种语言全部 14 张
npm run social:render
# 只出中文第 4 张课表
npm run social:render -- --lang zh --page 4
# 新活动使用独立 JSON，避免覆盖示例
npm run social:render -- --data social/my-event.json --out out/my-event/social
```

默认输出 `out/social/zh/`、`out/social/en/`，每张 PNG 配一份实际使用的 `.props.json`。输出只允许位于本仓库 `out/` 下，不自动覆盖已验收素材。运行命令需要 Node、依赖和 Chrome/Chromium；如自动准备浏览器失败，可加 `--browser-executable` 指向自己电脑已安装的浏览器。不要复制维护者的绝对路径。

## JSON 字段

复制一个语言文件后再改；两种语言独立排版，页数可不同。

- `language`：`zh` 或 `en`，决定字体与预览入口。
- `label`：页眉短标注。
- `pages`：按导出顺序排列；`id` 唯一，只用小写字母、数字、连字符。
- `layout`：`cover` 封面、`community` 社群、`idea` 理念、`schedule` 课表、`easy` 轻松跑、`speed` 速度课、`long` 长距离。
- `light`：是否浅底。信息页建议 `true`。
- `title`：标题行数组；手动控制重要换行。建议一至两行。
- `body`：段落数组；多文字应拆页，不无限缩小字号。
- `accent`：结尾重点句；`speed` 版式使用 body，不显示该字段。
- `footer`：简短身份页脚，不写私人邮箱。
- `rows`：课表专用；每行三个字符串，分别为日期、时间、活动及地点；可用 `\n` 换行，现有版式适合四行。
- `metric`：`easy` / `speed` 的装饰数字，示例为「10」「03」，更换活动含义时与文案同步修改。
- `photo`：`easy` 专用，可选；相对于 `public/` 的实际图片路径。替换照片后检查人物和构图。

长距离装饰曲线可在 `SocialCard.tsx` 中调整，不代表真实路线。

命令导出会检查语言、布局、ID、课表结构与照片路径；字体加载后检查正文区域溢出，过长文案会报错而不是悄悄截断。仍需实际看图检查整体密度和照片。

## 字体与复刻边界

英文使用项目附带 Barlow 字体。中文沿用系统 Arial Unicode MS / PingFang SC / Noto Sans CJK SC 回退，不捆绑未授权中文字体。因此不同系统可能有字宽与换行差异；要跨机器严格一致，请团队准备同一套获授权中文字体，并在品牌字体设置中统一，不可声称任意电脑像素一致。

组合 Logo 使用 `public/logo/` 绿色闪电组合标，深底白字、浅底黑字；来源是原始两张 PNG 的遮罩，不重绘或用字体替代。完整清单见 [LOGOS.md](LOGOS.md)。照片来自现有素材，未生成替代人物。

## 给 Agent 的请求示例

> 使用社媒技能。复制 social/zh.json 为 social/weekend.json，保留封面、介绍、课表三页，改成我提供的周末活动信息。保持大字和浅底信息页，用 npm run social:render 的 --data 参数导出到 out/weekend/social，检查 PNG，并交付 JSON、版式改动和预览。不要调用生图模型。

本次改动不需要渲染视频。改动后运行 `npm run typecheck` 并实际导出所需页面；提交预览素材时同步素材清单。授权仍见 LICENSE 与 MEDIA-LICENSE.md。

## 工程版字号与构图基准
以 1080×1440 画布计：中文主标题默认 112px，英文 116px；常规正文默认 56px。信息密集或长英文段落可用 48–52px，课表单元格 38–40px、页脚 25px。主标题中文优先 PingFang SC 粗斜体（无该字体时系统回退），正文沿用现有中文回退字体；英文正文保持正常大小写与常规字重。

标题、正文少时优先放大主信息和调整段落间距；不要把所有内容堆在上半页，也不为填满而添加无意义文字。保持约 64px 左右安全边距。参考原稿的大字层级、绿色下划线、斜切色带、训练数字与灰度照片背景。照片裁切须避开人脸与关键动作。

`typography.titleSize`、`typography.bodySize` 可按页调整；仅作用于对应标题与常规正文，课表、数字、时间等有独立字号。`ribbon` 可替换社群页色带短句。所有改动需重新导出检查溢出与手机可读性，不自动缩小文字。中文版不额外添加英文解释。
