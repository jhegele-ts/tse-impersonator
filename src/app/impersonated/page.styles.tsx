import { sva } from "#/css";

export const stylesSlotsPageImpersonated = sva({
  slots: [
    "outerContainer",
    "controlBar",
    "appEmbed",
    "menuButton",
    "dropdownContent",
    "dropdownArrow",
    "dropdownForm",
  ],
  base: {
    outerContainer: {
      w: "full",
      h: "full",
      display: "flex",
      flexDirection: "column",
    },
    controlBar: {
      w: "full",
      h: "32px",
      bg: "tsBlack",
      color: "white",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      px: "24px",
      justifyContent: "space-between",
    },
    appEmbed: {
      w: "full",
      h: "full",
      flex: 1,
      "& > div": {
        w: "full",
        h: "full",
      },
    },
    menuButton: {
      textDecoration: "underline dotted",
      _hover: {
        textDecoration: "none",
      },
      cursor: "pointer",
    },
    dropdownContent: {
      minW: "350px",
      bg: "white",
      borderRadius: "6px",
      boxShadow: "md",
      px: "16px",
      py: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    dropdownArrow: {
      fill: "white",
    },
    dropdownForm: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
  },
});
