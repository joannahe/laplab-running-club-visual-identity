import {Audio} from '@remotion/media';
import {BRAND} from './brand';
import './fonts';
import React from 'react';
import {AbsoluteFill,Img,Series,staticFile,useCurrentFrame,useVideoConfig,interpolate,Easing} from 'remotion';
import {LogoScene} from './LogoScene';
export const PortraitLogo=()=> <AbsoluteFill style={{background:BRAND.charcoal,overflow:'hidden'}}><div style={{position:'absolute',width:1920,height:1080,left:-420,top:420,scale:.92}}><LogoScene/></div></AbsoluteFill>;
type ShotProps={file:string;text?:string;english?:string;y?:number;size?:number;fit?:'contain'|'cover'};
export const PortraitShot:React.FC<ShotProps>=({file,text,english,y=470,size=112,fit='contain'})=>{
 const f=useCurrentFrame();const {fps}=useVideoConfig();
 return <AbsoluteFill style={{background:BRAND.charcoal,overflow:'hidden'}}>
 <Img src={staticFile(file)} style={{position:'absolute',width:'100%',height:'100%',objectFit:'cover',filter:'blur(45px) brightness(.32)',scale:1.12}}/>
 <Img src={staticFile(file)} style={{position:'absolute',width:'100%',height:'100%',objectFit:fit,scale:interpolate(f,[0,1.4*fps],[1,1.04],{extrapolateRight:'clamp'})}}/>
 {text?<div style={{position:'absolute',left:48,right:48,top:y,textAlign:'center',color:BRAND.chalk,fontFamily:BRAND.chineseFont,fontSize:size,fontWeight:400,letterSpacing:5,lineHeight:1.15,textShadow:'0 2px 18px rgba(0,0,0,.45)',opacity:interpolate(f,[0,3],[0,1],{extrapolateRight:'clamp'}),scale:interpolate(f,[0,7],[1.08,1],{extrapolateRight:'clamp',easing:Easing.bezier(.16,1,.3,1)})}}><div>{text}</div>{english?<div style={{marginTop:24,color:BRAND.lime,fontFamily:BRAND.englishFont,fontSize:56,fontWeight:400,letterSpacing:1,lineHeight:1.15}}>{english}</div>:null}</div>:null}
 </AbsoluteFill>;
};
export const PortraitFilm:React.FC<{musicStartSeconds?:number}>=({musicStartSeconds=0})=>{const {fps}=useVideoConfig();return <AbsoluteFill style={{background:BRAND.charcoal}}><Audio src={staticFile('music/Serious Training, Easy Company-Psychedelic Downtempo-V1.wav')} trimBefore={musicStartSeconds*fps} durationInFrames={18*fps} premountFor={fps} volume={(f)=>interpolate(f,[0,.3*fps,16.8*fps,18*fps],[0,.85,.85,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}/><Series>
 <Series.Sequence name="Logo opening" durationInFrames={1.2*fps} premountFor={fps}><PortraitLogo/></Series.Sequence>
 <Series.Sequence name="Track 01" durationInFrames={.6*fps} premountFor={fps}><PortraitShot file="788.jpg"/></Series.Sequence>
 <Series.Sequence name="Track 02" durationInFrames={.6*fps} premountFor={fps}><PortraitShot file="792.jpg"/></Series.Sequence>
 <Series.Sequence name="Track 03" durationInFrames={.6*fps} premountFor={fps}><PortraitShot file="793.jpg"/></Series.Sequence>
 <Series.Sequence name="严肃训练 on photo" durationInFrames={1.4*fps} premountFor={fps}><PortraitShot file="1065.jpg" text="严肃训练。" english="Serious training." y={470}/></Series.Sequence>
 <Series.Sequence name="Step 01" durationInFrames={.4*fps} premountFor={fps}><PortraitShot file="1057.jpg" fit="cover"/></Series.Sequence>
 <Series.Sequence name="Step 02" durationInFrames={.4*fps} premountFor={fps}><PortraitShot file="1069.jpg" fit="cover"/></Series.Sequence>
 <Series.Sequence name="Step 03" durationInFrames={.4*fps} premountFor={fps}><PortraitShot file="1071.jpg" fit="cover"/></Series.Sequence>
 <Series.Sequence name="Stride" durationInFrames={.6*fps} premountFor={fps}><PortraitShot file="1058.jpg"/></Series.Sequence>
 <Series.Sequence name="Track 04" durationInFrames={.6*fps} premountFor={fps}><PortraitShot file="788.jpg"/></Series.Sequence>
 <Series.Sequence name="Track 05" durationInFrames={.6*fps} premountFor={fps}><PortraitShot file="793.jpg"/></Series.Sequence>
 <Series.Sequence name="Track 06" durationInFrames={.6*fps} premountFor={fps}><PortraitShot file="792.jpg"/></Series.Sequence>
 <Series.Sequence name="轻松相处 on photo" durationInFrames={1.4*fps} premountFor={fps}><PortraitShot file="1070.jpg" text="轻松相处。" english="Easy company." y={1170}/></Series.Sequence>
 <Series.Sequence name="Warm up" durationInFrames={.6*fps} premountFor={fps}><PortraitShot file="1071.jpg"/></Series.Sequence>
 <Series.Sequence name="Together" durationInFrames={.6*fps} premountFor={fps}><PortraitShot file="1065.jpg"/></Series.Sequence>
 <Series.Sequence name="Night group" durationInFrames={.8*fps} premountFor={fps}><PortraitShot file="1029.jpg"/></Series.Sequence>
 <Series.Sequence name="Track group" durationInFrames={.8*fps} premountFor={fps}><PortraitShot file="43.jpg"/></Series.Sequence>
 <Series.Sequence name="Footwork" durationInFrames={.4*fps} premountFor={fps}><PortraitShot file="1069.jpg" fit="cover"/></Series.Sequence>
 <Series.Sequence name="Run" durationInFrames={.6*fps} premountFor={fps}><PortraitShot file="1058.jpg"/></Series.Sequence>
 <Series.Sequence name="各有节奏 on photo" durationInFrames={1.4*fps} premountFor={fps}><PortraitShot file="1065.jpg" text="各有节奏。" english="Your rhythm." y={470}/></Series.Sequence>
 <Series.Sequence name="一起刷圈 on photo" durationInFrames={1.4*fps} premountFor={fps}><PortraitShot file="1029.jpg" text="一起刷圈。" english="Our laps." y={1120}/></Series.Sequence>
 <Series.Sequence name="Logo ending" durationInFrames={2*fps} premountFor={fps}><PortraitLogo/></Series.Sequence>
 </Series></AbsoluteFill>;};
