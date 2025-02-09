import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          bbRollerMono: { value: `var(--font-bb-roller-mono, monospace)` },
          optimo: { value: `var(--font-optimo, Helvetica, Arial, sans-serif)` },
        },
      },
      semanticTokens: {
        colors: {
          tsBlack: {
            DEFAULT: { value: "#000000" },
            tint1: { value: "#393939" },
            tint2: { value: "#CCCDCD" },
            tint3: { value: "#F1F4F8" },
          },
          tsNavy: {
            DEFAULT: { value: "#012676" },
            tint1: { value: "#7492D5" },
            tint2: { value: "#AAC2F8" },
            tint3: { value: "#DCE5F9" },
          },
          tsBlue: {
            DEFAULT: { value: "#0568FA" },
            tint1: { value: "#9DC5FF" },
            tint2: { value: "#CAE0FF" },
            tint3: { value: "#EEF7FF" },
          },
          tsCyan: {
            DEFAULT: { value: "#74DAFF" },
            tint1: { value: "#A9E8FF" },
            tint2: { value: "#C4EFFF" },
            tint3: { value: "#E7F8FE" },
          },
          tsGreen: {
            DEFAULT: { value: "#6DBEC4" },
            tint1: { value: "#A2DFD8" },
            tint2: { value: "#D0F5F0" },
            tint3: { value: "#D0FCF9" },
          },
          tsPurple: {
            DEFAULT: { value: "#C678FF" },
            tint1: { value: "#DCADFF" },
            tint2: { value: "#E9CBFF" },
            tint3: { value: "#F2E5FF" },
          },
          tsPink: {
            DEFAULT: { value: "#FFB2BC" },
            tint1: { value: "#FFCED4" },
            tint2: { value: "#FFE5E8" },
            tint3: { value: "#FFF4F6" },
          },
          tsOrange: {
            DEFAULT: { value: "#FEA85F" },
            tint1: { value: "#FFE6C4" },
            tint2: { value: "#FFF3E2" },
            tint3: { value: "#FEFAF5" },
          },
          tsYellow: {
            DEFAULT: { value: "#FCDE18" },
            tint1: { value: "#FEF19F" },
            tint2: { value: "#FFF9D3" },
            tint3: { value: "#FFFCEB" },
          },
          tsMagenta: {
            DEFAULT: { value: "#FE476E" },
            tint1: { value: "#FE7192" },
            tint2: { value: "#FFA4BA" },
            tint3: { value: "#FFDAE3" },
          },
          tsUi: {
            inputBg: { value: "#f6f8fa" },
          },
        },
      },
      keyframes: {
        overlayShow: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        contentShow: {
          "0%": {
            opacity: 0,
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",

  globalCss: {
    "html, body": {
      width: "100%",
      height: "100%",
    },
    html: {
      fontFamily: "optimo",
      fontSize: "16px",
      lineHeight: "24px",
      color: "#1D232F",
    },
    a: {
      textDecoration: "underline dotted",
    },
  },
});
