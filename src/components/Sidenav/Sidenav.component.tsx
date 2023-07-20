import React from "react";
import classNames from "classnames";

import { SidenavAction, SidenavLinks } from "../../constants/sidenav";
import { BadgeComponent as Badge } from "../Badge/Badge.component";
import { LogoComponent as Logo } from "../Logo/Logo.component";

import { BadgeSizeEnum, BadgeTypeEnum } from "../Badge/Badge.types";
import { SidenavProps } from "./Sidenav.types";

import styles from "./Sidenav.module.scss";

export const SidenavComponent: React.FC<SidenavProps> = ({
  links = SidenavLinks,
  actions = SidenavAction,
  className,
}) => {
  const sidenavClass = classNames(styles.sidenav, className);

  return (
    <div className={sidenavClass}>
      <Logo />

      <div className={styles.links}>
        {links &&
          links.map((item) => {
            return (
              <div key={item.id} className={styles.link}>
                {item.text === "Notification" && (
                  <Badge
                    type={BadgeTypeEnum.info}
                    size={BadgeSizeEnum.small}
                    className={styles.notify}
                  >
                    6
                  </Badge>
                )}

                <img src={item.icon} alt={item.text} />
                <a href={item.url}>{item.text}</a>
              </div>
            );
          })}
      </div>

      <div className={styles.actions}>
        {actions &&
          actions.map((item) => {
            return (
              <div key={item.id} className={styles.link}>
                <img src={item.icon} alt={item.text} />
                <a href={item.url}>{item.text}</a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

SidenavComponent.displayName = "Sidenav";
