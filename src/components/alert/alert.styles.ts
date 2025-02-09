import { sva, RecipeVariantProps } from "#/css";

export const stylesSlotsAlert = sva({
  slots: ["outerContainer", "icon", "title", "content"],
  base: {
    outerContainer: {
      w: "full",
      display: "flex",
      flexDirection: "row",
      gap: "16px",
      borderRadius: "6px",
      borderLeft: "4px solid",
      px: "12px",
      py: "9px",
    },
    icon: {
      w: "20px",
      h: "20px",
    },
    title: {
      fontSize: "16px",
      fontFamily: "optimo",
      fontWeight: 600,
    },
    content: {
      fontSize: "14px",
      fontFamily: "optimo",
    },
  },
  variants: {
    variant: {
      info: {
        outerContainer: {
          bg: "tsBlue.tint3",
          borderColor: "tsBlue",
        },
        icon: {
          color: "tsBlue",
        },
        title: {
          color: "tsBlue",
        },
      },
      warn: {
        outerContainer: {
          bg: "tsYellow.tint3",
          borderColor: "tsYellow",
        },
        icon: {
          color: "tsYellow",
        },
        title: {
          color: "tsYellow",
        },
      },
      error: {
        outerContainer: {
          bg: "tsMagenta.tint3",
          borderColor: "tsMagenta",
        },
        icon: {
          color: "tsMagenta",
        },
        title: {
          color: "tsMagenta",
        },
      },
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export type StylesSlotsAlert = RecipeVariantProps<typeof stylesSlotsAlert>;
