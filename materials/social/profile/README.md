# 小红书主页上传素材

- **avatar.png**：1080×1080 方形头像，深底、绿色闪电与白色字标，居中预留圆形裁切空间。
- **background.png**：独立主页背景，与 materials/applications/主页背景.png 为同一原图，不包含账号界面。

分别选择头像与主页背景上传；背景按客户端预览调整裁切，尚未在真实账号验证显示效果。materials/applications/主页预览.png 是页面示意，不应用作上传背景。

头像生成入口为 scripts/avatar-entry.tsx，可运行：
```sh
npx remotion still scripts/avatar-entry.tsx XhsAvatar out/xhs-profile/avatar.png
```
需要先安装项目依赖；如需指定浏览器，加 --browser-executable 参数。复用 public/logo/laplab-lime-on-dark.svg，不重绘标识。背景当前为成品 PNG，不是可编辑分层工程。

授权见根目录 MEDIA-LICENSE.md。
