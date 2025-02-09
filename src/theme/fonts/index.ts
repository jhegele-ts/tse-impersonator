import localFont from "next/font/local";

export const FontBBRollerMono = localFont({
  src: [
    {
      path: "./BB-Roller-Mono/regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./BB-Roller-Mono/medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-bb-roller-mono",
});

export const FontOptimo = localFont({
  src: [
    {
      path: "./Optimo/plain-thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Optimo/plain-ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Optimo/plain-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Optimo/plain-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-optimo",
});
