import {Composition} from 'remotion';
import {PortraitFilm,PortraitLogo,PortraitShot} from './PortraitFilm';
export const RemotionRoot=()=> <>
 <Composition id="LapLab-Xiaohongshu-Flash" component={PortraitFilm} defaultProps={{musicStartSeconds:0}} durationInFrames={540} fps={30} width={1080} height={1920}/>
 <Composition id="Portrait-Opening" component={PortraitLogo} durationInFrames={36} fps={30} width={1080} height={1920}/>
 <Composition id="Portrait-Ending" component={PortraitLogo} durationInFrames={60} fps={30} width={1080} height={1920}/>
 <Composition id="Photo-Overlay" component={PortraitShot} durationInFrames={42} fps={30} width={1080} height={1920} defaultProps={{file:'1065.jpg',text:'严肃训练。',english:'Serious training.',y:470,size:112,fit:'contain'}}/>
</>;
