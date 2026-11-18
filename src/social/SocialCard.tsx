import React, { useLayoutEffect, useRef } from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  delayRender,
  continueRender,
  cancelRender,
} from "remotion";
import { loadFont } from "@remotion/fonts";
import { BRAND } from "../brand";
import "../fonts";
loadFont({
  family: "Barlow Display",
  url: staticFile("fonts/BarlowCondensed-ExtraBoldItalic.ttf"),
  weight: "800",
  style: "italic",
});
export type Card = {
  id: string;
  layout:
    | "cover"
    | "community"
    | "idea"
    | "schedule"
    | "easy"
    | "speed"
    | "long";
  light: boolean;
  title: string[];
  body: string[];
  accent: string;
  footer: string;
  rows?: string[][];
  photo?: string;
  metric?: string;
  ribbon?: string;
  typography?: {titleSize?:number;bodySize?:number};
};
export type Deck = { language: "zh" | "en"; label: string; pages: Card[] };
// 固定画布，文字是独立 DOM；超出文本区域就停止导出，不静默裁切。
const Copy: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [handle] = React.useState(() => delayRender("检查社媒文字与字体"));
  useLayoutEffect(() => {
    let active = true;
    document.fonts.ready.then(() => {
      if (!active) return;
      const el = ref.current;
      if (
        el &&
        (el.scrollHeight > el.clientHeight + 2 ||
          el.scrollWidth > el.clientWidth + 2)
      ) {
        cancelRender(
          new Error(
            "社媒文本溢出：" +
              el.textContent?.slice(0, 80) +
              "；请缩短文案或调整版式。",
          ),
        );
        return;
      }
      continueRender(handle);
    });
    return () => {
      active = false;
    };
  }, [handle]);
  return (
    <div ref={ref} style={{ overflow: "hidden", flexShrink: 0, whiteSpace: "pre-line", ...style }}>
      {children}
    </div>
  );
};
// 社媒优先使用绿色闪电；浅底黑字、深底白字，始终作为同一组合显示。
const Lockup: React.FC<{width:number;dark?:boolean}> = ({width,dark=false}) =>
 <Img src={staticFile(`logo/laplab-lime-on-${dark?'light':'dark'}.svg`)} style={{width,height:width*.622,objectFit:'contain'}}/>;
const Icon:React.FC<{kind:'calendar'|'pin';color:string}>=({kind,color})=><svg width="54" height="60" viewBox="0 0 48 54" fill="none" stroke={color} strokeWidth="3.5">{kind==='calendar'?<><rect x="5" y="10" width="38" height="37" rx="4"/><path d="M5 22h38 M15 4v13 M33 4v13 M13 30h5 M26 30h5 M13 39h5 M26 39h5"/></>:<><path d="M24 49S7 31 7 20a17 17 0 0 1 34 0c0 11-17 29-17 29Z"/><circle cx="24" cy="20" r="6"/></>}</svg>;
export const SocialCard:React.FC<{deck:Deck;page:number}>=({deck,page})=>{
 const p=deck.pages[page];if(!p)throw new Error('社媒页码不存在');
 const en=deck.language==='en';const fg=p.light?BRAND.charcoal:BRAND.chalk;
 const head:React.CSSProperties={fontFamily:en?'Barlow Display':`"PingFang SC", ${BRAND.chineseFont}`,fontSize:p.typography?.titleSize??(en?116:112),fontStyle:'italic',fontWeight:en?800:900,lineHeight:1.08,letterSpacing:-2};
 const bodySize=p.typography?.bodySize??56;
 const para:React.CSSProperties={fontSize:bodySize,fontWeight:en?400:600,lineHeight:1.3};
 const block=(top:number,height:number,extra:React.CSSProperties={}):React.CSSProperties=>({position:'absolute',left:64,right:64,top,height,...extra});
 const headline=(top=208)=> <Copy style={{...block(top,p.title.length>1?260:155),...head}}>{p.title.map((t,i)=><div key={i}>{t}</div>)}</Copy>;
 const paragraphs=(top:number,height:number,extra:React.CSSProperties={})=><Copy style={{...block(top,height),...para,...extra}}>{p.body.map((t,i)=><div key={i} style={{marginBottom:28}}>{t}</div>)}</Copy>;
 const stripe=(top:number,width: number|string='100%')=><div style={{position:'absolute',left:64,right:64,top,height:16}}><div style={{height:'100%',width,background:BRAND.lime,transform:'skewX(-18deg)'}}/></div>;
 const divider=(top:number)=><div style={{position:'absolute',left:64,right:64,top,height:2,background:BRAND.grey}}/>;
 return <AbsoluteFill style={{background:p.light?BRAND.chalk:BRAND.charcoal,color:fg,fontFamily:en?BRAND.englishFont:BRAND.chineseFont}}>
  {p.layout==='easy'&&p.photo?<Img src={staticFile(p.photo)} style={{position:'absolute',right:-35,bottom:100,width:580,height:780,objectFit:'cover',objectPosition:'65% 70%',filter:'grayscale(1) brightness(.62)',maskImage:'linear-gradient(to right, transparent, black 45%), linear-gradient(to bottom, transparent, black 30%)',maskComposite:'intersect'}}/>:null}
  <div style={{position:'absolute',left:64,right:64,top:50,display:'flex',alignItems:'center',gap:30}}><Lockup width={200} dark={p.light}/><div style={{height:2,flex:1,background:fg,opacity:.7}}/><div style={{fontSize:30,fontWeight:en?400:600,fontStyle:'italic'}}>{deck.label}</div></div>
  {p.layout==='cover'?<>
   <div style={{position:'absolute',left:90,top:240}}><Lockup width={900} dark={p.light}/></div>
   {headline(895)}<Copy style={{...block(1170,130),...para}}>{p.accent}</Copy>
  </>:p.layout==='community'?<>
   {headline()} {stripe(p.title.length>1?478:370)}
   {paragraphs(p.title.length>1?530:435,p.title.length>1?400:495)}
   <div style={{...block(978,125),background:BRAND.lime,transform:'skewX(-15deg)'}}/>
   <Copy style={{...block(995,95,{left:90,right:90}),fontSize:en?46:44,fontStyle:'italic',fontWeight:en?400:700,color:BRAND.charcoal}}>{p.ribbon??(en?'Smart training · City exploration · Easy company':'科学训练 · 城市探索 · 轻松社交')}</Copy>
   <Copy style={{...block(1150,165),...head,fontSize:en?80:76}}>{p.accent}</Copy>
  </>:p.layout==='idea'?<>
   {headline()} {paragraphs(490,350,{fontSize:en?46:48})}
   <div style={{position:'absolute',left:310,top:850}}><Lockup width={460}/></div>
   {divider(1150)}<Copy style={{...block(1180,130),...para}}>{p.accent}</Copy>
  </>:p.layout==='schedule'?<>
   {headline()} {stripe(p.title.length>1?470:365)}
   <div style={{...block(p.title.length>1?515:420,680)}}>{p.rows?.map((row,i)=><div key={i} style={{display:'grid',gridTemplateColumns:'155px 165px 1fr',gap:22,padding:'25px 0',borderBottom:'2px solid '+BRAND.grey}}>{row.map((cell,j)=><Copy key={j} style={{fontSize:en?40:38,fontWeight:en?400:600,lineHeight:1.2,height:110,padding:j===0?'10px 8px':0,background:j===0?BRAND.lime:undefined,whiteSpace:'pre-line'}}>{cell}</Copy>)}</div>)}</div>
   <Copy style={{...block(1210,115),fontSize:en?44:42,lineHeight:1.25}}>{p.accent}</Copy>
  </>:p.layout==='easy'?<>
   {headline()} {stripe(475)}
   <Copy style={{...block(520,250,{right:240}),...head,fontSize:en?108:96,whiteSpace:'pre-line'}}>{p.body[0]}</Copy>
   <Copy style={{...block(770,130,{right:190}),...head,fontSize:en?98:88}}>{p.body[1]}</Copy>
   <div style={{position:'absolute',left:64,top:925}}><Icon kind="pin" color={BRAND.lime}/></div>
   <Copy style={{...block(925,150,{left:135,right:150}),fontSize:en?54:50,lineHeight:1.2,fontWeight:en?400:600}}>{p.body[2]}</Copy>
   <Copy style={{...block(1090,105,{right:100}),fontSize:en?44:40,lineHeight:1.2}}>{p.accent}</Copy>
   <div style={{position:'absolute',left:55,top:1170,fontFamily:'Barlow Display',fontStyle:'italic',fontSize:220,lineHeight:.7,color:BRAND.lime}}>{p.metric??'10'}</div>
  </>:p.layout==='speed'?<>
   {headline()}<div style={{position:'absolute',left:40,top:490,fontFamily:'Barlow Display',fontStyle:'italic',fontSize:460,lineHeight:1,color:BRAND.lime}}>{p.metric??'03'}</div>
   <div style={{position:'absolute',left:505,top:520,height:440,width:2,background:BRAND.grey}}/>
   {[0,1].map((i)=><React.Fragment key={i}><div style={{position:'absolute',left:540,top:530+i*230}}><Icon kind={i===0?'calendar':'pin'} color={fg}/></div><Copy style={{position:'absolute',left:610,right:58,top:530+i*230,height:205,fontSize:en?58:56,fontWeight:en?400:700,lineHeight:1.18,whiteSpace:'pre-line'}}>{p.body[i]}</Copy></React.Fragment>)}
   {divider(1030)}<Copy style={{...block(1070,240),fontSize:48,lineHeight:1.25,fontWeight:en?400:600}}>{p.body.slice(2).map((t,i)=><div key={i} style={{marginBottom:24}}>{t}</div>)}</Copy>
  </>:<>
   {headline()} {stripe(478,250)}{paragraphs(530,350,{fontSize:en?50:52})}
   <svg width="1080" height="300" viewBox="0 0 1080 410" style={{position:'absolute',left:0,top:910}} aria-label="抽象跑道线，不是真实路线"><path d="M-20 260 C130 130 210 160 300 210 S440 280 490 140 S710 -20 790 55 S700 205 850 215 S930 365 1110 350" fill="none" stroke={BRAND.lime} strokeWidth="16"/></svg>
   <Copy style={{...block(1240,85),...para,fontStyle:'italic'}}>{p.accent}</Copy>
  </>}
  <div style={{position:'absolute',left:64,right:64,bottom:35,borderTop:'2px solid '+BRAND.grey,paddingTop:18,display:'flex',alignItems:'center',gap:30,fontSize:25,fontWeight:en?400:600,fontStyle:'italic'}}><span>{p.footer}</span><div style={{height:2,background:BRAND.grey,flex:1}}/><span>{String(page+1).padStart(2,'0')} / {String(deck.pages.length).padStart(2,'0')}</span></div>
 </AbsoluteFill>;
};
