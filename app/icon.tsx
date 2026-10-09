import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08080a",
          borderRadius: "8px",
          border: "1.5px solid #b8965a",
          color: "#b8965a",
          fontFamily: "serif",
          fontWeight: 700,
          fontSize: 20,
        }}
      >
        L
      </div>
    ),
    {
      ...size,
    }
  );
}
