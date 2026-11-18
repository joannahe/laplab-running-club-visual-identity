import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import {spawnSync} from 'node:child_process';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const cli=path.join(path.dirname(createRequire(import.meta.url).resolve('@remotion/cli/package.json')),'remotion-cli.js');
const args=process.argv.slice(2);
if(args.length && (args.length!==2 || args[0]!=='--browser-executable'))throw Error('仅支持 --browser-executable 浏览器路径');
const out=path.join(root,'out/logos');fs.mkdirSync(out,{recursive:true});
for(const variant of ['lime-on-dark','lime-on-light','mono-white','mono-black']){
 const props=path.join(out,variant+'.json');fs.writeFileSync(props,JSON.stringify({variant}));
 const result=spawnSync(process.execPath,[cli,'still','Logo-Asset',path.join(out,'laplab-'+variant+'.png'),'--props',props,'--image-format=png',...args],{cwd:root,stdio:'inherit'});
 if(result.error)throw result.error;if(result.status!==0)process.exit(result.status??1);
}
