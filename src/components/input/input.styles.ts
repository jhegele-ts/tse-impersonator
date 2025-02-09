import { cva } from "#/css";

export const stylesInput = cva({
  base: {
    fontSize: "15px",
    color: "#4e5461",
    w: "full",
    h: "32px",
    outline: "none",
    boxSizing: "border-box",
    verticalAlign: "middle",
  },
  variants: {
    variant: {
      filled: {
        px: "8px",
        py: "6px",
        bg: "tsUi.inputBg",
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
        _placeholder: {
          color: "#707784",
          fontWeight: 300,
        },
      },
      outlined: {
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
  defaultVariants: {
    variant: "outlined",
  },
});
