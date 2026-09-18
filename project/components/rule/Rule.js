import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Rule.module.scss";
import Icon from "../baseComponents/gui/icon/Icon";
import { safeHTML } from "@/utils/ps/frontend";

export default function Rule({title, icon, text, mod}) {
  return (
    <div className={classNames(styles.rule, styles[`rule_${mod}`])}>
      <div className={styles.rule__bg}>

      </div>
      <div className={styles.rule__content}>
        <Icon className={styles.rule__icon} name={icon}/>
        <h3 className={styles.rule__title}>{safeHTML(title)}</h3>
        <p className={styles.rule__text}>{safeHTML(text)}</p>
      </div>
      
    </div>
  );
}

Rule.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
