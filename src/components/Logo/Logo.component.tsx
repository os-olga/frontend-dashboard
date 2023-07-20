import React from "react";

import { LogoProps } from "./Logo.types";

import styles from "./Logo.module.scss";

export const LogoComponent: React.FC<LogoProps> = ({
  imageSource = "https://cubex-ua.com/wp-content/uploads/2019/06/Logo-header.svg",
}) => {
  return (
    <div className={styles.logo}>
      <img src={imageSource} alt="logo" />
    </div>
  );
};

LogoComponent.displayName = "Logo";
