import { styled } from "#/jsx";
import { stylesSlotsAlertDialog } from "./alert-dialog.styles";
import * as RAlertDialog from "@radix-ui/react-alert-dialog";

export type AlertDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  buttons?: {
    cancel?: React.ReactNode;
    action?: React.ReactNode;
  };
};

export const AlertDialog = ({
  open,
  onOpenChange,
  title,
  description,
  buttons,
}: AlertDialogProps) => {
  const classes = stylesSlotsAlertDialog();

  return (
    <RAlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <RAlertDialog.Portal>
        <RAlertDialog.Overlay className={classes.overlay} />
        <RAlertDialog.Content className={classes.content}>
          <RAlertDialog.Title className={classes.title}>
            {title}
          </RAlertDialog.Title>
          {description && (
            <RAlertDialog.Description>{description}</RAlertDialog.Description>
          )}
          {buttons && (
            <styled.div
              display="flex"
              flexDirection="row"
              gap="16px"
              justifyContent="flex-end"
            >
              {buttons.cancel && (
                <RAlertDialog.Cancel asChild>
                  {buttons.cancel}
                </RAlertDialog.Cancel>
              )}
              {buttons.action && (
                <RAlertDialog.Action asChild>
                  {buttons.action}
                </RAlertDialog.Action>
              )}
            </styled.div>
          )}
        </RAlertDialog.Content>
      </RAlertDialog.Portal>
    </RAlertDialog.Root>
  );
};
