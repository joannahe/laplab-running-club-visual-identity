import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const data=JSON.parse(fs.readFileSync(path.join(root,'docs/assets.manifest.json'),'utf8'));
const bad=data.assets.filter(a=>!fs.existsSync(path.join(root,a.path))||fs.statSync(path.join(root,a.path)).size!==a.bytes);
if(bad.length){console.error('素材缺失或大小变化，请检查：\n'+bad.map(a=>a.path).join('\n'));process.exit(1);}
console.log(`已检查 ${data.assets.length} 个素材文件。`);
