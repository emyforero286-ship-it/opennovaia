import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

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
            "radial-gradient(circle at 22% 20%, rgba(106,0,255,.48), transparent 34%), radial-gradient(circle at 70% 28%, rgba(255,61,255,.34), transparent 32%), linear-gradient(135deg,#0A0617,#170431 48%,#07020f)",
          color: "white",
          fontFamily: "Arial, sans-serif",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 60,
            border: "1px solid rgba(255,108,240,.24)",
            borderRadius: 36
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 42 }}>
          <svg width="300" height="200" viewBox="0 0 240 160">
            <defs>
              <linearGradient id="og" x1="20" x2="220" y1="80" y2="80">
                <stop offset="0" stopColor="#6A00FF" />
                <stop offset=".52" stopColor="#B200FF" />
                <stop offset=".78" stopColor="#FF3DFF" />
                <stop offset="1" stopColor="#FF6CF0" />
              </linearGradient>
            </defs>
            <path
              d="M28 80C52 34 88 34 120 80C152 126 188 126 212 80C188 34 152 34 120 80C88 126 52 126 28 80Z"
              fill="none"
              stroke="url(#og)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="10"
            />
            <path
              d="M46 59L72 78L95 52L120 80L146 54L171 79L198 61M47 101L72 78L95 107L120 80L146 108L171 79L198 100"
              fill="none"
              stroke="#C084FC"
              strokeOpacity=".7"
              strokeWidth="2"
            />
            {[40, 72, 95, 120, 146, 171, 200].map((cx, index) => (
              <circle key={cx} cx={cx} cy={[80, 78, 52, 80, 54, 79, 80][index]} r={cx === 120 ? 8 : 5} fill={cx === 120 ? "#FBBF24" : "#fff"} />
            ))}
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: 18, fontSize: 82, fontWeight: 800, letterSpacing: -2 }}>
              OpenNova <span style={{ color: "#FF3DFF" }}>IA</span>
            </div>
            <div style={{ marginTop: 18, fontSize: 30, color: "#FF6CF0", letterSpacing: 7 }}>
              NEURAL AI AGENTS
            </div>
            <div style={{ marginTop: 28, width: 560, fontSize: 28, lineHeight: 1.32, color: "rgba(255,255,255,.78)" }}>
              Automatiza ventas, soporte y operaciones con agentes inteligentes conectados a tu negocio.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
