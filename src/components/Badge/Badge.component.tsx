import React from "react";
import classNames from "classnames";

import { BadgeProps } from "./Badge.types";

import styles from "./Badge.module.scss";

export const BadgeComponent: React.FC<BadgeProps> = ({
  size,
  type,
  className,
  children,
}) => {
  const badgeClass = classNames(
    styles.badge,
    { [styles[`badge_size_${size}`]]: size },
    { [styles[`badge_type_${type}`]]: type },
    className
  );
  return <div className={badgeClass}>{children}</div>;
};

BadgeComponent.displayName = "Badge";
