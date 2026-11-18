// 用原图亮度作透明蒙版；不描摹、不重新生成标识形状。
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const uri=n=>'data:image/png;base64,'+fs.readFileSync(path.join(root,'public',n)).toString('base64');
const dir=path.join(root,'public/logo');fs.mkdirSync(dir,{recursive:true});
for(const [name,mark,word] of [['lime-on-dark','#D7FF3F','#F3F4ED'],['lime-on-light','#D7FF3F','#171A1D'],['mono-white','#F3F4ED','#F3F4ED'],['mono-black','#171A1D','#171A1D']]){
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="622" viewBox="0 0 1000 622"><title>LapLab combined logo / ${name}</title><defs><filter id="normalize" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="linear" slope="1.18"/><feFuncG type="linear" slope="1.18"/><feFuncB type="linear" slope="1.18"/></feComponentTransfer></filter><mask id="mark" maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="622" style="mask-type:luminance"><svg x="0" y="0" width="370" height="622" viewBox="378 211 498 833"><image width="1254" height="1254" href="${uri('mark.png')}" filter="url(#normalize)"/></svg></mask><mask id="word" maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="622" style="mask-type:luminance"><svg x="420" y="40" width="580" height="542" viewBox="24 127 370 344"><image width="400" height="600" href="${uri('word.png')}" filter="url(#normalize)"/></svg></mask></defs><rect width="1000" height="622" fill="${mark}" mask="url(#mark)"/><rect width="1000" height="622" fill="${word}" mask="url(#word)"/></svg>`;
 fs.writeFileSync(path.join(dir,`laplab-${name}.svg`),svg);
}
console.log('4 个自包含透明底组合 SVG 已生成（内嵌原始位图，不是纯路径矢量）。');
