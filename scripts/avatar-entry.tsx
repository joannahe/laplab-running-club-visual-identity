import {AbsoluteFill,Composition,Img,registerRoot,staticFile} from 'remotion';
const Avatar=()=> <AbsoluteFill style={{background:'#171A1D',alignItems:'center',justifyContent:'center'}}><Img src={staticFile('logo/laplab-lime-on-dark.svg')} style={{width:720,height:448}}/></AbsoluteFill>;
registerRoot(()=> <Composition id="XhsAvatar" component={Avatar} width={1080} height={1080} fps={30} durationInFrames={1}/>);
