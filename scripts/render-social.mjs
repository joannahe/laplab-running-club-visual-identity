// 用项目已有 Remotion CLI 导出静态 PNG，不调用生图服务。
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const cli = path.join(
  path.dirname(require.resolve("@remotion/cli/package.json")),
  "remotion-cli.js",
);
const args = process.argv.slice(2);
const allowed = new Set([
  "--lang",
  "--page",
  "--data",
  "--out",
  "--browser-executable",
]);
const options = {};
for (let i = 0; i < args.length; i += 2) {
  if (!allowed.has(args[i]) || !args[i + 1] || args[i + 1].startsWith("--"))
    throw Error(
      "参数：--lang zh|en|all --page 1 --data 文件.json --out 输出目录 --browser-executable 浏览器路径",
    );
  options[args[i]] = args[i + 1];
}
const lang = options["--lang"] ?? "all";
if (!["zh", "en", "all"].includes(lang))
  throw Error("lang 必须为 zh、en 或 all");
const out = path.resolve(root, options["--out"] ?? "out/social");
if (!out.startsWith(path.join(root, "out") + path.sep))
  throw Error("输出必须位于仓库 out/ 内，以免覆盖原始素材。");
const decks = options["--data"]
  ? [JSON.parse(fs.readFileSync(path.resolve(options["--data"]), "utf8"))]
  : (lang === "all" ? ["zh", "en"] : [lang]).map((l) =>
      JSON.parse(
        fs.readFileSync(path.join(root, "social", l + ".json"), "utf8"),
      ),
    );
for (const deck of decks) {
  if (
    !["zh", "en"].includes(deck.language) ||
    !Array.isArray(deck.pages) ||
    !deck.pages.length
  )
    throw Error("内容配置需要 language 和非空 pages");
  const ids = new Set();
  for (const p of deck.pages) {
    if (!/^[a-z0-9-]+$/.test(p.id) || ids.has(p.id))
      throw Error("页 ID 必须唯一且只含小写字母、数字和连字符");
    ids.add(p.id);
    if (
      ![
        "cover",
        "community",
        "idea",
        "schedule",
        "easy",
        "speed",
        "long",
      ].includes(p.layout) ||
      typeof p.light !== "boolean" ||
      !Array.isArray(p.title) ||
      !p.title.length ||
      p.title.some((t) => typeof t !== "string") ||
      !Array.isArray(p.body) ||
      p.body.some((t) => typeof t !== "string") ||
      typeof p.accent !== "string" ||
      typeof p.footer !== "string" ||
      typeof deck.label !== "string"
    )
      throw Error("无效页面配置：" + p.id);
    if (
      p.layout === "schedule" &&
      (!Array.isArray(p.rows) ||
        p.rows.some(
          (row) =>
            !Array.isArray(row) ||
            row.length !== 3 ||
            row.some((t) => typeof t !== "string"),
        ))
    )
      throw Error("课表 rows 每行必须为三个字符串");
    if (
      p.metric !== undefined &&
      (typeof p.metric !== "string" || p.metric.length > 3)
    )
      throw Error("metric 需要为最多三个字符的短数字");
    if (p.photo) {
      const photo = path.resolve(root, "public", p.photo);
      if (
        !photo.startsWith(path.join(root, "public") + path.sep) ||
        !fs.existsSync(photo)
      )
        throw Error("照片必须存在于 public/：" + p.photo);
    }
  }
  const requested = options["--page"];
  const pages = requested
    ? [Number(requested) - 1]
    : deck.pages.map((_, i) => i);
  if (
    pages.some((p) => !Number.isInteger(p) || p < 0 || p >= deck.pages.length)
  )
    throw Error("页码超出内容配置范围");
  const dest = path.join(out, deck.language);
  fs.mkdirSync(dest, { recursive: true });
  for (const page of pages) {
    const props = path.join(dest, deck.pages[page].id + ".props.json");
    fs.writeFileSync(props, JSON.stringify({ deck, page }));
    const command = [
      cli,
      "still",
      `Social-${deck.language}-page-1`,
      path.join(dest, deck.pages[page].id + ".png"),
      "--props",
      props,
      "--image-format=png",
    ];
    if (options["--browser-executable"])
      command.push("--browser-executable", options["--browser-executable"]);
    const result = spawnSync(process.execPath, command, {
      cwd: root,
      stdio: "inherit",
    });
    if (result.error) throw result.error;
    if (result.status !== 0) process.exit(result.status ?? 1);
  }
}
console.log("社媒 PNG 与可复现 props 已输出到：" + out);
