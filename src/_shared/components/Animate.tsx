/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Animation, TransitionProps } from "rsuite";

interface Props {
  setCurrent: (n: number) => void;
}

export default function Animate({
  children,
  inn = true,
  setCurrent,
  animateType,
  others,
}: {
  children: React.ForwardRefExoticComponent<
    ((Props | any) & TransitionProps) & React.RefAttributes<unknown>
  >;
  inn?: boolean;
  setCurrent?: (n: number) => void;
  animateType?: "bounce" | "slide" | "transition" | "collapse" | "fade";
  others?: any;
}) {
  const Component = children;
  if (animateType === "slide")
    return (
      <Animation.Slide in={inn} timeout={5000} unmountOnExit>
        {(props, ref) => (
          <Component {...props} setCurrent={setCurrent} {...others} ref={ref} />
        )}
      </Animation.Slide>
    );
  else
    return (
      <Animation.Bounce in={inn} unmountOnExit transitionAppear timeout={5000}>
        {(props, ref) => (
          <Component {...props} setCurrent={setCurrent} {...others} ref={ref} />
        )}
      </Animation.Bounce>
    );
}
