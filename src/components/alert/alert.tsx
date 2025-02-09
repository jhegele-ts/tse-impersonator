import { styled } from "#/jsx";
import { stylesSlotsAlert, type StylesSlotsAlert } from "./alert.styles";
import { Info, TriangleAlert, OctagonAlert } from "lucide-react";

export type AlertProps = {
  title?: string;
  children?: React.ReactNode;
} & StylesSlotsAlert;

export const Alert = ({ title, children, variant }: AlertProps) => {
  const classes = stylesSlotsAlert({ variant });

  return (
    <styled.div className={classes.outerContainer}>
      <styled.div display="flex" flexDirection="column" gap="8px">
        <styled.div
          display="flex"
          flexDirection="row"
          gap="12px"
          alignItems="center"
        >
          {variant === "info" && <Info className={classes.icon} />}
          {variant === "warn" && <TriangleAlert className={classes.icon} />}
          {variant === "error" && <OctagonAlert className={classes.icon} />}
          <styled.span className={classes.title}>{title}</styled.span>
        </styled.div>
        <styled.div className={classes.content}>{children}</styled.div>
      </styled.div>
    </styled.div>
  );
};
