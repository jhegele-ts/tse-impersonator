import { stylesSlotsSlider } from "./slider.styles";
import * as RSlider from "@radix-ui/react-slider";

export type SliderProps = {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  onValueChange?: (value: number) => void;
};

export const Slider = ({
  value,
  onValueChange,
  defaultValue,
  ...rootProps
}: SliderProps) => {
  const classes = stylesSlotsSlider();

  const handleChange = (newValue: number[]) => {
    if (onValueChange && newValue.length > 0) {
      onValueChange(newValue[0]);
    }
  };

  const useDefaultValue =
    defaultValue === undefined ? undefined : [defaultValue];
  const useValue = value === undefined ? undefined : [value];

  return (
    <RSlider.Root
      className={classes.root}
      {...rootProps}
      defaultValue={useDefaultValue}
      value={useValue}
      onValueChange={handleChange}
    >
      <RSlider.Track className={classes.track}>
        <RSlider.Range className={classes.range} />
      </RSlider.Track>
      <RSlider.Thumb className={classes.thumb} />
    </RSlider.Root>
  );
};
