import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

const leftNodes = [
  [80, 116],
  [108, 72],
  [156, 50],
  [216, 60],
  [266, 96],
  [292, 146],
  [274, 198],
  [226, 230],
  [166, 232],
  [112, 204],
  [78, 162],
  [132, 134],
  [184, 96],
  [234, 136],
  [194, 178],
  [138, 184]
];

const rightNodes = [
  [286, 146],
  [316, 94],
  [366, 58],
  [426, 50],
  [482, 76],
  [522, 122],
  [536, 176],
  [506, 220],
  [450, 238],
  [390, 224],
  [340, 188],
  [372, 134],
  [428, 108],
  [484, 142],
  [458, 190],
  [396, 174]
];

const nodeLinks = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 0],
  [0, 11],
  [11, 12],
  [12, 3],
  [12, 13],
  [13, 5],
  [11, 15],
  [15, 14],
  [14, 13],
  [15, 9],
  [14, 7]
];

function NeuralInfinity() {
  const allNodes = [...leftNodes, ...rightNodes];

  return (
    <svg width="560" height="330" viewBox="0 0 610 300">
      <defs>
        <linearGradient id="loopGradient" x1="58" x2="550" y1="150" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#335CFF" />
          <stop offset=".28" stopColor="#6A00FF" />
          <stop offset=".52" stopColor="#B200FF" />
          <stop offset=".78" stopColor="#FF3DFF" />
          <stop offset="1" stopColor="#FF6CF0" />
        </linearGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".42" stopColor="#FF6CF0" />
          <stop offset="1" stopColor="#6A00FF" />
        </radialGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="M70 150C118 42 220 42 305 150C390 258 492 258 540 150C492 42 390 42 305 150C220 258 118 258 70 150Z"
        fill="none"
        stroke="url(#loopGradient)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="10"
        filter="url(#softGlow)"
      />

      {nodeLinks.map(([from, to], index) => {
        const [x1, y1] = leftNodes[from];
        const [x2, y2] = leftNodes[to];
        return (
          <line
            key={`left-${index}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#7C8CFF"
            strokeOpacity=".46"
            strokeWidth="1.6"
          />
        );
      })}
      {nodeLinks.map(([from, to], index) => {
        const [x1, y1] = rightNodes[from];
        const [x2, y2] = rightNodes[to];
        return (
          <line
            key={`right-${index}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#FF6CF0"
            strokeOpacity=".46"
            strokeWidth="1.6"
          />
        );
      })}
      {[
        [184, 96, 372, 134],
        [234, 136, 340, 188],
        [194, 178, 396, 174],
        [266, 96, 316, 94],
        [274, 198, 390, 224]
      ].map(([x1, y1, x2, y2], index) => (
        <line
          key={`bridge-${index}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#C084FC"
          strokeOpacity=".36"
          strokeWidth="1.5"
        />
      ))}

      {allNodes.map(([cx, cy], index) => (
        <circle
          key={`${cx}-${cy}-${index}`}
          cx={cx}
          cy={cy}
          r={index === 5 || index === 21 ? 7 : 4.8}
          fill={index < leftNodes.length ? "#8EA2FF" : "#FF6CF0"}
          opacity={index % 4 === 0 ? ".98" : ".78"}
          filter="url(#softGlow)"
        />
      ))}
      <circle cx="305" cy="150" r="12" fill="#FBBF24" filter="url(#softGlow)" />
      <circle cx="305" cy="150" r="24" fill="none" stroke="#FBBF24" strokeOpacity=".22" strokeWidth="2" />
    </svg>
  );
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 20% 48%, rgba(106,0,255,.42), transparent 33%), radial-gradient(circle at 42% 44%, rgba(255,61,255,.24), transparent 28%), radial-gradient(circle at 80% 18%, rgba(255,108,240,.28), transparent 34%), linear-gradient(135deg,#030109 0%,#0A0617 44%,#1D073F 72%,#05020b 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 46,
            border: "1px solid rgba(255,108,240,.22)",
            borderRadius: 38,
            boxShadow: "0 0 86px rgba(168,85,247,.2), inset 0 0 72px rgba(255,255,255,.035)"
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 72,
            bottom: 70,
            width: 210,
            height: 3,
            background: "linear-gradient(90deg,#FBBF24,rgba(251,191,36,0))",
            borderRadius: 999
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 78,
            top: 70,
            width: 140,
            height: 140,
            borderRadius: 999,
            background: "radial-gradient(circle, rgba(251,191,36,.18), transparent 66%)"
          }}
        />

        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "86px 82px",
            gap: 50
          }}
        >
          <div
            style={{
              width: 530,
              height: 390,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 34,
              background:
                "radial-gradient(circle at center, rgba(255,61,255,.16), transparent 58%), linear-gradient(135deg,rgba(255,255,255,.055),rgba(255,255,255,.01))",
              border: "1px solid rgba(192,132,252,.18)",
              boxShadow: "0 30px 120px rgba(106,0,255,.28)"
            }}
          >
            <NeuralInfinity />
          </div>

          <div style={{ display: "flex", flexDirection: "column", width: 520 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                color: "#FBBF24",
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: 3,
                textTransform: "uppercase"
              }}
            >
              <span>Neural Intelligence</span>
            </div>
            <div
              style={{
                marginTop: 26,
                display: "flex",
                alignItems: "baseline",
                gap: 16,
                fontSize: 88,
                lineHeight: 0.94,
                fontWeight: 900,
                letterSpacing: -3
              }}
            >
              <span>OpenNova</span>
              <span
                style={{
                  background: "linear-gradient(90deg,#A855F7,#FF3DFF,#FBBF24)",
                  backgroundClip: "text",
                  color: "transparent"
                }}
              >
                IA
              </span>
            </div>
            <div
              style={{
                marginTop: 30,
                fontSize: 38,
                lineHeight: 1.12,
                fontWeight: 850,
                color: "#ffffff",
                letterSpacing: -1
              }}
            >
              Agentes de IA para automatizar empresas 24/7
            </div>
            <div
              style={{
                marginTop: 28,
                width: 500,
                fontSize: 25,
                lineHeight: 1.35,
                fontWeight: 600,
                color: "rgba(255,255,255,.74)"
              }}
            >
              Automatización de ventas, soporte y operaciones mediante inteligencia artificial.
            </div>
            <div
              style={{
                marginTop: 34,
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "rgba(255,255,255,.68)",
                fontSize: 19,
                fontWeight: 700
              }}
            >
              <span style={{ color: "#FBBF24" }}>24/7</span>
              <span>IA empresarial</span>
              <span style={{ color: "rgba(255,255,255,.28)" }}>•</span>
              <span>Implementación premium</span>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
