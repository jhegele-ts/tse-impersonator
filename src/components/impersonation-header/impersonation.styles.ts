import { sva } from "#/css";

export const stylesSlotsImpersonationHeader = sva({
  slots: ["outerContainer", "title", "timer", "user"],
  base: {
    outerContainer: {
      w: "full",
      px: "24px",
      py: "8px",
      bg: "tsMagenta",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      position: "relative",
      color: "white",
    },
    title: {
      fontWeight: "600",
    },
    timer: {
      fontFamily: "bbRollerMono",
      position: "absolute",
      top: "50%",
      left: "50%",
      transformOrigin: "center",
      transform: "translate(-50%, -50%)",
      "&[data-pulse=true]": {
        animation: "textPulse 2s infinite",
      },
    },
  },
});
