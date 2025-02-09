import { ChevronDown, ChevronUp, Check } from "lucide-react";
import { stylesSlotsSelect, type StylesSlotsSelect } from "./select.styles";
import * as RSelect from "@radix-ui/react-select";

export type SelectProps = {
  placeholder?: string;
  children?: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
} & StylesSlotsSelect;

export const Select = ({
  placeholder,
  children,
  value,
  onValueChange,
  variant,
}: SelectProps) => {
  const classes = stylesSlotsSelect({ variant });

  return (
    <RSelect.Root value={value} onValueChange={onValueChange}>
      <RSelect.Trigger className={classes.trigger}>
        <RSelect.Value placeholder={placeholder} />
        <RSelect.Icon className={classes.icon}>
          <ChevronDown />
        </RSelect.Icon>
      </RSelect.Trigger>
      <RSelect.Portal>
        <RSelect.Content className={classes.content}>
          <RSelect.ScrollUpButton className={classes.scrollButton}>
            <ChevronUp />
          </RSelect.ScrollUpButton>
          <RSelect.Viewport className={classes.viewport}>
            {children}
          </RSelect.Viewport>
          <RSelect.ScrollDownButton className={classes.scrollButton}>
            <ChevronUp />
          </RSelect.ScrollDownButton>
        </RSelect.Content>
      </RSelect.Portal>
    </RSelect.Root>
  );
};

export type SelectItemProps = {
  ref?: React.RefObject<HTMLDivElement>;
  value: string;
  children?: React.ReactNode;
};

export const SelectItem = ({ ref, value, children }: SelectItemProps) => {
  const classes = stylesSlotsSelect();

  return (
    <RSelect.Item ref={ref} className={classes.item} value={value}>
      <RSelect.ItemText>{children ?? value}</RSelect.ItemText>
      <RSelect.ItemIndicator className={classes.itemIndicator}>
        <Check className={classes.itemIndicatorIcon} />
      </RSelect.ItemIndicator>
    </RSelect.Item>
  );
};
