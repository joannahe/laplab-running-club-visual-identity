import {AbsoluteFill, Img, staticFile} from 'remotion';
export const LOGO_VARIANTS=['lime-on-dark','lime-on-light','mono-white','mono-black'] as const;
export const LogoAsset:React.FC<{variant:string}>=({variant})=>{
 if(!(LOGO_VARIANTS as readonly string[]).includes(variant))throw new Error('未知 Logo 变体');
 return <AbsoluteFill><Img src={staticFile(`logo/laplab-${variant}.svg`)} style={{width:1000,height:622}}/></AbsoluteFill>;
};
