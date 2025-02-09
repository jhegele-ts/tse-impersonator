import { cva } from "#/css";

export const stylesButton = cva({
  base: {
    minW: "80px",
    h: "32px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "full",
    px: "24px",
    py: "6px",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "16.1px",
    verticalAlign: "middle",
    cursor: "pointer",
  },
  variants: {
    variant: {
      primary: {
        color: "white",
        bg: "rgb(39, 112, 239)",
        _hover: { bg: "rgb(35, 89, 182)" },
        _active: { bg: "rgb(22, 55, 114)" },
      },
      secondary: {
        color: "rgb(29, 35, 47)",
        bg: "rgb(234, 237, 242)",
        _hover: { bg: "rgb(219, 223, 231)" },
        _active: { bg: "rgb(192, 198, 207)" },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
