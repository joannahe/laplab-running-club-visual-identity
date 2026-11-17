import React from 'react';
import {AbsoluteFill,Img,staticFile,useCurrentFrame,useVideoConfig,interpolate,Easing} from 'remotion';
export const LogoScene: React.FC=()=>{
 const frame=useCurrentFrame();const {fps}=useVideoConfig();
 return <AbsoluteFill style={{background:'#171A1D',alignItems:'center',justifyContent:'center'}}>
 <div style={{position:'absolute',inset:0,background:'#171A1D',opacity:interpolate(frame,[0,.35*fps],[0,1],{extrapolateRight:'clamp'}),scale:interpolate(frame,[0,.7*fps],[.92,1],{extrapolateRight:'clamp',easing:Easing.bezier(.16,1,.3,1)})}}>
 <Img src={staticFile('mark.png')} style={{position:'absolute',width:1000,height:1000,left:220,top:40,mixBlendMode:'screen'}}/>
 <Img src={staticFile('word.png')} style={{position:'absolute',width:400,height:600,left:1000,top:240,mixBlendMode:'screen'}}/>
 </div>
 </AbsoluteFill>;
};
