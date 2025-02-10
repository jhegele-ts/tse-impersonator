import { sva } from "#/css";

export const stylesSlotsInit = sva({
  slots: ["outerContainer", "card", "heading"],
  base: {
    outerContainer: {
      w: "full",
      h: "full",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      minW: "400px",
      maxW: "800px",
      w: "full",
      display: "flex",
      flexDirection: "column",
      borderRadius: "6px",
      boxShadow: "md",
      px: "24px",
      py: "18px",
      gap: "24px",
      border: "1px solid",
      borderColor: "tsBlack.tint3",
    },
    heading: {
      fontSize: "20px",
      fontWeight: 600,
    },
  },
});
