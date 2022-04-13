import { NavOptions } from "@ionic/core";

export interface TransitionOptions extends NavOptions {
    progressCallback?: ((ani: Animation | undefined) => void);
    baseEl: any;
    enteringEl: HTMLElement;
    leavingEl: HTMLElement | undefined;
  }