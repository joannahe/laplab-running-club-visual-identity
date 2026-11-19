# Logo 文件清单与使用

仓库与完整离线包共包含 **12 个 Logo 文件**：2 张原始组件 PNG、4 款组合标各自的透明 PNG 和 SVG，以及帽背版跑团标识 PNG/SVG。

## 原始组件（保留不覆盖）
- `public/mark.png`：1254×1254，黑底白色双 L 闪电。
- `public/word.png`：400×600，黑底灰白 LAP/LAB 堆叠字标。

这两张是原始组件，不是透明底组合标。使用时闪电与字标必须一起呈现。

## 可直接使用的组合标
| 文件名（public/logo/ 下） | 颜色 | 场景 |
|---|---|---|
| laplab-lime-on-dark.png / .svg | 绿闪电＋白字 | 深色背景 |
| laplab-lime-on-light.png / .svg | 绿闪电＋黑字 | 浅色背景 |
| laplab-mono-white.png / .svg | 单色白 | 深色背景或单色制作 |
| laplab-mono-black.png / .svg | 单色黑 | 浅色背景或单色制作 |

所有组合标为 1000×622、透明底。社媒默认使用电光绿 #D7FF3F 闪电，字标按背景切换粉笔白 #F3F4ED 或炭黑 #171A1D。单色款供单色制作选择，不替换当前社媒默认款。

保留原始轮廓，不用字体重新拼 Logo。SVG 使用原始位图的内嵌遮罩，**不是纯路径矢量文件**；没有外部图片依赖。PNG 已导出透明通道，可直接用于常见排版工具。大型印刷需另行制作并校验矢量母版，不能把本 SVG 当作无限放大的印刷母版。

## 复现
```sh
npm run logos:build
npm run logos:render
```
前者更新 public/logo/ 的 SVG；后者输出透明 PNG 到 out/logos/。验收后再复制 PNG 到 public/logo/。浏览器参数支持 --browser-executable。照片与视频原有白色标识保持原设计；本次统一的是社媒工程默认绿色闪电。

授权见 MEDIA-LICENSE.md。离线预览、逐项下载入口见根目录「开始阅读.html」。

## 帽背版跑团标识（新增）
`public/logo/laplab-cap-running-club.png` 与同名 `.svg`：800×1000 透明底，竖排 LAP/LAB、跑团、Running Club。复用原始字标，不含闪电；适用于帽背与已确认的新片尾。SVG 内嵌位图字标和可编辑文字，不是纯路径矢量；字体差异可能影响显示，直接排版优先用 PNG。加入此款后共 12 个 Logo 文件。
