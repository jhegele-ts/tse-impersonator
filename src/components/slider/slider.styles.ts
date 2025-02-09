import { sva } from "#/css";

export const stylesSlotsSlider = sva({
  slots: ["root", "track", "range", "thumb"],
  base: {
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      userSelect: "none",
      touchAction: "none",
      width: "full",
      height: "20px",
    },
    track: {
      bg: "tsBlack",
      position: "relative",
      flexGrow: 1,
      borderRadius: "full",
      height: "3px",
    },
    range: {
      position: "absolute",
      bg: "tsBlue",
      borderRadius: "full",
      h: "full",
    },
    thumb: {
      display: "block",
      w: "20px",
      h: "20px",
      bg: "white",
      borderRadius: "10px",
      border: "1px solid token(colors.tsBlue)",
      _hover: {
        bg: "tsBlack.tint3",
      },
      _focus: {
        outline: "none",
        borderColor: "transparent",
        boxShadow: "0 0 0 2px token(colors.tsBlue)",
      },
    },
  },
});
