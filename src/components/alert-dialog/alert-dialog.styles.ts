import { sva } from "#/css";

export const stylesSlotsAlertDialog = sva({
  slots: ["overlay", "content", "title", "description"],
  base: {
    overlay: {
      bg: "rgba(0, 0, 0, 0.2)",
      position: "fixed",
      inset: 0,
      animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    },
    content: {
      bg: "white",
      borderRadius: "6px",
      boxShadow: "md",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      w: "90vw",
      maxW: "500px",
      maxH: "85vh",
      padding: "24px",
      animation: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      _focus: {
        outline: "none",
      },
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    title: {
      fontSize: "17px",
      fontWeight: "600",
      margin: 0,
    },
    description: {
      fontSize: "15px",
      lineHeight: 1.5,
    },
  },
});
