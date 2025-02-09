import { RecipeVariantProps, sva } from "#/css";

export const stylesSlotsSelect = sva({
  slots: [
    "trigger",
    "icon",
    "content",
    "scrollButton",
    "viewport",
    "item",
    "itemIndicator",
    "itemIndicatorIcon",
  ],
  base: {
    trigger: {
      h: "32px",
      color: "#4e5461",
      fontSize: "15px",
      display: "inline-flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    icon: {
      color: "tsBlack",
    },
    content: {
      overflow: "hidden",
      bg: "white",
      borderRadius: "6px",
      boxShadow: "md",
    },
    viewport: {
      padding: "5px",
    },
    item: {
      lineHeight: 1,
      color: "#4e5461",
      borderRadius: "3px",
      display: "flex",
      alignItems: "center",
      h: "25px",
      p: "0 35px 0 25px",
      position: "relative",
      userSelect: "none",
      "&[data-disabled]": {
        color: "tsBlack.tint2",
      },
      "&[data-highlighted]": {
        outline: "none",
        bg: "tsBlue.tint2",
      },
    },
    itemIndicator: {
      position: "absolute",
      left: 0,
      w: "25px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
    itemIndicatorIcon: {
      w: "15px",
      h: "15px",
      color: "tsBlue",
    },
    scrollButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "25px",
      bg: "white",
      color: "tsBlack",
      cursor: "default",
    },
  },
  variants: {
    variant: {
      filled: {
        trigger: {
          px: "8px",
          py: "6px",
          bg: "tsUi.inputBg",
          outline: "none",
          borderRadius: "3px",
          borderBottom: "1px solid #a4abb8",
          _hover: {
            borderBottom: "1px solid #888888",
            _focus: {
              borderBottom: "2px solid #2770ef",
            },
          },
          _focus: {
            borderBottom: "2px solid #2770ef",
          },
          "&[data-placeholder]": {
            color: "#707784",
            fontWeight: 300,
          },
        },
      },
      outlined: {
        trigger: {
          color: "1c2330",
          border: "1px solid #C0C6CF",
          px: "16px",
          borderRadius: "6px",
          _hover: {
            borderColor: "#a5acb9",
            _focus: {
              borderColor: "#2770ef",
            },
          },
          _focus: {
            borderColor: "#2770ef",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "outlined",
  },
});

export type StylesSlotsSelect = RecipeVariantProps<typeof stylesSlotsSelect>;
