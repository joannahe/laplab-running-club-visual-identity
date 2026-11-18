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
    <div ref={ref} style={{ overflow: "hidden", ...style }}>
      {children}
    </div>
  );
};
// 仅裁去原图外侧黑色留白；图形与字标保持原始比例，组合一起缩放。
const LogoAsset: React.FC<{file:string; box:[number,number,number,number]; source:[number,number]; width:number; dark:boolean}> = ({file,box,source,width,dark}) => {
 const scale=width/box[2];
 return <div style={{position:'relative',width,height:box[3]*scale,overflow:'hidden'}}><Img src={staticFile(file)} style={{position:'absolute',width:source[0]*scale,height:source[1]*scale,left:-box[0]*scale,top:-box[1]*scale,mixBlendMode:dark?'multiply':'screen',filter:dark?'invert(1)':'none'}}/></div>;
};
const Lockup: React.FC<{width:number;dark?:boolean}> = ({width,dark=false}) => <div style={{width,display:'flex',alignItems:'center',gap:width*.05}}>
 <LogoAsset file="mark.png" box={[380,213,494,829]} source={[1254,1254]} width={width*.37} dark={dark}/>
 <LogoAsset file="word.png" box={[26,129,366,340]} source={[400,600]} width={width*.58} dark={dark}/>
</div>;
export const SocialCard: React.FC<{ deck: Deck; page: number }> = ({
  deck,
  page,
}) => {
  const p = deck.pages[page];
  if (!p) throw new Error("社媒页码不存在");
  const en = deck.language === "en";
  const fg = p.light ? BRAND.charcoal : BRAND.chalk;
  const headline: React.CSSProperties = {
    fontFamily: en ? "Barlow Display" : BRAND.chineseFont,
    fontWeight: en ? 800 : 700,
    fontStyle: en ? "italic" : "normal",
    fontSize: en ? 108 : 88,
    lineHeight: 1.05,
    letterSpacing: -2,
  };
  const paragraph: React.CSSProperties = {
    fontSize: en ? 43 : 35,
    lineHeight: 1.35,
  };
  const title = (
    <Copy style={{ ...headline, height: 250 }}>
      {p.title.map((t, i) => (
        <div key={i}>{t}</div>
      ))}
    </Copy>
  );
  const body = (
    <Copy style={{ ...paragraph, maxHeight: 450 }}>
      {p.body.map((t, i) => (
        <div key={i} style={{ marginBottom: 24 }}>
          {t}
        </div>
      ))}
    </Copy>
  );
  return (
    <AbsoluteFill
      style={{
        background: p.light ? BRAND.chalk : BRAND.charcoal,
        color: fg,
        fontFamily: en ? BRAND.englishFont : BRAND.chineseFont,
        padding: 64,
      }}
    >
      <div
        style={{
          height: 138,
          display: "flex",
          alignItems: "flex-start",
          gap: 24,
        }}
      >
        <Lockup width={174} dark={p.light} />
        <div
          style={{
            flex: 1,
            height: 2,
            background: fg,
            opacity: 0.4,
            marginTop: 45,
          }}
        />
        <div style={{ fontSize: 22, marginTop: 30 }}>{deck.label}</div>
      </div>
      {p.layout === "cover" ? (
        <>
          <div style={{ alignSelf: "center", marginTop: 35, marginBottom: 60 }}>
            <Lockup width={830} />
          </div>
          {title}
          <Copy style={{ fontSize: en ? 42 : 42, height: 130, marginTop: 22 }}>
            {p.accent}
          </Copy>
        </>
      ) : (
        <>
          {title}
          <div
            style={{
              height: 9,
              background: BRAND.lime,
              width: 240,
              marginTop: 12,
              marginBottom: 40,
            }}
          />
          {p.layout === "schedule" ? (
            <div>
              {p.rows?.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 160px 1fr",
                    gap: 20,
                    borderBottom: "1px solid " + BRAND.grey,
                    padding: "27px 0",
                  }}
                >
                  {row.map((cell, j) => (
                    <Copy
                      key={j}
                      style={{
                        fontSize: en ? 34 : 30,
                        lineHeight: 1.25,
                        whiteSpace: "pre-line",
                        height: 91,
                        background: j === 0 ? BRAND.lime : undefined,
                        padding: j === 0 ? 10 : 0,
                      }}
                    >
                      {cell}
                    </Copy>
                  ))}
                </div>
              ))}
              <Copy style={{ ...paragraph, height: 125, marginTop: 38 }}>
                {p.accent}
              </Copy>
            </div>
          ) : p.layout === "idea" ? (
            <>
              {body}
              <div style={{ alignSelf: "center", marginTop: 35 }}>
                <Lockup width={560} />
              </div>
              <Copy
                style={{ fontSize: en ? 43 : 38, height: 120, marginTop: 40 }}
              >
                {p.accent}
              </Copy>
            </>
          ) : p.layout === "easy" ? (
            <>
              <div style={{ display: "flex", gap: 36 }}>
                <div style={{ width: 520 }}>
                  {body}
                  <Copy
                    style={{
                      ...headline,
                      fontSize: 170,
                      height: 235,
                      color: BRAND.lime,
                      marginTop: 40,
                    }}
                  >
                    {p.metric ?? "10"}
                  </Copy>
                </div>
                {p.photo ? (
                  <Img
                    src={staticFile(p.photo)}
                    style={{
                      width: 360,
                      height: 570,
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                  />
                ) : null}
              </div>
              <Copy style={{ ...paragraph, height: 110, marginTop: 30 }}>
                {p.accent}
              </Copy>
            </>
          ) : p.layout === "speed" ? (
            <>
              <div
                style={{
                  display: "flex",
                  gap: 55,
                  alignItems: "center",
                  marginBottom: 35,
                }}
              >
                <div
                  style={{
                    fontFamily: "Barlow Display",
                    fontSize: 260,
                    fontStyle: "italic",
                    color: BRAND.lime,
                    lineHeight: 1,
                  }}
                >
                  {p.metric ?? "03"}
                </div>
                <Copy style={{ ...paragraph, height: 220, flex: 1 }}>
                  {p.body.slice(0, 2).map((t, i) => (
                    <div key={i} style={{ marginBottom: 24 }}>
                      {t}
                    </div>
                  ))}
                </Copy>
              </div>
              <div
                style={{ height: 2, background: BRAND.grey, marginBottom: 32 }}
              />
              <Copy style={{ ...paragraph, height: 230 }}>
                {p.body.slice(2).map((t, i) => (
                  <div key={i} style={{ marginBottom: 24 }}>
                    {t}
                  </div>
                ))}
              </Copy>
            </>
          ) : p.layout === "long" ? (
            <>
              {body}
              <svg
                width="940"
                height="300"
                viewBox="0 0 940 300"
                style={{ marginTop: 15 }}
                aria-label="抽象跑道图形，并非真实路线"
              >
                <path
                  d="M0 220 C130 110 190 110 260 160 S400 220 430 120 S580 0 660 60 S600 170 740 185 S800 290 940 245"
                  fill="none"
                  stroke={BRAND.lime}
                  strokeWidth="12"
                />
              </svg>
              <Copy style={{ ...paragraph, height: 100, marginTop: 24 }}>
                {p.accent}
              </Copy>
            </>
          ) : (
            <>
              {body}
              <div
                style={{
                  background: BRAND.lime,
                  color: BRAND.charcoal,
                  padding: 22,
                  marginTop: 24,
                }}
              >
                <Copy style={{ ...paragraph, height: 110 }}>{p.accent}</Copy>
              </div>
            </>
          )}
        </>
      )}
      <div
        style={{
          position: "absolute",
          bottom: 48,
          left: 64,
          right: 64,
          borderTop: "1px solid " + BRAND.grey,
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
        }}
      >
        <span>{p.footer}</span>
        <span>
          {String(page + 1).padStart(2, "0")} /{" "}
          {String(deck.pages.length).padStart(2, "0")}
        </span>
      </div>
    </AbsoluteFill>
  );
};
