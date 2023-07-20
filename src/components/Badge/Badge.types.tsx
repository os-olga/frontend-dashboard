import { ReactNode } from "react";

export type BadgeProps = {
  text?: string;
  size: BadgeSizeEnum;
  type: BadgeTypeEnum;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
};

export enum BadgeSizeEnum {
  small = "sm",
  medium = "md",
  large = "lg",
}

export enum BadgeTypeEnum {
  info = "info",
  warning = "warning",
}
