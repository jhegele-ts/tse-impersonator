import { sva } from "#/css";

export const stylesPageHome = sva({
  slots: [
    "outerContainer",
    "card",
    "heading",
    "form",
    "formField",
    "errorMessage",
  ],
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
    form: {
      w: "full",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    formField: {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
    },
    errorMessage: {
      fontSize: "13px",
      fontFamily: "bbRollerMono",
      color: "tsMagenta",
      textTransform: "uppercase",
      fontWeight: "500",
      lineHeight: 1,
      display: "none",
      "&[data-error=true]": {
        display: "block",
      },
    },
  },
});
